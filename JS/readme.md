# JavaScript Basics

JavaScript was created by **Brendan Eich** in 1995 while working at **Netscape Communications**.  
- Its first name was **Mocha**, then changed to **LiveScript**, and finally renamed to **JavaScript** in **December 1995**.  

---

## Variable Declarations: `let`, `const`, and `var`

- **`const`**: Must be defined at the time of declaration. Its reference cannot be reassigned.
- **`let`**: Block-scoped, can be reassigned but not redeclared in the same scope.
- **`var`**:  
  - Can be **redeclared** multiple times in the same scope (problematic).  
  - **No block-level scope** (only function or global scope).

### Example:

```js
var x = 10;
var x = 20; // Redeclaration allowed (bad practice)

let y = 10;
// let y = 20; //  Error: redeclaration not allowed

const z = 30;
// z = 40; // Error: reassignment not allowed
```

# Primitive Data Types

- Number → e.g. 42, 3.14
- String → e.g. "Hello"
- Boolean → true, false
- null → special value, but typeof null returns "object" (famous JS bug).
- undefined → declared but not assigned.
- Symbol → unique and immutable value.
- BigInt → large integers beyond Number.MAX_SAFE_INTEGER.

> Primitive data types are immutable (cannot be changed once created).

> Example: 
let str = "Hello";
// str[0] = "Y"; //  Won’t change the string

# Non-Primitive Data Types

- Object
- Array
- Function

> Key difference 

- Primitive types → copied by value.
- Non-primitive types → copied by reference.

> Reason:

- Primitives have fixed size → easy to store directly in memory.
- Objects/arrays can grow large → stored by reference.

> Example: 
typeof null;        // "object" (legacy bug)
typeof undefined;   // "undefined"
typeof NaN;         // "number"

---


**Math.floor(Math.random()*totalNumberOfOutcomes)+shift**