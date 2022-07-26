// To Do: Reverse a string


//the following is the first method to reverse a string using built-in functions:
function reverseString(str) {
    //turn string into a new array using split()
    let arrayStr = str.split("");
    //reverse the new array using reverse()
    let reverseArrayStr = arrayStr.reverse();
    //join the array into a new string using join ()
    let reverseStr = reverseArrayStr.join("");
    return reverseStr;
}

reverseString("I understand code");

//chaining the above method together:
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");



//the following is how to reverse a string using recursion (long way to do this)
function reverseString(str) {
    if(str === "")
    return "";

    else
        return reverseString(str.substr(1)) + str.charAt(0);
}


//the following is a third way to reverse a string using conitional (ternary) Operator. similar to the syntax of recursive functions
function reverseString(str) {
    return (str === '') ? '': reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
