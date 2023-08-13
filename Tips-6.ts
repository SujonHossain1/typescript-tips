/**
 * ✅ Topic: Embrace the power of generics to write flexible and reusable code in TypeScript.
 */

// Example 1: Creating a generic function
function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers); // reversedNumbers will be [5, 4, 3, 2, 1]

const names = ['Alice', 'Bob', 'Charlie'];
const reversedNames = reverseArray(names); // reversedNames will be ['Charlie', 'Bob', 'Alice']

// Example 2: Generic interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 42 }; // numberBox.value will be 42
const stringBox: Box<string> = { value: 'Hello, TypeScript!' }; // stringBox.value will be 'Hello, TypeScript!'
