const tasksData = {
  js: [],
  CSS: [],
  React: [
    {
      taskId: "reacttask1",
      taskTitle: "React 3D Interactive Card",
      introduction: "In this lesson, we'll be building a React functional component called Card. We'll implement mouse movement handling and event listeners for mouse enter and leave actions to create engaging visual effects and interactions within the component.",
      steps: [
        {
          stepTitle: "Step 1: Define functional component Card",
          titleDescription: "",
          description: [
            "Create a reference for the card element",
            "Create a reference for the title element",
            "Create a reference for the sneaker image element",
            "Create a reference for the description element",
            "Create a reference for the difficulty buttons element",
            "Create a reference for the start button element",
          ],
        },
        {
          stepTitle: "Step 2: Function to handle mouse movement",
          titleDescription: "",

          description: [
            "Calculate the rotation on the X-axis based on mouse position",
            "Calculate the rotation on the Y-axis based on mouse position",
            "Apply rotation to the card element",
          ],
        },
        {
          stepTitle: "Step 3: Function to handle mouse entering the card",
          titleDescription: "",

          description: [
            "Remove transition effect",
            "Apply transformation to the title",
            "Apply transformation to the sneaker image",
            "Apply transformation to the description",
            "Apply transformation to the difficulty buttons",
            "Apply transformation to the start button",
          ],
        },
        {
          stepTitle: "Step 4: Function to handle mouse leaving the card",
          titleDescription: "",

          description: [
            "Add transition effect",
            "Reset rotation of the card",
            "Reset transformation of the title",
            "Reset transformation of the sneaker image",
            "Reset transformation of the description",
            "Reset transformation of the difficulty buttons",
            "Reset transformation of the start button",
          ],
        },
        {
          stepTitle: "Step 5: Return JSX for the component",
          titleDescription: "",

          description: [
            "Container for the card with mouse move event handler",
            "Attach reference to the card element",
            "Attach mouse enter event handler",
            "Attach mouse leave event handler",
            "Container for the sneaker image",
            "Circular background for the image",
            "Source for the image",
            "Alt text for the image",
            "Attach reference to the sneaker image element",
            "Container for the information",
            "Title of the card",
            "Description of the card",
            "Container for the difficulty buttons",
            "Button for easy difficulty",
            "Button for advanced difficulty",
            "Button for hard difficulty",
            "Button for pro difficulty",
            "Container for the start button",
            "Start button",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson1.png"),
      link: "https://www.dropbox.com/scl/fi/6cblzwczzki50yxwaxszo/InteractiveCard.css?rlkey=bydjjmcbwquipvhhlw470mbkb&st=op6om9ay&dl=0",
    },
    {
      taskId: "reacttask2",
      taskTitle: "BMI Tracker",
      introduction:
        "Welcome to the BMI Calculator! This React component allows you to input your weight and height, then calculates your Body Mass Index (BMI) and provides a message indicating your BMI category.",
      steps: [
        {
          stepTitle: "Step 1: Import React and useState hook",
          titleDescription: "",

          description: [
            "Import the React library and the useState hook from the react package. This is necessary to define a functional component and manage state within it.",
          ],
        },
        {
          stepTitle: "Step 2: Import CSS files",
          titleDescription: "",

          description: [
            "Import the CSS files (App.css or index.css) to style the BMI calculator component.",
          ],
        },
        {
          stepTitle: "Step 3: Define the BMI function component",
          titleDescription: "",

          description: ["Create a function component named BM3."],
        },
        {
          stepTitle: "Step 4: State initialization",
          titleDescription: "",

          description: [
            "weight: Holds the weight input value, initialized to 0.",
            "height: Holds the height input value, initialized to 0.",
            "bmi: Holds the calculated BMI value, initialized as an empty string.",
            "message: Holds the message corresponding to the BMI category, initialized as an empty string.",
          ],
        },
        {
          stepTitle: "Step 5: calcBmi function",
          titleDescription: "",

          description: [
            "Define a function calcBmi to calculate BMI when the form is submitted:",
            "Prevent the default form submission behavior.",
            "Check if weight or height is equal to 0, if so, display an alert asking the user to enter valid inputs.",
            "Calculate BMI using the formula weight / (heightInCm * heightInCm), where heightInCm is calculated by dividing height by 100.",
            "Set the calculated BMI using setBmi.",
            "Determine the BMI category based on the calculated BMI and set the appropriate message using setMessage.",
          ],
        },
        {
          stepTitle: "Step 6: Render JSX",
          titleDescription: "",

          description: [
            "Return the JSX structure for the BMI calculator component:",
            "Enclose the entire component within a div with the class app.",
            "Inside the div, create a container div with the class container.",
            "Display the heading 'BMI Calculator'.",
            "Create a form with input fields for weight and height.",
            "Attach the calcBmi function to the form's onSubmit event.",
            "Add buttons for submitting the form and reloading the page.",
            "Display the calculated BMI and corresponding message.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson2.png"),
      link: "https://www.dropbox.com/scl/fi/03e0si4h3xgxgg74ygra3/BMIstyles.css.css?rlkey=v7kz0wgjp8qtyhfr7ttco3vqx&dl=0",
    },
    {
      taskId: "reacttask3",
      taskTitle: "React Dark-Light Mode Toggle",
      introduction:
        "This tutorial guides you through setting up a React project to display articles with a toggleable light and dark theme. By following these steps, you'll create a structured application with styled components and basic functionality.",
      steps: [
        {
          stepTitle: "Step 1: Set Up Your React Project",
          titleDescription: "",
          description: [
            "Make sure you have Node.js and npm installed on your system.",
            "Create a new React project using Create React App or any other preferred method.",
          ],
        },
        {
          stepTitle: "Step 2: Create Required Files",
          titleDescription: "",
          description: [
            "Create App.js, Article.js, data.js, and index.css files in your project directory.",
          ],
        },
        {
          stepTitle: "Step 3: Populate data.js with Sample Data",
          titleDescription: "",
          description: [
            "In data.js, export an array of objects, each representing an article. Each object should have properties like id, title, snippet, date, and length.",
          ],
        },
        {
          stepTitle: "Step 4: Implement the Article Component",
          titleDescription: "",
          description: [
            "In Article.js, import React and any other required dependencies like moment.",
            "Create a functional component named Article.",
            "Inside the component, destructure the props (title, snippet, date, length) passed to it.",
            "Use JSX to render the article's title, date (formatted using moment), length, and snippet.",
          ],
        },
        {
          stepTitle: "Step 5: Create Styles in index.css",
          titleDescription: "",
          description: [
            "Define styles for the navigation, button, articles, and any other elements you want to style.",
          ],
        },
        {
          stepTitle: "Step 6: Implement the getStorageTheme Function",
          titleDescription: "",
          description: [
            "In App.js, define a function named getStorageTheme that retrieves the theme from localStorage.",
            "Set the default theme to 'light-theme' if no theme is found in localStorage.",
          ],
        },
        {
          stepTitle: "Step 7: Implement the App Component",
          titleDescription: "",
          description: [
            "Define a functional component named App.",
            "Use useState to manage the theme state, initializing it with the value returned by getStorageTheme.",
            "Define a toggleTheme function that toggles between 'light-theme' and 'dark-theme' based on the current theme.",
            "Use useEffect to update the document's className and store the theme in localStorage whenever the theme changes.",
            "Return JSX for the main structure of the app, including a navigation section with a title and a button to toggle the theme, and a section to display articles.",
            "Map through the data array, rendering an Article component for each item.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson3.png"),
      link: "https://www.dropbox.com/scl/fi/knoeb48ov2on7o1p7qcim/DarkLight.css?rlkey=s5xlzw4l86ugerz5w9v0e5w07&st=hnajvomv&dl=0",
    },
    {
      taskId: "reacttask4",
      taskTitle: "Sortify: Search by Name",
      introduction:
        "Sortify is a simple yet powerful web application designed for effortlessly sorting contact names. Built with React and Bootstrap, Sortify enables users to efficiently manage their contacts by organizing them alphabetically based on first names. With its intuitive interface and seamless functionality, Sortify streamlines the process of maintaining an organized contact list.",

      steps: [
        {
          stepTitle: "Step 1: Import Required Modules",
          titleDescription: "Import React and useState hook from 'react'",
          description: [
            "Create a reference for the card element",
            'Import various components from "react-bootstrap".',
            'Import the data array from a separate file named "data.js".',
          ],
        },
        {
          stepTitle: "Step 2: Initialize State Variables",
          titleDescription:
            "Initialize two state variables using the useState hook:",
          description: [
            "search: to store the search query entered by the user.",
            "contacts: to store the array of contacts data imported from 'data.js'.",
          ],
        },
        {
          stepTitle: "Step 3: Define Event Handlers",
          titleDescription: "",
          description: [
            "handleSearchChange: This function updates the search state variable with the value entered by the user in the search input field.",
            "sortName: This function sorts the contacts array based on the first name in ascending order when the 'Sort by First Name' button is clicked.",
          ],
        },
        {
          stepTitle: "Step 4: Render UI Components",
          titleDescription: "",
          description: [
            "Render a Container component from 'react-bootstrap' to wrap the content.",
            "Render a heading for the application.",
            "Render a Form component with an InputGroup to allow users to search for contacts.",
            "Render a Button component to trigger the sorting of contacts by first name.",
            "Render a Table component from 'react-bootstrap' to display the contacts data in a tabular format.",
            "Define the table headers.",
            "Filter the contacts based on the search query entered by the user.",
            "Map through the filtered contacts and render each contact as a row in the table.",
          ],
        },
        {
          stepTitle: "Step 5: Event Binding",
          titleDescription: "",
          description: [
            "Bind the onChange event of the search input field to the handleSearchChange function to update the search query state.",
            "Bind the onClick event of the 'Sort by First Name' button to the sortName function to trigger sorting.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson4.png"),
      link: "https://www.dropbox.com/scl/fi/ggr71m0hhr7dwqbxsn7zb/filterContactList.css?rlkey=ze15q78lxoiocw6z84o2c12cb&st=zw4011an&dl=0",
    },
  ],
};

const exercisesData = [
  {
    img: require("../images/js.png"),
    title: "Mastering JavaScript",
    desc: "Dive deep into JavaScript, the language that powers the web. From variables and functions to advanced concepts like closures and asynchronous programming, unlock the full potential of JavaScript.",
    to: "/jslessons",
  },
  {
    img: "https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg",
    title: "Styling Your Web Pages",
    desc: "Explore the power of CSS to beautify and style your web pages. From colors and fonts to layouts and animations, master the art of visual design for the web.",
    to: "/csslessons",
  },
  {
    img: "https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg",
    title: "Building Dynamic User Interfaces",
    desc: "Delve into React, the popular JavaScript library for building dynamic and interactive user interfaces. Learn components, state management, and the React ecosystem to create modern web applications.",
    to: "/reactlessons",
  },
];

const authorsData = [
  {
    name: { first: "Jevin", last: "B" },
    position: "React",
    description: "I will update this soon....",
    picture: { medium: require("../images/me.jpg") }, // Use require to import images
  },
];

const faqData = [
  {
    question:
      "Why is ProjectSchool learning is different from other platforms with online courses?",
    answer: (
      <div className='faq-container-answer'>
        <p>
          ProjectSchool learning stands out from other platforms with online
          courses due to its emphasis on practical exercises over traditional
          theoretical approaches. Unlike many other programs that rely heavily
          on passive learning through lectures and readings, ProjectSchool
          prioritizes hands-on tasks that allow participants to directly engage
          with the subject matter.
        </p>
        <p>
          {" "}
          By immersing learners in practical activities, ProjectSchool
          facilitates a deeper understanding of concepts and their real-world
          application. This approach fosters the development of tangible skills
          and boosts learners' confidence as they actively apply what they're
          learning.
        </p>
        <p>
          {" "}
          ProjectSchool's focus on active participation and meaningful outcomes
          distinguishes it from platforms that predominantly offer theoretical
          knowledge. Rather than merely absorbing information, participants in
          ProjectSchool actively shape their learning journey through hands-on
          experiences, bridging the gap between theory and practice.
        </p>
        <p>
          {" "}
          In summary, ProjectSchool stands out by offering a dynamic learning
          experience that emphasizes experiential learning and practical
          knowledge, empowering learners to apply their newfound skills
          effectively in real-world scenarios.
        </p>
      </div>
    ),
  },
  {
    question:
      "Is ProjectSchool suitable for individuals who are new to programming and lack heavy theoretical knowledge?",
    answer: (
      <div className='faq-container-answer'>
        <p>
          Yes, our React school is suitable for beginners who have a basic
          understanding of programming concepts. While we prioritize practical
          exercises over theoretical learning, we do assume that students have
          some foundational knowledge in programming. This might include
          familiarity with concepts such as variables, loops, functions, and
          basic HTML/CSS.
        </p>
        <p>
          However, our program is designed to guide beginners through hands-on
          tasks that will help them develop practical skills and confidence in
          React programming. Whether you're new to programming or looking to
          expand your skills specifically in React, our approach focuses on
          active engagement and real-world application to facilitate learning
          and growth.
        </p>
      </div>
    ),
  },
  {
    question: "Are payments on ProjectSchool safe?",
    answer: (
      <div className='faq-container-answer'>
        <p>
          Sure! We're using Stripe solution. All transactions are SSL (Secure
          Socket Layer) protected. Your information and your donors information
          are securely transmitted during the processing of all payments.
        </p>
        <p>
          Stripe is a PCI Service Provider Level 1 which is the highest grade of
          payment processing security. You can rest assured that your donors
          information is safe and secure.
        </p>
        <p>
          All credit card numbers are encrypted and safely stored in Stripe's
          state of the art data-center. This ensures both the security and
          integrity of your donors information.
        </p>
      </div>
    ),
  },
  {
    question: "Is it safe to use codesandbox.io platform?",
    answer: (
      <div className='faq-container-answer'>
        <p>
          Certainly! CodeSandbox is generally considered a secure platform for
          coding, with measures in place to safeguard users' code and data. It
          prioritizes security by regularly updating its platform to address any
          potential vulnerabilities and offers users control over the privacy
          settings of their projects. Additionally, the platform has clear
          community guidelines to maintain respectful interactions among users,
          with appropriate actions taken against any violations.
        </p>
        <p>
          However, users should remain cautious when using third-party code and
          ensure they come from reputable sources to minimize the risk of
          including malicious code. While CodeSandbox encrypts data transmission
          and storage, users should still be mindful of the information they
          include in their projects, especially sensitive data. Ultimately,
          users play a role in the security of their code and data by practicing
          good coding practices and regularly reviewing permissions. Alternative
          platforms and additional security measures, such as code review and
          version control systems, can also be considered for added protection.
        </p>
      </div>
    ),
  },
];
const blogCards = [
  {
    id: 1,
    category: "React",
    title: "How to create Authentication Guard Component",
    extract:
      "Today we'll walk through the process of implementing authentication in a React application using Firebase and React Router. We'll create an AuthGuard component to manage the authentication state anr protect routes that require authentication, ensuring a seamless user experience.",
    date: "04 April 2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/120px-React_Logo_SVG.svg.png",
  },
];
const blogTopic = [
  {
    id: 1,
    image: "AuthGuard (1).png",
    paragraph1:
      "Setup Firebase Authentication: Ensure you have set up Firebase Authentication properly. This includes setting up a Firebase project, enabling the Authentication service, and configuring sign-in methods (like email/password, Google, etc.). Create Firebase Configuration File: Ensure you have a Firebase configuration file (usually named firebase.html or similar) where you initialize Firebase with your configuration. ",
    paragraph2: [
      "Implement AuthGuard Component:",
      "Create an AuthGuard.html file. This component will handle the authentication logic.",
      "Inside the AuthGuard component, you're using useEffect hook to listen for changes in authentication state (onAuthStateChanged). When the authentication state changes, it updates the isLoggedIn state.",
      "If the user is authenticated (user is not null), isLoggedIn is set to true. Otherwise, it's set to false, and the user is redirected to the login page using navigate(/login).",
      "This component returns the children (components wrapped inside it) only if the user is authenticated. Otherwise, it returns null.",
    ],
    paragraph3: [
      "Import necessary modules from React",
      "Import useNavigate hook from react-router-dom",
      "Import the 'auth' object from './firebase' file",
      "Define a functional component AuthGuard that takes 'children' as a prop",
      "Initialize navigate function using the useNavigate hook from react-router-dom",
      "Initialize 'isLoggedIn' state variable with false using useState hook",
      "Implement useEffect hook",
      "Call onAuthStateChanged method on 'auth' object to listen for authentication state changes",
    ],
    paragraph4: "",
  },
  {
    id: 2,
    image: "AuthGuard (1).png",
    paragraph1:
      "Setup Firebase Authentication: Ensure you have set up Firebase Authentication properly. This includes setting up a Firebase project, enabling the Authentication service, and configuring sign-in methods (like email/password, Google, etc.). Create Firebase Configuration File: Ensure you have a Firebase configuration file (usually named firebase.html or similar) where you initialize Firebase with your configuration. ",
    paragraph2: [
      "Implement AuthGuard Component:",
      "Create an AuthGuard.html file. This component will handle the authentication logic.",
      "Inside the AuthGuard component, you're using useEffect hook to listen for changes in authentication state (onAuthStateChanged). When the authentication state changes, it updates the isLoggedIn state.",
      "If the user is authenticated (user is not null), isLoggedIn is set to true. Otherwise, it's set to false, and the user is redirected to the login page using navigate(/login).",
      "This component returns the children (components wrapped inside it) only if the user is authenticated. Otherwise, it returns null.",
    ],
    paragraph3: [
      "Import necessary modules from React",
      "Import useNavigate hook from react-router-dom",
      "Import the 'auth' object from './firebase' file",
      "Define a functional component AuthGuard that takes 'children' as a prop",
      "Initialize navigate function using the useNavigate hook from react-router-dom",
      "Initialize 'isLoggedIn' state variable with false using useState hook",
      "Implement useEffect hook",
      "Call onAuthStateChanged method on 'auth' object to listen for authentication state changes",
    ],
    paragraph4: "",
  },
  {
    id: 3,
    paragraph1: "text100",
    paragraph2: "text200",
    paragraph3: "text300",
    paragraph4: "text400",
  },
  {
    id: 4,
    paragraph1: "text10",
    paragraph2: "text20",
    paragraph3: "text30",
    paragraph4: "text40",
  },
];

export { tasksData, authorsData, faqData, blogCards, blogTopic, exercisesData };

/* Task description example template:

---------------------- REACT, js
React: [
    {
      taskId: "reacttask1",
      taskTitle: "React 3D Interactive Card",
      introduction: "",

      steps: [
        {
          stepTitle: "Step 1: Define functional component Card",
          titleDescription: "",
          description: [
            "Create a reference for the card element",
            
          ],
        },
        {
          stepTitle: "Step 2: Function to handle mouse movement",
          titleDescription: "",
          description: [
            "Calculate the rotation on the X-axis based on mouse position",
            
          ],
        },
        {
          stepTitle: "Step 3: Function to handle mouse entering the card",
          titleDescription: "",
          description: [
            "Remove transition effect",
          
          ],
        },
        {
          stepTitle: "Step 4: Function to handle mouse leaving the card",
          titleDescription: "",
          description: [
            "Add transition effect",
           
          ],
        },
        {
          stepTitle: "Step 5: Return JSX for the component",
          titleDescription: "",
          description: [
            "Container for the card with mouse move event handler",
            
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson1.png"),
      link: "https://www.dropbox.com/scl/fi/6cblzwczzki50yxwaxszo/style.css?rlkey=bydjjmcbwquipvhhlw470mbkb&dl=0",
    },
   
  ],  */
