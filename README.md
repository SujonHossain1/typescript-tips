# TypeScript Tips

Click :star: if you like the tips. Follow **[TypeScript Tips](https://facebook.com/TypeScriptTips/)** for updates.
Go to **[Coding Exercise](https://playcode.io/typescript)** for coding specific tips **(Reset Editor before starting)**

### Table of Contents

| No. | Tips                                                                                                                                                                                                                        | Code                                                                          |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 1   | [Type Annotations and Inference](#type-annotations-and-inference)                                                                                                                                                           | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-1.ts)  |
| 2   | [Take advantage of union types to create flexible and expressive code](#take-advantage-of-union-types-to-create-flexible-and-expressive-code)                                                                               | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-2.ts)  |
| 3   | [Use intersection types to combine multiple types into a single type](#use-intersection-types-to-combine-multiple-types-into-a-single-type)                                                                                 | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-3.ts)  |
| 4   | [Utilize the unknown type for variables with uncertain or dynamically determined values](#utilize-the-unknown-type-for-variables-with-uncertain-or-dynamically-determined-values)                                           | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-4.ts)  |
| 5   | [Leverage the 'keyof' operator to work with object keys as types and access object property names dynamically](#leverage-the-keyof-operator-to-work-with-object-keys-as-types-and-access-object-property-names-dynamically) | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-5.ts)  |
| 6   | [Embrace the power of generics to write flexible and reusable code in TypeScript](#embrace-the-power-of-generics-to-write-flexible-and-reusable-code-in-typeScript)                                                         | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-6.ts)  |
| 7   | [The power of generic interfaces to create adaptable and reusable data structures in TypeScript](#the-power-of-generic-interfaces-to-create-adaptable-and-resuable-data-structures-in-typescript)                           | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-7.ts)  |
| 8   | [Use JSDoc comments to document your code comprehensively](#use-jsdoc-comments-to-document-your-code-comprehensively)                                                                                                       | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-8.ts)  |
| 9   | [Destructuring can make your code more concise and easier to read](#destructuring-can-make-your-code-more-concise-and-easier-to-read)                                                                                       | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-9.ts)  |
| 10  | [Use Awaited<Type> to extract the resolved type of a Promise in TypeScript](#use-awaitedtype-to-extract-the-resolved-type-of-a-promise-in-typescript)                                                                       | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-10.ts) |

1. ### Type Annotations and Inference

   1. **Type Annotations**

   Code we add to tell Typescript what type of value a variable will refer to

   ```ts
   // ✅ Explicit Type Annotations
   const greeting: string = 'Hello, TypeScript Tips! 👋';
   const apples: number = 5;
   const colors: string[] = ['red', 'green', 'blue'];
   ```

   2. **Type Inference**

   Typescript tries to figure out what type of value a variable refers to, so we don't have to write it every time

   ```ts
   // ✅ Type Inference
   const greeting = 'Hello, TypeScript Tips! 👋';
   const apples = 5;
   const colors = ['red', 'green', 'blue'];
   ```

   3. **Type Inference with Functions**

   ```ts
   // ✅ Type Inference with Functions
   const logNumber: (i: number) => void = (i) => {
     console.log(i);
   };
   ```

   4. **Type Inference with Any Values**

   ```ts
   // ✅ Type Inference with Any Values
   const json = '{"x": 10, "y": 20}';
   const coordinates: { x: number; y: number } = JSON.parse(json);
   console.log(coordinates); // {x: 10, y: 20};
   ```

   5. **Type Inference with Delayed Initialization**

   ```ts
   // ✅ Type Inference with Delayed Initialization
   let words = ['red', 'green', 'blue'];
   let foundWord: boolean;

   for (let i = 0; i < words.length; i++) {
     if (words[i] === 'green') {
       foundWord = true;
     }
   }
   ```

   **[[Code of Tips 1]](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-1.ts) [[🧑🏻‍💻 Coding Playground]](https://playcode.io/typescript)**

   **[⬆ Back to Top](#table-of-contents)**

2. ### Take advantage of union types to create flexible and expressive code.

   1. **Example 1: Union of number and string**

   ```ts
   function displayResult(result: number | string): void {
     console.log(result);
   }

   displayResult(10); // Output: 10
   displayResult('Error'); // Output: Error
   ```

   2. **Example 2: Union with type guards**

   ```ts
   function printValue(value: string | number): void {
     if (typeof value === 'string') {
       console.log('String value:', value.toUpperCase());
     } else if (typeof value === 'number') {
       console.log('Numeric value:', value.toFixed(2));
     } else {
       console.log('Invalid value!');
     }
   }

   printValue('hello'); // Output: String value: HELLO
   printValue(3.14159); // Output: Numeric value: 3.14
   printValue(true); // Output: Invalid value!
   ```

   2. **Example 3: Union with type aliases**

   ```ts
   type Shape = 'circle' | 'square' | 'triangle';

   function draw(shape: Shape): void {
     console.log('Drawing', shape);
   }

   draw('circle'); // Output: Drawing circle
   draw('rectangle'); // Error: Argument of type 'rectangle' is not assignable to parameter of type 'Shape'
   ```

   **[[Code of Tips 2]](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-2.ts) [[🧑🏻‍💻 Coding Playground]](https://playcode.io/typescript)**

   **[⬆ Back to Top](#table-of-contents)**

3. ### Use intersection types to combine multiple types into a single type.

   ✅ **TypeScript Intersection**

   ```ts
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
   ```

4. ### Utilize the unknown type for variables with uncertain or dynamically determined values.

   ✅ **TypeScript Unknown**

   ```ts
   function processInput(input: unknown): void {
     if (typeof input === 'string') {
       // Perform string related operations on 'input'
       console.log(input.toUpperCase());
     } else if (Array.isArray(input)) {
       // Process 'input' as an array
       console.log(input.length);
     } else {
       // Handle other cases
       console.log('Unknown type');
     }
   }

   processInput('Hello, TypeScript!'); // Output: HELLO, TYPESCRIPT!
   processInput([1, 2, 3, 4, 5]); // Output: 5
   processInput({ name: 'TypeScript Tips' }); // Output: Unknown type
   ```

5. ### Leverage the 'keyof' operator to work with object keys as types and access object property names dynamically.

   ✅ **TypeScript keyof**

   ```ts
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
   ```

6. ### Embrace the power of generics to write flexible and reusable code in TypeScript.

   ✅ **Creating a generic function**

   ```ts
   function reverseArray<T>(array: T[]): T[] {
     return array.reverse();
   }

   const numbers = [1, 2, 3, 4, 5];
   const reversedNumbers = reverseArray(numbers); // reversedNumbers will be [5, 4, 3, 2, 1]

   const names = ['Alice', 'Bob', 'Charlie'];
   const reversedNames = reverseArray(names); // reversedNames will be ['Charlie', 'Bob', 'Alice']
   ```

   ✅ **Creating a generic function**

   ```ts
   interface Box<T> {
     value: T;
   }

   const numberBox: Box<number> = { value: 42 }; // numberBox.value will be 42
   const stringBox: Box<string> = { value: 'Hello, TypeScript!' }; // stringBox.value will be 'Hello, TypeScript!'
   ```

7. ### The power of generic interfaces to create adaptable and reusable data structures in TypeScript.

   ✅ **Creating a class**

   ```ts
   // Suppose you want to create a flexible repository for various types of data.

   interface Repository<T> {
     getById(id: number): T | undefined;
     getAll(): T[];
     create(item: T): void;
     update(id: number, item: T): void;
     delete(id: number): void;
   }

   // Usage:
   class UserRepository implements Repository<User> {
     // Implement methods here for User data

     getById(id: number): User | undefined {
       // Implementation
     }

     getAll(): User[] {
       // Implementation
     }

     create(user: User): void {
       // Implementation
     }

     update(id: number, user: User): void {
       // Implementation
     }

     delete(id: number): void {
       // Implementation
     }
   }
   ```

8. ### Use JSDoc comments to document your code comprehensively.

   ✅ **JSDoc**

   ```ts
   /**
    * Calculates the sum of two numbers.
    * @param {number} a - The first number.
    * @param {number} b - The second number.
    * @returns {number} The sum of the two numbers.
    */

   function add(a: number, b: number): number {
     return a + b;
   }
   ```

9. ### Destructuring can make your code more concise and easier to read.

   ✅ **Destructuring**

   ```ts
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
   ```

10. ### Use Awaited<Type> to extract the resolved type of a Promise in TypeScript

✅ **Awaited<Type>**

```ts
// Example 1: Basic Usage
async function fetchData(): Promise<string> {
  return 'Data loaded successfully!';
}

const result: Awaited<ReturnType<typeof fetchData>> = await fetchData();
console.log(result); // Output: Data loaded successfully!

// Example 2: Using with async functions
type AsyncFunction<T> = () => Promise<T>;

const asyncFunction: AsyncFunction<number> = async () => {
  return 42;
};

const asyncResult: Awaited<ReturnType<typeof asyncFunction>> =
  await asyncFunction();

console.log(asyncResult); // Output: 42
```
