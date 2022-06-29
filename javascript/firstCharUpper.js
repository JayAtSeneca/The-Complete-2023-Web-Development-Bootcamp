let name = "john";
let firstChar = name.slice(0,1);
firstChar = firstChar.toUpperCase();
let restOfName = name.slice(1);
name = firstChar + restOfName;
console.log(name);