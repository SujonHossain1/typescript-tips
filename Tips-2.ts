// ✅ Topic: Take advantage of union types to create flexible and expressive code.

// Example 1: Union of number and string
function displayResult(result: number | string): void {
  console.log(result);
}

displayResult(10); // Output: 10
displayResult('Error'); // Output: Error

// Example 2: Union with type guards
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

// Example 3: Union with type aliases
type Shape = 'circle' | 'square' | 'triangle';

function draw(shape: Shape): void {
  console.log('Drawing', shape);
}

draw('circle'); // Output: Drawing circle
draw('rectangle'); // Error: Argument of type 'rectangle' is not assignable to parameter of type 'Shape'
