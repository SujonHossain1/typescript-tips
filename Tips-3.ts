/**
 *  ✅ Topic: Use intersection types to combine multiple types into a single type.
 */

// Suppose we have two existing types, Person and Employee, with different properties.
type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  department: string;
};

// We can create a new type, PersonWithEmployeeInfo, by intersecting Person and Employee types.
type PersonWithEmployeeInfo = Person & Employee;

// Usage:
const employee: PersonWithEmployeeInfo = {
  name: 'John Doe',
  age: 30,
  id: 12345,
  department: 'IT',
};

console.log(employee.name); // Output: John Doe
console.log(employee.department); // Output: IT
