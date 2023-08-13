/**
 * ✅ Topic: The 'keyof' operator to work with object keys as types and access object property names dynamically.
 */

// Example:
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKey = keyof Person; // This will be a union type: 'name' | 'age' | 'email'

function getProperty(obj: Person, key: PersonKey): unknown {
  return obj[key];
}

const person: Person = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
};

const propertyName: PersonKey = 'name';
const propertyValue = getProperty(person, propertyName); // propertyValue will be 'John Doe'
