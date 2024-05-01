const tasksData = {
  js: [],
  CSS: [],
  React: [
    {
      taskId: "reacttask1",
      taskTitle: "React 3D Interactive Card",
      introduction:
        "In this lesson, we'll be building a React functional component called Card. We'll implement mouse movement handling and event listeners for mouse enter and leave actions to create engaging visual effects and interactions within the component.",
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
    {
      taskId: "reacttask5",
      taskTitle: "Simple Quiz App",
      introduction:
        "In this guide, you will embark on a journey to create an interactive quiz app. Follow along as we guide you through the process of building your very own quiz application from scratch.",

      steps: [
        {
          stepTitle: "Step 1: Create Component Files",
          titleDescription: "",
          description: [
            "Open your code editor.",
            "Navigate to the 'src' folder of your project directory.",
            "Create a new file named App.js.",
            "Create another new file named index.css.",
            "Finally, create a file named questions.js.",
          ],
        },
        {
          stepTitle: "Step 2: Define Questions",
          titleDescription: "",
          description: [
            "Create the questions.js file.",
            "Inside, create a JavaScript array named questions.",
            "Each element of this array will represent a single question in your quiz.",
            "For each question, create an object with two properties: questionText (the text of the question) and answerOptions (an array of possible answer options, each represented by an object containing answerText and isCorrect properties).",
          ],
        },
        {
          stepTitle: "Step 3: App Component",
          titleDescription: "",
          description: [
            "Open the App.js file.",
            "Begin by importing React at the top of the file.",
            "Import the useState hook from React to manage state within the component.",
            "Also, import the questions array from ./questions.js.",
            "Create a functional component named App.",
            "Inside the component, declare state variables to keep track of the current question, the score, and the number of correct and incorrect answers.",
            "Implement the handleAnswerButtonClick function to handle user clicks on answer options.",
            "Inside this function, update the score and the counts of correct and incorrect answers based on the selected option.",
            "Update the current question index to move to the next question if there are more questions remaining. Otherwise, call the finishQuiz function.",
            "Implement the finishQuiz function to finalize the quiz when all questions have been answered.",
            "Render the quiz interface using JSX, displaying the current question text and answer options based on the current question index.",
          ],
        },
        {
          stepTitle: "Step 4: Conditional Rendering",
          titleDescription: "",
          description: [
            "Use conditional rendering within the App component to display either the quiz questions or the final score section based on the value of currentQuestion.",
            "If currentQuestion is less than the total number of questions, render the quiz interface. Otherwise, render the final score section.",
          ],
        },
        {
          stepTitle: "Step 5: Styling",
          titleDescription: "",
          description: [
            "Open the index.css file.",
            "Add CSS rules to style the quiz app according to your preferences.",
            "You can define styles for the app container, question text, answer options, buttons, etc.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson5.png"),
      link: "https://www.dropbox.com/scl/fi/x993b93wtivxvs24vu2gh/quizApp.css?rlkey=ugoc9v64xrxs7a82giuyj0d21&st=5nhhq4ti&dl=0",
    },
    {
      taskId: "reacttask6",
      taskTitle: "ReactFAQ",
      introduction:
        "ReactFAQ is a user-friendly React application designed to provide quick access to frequently asked questions and their detailed answers. With collapsible sections and intuitive navigation, users can easily find the information they need within a sleek and modern interface.",

      steps: [
        {
          stepTitle: "Step 1: Create React App",
          titleDescription: "",
          description: [
            "Open your terminal.",
            "Navigate to the directory where you want to create your project.",
            "Run npx create-react-app my-react-app (replace my-react-app with your preferred project name).",
            "Navigate into your project directory: cd my-react-app.",
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",
          titleDescription: "",
          description: [
            "Inside the src folder of your React project, create a new folder named components.",
            "Inside the components folder, create two files: Question.js and index.css.",
          ],
        },
        {
          stepTitle: "Step 3: Question Component",
          titleDescription: "In question.js",
          description: [
            "Install ( npm i react-icons ) and import the AiOutlineMinus and AiOutlinePlus icons from the 'react-icons/ai' library",
            "Define the Question component as a functional component that takes 'title' and 'info' props",
            "Initialize state variable 'showInfo' using the useState hook, default value is false",
            "Render the component structure",
            "Define outer container for the question article",
            "Then, create a header section containing the question title",
            "Add the button to toggle visibility of additional information",
            "Apply conditional rendering of 'minus' icon if showInfo is true, otherwise 'plus' icon",
            "Render additional information paragraph if showInfo is true",
          ],
        },
        {
          stepTitle: "Step 4: Main App Component",
          titleDescription: "In your App.js file",
          description: [
            "Import necessary modules from React library.",
            "Import data from an external file named 'data'.",
            "Import the Question component from a file named 'Question'.",
            "Import styles from an external CSS file named 'index.css'.",
            "Declare a functional component named App.",
            "Declaring a state variable 'questions' using useState hook, initialise it with data imported from 'data' file. ",
            "In return statement create a main container of the application",
            "Then, container div with a class name of 'container', 'heading' sectiopn element with a class name of 'info",
            "Map through the 'questions' array and render the Question component for each question",
          ],
        },
        {
          stepTitle: "Step 5: Data File",
          titleDescription: "",
          description: [
            "Create a new file named data.js in the src directory.",
            "Define an array of objects representing questions, each with properties like id, title, and info.",
            "Populate the data file with question objects containing various titles and information.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson6.png"),
      link: "https://www.dropbox.com/scl/fi/6cblzwczzki50yxwaxszo/style.css?rlkey=bydjjmcbwquipvhhlw470mbkb&dl=0",
    },
    {
      taskId: "reacttask7",
      taskTitle: "Birthday Reminder",
      introduction:
        "In this task, you'll explore building a dynamic 'Birthday Reminder' app using React. You'll dive into concepts such as state management with useState, filtering data based on dates, and structuring components effectively. By the end, you'll have a practical understanding of React fundamentals and be equipped to create your own personalized applications.",

      steps: [
        {
          stepTitle: "Step 1: Create React App",
          titleDescription: "",
          description: [
            "Start by creating a new React application using Create React App or any other method you prefer.",
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",
          titleDescription: "",
          description: [
            "Plan out the component structure. You'll need components for the main App, the logic to determine birthdays, the list of people, and potentially individual person cards if you want to break it down further.",
          ],
        },
        {
          stepTitle: "Step 3: Data Structure",
          titleDescription: "",
          description: [
            "Decide on the structure of your data. You need an array of objects representing people, with each object containing properties like id, name, age, date of birth (dob), and image URL.",
          ],
        },
        {
          stepTitle: "Step 4: App Component",
          titleDescription: "App.js",
          description: [
            "Begin by creating the main App component in a file named App.js.",
            "Import the necessary modules such as React, useState, and any other components you'll be using, like List and BirthdayLogic.",
            "Set up the initial state using React's useState hook. Initialize the state with the data array imported from a separate file. This array will hold information about people's birthdays.",
            "Inside the component's return statement, structure the JSX for the main layout of your app. This will include a section with a heading displaying the number of birthdays today, the list of people with birthdays today, and a button to clear all birthdays.",
          ],
        },
        {
          stepTitle: "Step 5: Birthday Logic Component",
          titleDescription: "BirthdayLogic.js",
          description: [
            "Create a new file named BirthdayLogic.js for the BirthdayLogic component.",
            "Define a functional component named BirthdayLogic that accepts the people prop.",
            "Inside the component, create a variable to hold today's date using new Date().",
            "Format today's date to match the format of the date of birth (e.g., 'MM-DD') for comparison.",
            "Use the filter method to iterate through the people array and filter out those whose date of birth matches today's date.",
            "Return the filtered array of people whose birthday is today.",
          ],
        },
        {
          stepTitle: "Step 6: List Component",
          titleDescription: "List.js",
          description: [
            "Create a new file named List.js for the List component.",
            "Define a functional component named List that accepts the people prop.",
            "Inside the component, filter the people array received as a prop to find those whose birthday is today. You can use a similar approach as in the BirthdayLogic component.",
            "Render JSX to display the list of people whose birthday is today. This may involve mapping over the filtered array and rendering individual person cards.",
            "Ensure that the component conditionally renders the list only if there are people with birthdays today.",
            "Style the list component using CSS to make it visually appealing. You can create a CSS file named index.css to contain your styles.",
          ],
        },
        {
          stepTitle: "Step 7: Styling",
          titleDescription: "List.js",
          description: [
            "Style your components using CSS or any styling solution you prefer. You can use classNames or CSS-in-JS libraries like Styled Components to style your components.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson7.png"),
      link: "https://www.dropbox.com/scl/fi/57ns2zldn9w6jud6hbstj/birthdayStyles.css?rlkey=j24jn3vqz5vg144vl0hbj0z51&st=5yn64tby&dl=0",
    },
    {
      taskId: "reacttask8",
      taskTitle: "Dynamic Box Shadow Generator",
      introduction:
        "In this project, we'll be creating a dynamic box shadow generator. We'll implement an App component to manage the state of box shadows and controls, and a ControlBox component to allow users to customize shadow properties.",

      steps: [
        {
          stepTitle: "Step 1: Setting Up the Project",
          titleDescription: "",
          description: [
            "Create a new React project using Create React App or your preferred method.",
            "Ensure you have React installed in your project.",
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",
          titleDescription: "",
          description: [
            "Create two components: App.js and ControlBox.js.",
            "App.js will serve as the main component containing the shadow preview and control panel.",
            "ControlBox.js will contain the controls for adjusting the box shadow properties.",
          ],
        },
        {
          stepTitle: "Step 3: Implementing App Component ",
          titleDescription: "App.js",
          description: [
            "Import React and required hooks (useState) from the React library.",
            "Import the ControlBox component from its file.",
            "Define a functional component named App.",
            "Initialize state variables for managing shadows and controls using the useState hook: 'shadows': An array to store the box shadow values. 'controls': An array to keep track of control box components.            ",
            "Implement a function named updateShadow that takes two parameters: s (shadow object) and id (index of the shadow to update).",
            "Build the new shadow value based on the properties passed (x, y, blur, spread, color, inset).",
            "Update the shadows state array at the specified index with the new shadow value.",
            "Use the spread operator to avoid mutating the state directly.",
            "Update the shadows state using the setShadows function.",
            "Implement a function named addShadow to add a new control box and corresponding shadow to the state.",
            "Append a new control object to the controls state array.",
            "Add an empty string to the shadows state array to represent the new shadow.",
            "Implement a function named undoAddLayer to remove the last added control box and corresponding shadow.",
            "Check if there's more than one control box.",
            "Remove the last element from both controls and shadows state arrays using the pop() method.",
            "Update the state arrays using the setControls and setShadows functions.",
            "Render the preview box and control panel components.",
            "Pass necessary props to the ControlBox component (key, id, updateShadow).",
          ],
        },
        {
          stepTitle: "Step 4: Implementing ControlBox Component",
          titleDescription: "ControlBox.js",
          description: [
            "Import React, useState, and useEffect hooks from the React library.",
            "Define a functional component named ControlBox.",
            "Initialize state variable shadowModel using the useState hook.",
            "shadowModel will store the properties of the box shadow being modified by the control box.",
            "Implement a function named updateShadowModel to update the shadowModel state.",
            "The function takes two parameters: propr (property name) and val (new value for the property).",
            "Update the shadowModel state using the spread operator to merge the new property/value pair.",
            "Use the useEffect hook to update the shadow whenever shadowModel changes.",
            "Call the updateShadow function passed from the App component, passing shadowModel and id as arguments.",
            "Add [shadowModel] as the dependency array to ensure the effect is triggered when shadowModel changes.",
            "Render input elements for adjusting shadow properties (offset, blur, spread, color, inset) using JSX.",
            "Set appropriate attributes (type, min, max, defaultValue, onChange) for each input.",
            "Bind updateShadowModel function to the onChange event of each input to update shadowModel.",
            "Render a checkbox input element for the 'Inset' property.",
            "Bind the updateShadowModel function to the onChange event of the checkbox to update the inset property in shadowModel.",
            "Ensure that changes in the input values trigger the updateShadowModel function to update the shadowModel state.",
            "Utilize React's state management to keep track of changes in the control inputs.",
            "Ensure that the updated shadow information is communicated back to the App component for rendering.",
            "Apply CSS styles to the input elements for better visual presentation.",
          ],
        },
        {
          stepTitle: "Step 5: Connecting Components",
          titleDescription: "",
          description: [
            "Import ControlBox component into App.js.",
            "Pass necessary props (updateShadow) to ControlBox component.",
            "Ensure that updateShadow function in App.js updates the shadows state with the correct shadow information.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson8.png"),
      link: "https://www.dropbox.com/scl/fi/4afgt9yycn142ivtclsm9/shadowStyles.css?rlkey=p92gydd9wnxlt46r4n3b1vjaw&st=nmib5hqn&dl=0",
    },
    {
      taskId: "reacttask9",
      taskTitle: "Memory Game",
      introduction:
        "In this Memory Game implementation using React, we'll explore how to create a Memory Game using React. The game will involve flipping pairs of cards to find matches. We'll break down the process into steps, focusing on managing game state, rendering the game board, and implementing the card interactions. ",

      steps: [
        {
          stepTitle: "Step 1: Set Up React App",
          titleDescription: "",
          description: [
            "Create a new React app using create-react-app or any preferred method.",
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",
          titleDescription: "",
          description: [
            "Plan out the component structure. You'll need at least three components: App, Cards, and Card.",
          ],
        },
        {
          stepTitle: "Step 3: Create App Component",
          titleDescription: "App.js",
          description: [
            "Use the useState hook to create a state variable to track whether to start the game again. Initialize it with false, since the game hasn't started yet.",
            "Create a function, let's call it handleStartAgain, that updates the state variable to true when the 'Start Again' button is clicked. Use setTimeout to set the state back to false after a short delay, like 100 milliseconds. This is to ensure a smooth transition when resetting the game.",
          ],
        },
        {
          stepTitle: "Step 4: Create Cards Component",
          titleDescription: "Crads.js",
          description: [
            " Inside the Cards component, use the useState hook to manage the state of the cards. This state should hold an array of objects representing each card, with properties like id, img, and stat (to track whether it's active, correct, or wrong).",
            "Utilize the useEffect hook to watch for changes in the startAgain prop passed from the App component. When startAgain becomes true, reset the game by reinitializing the state of the cards. Remember to reset the prev state as well.",
            " Implement a function, let's name it handleClick, to handle clicks on the cards. When a card is clicked, check if there's already a previously clicked card. If not, mark the clicked card as active. If there's already a previously clicked card, compare it with the current one. If they match, mark both as correct. If they don't match, mark them as wrong and reset their status after a delay.",
          ],
        },
        {
          stepTitle: "Step 5: Create Card Component",
          titleDescription: "",
          description: [
            "Define the Card component to accept props like item, id, and handleClick. The item prop will contain information about the card, such as its image and status.",
            "Inside the Card component, render a div representing the card. Bind an onClick event to this div, calling the handleClick function with the card's id when clicked.",
            "Use the item.stat property to dynamically apply CSS classes based on the card's status. For example, if item.stat is 'active', apply a class to highlight the card. If it's 'correct' or 'wrong', apply respective classes for visual feedback.",
          ],
        },
        {
          stepTitle: "Step 6: Randomize Cards",
          titleDescription: "In Cards.js file",
          description: [
            "Implement a function to randomize the cards. You can use the Fisher-Yates shuffle algorithm or simply shuffle the array using sort method with a randomizing function.",
          ],
        },
        {
          stepTitle: "Step 7: Logic for Card Click",
          titleDescription: "In Cards.js file",
          description: [
            "Implement the logic to handle card clicks. If no card is currently selected, mark the clicked card as selected. If one card is already selected, compare it with the newly selected card. If they match, mark them as correct. If they don't match, mark them as wrong and reset them after a delay.",
          ],
        },
        {
          stepTitle: "Step 8: Styling",
          titleDescription: "In Cards.js file",
          description: [
            "Apply styles to make the memory game visually appealing. You can use CSS or any CSS-in-JS solution.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson9.png"),
      link: "https://www.dropbox.com/scl/fi/mqd7ggdarkm4fl704iun1/memoryStyles.css?rlkey=9amnv9br4g9t7iz3w4iz9e8h8&st=xopph5bz&dl=0",
      link2:
        "https://www.dropbox.com/scl/fo/xun1wmslf3nuok6kjslto/AJAoOoiDotzvxhHAdeA20co?rlkey=lfo67u2afk1bsaouc41azfd5p&st=cfmm90r4&dl=0",
    },
  ],
};

const exercisesData = [
  // {
  //   img: require("../images/js.png"),
  //   title: "Mastering JavaScript",
  //   desc: "Dive deep into JavaScript, the language that powers the web. From variables and functions to advanced concepts like closures and asynchronous programming, unlock the full potential of JavaScript.",
  //   to: "/jslessons",
  // },
  // {
  //   img: "https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg",
  //   title: "Styling Your Web Pages",
  //   desc: "Explore the power of CSS to beautify and style your web pages. From colors and fonts to layouts and animations, master the art of visual design for the web.",
  //   to: "/csslessons",
  // },
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
      taskId: "reacttask",
      taskTitle: "",
      introduction: "",

      steps: [
        {
          stepTitle: "Step 1: ",
          titleDescription: "",
          description: [
            "",
            "",
            "",
            "",
            "",
            "",
          ],
        },
        {
          stepTitle: "Step 2: ",
          titleDescription: "",
          description: [
             "",
            "",
            "",
            "",
            "",
            "",
          ],
        },
        {
          stepTitle: "Step 3: ",
          titleDescription: "",
          description: [
            "",
           "",
            "",
            "",
            "",
            "",
            "",
          ],
        },
        {
          stepTitle: "Step 4: ",
          titleDescription: "",
          description: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ],
        },
        {
          stepTitle: "Step 5: ",
          titleDescription: "",
          description: [
            "",
             "",
            "",
            "",
            "",
            "",
            "",
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
   
  ],  
  
  */
