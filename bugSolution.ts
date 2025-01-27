function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = ["Jane Doe", "John Smith"];

console.log(greeterArray(user)); // Correct usage with array

let singleUser = "Jane Doe";
console.log(greeter(singleUser)); //Correct usage with single string