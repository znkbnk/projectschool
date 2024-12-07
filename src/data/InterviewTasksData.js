const questions = [
  {
    id: 1,
    type: "React",
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
    type: "Functions",
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
    type: "React",
    text: "Write a React component that displays a greeting message. Pass the message as a prop.",
    solution: `
      const Greeting = (props) => <h1>{props.message}</h1>;
    `,
    testCases: [
      {
        inputs: [{ message: "Hello, World!" }],
        expectedOutput: "<h1>Hello, World!</h1>",
      },
      {
        inputs: [{ message: "Welcome!" }],
        expectedOutput: "<h1>Welcome!</h1>",
      },
    ],
  },
  {
    id: 4,
    type: "Functions",
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
    type: "React",
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
    type: "Functions",
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
    type: "React",
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
      {
        inputs: [{ items: ["Apple", "Banana"] }],
        expectedOutput: "<ul><li>Apple</li><li>Banana</li></ul>",
      },
    ],
  },
  {
    id: 8,
    type: "Functions",
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
    type: "Functions",
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
    type: "Functions",
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
          "1",
          "2",
          "Fizz",
          "4",
          "Buzz",
          "Fizz",
          "7",
          "8",
          "Fizz",
          "Buzz",
          "11",
          "Fizz",
          "13",
          "14",
          "FizzBuzz",
          "16",
          "17",
          "Fizz",
          "19",
          "Buzz",
          "Fizz",
          "22",
          "23",
          "Fizz",
          "Buzz",
          "26",
          "Fizz",
          "28",
          "29",
          "FizzBuzz",
          "31",
          "32",
          "Fizz",
          "34",
          "Buzz",
          "Fizz",
          "37",
          "38",
          "Fizz",
          "Buzz",
          "41",
          "Fizz",
          "43",
          "44",
          "FizzBuzz",
          "46",
          "47",
          "Fizz",
          "49",
          "Buzz",
          "Fizz",
          "52",
          "53",
          "Fizz",
          "Buzz",
          "56",
          "Fizz",
          "58",
          "59",
          "FizzBuzz",
          "61",
          "62",
          "Fizz",
          "64",
          "Buzz",
          "Fizz",
          "67",
          "68",
          "Fizz",
          "Buzz",
          "71",
          "Fizz",
          "73",
          "74",
          "FizzBuzz",
          "76",
          "77",
          "Fizz",
          "79",
          "Buzz",
          "Fizz",
          "82",
          "83",
          "Fizz",
          "Buzz",
          "86",
          "Fizz",
          "88",
          "89",
          "FizzBuzz",
          "91",
          "92",
          "Fizz",
          "94",
          "Buzz",
          "Fizz",
          "97",
          "98",
          "Fizz",
          "Buzz",
        ],
      },
    ],
  },
  {
    id: 11,
    type: "Functions",
    text: "Write a recursive function that determines if a number is even.",
    solution: `
      const isEven = (n) => {
        if (n === 0) return true;
        else if (n === 1) return false;
        else if (n < 0) return isEven(-n);
        else return isEven(n - 2);
      };
    `,
    testCases: [
      { inputs: [4], expectedOutput: true },
      { inputs: [7], expectedOutput: false },
      { inputs: [-2], expectedOutput: true },
      { inputs: [-5], expectedOutput: false },
      { inputs: [0], expectedOutput: true },
    ],
  },
  {
    id: 12,
    type: "Functions",
    text: "Write two functions: one that creates an array of numbers within a range (supporting both increasing and decreasing ranges), and another that calculates the sum of an array of numbers.",
    solution: `
    const range = (start, end, step = start < end ? 1 : -1) => {
      const array = [];
      if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
      } else {
        for (let i = start; i >= end; i += step) array.push(i);
      }
      return array;
    };
    
    const sum = array => array.reduce((total, value) => total + value, 0);
    `,
    testCases: [
      { inputs: [1, 10], expectedOutput: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      { inputs: [10, 1, -1], expectedOutput: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
      { inputs: [1, 5], expectedOutput: [1, 2, 3, 4, 5] },
      { inputs: [5, 1, -1], expectedOutput: [5, 4, 3, 2, 1] },
    ],
  },
  {
    id: 13,
    text: "Write a function that compares two objects deeply to check if they are equal. The function should return `true` if the objects are deeply equal, and `false` otherwise. Deep equality means that objects must have the same keys with the same values, including nested objects and arrays.",
    type: "JavaScript",
    solution: `
  const deepEqual = (a, b) => {
    if (a === b) return true;
  
    if (a == null || typeof a !== 'object' ||
        b == null || typeof b !== 'object') return false;
  
    const keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length !== keysB.length) return false;
  
    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  };
  `,
    testCases: [
      {
        inputs: [
          { a: 1, b: { c: 2 } },
          { a: 1, b: { c: 2 } },
        ],
        expectedOutput: true,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
      {
        inputs: [
          { a: 1, b: { c: 2 } },
          { a: 1, b: { c: 3 } },
        ],
        expectedOutput: false,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
      {
        inputs: [
          { a: 1, b: [1, 2] },
          { a: 1, b: [1, 2] },
        ],
        expectedOutput: true,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
      {
        inputs: [
          { a: 1, b: [1, 2] },
          { a: 1, b: [1, 3] },
        ],
        expectedOutput: false,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
      {
        inputs: [
          { a: 1, b: null },
          { a: 1, b: null },
        ],
        expectedOutput: true,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
      {
        inputs: [
          { a: 1, b: null },
          { a: 1, b: undefined },
        ],
        expectedOutput: false,
        run: (deepEqual, _, __, ___, inputs) => deepEqual(...inputs),
      },
    ],
  },
  {
    id: 14,
    type: "Algorithms",
    text: "Create a JavaScript function that counts all palindromic substrings in a given string.",
    solution: `
    const countPalindromicSubstrings = (s) => {
      let count = 0;
      const isPalindrome = (str, start, end) => {
        while (start >= 0 && end < str.length && str[start] === str[end]) {
          count++;
          start--;
          end++;
        }
      };
      for (let i = 0; i < s.length; i++) {
        isPalindrome(s, i, i);
        isPalindrome(s, i, i + 1);
      }
      return count;
    };
  `,
    testCases: [
      { inputs: ["abba"], expectedOutput: 6 }, // Palindromes: 'a', 'b', 'b', 'a', 'bb', 'abba'
      { inputs: ["racecar"], expectedOutput: 10 }, // Palindromes: 'r', 'a', 'c', 'e', 'c', 'a', 'r', 'cec', 'aceca', 'racecar'
      { inputs: ["abc"], expectedOutput: 3 }, // Palindromes: 'a', 'b', 'c'
    ],
  },
  {
    id: 15,
    type: "Algorithms",
    text: "Create a JavaScript function that finds all unique pairs in an array that sum up to a given target.",
    solution: `
    function findPairSums(arr, target) {
      const seen = new Set();
      const pairs = new Set();

      for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
          const pair = [Math.min(num, complement), Math.max(num, complement)].toString();
          pairs.add(pair);
        }
        seen.add(num);
      }

      return Array.from(pairs).map(pair => pair.split(',').map(Number));
    }
  `,
    testCases: [
      {
        inputs: [[1, 2, 3, 4, 3], 6],
        expectedOutput: [
          [2, 4],
          [3, 3],
        ],
      },
      {
        inputs: [[0, -1, -2, 2, 1], 0],
        expectedOutput: [
          [-2, 2],
          [-1, 1],
        ],
      },
      { inputs: [[1, 1, 1, 1], 2], expectedOutput: [[1, 1]] },
    ],
  },
  {
    id: 16,
    type: "Algorithms",
    text: "Create a JavaScript function that rotates a square matrix 90 degrees clockwise.",
    solution: `
      function rotateMatrix(matrix) {
        const n = matrix.length;
  
        for (let layer = 0; layer < Math.floor(n / 2); layer++) {
          const start = layer;
          const end = n - layer - 1;
  
          for (let i = start; i < end; i++) {
            const offset = i - start;
  
            // Save top
            const top = matrix[start][i];
  
            // Move left to top
            matrix[start][i] = matrix[end - offset][start];
  
            // Move bottom to left
            matrix[end - offset][start] = matrix[end][end - offset];
  
            // Move right to bottom
            matrix[end][end - offset] = matrix[i][end];
  
            // Move top to right
            matrix[i][end] = top;
          }
        }
  
        return matrix;
      }
    `,
    testCases: [
      { 
        inputs: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], 
        expectedOutput: [[7, 4, 1], [8, 5, 2], [9, 6, 3]] 
      },
      { 
        inputs: [[[1, 2], [3, 4]]], 
        expectedOutput: [[3, 1], [4, 2]] 
      },
      { 
        inputs: [[[1]]], 
        expectedOutput: [[1]] 
      },
    ],
  }
  
];

export default questions;

/* 

  {
    id: ,
    text: "",
    solution: `
     
    `,
    testCases: [
    
    ],
  },

*/
