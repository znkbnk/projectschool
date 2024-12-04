const questions = [
  {
    id: 1,
    text: "Write a React component that takes a list of items as a prop and displays them as a styled list. Each item should have a unique key.",
    solution: `
      const List = ({ items }) => (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    `,
    testCases: [
      {
        inputs: [{ items: ["Apple", "Banana", "Cherry"] }],
        expectedOutput: "<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>",
      },
    ],
  },
  {
    id: 2,
    text: "Create a JavaScript function that removes duplicates from an array.",
    solution: `
      const removeDuplicates = (arr) => [...new Set(arr)];
    `,
    testCases: [
      { inputs: [[1, 2, 2, 3]], expectedOutput: [1, 2, 3] },
      { inputs: [["a", "b", "b", "c"]], expectedOutput: ["a", "b", "c"] },
    ],
  },
  {
    id: 3,
    text: "Write a React component that displays a greeting message. Pass the message as a prop.",
    solution: `
      const Greeting = (props) => <h1>{props.message}</h1>;
    `,
    testCases: [
      { inputs: [{ message: "Hello, World!" }], expectedOutput: "<h1>Hello, World!</h1>" },
      { inputs: [{ message: "Welcome!" }], expectedOutput: "<h1>Welcome!</h1>" },
    ],
  },
  {
    id: 4,
    text: "Create a JavaScript function that takes an array of numbers and returns the sum of all elements.",
    solution: `
      const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);
    `,
    testCases: [
      { inputs: [[1, 2, 3, 4]], expectedOutput: 10 },
      { inputs: [[10, -10, 5]], expectedOutput: 5 },
    ],
  },
  {
    id: 5,
    text: "Create a React component that takes a number as a prop and displays it as a counter.",
    solution: `
      const Counter = (props) => <p>Counter: {props.count}</p>;
    `,
    testCases: [
      { inputs: [{ count: 5 }], expectedOutput: "<p>Counter: 5</p>" },
      { inputs: [{ count: 0 }], expectedOutput: "<p>Counter: 0</p>" },
    ],
  },
  {
    id: 6,
    text: "Write a JavaScript function that takes a string and returns it reversed.",
    solution: `
      const reverseString = (str) => str.split('').reverse().join('');
    `,
    testCases: [
      { inputs: ["hello"], expectedOutput: "olleh" },
      { inputs: ["JavaScript"], expectedOutput: "tpircSavaJ" },
    ],
  },
  {
    id: 7,
    text: "Write a React component that takes an array of strings as a prop and renders them as a list.",
    solution: `
      const StringList = (props) => (
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    `,
    testCases: [
      { inputs: [{ items: ["Apple", "Banana"] }], expectedOutput: "<ul><li>Apple</li><li>Banana</li></ul>" },
    ],
  },
  {
    id: 8,
    text: "Create a function that checks if a given string is a palindrome.",
    solution: `
      const isPalindrome = (str) => str === str.split('').reverse().join('');
    `,
    testCases: [
      { inputs: ["racecar"], expectedOutput: true },
      { inputs: ["hello"], expectedOutput: false },
    ],
  },
    
  {
    id: 9,
    text: "Write a function that returns the largest number in an array.",
    solution: `
      const findLargest = (arr) => Math.max(...arr);
    `,
    testCases: [
      { inputs: [[1, 2, 3, 4, 5]], expectedOutput: 5 },
      { inputs: [[-10, -20, 0]], expectedOutput: 0 },
    ],
  },
  {
    id: 10,
    text: "Write a JavaScript function that returns a string with the numbers from 1 to 100, but for multiples of three return 'Fizz' instead of the number and for multiples of five return 'Buzz'. For numbers which are multiples of both three and five, return 'FizzBuzz'. The numbers or words should be separated by commas.",
    solution: `
    const fizzBuzz = () => {
      let result = [];
      for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          result.push("FizzBuzz");
        } else if (i % 3 === 0) {
          result.push("Fizz");
        } else if (i % 5 === 0) {
          result.push("Buzz");
        } else {
          result.push(i);
        }
      }
      return result.join(",");
    };
    `,
    testCases: [
      {
        inputs: [],
        expectedOutput: [
          "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz", 
          "16", "17", "Fizz", "19", "Buzz", "Fizz", "22", "23", "Fizz", "Buzz", "26", "Fizz", "28", "29", "FizzBuzz", 
          "31", "32", "Fizz", "34", "Buzz", "Fizz", "37", "38", "Fizz", "Buzz", "41", "Fizz", "43", "44", "FizzBuzz", 
          "46", "47", "Fizz", "49", "Buzz", "Fizz", "52", "53", "Fizz", "Buzz", "56", "Fizz", "58", "59", "FizzBuzz", 
          "61", "62", "Fizz", "64", "Buzz", "Fizz", "67", "68", "Fizz", "Buzz", "71", "Fizz", "73", "74", "FizzBuzz", 
          "76", "77", "Fizz", "79", "Buzz", "Fizz", "82", "83", "Fizz", "Buzz", "86", "Fizz", "88", "89", "FizzBuzz", 
          "91", "92", "Fizz", "94", "Buzz", "Fizz", "97", "98", "Fizz", "Buzz"
        ],
      },
    ],
  },
  

  
];

export default questions;
