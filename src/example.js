// This file has linting errors
const unusedVar = "this is unused";

function example() {
  console.log("Using console which is a warn");
  let str = "double quotes instead of single";
  return str // missing semicolon
}

example();