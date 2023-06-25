/**
 * ✅ Topic: Type Annotations and Inference
 * 🔥 Type Annotations: Code we add to tell Typescript what type of value a variable will refer to
 * 🔥 Type Inference: Typescript tries to figure out what type of value a variable refers to
 */

// ✅ Explicit Type Annotations
const greeting: string = 'Hello, TypeScript Tips! 👋';
const apples: number = 5;
const colors: string[] = ['red', 'green', 'blue'];

// ✅ Type Inference ( TypeScript automatically infers the type of the value)
const greeting2 = 'Hello, TypeScript Tips! 👋'; // string
const apples2 = 5; //  number
const colors2 = ['red', 'green', 'blue']; // string[]

// ✅ Function parameter and return type annotations
function multiply(a: number, b: number): number {
  return a * b;
}

// ✅ Object with explicit type annotation
const user: { name: string; age: number } = {
  name: 'John Doe',
  age: 30,
};
