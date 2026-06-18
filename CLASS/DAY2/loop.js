/*Operators in JavaScript
### What is an Operator?

An **operator** is a symbol that performs an operation on values (operands).

Example: `2 + 3` → `+` is the operator, `2` and `3` are operands.


### ⚡ Types of Operators

### (A) Arithmetic Operators

Used for mathematical operations.
Operator	Meaning	Example	Result
+	Addition	5 + 2	7
-	Subtraction	5 - 2	3
*	Multiplication	5 * 2	10
/	Division	10 / 2	5
%	Modulus (remainder)	10 % 3	1
**	Exponentiation	2 ** 3	8
++	Increment	let x=1; x++;	2
--	Decrement	let x=1; x--;	0

### (B) Assignment Operators

Used to assign values to variables.
Operator	Meaning	Example	Equivalent to
=	Assign	x = 5	—
+=	Add & assign	x += 2	x = x + 2
-=	Subtract & assign	x -= 2	x = x - 2
*=	Multiply & assign	x *= 2	x = x * 2
/=	Divide & assign	x /= 2	x = x / 2
%=	Modulus & assign	x %= 2	x = x % 2

### C) Comparison Operators

Used to compare values (returns `true` or `false`).
Operator	Meaning	Example	Result
==	Equal to (loose)	5 == '5'	true
===	Strict equal	5 === '5'	false
!=	Not equal	5 != '5'	false
!==	Strict not equal	5 !== '5'	true
>	Greater than	10 > 5	true
<	Less than	10 < 5	false
>=	Greater or equal	5 >= 5	true
<=	Less or equal	4 <= 5	true

Difference between `==` and `===`:

- `==` compares **values only**.
- `===` compares **values + types**.

### (D) Logical Operators

Used with booleans.
### ) Ternary Operator (Conditional Operator)

Shortcut for `if...else`.

```jsx
let age = 18;
let msg = (age >= 18) ? "Adult" : "Minor";
console.log(msg); // Adult

*/

//loops in js
// ### (A) for Loop

// Best when you know how many times to repeat.
/*
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

### (B) while Loop

Runs as long as condition is true.
let i = 1;
while (i <= 5) {
  console.log("Count: " + i);
  i++;
}

### (C) do...while Loop

Executes at least once before checking condition.
let i = 1;
do {
  console.log("Value: " + i);
  i++;
} while (i <= 5);




*/