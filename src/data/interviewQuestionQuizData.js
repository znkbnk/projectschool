const interviewQuestionQuizData = [
  {
    id: 1,
    question: "What is React.js?",
    options: [
      "A backend framework for databases",
      "A library for building user interfaces",
      "A library for performing server-side operations",
      "A language used for creating APIs",
    ],
    correctAnswer: "A library for building user interfaces",
  },
  {
    id: 2,
    question: "What is the Virtual DOM?",
    options: [
      "A physical part of the browser's DOM",
      "A feature to fetch data from servers",
      "A lightweight copy of the real DOM used by React",
      "A debugging tool for React developers",
    ],
    correctAnswer: "A lightweight copy of the real DOM used by React",
  },
  {
    id: 3,
    question: "What is JSX?",
    options: [
      "A special syntax to describe CSS styles",
      "A library used to optimize JavaScript code",
      "A syntax extension that allows writing HTML in React",
      "A template engine used for server-side rendering",
    ],
    correctAnswer: "A syntax extension that allows writing HTML in React",
  },
  {
    id: 4,
    question: "What are functional components in React?",
    options: [
      "Components defined using ES6 classes",
      "Functions that take props and return React elements",
      "Functions that directly manipulate the DOM",
      "Components that don't use any hooks",
    ],
    correctAnswer: "Functions that take props and return React elements",
  },
  {
    id: 5,
    question: "What is the purpose of the useEffect hook?",
    options: [
      "To handle user input in forms",
      "To update the component state",
      "To manage side effects like fetching data or updating the DOM",
      "To render a list of items in React",
    ],
    correctAnswer:
      "To manage side effects like fetching data or updating the DOM",
  },
  {
    id: 6,
    question: "What is the purpose of React props?",
    options: [
      "To manage component state",
      "To pass data between components",
      "To define styles for components",
      "To create new components",
    ],
    correctAnswer: "To pass data between components",
  },
  {
    id: 7,
    question: "What does React useState hook do?",
    options: [
      "Manages the lifecycle of a component",
      "Fetches data from an API",
      "Declares state in functional components",
      "Handles user interactions",
    ],
    correctAnswer: "Declares state in functional components",
  },
  {
    id: 8,
    question: "What is a React component?",
    options: [
      "A reusable piece of UI",
      "A function to fetch data",
      "A tool for debugging",
      "A method to directly manipulate the DOM",
    ],
    correctAnswer: "A reusable piece of UI",
  },
  {
    id: 9,
    question: "What is React Router used for?",
    options: [
      "To style React components",
      "To handle user input in forms",
      "To manage navigation and routing in React applications",
      "To optimize performance of React apps",
    ],
    correctAnswer: "To manage navigation and routing in React applications",
  },
  {
    id: 10,
    question: "What does the React useRef hook do?",
    options: [
      "Updates the component state",
      "Manages side effects",
      "Accesses or stores a mutable DOM reference",
      "Defines default props for components",
    ],
    correctAnswer: "Accesses or stores a mutable DOM reference",
  },
  {
    id: 11,
    question: "What is the React Context API used for?",
    options: [
      "To manage complex animations",
      "To perform API calls",
      "To share state or data across components without props drilling",
      "To optimize the performance of React apps",
    ],
    correctAnswer:
      "To share state or data across components without props drilling",
  },
  {
    id: 12,
    question: "What are React fragments?",
    options: [
      "Tools for debugging React code",
      "Built-in hooks for managing state",
      "Lightweight containers for grouping multiple elements",
      "Components that handle user authentication",
    ],
    correctAnswer: "Lightweight containers for grouping multiple elements",
  },
  {
    id: 13,
    question: "What is the key prop in React used for?",
    options: [
      "To style components",
      "To uniquely identify elements in a list",
      "To bind event listeners",
      "To pass data between components",
    ],
    correctAnswer: "To uniquely identify elements in a list",
  },
  {
    id: 14,
    question: "What does the useReducer hook do?",
    options: [
      "Updates the DOM directly",
      "Handles form submissions",
      "Manages complex state logic in functional components",
      "Performs API requests",
    ],
    correctAnswer: "Manages complex state logic in functional components",
  },
  {
    id: 15,
    question: "What is React.memo used for?",
    options: [
      "To fetch data from an API",
      "To memoize values returned by hooks",
      "To prevent unnecessary re-renders of functional components",
      "To define default props",
    ],
    correctAnswer: "To prevent unnecessary re-renders of functional components",
  },
  {
    id: 16,
    question: "What is prop drilling in React?",
    options: [
      "A debugging technique",
      "Passing props down multiple levels of components",
      "A method to fetch data from an API",
      "A feature for optimizing performance",
    ],
    correctAnswer: "Passing props down multiple levels of components",
  },
  {
    id: 17,
    question: "What is the purpose of React state?",
    options: [
      "To define reusable styles",
      "To manage dynamic data within a component",
      "To access DOM elements",
      "To create new components",
    ],
    correctAnswer: "To manage dynamic data within a component",
  },
  {
    id: 18,
    question: "What does React.StrictMode do?",
    options: [
      "Fetches data from APIs",
      "Checks for potential problems in React applications",
      "Optimizes performance of React apps",
      "Styles components globally",
    ],
    correctAnswer: "Checks for potential problems in React applications",
  },
  {
    id: 19,
    question: "What are React portals used for?",
    options: [
      "Managing API calls",
      "Rendering children outside the DOM hierarchy of their parent",
      "Optimizing state updates",
      "Creating reusable styles",
    ],
    correctAnswer:
      "Rendering children outside the DOM hierarchy of their parent",
  },
  {
    id: 20,
    question: "What does the useContext hook do?",
    options: [
      "Handles API requests",
      "Fetches global state using Context",
      "Optimizes performance of React apps",
      "Handles user events",
    ],
    correctAnswer: "Fetches global state using Context",
  },
  {
    id: 21,
    question: "What is a React ref?",
    options: [
      "A way to access and manipulate a DOM element directly",
      "A built-in method to create new components",
      "A hook to manage state",
      "A method for routing in React",
    ],
    correctAnswer: "A way to access and manipulate a DOM element directly",
  },
  {
    id: 22,
    question: "What is the purpose of React.lazy?",
    options: [
      "To improve app styling",
      "To load components lazily for better performance",
      "To declare asynchronous functions",
      "To manage API requests",
    ],
    correctAnswer: "To load components lazily for better performance",
  },
  {
    id: 23,
    question: "What does the Suspense component do in React?",
    options: [
      "Handles event listeners",
      "Displays a fallback UI while components are loading",
      "Manages component state",
      "Optimizes component rendering",
    ],
    correctAnswer: "Displays a fallback UI while components are loading",
  },
  {
    id: 24,
    question: "What is the difference between state and props?",
    options: [
      "State is read-only, while props can be modified",
      "State is used to pass data, while props manage local data",
      "State manages local data, while props are passed from parent to child",
      "State updates the DOM directly, while props don’t",
    ],
    correctAnswer:
      "State manages local data, while props are passed from parent to child",
  },
  {
    id: 25,
    question: "What is React.StrictMode mainly used for?",
    options: [
      "Styling components",
      "Detecting potential issues in an app",
      "Handling forms",
      "Rendering large lists efficiently",
    ],
    correctAnswer: "Detecting potential issues in an app",
  },
  {
    id: 26,
    question: "What is the purpose of keys in React lists?",
    options: [
      "To style individual items",
      "To enhance performance and track changes in lists",
      "To trigger re-renders",
      "To bind event listeners",
    ],
    correctAnswer: "To enhance performance and track changes in lists",
  },
  {
    id: 27,
    question: "What is React Fiber?",
    options: [
      "A new browser API",
      "A tool for managing state",
      "React's reconciliation algorithm",
      "A debugging tool for developers",
    ],
    correctAnswer: "React's reconciliation algorithm",
  },
  {
    id: 28,
    question: "What does lifting state up mean in React?",
    options: [
      "Moving state to a parent component to share with children",
      "Storing state in the global context",
      "Using useState for local state management",
      "Managing side effects with hooks",
    ],
    correctAnswer: "Moving state to a parent component to share with children",
  },
  {
    id: 29,
    question: "What does the render method do in class components?",
    options: [
      "Defines the initial state of the component",
      "Fetches data from APIs",
      "Returns the React elements to display",
      "Handles side effects like fetching data",
    ],
    correctAnswer: "Returns the React elements to display",
  },
  {
    id: 30,
    question: "What is the default behavior of the React onClick event?",
    options: [
      "Executes asynchronously",
      "Handles user inputs in forms",
      "Triggers a callback function when clicked",
      "Automatically updates the component state",
    ],
    correctAnswer: "Triggers a callback function when clicked",
  },
  {
    id: 31,
    question: "What are controlled components in React?",
    options: [
      "Components managed entirely by the DOM",
      "Components whose state is controlled by React",
      "Components that don’t rely on any hooks",
      "Components that directly update the DOM",
    ],
    correctAnswer: "Components whose state is controlled by React",
  },
  {
    id: 32,
    question: "What is the use of the defaultProps property in React?",
    options: [
      "To manage local state in a component",
      "To set default values for props",
      "To handle errors during rendering",
      "To optimize performance",
    ],
    correctAnswer: "To set default values for props",
  },
  {
    id: 33,
    question: "What is a higher-order component (HOC) in React?",
    options: [
      "A component used for animations",
      "A component that renders directly to the DOM",
      "A function that takes a component and returns a new component",
      "A library for managing forms in React",
    ],
    correctAnswer:
      "A function that takes a component and returns a new component",
  },
  {
    id: 34,
    question:
      "What is the purpose of the componentWillUnmount lifecycle method?",
    options: [
      "To handle user input in forms",
      "To clean up resources like timers or subscriptions",
      "To fetch data when the component is about to unmount",
      "To update the state of the component",
    ],
    correctAnswer: "To clean up resources like timers or subscriptions",
  },
  {
    id: 35,
    question: "What is the purpose of the constructor in class components?",
    options: [
      "To handle component side effects",
      "To define initial state and bind methods",
      "To fetch data from APIs",
      "To create reusable styles",
    ],
    correctAnswer: "To define initial state and bind methods",
  },
  {
    id: 36,
    question: "What does the getDerivedStateFromProps lifecycle method do?",
    options: [
      "Handles state transitions asynchronously",
      "Fetches data from APIs",
      "Updates state based on changes in props",
      "Binds methods to the component",
    ],
    correctAnswer: "Updates state based on changes in props",
  },
  {
    id: 37,
    question: "What is the React Developer Tools extension used for?",
    options: [
      "Testing React apps",
      "Debugging and inspecting React components",
      "Styling components in real-time",
      "Optimizing React app performance",
    ],
    correctAnswer: "Debugging and inspecting React components",
  },
  {
    id: 38,
    question: "What is the purpose of a fallback UI in React?",
    options: [
      "To handle user input errors",
      "To render a default page when APIs fail",
      "To display UI during loading or errors",
      "To apply default props to components",
    ],
    correctAnswer: "To display UI during loading or errors",
  },
  {
    id: 39,
    question: "What does ReactDOM.render do?",
    options: [
      "Renders a React element into the DOM",
      "Manages local state for a component",
      "Handles lifecycle methods",
      "Performs server-side rendering",
    ],
    correctAnswer: "Renders a React element into the DOM",
  },
  {
    id: 40,
    question: "What is the purpose of React's reconciliation process?",
    options: [
      "To compare versions of React apps",
      "To update and render only the necessary changes to the DOM",
      "To fetch data more efficiently",
      "To manage user inputs in forms",
    ],
    correctAnswer: "To update and render only the necessary changes to the DOM",
  },
  {
    id: 41,
    question: "What is the main purpose of the useCallback hook?",
    options: [
      "To memoize functions and avoid unnecessary re-creations",
      "To manage state across different components",
      "To handle side effects in functional components",
      "To trigger re-renders when props change",
    ],
    correctAnswer: "To memoize functions and avoid unnecessary re-creations",
  },
  {
    id: 42,
    question: "What is the purpose of the useContext hook?",
    options: [
      "To fetch data from an API",
      "To allow state sharing between components without passing props",
      "To optimize performance by caching values",
      "To handle component lifecycle methods",
    ],
    correctAnswer:
      "To allow state sharing between components without passing props",
  },
  {
    id: 43,
    question: "What is the significance of the key prop in React lists?",
    options: [
      "It determines the component's styling",
      "It helps React identify which items have changed, added, or removed",
      "It defines the component's default props",
      "It is used to store component data persistently",
    ],
    correctAnswer:
      "It helps React identify which items have changed, added, or removed",
  },
  {
    id: 44,
    question: "What is ReactDOMServer used for?",
    options: [
      "To perform server-side rendering of React components",
      "To interact with the DOM",
      "To handle React state on the server",
      "To bind event listeners on the client",
    ],
    correctAnswer: "To perform server-side rendering of React components",
  },
  {
    id: 45,
    question: "What does the useReducer hook do in React?",
    options: [
      "It is used to handle large state updates in a performant way",
      "It is used to fetch data from APIs",
      "It is used to store immutable data",
      "It helps in component styling and animations",
    ],
    correctAnswer:
      "It is used to handle large state updates in a performant way",
  },
  {
    id: 46,
    question:
      "How do you pass data from a child component to a parent component in React?",
    options: [
      "Using the `useState` hook",
      "By passing a callback function as a prop from parent to child",
      "By using React Context",
      "By rendering JSX inside the parent component",
    ],
    correctAnswer:
      "By passing a callback function as a prop from parent to child",
  },
  {
    id: 47,
    question:
      "What is the difference between React’s useEffect and useLayoutEffect hooks?",
    options: [
      "useEffect runs synchronously, while useLayoutEffect runs asynchronously",
      "useLayoutEffect runs synchronously after all DOM mutations",
      "useEffect handles form inputs, while useLayoutEffect handles rendering",
      "useLayoutEffect is used only for server-side rendering",
    ],
    correctAnswer: "useLayoutEffect runs synchronously after all DOM mutations",
  },
  {
    id: 48,
    question:
      "What is the role of the componentDidMount lifecycle method in React?",
    options: [
      "To update the component state",
      "To fetch data or perform operations after the component mounts",
      "To manage side effects when props change",
      "To handle event listeners and remove them on unmount",
    ],
    correctAnswer:
      "To fetch data or perform operations after the component mounts",
  },
  {
    id: 49,
    question: "What does the React context API allow you to do?",
    options: [
      "It allows you to store state in a global store",
      "It allows you to pass data across the app without using props",
      "It provides a built-in state management system",
      "It enables direct DOM manipulation",
    ],
    correctAnswer:
      "It allows you to pass data across the app without using props",
  },
  {
    id: 50,
    question: "What is the purpose of the useLayoutEffect hook?",
    options: [
      "To handle asynchronous side effects in functional components",
      "To perform DOM mutations and update the UI immediately",
      "To read layout and paint information from the DOM",
      "To manage error boundaries in React components",
    ],
    correctAnswer: "To read layout and paint information from the DOM",
  },
];

export default interviewQuestionQuizData;
