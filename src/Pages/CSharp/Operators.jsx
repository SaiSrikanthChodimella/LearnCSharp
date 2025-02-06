import React from "react";

const operatorsData = [
  {
    category: "Primary Operators",
    operators:
      "Member access (x.y), function call (f(x)), array indexing (a[i]), optional chaining (x?.y, x?[y]), postfix increment (x++), postfix decrement (x--), null-forgiving (!), object instantiation (new), type information (typeof), checked/unchecked contexts, default values, nameof expressions, delegate creation, size calculations (sizeof), stack allocation (stackalloc), and pointer access (x->y).",
  },
  {
    category: "Unary Operators",
    operators:
      "Unary plus (+x), unary minus (-x), logical NOT (!x), bitwise complement (~x), prefix increment (++x), prefix decrement (--x), exponentiation (^x), type casting ((T)x), await expressions, address-of (&x), pointer dereference (*x), and boolean conversion (true, false).",
  },
  { category: "Range Operator", operators: "Range expression (x..y)." },
  {
    category: "Pattern Matching and Object Modification",
    operators: "Switch expressions (switch) and object modification (with).",
  },
  {
    category: "Multiplication and Division",
    operators:
      "Multiplication (x * y), division (x / y), and remainder (x % y).",
  },
  {
    category: "Addition and Subtraction",
    operators: "Addition (x + y) and subtraction (x - y).",
  },
  {
    category: "Bitwise Shift",
    operators:
      "Left shift (x << y), right shift (x >> y), and unsigned right shift (x >>> y).",
  },
  {
    category: "Comparison and Type Testing",
    operators:
      "Less than (x < y), greater than (x > y), less than or equal (x <= y), greater than or equal (x >= y), type checking (is), and type conversion (as).",
  },
  {
    category: "Equality Operators",
    operators: "Equal to (x == y) and not equal to (x != y).",
  },
  {
    category: "Logical AND & Bitwise AND",
    operators: "Logical AND and bitwise AND (x & y).",
  },
  {
    category: "Logical XOR & Bitwise XOR",
    operators: "Logical XOR and bitwise XOR (x ^ y).",
  },
  {
    category: "Logical OR & Bitwise OR",
    operators: "Logical OR and bitwise OR (x | y).",
  },
  { category: "Conditional AND", operators: "Short-circuit AND (x && y)." },
  { category: "Conditional OR", operators: "Short-circuit OR (x || y)." },
  {
    category: "Null-Coalescing Operator",
    operators: "Null-coalescing (x ?? y).",
  },
  {
    category: "Ternary Operator",
    operators: "Conditional evaluation (c ? t : f).",
  },
  {
    category: "Assignment & Lambda Expression",
    operators:
      "Assignment (x = y), compound assignments (x += y, x -= y, x *= y, x /= y, x %= y, x &= y, x |= y, x ^= y, x <<= y, x >>= y, x >>>= y, x ??= y), and lambda expressions (=>).",
  },
];

const OperatorsTable = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Operators</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.category}</td>
          <td>{item.operators}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Operators = () => <OperatorsTable data={operatorsData} />;

export default Operators;
