+++
title = "Stack elimination"
description = "Stack elimination"
+++

This article describes how the Open Flash decompiler handles operations on the AVM1 stack.

# Meet the stack

At its core, the ActionScript Virtual Machine 1 is _stack based_. It means that it uses a _stack_ to store its temporary values. A stack is a data structure with two operations. `push` adds a value on top of the stack, `pop` removes the most recent values and returns it.

Most AVM1 operations use the stack : they pop some input values, perform a computation and push their output values. Simple actions always pop and push a fixed amount of values, but there exist some more dynamic actions where the number of `push` and `pop` operations cannot be known statically.

I wrote the specification of two simple actions below. `Add2` computes the sum of the two values at the top of the stack (2 `pop`s, 1 `push`). `Trace` prints the value at the top of the stack (1 `pop`, 0 `push`)

- `Add2`
  1. Pop a value and call it `right`.
  2. Pop a value and call it `left`.
  3. Compute the expression `left + right` and call its value `sum`
  4. Push `sum`

- `Trace`
  1. Pop a value and call it `value`.
  2. Print a string representation of `value`.

# Compiling to the stack

The stack-based nature of the AVM1 is a low level detail. When writing source code, developers use statements and expressions.
During the compilation, one the steps consists in translating statements and expressions with an equivalent stack-based action.

Here is a small ActionScript 2 program. It computes the sum of 3 integers and prints it.

```
trace(1 + 3 + 5); // Should print `9`
```

The compiler converts it to the following assembly. Assembly is a human-readable notation for the bytecode actually executed by the AVM1 interpreter. The syntax is different from high-level languages, I added comments to help:

```
main:           # Label introducing a block of assembly
  push(1, 3)    # Execute the `Push` action: push `1`, then `3`
  add2();       # Execute the `Add2` action
  push(5);      # Execute the `Push` action: push `5`
  add2();       # Execute the `Add2` action
  trace();      # Execute the `Trace` action
  end;          # End the program
```

A useful way to analyze assembly is to keep track of values on the stack after each action. The most recent values (top of the stack) are on the right.

```
main:           # []
  push(1, 3)    # [1, 3]
  add2();       # [4]
  push(5);      # [4, 5]
  add2();       # [9]
  trace();      # []
  end;
```

By tracking the stack this way, we can see that when we reach the `Trace` actions, the value of the top of the stack is `9`, so this program prints `9` as expected.

# Disassembling

Bytecode can exploit the full range of features provided by the AVM1: it can jump to arbitrary locations, directly manipulate the stack, access to various types of memory, etc. It would be extremely hard to decompile assembly into valid ActionScript 2 in a single step because of these differences.

To solve this issue, Open Flash defines a superset of ActionScript 2 called "Operational ActionScript 2" (abbreviated OPAS2). This language is a generalized version of ActionScript with extra statements and expressions to easily represent the corresponding AVM1 actions. The decompiler first converts assembly to OPAS, and then progressively replaces the extra features by regular ActionScript 2.

The OPAS2 extension is designed such that assembly can be translated to it action by action by generating statements corresponding to the action specification. The Open Flash documentation for AVM1 actions describes this conversion for each action.

Extra keywords start with the `@` symbol. The `@pop()` OPAS2 expression corresponds to the `Pop` AVM1 action. The `@push(value);` OPAS statement pushes a single value on the stack. Temporary variable are written as an numeric id prefixed with `@t` (e.g. `@t3` means "temporary variable 3"). Finally, the `@trace(value);` statement correspond to the `trace` operation.

With the feature from the previous paragraph, we can disassemble our assembly:

```
// push(1, 3);
@push(1);
@push(3);

// add2();
@t0 = pop();
@push(pop() + @t0);

// push(5)
@push(5);

// add2()
@t1 = pop();
@push(pop() + @t1);

// trace();
@trace(@pop());
```

Since this article focuses on the stack, I'll skip the how builtins and temporary variables are handle and replace them with regular identifiers. By removing the extra spaces and comments we get our disassembled version:

```
var t0, t1;
@push(1);
@push(3);
t0 = pop();
@push(pop() + t0);
@push(5);
t1 = pop();
@push(pop() + t1);
trace(@pop());
```

# Explicit stack

As a reminder, this is the original AS2 code we are trying to retrieve with the decompiler:
```
trace(1 + 3 + 5);
```

The disassembly step left us with a mess of `@push` and `@pop`. It's time to convert it to regular AS2. OPAS2 has the advantage that only a very small number of instructions can manipulate the stack, as opposed to assembly where almost any action can use it.

The simplest solution to produce regular AS2 is to implement `@push` and `@pop` as AS2 functions operating on the stack. This method will work with any kind of assembly, even when stack usage cannot be statically analyzed. The downside is that the code will be harder to read and introduce some overhead.

The first idea to represent the stack would be to simply use an array with its `push` and `pop` operations. For example something as follow:

```
// @pop implementation
function __ofl_pop(stack) {
  return stack.pop();
}

// @push implementation
function __ofl_push(stack, value) {
  stack.push(value);
}

var __ofl_stack = [];
```

The issue with using such a representation is that the user may modify the `Array.prototype` at runtime and replace its methods. We could try to defend against changes, but it quickly gets very hard because AS2 lets you change any method on any object.

Open Flash tries to avoid global objects anf functions to not be affected by mutations introduced by the user. Instead it creates a plain object with a `null` prototype to define the stack:

```
var __ofl_stack = {
  // Don't inherit from `Object.prototype`
  __proto__: null,
  length: 0,
  push: function(value) {
    this[this.length] = value;
    this.length += 1;
  },
  pop: function() {
    if (this.length > 0) {
      this.length -= 1;
      return this[this.length];
    } else {
      return undefined;
    }
  }
}
```

