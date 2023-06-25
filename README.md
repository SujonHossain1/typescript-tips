# TypeScript Tips

Click :star: if you like the tips. Follow **[TypeScript Tips](https://facebook.com/TypeScriptTips/)** for updates.
Go to **[Coding Exercise](https://playcode.io/typescript)** for coding specific tips **(Reset Editor before starting)**

### Table of Contents

| No. | Tips                                                              |
| --- | ----------------------------------------------------------------- |
| 1   | [Type Annotations and Inference](#type-annotations-and-inference) |
|     |

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
