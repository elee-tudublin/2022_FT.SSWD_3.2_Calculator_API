// The calculator service performs calculator functions
// such as add, subttract, multiply, divide, etc.

// Add two numbers passed as parameters
// Both params default to NaN (Not a Number) in case either value is missing

function add(a = NaN,b = NaN) {

    // Declare answer value
    let answer = NaN;

    // validation - make sure both values are numbers (i.e. not NaN)
    if (!isNaN(a) && !isNaN(b)) {
        a = Number(a);
        b = Number(b);
        answer = a + b;
    }

    // Return a JS Object containing the result
    return {
        "a": a,
        "b": b,
        "operator": "+",
        "answer": answer
    }
} // End add function

// Module exports
module.exports = {
    add
}