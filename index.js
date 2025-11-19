// ------------------------------
// a) Scoping: let vs var
// ------------------------------

if (true) {
    let x = 10; // block-scoped
    var y = 20; // function-scoped
}

console.log("y =", y); // 20
// console.log("x =", x); // ❌ ReferenceError: x is not defined

/*
Explanation:
- 'var y' is NOT block-scoped, so it is accessible outside the if-block.
- 'let x' IS block-scoped, so accessing it outside the block causes a ReferenceError.
*/


// ------------------------------
// b) Optional Chaining
// ------------------------------

const profile = {
    user: {
        details: {
            email: "test@mail.com"
        }
    }
};

// Safe access using ?. (optional chaining)
console.log("Email:", profile ? .user ? .details ? .email); // test@mail.com
console.log("Phone:", profile ? .user ? .details ? .phone); // undefined (no error)


// ------------------------------
// c) Example: Preventing Runtime Error
// ------------------------------

const data = {
    customer: {
        name: "Bhavya"
            // details does NOT exist
    }
};

// Without optional chaining → ❌ Error
// console.log(data.customer.details.location);

// With optional chaining → ✔ Safe
console.log("Customer Location:", data ? .customer ? .details ? .location);
// Output: undefined (no crash)

/*
Optional chaining checks each nested property safely.
If any part is missing, it returns undefined instead of throwing an error.
*/