Once we have our custom stack, we can replace `@pop` with `__ofl_stack.pop()` and `@push(value)` with `__ofl_stack.push(value)`.

```
var __ofl_stack = {
  // Don't inherit properties from `Object.prototype`
  __proto__: null,
  length: 0,
  push: function(value) {
    this[this.length] = value;
    this.length += 1;
  },
  pop: function() {
    if (this.length > 0) {
      this.length -= 1;
      return this[this.length];
    } else {
      return undefined;
    }
  }
}

var t0, t1;
__ofl_stack.push(1);
__ofl_stack.push(3);
t0 = __ofl_stack.pop();
__ofl_stack.push(__ofl_stack.pop() + t0);
__ofl_stack.push(5);
t1 = __ofl_stack.pop();
__ofl_stack.push(__ofl_stack.pop() + t1);
trace(__ofl_stack.pop());
```

It's hard to read but it works. Actually, it always works. We would prefer to avoid to represent and manipulate the stack explicitly, but when all else fails it is at least possible to get rid of `@push` and `@pop` to get regular ActionScript.

It works for the same reason why it's unreadable: it directly corresponds to what the AVM1 does.

## Push-pop reduction

In this section we will add a step between "disassembly" and "explicit stack" generation, so hopefully we don't even need to run the "explicit stack" step.

The idea relies on the observation that if we can find _all_ the uses of a pushed value, we can replace `@push` with a write to a temporary variable and `@pop` with a read. With this transformation, the value does not even go on the stack. This is why it is very important that we can find all the uses: code should not be able to observe any difference. In the example we're following currently, each `@push` is associated with a unique `@pop`. We'll see in a next article how to handle branches.

Here is the transformation we want to apply:

```
{
  @push(value);
  // ...
  @pop()
}
->
{
  @t0 = value;
  // ...
  @t0
}
```

The question is, how to detect which `@pop` corresponds to which `@push`? We do it with a bit of control flow analysis. The goal is to figure out what is the state of the stack at each `pop` and what is the source of the value.

We start by assigning an id for each `@push`. Because we already use the temporary variable `0` an `1`, we'll start counting from `2` for the push ids: this way we'll be able to emit temporaries without conflict.

```
var t0, t1;
@push(1);            // Push id 2
@push(3);            // Push id 3
t0 = pop();
@push(pop() + t0);   // Push id 4
@push(5);            // Push id 5
t1 = pop();
@push(pop() + t1);   // Push id 6
trace(@pop());
```

We then keep track of the stack after each node and note which id was at the top when we hit a `@pop();`:

```
var t0, t1;                                 // []
@push(1);            // Push id 2           // [@t2]
@push(3);            // Push id 3           // [@t2, @t3]
t0 = pop();          // Pop id 3            // [@t2]
@push(pop() + t0);   // Pop id 2, push id 4 // [@t4]
@push(5);            // Push id 5           // [@t4, @t5]
t1 = pop();          // Pop id 5            // [@t4]
@push(pop() + t1);   // Pop id 4, Push id 6 // [@t6]
trace(@pop());       // Pop id 6            // []
```

By keeping track of our stack, we were able to know which `@push` produced the value at each `@pop`. The last step consists in applying the transformation described at the start: replace each `@push` and `@pop` with temporary variable accesses.

Here is the final code after push-pop reduction:

```
var t0, t1, t2, t3, t4, t5, t6;
t2 = 1;
t3 = 3;
t0 = t3;
t4 = t2 + t0;
t5 = 5;
t1 = t5;
t6 = t4 + t1;
trace(t6);
```

We have a lot of temporary variables, but it allowed us to get rid of all the direct stack operations. Because we managed to fully eliminate stack operations, we won't need explicit stack management.

# (A bit of) Temporary elimination

The code produced after the "push-pop elimination" step is already valid and could be emitted. But it can be improved by reducing the number of temporaries.

Temporary variable elimination is an interesting transformation that deserves its own article, but I would still like to touch a bit on it to provide closure for this article.

Similarly to the "explicit stack" or "push-pop elimination" steps, we want our transformation to preserve the behavior of the code: the user should not be able to observe any runtime difference if we apply or not the transformation.

To keep semantics unchanged, we must be very careful when handling constructors, function calls, member accesses or any other action that my potentially trigger visible side-effects.

Fortunately, the temporaries in our example only store integers. An OPAS2 temporary cannot be mutated. When a temporary is initialized with a number literal, we can replace reads to this temporary by copies of the number.

By applying this rule recursively, we get the following code:

```
var t0, t1, t2, t3, t4, t5, t6;
t2 = 1;
t3 = 3;
t0 = 3; // Was `t0 = t3`
t4 = 1 + 3; // Was `t4 = t2 + t0`
t5 = 5;
t1 = 5; // Was `t1 = t5`
t6 = t4 + 5; // Was `t6 = t4 + t1`
trace(t6);
```

We now have some unused temporaries, we can eliminate their assignment:

```
var t4, t6;
1; // Was `t2 = 1`
3; // Was `t3 = 3
3; // Was `t0 = 3`
t4 = 1 + 3; // Was `t4 = t2 + t0`
5; // Was `t5 = 5`
5; // Was `t1 = 5`
t6 = t4 + 5; // Was `t6 = t4 + t1`
trace(t6);
```

And since expression statements with a number literal are a no-ops, we can remove them:
```
var t4, t6;
t4 = 1 + 3;
t6 = t4 + 5;
trace(t6);
```

It's better. The last step is to find temporary write-read pairs (similarly to the pairs in the "push-pop elimination") and notice that it is safe to inline the writes into the reads, so we finally get:
```
trace(1 + 3 + 5);
```

Ultimately, we were able to decompile our assembly back to the original ActionScript 2 code.
