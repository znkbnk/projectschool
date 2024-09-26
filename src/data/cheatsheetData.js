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
