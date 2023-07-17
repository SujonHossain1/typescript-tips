/**
 * ✅ Topic: Utilize the 'unknown' type for variables with uncertain or dynamically determined values.
 */

// Example:
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

// Usage:
processInput('Hello, TypeScript!'); // Output: HELLO, TYPESCRIPT!
processInput([1, 2, 3, 4, 5]); // Output: 5
processInput({ name: 'TypeScript Tips' }); // Output: Unknown type
