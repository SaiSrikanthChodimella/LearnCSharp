import React from "react";

const Operators = () => {
  const operators = [
    {
      category: "Primary",
      operators:
        "x.y, f(x), a[i], x?.y, x?[y], x++, x--, x!, new, typeof, checked, unchecked, default, nameof, delegate, sizeof, stackalloc, x->y",
    },
    {
      category: "Unary",
      operators:
        "+x, -x, !x, ~x, ++x, --x, ^x, (T)x, await, &x, *x, true and false",
    },
    { category: "Range", operators: "x..y" },
    { category: "Switch and with expressions", operators: "switch, with" },
    { category: "Multiplicative", operators: "x * y, x / y, x % y" },
    { category: "Additive", operators: "x + y, x – y" },
    { category: "Shift", operators: "x << y, x >> y, x >>> y" },
    {
      category: "Relational and type-testing",
      operators: "x < y, x > y, x <= y, x >= y, is, as",
    },
    { category: "Equality", operators: "x == y, x != y" },
    {
      category: "Boolean logical AND or bitwise logical AND",
      operators: "x & y",
    },
    {
      category: "Boolean logical XOR or bitwise logical XOR",
      operators: "x ^ y",
    },
    {
      category: "Boolean logical OR or bitwise logical OR",
      operators: "x | y",
    },
    { category: "Conditional AND", operators: "x && y" },
    { category: "Conditional OR", operators: "x || y" },
    { category: "Null-coalescing operator", operators: "x ?? y" },
    { category: "Conditional operator", operators: "c ? t : f" },
    {
      category: "Assignment and lambda declaration",
      operators:
        "x = y, x += y, x -= y, x *= y, x /= y, x %= y, x &= y, x |= y, x ^= y, x <<= y, x >>= y, x >>>= y, x ??= y, =>",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Operators</th>
        </tr>
      </thead>
      <tbody>
        {operators.map((item, index) => (
          <tr key={index}>
            <td>{item.category}</td>
            <td>{item.operators}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Operators;
