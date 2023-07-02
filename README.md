# TypeScript Tips

Click :star: if you like the tips. Follow **[TypeScript Tips](https://facebook.com/TypeScriptTips/)** for updates.
Go to **[Coding Exercise](https://playcode.io/typescript)** for coding specific tips **(Reset Editor before starting)**

### Table of Contents

| No. | Tips                                                                                                                                          | Code                                                                         |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1   | [Type Annotations and Inference](#type-annotations-and-inference)                                                                             | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-1.ts) |
| 2   | [Take advantage of union types to create flexible and expressive code](#take-advantage-of-union-types-to-create-flexible-and-expressive-code) | [Code](https://github.com/SujonHossain1/typescript-tips/blob/main/Tips-2.ts) |

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
