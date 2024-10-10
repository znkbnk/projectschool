const cheatsheetData = [
  {
    taskId: "3D-Interactive-Card",
    content: [
      {
        title: "Components & Hooks",
        subtitle: "App Component",
        details: [
          "Manages theme state and local storage for theme persistence.",
          "Toggles between light and dark themes.",
        ],
      },
      {
        title: "",
        subtitle: "useState Hook",
        details: ["Manages the state of the theme."],
        image: "./cheatsheetImages/task1/1.webp",
      },
      {
        title: "",
        subtitle: "useEffect Hook",
        details: [
          "Updates the document class and local storage when the theme changes.",
        ],
        image: "./cheatsheetImages/task1/2.webp",
      },
      {
        title: "Functions",
        subtitle: "getStorageTheme",
        details: [
          "Retrieves the current theme from local storage or defaults to 'light-theme'.",
        ],
        image: "./cheatsheetImages/task1/4.webp",
      },
      {
        title: "",
        subtitle: "toggleTheme",
        details: ["Toggles between 'light-theme' and 'dark-theme'."],
        image: "./cheatsheetImages/task1/6.webp",
      },
    ],
  },
  {
    taskId: "BMI-Tracker",
    content: [
      {
        title: "State Management",
        subtitle: "",
        details: [
          "The useState hook is used to manage state within functional components. Here, we create state variables for weight, height, BMI, and the message to keep track of user inputs and calculation results.",
        ],
        image: "./cheatsheetImages/task2/1.webp",
      },
      {
        title: "Handle Input Changes",
        subtitle: "",
        details: [
          "Controlled components in React use state to manage form inputs. The onChange event handlers ensure that the state variables weight and height are updated with the current values of the input fields as the user types.",
        ],
        image: "./cheatsheetImages/task2/2.webp",
      },
      {
        title: "Calculate BMI",
        subtitle: "",
        details: [
          "The BMI calculation requires converting height to meters and using the BMI formula. This function handles the computation and ensures that valid inputs are provided before performing the calculation. It also updates the state with the calculated BMI and a message indicating the BMI category.",
        ],
        image: "./cheatsheetImages/task2/3.webp",
      },
      {
        title: "Determine BMI Category",
        subtitle: "",
        details: [
          "This function uses the calculated BMI value to determine the user's BMI category based on predefined ranges. It returns a message that categorizes the BMI as underweight, normal, overweight, or other categories.",
        ],
        image: "./cheatsheetImages/task2/4.webp",
      },
      {
        title: "Reset Form",
        subtitle: "",
        details: [
          "Providing a reset button allows users to clear all the data from the form and reset the component’s state. This enhances user experience by allowing users to quickly start over with new inputs.",
        ],
        image: "./cheatsheetImages/task2/5.webp",
      },
      
    ],
  },
  {
    taskId: "Dark-Light-Mode-Toggle",
    content: [
      {
        title: "State Management",
        subtitle: "",
        details: [
          "State is a way to manage dynamic data in a component. In this case, theme holds the current theme (light or dark).",
          "'useState' initializes theme with a value from local storage using the 'getStorageTheme' function.",
          "'setTheme' is a function to update the state.",
        ],
        image: "./cheatsheetImages/task3/1.webp",
      },

      {
        title: "Effect Hook",
        subtitle: "",
        details: [
          "'useEffect' is used for side effects, such as changing the document's class or updating local storage when theme changes.",
          "The second argument, [theme], specifies that the effect runs every time theme changes.",
        ],
        image: "./cheatsheetImages/task3/2.webp",
      },

      {
        title: "Event Handling",
        subtitle: "",
        details: [
          "Functions are reusable blocks of code. 'toggleTheme' switches the current theme based on its value.",
          "This function is called when the button is clicked.",
        ],
        image: "./cheatsheetImages/task3/3.webp",
      },
      {
        title: "Rendering Articles",
        subtitle: "",
        details: [
          "Mapping over an array to render components is common in React. Here, 'data.map' iterates through data and renders an Article component for each item.",
          "key is a unique identifier for each item in the list, helping React optimize rendering.",
        ],
        image: "./cheatsheetImages/task3/4.webp",
      },
      {
        title: "Moment.js for Date Formatting",
        subtitle: "",
        details: [
          "Moment.js is a library for date manipulation. It formats the date prop into a human-readable string.",
          "This enhances the user experience by displaying dates in a more accessible way.",
        ],
        image: "./cheatsheetImages/task3/5.webp",
      },
    ],
  },
  {
    taskId: "Sortify-Search-by-Name",
    content: [
      {
        title: "Setting up the State",
        subtitle: "",
        details: [
          "In React, state is used to manage dynamic data in the component. Here, 'search' holds the search query entered by the user, and 'contacts' holds the list of contact data from data.js",
          "A React hook used to initialize state. 'setSearch' and 'setContacts' are functions used to update the 'search' and 'contacts' state, respectively.",
        ],
        image: "./cheatsheetImages/task4/1.webp"
      },
         {
        title: "Handling Input Changes",
        subtitle: "",
        details: [
          "A function is used to define a specific task. Here, the 'handleSearchChange' function updates the 'search' state when the user types in the input field.",
          "e.target.value: Captures the current value typed by the user.",
         
        ],
        image: "./cheatsheetImages/task4/2.webp"
      },
         {
        title: "Sorting Contacts by First Name",
        subtitle: "",
        details: [
          "sortName function: This function sorts the contacts alphabetically by first name.",
          "spread operator (...contacts): It creates a copy of the contacts array before sorting, which avoids mutating the original state.",
          "setContacts: Updates the contacts state with the sorted data.",
        ],
        image: "./cheatsheetImages/task4/3.webp"
      },
         {
        title: "JSX: Rendering the Form Input and Table",
        subtitle: "",
        details: [
          "Form.Control: A Bootstrap input field to enter the search query. The 'onChange' event handler listens for user input and triggers 'handleSearchChange'.",
         
        ],
        image: "./cheatsheetImages/task4/4.webp"
      },
         {
        title: "",
        subtitle: "",
        details: [
          "Button component: A Bootstrap button that calls the 'sortName' function when clicked, sorting the contacts.",
          
        ],
        image: "./cheatsheetImages/task4/5.webp"
      },
         {
        title: "",
        subtitle: "",
        details: [
          "Table component: This uses the Bootstrap 'Table' component to render the list of contacts in a tabular format. The 'filter' method is used to display only contacts that match the search input.",
          "map method: It loops through each contact and displays the relevant information in the table rows.",
        ],
        image: "./cheatsheetImages/task4/6.webp"
      },
      {
        title: "Filtering Contacts",
        subtitle: "",
        details: [
          "filter method: Filters the contacts based on the search input. If the 'search' string is empty, it returns all contacts. Otherwise, it returns only those contacts whose first name includes the search term.",
        
        ],
        image: "./cheatsheetImages/task4/7.webp"
      },
    ],
  },

  {
    taskId: "Simple-Quiz-App",
    content: [
      {
        title: "State Management",
        subtitle: "",
        details: [
          "State: A way to store and manage dynamic values in React.",
          "'useState': This hook allows you to create a state variable and a function to update it.",
          "'currentQuestion': Tracks the current question index.",
          "'score': Tracks the total score of the quiz.",
          "'correctAnswers': Tracks the number of correct answers.",
          "'incorrectAnswers': Tracks the number of incorrect answers.",
        ],
        image: "./cheatsheetImages/task5/1.webp"
      },
         {
        title: "Array of Questions",
        subtitle: "",
        details: [
          "Array: Stores a collection of objects, each containing a 'questionText' and an 'answerOptions' array.",
          "'answerOptions': Each object inside 'answerOptions' holds an answerText and a boolean 'isCorrect' to mark if the answer is correct.",
        
        ],
        image: "./cheatsheetImages/task5/2.webp"
      },
         {
        title: "Rendering Questions and Answers",
        subtitle: "",
        details: [
          "Displaying Questions: Access the 'questionText' of the current question using currentQuestion.",
          "Mapping over answer options: map() iterates over each answer option and renders a button for each one.",
          "onClick Event: When a button is clicked, it calls 'handleAnswerButtonClick', passing whether the selected answer is correct.",
        ],
        image: "./cheatsheetImages/task5/3.webp"
      },
         {
        title: "Answer Button Handling",
        subtitle: "",
        details: [
          "Event Handler: Handles what happens when an answer is clicked.",
          "isCorrect: Passed in to check if the selected answer is correct.",
          "State Updates: Increments 'score' and 'correctAnswers' if correct, or 'incorrectAnswers' if incorrect.",
          "Next Question: Moves to the next question or calls 'finishQuiz' if the quiz is over.",
        ],
        image: "./cheatsheetImages/task5/4.webp"
      },
         {
        title: "Finishing the Quiz",
        subtitle: "",
        details: [
          "finishQuiz: Updates 'currentQuestion' to a value beyond the number of questions, which triggers the score section to render.",
          
        ],
        image: "./cheatsheetImages/task5/5.webp"
      },
         {
        title: "Conditional Rendering",
        subtitle: "",
        details: [
          "Conditional Rendering: Displays either the score section or the question section based on whether the quiz is finished (currentQuestion >= questions.length).",
          
        ],
        image: "./cheatsheetImages/task5/6.webp"
      },
    ],
  },
  {
    taskId: "FAQ",
    content: [
      {
        title: "useState Hook",
        subtitle: "useStat': React's useState hook is used to add state to functional components.",
        details: [
          "Here, 'questions' holds the state of the d'ata, and 'setQuestions' is the function used to update that state.",
          "State is used to store information that changes over time, and it re-renders the component when updated.",
        ],
        image: "./cheatsheetImages/task6/1.webp"
      },
         {
        title: "Mapping Over an Array",
        subtitle: "map(): The 'map()' function loops over the questions array and renders a Question component for each element.",
        details: [
          "This allows dynamic rendering of multiple 'Question' components based on the 'data'.",
          "'key={question.id}' ensures each item has a unique identifier, which is important for React’s reconciliation process to optimize rendering.",
          "'{...question}' passes all properties of the 'question' object (like 'title' and 'info') as props to the 'Question' component.",
        ],
        image: "./cheatsheetImages/task6/2.webp"
      },
         {
        title: "Component Props",
        subtitle: "",
        details: [
          "Props are arguments passed from parent components to child components. Here, title and info are destructured from the props object.",
          "Props allow data to be passed from the App component to each Question component.",
        ],
        image: "./cheatsheetImages/task6/3.webp"
      },
         {
        title: "Event Handling",
        subtitle: "onClick Event: The button listens for a click event, and when clicked, the 'setShowInfo' function toggles the value of 'showInfo' (true/false).",
        details: [
          "Clicking the button switches between showing (true) and hiding (false) the information.",
          "This is a common way to toggle visibility in React using the component’s state.",
        ],
        image: "./cheatsheetImages/task6/4.webp"
      },
         {
        title: "Conditional Rendering",
        subtitle: "Conditional Rendering: This line conditionally renders the <p> element. If 'showInfo' is true, the paragraph containing 'info' is displayed; otherwise, it is hidden.",
        details: [
          "This is used to show or hide the question’s details based on the user's interaction.",
        
        ],
        image: "./cheatsheetImages/task6/5.webp"
      },
         {
        title: "Icons for UI Feedback",
        subtitle: "Ternary Operator: The ? : syntax is used to display one of two icons based on the state of showInfo. If showInfo is true, it shows the 'minus' icon, otherwise it shows the 'plus' icon.",
        details: [
          "This provides visual feedback to the user, indicating whether the question’s details are visible or not.",
         
        ],
        image: "./cheatsheetImages/task6/6.webp"
      },
    ],
  },

  {
    taskId: "Birthday-Reminder",
    content: [
      {
        title: "",
        subtitle: "useState Hook",
        details: [
          "'useState' is used to manage the state of the people array, which holds the list of individuals. 'data' is initially imported and assigned as the default value.",
          "'setPeople([])' clears the list when the 'clear all' button is clicked.",
        ],
        image: "./cheatsheetImages/task7/1.webp"
      },
         {
        title: "",
        subtitle: "Event Handling",
        details: [
          "'onClick' is an event handler that listens for button clicks. When clicked, the state of 'people' is updated to an empty array, clearing the list.",
        ],
        image: "./cheatsheetImages/task7/2.webp"
      },
         {
        title: "",
        subtitle: "Rendering Components",
        details: [
          "The List component is responsible for displaying the filtered list of people who have birthdays today, which is calculated using BirthdayLogic.",
        ],
        image: "./cheatsheetImages/task7/3.webp"
      },
         {
        title: "",
        subtitle: "Date Manipulation",
        details: [
          "'Date' objects are used to get today's date and format it as MM-DD to compare with each person’s date of birth (DOB).",
        ],
        image: "./cheatsheetImages/task7/4.webp"
      },
         {
        title: "",
        subtitle: "Filtering an Array",
        details: [
          "The 'filter()' function is used to create a new array, 'birthdaysToday', by checking whether each person’s birthday matches today’s date.",
        ],
        image: "./cheatsheetImages/task7/5.webp"
      },
         {
        title: "",
        subtitle: "Props",
        details: [
          "The 'List' component receives 'people' as props, which contains an array of people who have birthdays today. Props allow data to be passed down from parent components (like App) to child components (like List).",
        ],
        image: "./cheatsheetImages/task7/6.webp"
      },
      {
        title: "",
        subtitle: "Conditional Rendering",
        details: [
          "Conditional rendering is used to display the list only if there are birthdays today (people.length > 0).",
        ],
        image: "./cheatsheetImages/task7/7.webp"
      },
      {
        title: "",
        subtitle: "Rendering a List",
        details: [
          "The 'map()' function iterates over the 'people' array and returns JSX for each person, which includes their 'id', 'name', 'age', and 'image'.",
        ],
        image: "./cheatsheetImages/task7/8.webp"
      },
    ],
  },


  {
    taskId: "Dynamic-Box-Shadow-Generator",
    content: [
      {
        title: "",
        subtitle: "State Management: useState Hook",
        details: [
          "useState: The useState hook is used to manage component state. shadows and controls are initialized with an empty array and an initial control respectively. The setShadows and setControls functions update these states when changes occur.",
          "shadows: Stores an array of shadow styles as strings. Each string represents one layer of a CSS box-shadow.",
          "controls: Manages the number of ControlBox components dynamically rendered on the UI. Each control corresponds to a box shadow layer.",
        ],
        image: "./cheatsheetImages/task8/1.webp"
      },
         {
        title: "",
        subtitle: "Updating Box Shadows: updateShadow Function",
        details: [
          "If the inset property is true, the shadow string will include inset. Otherwise, it's a regular shadow.",
          "The corresponding shadow in the shadows array is updated, and the state is set with setShadows.",
          "s: Object representing shadow properties (x, y, blur, spread, color, and inset).",
          "id: Index of the shadow layer being updated.",
         
        ],
        image: "./cheatsheetImages/task8/2.webp"
      },
         {
        title: "",
        subtitle: "Adding New Shadow Layers: addShadow Function",
        details: [
          "A new control is appended to the controls array, allowing another ControlBox to render.",
          "A blank shadow string is added to the shadows array, ready to be filled in when the user interacts with the new ControlBox.",
        ],
        image: "./cheatsheetImages/task8/3.webp"
      },
         {
        title: "",
        subtitle: "Undo Last Shadow Layer: undoAddLayer Function",
        details: [
          "Checks if there is more than one layer present.",
          "Uses pop() to remove the last control and shadow, updating the state with setControls and setShadows.",
        ],
        image: "./cheatsheetImages/task8/4.webp"
      },
         {
        title: "",
        subtitle: "Dynamic Control Box Components: ControlBox",
        details: [
          "key={index}: React requires a key prop when rendering lists of elements to uniquely identify each component.",
          "id={index}: The id prop is passed to identify which shadow is being updated.",
          "updateShadow={updateShadow}: Passes the updateShadow function as a prop, allowing ControlBox to update the corresponding shadow in the parent component (App).",
        ],
        image: "./cheatsheetImages/task8/5.webp"
      },
         {
        title: "",
        subtitle: "Event Handling for Adding and Undoing Layers",
        details: [
          "The onClick event handler is used to call the respective function. addShadow adds a new shadow layer, and undoAddLayer removes the last one.",
         
        ],
        image: "./cheatsheetImages/task8/6.webp"
      },
    ],
  },
  {
    taskId: "Memory-Game",
    content: [
      {
        title: "App Component",
        subtitle: "State",
        details: [
          "useState(false) creates a 'startAgain' state, which controls when the game should reset.",
         
        ],
        image: "./cheatsheetImages/task9/1.webp"
      },
         {
        title: "",
        subtitle: "Function handleStartAgain",
        details: [
          "When the 'Start Again' button is clicked, the 'startAgain' state is set to 'true', which triggers a reset of the game.",
          "After 100 milliseconds, it resets to false, allowing the user to start the game again.",
        ],
        image: "./cheatsheetImages/task9/2.webp"
      },
         {
        title: "",
        subtitle: "Passing Props",
        details: [
          "The 'Cards' component is passed the 'startAgain' prop, which tells it to shuffle and reset the cards when the game restarts.",
         
        ],
        image: "./cheatsheetImages/task9/3.webp"
      },
         {
        title: "Card Component",
        subtitle: "Props",
        details: [
          "The 'Card' component receives 3 props: item, id, and handleClick. Props are used to pass data from the 'Cards' component.",
         
        ],
        image: "./cheatsheetImages/task9/4.webp"
      },
         {
        title: "",
        subtitle: "Dynamic Class",
        details: [
          "The card's class changes based on its status (item.stat). It can be 'correct', 'wrong', or '' (empty).",
        
        ],
        image: "./cheatsheetImages/task9/5.webp"
      },
         {
        title: "",
        subtitle: "Event Handling",
        details: [
          "onClick={() => handleClick(id)} is an event handler that calls the 'handleClick' function from 'Cards' when a card is clicked.",
          
        ],
        image: "./cheatsheetImages/task9/6.webp"
      },
      {
        title: "Cards Component",
        subtitle: "Shuffling Items",
        details: [
          "setItems([...items].sort(() => Math.random() - 0.5)) shuffles the card array at the beginning and when the game restarts.",
        
        ],
        image: "./cheatsheetImages/task9/7.webp"
      },
      {
        title: "",
        subtitle: "useEffect for Reset",
        details: [
          "useEffect listens for changes in the startAgain prop. When it's true, it resets the items and previous selection.",
         
        ],
        image: "./cheatsheetImages/task9/8.webp"
      },
      {
        title: "",
        subtitle: "State 'prev'",
        details: [
          "'prev' holds the index of the previously clicked card. If no card has been clicked, 'prev' is -1.",
         
        ],
        image: "./cheatsheetImages/task9/9.webp"
      },
      {
        title: "",
        subtitle: "Matching Logic",
        details: [
          "The 'check' function compares the 'id' of the current card with the previous card. If they match, both are marked as 'correct', otherwise, they are temporarily marked 'wrong'.",
          
        ],
        image: "./cheatsheetImages/task9/10.webp"
      },
      {
        title: "",
        subtitle: "Click Handling",
        details: [
          "The handleClick function controls the logic when a card is clicked. If it's the first card, its stat is set to 'active'. If it's the second card, the check function compares them.",
         
        ],
        image: "./cheatsheetImages/task9/11.webp"
      },
    ],
  },



  {
    taskId: "Color-Generator",
    content: [
      {
        title: "App Component",
        subtitle: "Setting up State and Default Color List",
        details: [
          "color: Stores the user's input (the hex code).",
          "error: Boolean state for handling invalid input.",
          "list: Stores a list of shades generated from the input color using the 'Values' library.",
        ],
        image: "./cheatsheetImages/task10/1.webp"
      },
         {
        title: "",
        subtitle: "Handling Form Submission and Color Generation",
        details: [
          "e.preventDefault(): Prevents the form from refreshing the page.",
          "new Values(color).all(20): Uses the 'Values' library to generate a color palette with 20 variations of the input color.",
          "setList(colors): Updates the state to hold the new color palette.",
          "setError(true): Displays an error when an invalid color is input.",
          "Use 'try...catch' for error handling when working with external libraries or user inputs.",
        ],
        image: "./cheatsheetImages/task10/2.webp"
      },
         {
        title: "",
        subtitle: "Form and User Input",
        details: [
          "The 'input' field captures user input for a hex color code and updates the 'color' state via 'setColor'.",
          "The onSubmit event on the 'form' triggers the 'handleSubmit' function.",
          "{error ? 'error' : null} conditionally adds the error class if the user enters invalid input.",
        ],
        image: "./cheatsheetImages/task10/3.webp"
      },
         {
        title: "",
        subtitle: "Displaying the Color List",
        details: [
          "The list state holds the array of colors. The map method iterates through each color, rendering the SingleColor component.",
          "key={index}: A unique key for each item.",
          "{...color}: Destructures and passes all color properties as props.",
          "hexColor: Specific prop for the color's hex value."
        ],
        image: "./cheatsheetImages/task10/4.webp"
      },
         {
        title: "SingleColor Component",
        subtitle: "Managing Single Color Display",
        details: [
          "alert: State to handle when the user copies the hex value to the clipboard.",
          "rgb.join(','): Converts the RGB array into a comma-separated string for the background color.",
          "hexValue: The hex string of the color, prefixed with #.",
          "The 'rgb' and 'hexColor' props are derived from the parent 'App' component and used to display and style the color.",
        ],
        image: "./cheatsheetImages/task10/5.webp"
      },
         {
        title: "",
        subtitle: "Clipboard Copy Functionality",
        details: [
          "navigator.clipboard.writeText(hexValue): Copies the hex color code to the clipboard.",
          "setAlert(true): Displays an alert message confirming the color has been copied.",
        ],
        image: "./cheatsheetImages/task10/6.webp"
      },
      {
        title: "",
        subtitle: "Rendering Single Color Box",
        details: [
          "The className conditionally adds the color-light class for colors with a light background (based on the index).",
          "The style prop sets the backgroundColor using the RGB values.",
          "onClick={copyToClipboard} triggers the copyToClipboard function when the user clicks the color box.",
         
        ],
        image: "./cheatsheetImages/task10/7.webp"
      },
    
    ],
  },


  {
    taskId: "Range-Slider",
    content: [
      {
        title: "",
        subtitle: " State Management with useState Hook",
        details: [
          "'useState' is used to manage the state of 'minVal' (left slider) and 'maxVal' (right slider).",
          "Initial state values are set to the 'min' and 'max' props.",
          "'setMinVal' and 'setMaxVal' are used to update the state whenever the slider values change.",
        ],
        image: "./cheatsheetImages/task11/1.webp"
      },
         {
        title: "",
        subtitle: "Refs for Direct DOM Manipulation",
        details: [
          "'useRef' is used to directly access and manipulate DOM elements ('leftval', 'rightval', and 'range').",
          "This allows us to move the sliders dynamically by changing their position in the DOM without causing a full re-render of the component.",
        ],
        image: "./cheatsheetImages/task11/2.webp"
      },
         {
        title: "",
        subtitle: "Handling Slider Changes",
        details: [
          "<input type='range' />: This creates a slider input. The 'min', 'max', and 'value' attributes control the range limits and current value.",
          "When the slider is moved, the 'onChange' event updates 'minVal' or 'maxVal' using the 'setMinVal' or 'setMaxVal' functions.",
          "The 'Math.min' and 'Math.max' methods ensure that the sliders don't cross over each other by limiting their values.",
        ],
        image: "./cheatsheetImages/task11/3.webp"
      },
         {
        title: "",
        subtitle: "Dynamic CSS with useEffect",
        details: [
          "'useEffect' is used to update the slider's CSS based on changes to 'minVal' and 'maxVal'.",
          "The position (left) and the transform properties are dynamically set on the sliders (leftval, rightval) based on the current values.",
          "This ensures the sliders visually move as the user interacts with them.",
        ],
        image: "./cheatsheetImages/task11/4.webp"
      },
         {
        title: "",
        subtitle: "'useCallback' to Optimize Performance",
        details: [
          "useCallback memoizes the getPercent function to avoid recalculating the percentage every time the component renders.",
          "This is useful for performance optimization when the same function is used multiple times within useEffect.",
        ],
        image: "./cheatsheetImages/task11/5.webp"
      },
         {
        title: "",
        subtitle: "'PropTypes' for Type Checking",
        details: [
          "'PropTypes' is used to ensure the 'min', 'max', and 'onChange' props are passed correctly to the component.",
          "This provides type safety, ensuring that the correct types of data are used.",
        ],
        image: "./cheatsheetImages/task11/6.webp"
      },
    ],
  },
  {
    taskId: "Form-Validation-Component",
    content: [
      {
        title: "",
        subtitle: "Setting Up the State",
        details: [
          "Each 'useState' call creates a state variable and a function to update that state.",
          "Use 'useState' to manage and track form data.",
          "Separate state for error messages and styles helps keep the form dynamic.",
        ],
        image: "./cheatsheetImages/task12/1.webp"
      },
         {
        title: "",
        subtitle: "Validation Logic",
        details: [
          "e.preventDefault() prevents the default form submission behavior.",
          "Username must be longer than 8 characters.",
          "Email must include @gmail.",
          "Password must be at least 8 characters long.",
          "Password and confirm password must match.",
          "Use conditionals to check input validity.",
          "Dynamically update error messages and border colors for a better user experience.",
        ],
        image: "./cheatsheetImages/task12/2.webp"
      },
         {
        title: "",
        subtitle: "Form JSX with Dynamic Styling",
        details: [
          "Each input's border color is dynamically set based on validation (userColor, emailColor, etc.).",
          "Error messages are displayed below each input using conditional rendering (errorUserName, errorEmail, etc.).",
          "The onChange event handler updates the respective state variable whenever the input value changes.",
          "Use inline styles to change the border color dynamically for better visual feedback.",
          "Render error messages conditionally to guide the user if inputs are invalid.",

        ],
      },
         {
        title: "",
        subtitle: "Button Event Handler",
        details: [
          "Always use e.preventDefault() to stop the default form behavior if you are handling form submission via JavaScript.",
          
        ],
        image: "./cheatsheetImages/task12/3.webp"
      },
         
    ],
  },
  {
    taskId: "Interactive-Power-BI-Bar-Chart",
    content: [
      {
        title: "",
        subtitle: "Imports and Setup",
        details: [
          "'useState' from React is used to manage state in functional components.",
          "The 'Bar' component from 'react-chartjs-2' is used to create a bar chart.",
          "The necessary components from Chart.js are imported and registered to ensure the chart functions correctly.",
          "Always register Chart.js components like 'CategoryScale', 'LinearScale', 'BarElement', 'Tooltip', and 'Legend' before using them in a React component.",
        ],
        image: "./cheatsheetImages/taskLive2/1.webp"
      },
         {
        title: "",
        subtitle: "State and Initial Data",
        details: [
          "'ageGroups': An array of age group labels for the x-axis of the bar chart.",
          "'userData': An array representing the number of users for each age group.",
          "'useState(null)': 'filteredData' is used to manage the filtered version of the user data. Initially, it's set to 'null' because no filtering is applied when the page first loads.",
          
        ],
        image: "./cheatsheetImages/taskLive2/2.webp"
      },
         {
        title: "",
        subtitle: "Chart Data Setup",
        details: [
          "'labels': The x-axis labels representing the age groups.",
          "'datasets': This array defines the dataset for the chart. The 'data' property represents the number of users for each age group.",
          "'backgroundColor' and 'borderColor': Define the color scheme for the bars.",
          "'borderWidth': Defines the thickness of the bar borders.",
          "The 'data' object is the main configuration for Chart.js, allowing you to customize labels, datasets, and styles.",
        ],
        image: "./cheatsheetImages/taskLive2/3.webp"
      },
         {
        title: "",
        subtitle: "Chart Options with Event Handling",
        details: [
          "'responsive': Ensures the chart adapts to the size of its container.",
          "'plugins.legend.display': Controls whether the legend (key) is displayed.",
          "'onClick': Event handler that captures clicks on a specific bar. It retrieves the index of the clicked bar and uses that to determine which age group was selected.",
          "'handleBarClick': Called when a bar is clicked to apply filtering.",

        ],
        image: "./cheatsheetImages/taskLive2/4.webp"
      },
         {
        title: "",
        subtitle: "Handle Bar Click for Filtering",
        details: [
          "'handleBarClick': This function filters the user data based on the selected age group. It loops through the original 'userData' and sets all values to 0 except for the selected age group.",
          "'setFilteredData': Updates the chart with the filtered data, changing the dataset to show only the selected age group in a different color.",
          "You can use 'map' to transform arrays and conditionally filter data. This is useful when dynamically updating charts or UI elements based on user input.",
        ],
        image: "./cheatsheetImages/taskLive2/5.webp"
      },
         {
        title: "",
        subtitle: "Return JSX with Chart",
        details: [
          "The 'Bar' component from 'react-chartjs-2' is rendered here, displaying the bar chart. If 'filteredData' is available, the chart will show the filtered dataset; otherwise, it defaults to the original dataset (data).",
          "The chart also uses the 'options' for customization and event handling.",
          "Use conditional rendering (filteredData || data) to ensure your chart displays the correct data, whether it's the original or filtered version.",
        ],
        image: "./cheatsheetImages/taskLive2/6.webp"
      },
    ],
  },
  {
    taskId: "Markdown-Preview-App",
    content: [
      {
        title: "",
        subtitle: "State Management with useState",
        details: [
          "'useState': This is a React hook used to manage state in functional components.",
          "'markdown': This is the state variable that holds the current value of the markdown text.",
          "'setMarkdown': This is the function used to update the value of 'markdown'.",
          "'# Markdown Preview:': The initial value for the 'markdown' state.",
          "The state helps React components to keep track of data between renders. When 'setMarkdown' is called, it updates the markd'own value and re-renders the component."
        ],
        image: "./cheatsheetImages/task13/1.webp"
      },
         {
        title: "",
        subtitle: "Handling User Input (textarea)",
        details: [
          "<textarea>: HTML element where the user can type their markdown text.",
          "value={markdown}: Links the value of the textarea to the 'markdown' state, so the content of the textarea reflects the current state.",
          "onChange={(e) => setMarkdown(e.target.value)}: This is an event handler that listens for user input. It triggers when the user types, capturing the new value with 'e.target.value' and updating the 'markdown' state.",
          "Event Handling in React involves passing a function to handle the user interaction (e.g., typing, clicking). The 'onChange' event is used to handle form inputs like 'textarea'.",
        ],
        image: "./cheatsheetImages/task13/2.webp"
      },
        
    ],
  },
  {
    taskId: "Menu-App",
    content: [
      {
        title: "App Component",
        subtitle: "State",
        details: [
          "'menuItems': Holds the list of items to be displayed.",
          "'categories': Stores all the unique categories from 'items' plus 'all'.",
          "The useState hook is used to manage the state of the menuItems and categories."
        ],
        image: "./cheatsheetImages/task14/1.webp"
      },
         {
        title: "Event Handling",
        subtitle: "",
        details: [
          " The filterItems function filters the items based on the selected category.",
          "When the category is 'all', it resets menuItems to the entire items array. Otherwise, it filters items by category.",
        ],
        image: "./cheatsheetImages/task14/2.webp"
      },
      {
        title: "Categories Component",
        subtitle: "Props",
        details: [
          "The Categories component accepts categories (array of categories) and filterItems (function to filter menu items) as props.",
        ],
        image: "./cheatsheetImages/task14/5.webp"
      },
         {
        title: "",
        subtitle: "State",
        details: [
          "Manages the currently active category using useState.",
        ],
        image: "./cheatsheetImages/task14/3.webp"
      },
         {
        title: "",
        subtitle: "Event Handling",
        details: [
          "The handleCategoryClick function is called when a category button is clicked.",
          "This function triggers the 'filterItems' function from 'App' to update the list of menu items and sets the clicked category as the active one.",
        ],
        image: "./cheatsheetImages/task14/4.webp"
      },
      
         {
        title: "",
        subtitle: "Conditional Styling",
        details: [
          "Adds the 'active' class to the button of the currently selected category.",
        ],
        image: "./cheatsheetImages/task14/6.webp"
      },
      {
        title: "Menu Component",
        subtitle: "Props",
        details: [
          "The Menu component receives items as props, which is an array of menu items.",
         
        ],
        image: "./cheatsheetImages/task14/7.webp"
      },
      {
        title: "",
        subtitle: "Rendering Items",
        details: [
          " It uses the .map() method to loop through the 'items' array and display each menu item in a structured format.",
          "Menu item properties like 'id', 'title', 'img', 'desc', and 'price' are destructured for easier use within the JSX."
          
        ],
        image: "./cheatsheetImages/task14/8.webp"
      },
     
    ],
  },
  {
    taskId: "Responsive-Navbar",
    content: [
      {
        title: "",
        subtitle: "State Management: useState Hook",
        details: [
          "Initializes a state variable 'showLinks' to control whether the navigation links are displayed or not.",
          "'useState' is used to declare a piece of state in functional components.",
          "'showLinks' holds the current state (either 'true' or 'false').",
          "'setShowLinks' is the function used to update the state.",
          "'useState(false)' means the links will initially be hidden.",
        ],
        image: "./cheatsheetImages/task15/1.webp"
      },
         {
        title: "",
        subtitle: "References: useRef Hook",
        details: [
          "'linksContainerRef' and 'linksRef' are references to DOM elements (<div> and <ul> respectively).",
          "'useRef' allows you to directly interact with DOM elements without re-rendering the component.",
          "'useRef' is commonly used when you need direct access to a DOM element.",
          "It's helpful for manipulating element styles or sizes.",
          "The 'useRef' doesn't cause re-renders when its value is changed.",
        ],
        image: "./cheatsheetImages/task15/2.webp"
      },
         {
        title: "",
        subtitle: "Event Handling: toggleLinks Function",
        details: [
          "Toggles the state of 'showLinks' between 'true' and 'false' when the menu icon is clicked.",
          "Event handling in React involves creating functions like 'toggleLinks' and assigning them to event listeners (e.g., 'onClick').",
          "Inverting the state with '!showLinks' ensures that every click changes the visibility of the links.",
        ],
        image: "./cheatsheetImages/task15/3.webp"
      },
         {
        title: "",
        subtitle: "Side Effects: useEffect Hook",
        details: [
          "Calculates the height of the 'linksRef' (<ul> element) and dynamically sets the height of the 'linksContainerRef' (<div> element) based on whether the links are visible or not.",
          "'useEffect' is used to perform side effects like DOM manipulation after the component has rendered.",
          "The 'useEffect' runs every time 'showLinks' changes, adjusting the height of the container.",
          "Without this, the height transition for the links container would be static or fixed."
        ],
        image: "./cheatsheetImages/task15/4.webp"
      },
         {
        title: "",
        subtitle: "Rendering the JSX Elements",
        details: [
          "Renders a button with an event handler attached to toggle the links when clicked. The 'FaBars' component represents the menu icon.",
          "React components like 'FaBars' from 'react-icons' are reusable pieces of UI, in this case, an icon.",
          "The 'onClick' event triggers the 'toggleLinks' function to show or hide the navigation links.",
          "Use components from libraries like 'react-icons' for scalable and lightweight icons.",
        ],
        image: "./cheatsheetImages/task15/5.webp"
      },
         {
        title: "",
        subtitle: "Rendering the Links",
        details: [
          "Renders a list of navigation links dynamically by mapping over the 'links' array.",
          "In React, you can render lists using 'map()' to dynamically create elements based on data.",
          "Each child in a list must have a unique 'key' prop ('id' in this case) to help React optimize rendering.",
          "Use the 'map()' function to easily render multiple elements from an array.",
        ],
        image: "./cheatsheetImages/task15/6.webp"
      },
    ],
  },
  {
    taskId: "Pagination-Page",
    content: [
      {
        title: "App.js",
        subtitle: "State Management",
        details: [
          "Manage the app's current state, including the current page and followers.",
          "'useState': Initializes state variables 'page' (current page number) and 'followers' (list of followers to display on the current page).",
        ],
        image: "./cheatsheetImages/task16/1.webp"
      },
         {
        title: "",
        subtitle: "useEffect Hook",
        details: [
          "Trigger side effects (e.g., updating followers) when data or page changes.",
          "'useEffect': Runs when 'data', 'loading', or 'page' changes, updating the list of followers for the current page.",
          "",
        ],
        image: "./cheatsheetImages/task16/2.webp"
      },
         {
        title: "",
        subtitle: "Event Handling",
        details: [
          "Navigate between pages and jump to a specific page.",
          "'nextPage': Advances to the next page, looping back to the first if at the end.",
          "'prevPage': Goes to the previous page, looping to the last if at the first.",
          "'handlePage': Jumps to a specific page number.",
        ],
        image: "./cheatsheetImages/task16/3.webp"
      },
         {
        title: "",
        subtitle: "Rendering Followers",
        details: [
          "Display followers for the current page.",
          "Renders a list of followers by passing follower data to the Follower component for display.",
        ],
        image: "./cheatsheetImages/task16/4.webp"
      },
         {
        title: "Follower.js",
        subtitle: "Follower Component",
        details: [
          "Display a single follower's information.",
          "Receives props (avatar_url, login, html_url) and displays the follower's avatar, username, and profile link.",
          "",
        ],
        image: "./cheatsheetImages/task16/5.webp"
      },
         {
        title: "useFetch.js",
        subtitle: "Custom Hook",
        details: [
          "Fetch follower data from the GitHub API and paginate it.",
          "'loading': Tracks whether data is still being fetched.",
          "'data': Stores paginated follower data.",
          "'getProducts': Fetches the follower data and applies pagination.",
          "'useEffect': Ensures getProducts runs when the component mounts.",
        ],
        image: "./cheatsheetImages/task16/6.webp"
      },
      {
        title: "utils.js",
        subtitle: "Pagination Logic",
        details: [
          "Paginate the followers into smaller chunks for each page.",
          "Breaks the follower data into smaller arrays, each representing a page with 10 followers.",
          "",
        ],
        image: "./cheatsheetImages/task16/7.webp"
      },
    
    ],
  },

  {
    taskId: "Search-Bar",
    content: [
      {
        title: "App Component",
        subtitle: "Initializing State",
        details: [
          "Initializes an empty array 'results' to store search results.",
          "State is used to store and manage dynamic data (the search results in this case).",
          "Think of 'useState' as a way to make the UI react to changes in data. When 'results' change, the UI will update accordingly.",
        ],
        image: "./cheatsheetImages/task17/1.webp"
      },
         {
        title: "",
        subtitle: "Conditional Rendering of Results",
        details: [
          "This checks if there are any results before rendering the 'SearchResultsList' component.",
          "Prevents rendering the list if no search results exist.",
          "Conditional rendering is useful when you only want to display certain parts of the UI based on specific conditions (e.g., results existing or not).",
        ],
        image: "./cheatsheetImages/task17/2.webp"
      },
         {
        title: "",
        subtitle: "Passing Props to Child Components",
        details: [
          "Passes the setResults function as a prop to the SearchBar component.",
          "This allows the SearchBar component to update the search results in the parent component (App).",
          "Props allow parent-child communication in React. You can pass functions or data from a parent to a child to handle logic outside the child component.",
        ],
        image: "./cheatsheetImages/task17/3.webp"
      },
         {
        title: "SearchBar Component",
        subtitle: "Handling Input State",
        details: [
          "input stores the value typed by the user into the search bar.",
          "setInput updates the input value when the user types.",
          "State management is essential for handling user input dynamically.",
        ],
        image: "./cheatsheetImages/task17/4.webp"
      },
         {
        title: "",
        subtitle: "Fetching Data Based on User Input",
        details: [
          "Fetches user data from an API and filters it based on the 'value' typed by the user.",
          "Retrieves user data that matches the search query.",
          "This is a basic example of fetching data asynchronously and updating the UI based on user input.",
        ],
        image: "./cheatsheetImages/task17/5.webp"
      },
      {
        title: "",
        subtitle: "Handling User Typing (Input Change)",
        details: [
          "Updates the input value and triggers the 'fetchData' function to search for matching users.",
          "To fetch data dynamically as the user types.",
          "'handleChange' is an event handler that allows dynamic interaction with the search input.",
        ],
        image: "./cheatsheetImages/task17/6.webp"
      }, 
      {
        title: "",
        subtitle: "Handling Selection",
        details: [
          "Sets the selected result, hides the search results, and clears the search input.",
          "To update the state when a user selects a result and reset the search bar.",
          "This function manages the flow after the user has clicked on a search result, updating the app state and UI accordingly.",
        ],
        image: "./cheatsheetImages/task17/8.webp"
      },
      {
        title: "",
        subtitle: "Conditionally Displaying Selected Result",
        details: [
          "Conditionally renders the selected result's details only if a result has been selected.",
          "To display the selected user's information dynamically.",
          "This is another example of conditional rendering, which is essential when handling dynamic data.",
        ],
        image: "./cheatsheetImages/task17/9.webp"
      }, 
      
      {
        title: "SearchResult Component",
        subtitle: "Displaying Each User Result",
        details: [
          "Displays the name of a user and calls the 'onSelect' function when clicked.",
          "To display a search result and allow the user to select it.",
          "Using the 'onClick' event, we can detect when a user selects a search result and handle the selection.",
        ],
        image: "./cheatsheetImages/task17/7.webp"
      },   {
        title: "SearchResultsList Component",
        subtitle: "Rendering the List of Results",
        details: [
          "Iterates over the 'results' array and renders a 'SearchResult' component for each user.",
          "To render each user result as an individual clickable item.",
          "Always use 'key' props when rendering lists in React to ensure each item is uniquely identified by React for performance optimization.",
        ],
        image: "./cheatsheetImages/task17/10.webp"
      },
    ],
  },
  {
    taskId: "Dropdown",
    content: [
      {
        title: "",
        subtitle: "Setting Up State with useState",
        details: [
          "'isOpenSelect' is a state variable that tracks whether the dropdown options are visible.",
          "'setIsOpenSelect' is the function used to update 'isOpenSelect'.",
          "'useState(false)' initializes the dropdown as closed (false).",
          "You can toggle the dropdown's visibility by updating the state ('true' for open, 'false' for closed).",
        ],
        image: "./cheatsheetImages/task18/1.webp"
      },
         {
        title: "",
        subtitle: "Using useRef for Uncontrolled Input",
        details: [
          "'languageInput' is a ref that directly references the DOM element (<input>).",
          "Refs are useful when you want to access or manipulate DOM elements without triggering a re-render.",
          "'useRef' is ideal for situations like focusing an input field, or in this case, updating the input value without using state.",
        ],
        image: "./cheatsheetImages/task18/2.webp"
      },
         {
        title: "",
        subtitle: "Handling Input Click Event to Toggle Dropdown",
        details: [
          "The input field is used to display the selected language.",
          "'onClick={toggleOptions}' triggers the dropdown to open or close when clicked.",
          "'onBlur={() => setIsOpenSelect(false)}' closes the dropdown when the input loses focus.",
          "'ref={languageInput}' associates the 'input' with the 'useRef' created earlier.",
          "The 'readOnly' attribute prevents the user from typing directly into the input field.",
          "Use 'onBlur' to close the dropdown when clicking outside of the input field.",
        ],
        image: "./cheatsheetImages/task18/3.webp"
      },
         {
        title: "",
        subtitle: "Toggling Dropdown Options Visibility",
        details: [
          "This function toggles the state between 'true' and 'false', effectively opening or closing the dropdown.",
          "Use '!isOpenSelect' to switch between the current state ('true' or 'false').",
        ],
        image: "./cheatsheetImages/task18/4.webp"
      },
         {
        title: "",
        subtitle: "Rendering the Dropdown Options Conditionally",
        details: [
          "The dropdown list is shown conditionally based on the value of 'isOpenSelect'. If 'true', the 'options' class receives the 'active' class, making the options visible.",
          "'optionsArray' is an array of languages that is mapped to a list of <li> elements.",
          "Each list item triggers the 'selectLanguage' function when clicked, updating the input value.",
          "Use '.map()' to dynamically render a list of items. Attach event listeners (onClick) to handle user interactions.",
        ],
        image: "./cheatsheetImages/task18/5.webp"
      },
         {
        title: "",
        subtitle: "Selecting a Language and Updating the Input",
        details: [
          "When an option is clicked, 'e.target.textContent' retrieves the text of the clicked <li> element (the language name).",
          "'languageInput.current.value' sets the input field's value to the selected language.",
          "'setIsOpenSelect(false)' closes the dropdown after selection.",
          "Use 'e.target.textContent' to capture the text of the clicked option.",
        ],
        image: "./cheatsheetImages/task18/6.webp"
      },
      {
        title: "",
        subtitle: "Icon Toggling with Conditional Class",
        details: [
          "The <span> contains an icon (faCaretDown) from FontAwesome, which serves as a visual cue for the dropdown.",
          "The 'className' changes based on the 'isOpenSelect' state. When 'active', the icon rotates or changes styling to indicate the dropdown is open.",
          "Use conditional classes to style elements based on component state (e.g., for rotating the caret icon).",
        ],
        image: "./cheatsheetImages/task18/7.webp"
      },
    ],
  },
 {
      taskId: "Sidebar",
      content: [
        {
          title: "",
          subtitle: "Props - Passing Data to SidebarItem",
          details: [
            "Key Prop: 'key={index}' helps React optimize rendering by uniquely identifying each list item.",
            "Props: 'item' is passed as a prop to 'SidebarItem', allowing the child component to receive and use data from its parent.",
          ],
          image: "./cheatsheetImages/task19/1.webp"
        },
           {
          title: "",
          subtitle: "useState Hook - Managing State in SidebarItem",
          details: [
            "State Management: 'open' holds the state (whether the sidebar item is expanded). 'setOpen' is used to update the state.",
            "useState Hook: Initializes the state to 'false', meaning the sidebar item is collapsed by default.",
          ],
          image: "./cheatsheetImages/task19/2.webp"
        },
           {
          title: "",
          subtitle: "Conditional Rendering - Toggling Sidebar Items",
          details: [
            "Conditional Rendering: Uses a ternary operator to apply different classes based on the 'open' state. When 'open' is 'true', the 'open' class is applied.",
            "Dynamic Classes: The class name changes depending on the component state, affecting the UI styling (e.g., expanding or collapsing the sidebar item).",
          ],
          image: "./cheatsheetImages/task19/3.webp"
        },
           {
          title: "",
          subtitle: "Event Handling - Toggling State",
          details: [
            "Event Handling: The 'onClick' event triggers a function to update the 'open' state. When clicked, 'setOpen' toggles the state between 'true' and 'false'.",
            "State Toggle: '!open' inverts the current state (expands or collapses the menu).",
          ],
          image: "./cheatsheetImages/task19/4.webp"
        },
           {
          title: "",
          subtitle: "Recursive Rendering - Nested Sidebar Items",
          details: [
            "Recursive Components: If an item has children (item.childrens), it recursively renders 'SidebarItem' for each child, enabling nested submenus.",
            "Mapping: Loops over the children array and renders each child as a 'SidebarItem'.",
          ],
          image: "./cheatsheetImages/task19/5.webp"
        },
           {
          title: "",
          subtitle: "Conditional Rendering - Render Link if No Children",
          details: [
            "No Children: If the item does not have children (!item.childrens), it renders as a clickable link (<a>).",
            "Optional Props: 'item.path' defines the link's URL; 'item.icon' displays an icon if provided.",
          ],
          image: "./cheatsheetImages/task19/6.webp"
        },
         {
          title: "",
          subtitle: "Sidebar Component - Mapping Items",
          details: [
            "Mapping: Iterates over the 'items' array from the 'sidebar.json' file and renders a 'SidebarItem' for each element.",
            "Key Prop: Provides a unique 'key' to help React track each item during re-renders.",
          ],
          image: "./cheatsheetImages/task19/7.webp"
        },
      ],
    },
    {
      taskId: "Dynamic-Table-with-Sorting-and-Copy-Functionality",
      content: [
        {
          title: "",
          subtitle: "useTable Hook - Creating a Table",
          details: [
            "useTable Hook: 'useTable' is a hook provided by 'react-table' for managing table functionalities like rows and columns.",
            "Destructuring: Functions like 'getTableProps', 'headerGroups', and 'rows' are extracted to manage table rendering, sorting, and row preparation.",
            "useSortBy: Hook used to add sorting capabilities to the table.",
          ],
          image: "./cheatsheetImages/task20/1.webp"
        },
           {
          title: "",
          subtitle: "Defining Columns for the Table",
          details: [
            "Columns Definition: Each object inside the array defines a column, with 'Header' being the column name and 'accessor' being the key from the data used to display the corresponding value.",
            "Memoization: 'React.useMemo' is used to optimize performance by memoizing the column structure.",
          ],
          image: "./cheatsheetImages/task20/2.webp"
        },
           {
          title: "",
          subtitle: "Memoizing Data",
          details: [
            "Memoizing Data: The useMemo hook is used to avoid recalculating the data on every render.",
            "fakeData: This variable holds mock data (from MOCK_DATA.json), which is then passed into the table as the data source.",
          ],
          image: "./cheatsheetImages/task20/3.webp"
        },
           {
          title: "",
          subtitle: "Rendering Table Headers",
          details: [
            "Dynamic Rendering: Uses 'headerGroups.map()' to dynamically render the table headers.",
            "Sorting Indicators: Shows sorting indicators (🔽 for descending and 🔼 for ascending) based on the sorting state.",
            "Sorting Props: 'getSortByToggleProps' adds sorting capabilities to the column headers.",
          ],
          image: "./cheatsheetImages/task20/4.webp"
        },
           {
          title: "",
          subtitle: "Rendering Table Body",
          details: [
            "Row Mapping: Loops through 'rows' and calls 'prepareRow(row)' to prepare each row for rendering.",
            "Cell Rendering: For each row, the cells are rendered dynamically with 'row.cells.map(cell => ... )'.",
          ],
          image: "./cheatsheetImages/task20/5.webp"
        },
           {
          title: "",
          subtitle: "Cell with Actions - Custom Button",
          details: [
            "Custom Cell Render: The 'Cell' property allows you to define custom content for a cell. In this case, a 'CopyButton' component is rendered, passing the full name as the text.",
            "Accessing Row Data: 'row.original' gives you access to the row's original data (in this case, first_name and last_name).",
          ],
          image: "./cheatsheetImages/task20/6.webp"
        },
        {
          title: "",
          subtitle: "CopyButton Component - Copying Text to Clipboard",
          details: [
            "Clipboard API: 'navigator.clipboard.writeText()' copies the provided text to the user's clipboard.",
            "Button Component: This reusable 'CopyButton' displays a button and triggers the 'copyToClipboard' function on click.",
          ],
          image: "./cheatsheetImages/task/.webp"
        },
        {
          title: "",
          subtitle: "React-Table Sorting Example",
          details: [
            "Sorting Indicator: Shows an arrow indicating whether the column is sorted in ascending or descending order based on the 'isSorted' and 'isSortedDesc' properties.",
            
          ],
          image: "./cheatsheetImages/task/.webp"
        },
      ],
    },
    {
      taskId: "Activity-Management-Dashboard",
      content: [
        {
          title: "",
          subtitle: "Display Activity Name",
          details: [
            "Use Material-UI's Typography component for consistent text styling and sizing throughout the application.",
            
          ],
          image: "./cheatsheetImages/taskLive3/1.webp"
        },
           {
          title: "",
          subtitle: "Display List of Records",
          details: [
            "The 'map()' function is essential for rendering lists in React. It ensures that each record is uniquely identified with a 'key' prop, which helps React optimize rendering performance.",
            
          ],
          image: "./cheatsheetImages/taskLive3/2.webp"
        },
           {
          title: "",
          subtitle: "Display User Claims",
          details: [
            "Combining user names with dates in the displayed text provides a clear context for the claims, improving user understanding.",
           
          ],
          image: "./cheatsheetImages/taskLive3/3.webp"
        },
           {
          title: "",
          subtitle: "Display Rules List",
          details: [
            "Using a simple list format for rules enhances readability and helps participants easily find important information.",
          
          ],
          image: "./cheatsheetImages/taskLive3/4.webp"
        },
         
      ],
    },
    {
      taskId: "To-Do-App",
      content: [
        {
          title: "",
          subtitle: "Managing State with useState",
          details: [
            "'useState' is a React Hook used to manage state in functional components.",
            "Here, 'todos' holds the list of todo items, and 'setTodos' is the function to update this state.",
            "To initialize state, pass the default value as an argument to 'useState'.",
          ],
          image: "./cheatsheetImages/task21/1.webp"
        },
           {
          title: "",
          subtitle: "Adding Todos",
          details: [
            "This function adds a new todo item to the 'todos' state.",
            "It creates a new todo object with a unique ID (using uuidv4), a task description, and initial values for 'completed' and 'isEditing'.",
            "Always spread the existing state when updating it to maintain its previous values.",
          ],
          image: "./cheatsheetImages/task21/2.webp"
        },
           {
          title: "",
          subtitle: "Deleting Todos",
          details: [
            "This function removes a todo from the list by filtering out the todo with the given ID.",
            "'filter' creates a new array excluding the todo that matches the ID.",
            "Use 'filter' for immutability; it returns a new array instead of modifying the existing state.",
          ],
          image: "./cheatsheetImages/task21/3.webp"
        },
           {
          title: "",
          subtitle: "Toggling Completion Status",
          details: [
            "This function toggles the 'completed' status of a todo item by updating the relevant todo's state.",
            "It uses 'map' to create a new array with the updated todo.",
            "Always return a new object when updating state to ensure React can detect changes.",
          ],
          image: "./cheatsheetImages/task21/4.webp"
        },
           {
          title: "",
          subtitle: "Editing Todos",
          details: [
            "This function updates the task of a todo and toggles its editing state.",
            "Similar to toggling completion, it uses 'map' to create a new array with the updated todo.",
            "When modifying objects in state, always use spread syntax to preserve immutability.",
          ],
          image: "./cheatsheetImages/task21/5.webp"
        },
           {
          title: "",
          subtitle: "Handling Form Submission",
          details: [
            "This function handles the form submission for adding a new todo.",
            "'e.preventDefault()' prevents the default form submission behavior, allowing for custom handling.",
            "It checks if the input value is not empty before calling 'addTodo'.",
          ],
          image: "./cheatsheetImages/task21/6.webp"
        },
        {
          title: "",
          subtitle: "Using Props",
          details: [
            "Props allow data to be passed from parent components to child components.",
            "Here, 'editTodo' and 'task' are received as props, enabling the 'EditTodoForm' to access the necessary functionality and data.",
            "Use destructuring to easily access props in functional components.",
          ],
          image: "./cheatsheetImages/task21/7.webp"
        },
        {
          title: "",
          subtitle: "Displaying Toast Notifications",
          details: [
            "The application uses 'react-toastify' to display notifications when todos are marked as completed or incomplete.",
            "'toast.success()' creates a success notification.",
            "Notifications improve user experience by providing feedback on actions taken.",
          ],
          image: "./cheatsheetImages/task21/8.webp"
        },
      ],
    },
    {
      taskId: "Testimonials",
      content: [
        {
          title: "",
          subtitle: "State Initialization",
          details: [
            "'currentIndex': Tracks which testimonial is currently displayed.",
            "'setCurrentIndex': Updates the value of currentIndex.",
            "'useState(0)': Initializes the state variable 'currentIndex' to 0, meaning the first testimonial will be displayed initially.",
          ],
          image: "./cheatsheetImages/task22/4.webp"
        },
        {
          title: "",
          subtitle: "GSAP Animation using useEffect",
          details: [
            "'useEffect': This Hook runs after the component renders. The empty [] ensures it runs only once (on mount).",
            "'gsap.to': Animates the '.testimonials' class by changing the background color over 4 seconds, repeating infinitely (repeat: -1) with a 'yoyo' effect (reverses the animation).",
            "GSAP is highly customizable for adding animations and transitions.",
          ],
          image: "./cheatsheetImages/task22/1.webp"
        },
           {
          title: "",
          subtitle: "Navigation Functions",
          details: [
            "'handlePrevClick': Decreases the current index to show the previous testimonial. Uses modulus (%) to loop back to the last item when reaching the beginning.",
            "'handleNextClick': Increases the current index to show the next testimonial. Loops back to the first item when reaching the end.",
            "Using 'modulus' (%) is a common trick for creating circular navigation.",
          ],
          image: "./cheatsheetImages/task22/2.webp"
        },
           {
          title: "",
          subtitle: "Rendering the Testimonials",
          details: [
            "'testimonials[currentIndex]': Displays the current testimonial's quote and author based on the 'currentIndex' state.",
          
          ],
          image: "./cheatsheetImages/task22/3.webp"
        },
       
           {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "./cheatsheetImages/task/.webp"
        },
           {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "./cheatsheetImages/task/.webp"
        },
      ],
    },








];

export default cheatsheetData;

/*   


   {
      taskId: "",
      content: [
        {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "./cheatsheetImages/task/.webp"
        },
           {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "./cheatsheetImages/task/.webp"
        },
           {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "./cheatsheetImages/task/.webp"
        },
           {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "./cheatsheetImages/task/.webp"
        },
           {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "./cheatsheetImages/task/.webp"
        },
           {
          title: "",
          subtitle: "",
          details: [
            "",
            "",
            "",
          ],
          image: "./cheatsheetImages/task/.webp"
        },
      ],
    },



  */


    