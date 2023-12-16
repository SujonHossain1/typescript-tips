/**
 * ✅ Topic: Destructuring can make your code more concise and easier to read.
 * 🧨 Importance: Destructuring is a convenient way of extracting multiple values
 *       from data stored in (possibly nested) objects and Arrays.
 */

// ❌ Bad Code
function printPersonDetails(person: { name: string; age: number }) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// ✅ Good Code
function printPersonDetails({ name, age }: { name: string; age: number }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
