# TypeScript Tips

Click :star: if you like the tips. Follow **[TypeScript Tips](https://facebook.com/TypeScriptTips/)** for updates.
Go to **[Coding Exercise](https://playcode.io/typescript)** for coding specific tips **(Reset Editor before starting)**

### Table of Contents

| No. | Tips                                                                                                                                                                                                                        | Code                                                                         |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1   | [Type Annotations and Inference](#type-annotations-and-inference)                                                                                                                                                           | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-1.ts) |
| 2   | [Take advantage of union types to create flexible and expressive code](#take-advantage-of-union-types-to-create-flexible-and-expressive-code)                                                                               | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-2.ts) |
| 3   | [Use intersection types to combine multiple types into a single type](#use-intersection-types-to-combine-multiple-types-into-a-single-type)                                                                                 | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-3.ts) |
| 4   | [Utilize the unknown type for variables with uncertain or dynamically determined values](#utilize-the-unknown-type-for-variables-with-uncertain-or-dynamically-determined-values)                                           | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-4.ts) |
| 5   | [Leverage the 'keyof' operator to work with object keys as types and access object property names dynamically](#leverage-the-keyof-operator-to-work-with-object-keys-as-types-and-access-object-property-names-dynamically) | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-5.ts) |

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
