+++
title = "Application Expression"
description = "Update Expression"
template = "page-documentation.html"
+++

# Member&#8288;Expression

A term representing property access, function calls and object instantiation. The term `MemberExpression` is relatively complex to handle how the `new` operator and _[Arguments]_ are matched.

The grammar can be expressed as saying that you must greadily consume the `new` operators on the left and match it with the most _[Arguments]_ as possible. If there are not enough _[Arguments]_ it results in a default instantiation (e.g. `new a`), this is equivalent to implicitly adding empty `()` arguments to match all the `new` operators. Once the new operators are all matched (with explicit or implicit arguments), the expression is balanced and any extra arguments correspond to a call expression.

It can be summarized as saying that arguments are bound "more tightly" to the `new` operator if present.

## Examples

Here are some examples describing the syntax tree from each member expression.

```
a
// MemberExpression:                        `a`
//   NewMemberExpression:                   `a`
//     BalancedMemberExpression:            `a`
//       PrimaryExpression:                 `a`
```

```
new a
// MemberExpression:                        `new a`
//   NewMemberExpression:                   `new a`
//     NewMemberExpression:                 `    a`
//       BalancedMemberExpression: `a`          `a`
//         PrimaryExpression: `a`               `a`
```

```
a()
// MemberExpression:                        `a()`
//   CallMemberExpression:                  `a()`
//     BalancedMemberExpression:            `a  `
//       PrimaryExpression:                 `a`
//     Arguments:                           ` ()`
```

```
new a()
// MemberExpression:                        `new a()`
//   NewMemberExpression:                   `new a()`
//     BalancedMemberExpression:            `new a()`
//       BalancedMemberExpression:          `    a  `
//         PrimaryExpression                    `a`
//       Arguments:                         `     ()`
```

```
new new a
// MemberExpression:                        `new new a`
//   NewMemberExpression:                   `new new a`
//     NewMemberExpression:                 `    new a`
//       NewMemberExpression:                   `    a`
//         BalancedMemberExpression:                `a`
//           PrimaryExpression:                     `a`
```

```
a()()
// MemberExpression:                        `a()()`
//   CallMemberExpression:                  `a()()`
//     CallMemberExpression:                `a()  `
//       BalancedMemberExpression:          `a  `
//         PrimaryExpression:               `a`
//       Arguments:                         ` ()`
//     Arguments:                           `   ()`
```

```
new new a()()
// MemberExpression:                        `new new a()()`
//   NewMemberExpression:                   `new new a()()`
//     BalancedMemberExpression:            `new new a()()`
//       BalancedMemberExpression:          `    new a()  `
//         BalancedMemberExpression:            `    a  `
//           PrimaryExpression:                     `a`
//         Arguments:                           `     ()`
//       Arguments:                         `           ()`
```

```
new new a()
// MemberExpression:                        `new new a()`
//   NewMemberExpression:                   `new new a()`
//     NewMemberExpression:                 `    new a()`
//       BalancedMemberExpression:              `new a()`
//         BalancedMemberExpression:            `    a  `
//           PrimaryExpression:                     `a`
//         Arguments:                           `     ()`
```

```
new a()()
// MemberExpression:                        `new a()()`
//   CallMemberExpression:                  `new a()()`
//     NewMemberExpression:                 `new a()`
//       BalancedMemberExpression:          `new a()`
//         BalancedMemberExpression:        `    a  `
//           PrimaryExpression:                 `a`
//         Arguments:                       `     ()`
//   Arguments:                             `       ()`
```

## Syntax

> **<sup>Syntax</sup>**\
> _MemberExpression_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[NewMemberExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; |  _[CallMemberExpression]_\
> &nbsp;&nbsp; }

# New&#8288;Member&#8288;Expression

Represents a member expression with zero or more `new` operators than _Arguments_. Excess `new` operators can be interpreted as matched with implicit `()` _Arguments_ term.

## Examples

```
new Array
```

```
new Array()
```

> **<sup>Syntax</sup>**\
> _NewMemberExpression_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[BalancedMemberExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | `new`  _[NewMemberExpression]_\
> &nbsp;&nbsp; }

# Balanced&#8288;Member&#8288;Expression

Represents a member expression with the same number of `new` operators on the left as _[Arguments]_ on the right.

> **<sup>Syntax</sup>**\
> _BalancedMemberExpression_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[PrimaryExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; |  _[BalancedMemberExpression]_ _[Trivia]_? _[MemberKey]_\
> &nbsp;&nbsp; &nbsp;&nbsp; |  `new` _[BalancedMemberExpression]_ _[Trivia]_? _[Arguments]_\
> &nbsp;&nbsp; }

# Call&#8288;Member&#8288;Expression

Represents a member expression with strictly more _[Arguments]_ on the right than `new` operators on the left.

> **<sup>Syntax</sup>**\
> _CallMemberExpression_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[BalancedMemberExpression]_ _[Trivia]_? _[Arguments]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[CallMemberExpression]_ _[Trivia]_? _[Arguments]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[AbstractPseudoCall]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _[CallMemberExpression]_ _[Trivia]_? _[MemberKey]_\
> &nbsp;&nbsp; }

# Member&#8288;Key

> **<sup>Syntax</sup>**\
> _MemberKey_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; `[` _[Trivia]_? _[Expression]_ _[Trivia]_? `]`\
> &nbsp;&nbsp; &nbsp;&nbsp; |  `.` _[Trivia]_? _[Identifier]_\
> &nbsp;&nbsp; }

# Arguments

> **<sup>Syntax</sup>**\
> _Arguments_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; `(` _[Trivia]_? `)`\
> &nbsp;&nbsp; &nbsp;&nbsp; |  `(` _[Trivia]_? _argumentList_ _[Trivia]_? `)`\
> &nbsp;&nbsp; }
>
> _argumentList_ :\
> &nbsp;&nbsp; {\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; _[AssignmentExpression]_\
> &nbsp;&nbsp; &nbsp;&nbsp; | _argumentList_ _[Trivia]_? `,` _[Trivia]_? _[AssignmentExpression]_\
> &nbsp;&nbsp; }

[Trivia]: @/documentation/as2/trivia.md#trivia
[Expression]: @/documentation/as2/expression.md
[AssignmentExpression]: @/documentation/as2/expressions/assignment-expression.md
[UnaryExpression]: @/documentation/as2/expressions/unary-expression.md#unary-expression
[UpdateExpression]: @/documentation/as2/expressions/update-expression.md#update-expression
[BalancedMemberExpression]: @/documentation/as2/expressions/member-expression.md#balanced-member-expression
[NewMemberExpression]: @/documentation/as2/expressions/member-expression.md#new-member-expression
[CallMemberExpression]: @/documentation/as2/expressions/member-expression.md#call-member-expression
[MemberKey]: @/documentation/as2/expressions/member-expression.md#member-key
[Arguments]: @/documentation/as2/expressions/member-expression.md#arguments
[AbstractPseudoCall]: @/documentation/as2/expressions/abstract-pseudo-call.md
[PrimaryExpression]: @/documentation/as2/expressions/primary-expression.md
[avm1-pop]: @/documentation/avm1/actions/pop.md
