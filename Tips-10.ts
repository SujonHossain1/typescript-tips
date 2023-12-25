// Tip: Use Awaited<Type> to extract the resolved type of a Promise in TypeScript.

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
