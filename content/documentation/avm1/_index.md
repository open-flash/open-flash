+++
title = "AVM1 Reference"
description = "Description of the AVM1 bytecode"
template = "section-documentation.html"
+++

- [AVM1 actions](@/documentation/avm1/actions/_index.md)

# AVM1 representation

At the lowest level, AVM1 is compiled into a buffer containing AVM1 bytecode. There is no particular structure in this compiled bytecode. It is only intended to read a single raw action at a given position at a time.

To perform static analysis or compile bytecode, it is useful to have a higher level representation for groups actions. Adobe's SWF specification uses a _sequence of action records_ ("ACTIONRECORD \[zero or more]"). Open flash uses a more advanced representation called a _Control Flow Graph_ (CFG).

## Limitations of the sequence of actions

The _sequence of actions_ view used by Adobe's specification is deeply flawed. It does not abstract the low-level byte encoding while being unable to describe some of the behavior of the interpreter. Adobe's interpreter only has a local view in the bytecode, only running one action at a time. The following features are supported by Adobe's player but not the _sequence of actions_ representation:

- Overlapping actions
- Overlapping function, `try`, `catch`, `finally` and `with` bodies
- Jumping over slices containing garbage code that is never executed

The core invalid assumption is that each action is followed by another action. Some actions (such as `Return` or `Throw`) don't have to be followed by another action as they end control flow. Other actions (`If`, `Jump`) allow to jump at arbitrary positions that wouldn't be found by only scanning the bytecode sequentially.

## Control Flow Graph

The _control flow graph_ is a classic structure used compilers and analyzers to represent the runtime semantics of code. It consists of _blocks_ containing code, the blocks are linked through _edges_ representing the possible transitions between blocks. For example an `If` action is represented with two edges: one pointing to the _block_ to run in the `true` case and the other one for the `false` case.

TODO: Add example with visualization

Note that AVM1 blocks can be nested. This is used for function definitions, `With` actions and `Try` actions. Strictly speaking, Open Flash uses a "hypergraph".

A block represents a linear portion of bytecode. Compared to Adobe's single sequence of actions, a CFG can contain _multiple_ blocks. There are no restrictions between blocks: their bytecode can be disjoint or overlap.

Each CFG block has two parts:
- A list of simple actions. These actions are ran sequentially from start to end or until an error is raised. You cannot jump in or out of this list.
- A control flow section. This part describes what to do after this block: jump to another block, return from the function, enter a `With` block, etc. The actual behavior depends on the type of the block

Open Flash defines the following types of blocks:
- Simple: Unconditional jump, either to another block or end of the function.
- If: Jump to one of two blocks based on the top of the stack.
- WaitForFrame, WaitForFrame2: Jump to one of two blocks based on loaded frames.
- Return: Return a value from the current function.
- Throw: Throw an exception.
- Try: Enter a `try` block.
- With: Enter a `with` block.
- Error: Corrupted bytecode forcing an interruption of the interpreter.

# AVM1 parser

The role of the AVM1 parser is to build the control flow graph from the AVM1 bytecode.

The main challenge of the parser is to figure out where the blocks start.

- Entry point
- Target of any kind of jump (if, jump, waitForFrame, waitForFrame2)
- Can be reached from 2 or more overlapping actions with the same end
