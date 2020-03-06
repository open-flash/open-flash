+++
title = "ConstantPool"
description = "ConstantPool"
template = "page-documentation.html"
+++

- Action Code: `0x88`
- Stack: `0 → 0`
- SWF version: `5`

# Abstract AS2

```
// {
//   action: "constant-pool",
//   pool: []
// }

@setConstantPool();
```

```
// {
//   action: "constant-pool",
//   pool: ["foo"]
// }

@setConstantPool("foo");
```

```
// {
//   action: "constant-pool",
//   pool: ["foo", "bar"]
// }

@setConstantPool("foo", "bar");
```

# Adobe documentation

## ActionConstantPool

ActionConstantPool creates a new constant pool, and replaces the old constant pool if one already exists.

| Field              | Type               | Comment                       |
|--------------------|--------------------|-------------------------------|
| ActionConstantPool | ACTIONRECORDHEADER | ActionCode = 0x88             |
| Count              | UI16               | Number of constants to follow |
| ConstantPool       | STRING[Count]      | String constants              |
