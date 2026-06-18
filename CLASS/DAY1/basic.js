// ## Conditional Statements

// Conditional statements allow your program to make decisions.

// ---

// ### (A) if Statement

// Executes a block if the condition is true.

// ```jsx
// let age = 20;
// if (age >= 18) {
//   console.log("You can vote");
// }

// ```

/*
### B) if...else Statement

Runs one block if true, another if false.
let age = 15;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}


### (C) if...else if...else

Checks multiple conditions.
let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
  ### (D) switch Statement

Used when you have many conditions for the same variable.
let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Invalid day");
}

**When to use switch?**

- Use `if-else` for **range checks** (like age >= 18).
- Use `switch` for **exact value matching** (like day = 1,2,3).

*/