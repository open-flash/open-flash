+++
title = "Abstract Extension"
description = "Open Flash Documentation"
template = "section-documentation.html"
+++

**Abstract ActionScript 2** (AAS2) is a language that is a _superset_ of regular **ActionScript 2**. It adds extra features to be able to represent all bytecode operation of the ActionScript Virtual Machine.

Because any AVM1 bytecode has a corresponding OPAS2 source text, it serves as a high-level representation of the underlying bytecode and can be used for decompilation.

# Memory

OPAS2 exposes the different types of memory available to AVM1 byte code:

- Strings from the current constant pool. The constant pool is an array of the strings. It is initially empty, you can set its value at any time (`@constantPool` statement / `constantPool` action). An access to the pool is denoted by the index in decimal prefixed by `@c`. Evaluating this expression returns the value at the corresponding index in the current pool. For example, accessing the constant at index `12` is denoted with `@c12`. Trying to assign a value to a constant is a syntax error (`@c3 = "Foo";` is an error).

- Local registers. You can access local registers through their id prefixed by `@r`. For example the expression `@r23` returns the value of the local register 23 at the time it is evaluated. You can also assign values to registers: `@r5 = 10;`

- Temporary variables. These variables represent temporary values used while manipulating the stack. You can't reassign a temporary variable. The temporary variables are identified with a numeric id prefixed by `@t`. For example `@t0` evaluates to the temporary with the id `0`.

- Dispatch targets: labels used for dynamic dispatch (TODO)

# Builtins

OPAS2 provides syntax to access AVM builtins unambiguously, without any risk of name shadowing.

- `@global`
- `@trace`
- `@undefined`
- ... (todo)

# Statement

TODO
