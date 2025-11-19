# Scoping & Optional Chaining – JavaScript Assignment

This repository contains JavaScript examples demonstrating:

- let, const, var  
- Block scope vs function scope  
- Optional chaining (?.)  
- Preventing runtime errors when accessing nested properties  

---

## 📁 Files
- `index.js` → Contains solutions for all questions  
- `README.md` → Documentation of the assignment  

---

## 📝 Assignment Tasks

### ⭐ a) Scoping: let vs var

```js
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); // 20
console.log(x); // ReferenceError
