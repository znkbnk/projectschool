/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-escape */
const authorsData = [
  {
    name: { first: "Jevin", last: "B" },
    position: "React Developer",
    description:
      "As a self-taught front-end developer specializing in React, I understand the challenge of finding practical projects while learning. To help others in the same position, I created this project to provide aspiring developers with the resources and opportunities to improve their skills and succeed in front-end development.",
    picture: { medium: require("../images/me.webp") },
    social: {
      instagram: "https://instagram.com/reactlessons",
      github: "https://github.com/znkbnk",
    },
  },
  {
    name: { first: "WebDevWizard", last: "" },
    position: "MERN Developer",
    description:
      "I'm WebDevWizard, a MERN stack developer and content creator on Instagram. I specialize in building full-stack applications and sharing coding tips and tutorials to help others level up their web development skills.",
    picture: { medium: require("../images/authorWizard.webp") },
    social: {
      instagram: "https://www.instagram.com/webdevwizard0/",
    },
  },
];

export default authorsData;

const tasksData = {
  Live: [
    {
      taskId: "Basic-Android-React-Native-App-with-Google-Login",
      taskTitle: "Basic Android React-Native App with Google Login",
      introduction:
        "A simple and minimalistic Android app built with React-Native and Expo, featuring Google Sign-In, a basic home screen, a user profile page displaying the user's photo and name, and a logout button to return to the home screen.",
      task: {
        taskDescription:
          "I'm looking for a simple and minimalistic Android app developed using React-Native and Expo. The app should have a Google login button, a basic home screen, a user profile page, and a logout button.",
        platform: "Freelancer",
        requirements: [
          "Google Sign-In functionality",
          "User profile page displaying profile picture and full name",
          "Basic home screen",
          "Logout button functionality",
          "The app should be simple and minimalistic",
          "The app must run smoothly on emulator",
        ],
      },
      steps: [
        {
          stepTitle: "Step 1: Set Up the Project",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Install Expo CLI",
              descriptions: [
                "Open your terminal.",
                "Run the command to install Expo globally.",
              ],
            },
            {
              subtitleDescription: "Create a New Expo Project",
              descriptions: [
                "Use the terminal to create a new project using the Expo command.",
                "Choose a blank template for simplicity.",
              ],
            },
            {
              subtitleDescription: "Navigate into Your Project",
              descriptions: [
                "Once the project is created, navigate into the project directory.",
              ],
            },
            {
              subtitleDescription: "Start the Development Server",
              descriptions: [
                "Run the project using Expo, which will open a browser with options for testing on an emulator or device.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Install Dependencies",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Install AsyncStorage",
              descriptions: [
                "This will allow you to store user information locally.",
                "Follow the command to install AsyncStorage using your package manager.",
              ],
            },
            {
              subtitleDescription: "Install Expo Google Authentication",
              descriptions: [
                "Install Expo's Google authentication package. This will handle Google login.",
              ],
            },
            {
              subtitleDescription: "Install WebBrowser",
              descriptions: [
                "WebBrowser from Expo helps complete the authentication process in the background.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Set Up Basic Project Structure",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create components Folder",
              descriptions: [
                "Inside the 'components' folder, you'll create two main components: one for the home screen and another for the profile screen.",
              ],
            },
            {
              subtitleDescription: "Create styles Folder",
              descriptions: [
                "Create a folder called 'styles' for managing your app's styles separately from the logic.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create the Home Screen Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create a New JavaScript File",
              descriptions: [
                "Inside the 'components' folder, create a new file for the HomeScreen component.",
              ],
            },
            {
              subtitleDescription: "Design the Home Screen",
              descriptions: [
                "Structure the screen to have a simple 'Welcome' message and a button for Google Sign-In.",
                "Add a condition to disable the button until the Google login process is ready.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create the Profile Screen Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create a New JavaScript File",
              descriptions: [
                "Inside the 'components' folder, create a new file for the ProfileScreen component.",
              ],
            },
            {
              subtitleDescription: "Design the Profile Screen",
              descriptions: [
                "This screen will display the user's Google profile picture, name, and email.",
                "Add a logout button that will clear the user's data and return them to the home screen.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Handle Authentication in App.js",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Import Authentication Libraries",
              descriptions: [
                "Import the necessary Expo libraries for Google sign-in and AsyncStorage for saving user information.",
              ],
            },
            {
              subtitleDescription: "Handle Google Sign-In",
              descriptions: [
                "Set up the logic to request authentication from Google.",
                "Once the user signs in successfully, fetch their profile information using Google's user info API.",
              ],
            },
            {
              subtitleDescription: "Manage State",
              descriptions: [
                "Use React's state management to control whether the app shows the home screen or the profile screen.",
                "Store the authenticated user's data in state and also save it to AsyncStorage so that the session persists.",
              ],
            },
            {
              subtitleDescription: "Handle Logout",
              descriptions: [
                "Implement a function to clear user data from both the app's state and AsyncStorage when the logout button is pressed.",
              ],
            },
            {
              subtitleDescription: "Switch Between Screens",
              descriptions: [
                "If the user is authenticated, render the profile screen; otherwise, show the home screen.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Move Styles to a Separate File",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create a styles.js File",
              descriptions: [
                "Inside the 'styles' folder, create a JavaScript file for your app's styles.",
              ],
            },
            {
              subtitleDescription: "Define Styles in the New File",
              descriptions: [
                "Write out the styles for both screens: container styles, text styles, button styles, and image styles.",
                "This will ensure your components are visually structured and cleanly styled.",
              ],
            },
            {
              subtitleDescription: "Import Styles into Components",
              descriptions: [
                "Import the styles from the styles.js file into both the HomeScreen and ProfileScreen components.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Run and Test the App",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Run the App",
              descriptions: [
                "Use Expo to start your app and open it in an emulator or on your phone.",
              ],
            },
            {
              subtitleDescription: "Test the Google Login",
              descriptions: [
                "On the home screen, click the Google Sign-In button to see the available accounts for login.",
                "Once logged in, check that the profile screen displays the user's name, email, and profile picture.",
              ],
            },
            {
              subtitleDescription: "Test Logout",
              descriptions: [
                "Ensure that pressing the logout button returns you to the home screen and clears the stored user information.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Debug and Fine-Tune",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Fix Any Errors",
              descriptions: [
                "If there are any issues with login, styling, or navigation, review the code for typos or incorrect logic.",
                "Ensure the Google OAuth client ID is correctly configured.",
              ],
            },
            {
              subtitleDescription: "Fine-Tune Styles",
              descriptions: [
                "Adjust padding, margins, font sizes, or colors to fit the minimalistic design you want.",
                "Ensure the layout works well on both small and large screen sizes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Deploy or Share the App",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create a Build",
              descriptions: [
                "If you're ready to share your app, follow Expo's guide to build an APK for Android or publish the app to Expo's platform.",
              ],
            },
            {
              subtitleDescription: "Share the Source Code",
              descriptions: [
                "Once you're happy with the result, share the source code with collaborators or save it to a repository.",
              ],
            },
          ],
        },
      ],
      taskType: "Live",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["Live Projects"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/ztq35d?view=editor&module=%2Fsrc%2FApp.js",
      img: require("../images/livelessons1.webp"),
      videoLink: "",
    },

    {
      taskId: "Interactive-Power-BI-Bar-Chart",
      taskTitle: "Interactive Power BI Bar Chart",
      introduction:
        "This project involves creating an interactive Power BI-style bar chart visual using React.js and Chart.js, where user data is segmented by age group. The bar chart will include cross-filtering functionality, allowing users to click on any bar to filter the dataset by the corresponding age group, dynamically updating the chart in response.",
      task: {
        taskDescription:
          "I'm looking for a skilled developer to create an interactive Power BI bar chart visual using React.js. The project will focus on displaying user data, specifically segmented by age group.",
        platform: "Freelancer",
        requirements: [
          "Display user data segmented by age group in a bar chart.",
          "Enable users to click on bars to filter data by the selected age group.",
          "Properly categorize and display user counts for different age groups (e.g., 18-24, 25-34, etc.).",
          "Ensure the chart dynamically updates when a bar is clicked and reflects filtered results.",
          "Create a responsive and intuitive chart interface for easy interaction.",
        ],
      },
      steps: [
        {
          stepTitle: "Step 1: Set Up a React Application",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Ensure Node.js is installed on your machine. You can download it from nodejs.org.",
                "Open your terminal/command prompt and run the following command to create a new React project: 'npx create-react-app powerbi-bar-chart'",
                "Once the project is created, navigate into your project folder: 'cd powerbi-bar-chart'",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Install Required Libraries",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Install 'react-chartjs-2' and 'chart.js': These libraries will help you implement the bar chart. Install them using npm: 'npm install react-chartjs-2 chart.js'",
                "After installation, check package.json to ensure both react-chartjs-2 and chart.js are listed under dependencies.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Prepare the Data for the Bar Chart",
          titleDescription:
            "Before you visualize anything, determine where your user data is coming from. In this case, you'll likely have an array of user information with age values. If the data comes from an API, think about how you'll fetch it and structure it. If you're using mock data, make sure it represents actual user distribution across age groups.",
          sections: [
            {
              subtitleDescription: "Segment Users by Age Group",
              descriptions: [
                "Identify your age groups. Common segments might be 18-24, 25-34, 35-44, 45-54, 55-64, and 65+.",
                "For each age group, count how many users fall within that range. If the data comes from an API, you'll need to process this by iterating over the data and sorting users into these groups.",
              ],
            },
            {
              subtitleDescription: "Prepare Data for the Chart",
              descriptions: [
                "Your chart will need two main pieces of information: the labels (which will be the age groups) and the data (which is the count of users in each age group).",
                "Organize your data so that for each label (age group), you have a corresponding data point (user count). The structure of your data must be clear before you start setting up the chart.",
              ],
            },
            {
              subtitleDescription: "Plan Data Filtering",
              descriptions: [
                "You'll need to filter user data based on interactions with the chart (i.e., clicking on a bar). Think about how the click action will filter the data.",
                "For each age group clicked, all other data points should either be hidden or grayed out, showing only the selected group.",
              ],
            },
            {
              subtitleDescription: "Mock Your Data (if necessary)",
              descriptions: [
                "If you don't have real data yet, prepare a mock dataset of users segmented by age groups. For testing, you can create static arrays representing user counts in each age group.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Configure Chart.js in React",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Understand How Chart.js Works",
              descriptions: [
                "Chart.js is a JavaScript library that generates charts using HTML <canvas>. Since you are using React, you'll use react-chartjs-2, a wrapper around Chart.js to work natively with React components.",
                "In a bar chart, you need to configure both the axes (X-axis for age groups, Y-axis for user counts) and the bars (each representing the user count for the corresponding age group).",
              ],
            },
            {
              subtitleDescription: "Install and Register Chart.js Components",
              descriptions: [
                "The bar chart will rely on specific Chart.js components such as scales (for the X and Y axes), tooltips (for showing data when hovering over bars), and bar elements (for the bars themselves).",
                "You will need to register these components in your React project to ensure that Chart.js knows what type of chart you are building and how to render it.",
              ],
            },
            {
              subtitleDescription: "Define the Chart Layout",
              descriptions: [
                "You will need to define the layout for your chart. This includes labels (age groups), datasets (user counts), and styling options (like bar color, size, and spacing).",
                "Plan how your chart will look.",
                "What will the X-axis represent? (In this case, age groups.)",
                "What will the Y-axis represent? (In this case, user counts.)",
                "How will you style the bars? Think about the default color scheme for unfiltered data, and another scheme for filtered data.",
                "Do you want to show grid lines, tooltips, or a legend? These features add interactivity but can also be optional depending on your design.",
              ],
            },
            {
              subtitleDescription: "Plan Event Handling for Clicks",
              descriptions: [
                "Each bar in the chart should be clickable, which will trigger the filtering of data.",
                "When a bar is clicked, determine how you will capture which bar was clicked (using Chart.js's event system).",
                "Define how you'll filter the dataset based on the clicked bar.",
                "Ensure that clicking a bar dynamically updates the visual to show the filtered data.",
              ],
            },
            {
              subtitleDescription: "Set Up Chart Options",
              descriptions: [
                "Plan how you will configure options",
                "Responsiveness: Your chart should resize properly on different screen sizes.",
                "Animations: Decide if you want animations when rendering the chart or updating it.",
                "Interactions: Will you display tooltips or change the appearance when the user hovers over a bar?",
                "Click Handling: Ensure the chart handles click events effectively to trigger the filtering.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Implement State Management for Filtering",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Determine How to Manage State",
              descriptions: [
                "You'll need to manage two main pieces of state.",
                "The initial dataset: This represents all users across all age groups.",
                "The filtered dataset: This will update dynamically when a user clicks on a bar to filter data for the selected age group.",
                "Think about how you will set up the initial state. In React, you can manage state using the useState hook. You'll want to set the initial dataset in state and then allow it to update dynamically when the user interacts with the chart.",
              ],
            },
            {
              subtitleDescription: "Plan the Click Event Handler",
              descriptions: [
                "When the user clicks on a bar, the click handler will: capture the index of the clicked bar. Chart.js provides an event object that you can use to identify which bar was clicked (based on its index).",
                "Use the index to find the corresponding age group.",
                "Filter the data: You'll need to update the dataset, setting all other age groups to zero (or hide them entirely), while showing only the data for the clicked age group.",
                "Update the state with the new, filtered dataset.",
              ],
            },
            {
              subtitleDescription: "Handle the Chart Update",
              descriptions: [
                "Once the state updates with the filtered data, the chart will need to re-render to reflect the changes. In React, this happens automatically when state changes, so you don't have to worry about manually re-rendering the chart.",
                "Ensure that the chart re-renders smoothly without losing the interactive capabilities (e.g., further clicks on different bars should continue to update the chart).",
              ],
            },
            {
              subtitleDescription: "Decide What Happens After Filtering",
              descriptions: [
                "After filtering, do you want to allow the user to reset the chart to show all data again? If yes, plan how the user will reset the filter (e.g., clicking outside the chart or providing a 'Reset' button).",
                "You might also want to think about what happens if the user clicks the same bar twice. Will this re-apply the filter, or will it remove the filter and show the full dataset again?",
              ],
            },
            {
              subtitleDescription: "Test the Filtered State",
              descriptions: [
                "Click multiple bars to ensure only one age group is highlighted at a time.",
                "Ensure that the filtering works correctly across all age groups.",
                "Handle edge cases like clicking on the same bar repeatedly or trying to click outside the chart.",
              ],
            },
            {
              subtitleDescription: "Optimize for Performance",
              descriptions: [
                "If your dataset is large, consider optimizing the way the chart updates. This could involve reducing unnecessary re-renders or simplifying the state changes when the user interacts with the chart.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Style the Chart",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Choose Colors for the Bars",
              descriptions: [
                "You can define two sets of colors—one for unfiltered data and another for filtered data. Decide how the bars will look when they are clicked and filtered.",
              ],
            },
            {
              subtitleDescription: "Ensure Responsiveness",
              descriptions: [
                "Plan for making the chart responsive so that it adjusts to different screen sizes, providing a seamless user experience.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Test the Application",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Run Your App",
              descriptions: [
                "In your terminal, run the React app using: 'npm start'",
                "This will start a local development server and open your app in the browser.",
              ],
            },
            {
              subtitleDescription: "Test the Chart",
              descriptions: [
                "Click on different bars and ensure that the data filters correctly based on the age group selected. Check the console (DevTools) for any errors.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Refine and Optimize",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Handle Edge Cases",
              descriptions: [
                "What happens if a user clicks the same bar multiple times?",
                "Should the user be able to reset the filter and see the full dataset again? Plan for how this might work.",
              ],
            },
            {
              subtitleDescription: "Optimize Rendering",
              descriptions: [
                "If the chart becomes complex or data-heavy, consider optimizing the rendering process to ensure smooth performance.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Integrate with Power BI (Optional)",
          titleDescription:
            "If you plan to embed this React app in Power BI or integrate it into a Power BI report.",
          sections: [
            {
              subtitleDescription: "Set Up Power BI Embedded",
              descriptions: [
                "Use Microsoft Power BI Embedded SDK to embed your React app into Power BI.",
              ],
            },
            {
              subtitleDescription: "Configure Cross-Filtering with Power BI",
              descriptions: [
                "Plan how you will handle cross-filtering across other visuals in Power BI using JavaScript.",
              ],
            },
          ],
        },
      ],
      taskType: "Live",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["Live Projects"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/jf4vrt?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/livelessons2.webp"),
      videoLink: "",
    },

    {
      taskId: "Activity-Management-Dashboard",
      taskTitle: "Activity Management Dashboard",
      introduction:
        "The Activity Management Dashboard is a robust React application designed to provide users with a comprehensive overview of various activities. Featuring detailed insights into activity specifics, historical records, user claims, and associated rules, this dashboard leverages Material-UI components to deliver a modern and responsive user interface. The modular architecture allows for seamless integration of future enhancements, ensuring an adaptable solution for activity management.",
      task: {
        taskDescription:
          "I need to create an activity page using React+MaterialUI. I already have a figma document that includes simple pages such as activity details, activity records, user claim records, activity rules, etc. ,You can use simulated data to bind data to the page, and I will interface it later. You only need to complete the static page.",
        platform: "Freelancer",
        requirements: [
          "Components for Activity Details, Records, Claims, and Rules",
          "Use of simulated data for static content",
          "Responsive design using Material-UI",
          "Navigation between components (if applicable)",
        ],
      },
      steps: [
        {
          stepTitle: "Step 1: Set Up the React Environment",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create a New React App",
              descriptions: [
                "Open a terminal, navigate to your preferred directory, and run: 'npx create-react-app activity-page'.",
                "This command creates the initial project structure with all the necessary dependencies to build a React application.",
              ],
            },
            {
              subtitleDescription: "Navigate into the Project",
              descriptions: [
                "Once the app is created, move into the project directory: 'cd activity-page'.",
              ],
            },
            {
              subtitleDescription: "Install Material-UI",
              descriptions: [
                "Install the required Material-UI packages: 'npm install @mui/material @emotion/react @emotion/styled'.",
                "Material-UI (MUI) is a component library used to build modern UI elements quickly.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create the Components Folder",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Inside the 'src' folder, create a new folder called 'components'. This will be used to store all the individual component files.",
                "React applications are modular, and each part of the UI (like activity details, activity records) will be separated into reusable components.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create the ActivityDetails Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create the File",
              descriptions: [
                "Inside the 'components' folder, create a new file called ActivityDetails.js.",
              ],
            },
            {
              subtitleDescription: "Structure the Component",
              descriptions: [
                "Import React and necessary Material-UI components like 'Card', 'Typography'.",
                "Use a 'Card' from Material-UI to display activity details.",
              ],
            },
            {
              subtitleDescription: "Add Dummy Data",
              descriptions: [
                "Inside 'ActivityDetails', define and display static (simulated) data like the name of the activity, description, and dates.",
              ],
            },
            {
              subtitleDescription: "Return JSX",
              descriptions: [
                "Write the JSX structure that uses Material-UI components.",
                "Use a 'Card' to wrap the content.",
                "Inside the 'Card', use 'Typography' components to display the activity name and description.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create the ActivityRecords Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create the File",
              descriptions: [
                "Inside the 'components' folder, create a new file called ActivityRecords.js.",
              ],
            },
            {
              subtitleDescription: "Simulate Data",
              descriptions: [
                "Define some static data (e.g., an array of record objects) inside the component. These records could represent actions taken by users.",
              ],
            },
            {
              subtitleDescription: "Use Material-UI List Components",
              descriptions: [
                "Use Material-UI's 'List' and 'ListItem' components to display the records.",
                "For each record, use 'ListItem' to create individual list elements.",
              ],
            },
            {
              subtitleDescription: "Map Over the Data",
              descriptions: [
                "Use JavaScript's 'map()' function to iterate over the array of records and dynamically create a list of records to display.",
              ],
            },
            {
              subtitleDescription: "Return JSX",
              descriptions: [
                "In the JSX, use a 'List' component and render each record inside 'ListItem'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create the UserClaimRecords Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create the File",
              descriptions: [
                "Inside the 'components' folder, create a new file called UserClaimRecords.js.",
              ],
            },
            {
              subtitleDescription: "Add Dummy Claim Data",
              descriptions: [
                "Define some claim records (static data) inside the component. Each record could represent a user claim, with details like the user name and the date of the claim.",
              ],
            },
            {
              subtitleDescription: "Use Material-UI for Layout",
              descriptions: [
                "Use 'Card' and 'List' components to create a layout similar to ActivityRecords.",
              ],
            },
            {
              subtitleDescription: "Map Through Claim Records",
              descriptions: [
                "Iterate over the static data using the 'map()' function, rendering each user claim as a list item.",
              ],
            },
            {
              subtitleDescription: "Return JSX",
              descriptions: [
                "Write the JSX structure using 'List' and 'ListItem' components to display each claim.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create the ActivityRules Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create the File",
              descriptions: [
                "Inside the 'components' folder, create a new file called ActivityRules.js.",
              ],
            },
            {
              subtitleDescription: "Define Static Rules",
              descriptions: [
                "Define an array of rules for the activity as static data. Each rule can be a simple string or an object (if you want to add more info).",
              ],
            },
            {
              subtitleDescription: "Display Rules Using a List",
              descriptions: [
                "Use Material-UI's 'List' and 'ListItem' to display the rules in a list format.",
              ],
            },
            {
              subtitleDescription: "Map Through Rules",
              descriptions: [
                "Use the 'map()' function to iterate over the rules array and dynamically render each rule.",
              ],
            },
            {
              subtitleDescription: "Return JSX",
              descriptions: [
                "Write the JSX using Material-UI components like 'Typography' for headings and 'List' for displaying rules.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Main App.js Integration",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Organize Imports",
              descriptions: [
                "Open App.js and import the four components you've created: ActivityDetails, ActivityRecords, UserClaimRecords, and ActivityRules.",
              ],
            },
            {
              subtitleDescription: "Pass Data via Props (Optional)",
              descriptions: [
                "Although for now, you're using static data inside the components, consider refactoring later to pass data via props from App.js.",
              ],
            },
            {
              subtitleDescription: "Layout the Page",
              descriptions: [
                "Use Material-UI's 'Container' or 'Box' to structure the layout of the page. Inside the container, render the four components in order.",
              ],
            },
            {
              subtitleDescription: "Add Basic Styling",
              descriptions: [
                "Apply some basic styling to organize the layout (e.g., margins, padding) using the 'sx' prop in Material-UI.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Create a Simulated Data File (Optional)",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create data.js",
              descriptions: [
                "Instead of writing static data inside each component, you can create a data.js file in the 'src' folder where all the simulated data (activity details, records, claims, rules) will be stored.",
              ],
            },
            {
              subtitleDescription: "Export Data",
              descriptions: [
                "Define the data as JavaScript objects/arrays and export them for use in other files.",
              ],
            },
            {
              subtitleDescription: "Import and Use Data",
              descriptions: [
                "In the components (ActivityDetails, ActivityRecords, etc.), import the data from data.js and pass it via props or use it directly inside the component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Run the Application",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Start the App",
              descriptions: [
                "In your terminal, run the following command to start the development server: 'npm start'.",
              ],
            },
            {
              subtitleDescription: "View the Page",
              descriptions: [
                "Open a browser and go to http://localhost:3000 to see your static activity page with all four components rendered.",
              ],
            },
          ],
        },
      ],
      taskType: "Live",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["Live Projects"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/j37fnh?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/livelessons3.webp"),
      videoLink: "",
    },
    {
      taskId: "Construction-Cost-Calculator",
      taskTitle: "Construction Cost Calculator",
      introduction:
        "The Construction Cost Calculator is a user-friendly React application designed to help users estimate construction costs based on key parameters such as plot size, number of floors, construction type, and materials. By utilizing Formik for form management and Yup for validation, the application ensures accurate input and a seamless user experience.",
      task: {
        taskDescription:
          "This project involves building a web application that allows users to input various parameters related to construction and receive an estimated cost along with a detailed breakdown.",
        platform: "Freelancer",
        projectName: "House Construction Cost Calculator Website",
        biddingEnds: "Saturday, October 19, 2024",
        requirements: [
          "React for the front-end framework",
          "Formik for form management",
          "Yup for form validation",
          "Basic knowledge of CSS for styling",
        ],
      },
      steps: [
        {
          stepTitle: "Step 1: Set Up the React Project",
          titleDescription: "Setting up the initial project structure.",
          sections: [
            {
              subtitleDescription: "Create a new React app",
              descriptions: [
                "Use Create React App to scaffold a new project.",
                "Run `npx create-react-app construction-cost-calculator`.",
                "Navigate to the project directory using `cd construction-cost-calculator`.",
              ],
            },
            {
              subtitleDescription: "Install dependencies",
              descriptions: [
                "Install 'Formik' for form management using `npm install formik`.",
                "Install 'Yup' for validation using `npm install yup`.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create the App Component",
          titleDescription: "Set up the main application component.",
          sections: [
            {
              subtitleDescription: "Define the App component",
              descriptions: [
                "Create a new file named `App.js` in the `src` folder.",
                "Import necessary components and styles.",
                "Define the main layout, including a 'header' and 'footer'.",
              ],
            },
            {
              subtitleDescription:
                "Render the ConstructionCalculator component",
              descriptions: [
                "Import the 'ConstructionCalculator' component into `App.js`.",
                "Use the component within the main return statement.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create the ConstructionCalculator Component",
          titleDescription: "Manage cost calculations and user interactions.",
          sections: [
            {
              subtitleDescription: "Define the state and functions",
              descriptions: [
                "In `ConstructionCalculator.js`, import React and 'useState' from React.",
                "Initialize state variables using 'useState' to hold the following values:",
                "`materialCost` (initially set to 0): to track the cost of materials.",
                "`laborCost` (initially set to 0): to track the cost of labor.",
                "`permitCost` (initially set to 0): to track the cost of permits.",
                "`miscCost` (initially set to 0): for any miscellaneous expenses.",
                "`totalCost` (initially set to 0): to calculate the total cost based on inputs.",
              ],
            },
            {
              subtitleDescription: "Implement the handleFormSubmit function",
              descriptions: [
                "Create a function named `handleFormSubmit` that takes the 'form' values as arguments.",
                "Inside the function, extract values for materials, labor, permits, and miscellaneous costs from the form input.",
                "Convert the input values to numbers using `parseFloat` to ensure accurate calculations.",
                "Calculate the total cost as follows:",
                "`totalCost = materialCost + laborCost + permitCost + miscCost`.",
                "Use the `setTotalCost` function to update the total cost in state.",
              ],
            },
            {
              subtitleDescription: "Render the user interface",
              descriptions: [
                "Return JSX that includes:",
                "A header or title for the cost calculator.",
                "An 'InputForm' component, passing necessary props such as state variables and the 'handleFormSubmit' function.",
                "A 'CostBreakdown' component to display the breakdown of costs based on the state variables.",
                "Ensure the 'CostBreakdown' component receives 'totalCost' and individual cost states (materialCost, laborCost, permitCost, miscCost) as props.",
              ],
            },
            {
              subtitleDescription: "Add input validation",
              descriptions: [
                "In `handleFormSubmit`, implement validation logic to ensure that all inputs are valid numbers.",
                "Check if any input is negative or not a number, and provide feedback to the user (e.g., alert or error message).",
                "If validation fails, prevent the calculation from proceeding.",
              ],
            },
          ],
        },

        {
          stepTitle: "Step 4: Implement the InputForm Component",
          titleDescription:
            "Create a form to gather user input for cost calculations.",
          sections: [
            {
              subtitleDescription: "Set up the InputForm structure",
              descriptions: [
                "Create a new file named `InputForm.js` in the components directory.",
                "Import React, the `useFormik` hook from 'Formik', and `Yup` for validation.",
                "Define the `InputForm` functional component, accepting an `onSubmit` prop to handle form submission.",
              ],
            },
            {
              subtitleDescription: "Initialize Formik",
              descriptions: [
                "Use `useFormik` to manage form state and validation:",
                "Set `initialValues` to include: `plotSize`, `floors`, `constructionType`, `material`, and `location`.",
                "Define the `validationSchema` using `Yup` to ensure `plotSize`, `floors`, and `location` are required fields, and `floors` must be at least 1.",
              ],
            },
            {
              subtitleDescription: "Create input fields",
              descriptions: [
                "Render a form element using JSX and set its `onSubmit` to `formik.handleSubmit`:",
                "Plot Size: Add a number input for `plotSize`. Bind its value to `formik.values.plotSize` and handle changes with `formik.handleChange`.",
                "Number of Floors: Add a number input for `floors`, also binding its value and change handler to Formik.",
                "Construction Type: Create a select input for `constructionType` with options for 'Standard' and 'Luxury', binding it to Formik.",
                "Material: Create a select input for `material` with options for 'Brick' and 'Wood', binding it to Formik.",
                "Location: Add a text input for `location`, binding its value and change handler to Formik.",
              ],
            },
            {
              subtitleDescription: "Add error handling",
              descriptions: [
                "Display error messages for required fields:",
                "For each input field, check if there are validation errors using `formik.errors`. If an error exists, display it below the corresponding input field.",
              ],
            },
            {
              subtitleDescription: "Add a submit button",
              descriptions: [
                "Include a button of type 'submit' with the text 'Calculate Cost'.",
                "When the button is clicked, it triggers the form submission via `formik.handleSubmit`, which will call the `onSubmit` function passed in as a prop with the form values.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create the CostBreakdown Component",
          titleDescription: "Display the cost breakdown.",
          sections: [
            {
              subtitleDescription: "Define the CostBreakdown component",
              descriptions: [
                "Create a new file named `CostBreakdown.js` in the `src/components` folder.",
                "Accept 'totalCost' and breakdown as props.",
                "Render the estimated total cost and breakdown categories.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Style the Application",
          titleDescription: "Enhance the UI.",
          sections: [
            {
              subtitleDescription: "Add CSS styles",
              descriptions: [
                "Create a CSS file for each component.",
                "Style the header, footer, and form elements for better user experience.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Test the Application",
          titleDescription: "Ensure functionality.",
          sections: [
            {
              subtitleDescription: "Run and verify",
              descriptions: [
                "Start the application using `npm start`.",
                "Test each form input for validation and calculation accuracy.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Debugging",
          titleDescription: "Fix any issues.",
          sections: [
            {
              subtitleDescription: "Identify and resolve bugs",
              descriptions: [
                "Check for console errors and warnings.",
                "Fix any issues with state management or rendering.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Deployment",
          titleDescription: "Deploy the application.",
          sections: [
            {
              subtitleDescription: "Prepare for production",
              descriptions: [
                "Build the application using `npm run build`.",
                "Choose a hosting service like Vercel or Netlify for deployment.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Maintenance",
          titleDescription: "Ensure ongoing functionality.",
          sections: [
            {
              subtitleDescription: "Monitor and update",
              descriptions: [
                "Regularly check for updates to dependencies.",
                "Fix any bugs reported by users.",
              ],
            },
          ],
        },
      ],
      taskType: "Live",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["Live Projects"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/r4fphm?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/livelessons4.webp"),
    },
    {
      taskId: "React-Firebase-Application-with-ML-and-Payments",
      taskTitle: "React Firebase Application with ML and Payments",
      introduction:
        "This project involves building a robust React application that utilizes Firebase for user authentication, Firestore for data storage, and Firebase Storage for managing media files. Additionally, it incorporates Google Analytics for tracking user behavior, Google ML for content classification, and Stripe for secure payment processing, providing a comprehensive solution for modern web applications.",
      task: {
        taskDescription:
          "We're looking for a skilled individual to integrate Firebase, Google Analytics, and Stripe services into our project.",
        platform: "Freelancer",
        projectName: "Firebase Integration with React Native App",
        biddingEnds: "Sunday, October 27, 2024",
        requirements: [
          "Implement Firebase Auth for user authentication",
          "Set up Firestore for data storage",
          "Use Firebase Storage for media",
          "Integrate Google Analytics for user insights",
          "Implement Google ML for content classification",
          "Set up Stripe for payments",
          "Integrate Ads resources",
        ],
      },
      steps: [
        {
          stepTitle: "Step 1: Set Up Your React Project",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create a New React Application",
              descriptions: [
                "Open your terminal or command prompt.",
                "Run the command: npx create-react-app your-app-name",
                "Navigate into your project directory: cd your-app-name",
              ],
            },
            {
              subtitleDescription: "Install Necessary Packages",
              descriptions: [
                "Install Firebase and Stripe libraries using npm:",
                "npm install firebase @stripe/react-stripe-js @stripe/stripe-js",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create and Configure Firebase Project",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Sign In to Firebase Console",
              descriptions: [
                "Go to the Firebase Console and create a new project.",
              ],
            },
            {
              subtitleDescription: "Add a Web App to Your Firebase Project",
              descriptions: [
                "Click on the web icon (</>) to register your web app.",
                "Follow the prompts to give your app a nickname and optionally set up Firebase Hosting.",
                "Copy the Firebase configuration object for later use.",
              ],
            },
            {
              subtitleDescription: "Enable Authentication",
              descriptions: [
                "In the Firebase Console, navigate to the Authentication section.",
                "Enable email/password authentication or other providers as needed.",
                "Check the option to allow users to register for email/password.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Set Up Firestore Database",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create Firestore Database",
              descriptions: [
                "Navigate to the Firestore Database section in Firebase Console.",
                "Click 'Create database' and choose your security rules.",
                "Start in test mode for development or production mode for security.",
              ],
            },
            {
              subtitleDescription: "Set Up Firestore Rules",
              descriptions: [
                "Define your Firestore rules according to your app's needs.",
                "Start with basic rules for development and refine them later.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Set Up Firebase Storage",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Enable Firebase Storage",
              descriptions: [
                "Navigate to the Storage section in the Firebase Console.",
                "Click 'Get Started' to enable Firebase Storage.",
                "Adjust the storage rules based on your application's needs.",
              ],
            },
            {
              subtitleDescription: "Configure Storage Rules",
              descriptions: [
                "Set rules to control access to stored media files.",
                "Make sure to test access levels during development.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Enable Google Analytics",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Enable Analytics for Your Project",
              descriptions: [
                "In the Firebase Console, navigate to the Analytics section.",
                "Click 'Get Started' to enable Google Analytics for your project.",
                "Configure settings and get your tracking ID.",
              ],
            },
            {
              subtitleDescription: "Add Tracking Code to Your React App",
              descriptions: [
                "Implement the Google Analytics tracking script in your app.",
                "Use event tracking to log user interactions (page views, clicks).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Set Up Google Cloud for Machine Learning (ML)",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create a Google Cloud Project",
              descriptions: [
                "Go to the Google Cloud Console and create a new project.",
                "Link it to your Firebase project.",
              ],
            },
            {
              subtitleDescription: "Enable Google ML Services",
              descriptions: [
                "Navigate to the API Library in Google Cloud Console.",
                "Enable the necessary ML APIs (e.g., Cloud Vision, AutoML).",
              ],
            },
            {
              subtitleDescription: "Set Up Authentication",
              descriptions: [
                "Create service account credentials for secure API access.",
                "Generate a JSON key for the service account.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Set Up Stripe for Payments",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create a Stripe Account",
              descriptions: [
                "Go to the Stripe website and sign up for an account.",
                "Log in to the Stripe Dashboard.",
              ],
            },
            {
              subtitleDescription: "Create a Product or Service",
              descriptions: [
                "In the Stripe Dashboard, navigate to 'Products' and click 'Add Product'.",
                "Fill in product details and save.",
              ],
            },
            {
              subtitleDescription: "Get Stripe API Keys",
              descriptions: [
                "Navigate to 'Developers' > 'API keys' in your Stripe Dashboard.",
                "Copy your publishable and secret API keys.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Integrate Everything in Your React App",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Import Firebase Configuration",
              descriptions: [
                "Create a new file (e.g., firebase.js) in your src directory.",
                "Paste the Firebase configuration object and initialize Firebase services.",
              ],
            },
            {
              subtitleDescription: "Implement Authentication",
              descriptions: [
                "Create user registration and login components.",
                "Use Firebase Authentication methods to handle user actions.",
              ],
            },
            {
              subtitleDescription: "Set Up Firestore Integration",
              descriptions: [
                "Create functions to add, retrieve, update, and delete data from Firestore.",
                "Implement these functions in your components as needed.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Testing and Deployment",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Test Each Functionality Individually",
              descriptions: [
                "Test authentication by creating and logging in users.",
                "Verify data storage and retrieval from Firestore.",
                "Check that media uploads work with Firebase Storage.",
              ],
            },
            {
              subtitleDescription: "Deploy Your Application",
              descriptions: [
                "Choose a hosting service (like Vercel, Netlify, or Firebase Hosting).",
                "Follow the deployment guidelines to deploy your React application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Review and Iterate",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Gather Feedback from Users",
              descriptions: [
                "Encourage users to provide feedback on their experience.",
                "Consider implementing feedback forms or surveys.",
              ],
            },
            {
              subtitleDescription: "Iterate Based on Feedback",
              descriptions: [
                "Use feedback to make improvements and iterate on your application.",
                "Add new features or optimize existing ones as needed.",
              ],
            },
          ],
        },
      ],
      taskType: "Live",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["Live Projects"],
      completed: false,
      codesandboxUrl: "https://codesandbox.io/embed/szg3f3?view=editor",
      img: require("../images/livelessons5.webp"),
      videoLink: "",
    },
    {
      taskId: "Payroll-Application-Development",
      taskTitle: "Payroll Application Development",
      introduction:
        "The Payroll Application is a user-friendly web platform built with React that enables businesses to efficiently manage employee payment processing. It features a dashboard for viewing employee lists, a payroll form for processing payments, and is designed to comply with specific country tax laws, ensuring accurate and streamlined payroll management.",
      task: {
        taskDescription:
          "I'm seeking a developer experienced with React and Node.js to create a payroll application. The main focus of the application will be handling employee payment processing.",
        platform: "Freelancer",
        projectName: "Payroll Application Development on React & Node.js",
        biddingEnds: "2024-11-02",
        requirements: [
          "Design and implement an intuitive interface with React",
          "Build a robust server-side application with Node.js",
          "Create functionalities specifically for processing employee payments",
          "Tailor the application for a single country's tax laws",
          "Support payment via check",
        ],
      },
      steps: [
        {
          stepTitle: "Step 1: Project Setup",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Frontend",
              descriptions: [
                "Set up a new React project using Create React App (or Vite for faster builds).",
                "Install dependencies like React Router (for page routing) and Axios (for API requests).",
              ],
            },
            {
              subtitleDescription: "Backend",
              descriptions: [
                "Set up a Node.js server with Express.",
                "Use a MongoDB or PostgreSQL database to store employee data, payment history, and other necessary information.",
                "Add necessary packages for handling data validation, authorization, and payment processing.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Frontend (React)",
          titleDescription: "",
          sections: [
            {
              subtitleDescription:
                "Setting Up the React Project and Dependencies",
              descriptions: [
                "Start by creating a React project. Install dependencies like React Router for managing page navigation and Axios for API calls.",
                "Organize the project's folder structure into components (e.g., components/EmployeeList, components/PayrollForm), pages (e.g., pages/Dashboard, pages/EmployeeDetails), and services (e.g., services/api.js to handle API calls).",
              ],
            },
            {
              subtitleDescription: "Routing with React Router",
              descriptions: [
                "Set up React Router to manage the app's routes, including paths for different views like the Employee List, Employee Details, and Payroll Form.",
                "Configure a layout to allow for easy navigation between these main pages.",
              ],
            },
            {
              subtitleDescription: "Component Design",
              descriptions: [
                "Employee List: Design this to display all employees in a list or table format. Each row should include employee details and actions like viewing more information or processing payroll.",
                "Employee Details: Design a detailed view for each employee, displaying personal info (e.g., name, position, salary), historical payroll data, and options for updating details or initiating payroll processing.",
                "Payroll Form: Create a form for payroll managers to input payment details, adjust for deductions, and specify the payment method (e.g., 'check'). Include field validation (e.g., amounts should not be negative).",
                "Dashboard: Design a dashboard showing metrics like total payroll processed, pending payments, and a summary of recent payroll activity.",
              ],
            },
            {
              subtitleDescription: "API Integration",
              descriptions: [
                "Use Axios to handle API requests for each component. For example, when loading the Employee List, make an API call to retrieve all employees.",
                "Structure all API calls within a 'services/api.js' file to centralize them, making the app modular and easy to maintain.",
              ],
            },
            {
              subtitleDescription: "Styling and UX",
              descriptions: [
                "Prioritize a clean, intuitive UI that makes it easy for payroll administrators to navigate through employee records and initiate payroll.",
                "Implement basic form validation for accurate data entry and responsive design for different screen sizes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Backend (Node.js + Express)",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Initial Setup and Middleware Configuration",
              descriptions: [
                "Create a new Node.js project and set up an Express server. Install middleware like 'body-parser' to 'parse' incoming requests and 'cors' for handling cross-origin requests.",
                "Create a base route (e.g., /api) where all API endpoints will reside, helping to organize the application's structure.",
              ],
            },
            {
              subtitleDescription: "Database Setup and Integration",
              descriptions: [
                "Choose a database that fits the needs of your payroll application, such as MongoDB or PostgreSQL, to handle the storage of employee data and payroll records",
                "Establish a connection between the server and the database. Organize models for each key entity: Employee for storing employee details and Payment for managing payroll history.",
              ],
            },
            {
              subtitleDescription: "API Endpoints Design",
              descriptions: [
                "Employee Management: Design endpoints for CRUD operations. The app needs the ability to create new employee records, read and display employee details, update employee information, and delete employees if needed.",
                "Payroll Processing: Create an endpoint for payroll processing where the admin can initiate a payment. This will handle data validation, check payment methods, calculate the employee's net pay after tax deductions, and save the transaction to the database.",
                "Tax Calculation: Integrate a helper function within the payroll endpoint to calculate taxes based on the country's tax regulations. This function should be flexible in case tax rules need adjustments later.",
                "Report Generation: Set up a reporting endpoint that generates summaries for compliance, showing processed payrolls, deductions, and net payments within specific date ranges.",
              ],
            },
            {
              subtitleDescription: "Error Handling and Validation",
              descriptions: [
                "Implement validation for each endpoint to prevent incorrect data submissions. Ensure that salaries are positive numbers and that tax rates do not exceed limits.",
                "Add structured error handling across routes. Return user-friendly error messages that the frontend can display.",
              ],
            },
            {
              subtitleDescription: "Authorization and Security",
              descriptions: [
                "Implement basic security measures like route protection. Only authorized users (e.g., payroll managers) should access payroll processing endpoints.",
                "If user authentication is needed, add an authentication layer (JWT or sessions) to secure endpoints and sensitive data.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Database Schema and Tax Calculation",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Employee Schema",
              descriptions: [
                "Define fields to capture each employee's essential details: name, employee ID, salary, position, department, and payment method (e.g., check).",
                "Include fields for tax details, such as a 'tax rate' specific to the employee's earnings bracket and payment preferences.",
              ],
            },
            {
              subtitleDescription: "Payment Schema",
              descriptions: [
                "Define fields to store details of each payment, such as employee ID, gross amount, tax deducted, net amount, payment date, and payment method.",
                "Ensure that each payment is linked to the relevant employee by storing a reference to the employee's ID.",
              ],
            },
            {
              subtitleDescription: "Implementing the Tax Calculation",
              descriptions: [
                "Design a flexible tax calculation function that can be easily adjusted for future tax rate changes or other payroll policies.",
                "Use a standard tax rate based on the specific country's rules. Calculate the employee's tax amount during payroll processing by applying this rate to their gross salary.",
                "Ensure that the tax calculation is accurate and can handle different income brackets if your tax model is progressive.",
              ],
            },
            {
              subtitleDescription: "Data Validation and Consistency Checks",
              descriptions: [
                "Implement validation checks in the database schema to ensure that only valid data is saved.",
                "Enforce unique constraints where necessary, ensuring employee IDs are unique.",
              ],
            },
            {
              subtitleDescription:
                "Testing the Database Structure and Functions",
              descriptions: [
                "Test each part of the payroll functionality, particularly the tax calculation and payment processing.",
                "Verify that all data is stored and retrieved accurately, ensuring application updates records properly.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Testing & Deployment",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Testing",
              descriptions: [
                "Use Jest/React Testing Library for frontend tests.",
                "Employ Mocha/Chai for backend testing.",
                "Utilize Postman or Swagger to test API endpoints.",
              ],
            },
            {
              subtitleDescription: "Deployment",
              descriptions: [
                "Frontend: Deploy using services like Vercel or Netlify.",
                "Backend: Deploy using Heroku, DigitalOcean, or AWS.",
                "Database: Set up a managed database instance in the cloud.",
              ],
            },
          ],
        },
      ],
      taskType: "Live",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["Live Projects"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/fgvp8z?view=editor&module=%2Fsrc%2FApp.js",
      img: require("../images/livelessons6.webp"),
      videoLink: "",
    },

    {
      taskId: "Deploying-React-Website-on-GoDaddy",
      taskTitle: "Deploy Your React App to GoDaddy",
      introduction:
        "This task outlines the steps to deploy your React application to a GoDaddy hosting account.",
      task: {
        taskDescription:
          "I require assistance with deploying my already built React website on my GoDaddy hosting account. The domain name has been set up.",
        platform: "Freelancer",
        projectName: "Deploying React Website on GoDaddy",
        biddingEnds: "Friday, November 8, 2024",
        requirements: [
          "A GoDaddy hosting account",
          "A domain name set up with GoDaddy",
          "React application built with npm",
          "Basic knowledge of web hosting and file management",
        ],
      },
      steps: [
        {
          stepTitle: "Step 1: Build Your React Application",
          titleDescription: "Create an optimized build of your React app.",
          sections: [
            {
              subtitleDescription: "Navigate to Your React App Directory",
              descriptions: [
                "Open your terminal or command prompt and navigate to the root directory of your React application.",
                "Run: cd path/to/your/react-app",
              ],
            },
            {
              subtitleDescription: "Build the Application",
              descriptions: [
                "Run the following command to create an optimized production build of your React app.",
                "This will generate a build folder containing the static files needed for deployment.",
                "Run: npm run build",
                "This command will create a build directory in your project folder.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Prepare Your GoDaddy Account",
          titleDescription: "Get your GoDaddy hosting account ready.",
          sections: [
            {
              subtitleDescription: "Log In to Your GoDaddy Account",
              descriptions: ["Go to GoDaddy.com and log in to your account."],
            },
            {
              subtitleDescription: "Access Your Hosting Dashboard",
              descriptions: [
                "Click on your username in the top right corner, and select My Products.",
                "Under Web Hosting, click on Manage next to the hosting account you want to use.",
              ],
            },
            {
              subtitleDescription: "Open cPanel",
              descriptions: [
                "In your hosting dashboard, look for the cPanel option and click on it.",
                "This will take you to the cPanel interface.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Upload Your Build Files to GoDaddy",
          titleDescription:
            "Transfer your build files to your hosting account.",
          sections: [
            {
              subtitleDescription: "Open the File Manager",
              descriptions: [
                "In cPanel, find the File Manager tool and click on it.",
              ],
            },
            {
              subtitleDescription: "Navigate to the Root Directory",
              descriptions: [
                "Navigate to the public_html directory or a subfolder depending on your domain setup.",
                "If you're using the main domain, upload your files to public_html.",
              ],
            },
            {
              subtitleDescription: "Upload the Build Files",
              descriptions: [
                "Click on the Upload option in the top menu.",
                "Upload all files from the build directory created in Step 1.",
                "You can drag and drop the files or click Choose File to select them.",
              ],
            },
            {
              subtitleDescription: "Extract if Necessary",
              descriptions: [
                "If you zipped your build files, upload the zip file and then extract it in cPanel.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Configure Your Domain Settings (if necessary)",
          titleDescription: "Ensure your domain points to the right directory.",
          sections: [
            {
              subtitleDescription: "Check Your Domain Settings",
              descriptions: [
                "Make sure that your domain is pointing to the correct directory.",
                "GoDaddy usually does this automatically, but it's good to confirm.",
              ],
            },
            {
              subtitleDescription: "Setup Redirects (if applicable)",
              descriptions: [
                "If you want to redirect traffic from www to non-www or vice versa, set this up using the Redirects option in cPanel.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Test Your Website",
          titleDescription:
            "Verify that your website is functioning correctly.",
          sections: [
            {
              subtitleDescription: "Access Your Domain",
              descriptions: [
                "Open a web browser and go to your domain (e.g., http://yourdomain.com).",
              ],
            },
            {
              subtitleDescription: "Check Functionality",
              descriptions: [
                "Ensure all aspects of your React application are working as expected.",
                "Look for any broken links or missing assets.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Troubleshooting Tips",
          titleDescription: "Common issues and how to fix them.",
          sections: [
            {
              subtitleDescription: "404 Errors",
              descriptions: [
                "If encountering 404 errors when navigating routes, create a .htaccess file in your public_html folder.",
                "Add the following lines to redirect all requests to index.html:",
                "RewriteEngine On",
                "RewriteBase /",
                "RewriteRule ^index\\.html$ - [L]",
                "RewriteCond %{REQUEST_FILENAME} !-f",
                "RewriteCond %{REQUEST_FILENAME} !-d",
                "RewriteRule . /index.html [L]",
              ],
            },
            {
              subtitleDescription: "Caching Issues",
              descriptions: [
                "If you face caching issues, clear your browser cache or test your site in incognito mode.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Finalize Your Setup",
          titleDescription: "Ensure your site is secure and ready for users.",
          sections: [
            {
              subtitleDescription: "SSL Certificate",
              descriptions: [
                "Consider setting up an SSL certificate for security.",
                "GoDaddy usually provides a free SSL certificate for your domain.",
                "Enable this through the hosting dashboard.",
              ],
            },
            {
              subtitleDescription: "Monitor Your Website",
              descriptions: [
                "After deployment, monitor your website for any performance issues or bugs that may arise.",
              ],
            },
          ],
        },
      ],
      taskType: "Live",
      difficulty: "Medium",
      authorIndex: 0,
      prerequisites: ["Basic understanding of React and web hosting"],
      completed: false,
      codesandboxUrl: "/notavailable",
      img: require("../images/livelessons7.webp"),
      videoLink: "",
    },
    {
      taskId: "App-with-Contentful-Integration",
      taskTitle: "Building a React App with Contentful Integration for Content Sharing",
      introduction:
        "This project is a content-sharing app built with React and Contentful, allowing users to share various types of content. It utilizes Contentful for dynamic content management, providing real-time updates and seamless interactions with different media types. The app's responsive and user-friendly interface is powered by modern web technologies like React, ensuring a smooth experience for users to explore and engage with content.",
      task: {
        taskDescription:
          "I'm looking for a skilled frontend developer to help me create a single page application (SPA) using React. The primary purpose of this application is to serve as a blog/content sharing platform.",
        platform: "Freelancer",
        projectName: "React SPA Development for Blog",
        biddingEnds: "Synday, November 16, 2024",
        requirements: [
          "Knowledge of React",
          "Experience with Contentful CMS",
          "Ability to work with API integrations",
          "Familiarity with asynchronous programming (Promises, async/await)",
        ],
      },
      steps: [
        {
          stepTitle: "Step 1: Project Setup",
          titleDescription:
            "Initialize a new React app and install necessary dependencies.",
          sections: [
            {
              subtitleDescription: "Initialize the project",
              descriptions: [
                "Use create-react-app or your preferred setup to initialize the project.",
                "Ensure you have Node.js installed and then run `npx create-react-app your-app-name` to set up the project.",
              ],
            },
            {
              subtitleDescription: "Install necessary dependencies",
              descriptions: [
                "React Router for routing: `npm install react-router-dom`",
                "Framer Motion for animations: `npm install framer-motion` (optional)",
                "Axios for making API calls: `npm install axios` (if you plan to fetch external data)",
              ],
            },
            {
              subtitleDescription: "Add content management service",
              descriptions: [
                "Install Contentful SDK or a similar service to manage blog content: `npm install contentful`",
                "Make sure to set up a Contentful account and get the necessary credentials.",
              ],
            },
            {
              subtitleDescription: "Install styling and notifications",
              descriptions: [
                "Install Styled-components for theming: `npm install styled-components` (optional)",
                "Install React-Toastify for notifications: `npm install react-toastify` (optional)",
              ],
            },
          ],
        },

        {
          stepTitle: "Step 2: Create Components",
          titleDescription: "Create the necessary components for your React app, each with specific functionality.",
          sections: [
            {
              subtitleDescription: "Header Component",
              descriptions: [ 
                "Purpose: This component will be used across all pages and will display the site's navigation links, logo, and theme toggle button.",
                "Tasks:",
                "Create a functional component Header inside src/components.",
                "Include the app's logo or title (e.g., 'React Blog App').",
                "Add navigation links to Home, Login, and other pages.",
                "Add a theme toggle button to switch between light and dark themes.",
                "Implement a useContext hook to handle theme switching with context."
              ],
            },
            {
              subtitleDescription: "PostList Component",
              descriptions: [ 
                "Purpose: This component will fetch and display a list of blog posts from the Contentful API.",
                "Tasks:",
                "Create a functional component PostList inside src/components.",
                "State management:",
                "  - Use useState and useEffect to manage posts, loading status, and errors.",
                "  - Example state variables: posts (stores the list of posts), loading (tracks loading state), error (tracks fetch errors).",
                "Fetching Posts:",
                "  - Use useEffect to fetch posts from the Contentful API on mount.",
                "  - Display a loading spinner while fetching posts.",
                "  - Show an error message if the fetch fails.",
                "Display Posts:",
                "  - Loop over the posts and display: title, short description, tags/categories, and a link to the post detail page.",
                "Search Bar:",
                "  - Implement a simple search bar to filter posts by title or tags.",
                "Pagination:",
                "  - Limit the number of posts per page (e.g., 5 or 10).",
                "  - Add pagination controls to navigate through pages."
              ],
            },
            {
              subtitleDescription: "PostDetail Component",
              descriptions: [ 
                "Purpose: This component displays the detailed content of a single post, including the post's title, content, and comments.",
                "Tasks:",
                "Create a PostDetail component inside src/pages.",
                "Fetch the post data:",
                "  - Use the useParams hook from react-router-dom to get the post ID from the URL (/post/:id).",
                "  - Fetch the post data from Contentful using the ID.",
                "Display Post Details:",
                "  - Display the full title, content, and tags/categories.",
                "Add Comments Section:",
                "  - Display comments related to the post.",
                "  - Allow users to add comments.",
                "  - (Optional) Store comments locally or send them to a backend API."
              ],
            },
            {
              subtitleDescription: "CommentSection Component",
              descriptions: [ 
                "Purpose: This component will handle the display of comments for each post and allow users to submit new comments.",
                "Tasks:",
                "Create a functional component CommentSection.",
                "Include:",
                "  - A text area for users to input their comment.",
                "  - A submit button to add the comment.",
                "  - A list of existing comments, either fetched from Contentful or stored locally.",
                "  - (Optional) Implement validation to ensure the comment is not empty.",
                "  - Add animations or transitions when a new comment is added using Framer Motion."
              ],
            },
            {
              subtitleDescription: "Login Component",
              descriptions: [ 
                "Purpose: This component will handle user authentication, allowing users to log in.",
                "Tasks:",
                "Create a Login component inside src/pages.",
                "Include fields for username and password.",
                "On form submission, validate the credentials (mock the backend if needed).",
                "If login is successful, store the user's authentication status in localStorage or a state management solution like Redux.",
                "Redirect the user to the homepage or post page upon successful login."
              ],
            },
          ],
        }
        ,
        {
          stepTitle: "Step 3: Set Up Routing",
          titleDescription: "Set up React Router for navigation between pages in your app.",
          sections: [
            {
              subtitleDescription: "Configure Routes",
              descriptions: [ 
                "Set up React Router to handle navigation between pages.",
                "Tasks:",
                "  - Install React Router: `npm install react-router-dom`.",
                "  - In your App.js, import the necessary components from react-router-dom.",
                "  - Create routes for the following pages:"
              ],
            },
            {
              subtitleDescription: "Home Page Route",
              descriptions: [ 
                "A route for the home page (/):",
                "  - Displays the PostList component.",
                "  - Use <Route path='/' component={PostList} /> for the home route."
              ],
            },
            {
              subtitleDescription: "Post Detail Page Route",
              descriptions: [ 
                "A route for the post detail page (/post/:id):",
                "  - Displays the PostDetail component.",
                "  - Use <Route path='/post/:id' component={PostDetail} /> to show individual post details."
              ],
            },
            {
              subtitleDescription: "Login Page Route",
              descriptions: [ 
                "A route for the login page (/login):",
                "  - Displays the Login component.",
                "  - Use <Route path='/login' component={Login} /> for the login route."
              ],
            },
          ],
        }
        ,
        {
          stepTitle: "Step 4: Authentication",
          titleDescription: "Set up a login mechanism to manage user authentication.",
          sections: [
            {
              subtitleDescription: "Create Login Form",
              descriptions: [ 
                "Create a login form where users can enter their credentials.",
                "Include fields for username and password."
              ],
            },
            {
              subtitleDescription: "Authenticate User",
              descriptions: [ 
                "Authenticate the user using mock data or real authentication methods.",
                "If using mock data, compare entered credentials to predefined values.",
                "For real authentication, connect to a backend API to verify the user's credentials."
              ],
            },
            {
              subtitleDescription: "Update Login Status",
              descriptions: [ 
                "On successful login, update the `isLoggedIn` state.",
                "Persist the login status in localStorage to keep the user logged in even after page reload."
              ],
            },
            {
              subtitleDescription: "Conditionally Render Components",
              descriptions: [ 
                "Conditionally render the Home and PostDetail components based on the login status.",
                "  - If the user is logged in, render the Home page and PostDetail page.",
                "  - If the user is not logged in, redirect to the Login page."
              ],
            },
            {
              subtitleDescription: "Implement Logout Feature",
              descriptions: [ 
                "Implement a logout feature to clear the login status.",
                "  - On logout, remove the login status from localStorage.",
                "  - Redirect the user to the Login page."
              ],
            },
          ],
        }
        ,
        {
          stepTitle: "Step 5: Theme Management",
          titleDescription: "Set up a light/dark theme toggle for the app.",
          sections: [
            {
              subtitleDescription: "Create ThemeProvider Component",
              descriptions: [ 
                "Create a ThemeProvider component with context to manage the theme state.",
                "This component will handle the logic for toggling between light and dark themes."
              ],
            },
            {
              subtitleDescription: "Pass Theme to the App",
              descriptions: [ 
                "Pass the theme to the app through the context provider.",
                "Update the styles dynamically based on the selected theme, e.g., using styled-components or CSS variables."
              ],
            },
          ],
        }
        ,
        {
          stepTitle: "Step 6: Data Storage (Optional)",
          titleDescription: "Set up data storage to manage posts and comments, either using a CMS like Contentful or local storage.",
          sections: [
            {
              subtitleDescription: "Using a CMS (e.g., Contentful)",
              descriptions: [ 
                "Set up an API client to fetch posts and comments.",
                "Add necessary fields in Contentful such as post title, content, tags, and comments."
              ],
            },
            {
              subtitleDescription: "Using Local Storage",
              descriptions: [ 
                "Store the posts, tags, and comments in local storage or simulate a mock API for development purposes."
              ],
            },
          ],
        }
        
        ,
        {
          stepTitle: "Step 7: Styling and Layout",
          titleDescription: "Style the app and create a responsive layout for both mobile and desktop views.",
          sections: [
            {
              subtitleDescription: "Style the App",
              descriptions: [ 
                "Style the header, post list, and individual posts using CSS or CSS-in-JS.",
                "Apply consistent and modern design elements across the app."
              ],
            },
            {
              subtitleDescription: "Add Animations",
              descriptions: [ 
                "Use Framer Motion or other animation libraries to add transitions and animations to components.",
                "Consider animations for interactions such as button clicks or post transitions."
              ],
            },
            {
              subtitleDescription: "Create a Responsive Layout",
              descriptions: [ 
                "Create a responsive layout that adjusts for both mobile and desktop views.",
                "Ensure that key components, such as the header and post list, are mobile-friendly."
              ],
            },
            {
              subtitleDescription: "Style the Login Page",
              descriptions: [ 
                "Style the login page to make it look polished and user-friendly.",
                "Ensure that the form is easy to use and looks consistent with the rest of the app."
              ],
            },
          ],
        }
        ,
        {
          stepTitle: "Step 8: Testing and Debugging",
          titleDescription: "Test the app functionality to ensure everything is working as expected.",
          sections: [
            {
              subtitleDescription: "Test Routing",
              descriptions: [ 
                "Ensure that routing works correctly between pages, including the home page, post details, and login page."
              ],
            },
            {
              subtitleDescription: "Test Login Functionality",
              descriptions: [ 
                "Check that the login functionality and authentication flow are working as expected.",
                "Ensure users can log in, maintain their session, and access protected pages."
              ],
            },
            {
              subtitleDescription: "Test Comment Section",
              descriptions: [ 
                "Verify that the comment section is working and comments persist as expected.",
                "Ensure comments are being displayed and added correctly, and handle edge cases like empty comments."
              ],
            },
            {
              subtitleDescription: "Test Theme Switching",
              descriptions: [ 
                "Test theme switching functionality and ensure it applies correctly across all components.",
                "Check that both light and dark themes are applied consistently throughout the app."
              ],
            },
          ],
        }
        ,
        {
          stepTitle: "Steps for Integrating Contentful into a React Project",
          titleDescription: "Integrate Contentful as a headless CMS into your React app to manage and display dynamic content.",
          sections: [
            {
              subtitleDescription: "Set Up a Contentful Account",
              descriptions: [
                "Sign up for a free Contentful account at Contentful.",
                "Create a new space (project) where you will store your content."
              ],
            },
            {
              subtitleDescription: "Create a Content Model",
              descriptions: [
                "In the Contentful dashboard, go to the 'Content Model' section.",
                "Define the structure for the content you want to manage, like a blog model with fields for title, body, images, etc."
              ],
            },
            {
              subtitleDescription: "Add Content to Your Space",
              descriptions: [
                "Go to the 'Content' section in Contentful and start adding entries based on the models you created.",
                "For example, add blog posts with title, content, images, and other relevant fields."
              ],
            },
            {
              subtitleDescription: "Set Up Contentful in Your React Project",
              descriptions: [
                "Install the Contentful SDK in your React project to fetch content from Contentful.",
                "Set up a service file to manage API calls to Contentful using your Space ID and Access Token."
              ],
            },
            {
              subtitleDescription: "Fetch Content in React",
              descriptions: [
                "Use the Contentful API to request content, specifying which content type (e.g., blog posts) you want to retrieve."
              ],
            },
            {
              subtitleDescription: "Display the Content",
              descriptions: [
                "Map through the fetched content and dynamically render information such as blog post titles, body content, and images."
              ],
            },
            {
              subtitleDescription: "Handle Dynamic Updates",
              descriptions: [
                "Contentful allows dynamic content updates. When content is updated in Contentful, your React app will display the latest content on refresh or via a pull request."
              ],
            },
            {
              subtitleDescription: "Manage and Update Content",
              descriptions: [
                "Return to the Contentful dashboard to update existing content or add new entries like blog posts, changing text, or images."
              ],
            },
            {
              subtitleDescription: "Optimize Performance",
              descriptions: [
                "Use caching and pagination to optimize content fetching, especially with large amounts of content.",
                "Consider lazy-loading images or using CDNs to speed up content delivery."
              ],
            },
          ],
        }
        ,
       
      ],
      taskType: "Live",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["Live Projects"],
      completed: false,
      codesandboxUrl: "https://codesandbox.io/embed/n6ysqk?view=editor&module=%2Fsrc%2FApp.js",
      img: require("../images/livelessons8.webp"),
      videoLink: "",
    },
    
    {
      taskId: "Google-Calendar-API-Integration",
      taskTitle: "Integrate Google Calendar API into a React Website",
      introduction: "This task will guide you step-by-step through integrating the Google Calendar API into a React application. By the end, your app will display and manage calendar events effectively.",
      task: {
        taskDescription: "We are seeking an experienced developer to integrate Google Calendar API into our existing multi-tenant web application. Our application is built using React.js, Node.js, and we have already implemented Google Single Sign-On (SSO). The goal of this project is to enable seamless calendar functionalities directly within our application to enhance user experience and improve scheduling capabilities.",
        platform: "Upwork.com",
        projectName: "Google Calendar API Integration in Multi-Tenant Web Application",
        biddingEnds: "N/A",
        requirements: [
          "Basic React knowledge",
          "Google Cloud Console account",
          "Familiarity with REST APIs",
        ],
      },
      steps: [
        {
          stepTitle: "Step 1: Set Up Google Cloud Project",
          titleDescription: "Configure your Google Cloud project and enable the Calendar API.",
          sections: [
            {
              subtitleDescription: "Create a new Google Cloud project.",
              descriptions: [
                "Log into the Google Cloud Console.",
                "Click on 'Create Project' and provide a suitable name.",
                "Save the project and proceed to API setup.",
              ],
            },
            {
              subtitleDescription: "Enable the Google Calendar API.",
              descriptions: [
                "Navigate to 'API & Services > Library' in the console.",
                "Search for 'Google Calendar API' and click 'Enable'.",
                "Ensure the API is activated successfully in your project.",
              ],
            },
            {
              subtitleDescription: "Set up the OAuth consent screen.",
              descriptions: [
                "Go to 'API & Services > OAuth Consent Screen'.",
                "Fill out the app name, user support email, and authorized domains.",
                "Select the required API scopes for your application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create API Credentials",
          titleDescription: "Generate OAuth credentials to authenticate and access Google Calendar API.",
          sections: [
            {
              subtitleDescription: "Create OAuth 2.0 credentials.",
              descriptions: [
                "Go to 'API & Services > Credentials'.",
                "Click 'Create Credentials' and choose 'OAuth 2.0 Client IDs'.",
                "Set the application type to 'Web Application'.",
              ],
            },
            {
              subtitleDescription: "Set up authorized origins and redirect URIs.",
              descriptions: [
                "Add 'http://localhost:3000' for development in 'Authorized JavaScript origins'.",
                "Specify a redirect URI to handle OAuth responses.",
                "Save the credentials and note the Client ID and Client Secret.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Install Required Libraries",
          titleDescription: "Set up dependencies for the Google Calendar API in your React project.",
          sections: [
            {
              subtitleDescription: "Install required libraries.",
              descriptions: [
                "Install `gapi-script` or `googleapis` for API access.",
                "Add `react-google-login` for managing Google authentication.",
                "Ensure all libraries are compatible with your React version.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Initialize Google API Client",
          titleDescription: "Initialize the Google API client to handle user authentication.",
          sections: [
            {
              subtitleDescription: "Configure the API client in your React app.",
              descriptions: [
                "Import the required modules from installed libraries.",
                "Initialize the API client with the Client ID and required scopes.",
                "Create an authentication function to sign in users.",
              ],
            },
            {
              subtitleDescription: "Add a Google login button.",
              descriptions: [
                "Integrate a login button in your React component.",
                "Trigger Google OAuth login flow when the button is clicked.",
                "Handle authentication responses and store tokens securely.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Fetch Calendar Events",
          titleDescription: "Retrieve calendar events using the Calendar API.",
          sections: [
            {
              subtitleDescription: "Use the API to list events.",
              descriptions: [
                "Fetch available calendars for the authenticated user.",
                "Use the `events.list` endpoint to get upcoming events.",
                "Display events in a styled calendar component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Enable Event Management",
          titleDescription: "Add, edit, and delete calendar events through the API.",
          sections: [
            {
              subtitleDescription: "Implement event addition.",
              descriptions: [
                "Create a form for users to input event details.",
                "Use the `events.insert` endpoint to add events to the calendar.",
                "Handle the API responses and update the UI accordingly.",
              ],
            },
            {
              subtitleDescription: "Enable editing and deletion of events.",
              descriptions: [
                "Allow users to select and modify existing events.",
                "Use the `events.update` and `events.delete` endpoints.",
                "Refresh the displayed calendar events after changes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Add Real-Time Updates",
          titleDescription: "Ensure the calendar syncs changes in real-time.",
          sections: [
            {
              subtitleDescription: "Use webhooks or polling for real-time updates.",
              descriptions: [
                "Implement the `watch` method from the API to detect changes.",
                "Set up a server to receive webhook notifications.",
                "Update the React app dynamically based on received data.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Style the Calendar UI",
          titleDescription: "Design a user-friendly interface for displaying calendar events.",
          sections: [
            {
              subtitleDescription: "Customize the calendar UI.",
              descriptions: [
                "Use libraries like `react-big-calendar` or `fullcalendar`.",
                "Integrate fetched events into the calendar.",
                "Ensure the design is responsive and visually appealing.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Test the Application",
          titleDescription: "Ensure all features function as expected.",
          sections: [
            {
              subtitleDescription: "Validate each feature thoroughly.",
              descriptions: [
                "Test the authentication process for multiple scenarios.",
                "Verify event addition, editing, and deletion functionalities.",
                "Ensure the app remains responsive and error-free.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Deploy the App",
          titleDescription: "Deploy the app to a live environment and monitor performance.",
          sections: [
            {
              subtitleDescription: "Prepare the app for deployment.",
              descriptions: [
                "Update authorized redirect URIs for production.",
                "Host the app on platforms like Vercel or Netlify.",
                "Monitor API usage and handle errors gracefully.",
              ],
            },
          ],
        },
      ],
      taskType: "Live",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["Live Projects"],
      completed: false,
      codesandboxUrl: "https://codesandbox.io/embed/7f5vdp?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/livelessons9.webp"),
      videoLink: "",
    },
    {
      taskId: "Simple-Business-Website",
      taskTitle: "Simple Business Website",
      introduction: "This React web application showcases a product catalog, a contact form for customer inquiries, and a customer reviews section, offering a seamless and professional user experience. It is built with reusable components, modern practices, and thoroughly tested for reliability.",
      task: {
        taskDescription: "I'm looking for a skilled web developer to create a simple yet effective business website.",
        platform: 'Freelancer.com',
        projectName: "Simple Business Website Development",
        biddingEnds: 'Friday, November 29, 2024',
        requirements: [
            "Contact Form: A simple form for customers to reach us.",
                "Product Catalog: An organized display of our products.",
                "Customer Reviews: A section dedicated to showcasing customer feedback and testimonials.",
       
      ],
      },
      steps: [
        {
          stepTitle: "Step 1: Plan and Outline the Project",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Define the Purpose",
              descriptions: [ 
              "The website will display product information, customer reviews, and a contact form.",
             
              ],
            },
            {
              subtitleDescription: "Features Breakdown",
              descriptions: [ 
              "Product catalog: Showcase products with images, descriptions, and prices.",
              "Customer reviews: Display user feedback with ratings.",
              "Contact form: Allow users to send inquiries.",
              ],
            },
            {
              subtitleDescription: "Wireframe the Layout",
            descriptions: [ 
              "Sketch a simple design or use tools like Figma to decide the placement of each component.",
              
              ],
            },
            {
              subtitleDescription: "Decide the Tech Stack",
             descriptions: [ 
              "Use React for the frontend, React Router for navigation, styled-components for styling, and mock data for products and reviews.",
              
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Set Up the Project",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Initialize React App",
             descriptions: [ 
              "Create the project folder using create-react-app or vite.",
              
              ],
            },
            {
              subtitleDescription: "Install Required Dependencies",
              descriptions: [ 
              "React Router: For managing routing between different pages (e.g., catalog, reviews, contact form). 'npm install react-router-dom'",
              "Axios: For handling HTTP requests, such as submitting the contact form data or fetching product and review data. 'npm install axios'",
              "React Bootstrap (Optional): If you want to use pre-built UI components for styling. 'npm install react-bootstrap bootstrap'",
              "React Testing Library: For writing unit and integration tests. 'npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event'",
              "'styled-components' for styling.",
              "'react-toastify' for notifications.",
             
              ],
            },
            {
              subtitleDescription: "Set Up File Structure",
            descriptions: [ 
              "Create folders for 'components', 'pages', 'data', 'utils', and 'assets'.",
              "Add subfolders inside components for 'ContactForm', 'ProductCatalog', and 'CustomerReviews'.",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 3: Configure Routing",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Use react-router-dom to define routes.",
            descriptions: [ 
              "Home page (/)",
              "Product catalog (/products)",
              "Customer reviews (/reviews)",
              "Contact form (/contact)",
              ],
            },
           
          ],
        },
         {
          stepTitle: "Step 4: Build Contact Form Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create the Component File",
            descriptions: [ 
              "ContactForm.js",
              
              ],
            },
            {
              subtitleDescription: "Plan the Form Structure",
             descriptions: [ 
               "Fields: Name, Email, Message.",
                "Buttons: Submit.",
              ],
            },
            {
              subtitleDescription: "Use State for Form Values",
             descriptions: [ 
               "Create 'name', 'email', and 'message' state variables using 'useState'.",
                "Bind 'value' and 'onChange' to inputs.",
              ],
            },
            {
              subtitleDescription: "Add Form Validation",
             descriptions: [ 
               "Write a 'validateForm' function (imported from src/utils/validateForm.js) to check",
                "Name is not empty.",
                "Email is valid.",
                "Message is not empty.",
                "Return errors if validation fails.",
              ],
            },
            {
              subtitleDescription: "Handle Form Submission",
             descriptions: [ 
               "Add a 'handleSubmit' function.",
                "Prevent default form submission behavior.",
                "Validate form data.",
                "Show a success message using 'react-toastify' if valid.",
              ],
            },
            {
              subtitleDescription: "Manage Success/Error Messages",
             descriptions: [ 
               "Use 'react-toastify' to show success or error messages.",
                
              ],
            },
            {
              subtitleDescription: "Add Accessibility Features",
             descriptions: [ 
               "Use 'aria-label' attributes for input fields.",
                "Add 'aria-live' for success/error messages.",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 5: Define Product Catalog Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create the Component File",
             descriptions: [ 
               "ProductCatalog.js",
                
              ],
            },
            {
              subtitleDescription: "Plan the Catalog Structure",
             descriptions: [ 
               "Display products in a grid.",
                "Show: Image, Name, Description, Price.",
              ],
            },
            {
              subtitleDescription: "Import Product Data",
             descriptions: [ 
               "Use mock data from src/data/products.js.",
                
              ],
            },
            {
              subtitleDescription: "Use State for Product Data",
             descriptions: [ 
               "Load 'products' into state using 'useState'",
                
              ],
            },
            {
              subtitleDescription: "Map Through Products",
             descriptions: [ 
               "Use 'products.map()' to create a card for each product.",
               
              ],
            },
            {
              subtitleDescription: "Handle Conditional Rendering",
             descriptions: [ 
               "If no products exist, display a 'No Products Available' message.",
              
              ],
            },
            {
              subtitleDescription: "Add Filter/Sorting Logic (Optional)",
             descriptions: [ 
               "Create a dropdown for sorting (e.g., by price or name).",
                "Use a 'useState' variable for the selected filter.",
                "Apply sorting logic to the products array before rendering.",
              ],
            },
            {
              subtitleDescription: "Make It Responsive",
             descriptions: [ 
               "Use 'styled-components' or CSS grid for a flexible layout.",
               
              ],
            },
          ],
        },
         {
          stepTitle: "Step 6: Create Customer Reviews Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create the Component File",
             descriptions: [ 
               "CustomerReviews.js",
               
              ],
            },
            {
              subtitleDescription: "Plan the Reviews Structure",
              descriptions: [ 
               "Display reviews in a card layout.",
                "Show: Customer Name, Message, Rating.",
              ],
            },
            {
              subtitleDescription: "Import Review Data",
             descriptions: [ 
               "Use mock data from src/data/reviews.js.",
               
              ],
            },
            {
              subtitleDescription: "Map Through Reviews",
             descriptions: [ 
               "Use 'reviews.map()' to render each review.",
                
              ],
            },
            {
              subtitleDescription: "Add State for Reviews",
              descriptions: [ 
               "Use 'useState' to manage the reviews.",
                
              ],
            },
            {
              subtitleDescription: "Add Pagination (Optional)",
             descriptions: [ 
               "Display a limited number of reviews (e.g., 5 per page).",
                "Use 'useState' for the current page.",
                "Add Next/Previous buttons to navigate pages.",
              ],
            },
            {
              subtitleDescription: "Add Accessibility Features",
             descriptions: [ 
               "Use semantic elements like <blockquote> for reviews.",
                "Add 'aria-label' to rating stars.",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 7: Build Home Page Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create the Component File",
             descriptions: [ 
               "src/pages/Home.js",
                
              ],
            },
            {
              subtitleDescription: "Plan the Layout",
              descriptions: [ 
               "Add a banner or welcome message.",
                "Include links or buttons to navigate to:",
                "Product Catalog",
                "Customer Reviews",
                "Contact Form",
              ],
            },
            {
              subtitleDescription: "Use React Router for Navigation",
            descriptions: [ 
               "Import 'Link' from 'react-router-dom'",
                "Add 'Link' components to navigate between pages.",
              ],
            },
            {
              subtitleDescription: "Style the Page",
             descriptions: [ 
               "Add a hero section with a call-to-action.",
                "Use styled-components for spacing and layout.",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 8: Create Utilities and Hooks",
           titleDescription: "Define 'validateForm' Utility",
          sections: [
            {
              subtitleDescription: "",
             descriptions: [ 
               "Create a file: src/utils/validateForm.js.",
                "Write a function to validate:",
                "Name: Check for non-empty value.",
                "Email: Use regex for valid email format.",
                "Message: Check for non-empty value.",
                
              ],
            },
        
          ],
        },
         {
          stepTitle: "Step 9: Define App Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Set Up Routing",
             descriptions: [ 
               "Import 'BrowserRouter', 'Routes', and 'Route' from 'react-router-dom'.",
                
              ],
            },
            {
              subtitleDescription: "Define routes for",
             descriptions: [ 
               "Home (/)",
                "Products (/products)",
                "Reviews (/reviews)",
                "Contact (/contact)",
              ],
            },
            {
              subtitleDescription: "Add Navigation",
             descriptions: [ 
               "Create a navigation bar using <Link> for each route.",
               
              ],
            },
            {
              subtitleDescription: "Add Toast Notifications",
             descriptions: [ 
               "Import ToastContainer from react-toastify.",
                "Place <ToastContainer /> inside App.js.",
              ],
            },
            {
              subtitleDescription: "Global Styling",
             descriptions: [ 
               "Import a CSS reset file or normalize.css.",
                "Use global styles for consistent fonts, colors, and spacing.",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 10: Style the Components",
           titleDescription: "",
          sections: [
            {
              subtitleDescription: "Use styled-components to style",
             descriptions: [ 
               "Layouts (grid for the catalog, cards for reviews).",
                "Form elements (input fields, buttons).",
              ],
            },
            {
              subtitleDescription: "Ensure styles are responsive",
             descriptions: [ 
               "Add media queries to adjust layouts for mobile and tablet screens.",
                "Add hover effects to buttons and product cards for better user interaction."
              ],
            },
            
          ],
        },
        {
          stepTitle: "Step 11: Test Each Component",
           titleDescription: "Test code included in solution.",
          sections: [
            {
              subtitleDescription: "Install Required Dependencies",
             descriptions: [ 
               "@testing-library/react: For rendering and interacting with React components.",
                "@testing-library/jest-dom: For additional matchers like .toBeInTheDocument().",
                "@testing-library/user-event: For simulating user interactions.",
              ],
            },
            {
              subtitleDescription: "Verify Jest Configuration",
             descriptions: [ 
               "React apps created with create-react-app come pre-configured with Jest. If using a different setup, ensure Jest is configured in package.json or a jest.config.js file.",
                
              ],
            },
            {
              subtitleDescription: "Run Tests Locally",
             descriptions: [ 
               "'npm test'",
              
              ],
            },
            {
              subtitleDescription: "Check Code Coverage",
             descriptions: [ 
               "'npm test -- --coverage'",
               "Check the generated coverage report in the coverage/ folder."
              ],
            },
            {
              subtitleDescription: "Debug Failing Tests",
             descriptions: [ 
               "Use console.log or the debug() method from React Testing Library to inspect the DOM.",
               
              ],
            },
            {
              subtitleDescription: "Automate Tests",
             descriptions: [ 
               "Integrate tests into your CI/CD pipeline (e.g., GitHub Actions, CircleCI).",
              
              ],
            },
         
          ],
        },
        {
          stepTitle: "Step 12: Optimize for SEO",
           titleDescription: "",
          sections: [
            {
              subtitleDescription: "Use react-helmet to add meta tags for:",
             descriptions: [ 
               "Title",
                "Description",
                "Open Graph tags for better sharing on social media.",
                "Set unique titles for each page."
              ],
            },
         
          ],
        },
       
      ],
      taskType: "Live",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["Live Projects"],
      completed: false,
      codesandboxUrl: "https://codesandbox.io/embed/7dykyd?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/livelessons10.webp"),
      videoLink: "",
    },
    {
      taskId: "Build-a-Portfolio-Website-with-Admin-Panel",
      taskTitle: "Build a Portfolio Website with Admin Panel",
      introduction: "In this task, you will build a portfolio website that allows the user to showcase projects and manage content via an admin panel. You'll implement secure authentication using JWT and handle backend logic for managing projects with MongoDB and Express.js. On the frontend, you'll create an intuitive UI with React.",
  task: {
       taskDescription: "This task involves building a portfolio website. The frontend will be built using React, while the backend will use Express.js for routing and MongoDB for data storage. You'll implement JWT authentication to secure the admin panel and handle CRUD operations for projects.",
     platform: 'Freelancer',
        projectName: "HTML, CSS, Bootstraps, Js, React, PHP , Portfolio website with admin",
        biddingEnds: 'Friday, December 13, 2024',
        requirements: [
            "Frontend: React for the user interface and routing.",
                "Backend: Express.js for handling API requests and MongoDB for storing portfolio data.",
                "Authentication: JWT (JSON Web Tokens) for secure authentication between the frontend and backend.",
                "Database: MongoDB to store data related to projects and admin users.",
       
      ],
      },
      steps: [
        {
          stepTitle: "Step 1: Folder Structure",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "/backend folder contains",
              descriptions: [ 
              "/models: MongoDB schemas (e.g., User, Project).",
              "/routes: Express routes (e.g., authentication, project management).",
              "/controllers: Functions that handle the business logic for each route (e.g., login, add/edit project).",
              "/middleware: Authentication middleware to protect admin routes.",
              "/config: Configuration for database and environment variables.",
              "server.js: Main entry point to set up the Express server.",
              ],
            },
            {
              subtitleDescription: "/frontend folder contains",
              descriptions: [ 
              "/components: React components for the user interface (e.g., ProjectCard, AdminDashboard).",
              "/pages: React components representing different pages (e.g., HomePage, AdminLoginPage, AdminDashboard).",
              "/hooks: Custom hooks to manage logic like fetching data or managing authentication.",
              "/services: Axios or Fetch requests for interacting with the backend.",
              "/assets: Images, icons, and static assets.",
              ],
            },
            
          ],
        },
        {
          stepTitle: "Step 2: Backend (Express + MongoDB)",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Set Up Express Server",
             descriptions: [ 
              "Initialize a Node.js project and install Express.",
              "Set up an Express server to handle HTTP requests.",
              "Define the port and basic routes for the backend (e.g., /login, /projects).",
              ],
            },
            {
              subtitleDescription: "Database Setup",
              descriptions: [ 
              "Set up MongoDB and connect the Express server to the database using Mongoose (or the native MongoDB driver).",
              "Define the MongoDB URI in environment variables to keep it secure.",
              ],
            },
            {
              subtitleDescription: "Models (Database Schemas)",
            descriptions: [ 
              "Create a User model that stores the admin's credentials (username and password). Passwords should be hashed using a hashing algorithm like bcrypt before storing.",
              
              ],
            },
            {
              subtitleDescription: "Project Model: Create a Project model with fields like",
            descriptions: [ 
              "title: Name of the project.",
              "description: A detailed explanation of the project.",
              "image: A URL for the project image.",
              "date: Date the project was added/updated.",
              ],
            },
            {
              subtitleDescription: "Authentication (JWT)",
            descriptions: [ 
              "Create a POST route for login (/login)",
              "Validate the provided username and password against the database.",
              "If valid, generate a JWT token and send it back to the frontend.",
              "Set up middleware to protect routes that require authentication (e.g., creating, editing, or deleting projects).",
              "Ensure that only users with a valid JWT can access admin routes.",
              "Create a function to verify the JWT token on protected routes and allow access only if the token is valid.",
             
              ],
            },
            {
              subtitleDescription: "Project Management Routes",
            descriptions: [ 
              "GET /projects: Fetch all projects from the database",
              "Return the list of projects in the response.",
              "POST /projects: Create a new project.",
              "Ensure the user is authenticated before adding a project.",
              "Receive data (title, description, image) from the frontend and save it in the database.",
              "PUT /projects/:id: Update an existing project.",
              "Ensure the user is authenticated before updating a project.",
              "Find the project by ID and update the necessary fields.",
              "DELETE /projects/:id: Delete a project.",
              "Ensure the user is authenticated before allowing project deletion.",
              "Find the project by ID and remove it from the database.",
              
              ],
            },
          ],
        },
         {
          stepTitle: "Step 3: Frontend (React)",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Portfolio Pages",
            descriptions: [ 
              "Home Page: Fetch the list of projects from the backend and display them in a grid or list.",
              "Each project should have a Project Card that shows the project title, description, and image.",
              "Display projects dynamically by mapping over the project data fetched from the backend.",
              "Project Card Component: A reusable component that accepts title, description, and image as props and renders the details for a project.",
              "Style the card to make it visually appealing (responsive design for mobile and desktop views).",
             
              ],
            },
            {
              subtitleDescription: "Project Card Component",
             descriptions: [ 
              "A reusable component that accepts title, description, and image as props and renders the details for a project.",
              "Style the card to make it visually appealing (responsive design for mobile and desktop views).",
              ],
            },
            {
              subtitleDescription: "Admin Panel (Protected Route)",
            descriptions: [ 
              "Admin Login Page: Create a login form with fields for username and password.",
              "When the form is submitted, send the credentials to the backend's /login route.",
              "On success, store the JWT token in localStorage (or sessionStorage).",
              "If authentication fails, display an error message.",
              "Admin Dashboard: Create a dashboard where the admin can see all projects.",
              "Implement buttons to add, edit, or delete projects.",
              "Use protected routes to ensure only authenticated users can access the admin dashboard.",
              "Project Management Form: Create a form for adding or editing projects. The form should include fields for project title, description, and image URL.",
              "Use controlled components to manage form state and validate inputs before submitting.",
              "On submission, send the data to the appropriate backend route (POST /projects for adding, PUT /projects/:id for editing).",
              
              ],
            },
            {
              subtitleDescription: "Protected Routes",
            descriptions: [ 
              "Use React Router to set up different routes for the home page, admin login page, and admin dashboard.",
              "Protected Routes: Ensure the admin dashboard is protected. If the user is not authenticated (no JWT token in localStorage), redirect them to the login page.",
              "Redirect after Login: After the admin logs in, redirect them to the dashboard or another protected page.",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 4: Authentication (JWT)",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Backend Authentication",
            descriptions: [ 
              "On successful login, generate a JWT token containing the user’s ID and send it to the frontend.",
              "Set a secret key on the backend that is used to sign the JWT token. Store this secret securely (e.g., in environment variables).",
              ],
            },
            {
              subtitleDescription: "Frontend JWT Storage",
             descriptions: [ 
               "Store the JWT token in localStorage or sessionStorage to persist the user's login state.",
                "When making requests to the backend (e.g., for fetching projects or adding a project), include the JWT token in the Authorization header (Bearer <token>).",
              ],
            },
            {
              subtitleDescription: "Verifying JWT Token",
             descriptions: [ 
               "Use middleware on the backend to verify the JWT token for protected routes (e.g., creating/editing/deleting projects).",
                "If the token is invalid or missing, respond with an error message and a 401 Unauthorized status code.",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 5: Backend Logic",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Creating and Editing Projects",
             descriptions: [ 
               "In the backend, ensure that only authenticated users can create or modify projects. Use the JWT token in the request header to verify the user's identity.",
                "On receiving the project data, validate it (e.g., check if the title is not empty) and store it in the MongoDB database.",
                "If updating an existing project, ensure the correct project ID is used and modify the project fields as needed.",
              ],
            },
            {
              subtitleDescription: "Deleting Projects",
             descriptions: [ 
               "Implement the logic to remove a project by its ID from the MongoDB database.",
                "Confirm that the user is authenticated before allowing this action.",
                
              ],
            },
            {
              subtitleDescription: "Fetching Projects",
             descriptions: [ 
               "Create an endpoint that retrieves all projects stored in the MongoDB database.",
                "Send the project data to the frontend in a structured format (e.g., an array of project objects).",
                "",
              ],
            },
           
          ],
        },
         {
          stepTitle: "Step 6: Frontend Logic",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "React State Management",
             descriptions: [ 
               "Use React's useState to manage state for user login and project data.",
                "Manage the state for form inputs (e.g., project title, description) using controlled components.",
                "Use useEffect to fetch project data when the component mounts (e.g., fetch projects for the home page or admin dashboard).",
              ],
            },
            {
              subtitleDescription: "Making API Requests",
              descriptions: [ 
               "Use Axios or the Fetch API to send HTTP requests to the backend:",
                "GET /projects: Fetch project data to display on the homepage.",
                "POST /projects: Send form data to add a new project.",
                "PUT /projects/:id: Send form data to update an existing project.",
                "DELETE /projects/:id: Delete a project from the portfolio.",
              ],
            },
            {
              subtitleDescription: "JWT Handling",
             descriptions: [ 
               "On successful login, store the JWT token in localStorage and use it for authentication in subsequent requests.",
                "If the JWT token is not found or is invalid, redirect the user to the login page.",
              ],
            },
          
          ],
        },
         {
          stepTitle: "Step 7: Deployment",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Backend Deployment",
             descriptions: [ 
               "Deploy the backend API on a cloud platform like Heroku, DigitalOcean, or AWS.",
                "Ensure the environment variables (like MongoDB URI and JWT secret) are set correctly in the deployment environment.",
              ],
            },
            {
              subtitleDescription: "Frontend Deployment",
              descriptions: [ 
               "Deploy the frontend React app using platforms like Netlify, Vercel, or GitHub Pages.",
                "Ensure all environment variables are configured correctly for deployment.",
                "Connect the frontend to the deployed backend API, making sure the frontend is able to make requests to the correct URL.",
              ],
            },
           
          ],
        },
         {
          stepTitle: "Step 8: Admin Panel Features",
           titleDescription: "",
          sections: [
            {
              subtitleDescription: "Admin Login",
             descriptions: [ 
               "Ensure that the login form sends the user's credentials to the backend for authentication.",
                "Upon successful login, store the JWT token and redirect the user to the admin dashboard.",
              ],
            },
            {
              subtitleDescription: "Admin Dashboard",
             descriptions: [ 
               "Display a list of projects with options to add, edit, or delete.",
                "Protect the dashboard with authentication to ensure only the admin has access.",
              ],
            },
           
          ],
        },
         {
          stepTitle: "Step 9: Responsive Design",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
             descriptions: [ 
               "Use CSS frameworks (e.g., Bootstrap or Tailwind CSS) for a responsive layout.",
                "Ensure the portfolio is mobile-friendly by using media queries to adjust the layout for small screens.",
              ],
            },
          
          ],
        },
         {
          stepTitle: "Step 10: Future Features",
           titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
             descriptions: [ 
               "Contact Form: Add a contact form where users can send messages to the admin.",
                "Blog Section: Implement a blog feature with CRUD (Create, Read, Update, Delete) functionality in the admin panel.",
                "File Upload: Implement file upload functionality to upload images for projects. Store images in the server or use a cloud service like AWS S3.",
              ],
            },
          
          ],
        },
       
      ],
      taskType: "Live",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["Live Projects"],
      completed: false,
      codesandboxUrl: "https://codesandbox.io/embed/q4fzz3?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/livelessons11.webp"),
    },

    
  ],
  React: [
    {
      taskId: "3D-Interactive-Card",
      taskTitle: "React 3D Interactive Card",
      introduction:
        "In this lesson, we'll be building a React functional component called Card. We'll implement mouse movement handling and event listeners for mouse enter and leave actions to create engaging visual effects and interactions within the component.",
      steps: [
        {
          stepTitle: "Step 1: Define functional component Card",

          titleDescription: "",
          sections: [
            {
              descriptions: [
                "Create a reference for the card element",
                "Create a reference for the title element",
                "Create a reference for the React image element",
                "Create a reference for the description element",
                "Create a reference for the difficulty buttons element",
                "Create a reference for the start button element",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Function to handle mouse movement",
          sections: [
            {
              descriptions: [
                "Calculate the rotation on the X-axis based on mouse position",
                "Calculate the rotation on the Y-axis based on mouse position",
                "Apply rotation to the card element",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Function to handle mouse entering the card",

          sections: [
            {
              descriptions: [
                "Remove transition effect",
                "Apply transformation to the title",
                "Apply transformation to the React image",
                "Apply transformation to the description",
                "Apply transformation to the difficulty buttons",
                "Apply transformation to the start button",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Function to handle mouse leaving the card",
          sections: [
            {
              descriptions: [
                "Add transition effect",
                "Reset rotation of the card",
                "Reset transformation of the title",
                "Reset transformation of the React image",
                "Reset transformation of the description",
                "Reset transformation of the difficulty buttons",
                "Reset transformation of the start button",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Return JSX for the component",
          sections: [
            {
              descriptions: [
                "Container for the card with mouse move event handler",
                "Attach reference to the card element",
                "Attach mouse enter event handler",
                "Attach mouse leave event handler",
                "Container for the React image",
                "Circular background for the image",
                "Source for the image",
                "Alt text for the image",
                "Attach reference to the React image element",
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
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/NeOENY_qvvg?si=5GT9uGF5Exyr7Ukk",
      codesandboxUrl:
        "https://codesandbox.io/embed/vywdxt?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson1.webp"),
    },
    {
      taskId: "BMI-Tracker",
      taskTitle: "BMI Tracker",
      introduction:
        "Welcome to the BMI Calculator! This React component allows you to input your weight and height, then calculates your Body Mass Index (BMI) and provides a message indicating your BMI category.",
      steps: [
        {
          stepTitle: "Step 1: Import React and useState hook",

          sections: [
            {
              descriptions: [
                "Import the React library and the useState hook from the react package. This is necessary to define a functional component and manage state within it.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Import CSS files",
          sections: [
            {
              descriptions: [
                "Import the CSS files (App.css or index.css) to style the BMI calculator component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Define the BMI function component",
          sections: [
            {
              descriptions: ["Create a function component named BM3."],
            },
          ],
        },
        {
          stepTitle: "Step 4: State initialization",

          sections: [
            {
              descriptions: [
                "weight: Holds the weight input value, initialized to 0.",
                "height: Holds the height input value, initialized to 0.",
                "bmi: Holds the calculated BMI value, initialized as an empty string.",
                "message: Holds the message corresponding to the BMI category, initialized as an empty string.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: calcBmi function",
          sections: [
            {
              descriptions: [
                "Define a function calcBmi to calculate BMI when the form is submitted:",
                "Prevent the default form submission behavior.",
                "Check if weight or height is equal to 0, if so, display an alert asking the user to enter valid inputs.",
                "Calculate BMI using the formula weight / (heightInCm * heightInCm), where heightInCm is calculated by dividing height by 100.",
                "Set the calculated BMI using setBmi.",
                "Determine the BMI category based on the calculated BMI and set the appropriate message using setMessage.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Render JSX",

          sections: [
            {
              descriptions: [
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
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/kBHOfLsAZwA?si=ICMApQXKw4AFC2UN",
      codesandboxUrl:
        "https://codesandbox.io/embed/2fxd29?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson2.webp"),
    },
    {
      taskId: "Dark-Light-Mode-Toggle",
      taskTitle: "Dark-Light Mode Toggle",
      introduction:
        "This tutorial guides you through setting up a React project to display articles with a toggleable light and dark theme. By following these steps, you'll create a structured application with styled components and basic functionality.",
      steps: [
        {
          stepTitle: "Step 1: Set Up Your React Project",

          sections: [
            {
              descriptions: [
                "Make sure you have Node.js and npm installed on your system.",
                "Create a new React project using Create React App or any other preferred method.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create Required Files",

          sections: [
            {
              descriptions: [
                "Create App.js, Article.js, data.js, and index.css files in your project directory.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Populate data.js with Sample Data",

          sections: [
            {
              descriptions: [
                "In data.js, export an array of objects, each representing an article. Each object should have properties like id, title, snippet, date, and length.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Implement the Article Component",

          sections: [
            {
              descriptions: [
                "In Article.js, import React and any other required dependencies like moment.",
                "Create a functional component named Article.",
                "Inside the component, destructure the props (title, snippet, date, length) passed to it.",
                "Use JSX to render the article's title, date (formatted using moment), length, and snippet.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create Styles in index.css",

          sections: [
            {
              descriptions: [
                "Define styles for the navigation, button, articles, and any other elements you want to style.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Implement the getStorageTheme Function",

          sections: [
            {
              descriptions: [
                "In App.js, define a function named getStorageTheme that retrieves the theme from localStorage.",
                "Set the default theme to 'light-theme' if no theme is found in localStorage.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Implement the App Component",

          sections: [
            {
              descriptions: [
                "Define a functional component named App.",
                "Use useState to manage the theme state, initializing it with the value returned by getStorageTheme.",
                "Define a toggleTheme function that toggles between 'light-theme' and 'dark-theme' based on the current theme.",
                "Use useEffect to update the document's className and store the theme in localStorage whenever the theme changes.",
                "Return JSX for the main structure of the app, including a navigation section with a title and a button to toggle the theme, and a section to display articles.",
                "Map through the data array, rendering an Article component for each item.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/8U-zPr-6u04",
      codesandboxUrl:
        "https://codesandbox.io/embed/cf8936?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson3.webp"),
    },
    {
      taskId: "Sortify-Search-by-Name",
      taskTitle: "Sortify: Search by Name",
      introduction:
        "Sortify is a simple yet powerful web application designed for effortlessly sorting contact names. Built with React and Bootstrap, Sortify enables users to efficiently manage their contacts by organizing them alphabetically based on first names. With its intuitive interface and seamless functionality, Sortify streamlines the process of maintaining an organized contact list.",

      steps: [
        {
          stepTitle: "Step 1: Import Required Modules",
          titleDescription: "Import React and useState hook from 'react'",

          sections: [
            {
              descriptions: [
                "Create a reference for the card element",
                'Import various components from "react-bootstrap".',
                'Import the data array from a separate file named "data.js".',
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Initialize State Variables",
          titleDescription:
            "Initialize two state variables using the useState hook:",
          sections: [
            {
              descriptions: [
                "search: to store the search query entered by the user.",
                "contacts: to store the array of contacts data imported from 'data.js'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Define Event Handlers",

          sections: [
            {
              descriptions: [
                "handleSearchChange: This function updates the search state variable with the value entered by the user in the search input field.",
                "sortName: This function sorts the contacts array based on the first name in ascending order when the 'Sort by First Name' button is clicked.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Render UI Components",

          sections: [
            {
              descriptions: [
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
          ],
        },
        {
          stepTitle: "Step 5: Event Binding",

          sections: [
            {
              descriptions: [
                "Bind the onChange event of the search input field to the handleSearchChange function to update the search query state.",
                "Bind the onClick event of the 'Sort by First Name' button to the sortName function to trigger sorting.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink:
        "https://www.youtube.com/watch?v=3WWUL7TEzAM&ab_channel=ProjectSchool",
      codesandboxUrl:
        "https://codesandbox.io/embed/rjhv9j?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson4.webp"),
    },
    {
      taskId: "Simple-Quiz-App",
      taskTitle: "Simple Quiz App",
      introduction:
        "In this guide, you will embark on a journey to create an interactive quiz app. Follow along as we guide you through the process of building your very own quiz application from scratch.",

      steps: [
        {
          stepTitle: "Step 1: Create Component Files",

          sections: [
            {
              descriptions: [
                "Open your code editor.",
                "Navigate to the 'src' folder of your project directory.",
                "Create a new file named App.js.",
                "Create another new file named index.css.",
                "Finally, create a file named questions.js.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Define Questions",

          sections: [
            {
              descriptions: [
                "Create the questions.js file.",
                "Inside, create a JavaScript array named questions.",
                "Each element of this array will represent a single question in your quiz.",
                "For each question, create an object with two properties: questionText (the text of the question) and answerOptions (an array of possible answer options, each represented by an object containing answerText and isCorrect properties).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: App Component",

          sections: [
            {
              descriptions: [
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
          ],
        },
        {
          stepTitle: "Step 4: Conditional Rendering",

          sections: [
            {
              descriptions: [
                "Use conditional rendering within the App component to display either the quiz questions or the final score section based on the value of currentQuestion.",
                "If currentQuestion is less than the total number of questions, render the quiz interface. Otherwise, render the final score section.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Styling",

          sections: [
            {
              descriptions: [
                "Open the index.css file.",
                "Add CSS rules to style the quiz app according to your preferences.",
                "You can define styles for the app container, question text, answer options, buttons, etc.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/4Wc7FGl1eyI",
      codesandboxUrl:
        "https://codesandbox.io/embed/grf285?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson5.webp"),
    },
    {
      taskId: "FAQ",
      taskTitle: "FAQ",
      introduction:
        "ReactFAQ is a user-friendly React application designed to provide quick access to frequently asked questions and their detailed answers. With collapsible sections and intuitive navigation, users can easily find the information they need within a sleek and modern interface.",

      steps: [
        {
          stepTitle: "Step 1: Create React App",

          sections: [
            {
              descriptions: [
                "Open your terminal.",
                "Navigate to the directory where you want to create your project.",
                "Run npx create-react-app my-react-app (replace my-react-app with your preferred project name).",
                "Navigate into your project directory: cd my-react-app.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",

          sections: [
            {
              descriptions: [
                "Inside the src folder of your React project, create a new folder named components.",
                "Inside the components folder, create two files: Question.js and index.css.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Question Component",
          titleDescription: "In question.js",
          sections: [
            {
              descriptions: [
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
          ],
        },
        {
          stepTitle: "Step 4: Main App Component",
          titleDescription: "In your App.js file",
          sections: [
            {
              descriptions: [
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
          ],
        },
        {
          stepTitle: "Step 5: Data File",

          sections: [
            {
              descriptions: [
                "Create a new file named data.js in the src directory.",
                "Define an array of objects representing questions, each with properties like id, title, and info.",
                "Populate the data file with question objects containing various titles and information.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/yxBXK2YmsZE",
      codesandboxUrl:
        "https://codesandbox.io/embed/jwgpwd?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson6.webp"),
    },
    {
      taskId: "Birthday-Reminder",
      taskTitle: "Birthday Reminder",
      introduction:
        "In this task, you'll explore building a dynamic 'Birthday Reminder' app using React. You'll dive into concepts such as state management with useState, filtering data based on dates, and structuring components effectively. By the end, you'll have a practical understanding of React fundamentals and be equipped to create your own personalized applications.",

      steps: [
        {
          stepTitle: "Step 1: Create React App",

          sections: [
            {
              descriptions: [
                "Start by creating a new React application using Create React App or any other method you prefer.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",

          sections: [
            {
              descriptions: [
                "Plan out the component structure. You'll need components for the main App, the logic to determine birthdays, the list of people, and potentially individual person cards if you want to break it down further.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Data Structure",

          sections: [
            {
              descriptions: [
                "Decide on the structure of your data. You need an array of objects representing people, with each object containing properties like id, name, age, date of birth (dob), and image URL.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: App Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Begin by creating the main App component in a file named App.js.",
                "Import the necessary modules such as React, useState, and any other components you'll be using, like List and BirthdayLogic.",
                "Set up the initial state using React's useState hook. Initialize the state with the data array imported from a separate file. This array will hold information about people's birthdays.",
                "Inside the component's return statement, structure the JSX for the main layout of your app. This will include a section with a heading displaying the number of birthdays today, the list of people with birthdays today, and a button to clear all birthdays.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Birthday Logic Component",
          titleDescription: "BirthdayLogic.js",
          sections: [
            {
              descriptions: [
                "Create a new file named BirthdayLogic.js for the BirthdayLogic component.",
                "Define a functional component named BirthdayLogic that accepts the people prop.",
                "Inside the component, create a variable to hold today's date using new Date().",
                "Format today's date to match the format of the date of birth (e.g., 'MM-DD') for comparison.",
                "Use the filter method to iterate through the people array and filter out those whose date of birth matches today's date.",
                "Return the filtered array of people whose birthday is today.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: List Component",
          titleDescription: "List.js",
          sections: [
            {
              descriptions: [
                "Create a new file named List.js for the List component.",
                "Define a functional component named List that accepts the people prop.",
                "Inside the component, filter the people array received as a prop to find those whose birthday is today. You can use a similar approach as in the BirthdayLogic component.",
                "Render JSX to display the list of people whose birthday is today. This may involve mapping over the filtered array and rendering individual person cards.",
                "Ensure that the component conditionally renders the list only if there are people with birthdays today.",
                "Style the list component using CSS to make it visually appealing. You can create a CSS file named index.css to contain your styles.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Styling",

          sections: [
            {
              descriptions: [
                "Style your components using CSS or any styling solution you prefer. You can use classNames or CSS-in-JS libraries like Styled Components to style your components.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/Dnh6C3wxXjI",
      codesandboxUrl:
        "https://codesandbox.io/embed/7lx22x?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson7.webp"),
    },
    {
      taskId: "Dynamic-Box-Shadow-Generator",
      taskTitle: "Dynamic Box Shadow Generator",
      introduction:
        "In this project, we'll be creating a dynamic box shadow generator. We'll implement an App component to manage the state of box shadows and controls, and a ControlBox component to allow users to customize shadow properties.",

      steps: [
        {
          stepTitle: "Step 1: Setting Up the Project",

          sections: [
            {
              descriptions: [
                "Create a new React project using Create React App or your preferred method.",
                "Ensure you have React installed in your project.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",

          sections: [
            {
              descriptions: [
                "Create two components: App.js and ControlBox.js.",
                "App.js will serve as the main component containing the shadow preview and control panel.",
                "ControlBox.js will contain the controls for adjusting the box shadow properties.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Implementing App Component ",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
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
          ],
        },
        {
          stepTitle: "Step 4: Implementing ControlBox Component",
          titleDescription: "ControlBox.js",
          sections: [
            {
              descriptions: [
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
          ],
        },
        {
          stepTitle: "Step 5: Connecting Components",

          sections: [
            {
              descriptions: [
                "Import ControlBox component into App.js.",
                "Pass necessary props (updateShadow) to ControlBox component.",
                "Ensure that updateShadow function in App.js updates the shadows state with the correct shadow information.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/2dzlkUoqK6A",
      codesandboxUrl:
        "https://codesandbox.io/embed/5pts5h?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson8.webp"),
    },
    {
      taskId: "Memory-Game",
      taskTitle: "Memory Game",
      introduction:
        "In this Memory Game implementation using React, we'll explore how to create a Memory Game using React. The game will involve flipping pairs of cards to find matches. We'll break down the process into steps, focusing on managing game state, rendering the game board, and implementing the card interactions. ",

      steps: [
        {
          stepTitle: "Step 1: Set Up React App",

          sections: [
            {
              descriptions: [
                "Create a new React app using create-react-app or any preferred method.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",

          sections: [
            {
              descriptions: [
                "Plan out the component structure. You'll need at least three components: App, Cards, and Card.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create App Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Use the useState hook to create a state variable to track whether to start the game again. Initialize it with false, since the game hasn't started yet.",
                "Create a function, let's call it handleStartAgain, that updates the state variable to true when the 'Start Again' button is clicked. Use setTimeout to set the state back to false after a short delay, like 100 milliseconds. This is to ensure a smooth transition when resetting the game.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create Cards Component",
          titleDescription: "Crads.js",
          sections: [
            {
              descriptions: [
                " Inside the Cards component, use the useState hook to manage the state of the cards. This state should hold an array of objects representing each card, with properties like id, img, and stat (to track whether it's active, correct, or wrong).",
                "Utilize the useEffect hook to watch for changes in the startAgain prop passed from the App component. When startAgain becomes true, reset the game by reinitializing the state of the cards. Remember to reset the prev state as well.",
                " Implement a function, let's name it handleClick, to handle clicks on the cards. When a card is clicked, check if there's already a previously clicked card. If not, mark the clicked card as active. If there's already a previously clicked card, compare it with the current one. If they match, mark both as correct. If they don't match, mark them as wrong and reset their status after a delay.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create Card Component",

          sections: [
            {
              descriptions: [
                "Define the Card component to accept props like item, id, and handleClick. The item prop will contain information about the card, such as its image and status.",
                "Inside the Card component, render a div representing the card. Bind an onClick event to this div, calling the handleClick function with the card's id when clicked.",
                "Use the item.stat property to dynamically apply CSS classes based on the card's status. For example, if item.stat is 'active', apply a class to highlight the card. If it's 'correct' or 'wrong', apply respective classes for visual feedback.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Randomize Cards",
          titleDescription: "Cards.js",
          sections: [
            {
              descriptions: [
                "Implement a function to randomize the cards. You can use the Fisher-Yates shuffle algorithm or simply shuffle the array using sort method with a randomizing function.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Logic for Card Click",
          titleDescription: "Cards.js",
          sections: [
            {
              descriptions: [
                "Implement the logic to handle card clicks. If no card is currently selected, mark the clicked card as selected. If one card is already selected, compare it with the newly selected card. If they match, mark them as correct. If they don't match, mark them as wrong and reset them after a delay.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Styling",
          titleDescription: "Cards.js",
          sections: [
            {
              descriptions: [
                "Apply styles to make the memory game visually appealing. You can use CSS or any CSS-in-JS solution.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/Cb0Enix4nrY",
      codesandboxUrl:
        "https://codesandbox.io/embed/56gy36?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson9.webp"),
    },
    {
      taskId: "Color-Generator",
      taskTitle: "Color Generator",
      introduction:
        "In this tutorial, you will learn how to build a React application for generating and displaying color palettes. We'll create two components: App, which handles user input and color generation, and SingleColor, responsible for rendering individual color swatches with the ability to copy color values to the clipboard. ",

      steps: [
        {
          stepTitle: "Step 1: Setting Up React Environment",

          sections: [
            {
              descriptions: [
                "Make sure you have Node.js installed on your system.",
                "Create a new React project using create-react-app or any other method you prefer.",
                "Install values.js",
                "Navigate to the project directory in your terminal.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Component Files",

          sections: [
            {
              descriptions: [
                "Inside the src folder of your React project, create two new files: App.js and SingleColor.js.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: App Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Import React and necessary hooks from the 'react' library.",
                "Import the SingleColor component from './SingleColor'.",
                "Import the 'Values' class from 'values.js'.",
                "Define a functional component named App.",
                "Inside the component, set up state variables using the useState hook: 'color': to store the input hex color value, 'error': to track any input errors, 'list': to store an array of color values.",
                "Implement a handleSubmit function: Prevent the default form submission behavior. Try to create a list of color values using the 'Values' class from the input hex color. If successful, update the 'list' state with the new color values. If an error occurs, set the 'error' state to 'true'.",
                "Return JSX: Create a form with an input field for entering a hex color code and a submit button. Display an error message if error state is true. Map over the list state array and render SingleColor component for each color value.",
                "Export the App component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: SingleColor Component",
          titleDescription: "SingleColor.js",
          sections: [
            {
              descriptions: [
                "Import React and necessary hooks from the 'react' library.",
                "Define a functional component named SingleColor.",
                "Inside the component, set up state variables using the useState hook: 'alert': to track whether the color value has been copied to the clipboard.",
                "Extract the rgb, weight, index, and hexColor props from the component props.",
                "Convert the rgb array to a string to represent the background color.",
                "Define a hexValue variable to represent the hex color value.",
                "Implement a useEffect hook to clear the alert message after 3 seconds: ",
                "Define an asynchronous function called copyToClipboard that: Attempts to write the hexValue to the clipboard using navigator.clipboard.writeText(hexValue); Sets the 'alert' state to true if the clipboard write operation is successful; Logs any errors to the console if the clipboard write operation fails.",
                "Return JSX: Render an article element representing a single color. Set the background color using inline styles. Display the weight percentage and hex color value. Show an alert message if 'alert' state is 'true'.",
                "Bind the onClick event of the article element to the copyToClipboard function, ensuring that the clipboard write operation is triggered by a user gesture.",
                "Export the SingleColor component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Styling",

          sections: [
            {
              descriptions: [
                "Style the components using CSS according to your preferences.",
                "You can add CSS classes and styles directly in your component files or download separate CSS file and import them into your components.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/u59ezyE_uUc",
      codesandboxUrl:
        "https://codesandbox.io/embed/33th26?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson10.webp"),
    },
    {
      taskId: "Range-Slider",
      taskTitle: "Range Slider",
      introduction:
        "'Range Slider' is a versatile React project that features a customizable double range slider component. With intuitive user interaction and adjustable minimum and maximum values, it offers a seamless way to select a range of values within a specified range.",

      steps: [
        {
          stepTitle: "Step 1: Setup your React environment",

          sections: [
            {
              descriptions: [
                "Make sure you have Node.js and npm installed on your machine.",
                "Create a new React project using create-react-app or any other method you prefer.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create a new component file",

          sections: [
            {
              descriptions: [
                "In your React project, create a new file called DoubleRangeSlider.js.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Import necessary dependencies",

          sections: [
            {
              descriptions: [
                "At the top of your DoubleRangeSlider.js file, import React, useState, useEffect, useRef, and PropTypes",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create the component function",

          sections: [
            {
              descriptions: [
                "Declare your component function named DoubleRangeSlider and pass min and max as props",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Initialize state for min and max values",

          sections: [
            {
              descriptions: [
                "Inside the component function, use the useState hook to create state variables for minVal and maxVal",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6:Create refs for DOM elements",

          sections: [
            {
              descriptions: [
                "Define refs for the left thumb, right thumb, and the range track",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Define utility functions",

          sections: [
            {
              descriptions: [
                "Create a utility function getPercent to convert slider values to percentage",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Implement useEffect for left thumb",

          sections: [
            {
              descriptions: [
                "Within the useEffect hook, calculate the percentage value of minVal using the getPercent utility function.",
                "Update the left thumb's position using the calculated percentage.",
                "Also, update the position of the range track.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Implement useEffect for right thumb ",

          sections: [
            {
              descriptions: [
                "Inside the useEffect hook, calculate the percentage value of maxVal using the getPercent utility function.",
                "Update the right thumb's position using the calculated percentage.",
                "Adjust the width of the range track based on the difference between minVal and maxVal.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Render the component ",

          sections: [
            {
              descriptions: [
                "Within the return statement of the DoubleRangeSlider component, define the HTML structure for the range slider.",
                "Use <div> elements to create containers for the slider components.",
                "Create an <input> element for the left thumb of the range slider.",
                "Set the type attribute to 'range' to create a range input.",
                "Set min, max, and value attributes to min, max, and minVal respectively to define the range and initial value.",
                "Add an onChange event handler to update the minVal state when the left thumb is moved.",
                "Assign the className attribute to style the left thumb.",
                "Similar to the left thumb, create another <input> element for the right thumb of the range slider.",
                "Set the type attribute to 'range'.",
                "Set min, max, and value attributes to min, max, and maxVal respectively.",
                "Add an onChange event handler to update the maxVal state when the right thumb is moved.",
                "Assign the className attribute to style the right thumb.",
                "Create a <div> element with a class name to represent the slider track.",
                "This will serve as the visual representation of the range between the left and right thumbs.",
                "Create a <div> element to display the current value of the left thumb.",
                "Use the ref attribute to reference this element for positioning updates.",
                "Initially, display the minVal.",
                "Similarly, create another <div> element to display the current value of the right thumb.",
                "Use the ref attribute to reference this element for positioning updates.",
                "Initially, display the maxVal.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Add PropTypes validation",

          sections: [
            {
              descriptions: ["Define PropTypes for the min and max props."],
            },
          ],
        },
        {
          stepTitle: "Step 12: Apply CSS classes and styles",

          sections: [
            {
              descriptions: [
                "Define CSS classes for styling the range slider components.",
                "Apply styles to position the thumbs, track, and value displays.",
                "Use CSS to customize the appearance of the range slider according to your design preferences.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/R32740sV72A",
      codesandboxUrl:
        "https://codesandbox.io/embed/frqg9y?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson11.webp"),
    },
    {
      taskId: "Form-Validation-Component",
      taskTitle: "Form Validation Component",
      introduction:
        "This React task designed to facilitate form input validation within a user interface. It employs conditional logic to validate user input for fields such as username, email, password, and confirm password, displaying corresponding error messages and dynamically adjusting border colors to indicate validation status.",

      steps: [
        {
          stepTitle: "Step 1: Import React and useState Hook",

          sections: [
            {
              descriptions: [
                " Import React at the top of your file. Then, import the useState hook from the react package.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create Functional Component",

          sections: [
            {
              descriptions: ["Define a functional component named Main."],
            },
          ],
        },
        {
          stepTitle: "Step 3: Initialize State Variables",

          sections: [
            {
              descriptions: [
                "Inside the Main component, initialize state variables using the useState hook for username, email, password, confirmPassword, errorUserName, errorEmail, errorPassword, errorConfrimPassword, userColor, emailColor, passwordColor, and confirmPasswordColor.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create Validation Function",

          sections: [
            {
              descriptions: [
                "Define a function named validate within the Main component. This function will handle form validation.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Prevent Default Behavior",

          sections: [
            {
              descriptions: [
                "In the validate function, prevent the default form submission behavior using e.preventDefault().",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Validate Username",

          sections: [
            {
              descriptions: [
                "Check if the length of the username is greater than 8 characters. If it is, clear any existing error message related to the username and set the userColor state to green. Otherwise, set the error message to 'Username must be 8 letters long' and userColor to red.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Validate Email",

          sections: [
            {
              descriptions: [
                "Check if the email includes '@gmail'. If it does, clear any existing error message related to the email and set the emailColor state to green. Otherwise, set the error message to 'Email should have @gmail' and emailColor to red.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Validate Password",

          sections: [
            {
              descriptions: [
                "Check if the length of the password is greater than 8 characters. If it is, clear any existing error message related to the password and set the passwordColor state to green. Otherwise, set the error message to 'Password should be 8 letters long' and passwordColor to red.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Validate Confirm Password",

          sections: [
            {
              descriptions: [
                "Check if the password and confirmPassword match. If they do, clear any existing error message related to the confirm password and set the confirmPasswordColor state to green. Otherwise, set the error message to 'Passwords didn't matched' and confirmPasswordColor to red.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Render Form Inputs",

          sections: [
            {
              descriptions: [
                "Render input fields for username, email, password, and confirmPassword. Apply inline styles to set the border color based on the corresponding state variables (userColor, emailColor, passwordColor, confirmPasswordColor).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Render Error Messages",

          sections: [
            {
              descriptions: [
                "Render error messages below each input field to display validation errors (errorUserName, errorEmail, errorPassword, errorConfrimPassword).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Attach Event Handlers",

          sections: [
            {
              descriptions: [
                "Attach onChange event handlers to update state variables as the user types in each input field.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 13: Attach Click Event Handler",

          sections: [
            {
              descriptions: [
                "Attach a onClick event handler to the submit button (<button>). This handler will call the validate function when the button is clicked.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 14: In your App.js file",

          sections: [
            {
              descriptions: [
                "Import the Main component from the './Main' file.",
                "Import the CSS styles from the './index.css' file to apply styling to the components.",
                "Create a functional component named App using an arrow function syntax (=>), (or other preferable way).",
                "Within the App component, return the Main component. This will render the form validation component within the App.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/ej5d3YZkmuY",
      codesandboxUrl:
        "https://codesandbox.io/embed/x6fmlz?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson12.webp"),
    },
    {
      taskId: "Markdown-Preview-App",
      taskTitle: "Markdown Preview App",
      introduction:
        "The Markdown Preview app is a simple yet powerful tool built using React, a popular JavaScript library for building user interfaces. Markdown is a lightweight markup language with plain-text formatting syntax, often used to format text on the web. This app allows users to input Markdown syntax in a textarea and instantly preview the formatted output in real-time.",

      steps: [
        {
          stepTitle: "Step 1: Create React App",

          sections: [
            {
              descriptions: [
                "If you haven't already, initiate a new React project using Create React App",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Install Dependencies",

          sections: [
            {
              descriptions: [
                "Install the necessary dependencies for your Markdown preview app. In this case, you'll need the react-markdown library.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Component Structure",

          sections: [
            {
              descriptions: [
                "Inside App.js, you'll create a functional component named App. This component will manage the state of the Markdown content and render both the textarea for input and the Markdown preview.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: State Management",

          sections: [
            {
              descriptions: [
                "Utilize the useState hook to manage the Markdown content. Initially, set the default Markdown content to '# Markdown Preview:'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Rendering",

          sections: [
            {
              descriptions: [
                "Render the main component structure inside the App component. This includes a textarea for input and an article for the Markdown preview. Bind the textarea value to the Markdown state and update the state whenever the content in the textarea changes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Markdown Rendering",

          sections: [
            {
              descriptions: [
                "Use the ReactMarkdown component from the react-markdown library to render the Markdown content inside the article.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Styling ",

          sections: [
            {
              descriptions: [
                "Add some basic styling to your app for a better user experience. You can download a CSS file from below.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      videoLink: "https://youtu.be/Td_GGoYD09k",

      codesandboxUrl:
        "https://codesandbox.io/embed/l8sft7?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson13.webp"),
    },
    {
      taskId: "Menu-App",
      taskTitle: "Menu App",
      introduction:
        "React Menu App is a responsive web application. It provides users with a dynamic menu interface, allowing them to explore a variety of food items categorized into different sections. Users can easily navigate through the menu, filter items based on categories, and view detailed information such as item descriptions and prices. With its intuitive design and interactive features, ReactMenuApp offers a delightful browsing experience for discovering delicious dishes.",

      steps: [
        {
          stepTitle: "Step 1: Setting Up the Project",

          sections: [
            {
              descriptions: [
                "Start by creating a new React project using Create React App or any other method you prefer.",
                "Make sure you have React installed in your project.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Data Setup",
          titleDescription: "data.js",
          sections: [
            {
              descriptions: [
                "Create a file named data.js where you will store the menu items as an array of objects.",
                "Each object should represent a menu item and include properties like id, title, category, price, img, and desc.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Creating Components",

          sections: [
            {
              descriptions: [
                "Create three new files: App.js, Categories.js, and Menu.js in your project directory.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create an App Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Start by importing React and useState hook at the top of App.js.",
                "Import Menu, Categories, and items from their respective files (Menu.js, Categories.js, and data.js).",
                "Create a constant allCategories that includes all unique categories from the items data. You can achieve this using the map function along with the Set object to filter out unique categories.",
                "Utilize the useState hook to create state variables for menuItems and categories. Initialize them with items and allCategories respectively.",
                "Implement a function named filterItems that takes a category parameter. Inside this function, check if the selected category is 'all'. If it is, set menuItems state to the entire items array. Otherwise, filter the items array based on the selected category and update the state of menuItems accordingly.",
                "Within the return statement, render the Categories and Menu components. Pass the appropriate props (categories, filterItems, and menuItems) to each component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create a Categories Component",
          titleDescription: "Categories.js",
          sections: [
            {
              descriptions: [
                "Import React and useState hook at the top of Categories.js.",
                "Create a functional component named Categories that takes categories and filterItems as props.",
                "Use the useState hook to create a state variable named activeCategory and initialize it to null.",
                "Implement a function named handleCategoryClick that takes category as a parameter. Inside this function, call the filterItems function passed as a prop and update the activeCategory state with the selected category.",
                "Map through the categories array and render a button for each category. Use the activeCategory state to conditionally apply a CSS class to highlight the active category. Implement an onClick event on each button to call the handleCategoryClick function with the corresponding category.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create a Menu Component",
          titleDescription: "Menu.js",
          sections: [
            {
              descriptions: [
                "Import React at the top of Menu.js.",
                "Create a functional component named Menu that takes items as a prop.",
                "Map through the items array passed as props. For each item, destructure its properties (such as id, title, img, desc, and price) and render them within an <article> element.",
                "Inside the <article> element, render the item's image, title, price, and description using the destructured properties.",
                "Assign a unique key prop to each <article> element, using the item's id property to ensure React can efficiently update the DOM when items are added, removed, or reordered.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Styling",

          sections: [
            {
              descriptions: [
                "Add CSS files (App.css, Menu.css, Categories.css) to style your components.",
                "Style the menu, categories, buttons, and other elements as per your design.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Wiring Everything Together",

          sections: [
            {
              descriptions: [
                "Import the necessary components into App.js.",
                "Ensure proper props are passed to each component.",
                "Test your application to see if everything works as expected.",
                "Make adjustments and refactor code if needed.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/5yphtm?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson14.webp"),
    },
    {
      taskId: "Responsive-Navbar",
      taskTitle: "Responsive Navbar",
      introduction:
        "This project is a simple React application focused on building a responsive navbar component. It includes a logo, navigation links, and social icons. It's designed to repeat the basics of React component creation, state management, and rendering dynamic data. This hands-on project offers a step-by-step guide to help understand the fundamentals of web development using React.js.",

      steps: [
        {
          stepTitle: "Step 1: Setting Up React Project",

          sections: [
            {
              descriptions: [
                "Begin by creating a new React project using Create React App or your preferred method.",
                "Make sure you have Node.js and npm (Node Package Manager) installed on your system.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create Data File",

          sections: [
            {
              descriptions: [
                "Create a new file named data.js.",
                "Inside data.js, define two arrays: links and social.",
                "Each array should contain objects with properties like id, url, text, and icon. Populate them with your desired data.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create Navbar Component",
          titleDescription: "Navbar.js",
          sections: [
            {
              descriptions: [
                "Create a new file named Navbar.js.",
                "Import React at the top of the file.",
                "Import 'links' and 'social' arrays from data.js. ( dont forget to put them in {} ) ",
                "Install and import necessary dependencies like FaBars icon from react-icons/fa.",
                "Define a functional component named Navbar.",
                "Declare state variables for managing the visibility of links. Use the useState hook to initialize state variables.",
                "Utilize the useRef hook to create refs for the links container and the links themselves. This allows us to access the DOM elements and manipulate their properties.",
                "Define a function to toggle the visibility of links when the toggle button is clicked. This function will update the showLinks state.",
                "Use the useEffect hook to update the height of the links container based on the visibility state. This ensures that the container expands and collapses smoothly.",
                "Render JSX for your navbar structure, including logo, toggle button, links, and social icons. Use semantic HTML elements like <nav>, <ul>, <li>, and <a> for better accessibility and SEO.",
                "Map through the links and social arrays imported from the data.js file to generate respective elements. Use the map function to iterate over the arrays and create <li> elements with <a> tags inside.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create App Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Open App.js.",
                "Import React at the top of the file. ( use 'imr' snippet ;) )",
                "Import Navbar component from the Navbar.js file.",
                "Define a functional component named App. ( use 'nfn' snippet ;) )",
                "Inside the component, return JSX that renders the Navbar component.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/ccxl9t?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson15.webp"),
    },
    {
      taskId: "Pagination-Page",
      taskTitle: "Pagination Page",
      introduction:
        "This project is a React application designed to showcase pagination functionality while fetching and displaying a list of GitHub followers. Through the use of React hooks, specifically useState and useEffect, it efficiently manages state and data fetching. The main component, App, orchestrates the pagination logic, rendering follower cards dynamically with the help of the Follower component. The useFetch custom hook handles fetching data from the GitHub API, while a utility function called paginate organizes the fetched data into pages for easier navigation. By studying and implementing this project, you will gain valuable insights into React state management, data fetching, and pagination techniques.",

      steps: [
        {
          stepTitle: "Step 1: Project Setup",

          sections: [
            {
              descriptions: [
                "Set up a new React project using Create React App or by initializing a project manually.",
                "Install necessary dependencies such as react and react-dom.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create useFetch Hook",
          titleDescription: "useFetch.js",
          sections: [
            {
              descriptions: [
                "Create a new file named useFetch.js.",
                "Import useState and useEffect from the React library.",
                "Define the useFetch function as a custom hook.",
                "Inside useFetch, initialize state variables using useState: 'loading': to track whether data is currently being fetched. 'data': to store the fetched data from the GitHub API.",
                "Write an asynchronous function within useFetch to fetch data from the GitHub API: Use 'fetch' to make a GET request to the API endpoint (https://api.github.com/users/znkbnk/followers?per_page=100). Convert the response to JSON using 'response.json()'. Update the 'data' state with the fetched data. Set 'loading' to 'false' once the data is fetched.",
                "Use 'useEffect' within the 'useFetch' function to trigger the data fetching process when the component mounts: Pass an empty dependency array ([]) to ensure 'useEffect' only runs once. Call the asynchronous function responsible for fetching data.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create paginate Utility Function",
          titleDescription: "paginate.js",
          sections: [
            {
              descriptions: [
                "Create a new file named paginate.js.",
                "Define the 'paginate' function to handle pagination logic.",
                "Declare 'paginate' as a function that takes an array of followers as input.",
                "Inside 'paginate', calculate the number of pages required based on the length of the followers array and a predetermined number of items per page (e.g., 10).",
                "Initialize an empty array to store paginated followers.",
                "Use a loop (such as 'Array.from' or a traditional 'for' loop) to iterate over the followers array and split it into chunks corresponding to each page.",
                "For each page, extract a slice of followers from the original array based on the current page number and the items per page.",
                "Push each slice of followers into the 'paginatedFollowers' array.",
                "Finally, return the 'paginatedFollowers' array containing arrays of followers grouped by page.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Build the Follower Component",
          titleDescription: "Follower.js",
          sections: [
            {
              descriptions: [
                "Create a new file named Follower.js.",
                "Define the 'Follower' component as a functional component that takes props (e.g., avatar_url, html_url, login).",
                "Inside the 'Follower' component, destructure the props to access individual follower data.",
                "Use JSX to render the follower card, including the follower's avatar, username, and a link to their GitHub profile.",
                "Utilize appropriate HTML elements and attributes (e.g., <img>, <h4>, <a>) to structure the follower card.",
                "Ensure that the GitHub profile link (html_url) is set as the 'href' attribute of the anchor (<a>) tag.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Implement Pagination in the App Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Open the App.js file.",
                "Import useState, useEffect, and the useFetch hook.",
                "Inside the App functional component, initialize state variables using useState: 'page': to track the current page number. 'followers': to store the followers data for the current page.",
                "Use the 'useFetch' hook to fetch data from the GitHub API and manage loading state (loading) and fetched data (data).",
                "Implement useEffect to update the followers state whenever the data or loading status changes: Check if data is loaded (!loading). If data is loaded, update the 'followers' state with the followers data for the current page (data[page]).",
                "Implement functions for navigating between pages: 'nextPage': Increment the page state to display the next page of followers. 'prevPage': Decrement the 'page' state to display the previous 'page' of followers.",
                "Implement a function (handlePage) to handle clicking on pagination buttons: Update the 'page' state based on the index of the clicked pagination button.",
                "Render follower cards based on the followers state: Use the map function to iterate over the 'followers' array and render a 'Follower' component for each follower.",
                "Render pagination buttons: Use the map function to generate pagination buttons based on the number of pages in the data (data.length). Add appropriate CSS classes to style the active page button differently.",
                "Attach event handlers (onClick) to the pagination buttons to trigger page navigation when clicked.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Style the Components",

          sections: [
            {
              descriptions: [
                "Create a CSS file (e.g., styles.css) to style the components.",
                "Style the follower cards, buttons, and pagination elements to improve the appearance and layout of the application. ( Or download from the bottom )",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/kcsm88?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson16.webp"),
    },
    {
      taskId: "Search-Bar",
      taskTitle: "Search Bar",
      introduction:
        "This project is a React-based web application designed to facilitate user searches within a given dataset. The core functionality revolves around a SearchBar component, allowing users to input search queries. As users type into the search bar, the application dynamically fetches data from an external API and filters the results based on the user's input. The search results are then displayed in a list format, enabling users to browse and select relevant items.",

      steps: [
        {
          stepTitle: "Step 1: Create a React project",

          sections: [
            {
              descriptions: [
                "If you haven't already, set up a new React project using Create React App or any other preferred method.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",

          sections: [
            {
              descriptions: [
                "Ensure that you have three components: SearchBar, SearchResult, and SearchResultsList.",
                "Each component should be in its own file with appropriate names (SearchBar.js, SearchResult.js, SearchResultsList.js).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Component Styling",

          sections: [
            {
              descriptions: [
                "Create CSS files for each component to handle their styling (SearchBar.css, SearchResult.css, SearchResultsList.css).",
                "Style each component according to the provided CSS classes. ( Or just download all the styles from link provided on the bottom )",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Implement SearchBar Component",
          titleDescription: "SearchBar.js",
          sections: [
            {
              descriptions: [
                "Begin by importing the necessary dependencies at the top of your SearchBar.js file.",
                "These dependencies include React, useState hook, FaSearch icon from react-icons/fa, and the CSS file for styling.",
                "Initialize state variables using the useState hook to manage the input value, search results, selected result, and visibility of search results.",
                "Use useState to declare state variables such as 'input', 'results', 'selectedResult', and 'showResults'.",
                "Implement the 'fetchData' function to fetch data from a remote API endpoint.",
                "Use the 'fetch' API to retrieve data from the specified URL (e.g., 'https://jsonplaceholder.typicode.com/users'). Also you can create your own using 'https://json-generator.com' website ",
                "Upon receiving the response, parse it as JSON and filter the results based on the user input.",
                "Update the 'results' state with the filtered data and set 'showResults' to true to display the search results.",
                "Implement event handler functions to manage user interactions with the search bar.",
                "'handleChange': Update the input value as the user types and trigger data fetching based on the input value.",
                "'handleSelect': Handle the selection of a search result and update the selectedResult state accordingly.",
                "'handleKeyPress': Handle keyboard events, such as hiding search results when the Enter key is pressed.",
                "Render JSX elements for the search bar, selected result details (if any), and the search results list.",
                "Use the FaSearch icon component to render the search icon.",
                "Bind event handlers to relevant input events such as onChange and onKeyDown.",
                "Conditionally render the selected result details and search results list based on the state variables.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Implement SearchResult Component",
          titleDescription: "SearchResult.js",
          sections: [
            {
              descriptions: [
                "Import React and the CSS file for styling at the top of your SearchResult.js file.",
                "Define the SearchResult functional component that accepts props (user and onSelect).",
                "Destructure the user and onSelect props within the function signature.",
                "Render JSX elements to display the search result information.",
                "Typically, this includes rendering the user's name within a clickable container.",
                "Handle user interactions such as clicking on the search result.",
                "Implement an onClick event on the container element to invoke the onSelect function with the selected user as an argument.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Implement SearchResultsList Component",
          titleDescription: "SearchResultsList.js",
          sections: [
            {
              description: [
                "Import React, the SearchResult component, and the CSS file for styling at the top of your SearchResultsList.js file.",
                "Define the SearchResultsList functional component that accepts props (results and onSelect).",
                "Destructure the results and onSelect props within the function signature.",
                "Map through the results array passed as props.",
                "For each user in the results array, render a SearchResult component.",
                "Pass the user object and onSelect function as props to the SearchResult component.",
                "Ensure that the SearchResultsList component properly renders a list of SearchResult components based on the provided results array.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: App Component Implementation",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Import React and useState hook at the top of your App.js file.",
                "Define the functional component named App.",
                "Initialize state variable 'results' using the useState hook.",
                "'results' will hold the search results fetched from the SearchBar component.",
                "Within the App component's return statement, render JSX elements to create the layout of your application.",
                "Use the CSS class 'App' for the root div element.",
                "Import the SearchBar component and render it within the App component.",
                "Pass the 'setResults' function as a prop to the SearchBar component to update the results state.",
                "Use conditional rendering to display the SearchResultsList component only if there are results to display.",
                "Check if results state is not empty and has a length greater than 0.",
                "If true, render the SearchResultsList component and pass the results state as props.",
                "Ensure that the CSS classes used in the JSX elements are defined in the associated CSS file (e.g., index.css).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Integrate Components",

          sections: [
            {
              descriptions: [
                "Import the SearchBar component into your main application file (e.g., App.js) and render it within your main component hierarchy.",
                "Ensure that the SearchBar component is properly integrated with the rest of your application, and its functionality is tested thoroughly.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/ltj77r?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson17.webp"),
    },
    {
      taskId: "Dropdown",
      taskTitle: "Dropdown",
      introduction:
        "This project is a React application that implements a dropdown menu for selecting programming languages. Users can click on an input field, triggering the appearance of a dropdown menu containing a list of programming languages. They can then select a language from the list, and the selected language will be displayed in the input field. The dropdown menu can be toggled open and closed by clicking on the input field. Overall, this project provides a user-friendly interface for selecting programming languages within a React environment.",

      steps: [
        {
          stepTitle: "Step 1: Import CSS File",

          sections: [
            {
              descriptions: [
                "Import the CSS file (App.css) at the top of your JavaScript file to apply styles to the components used in your React application.",
                "Or download from the link below",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Import Necessary Dependencies",

          sections: [
            {
              descriptions: [
                "Import necessary dependencies from React such as 'useState' and 'useRef' to manage state and create refs, respectively.",
                "Also, import the 'FontAwesomeIcon' component and 'faCaretDown' icon from @fortawesome/react-fontawesome to use an icon for the dropdown indicator.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Define Options Array",

          sections: [
            {
              descriptions: [
                "Create an array named 'optionsArray' containing different programming languages that users can select from.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Declare State Variables",

          sections: [
            {
              descriptions: [
                "Use the 'useState' hook to declare a state variable named 'isOpenSelect'. This variable will manage the visibility of the dropdown menu.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create Ref for Input Element",

          sections: [
            {
              descriptions: [
                "Create a ref using the 'useRef' hook to reference the input element where the selected language will be displayed.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Define selectLanguage Function",

          sections: [
            {
              descriptions: [
                "Define a function named 'selectLanguage' that takes an event as a parameter.",
                "Inside this function, access the text content of the clicked option using 'e.target.textContent'.",
                "Update the value of the input field (languageInput.current.value) with the selected language.",
                "Set the 'isOpenSelect' state to 'false' to close the dropdown menu after selection.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Define toggleOptions Function",

          sections: [
            {
              descriptions: [
                "Define a function named 'toggleOptions' that toggles the visibility of the dropdown menu.",
                "Inside this function, use 'setIsOpenSelect' to update the 'isOpenSelect' state by toggling its value between 'true' and 'false'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Render Input Field",

          sections: [
            {
              descriptions: [
                "Render an input field (<input>) for selecting languages.",
                "Attach the 'onClick' event listener to the input field to trigger the 'toggleOptions' function when clicked.",
                "Attach the 'onBlur' event listener to the input field to close the dropdown menu when it loses focus.",
                "Set the 'ref' attribute of the input field to 'languageInput' to create a reference to this input element.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Render Caret Icon",

          sections: [
            {
              descriptions: [
                "Render a caret icon (downward arrow) using 'FontAwesomeIcon' component.",
                "Pass the 'faCaretDown' icon as a prop to 'FontAwesomeIcon'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Render Dropdown Menu",

          sections: [
            {
              descriptions: [
                "Render the dropdown menu containing the options from the 'optionsArray'.",
                "Use the map method to iterate over the 'optionsArray' and render each option as a list item (<li>).",
                "Attach the 'onClick' event listener to each list item to trigger the 'selectLanguage' function when clicked.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step11: Apply Conditional Classes",

          sections: [
            {
              descriptions: [
                "Apply conditional classes to the icon and options container based on the state of 'isOpenSelect'.",
                "If 'isOpenSelect' is 'true', add the class 'active' to the icon and options container to make them visible; otherwise, remove the class to hide them.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/5rsfxk?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson18.webp"),
    },
    {
      taskId: "Sidebar",
      taskTitle: "Sidebar",
      introductions:
        "This is a React-based web application featuring a dynamic sidebar navigation menu, offering users easy access to various sections and functionalities. With a customizable and expandable structure, it enhances user experience by providing seamless navigation within the application.",

      steps: [
        {
          stepTitle: "Step 1: Setup your React project",

          sections: [
            {
              descriptions: [
                "Ensure you have a React project set up with all necessary dependencies installed.",
                "Install 'Bootstrap Icons' via npm",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create Components",

          sections: [
            {
              descriptions: [
                "Create a Sidebar.js file inside the components directory.",
                "Create a SidebarItem.js file inside the components directory.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Implement SidebarItem Component",
          titleDescription: "SidebarItem.js",
          sections: [
            {
              descriptions: [
                "Inside the 'components' directory, create a new file named SidebarItem.js.",
                "In SidebarItem.js, import 'useState' from React for managing component state.",
                "Import Bootstrap icons CSS for icon rendering.",
                "Create a functional component named SidebarItem that accepts 'item' as a prop.",
                "Inside the component, use 'useState' hook to manage the state of submenu ('open' state).",
                "Conditionally render the sidebar item based on whether it has children or not.",
                "If it has children, render a collapsible item with a submenu. If not, render a plain link.",
                "Use Bootstrap icons for rendering icons associated with sidebar items.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Implement Sidebar Component",
          titleDescription: "Sidebar.js",
          sections: [
            {
              descriptions: [
                "Inside the 'components' directory, create a new file named Sidebar.js.",
                "Import 'SidebarItem' component.",
                "Import the sidebar data from the JSON file.",
                "Create a functional component named 'Sidebar'.",
                "Inside the component, map through the sidebar data and render each sidebar item using the 'SidebarItem' component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Implement Main App Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Import the 'Sidebar' component at the top of the file.",
                "In the 'App' functional component, structure the layout with a main container and a sidebar.",
                "Render the 'Sidebar' component inside the main container.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Import Sidebar Data",
          titleDescription: "sidebar.json",
          sections: [
            {
              descriptions: [
                "Inside the src directory (or wherever your data folder is located), create a new file named sidebar.json.",
                "Manually type or define your sidebar data structure within this JSON file.",
                "This structure should have an array of sidebar items, each containing properties such as title, icon, path, and optionally childrens.",
                "Or you can download it from the link below",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Style Your Components",

          sections: [
            {
              description: [
                "Style your components using CSS. You can create a separate CSS file or use CSS-in-JS libraries like Styled Components.",
                "Or simply download it from the link below",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/7dcynh?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson19.webp"),
    },
    {
      taskId: "Dynamic-Table-with-Sorting-and-Copy-Functionality",
      taskTitle: "Dynamic Table with Sorting and Copy Functionality",
      introduction:
        "This project is a React application that demonstrates the implementation of a dynamic table using the react-table library. The table is populated with mock data imported from a JSON file. Each row in the table represents an object from the mock data, with columns corresponding to the object properties. The table provides sorting functionality for each column and allows users to copy row data to the clipboard. Overall, this project serves as a practical example of creating interactive tables in React applications with sorting and copy functionality.",

      steps: [
        {
          stepTitle: "Step 1: Import Required Dependencies",

          sections: [
            {
              descriptions: [
                "Begin by importing the necessary modules and dependencies for your React application. In your case, you're using React, react-table ( useTable, useSortBy ) and fakeData ( from JSON/data file ). Make sure to import any required stylesheets as well.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Define Component Function",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Create a functional component named App. This is where you'll define the structure and behavior of your application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Prepare Mock Data",

          sections: [
            {
              descriptions: [
                "Use React.useMemo to memoize your mock data. This improves performance by ensuring the data is recalculated only when necessary.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Define Columns Configuration",

          sections: [
            {
              descriptions: [
                "Create a configuration object for your table columns using React.useMemo. Each column should have a Header property for the column header text and an accessor property for the data key to be accessed from each row. Optionally, specify a custom Cell renderer.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Define Table Hooks",

          sections: [
            {
              descriptions: [
                "Utilize the 'useTable' and 'useSortBy' hooks from 'react-table' to initialize the table functionality. Pass in the columns and data as arguments.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Define Copy Function",

          sections: [
            {
              descriptions: [
                "Create a CopyButton component that takes text as a prop. This component will copy the text to the clipboard using the navigator.clipboard.writeText() method",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Render Table Structure",

          sections: [
            {
              descriptions: [
                "Use the getTableProps() function provided by the 'useTable' hook to retrieve the necessary props for the <table> element.",
                "Create a <thead> element to contain the table headers.",
                "Map over the 'headerGroups' array, which contains groups of headers. For each 'headerGroup': Create a <tr> element to represent a row of headers. Within the header row, map over the 'headers' array of the 'headerGroup'. For each 'column': Create a <th> element to represent a header cell. Use 'column.getHeaderProps(column.getSortByToggleProps())' to apply sorting functionality to the header cell.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Render Table Headers",

          sections: [
            {
              descriptions: [
                "Inside each <th> element, render the header text using 'column.render('Header')'.",
                "Include sorting icons based on the 'isSorted' and 'isSortedDesc' properties of the column. If 'isSorted' is true, display a descending or ascending arrow based on 'isSortedDesc'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Render Table Body",

          sections: [
            {
              descriptions: [
                "Use the getTableBodyProps() function provided by the 'useTable' hook to retrieve the necessary props for the <tbody> element.",
                "Map over the 'rows' array, which contains the data rows. For each 'row': Use the 'prepareRow' function provided by 'react-table' to prepare the row for rendering.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Render Table Cells",

          sections: [
            {
              descriptions: [
                "Inside each <tr> element representing a row, map over the 'row.cells' array. For each 'cell': Create a <td> element to represent a cell. Use 'cell.render('Cell')' to render the content of the cell. This will render the custom cell component if defined or the default cell content otherwise.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Styles and Data",

          sections: [
            {
              descriptions: [
                "Style the components according to your preferences. Aapply CSS styles directly within the *.css file or use any CSS-in-JS solution of your choice.",
                "Optionally, you can download pre-made CSS stylesheets for the table components. Additionally, you can download the JSON/data file containing mock data from the provided links below.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/nklcs7?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson20.webp"),
    },
    {
      taskId: "To-Do-App",
      taskTitle: "To-Do App",
      introduction:
        "The To-Do application is a simple task management tool built using React. It allows users to add, delete, edit, and mark tasks as complete. The application provides a clean and intuitive user interface, with separate components for adding new tasks, displaying existing tasks, and editing tasks. Users can interact with each task individually, marking them as completed or editing their details as needed. The application also features toast notifications to provide real-time feedback to users when tasks are completed or edited.",

      steps: [
        {
          stepTitle: "Step 1: Set Up React Project",

          sections: [
            {
              descriptions: [
                "Ensure you have Node.js and npm installed.",
                "Create a new React project using npx create-react-app todo-app.",
                "Navigate into the project directory with cd todo-app.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create Components Directory",

          sections: [
            {
              descriptions: [
                "Inside the src directory, create a new directory named Components.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create Todo Component",
          titleDescription: "Todo.js",
          sections: [
            {
              descriptions: [
                "Inside the Components directory, create a new file named Todo.js.",
                "This file will contain the component responsible for rendering a single todo item.",
                "Start by importing React at the top of the file.",
                "Define a functional component named Todo that takes props such as task, deleteTodo, editTodo, and toggleComplete.",
                "This component will render the task text along with icons for editing and deleting the todo.",
                "Inside the Todo component, write JSX to display the task text wrapped in a <p> tag.",
                "Add icons for editing and deleting using Font Awesome icons.",
                "Implement onClick handlers for the icons to trigger the respective functions passed as props (editTodo and deleteTodo).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create TodoForm Component",
          titleDescription: "TodoForm.js",
          sections: [
            {
              descriptions: [
                "Inside the Components directory, create a new file named TodoForm.js.",
                "This file will contain the component responsible for rendering the form to add new todos.",
                "Start by importing React at the top of the file.",
                "Define a functional component named TodoForm that takes props such as addTodo.",
                "This component will render a form with an input field and a button for adding new todos.",
                "Inside the TodoForm component, write JSX for a <form> element.",
                "Add an <input> field for users to type the task text.",
                "Implement an onChange handler for the input field to update the component state with the entered value.",
                "Implement an onSubmit handler for the form to call the addTodo function passed as a prop with the current value of the input field.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create EditTodoForm Component",
          titleDescription: "EditTodoForm.js",
          sections: [
            {
              descriptions: [
                "Inside the Components directory, create a new file named EditTodoForm.js.",
                "This file will contain the component responsible for rendering the form to edit existing todos.",
                "Start by importing React at the top of the file.",
                "Define a functional component named EditTodoForm that takes props such as editTodo and task.",
                "This component will render a form with an input field pre-filled with the task text for editing.",
                "Inside the EditTodoForm component, write JSX for a <form> element.",
                "Add an <input> field for users to edit the task text, and set its initial value to the current task text passed as a prop.",
                "Implement an onChange handler for the input field to update the component state with the edited value.",
                "Implement an onSubmit handler for the form to call the editTodo function passed as a prop with the updated task text and the todo ID.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create TodoWrapper Component",
          titleDescription: "TodoWrapper.js",
          sections: [
            {
              descriptions: [
                "Inside the Components directory, create a new file named TodoWrapper.js.",
                "This file will contain the main component responsible for managing todos.",
                "Start by importing React, useState, useEffect, useRef, v4 as uuidv4 and other necessary dependencies.",
                "Define a functional component named TodoWrapper.",
                "Inside TodoWrapper, initialize state using the useState hook to manage todos.",
                "Create a useRef to store the previous state of todos for comparison in useEffect.",
                "Implement functions like addTodo, deleteTodo, toggleComplete, editTodo, and editTask to manage todo operations using setTodos.",
                "Inside TodoWrapper, use the useEffect hook to display toast notifications when todos are completed or edited.",
                "Compare the current state of todos with the previous state stored in the ref to determine if a todo was completed or edited.",
                "Display toast notifications using toast.success and toast.info based on the comparison results.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Implement Icons and Styling",

          sections: [
            {
              descriptions: [
                "Install Font Awesome for icons using npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons.",
                "Import required icons in Todo.js.",
                "Implement CSS styles for the Todo application. You can either create a new CSS file or use inline styles within each component.",
                "Or download styles from link provided below.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Integrate Toast Notifications",

          sections: [
            {
              descriptions: [
                "Run npm install react-toastify to install the React Toastify library for displaying toast notifications.",
                "Import ToastContainer from react-toastify in the TodoWrapper component.",
                "Place the <ToastContainer /> component inside the TodoWrapper component to enable toast notifications.",
                "Inside the useEffect hook of TodoWrapper, use toast.success and toast.info to display toast notifications when todos are completed or edited.",
                "Customize the toast messages based on the specific todo operation (completion or editing).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Update App Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "In src directory, open App.js.",
                "Import TodoWrapper component.",
                "Render TodoWrapper inside the App component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Integrate UUID Library",
          titleDescription: "(Optional)",
          sections: [
            {
              descriptions: [
                "Run npm install uuid to install the UUID library for generating unique identifiers.",
                "Open the file containing your TodoApp component ( TodoWrapper.js ).",
                "Import the v4 function from the UUID library at the top of the file.",
                "Replace the logic for generating todo IDs with uuidv4(). ( In 'addTodo' function).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Test the Application",

          sections: [
            {
              descriptions: [
                "Start the development server by running npm start.",
                "Open your web browser and navigate to http://localhost:3000 to see the To-Do application.",
                "Test adding, deleting, completing, and editing todos to ensure everything works as expected.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/dqvxqy?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson21.webp"),
    },
    {
      taskId: "Testimonials",
      taskTitle: "Testimonials",
      introduction:
        " This React project called 'Testimonials' designed to showcase customer feedback. It includes a dynamic testimonial display with navigation buttons for users to cycle through testimonials, enhanced with animated background color for added visual appeal.",

      steps: [
        {
          stepTitle: "Step 1: Import React and Required Dependencies",

          sections: [
            {
              descriptions: [
                "Import React and other necessary dependencies such as useState, useEffect from 'react', and gsap from 'gsap'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create Functional Component",

          sections: [
            {
              descriptions: [
                "Define a functional component named Testimonials.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Initialize State",

          sections: [
            {
              descriptions: [
                "Use the useState hook to create a state variable named currentIndex initialized to 0. This variable will keep track of the index of the currently displayed testimonial.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Define Testimonials Data",

          sections: [
            {
              description: [
                "Define an array named testimonials containing objects. Each object should have two properties: quote for the testimonial text and author for the author's name.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Use useEffect for Animation",

          sections: [
            {
              descriptions: [
                "Utilize the useEffect hook to apply animations using gsap library. Inside the effect, target the .testimonials class and animate its background color with a duration of 4 seconds. Set backgroundColor to #87CEEB. Add the options repeat: -1 to repeat indefinitely, yoyo: true for back and forth animation, and ease: 'power1.inOut' for smooth animation.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create Event Handlers",

          sections: [
            {
              descriptions: [
                "Define two event handler functions: handlePrevClick and handleNextClick.",
                "'handlePrevClick' should decrement the currentIndex by 1 (with wrap-around logic to ensure it doesn't go below 0).",
                "'handleNextClick' should increment the currentIndex by 1 (with wrap-around logic to ensure it loops back to 0 when reaching the end of the testimonials array).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Render Testimonial Content",

          sections: [
            {
              descriptions: [
                "Within the return statement, render the testimonial content.",
                "Display the current testimonial's quote and author.",
                "Include navigation buttons (Prev and Next) to cycle through testimonials.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Implement Navigation",

          sections: [
            {
              descriptions: [
                "Bind the onClick event of the Prev button to the handlePrevClick function and the Next button to the handleNextClick function.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Export Component",

          sections: [
            {
              descriptions: [
                "Export the Testimonials component as the default export.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/zj8n36?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson22.webp"),
    },
    {
      taskId: "Voice-to-Text",
      taskTitle: "Voice to Text",
      introduction:
        "This React application utilizes speech recognition to convert spoken words into text in real-time, enabling users to interact with the interface through voice commands. Additionally, users can conveniently copy the recognized text to their clipboard with the click of a button.",

      steps: [
        {
          stepTitle: "Step 1: Setup React App",

          sections: [
            {
              descriptions: [
                "Start by setting up a new React application using Create React App or any other method you prefer.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Install Dependencies",

          sections: [
            {
              descriptions: [
                "Install the necessary dependencies for your project. You'll need 'react-speech-recognition', 'react-use-clipboard', and 'react'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Import CSS",

          sections: [
            {
              descriptions: [
                "Import the CSS file (App.css in this case) where you define your styles for the application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Functional Component",

          sections: [
            {
              descriptions: [
                "Create a functional component named 'App' to hold your application logic.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: State Management",

          sections: [
            {
              description: [
                "Utilize the 'useState' hook from React to manage state within your component. You'll need state variables for the text to copy and for tracking whether the text has been copied successfully.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Clipboard Functionality",

          sections: [
            {
              descriptions: [
                "Implement clipboard functionality using the useClipboard hook from react-use-clipboard. This hook provides functionality to copy text to the clipboard.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Speech Recognition Hook",

          sections: [
            {
              descriptions: [
                "Utilize the 'useSpeechRecognition' hook from the 'react-speech-recognition' library to enable speech recognition functionality within your React component. This hook provides access to various properties and methods, including 'transcript', which holds the recognized speech in real-time. By accessing this 'transcript' property, you can update your UI dynamically as speech is recognized by the browser. Additionally, the 'browserSupportsSpeechRecognition' property allows you to check whether the user's browser supports speech recognition, ensuring a seamless experience for all users.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Conditional Rendering",

          sections: [
            {
              descriptions: [
                "Check if the browser supports speech recognition using the 'browserSupportsSpeechRecognition' property provided by the 'useSpeechRecognition' hook. If not supported, return 'null' from the component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Rendering UI",

          sections: [
            {
              descriptions: [
                "Render the user interface within the 'App' component. Include elements such as a header, description, a container to display the transcript, and buttons for copying text to clipboard and controlling speech recognition.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Event Handlers",

          sections: [
            {
              descriptions: [
                "Implement event handlers for interacting with the application. These include functions to start and stop listening for speech, and to copy the transcript text to the clipboard.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Button Actions",

          sections: [
            {
              descriptions: [
                "Attach the event handlers to the respective buttons for starting and stopping speech recognition, as well as copying text to clipboard.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Styling",

          sections: [
            {
              descriptions: [
                "Apply styles to your components as desired. You can define styles in the imported CSS file (App.css) to achieve the desired layout and appearance.",
                "Also you can download complete styles from the link provided below.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/9jclqn?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson23.webp"),
    },
    {
      taskId: "Text-to-Voice",
      taskTitle: "Text to Voice",
      introduction:
        "Introducing TextToSpeechApp, a React application that enables users to convert typed text into speech effortlessly. Using the browser's built-in SpeechSynthesis API, users can input text, click a button, and hear their words spoken aloud in real-time, offering a seamless and interactive text-to-speech experience.",

      steps: [
        {
          stepTitle: "Step 1: Setup React App",

          sections: [
            {
              descriptions: [
                "Start by setting up a new React application using Create React App or any other preferred method.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Functional Component",

          sections: [
            {
              descriptions: [
                "Create a functional component named 'TextToSpeechApp' to hold your application logic.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: State Management",

          sections: [
            {
              descriptions: [
                "Utilize the 'useState' hook from React to manage the text inputted by the user.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Text-to-Speech Functionality",

          sections: [
            {
              descriptions: [
                "Implement text-to-speech functionality using the browser's built-in SpeechSynthesis API. This API provides the 'speechSynthesis' object, which you can use to create and control speech synthesis utterances.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Event Handlers",

          sections: [
            {
              descriptions: [
                "Implement event handlers to handle changes in the text input and to trigger the text-to-speech conversion.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Rendering UI",

          sections: [
            {
              descriptions: [
                "Render the user interface within the TextToSpeechApp component. Include an input field where users can type the text they want to be converted to speech, and a button to trigger the text-to-speech conversion.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Styling",

          sections: [
            {
              descriptions: [
                "Apply styles to your components as desired. You can define styles inline or in a separate CSS file to achieve the desired layout and appearance.",
                "Also, the pre-ready styles available in the link below.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/5l526g?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson24.webp"),
    },
    {
      taskId: "Course-Finder",
      taskTitle: "Course Finder",
      introduction:
        "CourseFinder is an intuitive web application designed to simplify the process of discovering and selecting online courses. With powerful filtering options based on category, price range, and search queries, CourseFinder helps users navigate through a diverse range of educational offerings, empowering them to find the perfect learning experience tailored to their interests and needs.",

      steps: [
        {
          stepTitle: "Step 1: Set Up React App",

          sections: [
            {
              descriptions: [
                "Begin by setting up a new React application using create-react-app or any other method you prefer.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",

          sections: [
            {
              descriptions: [
                "Visualize the structure of your application. You will have 10 components and 1 data file: Button, Card, Input, Nav, Products, Recommended, Category, Price, Sidebar, and App.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create Component Files",

          sections: [
            {
              descriptions: [
                "For each component, create a separate file in your project directory.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Implement Button Component",
          titleDescription: "Button.js",
          sections: [
            {
              descriptions: [
                "Create a new file named Button.js in your components directory.",
                "Define a functional component named 'Button'.",
                "Inside the component, accept props like 'onClickHandler', 'value', and 'title'.",
                "Use JSX to return a button element with the class name 'button'.",
                "Add an onClick event handler to the button that calls the 'onClickHandler' function with the 'value' prop as its argument.",
                "Export the 'Button' component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Implement Card Component",
          titleDescription: "Card.js",
          sections: [
            {
              descriptions: [
                "Create a new file named Card.js in your components directory.",
                "Define a functional component named 'Card'.",
                "Accept props like 'img', 'title', 'star', 'reviews', 'prevPrice', and 'newPrice'.",
                "Use JSX to structure the card layout. Include elements like 'img', 'h3', 'span', de'l, etc., to display the product information.",
                "Apply appropriate class names for styling.",
                "Export the 'Card' component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Implement Input Component",
          titleDescription: "Input.js",
          sections: [
            {
              descriptions: [
                "Create a new file named Input.js in your components directory.",
                "Define a functional component named 'Input'.",
                "Accept props like 'handleChange', 'value', 'title' and 'name'.",
                "Use JSX to return a label containing an input (radio) element and a span element for custom styling.",
                "Apply appropriate event handlers to the input element.",
                "Export the 'Input' component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Implement Nav Component ",
          titleDescription: "Nav.js",
          sections: [
            {
              descriptions: [
                "Create a new file named Nav.js in your components directory.",
                "Define a functional component named 'Nav'.",
                "Accept props like 'handleInputChange' and 'query'.",
                "Use JSX to structure the navigation bar, including an input field for search and icons for actions like adding to cart or user profile.",
                "Apply appropriate event handlers to the input field.",
                "Export the 'Nav' component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Implement Products Component",
          titleDescription: "Products.js",
          sections: [
            {
              descriptions: [
                "Create a new file named Products.js in your components directory.",
                "Define a functional component named 'Products'.",
                "Accept props like 'result', which is an array of product cards to be displayed.",
                "Use JSX to map over the 'result' array and render each product card.",
                "Export the 'Products' component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Implement Recommended Component",
          titleDescription: "Recommended.js",
          sections: [
            {
              descriptions: [
                "Create a new file named Recommended.js in your components directory.",
                "Define a functional component named 'Recommended'.",
                "Accept props like 'handleClick'.",
                "Use JSX to display a list of recommended categories as buttons.",
                "Apply appropriate event handlers to the buttons to trigger the 'handleClick' function with the selected category as an argument.",
                "Export the 'Recommended' component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Implement Category Component",
          titleDescription: "Category.js",
          sections: [
            {
              descriptions: [
                "Create a new file named Category.js in your components directory.",
                "Define a functional component named 'Category'.",
                "Accept props like 'handleChange'.",
                "Use JSX to display a list of category options as radio buttons.",
                "Apply appropriate event handlers to the radio buttons to trigger the 'handleChange' function with the selected category as an argument.",
                "Export the 'Category' component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Implement Price Component",
          titleDescription: "Price.js",
          sections: [
            {
              descriptions: [
                "Create a new file named Price.js in your components directory.",
                "Define a functional component named 'Price'.",
                "Accept props like 'handleChange'.",
                "Use JSX to display a list of price range options as radio buttons.",
                "Apply appropriate event handlers to the radio buttons to trigger the 'handleChange' function with the selected price range as an argument.",
                "Export the 'Price' component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Implement Sidebar Component ",
          titleDescription: "Sidebar.js",
          sections: [
            {
              descriptions: [
                "Create a new file named Sidebar.js in your components directory.",
                "Define a functional component named 'Sidebar'.",
                "Accept props like 'handleChange' and 'handlePriceChange'.",
                "Use JSX to structure the sidebar, including the 'Category' and 'Price' components.",
                "Pass down event handlers to the 'Category' and 'Price' components as props.",
                "Export the 'Sidebar' component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 13: Implement App Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Initialize state variables using the 'useState' hook for 'selectedCategory', 'query', and 'selectedPriceRange' ( These states will manage the selected category, search query, and selected price range, respectively. ).",
                "Implement event handlers: 'handleInputChange': Updates the 'query' state based on user input in the search bar. 'handleChange': Updates the 'selectedCategory' state when a category is selected. It also clears the 'selectedPriceRange'. 'handlePriceChange': Updates the 'selectedPriceRange' state when a price range is selected. It also clears the 'selectedCategory' and 'query'.",
                "Implement the filteredData function: It takes the 'products' array, 'selectedCategory', 'query', and 'selectedPriceRange' as parameters. Filters the products based on the selected category, search query, and price range. Returns an array of JSX elements (product cards) based on the filtered products. ( If you find it too difficult to implement, refer to the additional step below. ) ",
                "Render the 'Sidebar', 'Navigation', 'Recommended', and 'Products' components: Pass down necessary props to each component. 'Sidebar': Pass 'handleChange' and 'handlePriceChange' as props to handle category and price range changes. 'Navigation': Pass 'query' and 'handleInputChange' as props to manage search functionality. 'Recommended': Pass 'handleRecommendedClick' to handle clicks on recommended categories. 'Products': Pass 'result', which is the filtered product data, as a prop to display the products.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 14: Data Management",
          titleDescription: "data.js",
          sections: [
            {
              descriptions: [
                "Create a JavaScript file named data.js to store your product data.",
                "Define an array containing objects, where each object represents a product with properties like 'img', 'title', 'star', 'reviews', 'prevPrice', 'newPrice', etc.",
                "Import this data into your App.js file.",
                "Implement a function to filter this data based on user interactions (selected category, query, selected price range).",
                "Pass the filtered data to the 'Products' component for rendering.",
              ],
            },
          ],
        },
        {
          stepTitle: "Extra Step: 'filteredData' function",
          titleDescription: "In your App.js file",
          sections: [
            {
              descriptions: [
                "Create a function named 'filteredData'.",
                "Pass four parameters: 'products', 'selectedCategory', 'query', and 'selectedPriceRange'.",
                "Initialize a variable 'filteredProducts' with the value of the 'products' parameter ( This ensures that initially, all products are included in the filtered list. )",
                "Check if the 'query' parameter is not empty: Use the 'filter' method on 'filteredProducts'. Inside the filter function, check if the lowercase title of each product includes the lowercase query string ( This filters out products whose titles do not match the search query. ). Assign the filtered result back to 'filteredProducts'.",
                "Check if the 'selectedCategory' parameter is not null: Use the 'filter' method on 'filteredProducts'. Inside the filter function, check if the category of each product matches the 'selectedCategory' ( This filters out products that do not belong to the selected category. ). Assign the filtered result back to 'filteredProducts'. ",
                "Check if the 'selectedPriceRange' parameter is not null: Use the 'filter' method on 'filteredProducts'. Inside the filter function, destructure the 'newPrice' of each product. Parse the price range string into minimum and maximum values. Compare the price of each product with the minimum and maximum values. Filter out products whose prices fall outside the selected range. Assign the filtered result back to 'filteredProducts'.",
                "After applying all filters, map the 'filteredProducts' array to JSX elements representing product cards.",
                "For each product, create a 'Card' component with appropriate props (img, title, star, reviews, prevPrice, newPrice).",
                "Use a unique 'key' for each 'Card' component to avoid warnings.",
                "Return the array of JSX elements representing filtered product cards.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/4fvyjs?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson25.webp"),
    },
    {
      taskId: "Course-Shop",
      taskTitle: "Course Shop",
      introduction:
        "In this guide, we'll walk through the process of creating essential components for a React-based e-commerce application: a context for managing the shopping cart state, individual cart items, the overall cart view, and individual product displays. These components will work together to provide a seamless shopping experience, allowing users to add, update, and manage items in their cart.",

      steps: [
        {
          stepTitle: "Step 1: Create a React Project",

          sections: [
            {
              descriptions: [
                "Open your terminal.",
                "Run npx create-react-app course-shop.",
                "Navigate to the project directory: cd course-shop.",
                "Run npm install react-router-dom phosphor-react.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create Project Structure",

          sections: [
            {
              descriptions: [
                "Inside src, create the following folders: 'components': For reusable components like the Navbar. 'pages': For main pages like Shop, Contact, and Cart. 'context': For context-related files. 'assets/products': For product images.",
                "Create App.css in the src folder for global styles.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Setup Context for State Management",
          titleDescription: "shop-context.js",
          sections: [
            {
              descriptions: [
                "Navigate to 'src/context' and create a file named shop-context.js.",
                "Import 'createContext' and 'useState' from React.",
                "Define and export ShopContext using createContext(null).",
                "Define a function ShopContextProvider that takes 'props' as an argument.",
                "Initialize state for 'cartItems' using useState. Example: const [cartItems, setCartItems] = useState(getDefaultCart());",
                "Define helper functions: 'getDefaultCart()': Initialize an empty cart. 'addToCart(itemId)': Increment the quantity of an item in the cart. 'removeFromCart(itemId)': Decrement the quantity of an item in the cart. 'updateCartItemCount(newAmount, itemId)': Update the quantity of an item to a specific value. 'getTotalCartAmount()': Calculate the total price of items in the cart. 'checkout()': Reset the cart to its default state.",
                "Provide these functions and state as context values.",
                "Wrap 'props.children' with 'ShopContext.Provider' and pass the context values.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create CartItem Component",
          titleDescription: "CartItem.js",
          sections: [
            {
              descriptions: [
                "Navigate to 'src/pages/cart' and create a file named CartItem.js.",
                "Import React, useContext from React, and ShopContext.",
                "Create a functional component 'CartItem' that takes 'props' as an argument.",
                "Destructure 'id', 'productName', 'price', and 'productImage' from 'props.data'.",
                "Use 'useContext(ShopContext)' to access 'cartItems', 'addToCart', 'removeFromCart', and 'updateCartItemCount'.",
                "Return JSX that displays: Product image. Product name and price. Quantity controls (buttons to increment/decrement and an input to set quantity).",
                "Use context functions to handle button clicks and input changes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create Cart Component",
          titleDescription: "Cart.js",
          sections: [
            {
              descriptions: [
                "Navigate to 'src/pages/cart' and create a file named Cart.js.",
                "Import React, useContext from React, useNavigate from react-router-dom, ShopContext, PRODUCTS, and CartItem.",
                "Create a functional component Cart.",
                "Use 'useContext(ShopContext)' to access 'cartItems', 'getTotalCartAmount', and 'checkout'.",
                "Use 'useNavigate' to handle navigation.",
                "Calculate 'totalAmount' using 'getTotalCartAmount()'.",
                "Return JSX that displays: A heading 'Your Cart Items'. A list of 'CartItem' components for each product in the cart. A subtotal and buttons for 'Continue Shopping' and 'Checkout'. If 'totalAmount' is zero, display a message that the cart is empty.",
                "Use context functions to handle checkout and navigation.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create Product Component",
          titleDescription: "Product.js",
          sections: [
            {
              descriptions: [
                "Navigate to 'src/pages/shop' and create a file named Product.js.",
                "Import React, useContext from React, and ShopContext.",
                "Create a functional component Product that takes 'props' as an argument.",
                "Destructure 'id', 'productName', 'price', and 'productImage' from 'props.data'.",
                "Use 'useContext(ShopContext)' to access 'addToCart' and 'cartItems'.",
                "Return JSX that displays: Product image. Product name and price. An 'Add to Cart' button that also shows the number of items in the cart.",
                "Use context functions to handle button clicks.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Define Products Data",
          titleDescription: "Products.js",
          sections: [
            {
              descriptions: [
                "Inside src, create a file named products.js.",
                "Export an array of product objects with properties: 'id', 'courseName', 'price', and 'productImage'.",
                "Save product images in 'src/assets/products' with appropriate names (e.g., 1.webp, 2.webp).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Create Navbar Component",
          titleDescription: "Navbar.js",
          sections: [
            {
              descriptions: [
                "Inside 'src/components', create a file named Navbar.js.",
                "Import Link from react-router-dom and ShoppingCart from phosphor-react.",
                "Implement a functional component to display navigation links and a shopping cart icon.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Create Shop Component",
          titleDescription: "Shop.js",
          sections: [
            {
              descriptions: [
                "Inside src/pages/shop, create a file named Shop.js.",
                "Import PRODUCTS and Product component.",
                "Implement a functional component to map over products and render 'Product' components.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Create Contact Component",
          titleDescription: "Contact.js",
          sections: [
            {
              descriptions: [
                "Inside 'src/pages', create a file named Contact.js.",
                "Implement a functional component with contact information or a form.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Modify App.js",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Import BrowserRouter, Routes, and Route from react-router-dom.",
                "Import Navbar, Shop, Contact, and Cart components.",
                "Wrap the app in ShopContextProvider and Router.",
                "Define routes for / (Shop), /contact (Contact), and /cart (Cart).",
                "Define routes inside <Routes>: <Route path='/' element={<Shop />} />, <Route path='/contact' element={<Contact />} />, and <Route path='/cart 'element={<Cart />} />.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/6k7zvw?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson26.webp"),
    },
    {
      taskId: "MATERIALIZECSS-Portfolio",
      taskTitle: "MATERIALIZECSS Portfolio",
      introduction:
        "This React project utilizes Materialize CSS to create a sleek and responsive web application featuring a dynamic navigation bar, captivating parallax sections, informative content sections (including About, Projects, and Contact), and a polished footer. With its modern design and intuitive user interface, it offers a seamless browsing experience for showcasing personal or professional portfolios.",

      steps: [
        {
          stepTitle: "Step 1: Create a New React Project",

          sections: [
            {
              descriptions: [
                "Open your terminal and create a new React project.",
                "Navigate to the project directory.",
                "Install Materialize CSS and Material Icons. ( npm install materialize-css material-icons )",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Import Materialize CSS and Material Icons",

          sections: [
            {
              descriptions: [
                "At the top of the file, import the Materialize CSS and Material Icons. ( import 'materialize-css/dist/css/materialize.min.css'; import 'material-icons/iconfont/material-icons.css'; ).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Initialize Materialize Components in App.js",

          sections: [
            {
              descriptions: [
                "Import Materialize CSS ( import M from 'materialize-css'; )",
                "Use React.useEffect to initialize Materialize components when the component mounts. ( React.useEffect(() => { M.Parallax.init(document.querySelectorAll('.parallax')); M.Sidenav.init(document.querySelectorAll('.sidenav'));}, []); )",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create the Navigation Bar",

          sections: [
            {
              descriptions: [
                "In the materializecss.com website, type 'Navbar' into the search input and then copy the code.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create the Parallax Section",

          sections: [
            {
              descriptions: [
                "In the materializecss.com website, type 'Parallax' into the search input and then copy the code. ( You can add attribute width='100%' ).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create the Content Sections",

          sections: [
            {
              descriptions: [
                "In the materializecss.com website, type 'Grid' into the search input and then copy the code. ( You can add <h1>, <p> or any other element you want ).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Create another the Parallax Section",

          sections: [
            {
              descriptions: [
                "In the materializecss.com website, type 'Parallax' into the search input and then copy the code.",
                "Inside your parallax, add a grid (with <h1>, <button> or any other element you prefer).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Add Card Section",

          sections: [
            {
              descriptions: [
                "In the materializecss.com website, type 'Card' into the search input and then copy the code. ( In my case I used the 'Card Reveal ).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Add Contact Section",

          sections: [
            {
              descriptions: [
                "In the materializecss.com website, type 'Text-inputs' into the search input and then copy the code.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Create the Footer",

          sections: [
            {
              descriptions: [
                "In the materializecss.com website, type 'Text-inputs' into the search input and then copy the code.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Create the Footer",

          sections: [
            {
              descriptions: [
                "In the materializecss.com website, type 'Footer' into the search input and then copy the code.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Create a 'handleNavClick' function",
          titleDescription: "Optional",
          sections: [
            {
              descriptions: [
                "Start by creating a function named handleNavClick that takes two parameters: event and section.",
                "Within the function, use event.preventDefault() to prevent the default behavior of the click event.",
                "Use 'document.getElementById(section)' to get the DOM element corresponding to the section ID passed as an argument.",
                "Verify if the target element exists. If it does not exist, it means there's no section with the provided ID, so there's no need to scroll.",
                "Smoothly scroll the window to the top position of the target element using the 'smooth' behavior to create a smooth scrolling effect.",
                "If the target element exists, use window.scrollTo() to scroll to that element. Set the 'top' property to 'target.offsetTop' to scroll to the top of the target element. Use behavior: 'smooth' to enable smooth scrolling.",
                "Locate the navigation buttons in your JSX code. These buttons likely have 'onClick' handlers that call functions like 'handleNavClick'. Ensure that each button's 'onClick' handler passes the appropriate parameters (event and section name) to the 'handleNavClick' function. ( Example: onClick={(e) => handleNavClick(e, 'projects')} ).",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/wp9hkw?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson27.webp"),
    },
    {
      taskId: "MaterializeCSS-Web-Toolkit",
      taskTitle: "MaterializeCSS Web Toolkit",
      introduction:
        "This project employs React and Materialize CSS to craft a user-friendly web interface. It offers a responsive navbar, collapsible sidebar, dynamic content sections with tabs, and a customizable footer. It's designed to empower developers in constructing versatile web applications with contemporary styling and interactive elements.",

      steps: [
        {
          stepTitle: "Step 1: Setup React Project",
          sections: [
            {
              descriptions: [
                "Initialize a new React project using a tool like Create React App: npx create-react-app my-dashboard-app.",
                "Navigate into your project directory: cd my-dashboard-app.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Install Materialize CSS",
          sections: [
            {
              descriptions: [
                "Use npm to install Materialize CSS: npm install materialize-css.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Import Materialize CSS",
          sections: [
            {
              descriptions: [
                "In your Dashboard.js file (or any other relevant component), import Materialize CSS: import 'materialize-css/dist/css/materialize.min.css';.",
                "Import M from 'materialize-css'",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create a Component",

          sections: [
            {
              descriptions: [
                "Create a new file named Dashboard.js ( or any other you would like ) in your src folder.",
                "Define a functional component named 'Dashboard' in Dashboard.js.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: UseEffect for Collapsible Initialization",
          sections: [
            {
              descriptions: [
                "Inside the 'Dashboard' component, import the 'useEffect' hook: import React, { useEffect } from 'react';.",
                "Use the useEffect hook to initialize collapsible elements when the component mounts. ( The code is provided in Materializecss.com website ).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Render Navbar",

          sections: [
            {
              descriptions: [
                "On the 'materializecss' website, enter 'Navbar' into the search input, then copy the code of your choice.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Render Dashboard Sidebar",
          sections: [
            {
              descriptions: [
                "Create a <div> element with the class 'row' to contain the dashboard sidebar.",
                "Inside this <div>, create another <div> with the class 'col s3 no-padding' to define the width of the sidebar. This class sets the width to 25% of the screen width for small-sized screens.",
                "On the 'materializecss' website, enter 'Collapsible' into the search input, then copy the code of your choice.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Render Main Content",
          sections: [
            {
              descriptions: [
                "Create a <div> element with the class col s9 to define the width of the main content area. This class sets the width to 75% of the screen width for small-sized screens.",
                "Within this <div>, you can include different sections or tabs to display the main content.",
                "Populate the main content sections with relevant content, such as cards, images, text, or other components, based on your application requirements.",
                "Fill the main content sections with relevant content from the 'materializecss' website, such as cards, images, text, or other components, according to your application's needs.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Render Footer",
          sections: [
            {
              descriptions: [
                "On the 'materializecss' website, enter 'Footer' into the search input, then copy the code of your choice.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/8y8mkt?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson28.webp"),
    },
    {
      taskId: "TradeHub-React-Trading-Dashboard",
      taskTitle: "TradeHub: React Trading Dashboard",
      introduction:
        "Our React trading dashboard application offers users a comprehensive platform for managing their investments, executing trades, and monitoring market data. With intuitive navigation, real-time price updates, and personalized user profiles, traders can make informed decisions and track their portfolios efficiently.",

      steps: [
        {
          stepTitle: "Step 1: Project Setup",
          sections: [
            {
              descriptions: [
                "Set up a new React project using Create React App or your preferred method.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",

          sections: [
            {
              descriptions: [
                "Plan out the component structure based on the provided designs. Identify main components like Dashboard, Support, Transaction, etc.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Dashboard Layout",

          sections: [
            {
              descriptions: [
                "Create a reusable layout component (DashboardLayout) that includes a top navigation bar and a side navigation bar (Sidenav). Implement responsive design for different screen sizes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Top Navigation",

          sections: [
            {
              descriptions: [
                "Build the top navigation bar (TopNav) with features like a title/logo, user profile menu, and responsive menu toggle button for small screens.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Side Navigation",

          sections: [
            {
              descriptions: [
                "Develop the side navigation bar (Sidenav) with links to different sections of the dashboard. Ensure it's responsive and collapsible on smaller screens.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Dashboard Page",

          sections: [
            {
              descriptions: [
                "Create the main dashboard page (Dashboard) displaying portfolio information, price sections, recent transactions, and informational cards. Utilize reusable components like PortfolioSection, PriceSection, Transactions, and InfoCard.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Transaction Page",

          sections: [
            {
              descriptions: [
                "Design the transaction page (TransactionPage) with tabs for different transaction types (All, Deposit, Withdraw, Trade). Implement a transaction table (TransactionTable) component to display transaction data.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Support Page",

          sections: [
            {
              descriptions: [
                "Develop the support page (Support) with contact options like email and live chat. Utilize components like SupportCard and ContactCard to structure the page.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Styling",

          sections: [
            {
              descriptions: [
                "Apply CSS styles using a CSS framework like Chakra UI or styled-components to achieve the desired look and feel for each component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Routing",
          sections: [
            {
              descriptions: [
                " Set up routing using React Router to navigate between different pages (Dashboard, Transaction, Support) and handle URL changes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Install Dependencies",

          sections: [
            {
              descriptions: [
                "You'll need to install and import several dependencies and libraries:",
                "'React and ReactDom'. Installation: npm install react react-dom",
                "'React Router'. Installation: npm install react-router-dom",
                "'Chakra UI. Installation: npm install @chakra-ui/react @emotion/react @emotion/styled'",
                "'Icons'. Installation: npm install react-icons",
                "'Chakra-UI Icons'. Installation: npm install @chakra-ui/icons",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Create a TopNav Component",
          titleDescription: "TopNav.js",
          sections: [
            {
              descriptions: [
                "Start by creating a React component called TopNav. This component should accept two props: 'title' and 'onOpen'.",
                "In the return statement, select any element/s of your choice from the chakra-ui.com website by entering 'Box' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for: HStack, Heading, Icon, and Menu. Also, import those components from chakra-ui/react at the beginning of the file.",
                "Inside the <Heading> component, use curly braces to insert the 'title' argument.",
                "Utilize the 'onClick' event handler on the <Icon> component. Assign the 'onOpen' function to the 'onClick' attribute.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 13: Create a Sidenav Component",
          titleDescription: "Sidenav.js",
          sections: [
            {
              descriptions: [
                "Start by creating a React component called Sidenav. ",
                "Import routing components (Link, useLocation) from react-router-dom.",
                "Utilize the useLocation hook from react-router-dom to access the current location.",
                "Define a function isActiveLink(link) to check if the provided link matches the current location pathname.",
                "Create an array navLinks containing objects with properties for icon, text, and link for each navigation item.",
                "In the return statement, select any element/s of your choice from the chakra-ui.com website by entering 'Box' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for: HStack, Heading, Icon, Stack, Text. Also, import those components from chakra-ui/react at the beginning of the file.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 14: Create a SideDrawer Component",
          titleDescription: "SideDrawer.js",
          sections: [
            {
              descriptions: [
                "Begin by declaring a function component named SideDrawer. This component takes two arguments, isOpen and onClose.",
                "Import 'Sidenav' Component and use it in <DrawerBody>",
                "Use the isOpen prop on the <Drawer> component.",
                "Assign the onClose function to the onClose prop of the <Drawer> component. ",
                "In the return statement, select any element/s of your choice from the chakra-ui.com website by entering 'Drawer' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for: DrawerBody, DrawerOverlay, DrawerContent and DrawerCloseButton.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 15: Create a DashboardLayout Component",
          titleDescription: "DashboardLayout.js",
          sections: [
            {
              descriptions: [
                "Import necessary components: Sidenav, TopNav and SideDrawer",
                "Import necessary hook 'useDisclosure' from  '@chakra-ui/react'",
                "Declare a functional component named DashboardLayout. It accepts two props: 'title' and 'children'.",
                "Utilize the 'useDisclosure' hook from Chakra UI to manage the state of the side drawer. Destructure the state variables 'isOpen', 'onOpen', and 'onClose' from the return value of useDisclosure.",
                "In the return statement, select any element/s of your choice from the chakra-ui.com website by entering 'Box' into the search input, and then proceed to copy its code.",
                "Use the 'Flex' component from Chakra UI to create a flexible layout.",
                "Repeat the step outlined previously, but this time for: Container and Flex. Also, import those components from chakra-ui/react at the beginning of the file.",
                "Include the SideDrawer component, passing isOpen and onClose props to manage its state.",
                "Render the TopNav component, passing title and onOpen props.",
                "Render the children prop within the Container component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 16: Create a PortfolioSection Component",
          titleDescription: "PortfolioSection.js",
          sections: [
            {
              descriptions: [
                "Declare a functional component named PortfolioSection.",
                "In the return statement, select any element/s of your choice from the chakra-ui.com website by entering 'HStack' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for: Button, Icon, Stack, Tag and Text. Also, import those components from chakra-ui/react at the beginning of the file.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 17: Create a CustomCard Component",
          titleDescription: "CustomCard.js",
          sections: [
            {
              descriptions: [
                "Import the 'chakra' function from '@chakra-ui/system'.",
                "Create a custom card component using the chakra function.",
                "The chakra function takes two arguments: the HTML element type ('div' in this case) and the object which includes the 'baseStyle' property to define the base styles for the custom card. In this case, the card has a white background (bg: 'white'), rounded corners (borderRadius: 'xl'), and padding (p: '6').",
                "Understanding 'chakra': The chakra function is a utility provided by Chakra UI for creating custom styled components. It enhances HTML elements with additional functionality and styling capabilities, making them compatible with Chakra UI's design system. Once defined, the CustomCard component can be used like any other React component. It can accept additional props and render content inside it while inheriting the base styles defined in the chakra function.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 18: Create a PriceSection Component",
          titleDescription: "PriceSection.js",
          sections: [
            {
              descriptions: [
                "Import necessary component: CustomCard.",
                "Create a functional component named PriceSection.",
                "Declare variables to store 'timestamps' for different timeframes.",
                "In the return statement use the CustomCard component to wrap the content.",
                "Utilize Flex to create a flexible layout with 'space-between' alignment.",
                "Define any element/s of your choice from the chakra-ui.com website by entering 'Flex' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for:  Button, Icon, Image, Stack, Tabs and Tab. Also, import those components from chakra-ui/react at the beginning of the file.",
                "Inside each 'TabPanel', map through the corresponding array of 'timestamps' and render them. Use the Text component from Chakra UI to display each 'timestamp'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 19: Create a Transactions Component",
          titleDescription: "Transactions.js",
          sections: [
            {
              descriptions: [
                "Import necessary component: CustomCard.",
                "Declare an array transactions containing objects representing transaction data.",
                "Each transaction object contains properties like id, icon, text, amount, and timestamp.",
                "Define any element/s of your choice from the chakra-ui.com website by entering 'Stack' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for: Button, Divider, Image, Stack, Grid, Icon, and Text. Also, import those components from chakra-ui/react at the beginning of the file.",
                "Iterate over the 'transactions' array using the map function.",
                "Render each transaction item as a 'Flex' container with transaction details.",
                "Use 'Divider' component to separate transaction items.",
                "Utilize 'Fragment' to group multiple elements without adding extra nodes to the DOM. Set the 'key' prop to a unique identifier associated with each transaction, such as 'transaction.id'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 20: Create a InfoCard Component",
          titleDescription: "InfoCard.js",
          sections: [
            {
              descriptions: [
                "Import necessary component: CustomCard.",
                "Create a functional component named InfoCard.",
                "Define props for 'imgUrl', 'text', 'tagText', and 'inverted'.",
                "In return statement use the 'CustomCard' component to wrap the content.",
                "Define any element/s of your choice from the chakra-ui.com website by entering 'Tag' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for: Text. Also, import those components from chakra-ui/react at the beginning of the file.",
                "Ensure that the InfoCard component receives the necessary props (imgUrl, text, tagText, inverted) when used.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 21: Create a ContactCard Component",
          titleDescription: "ContactCard.js",
          sections: [
            {
              descriptions: [
                "Create a functional component named SupportCard.",
                "Define any element/s of your choice from the chakra-ui.com website by entering 'Card' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for: Checkbox, FormControl, FormLabel, HStack, Input, Box, Stack, Text, Textarea, and Button. Also, import those components from chakra-ui/react at the beginning of the file.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 22: Create a SupportCard Component",
          titleDescription: "SupportCard.js",
          sections: [
            {
              descriptions: [
                "Create a functional component named SupportCard.",
                "Define props for 'leftComponent', 'icon', 'title', and 'text'.",
                "Define any element/s of your choice from the chakra-ui.com website by entering 'Flex' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for: Box, Flex, Icon, Stack, and Text. Also, import those components from chakra-ui/react at the beginning of the file.",
                "Ensure that the 'chakra' components receives the necessary props (leftComponent, icon, title, text) when used.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 23: Create a SupportCard Component",
          titleDescription: "Support.js",
          sections: [
            {
              descriptions: [
                "Import necessary components: DashboardLayout, ContactCard, SupportCard, InfoCard",
                "Create a functional component named Support.",
                "In your return statement use DashboardLayout component as the layout for the support page.",
                "Define element from the chakra-ui.com website by entering 'Stack' into the search input, and then proceed to copy its code. Do not forget to import it at the beginming of the file",
                "Include SupportCard inside a Stack component with appropriate spacing.",
                "Pass props such as 'icon', 'leftComponent', 'title', and 'text' to each 'SupportCard'",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 24: Create a TransactionTable Component",
          titleDescription: "TransactionTable.js",
          sections: [
            {
              descriptions: [
                "Create a functional component named TransactionTable.",
                "Define an array tableData containing transaction details. Each transaction object should have properties like 'id', 'date', 'time', 'type', 'amount', and 'status'.",
                "Define any element/s of your choice from the chakra-ui.com website by entering 'Table Container' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for: Table, Thead, Tbody, Tr, Th, Td, Stack, Text, and Tag. Also, import those components from chakra-ui/react at the beginning of the file.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 25: Create a TransactionPage Component",
          titleDescription: "Transaction.js",
          sections: [
            {
              descriptions: [
                "Import necessary components: DashboardLayout, TransactionTable",
                "Create a functional component named TransactionPage.",
                "Define an array tabs containing tab 'names' and their corresponding 'counts'",
                "In return statement use DashboardLayout component to wrap the page content.",
                "Define any element/s of your choice from the chakra-ui.com website by entering 'Card' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for: Button, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, and Tag. Also, import those components from chakra-ui/react at the beginning of the file.",
                "Inside the HStack, utilize the tabs.map function to dynamically generate tabs.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 26: Create a Dashboard Component",
          titleDescription: "Dashboard.js",
          sections: [
            {
              descriptions: [
                "Import components required for the dashboard layout: DashboardLayout, PortfolioSection, PriceSection, Transactions, InfoCard.",
                "Define a functional component named Dashboard.",
                "Define any element/s of your choice from the chakra-ui.com website by entering 'Grid' into the search input, and then proceed to copy its code.",
                "Repeat the step outlined previously, but this time for: GridItem. Also, import this component from chakra-ui/react at the beginning of the file.",
                "Render the respective components within each GridItem.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 27: Create/Change a App.js Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Import the Dashboard, Support, and TransactionPage components from their respective files.",
                "Import the necessary routing components from React Router DOM for routing configuration.",
                "Use createBrowserRouter to define the routing configuration.",
                "Use createBrowserRouter to define the routing configuration.",
                "Define a functional component named App.",
                "Wrap the RouterProvider around the router with the specified routing configuration.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 28: Modify index.js file",
          titleDescription: "index.js",
          sections: [
            {
              descriptions: [
                "Import the ChakraProvider component from @chakra-ui/react.",
                "Import the Ubuntu font styles using @fontsource/ubuntu.",
                "Import the custom theme object from the theme.js file. ",
                "Wrap the root component (App) with the ChakraProvider component.",
                "Pass the custom theme object to the theme prop of the ChakraProvider.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/dtwvpq?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson29.webp"),
    },
    {
      taskId: "Cube-Image-Gallery",
      taskTitle: "Cube Image Gallery",
      introduction:
        "The Cube Image Gallery project utilizes advanced CSS transformations such as transform and rotate to create an interactive 3D cube that displays different images on its faces. These techniques allow for dynamic positioning and orientation of elements, enhancing user engagement and providing a visually compelling experience on the web.",

      steps: [
        {
          stepTitle: "Step 1: Environment Setup",
          sections: [
            {
              descriptions: [
                "Ensure you have Node.js installed on your computer. Node.js is required for using 'npm' (Node Package Manager) to manage dependencies and run scripts.",
                "Use 'npx create-react-app cube-gallery-app' to set up a new React project named 'cube-gallery-app'. This command creates a new directory with the necessary files and folder structure for a React application.",
                "Use cd 'cube-gallery-app' to change into the newly created project directory.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Planning Your Components",

          sections: [
            {
              descriptions: [
                "Determine the components needed for the Cube Image Gallery",
                "'App': Main component rendering the 'CubeGallery'.",
                "'CubeGallery': Component containing the cube and image thumbnails.",
                "Sketch out how these components will be structured and interact with each other. Consider the structure of the 'CubeGallery' component, which will manage the cube's state and display.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create CubeGallery Component",
          titleDescription: "CubeGallery.js",
          sections: [
            {
              descriptions: [
                "Inside the src directory of your project, create a new file named CubeGallery.js to define the CubeGallery component.",
                "Use 'useState' hook to manage the state within CubeGallery. This state will keep track of which image (or face of the cube) is currently displayed.",
                "Implement 'handleImageClick' function",
                "Use an argument 'targetClass' which represents the class of the thumbnail image clicked.",
                "Check if 'targetClass' is different from the current cubeImageClass state.",
                "Update the 'cubeImageClass' state to reflect the clicked image, triggering a re-render to update the cube's displayed face.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Structuring Your Gallery",
          titleDescription: "In you return statement:",
          sections: [
            {
              descriptions: [
                "A main container (cube-gallery-container) wrapping all elements.",
                "A cube container (cube-container) for positioning and perspective of the cube.",
                "Inside 'cube-container', a 'cube' element with dynamic classes based on cubeImageClass, rotating to display the selected image face.",
                "Below the cube, include a section (image-buttons) containing thumbnail images (input[type='image']). These thumbnails will trigger the 'handleImageClick' function when clicked.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Styling Your Gallery",
          titleDescription: "index.css",
          sections: [
            {
              descriptions: [
                "Define styles for cube-gallery-container, cube-container, cube, and image-buttons.",
                "Apply rotate for 3D Effects",
                "In your Cube Image Gallery CSS, each image (image-1, image-2, etc.) is positioned on a different face of the cube.",
                "translateZ(15rem): Positions the image on a face of the cube, pushing it back along the z-axis (15rem units away).",
                "rotateX(angle), rotateY(angle), rotateZ(angle): Rotates the cube to display different faces corresponding to each image. This rotation creates a dynamic 3D effect as users interact with the gallery.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Integrating Components",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                " In App.js, import the CubeGallery component to render it within the main App component.",
                "Utilize the CubeGallery component within the App component to display your Cube Image Gallery.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/8fv4kq?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson30.webp"),
    },
    {
      taskId: "Analog-Clock",
      taskTitle: "ReactAnalogClock",
      introduction:
        " ReactAnalogClock is a React application that simulates an analog clock. It dynamically updates in real-time, displaying the current hour, minute, and second hands based on the system time. It's designed to be visually appealing and educational, showcasing how to manage time updates and animations in a React environment.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your Project",
          sections: [
            {
              descriptions: [
                "Open your terminal or command prompt.",
                "Navigate to the directory where you want to create your project.",
                "Run 'npx create-react-app analog-clock' to create a new React project called 'analog-clock'.",
                "Use the command 'cd analog-clock' to enter the project directory.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create Component Files",
          sections: [
            {
              descriptions: [
                "Inside the 'src' directory, create a new file named AnalogClock.js.",
                "This file will contain the logic and structure for the analog clock.",
                "Ensure that App.js exists in the src directory. This file is created by default in a new React project and will serve as the main entry point for your application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Write the AnalogClock Component Logic",
          titleDescription: "AnalogClock.js",
          sections: [
            {
              descriptions: [
                "Open AnalogClock.js file.",
                "Import the useState and useEffect hooks from React.",
                "Inside the AnalogClock component function, create a state variable using useState.",
                "Initialize the state with properties for 'seconds', 'minutes', and 'hours'.",
                "Inside the AnalogClock component function, add a useEffect hook.",
                "Ensure the useEffect runs only once by passing an empty dependency array.",
                "Inside the useEffect hook, define a function to get the current time.",
                "Use JavaScript's Date object to get the current seconds, minutes, and hours.",
                "Convert the current seconds to degrees (0-360) by multiplying by 6.",
                "Convert the current minutes to degrees (0-360), accounting for passing seconds.",
                "Convert the current hours to degrees (0-360), accounting for passing minutes and seconds.",
                "Use the state updating function from useState to set the time in degrees.",
                "Inside the useEffect hook, set up an interval that runs every second.",
                "In the interval callback, update the state to increment the seconds, minutes, and hours.",
                "Increment the seconds by 6 degrees every second.",
                "Increment the minutes by 1/10 of a degree every second.",
                "Increment the hours by 1/120 of a degree every second.",
                "Ensure the interval is cleared when the component is unmounted by returning a cleanup function from the useEffect hook.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Render the Clock Structure",
          sections: [
            {
              descriptions: [
                "In AnalogClock.js, return a JSX structure with a div for the clock container.",
                "Inside the clock container, add divs for the numbers 12, 3, 6, and 9.",
                "Add divs for the hour, minute, and second hands, and use inline styles to rotate them based on the time state.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Implement Styling in index.css",
          sections: [
            {
              descriptions: [
                "Add styles for the clock container to center it on the page and set its size and background.",
                "Add styles for the numbers to position them correctly around the clock.",
                "Add styles for the hour, minute, and second hands, including their size, position, and rotation origin.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Modify the App Component",
          sections: [
            {
              descriptions: [
                "In App.js, import AnalogClock from ./AnalogClock.",
                "Replace the default JSX in App with the AnalogClock component.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/knmmp2?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson31.webp"),
    },
    {
      taskId: "Dynamic-Menu-Highlighter",
      taskTitle: "Dynamic Menu Highlighter",
      introduction:
        "Dynamic Menu Highlighter is a visually engaging React application that features an interactive menu with dynamic highlighting and animated border positioning. Each menu item changes the background color of the page, providing a seamless and intuitive user experience.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your React Environment",
          sections: [
            {
              descriptions: [
                "Make sure you have Node.js and npm installed on your machine. You can download and install them from the official Node.js website.",
                "Open your terminal and run 'npx create-react-app my-app' to create a new React application. Replace 'my-app' with your desired project name.",
                "Change your directory to the newly created React app by running cd my-app.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Prepare Your Assets",
          sections: [
            {
              descriptions: [
                "Place your GIF images (1.gif, 2.gif, 3.gif, 4.gif, 5.gif) in the src (or any other) folder of your React app.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Structure Your App Component",
          sections: [
            {
              descriptions: [
                "Use the 'useState' hook to create a state variable 'activeIndex' and a setter function 'setActiveIndex'. This will keep track of which menu item is currently active.",
                "Use the 'useRef' hook to create references for the menu ('menuRef') and the border ('borderRef'). These references will be used to directly manipulate the DOM elements.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Structure Your App Component",
          sections: [
            {
              descriptions: [
                "Write a function clickItem(index) that will: update the 'activeIndex' state with the clicked index using setActiveIndex(index).",
                "Change the background color of the 'document.body' to the color corresponding to the clicked item using document.body.style.backgroundColor = bgColorsBody[index].",
                "Call the 'offsetMenuBorder' function to adjust the position of the menu border.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Offset the Menu Border",
          sections: [
            {
              descriptions: [
                "Create a function offsetMenuBorder(element, menuBorder) that will: Calculate the position of the 'element' (active menu item) using element.getBoundingClientRect().",
                "Calculate the left position for the 'menuBorder' by subtracting the menu's offset and adjusting for the border's width.",
                "Set the 'transform' property of the 'menuBorder' to move it to the calculated position.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Add a Resize Event Listener",
          sections: [
            {
              descriptions: [
                "Use the 'useEffect' hook to: call the 'offsetMenuBorder' function initially to set the border position when the component mounts.",
                "Add a 'resize' event listener to the 'window' that calls the 'offsetMenuBorder' function whenever the window is resized.",
                "Clean up the event listener when the component unmounts to avoid memory leaks.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Render Your Components",
          sections: [
            {
              descriptions: [
                "Map over the icons array to create menu items dynamically.",
                "Use conditional styling to apply the active class to the selected menu item.",
                "Set a background color for each menu item using CSS custom properties.",
                "Include an additional 'div' element for the menu border within the menu.",
                "Add the SVG element with a clip path definition for visual effects.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Style Your Components",
          sections: [
            {
              descriptions: [
                "Create a CSS file (e.g., App.css or styles.css) in the 'src' folder.",
                "Add styles for the menu, menu items, active item, and menu border.",
                "Ensure the styles for the SVG clip path are correctly applied.",
                "Use CSS custom properties (--bgColorItem) to dynamically set the background color of each menu item.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Test and Adjust",
          sections: [
            {
              descriptions: [
                "Start your React app by running npm start in your terminal.",
                "Open your browser and navigate to http://localhost:3000 to see your application in action.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/mfwtx2?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson32.webp"),
    },
    {
      taskId: "Order-Tracker-Mobile-App",
      taskTitle: "Order Tracker Mobile App",
      introduction:
        "Order Tracker React Drawer is a responsive mobile application, designed to provide users with real-time tracking of their orders. Featuring an interactive drawer interface, users can easily access detailed order information and manage their delivery status seamlessly.",

      steps: [
        {
          stepTitle: "Step 1: Set Up the Environment",
          sections: [
            {
              descriptions: [
                "Ensure you have Node.js and npm (Node Package Manager) installed on your machine.",
                "Create a new React application using Create React App.",
                "Navigate to your project directory.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Install Necessary Packages",
          sections: [
            {
              descriptions: [
                "Install 'GSAP' for animations.",
                "Install 'FontAwesome' for icons.",
                "Use the npm install command for these packages.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Structure Your React Components",

          sections: [
            {
              descriptions: [
                "Create/Navigate to a functional component named 'App'.",
                "Utilize 'useState' for managing the drawer's open state.",
                "Utilize 'useRef' to reference DOM elements for animation.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create useEffect Hook for Initial Setup",
          sections: [
            {
              descriptions: [
                "Within the 'App' component, use the 'useEffect' hook to perform initial setup animations when the component mounts.",
                "This will involve setting the initial position of the drawer and the visibility of the CTA elements using GSAP.",
                "Set the initial 'y' position of the drawer (e.g., .order-details-container) to be partially hidden.",
                "Set the initial opacity and 'y' position of the CTA elements (e.g., .cta-button and .cta-text) to be visible.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Hide CTA Function",
          titleDescription: "hideCTA function",
          sections: [
            {
              descriptions: [
                "Create a function called 'hideCTA' that uses GSAP to animate the hiding of the CTA elements.",
                "Animate 'y' position and opacity of '.cta-button' and '.cta-text' to make them move up and become invisible.",
                "Use the 'stagger' option to create a sequential animation effect.",
                "Once the animation completes, call the 'slideUp' function.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Show CTA Function",
          titleDescription: "showCTA function",
          sections: [
            {
              descriptions: [
                "Create a function called 'showCTA' that uses GSAP to animate the showing of the CTA elements.",
                "Animate 'y' position and opacity of '.cta-button' and '.cta-text' to make them move down and become visible.",
                "Use the 'stagger' option to create a sequential animation effect.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Slide Up Function",
          titleDescription: "slideUp function",
          sections: [
            {
              descriptions: [
                "Create a function called 'slideUp' that uses GSAP to slide the drawer up.",
                "Animate the y position of '.order-details-container' to slide it up completely.",
                "Add a class to the drawer to change its appearance if needed.",
                "Update the state to indicate the drawer is open.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Slide Down Function",
          titleDescription: "slideDown function",
          sections: [
            {
              descriptions: [
                "Create a function called 'slideDown' that uses GSAP to slide the drawer down.",
                "Animate the y position of '.order-details-container' to slide it back down to its initial position.",
                "Remove the class from the drawer if it was added in the 'slideUp' function.",
                "Update the state to indicate the drawer is closed.",
                "Call the 'showCTA' function to make the CTA elements visible again.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Implement the Render Method",
          titleDescription: "Structure JSX",
          sections: [
            {
              descriptions: [
                "Begin by wrapping your entire component in a '<div className='container'>'.",
                "Inside this container, start with a '<div className='iphone'>' to simulate the interface.",
                "Within the '.iphone' div, include a '<div className='header'>'.",
                "Inside the header, add elements like '.order-summary' to display order details such as arrival date, day, etc.",
                "Below the header, insert a '<div className='hero-img-container'>'.",
                "Inside this container, place any decorative elements or images (<img> tag) related to the order or application theme.",
                "Following the hero image, add a '<div className='order-status-container'>'.",
                "Inside this container, list various status items (e.g., Paid, Dispatched, Out for delivery) using '.status-item' divs.",
                "Each status item could include a '.status-circle' and a '.status-text' describing the status.",
                "Create a '<div className='order-details-container' ref={drawerRef}>' for the drawer component.",
                "Inside this div, start with a header section (<div className='odc-header'>) containing the CTA text and button.",
                "Use 'ref={ctaRef}' on the CTA text element to enable animation references.",
                "Include an action button (<div className='action-btn'>) at the top of the order details section, allowing users to slide the drawer down.",
                "Within '.odc-wrapper', include headings and details about the order (<div className='odc-header-line'>, <div className='odc-header-details'>).",
                "List products (<div className='product'>) with images (<img> tags) and descriptions (<span> tags) inside a '.product-container.'",
                "Provide links or buttons for actions like order cancellation (<a> or <button> within an <a> tag).",
                "Include shipping details (<div className='shipping-desc'> and <div className='shipping-address'>) for clarity.",
                "Utilize FontAwesome icons (<FontAwesomeIcon icon={faCircleDown} />) within action buttons for visual cues and interactivity.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Handle Click Events",
          sections: [
            {
              descriptions: [
                "Add an 'onClick' event to the CTA button to trigger the 'hideCTA' function.",
                "Add an onClick event to the drawer action button to trigger the slideDown function if the drawer is open.",
                "Use a conditional check to determine if the drawer is open before calling the slideDown function.",
                "Add onClick={() => { if (drawerOpen) slideDown(); }} to the drawer action button element.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: CSS Styling",
          sections: [
            {
              descriptions: [
                "Ensure you have appropriate CSS styles to visually distinguish between different sections and elements.",
                "Add styles for the hidden and visible states of the drawer and CTA elements.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Testing and debbuging",
          sections: [
            {
              descriptions: [
                "Run your React application to test the animations.",
                "Ensure the drawer slides up and down smoothly, and the CTA elements hide and show as expected.",
                "Refine any animations and transitions for smoother user experience.",
                "Debug any issues that arise during testing and ensure all animations work correctly.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/rprym4?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson33.webp"),
    },
    {
      taskId: "Timer-App",
      taskTitle: "Timer App",
      introduction:
        "React Timer App is a user-friendly React-based countdown timer, providing seamless start, pause, and reset functions to help you stay on track.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your Environment",
          sections: [
            {
              descriptions: [
                "Ensure you have Node.js and npm installed on your machine.",
                "Create a new React application using create-react-app.",
                "Navigate to your project directory.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create a New Component",
          sections: [
            {
              descriptions: [
                "Within your src directory, create a new file for your timer component.",
                "Define a functional component within this file.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Set Up State Variables",
          sections: [
            {
              descriptions: [
                "Inside your component, set up two state variables: one for the timer value and another for the active state of the timer.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Handle Timer Logic with useEffect",
          sections: [
            {
              descriptions: [
                "Inside your component, use the useEffect hook to manage the timer's interval.",
                "The useEffect hook will contain logic to set up and clear the interval based on the timer's active state.",
                "Inside the useEffect hook, if the timer is active, create an interval using setInterval.",
                "The interval should decrement the timer value by 1 every second.",
                "Ensure the interval is cleared when the component is unmounted or when the timer is paused.",
                "Return a cleanup function from the useEffect hook that calls clearInterval on the interval.",
                "Add the active state of the timer as a dependency to the useEffect hook to trigger the effect whenever the timer is started or paused.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Implement Start, Pause, and Reset Functions",
          sections: [
            {
              descriptions: [
                "Create a function to handle starting the timer.",
                "This function should set the timer's active state to true.",
                "Create a function to handle pausing the timer.",
                "This function should set the timer's active state to false.",
                "Create a function to handle resetting the timer.",
                "This function should set the timer value back to the initial state (e.g., 10 minutes).",
                "It should also set the timer's active state to false to ensure the timer stops.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Format the Time Display",
          sections: [
            {
              descriptions: [
                "Define a function to convert the timer value (in seconds) into a formatted string showing minutes and seconds.",
                "Inside the utility function, calculate the number of minutes by dividing the total seconds by 60.",
                "Calculate the remaining seconds using the modulus operator.",
                "Convert the minutes and seconds to strings and pad them with leading zeros if necessary.",
                "Concatenate the minutes and seconds into a single string in the format MM:SS.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Design the UI Layout",
          sections: [
            {
              descriptions: [
                "Define a main container element to hold the timer display and buttons. This will help in applying styles more easily.",
                "Create a display area within the container to show the formatted timer value. This can be a div element where the formatted time string will be displayed.",
                "Add three buttons within the container: one for starting the timer, one for pausing it, and one for resetting it.",
                "Use conditional rendering to display the correct button for starting or pausing based on the timer's active state.",
                "Apply classes to the elements to handle active and inactive states for styling purposes. This will help in visually differentiating between different states of the timer.",
                "Use a main wrapper div for the timer container to encapsulate the timer display and button controls.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Apply CSS Styling",
          sections: [
            {
              descriptions: [
                "Create a CSS file to style your timer component.",
                "Add styles for the timer display, buttons, and active states.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Integrate the Component",
          sections: [
            {
              descriptions: [
                "Import your timer component into your main application file.",
                "Render the timer component within your application's UI.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Test Your Component",
          sections: [
            {
              descriptions: [
                "Run your React application.",
                "Interact with the timer by starting, pausing, and resetting it to ensure all functionality works as expected.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/gdvhkz?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson34.webp"),
    },
    {
      taskId: "Portfolio-Website",
      taskTitle: "My Portfolio Website",
      introduction:
        "This React project showcases a personal portfolio website featuring sections such as a Hero banner with a downloadable CV, an About Me section highlighting skills and personal interests, Services offered with detailed descriptions, a Portfolio section with filterable image galleries, a Clients section displaying client logos, a Contact form for user inquiries, and a Footer with social media links. The project integrates responsive design and uses React's component-based architecture to create a cohesive and interactive user experience.",

      steps: [
        {
          stepTitle: "Step 1: Create a React App",
          sections: [
            {
              descriptions: [
                "Download and install Node.js from nodejs.org.",
                "Open your terminal.",
                "Run npx create-react-app my-portfolio.",
                "Navigate to the project directory using cd my-portfolio.",
                "Inside the src folder, create a new folder named components.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Implement Portfolio Component",
          titleDescription: "Portfolio.js",
          sections: [
            {
              descriptions: [
                "Inside the components directory, create a file named Portfolio.js.",
                "Open Portfolio.js and write the necessary imports, function, and export statements to define the Portfolio component.",
                "Decide on the structure of your Portfolio component, which includes a title, filter buttons, and image grid.",
                "Determine how to manage state for the current filter (currentFilter) using React's useState hook.",
                "Use the useState hook to initialize the currentFilter state variable, starting with " *
                  " to show all images initially.",
                "Implement a function (handleFilterClick) that updates the currentFilter state based on the button clicked.",
                "Define the JSX structure for the Portfolio component, starting with a <section> element with an id of 'portfolio'.",
                "Inside the <section>, create a <div> with the class 'container' to hold all content.",
                "Include a <div> for the section title (section-title) with an <h1> tag for 'My Portfolio'.",
                "Create a <div> with the id 'filter-btn' and class 'button-group'.",
                "Inside this <div>, use an <ul> with <li> elements containing buttons for different filters (All, One, Two, Three).",
                "Each button should have an onClick handler that calls handleFilterClick with the appropriate filter value.",
                "Add a <div> with the class 'img-grid' to display the images.",
                "Inside the 'img-grid', include <div> elements (img-container) for each image.",
                "Use conditional classes (hidden class) based on currentFilter state to display or hide images.",
                "Open App.js.",
                "Import the Services component.",
                "Use the Services component inside the App function to render it.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create Hero Component",
          titleDescription: "Hero.js",
          sections: [
            {
              descriptions: [
                "Inside the components directory, create a file named Hero.js.",
                "Open Hero.js and write the necessary imports, function, and export statements to define the Hero component.",
                "Open App.js.",
                "Import the Hero component.",
                "Use the Hero component inside the App function to render it.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create About Component",
          titleDescription: "About.js",
          sections: [
            {
              descriptions: [
                "Inside the components directory, create a file named About.js.",
                "Open About.js and write the necessary imports, function, and export statements to define the About component.",
                "Open App.js.",
                "Import the About component.",
                "Use the About component inside the App function to render it.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create Services Component",
          titleDescription: "Services.js",
          sections: [
            {
              descriptions: [
                "Inside the components directory, create a file named Services.js.",
                "Open Services.js and write the necessary imports, function, and export statements to define the Services component.",
                "Open App.js.",
                "Import the Services component.",
                "Use the Services component inside the App function to render it.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create Header Component",
          titleDescription: "Header.js",
          sections: [
            {
              descriptions: [
                "Inside the components directory, create a file named Header.js.",
                "Open Header.js and write the necessary imports, function, and export statements to define the Header component.",
                "Use the useState hook to initialize the isNavOpen state variable, starting with false (indicating closed navigation).",
                "Implement a function (toggleNav) that toggles the isNavOpen state between true and false when the mobile toggle button is clicked.",
                "Define the JSX structure for the Header component, starting with a <header> element with an id of 'main-header'.",
                "Inside the <header>, create a <div> with the class 'header-wrapper' to hold the header content.",
                "Insert an <a> tag for the logo with a class of 'logo' and an href attribute pointing to the homepage (/).",
                "Add a <div> with a class of 'mobile-toggle' for the mobile navigation toggle button, using an onClick handler to call the toggleNav function.",
                "Include a <nav> element with an ul list containing navigation links (<li> with <a> tags) for each section of the website (Home, About, Services, Portfolio, Clients, Contact).",
                "Apply conditional classes (open-nav and open) based on the isNavOpen state to control visibility and animation of the navigation menu.",
                "Open App.js.",
                "Import the Header component.",
                "Use the Header component inside the App function to render it.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Create Clients Component",
          titleDescription: "Clients.js",
          sections: [
            {
              description: [
                "Inside the components directory, create a file named Clients.js.",
                "Open Clients.js and write the necessary imports, function, and export statements to define the Clients component.",
                "Open App.js.",
                "Import the Clients component.",
                "Use the Clients component inside the App function to render it.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Create Contact Component",
          titleDescription: "Contact.js",
          sections: [
            {
              descriptions: [
                "Inside the components directory, create a file named Contact.js.",
                "Open Contact.js and write the necessary imports, function, and export statements to define the Contact component.",
                "Open App.js.",
                "Import the Contact component.",
                "Use the Contact component inside the App function to render it.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Create Footer Component",
          titleDescription: "Footer.js",
          sections: [
            {
              descriptions: [
                "Inside the components directory, create a file named Footer.js.",
                "Open Footer.js and write the necessary imports, function, and export statements to define the Footer component.",
                "Open App.js.",
                "Import the Footer component.",
                "Use the Footer component inside the App function to render it.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Create Skills Component",
          titleDescription: "Skills.js",
          sections: [
            {
              descriptions: [
                "Inside the components directory, create a file named Skills.js.",
                "Open Skills.js and write the necessary imports, function, and export statements to define the Skills component.",
                "Open App.js.",
                "Import the Skills component.",
                "Use the Skills component inside the App function to render it.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/4p4fts?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson35.webp"),
    },
    {
      taskId: "Celestial-Canvas",
      taskTitle: "Celestial Canvas",
      introduction:
        "Celestial Canvas is a dynamic visual simulation that brings the night sky to life on a web canvas, featuring twinkling stars, drifting nebulae, and occasional comets. This interactive and animated experience allows users to toggle the starry display on and off, creating an immersive celestial atmosphere.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Environment",
          sections: [
            {
              descriptions: [
                "Ensure Node.js and npm are installed on your machine. Download and install from the official Node.js website.",
                "Open a terminal.",
                "Run the 'npx create-react-app star-animation' command to create a new React app",
                "Navigate into the newly created app directory",
              ],
            },
          ],
        },
        {
          stepTitle:
            "Step 2: Define a Function to Create a Star with Random Properties",
          titleDescription: "createStar",
          sections: [
            {
              descriptions: [
                "Create a function named createStar using the useCallback hook. The function should take a single argument, 'canvas', which is expected to be a reference to an HTML canvas element.",
                "In return statement: Set a random x position for the star within the canvas width.",
                "Set a random y position for the star within the canvas height.",
                "Set a random size for the star.",
                "Set a random horizontal speed for the star.",
                "Set the vertical speed to 0.",
                "Set a random color for the star within the blue spectrum.",
                "Initialize the flashing state as false.",
                "Initialize the flash duration.",
                "Set a random interval for flashing.",
                "Set an initial random timer for flashing.",
              ],
            },
          ],
        },
        {
          stepTitle:
            "Step 3: Define a Function to Update a Star's Position and Flashing State",
          titleDescription: "updateStar",
          sections: [
            {
              descriptions: [
                "Create a function named updateStar using the useCallback hook. The function should take two arguments: 'star': An object representing a single star with properties like x position, y position, size, etc. 'canvas': A reference to the HTML canvas element where the stars are drawn.",
                "Inside this function: Update the star's horizontal position based on its speed.",
                "Wrap the star around the canvas if it goes off-screen.",
                "Decrease the flash timer.",
                "Check if it's time for the star to flash.",
                "Set the flashing state to true and flash duration.",
                "Reset the flash timer.",
                "If the star is flashing, decrease the flash duration.",
                "Reset the flashing state to false if the flash duration is over.",
                "Return updated star",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Define a Function to Draw a Star on the Canvas",
          titleDescription: "drawStar",
          sections: [
            {
              descriptions: [
                "Create a function named drawStar using the useCallback hook. The function should take two arguments: 'ctx': A 2D rendering context object (`CanvasRenderingContext2D`) used for drawing on the canvas. 'star': An object representing a single star with properties like x position, y position, size, color, etc.",
                "Inside this function: Begin a new drawing path.",
                "Draw the star using the arc method.",
                "Set the fill color based on the star's flashing state.",
                "Fill the star with color.",
                "Close the drawing path.",
                "Begin a new drawing path for the glow effect.",
                "Create a radial gradient for the glow.",
                "Define inner and outer color stops for the gradient.",
                "Set the gradient as the fill style.",
                "Draw and fill the glow.",
                "Close the drawing path.",
              ],
            },
          ],
        },
        {
          stepTitle:
            "Step 5: Define a Function to Create a Nebula with Random Properties",
          titleDescription: "createNebula",
          sections: [
            {
              descriptions: [
                "Create a function named createNebula using the useCallback hook. The function should take a single argument, 'canvas', which is expected to be a reference to an HTML canvas element.",
                "In return statement: Set a random x position for the nebula within the canvas width.",
                "Set a random y position for the nebula within the canvas height.",
                "Set a random size for the nebula.",
                "Set a random color for the nebula within the blue spectrum.",
                "Set a random transparency for the nebula.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Define a Function to Draw a Nebula on the Canvas",
          titleDescription: "drawNebula ",
          sections: [
            {
              descriptions: [
                "Create a function named drawNebula using the useCallback hook. The function should take two arguments: 'ctx': A 2D rendering context object (`CanvasRenderingContext2D`) used for drawing on the canvas. 'nebula': An object likely representing the nebula's properties used for drawing it.",
                "Inside this function: Begin a new drawing path.",
                "Create a radial gradient for the nebula.",
                "Define inner and outer color stops for the gradient.",
                "Set the gradient as the fill style.",
                "Set global transparency for the nebula.",
                "Draw and fill the nebula.",
                "Reset global transparency.",
                "Close the drawing path.",
              ],
            },
          ],
        },
        {
          stepTitle:
            "Step 7: Define a Function to Create a Comet with Random Properties",
          titleDescription: "createComet",
          sections: [
            {
              descriptions: [
                "Create a function named createComet using the useCallback hook. The function should take a single argument, 'canvas', which is expected to be a reference to an HTML canvas element.",
                "In return statement: Set the initial x position off the right edge of the canvas.",
                "Set a random y position for the comet within the canvas height.",
                "Set the size of the comet.",
                "Set a random horizontal speed for the comet.",
                "Set a random vertical speed for the comet.",
                "Set the length of the comet's tail.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Define a Function to Update a Comet's Position",
          titleDescription: "updateComet",
          sections: [
            {
              descriptions: [
                "Create a function named updateComet using the useCallback hook. The function should take a single argument: 'comet': An object likely representing a comet with properties used for updating its state.",
                "Inside this function: ",
                "Update the comet's horizontal position based on its speed.",
                "Update the comet's vertical position based on its speed.",
                "Return updated comet",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Define a Function to Draw a Comet on the Canvas",
          titleDescription: "drawComet",
          sections: [
            {
              descriptions: [
                "Create a function named drawComet using the useCallback hook. The function should take two arguments: 'ctx': A 2D rendering context object (`CanvasRenderingContext2D`) used for drawing on the canvas. 'comet': An object likely representing a comet with properties used for drawing it.",
                "Inside this function: Begin a new drawing path.",
                "Move to the comet's current position.",
                "Create a linear gradient for the comet's tail.",
                "Define start and end color stops for the gradient.",
                "Set the gradient as the stroke style.",
                "Set the width of the comet's tail.",
                "Draw and stroke the tail.",
                "Close the drawing path.",
                "Begin a new drawing path for the comet head.",
                "Draw the comet head using the arc method.",
                "Set the fill color to white.",
                "Fill the comet head with color.",
                "Close the drawing path.",
              ],
            },
          ],
        },
        {
          stepTitle:
            "Step 10: Handle Canvas Drawing and Animation Using useEffect",
          sections: [
            {
              descriptions: [
                "Use the useEffect hook to handle the drawing and animation of stars, nebulae, and comets.",
                "Inside the useEffect hook: ",
                "Check if stars are toggled on, and exit if they are not.",
                "Get the canvas element reference and its 2D drawing context.",
                "Set the canvas width and height to match the window size.",
                "Initialize arrays to hold stars and nebulae.",
                "Create a variable to hold the comet.",
                "Define a function to create stars and add them to the stars array.",
                "Define a function to create nebulae and add them to the nebulae array.",
                "Define a function to draw the background gradient: Create a linear gradient for the background.",
                "Set the start color stop (black).",
                "Set the end color stop (dark blue).",
                "Set the gradient as the fill style.",
                "Fill the entire canvas with the gradient.",
                "Define a function to animate stars, nebulae, and the comet: Clear the canvas.",
                "Draw each nebula.",
                "Update star position and state using 'forEach' method.",
                "Draw the star.",
                "If a comet exists, draw the comet.",
                "If comet has exited the canvas, remove the comet.",
                "Request next animation frame.",
                "Call the functions to initialize stars and nebulae, and start the animation loop.",
                "Add a resize event listener to handle canvas resizing and recreate stars and nebulae on resize.",
                "Inside the function: Update canvas width on window resize.",
                "Update canvas height on window resize.",
                "Clear stars array.",
                "Clear nebulae array.",
                "Recreate stars.",
                "Recreate nebulae.",
                "Add a resize event listener to handle canvas resizing and recreate stars and nebulae on resize.",
                "Set an interval to create a comet periodically.",
                "Return a cleanup function to remove the resize event listener and clear the comet creation interval.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Define a Function to Toggle Stars Animation",
          sections: [
            {
              descriptions: [
                "Create a function named toggleStars to handle toggling the stars animation. This function should take 'e' as an argument",
                "Inside this function: Prevent the default link behavior.",
                "Toggle the starsOn state.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Render the Stars Component",
          sections: [
            {
              descriptions: [
                "Render a canvas element with a reference to canvasRef if starsOn state is true.",
                "Render a link to toggle the stars animation with text based on the starsOn state.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/6gwq9m?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson36.webp"),
    },
    {
      taskId: "Materialize-Portfolio",
      taskTitle: "Materialize Portfolio",
      introduction:
        "A dynamic portfolio website built using React and styled with Materialize CSS, showcasing responsive design, interactive elements, and seamless navigation.",

      steps: [
        {
          stepTitle: "Step 1: Set Up React Project",
          sections: [
            {
              descriptions: [
                "Ensure you have a React development environment set up with Node.js and npm or yarn installed.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Install Materialize CSS and JavaScript",
          sections: [
            {
              descriptions: [
                "Use npm or yarn to install Materialize CSS and JavaScript libraries. Import these into your App.js file to style and initialize Materialize components.",
                "Inside the <head> section of your HTML file, add the <link> tag links to Google's Material Icons stylesheet hosted on Google Fonts.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create Components",
          sections: [
            {
              descriptions: [
                "Create separate functional components for Navbar, Header, Content, and Footer. These components will encapsulate different parts of your webpage.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Navbar Component",
          titleDescription: "Navbar.js",
          sections: [
            {
              descriptions: [
                "Import React at the top of your file since you're creating a React component.",
                "Define a functional component named Navbar using arrow function.",
                "Since this component is a simple stateless component, it can directly return JSX without needing a separate return statement.",
                "Use a <nav> element with classes white z-depth-0 for styling with MaterializeCSS.",
                "Inside the <nav>, use a <div> with class nav-wrapper to contain the main navigation elements.",
                "Include an <a> element with class brand-logo and an href='/'. Inside this <a>, place an <img> element with src set to './logo.jpg' and alt attribute set to 'Logo'. Adjust the src path based on your project structure'.",
                "Add another <a> element with href='/', data-target='mobile-demo', and class sidenav-trigger button-collapse. Inside this <a>, use an <i> element with class material-icons and text 'menu' for the mobile menu toggle icon.",
                "Create two <ul> elements.",
                "The first <ul> with class right hide-on-med-and-down for desktop navigation.",
                "Inside, include <li> elements with <a> tags and href=" /
                  ". Each <a> represents a navigation link (Intro, Header, Footer).",
                "The second <ul> with class sidenav and id='mobile-demo' for mobile navigation.",
                "Inside, include <li> elements with <a> tags and href=" /
                  ", similar to the desktop navigation.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Header Component",
          titleDescription: "Header.js",
          sections: [
            {
              descriptions: [
                "Start by importing React at the top of your Header.js file since you're building a React component.",
                "Define a functional component named Header using arrow function syntax.",
                "Define a function handleDirectionsClick inside your component.",
                "Retrieves the iframe element using document.getElementById('googleMapIframe').",
                "Checks if the element exists (if (iframeElement)).",
                "If the element exists, it scrolls smoothly to the iframe using iframeElement.scrollIntoView({ behavior: 'smooth' }).",
                "In your return statement: Use a <div> with class header valign-wrapper as the outer container.",
                "Inside this div, nest another <div> with class wrapper valign for layout purposes.",
                "Include an <h1> element containing a nested <div> with classes light hide-on-small-only and the text 'Hello World'.",
                "Center-align content using the <center> tag (note: in React, typically you'd use CSS for alignment, but for MaterializeCSS, this is acceptable for certain scenarios).",
                "Within <center>, include: A <button> element with an onClick handler set to handleDirectionsClick. This button should have classes btn-large blue waves-effect waves-light, the text 'To GoogleMaps', and an <i> tag with classes material-icons right and the text 'map'.",
                "An <a> element with classes btn-large blue-text white waves-effect, serving as a secondary button with the text 'white button'.",
                "A <div> with class scroll-down light, including the text 'scroll down ok?' and an <i> tag with class material-icons and the text 'arrow_downward'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Content Component",
          titleDescription: "Content.js",
          sections: [
            {
              descriptions: [
                "Import React at the top of your file since you're creating a React component.",
                "Define a functional component named Content using arrow function syntax.",
                "Since this component is a simple stateless component, it can directly return JSX without needing a separate return statement.",
                "Use a <div> element with class content to serve as the main container for your content.",
                "Inside <div className='content'>, nest a <div> with class container to limit the content width.",
                "Inside <div className='container'>, use a <div> with class row to create a row for your columns.",
                "Use <div className='col s12'> to create columns that span the entire width on small screens and adjust based on screen size (s12 for small screens, m6 for medium screens, etc.).",
                "Inside each column (<div className='col s12'>): Include <h2> elements for headings (Intro, header, Add more stuff here, Directions).",
                "Use <p> elements for paragraphs (Lorem ipsum... text).",
                "Use <span> elements with nested <a> tags for clickable links (Clickable Link: <a href=" /
                  ">link text</a>).",
                "Include <div> elements with class divider to create visual dividers.",
                "Use <div> elements with class img-box for image boxes (<div className='img-box'><img ... /><div className='text'>...</div></div>).",
                "Use <img> elements with class responsive-img materialboxed for responsive images with MaterializeCSS styles.",
                "Include <iframe> elements for embedding Google Maps (<iframe title='Google Maps' ...></iframe>).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Footer Component",
          titleDescription: "Footer.js",
          sections: [
            {
              descriptions: [
                "Import React at the top of your file since you're creating a React component.",
                "Define a functional component named Content using arrow function syntax.",
                "Since this component is a simple stateless component, it can directly return JSX without needing a separate return statement.",
                "Use a <footer> element with class page-footer transparent to style the footer with MaterializeCSS classes.",
                "Inside <footer className='page-footer transparent'>, nest a <div> with class container to limit the content width.",
                "Inside <div className='container'>, use a <div> with class row to create a row for your footer content.",
                "Use <div className='col s6'> to create columns that span half the width (s6 for small screens, adjusts based on screen size).",
                "Inside each column (<div className='col s6'>): Include text or links (© 2015 Copyright by YOU, <a href=/'legal'>Footer</a>).",
                "Use right-align class on the second column (<div className='col s6 right-align'>) to align content to the right within the column.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Component Interaction and Styling",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Import React and useEffect from 'react' at the top of your file since you're creating a React component that uses hooks.",
                "Import MaterializeCSS styles and JavaScript at the beginning to ensure they are applied throughout your application.",
                "Import the components (Navbar, Header, Content, Footer) that you have created.",
                "Define a functional component named App using arrow function syntax.",
                "Since this component is a simple stateless component, it can directly return JSX without needing a separate return statement.",
                "Use the useEffect hook to perform side effects in function components. In this case, you are using it to initialize MaterializeCSS components when the component mounts (M.AutoInit();).",
                "Return a <div> element as the root element (<div> wraps all the content).",
                "Inside the <div>, include the imported components: <Navbar />, <Header />, <Content />, <Footer />.",
                "Feel free to use any other elements from MaterializeCSS.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/ttfk2x?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson37.webp"),
    },
    {
      taskId: "File-Uploader",
      taskTitle: "File Uploader",
      introduction:
        "React File Uploader is a user-friendly component designed for easy file selection, display, download, and deletion. It leverages React's hooks for state management and provides a seamless interface for managing files within a web application. In real-world applications, files are usually saved in the backend, but for learning purposes, this project does not include backend integration and temporarily stores files in the browser's memory.",

      steps: [
        {
          stepTitle: "Step 1: Create the Project",
          sections: [
            {
              descriptions: [
                "If you don't have 'create-react-app' installed, install it using 'npm install -g create-react-app'.",
                "Create a new project using 'create-react-app file-upload-app'.",
                "Navigate into your project directory using 'cd file-upload-app'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Set Up Component Structure",
          sections: [
            {
              descriptions: [
                "Inside the 'src' directory, create a new file named FileUploadComponent.js.",
                "At the top of your file, import 'useRef' and 'useState' from React.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Define the Component",
          sections: [
            {
              descriptions: [
                "Create a functional component named 'FileUploadComponent'.",
                "Use the 'useRef' hook to create a reference for the file input element.",
                "Use the 'useState' hook to create a state variable to hold an array of file data.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Handle Button Click",
          sections: [
            {
              descriptions: [
                "Inside your 'FileUploadComponent' function, define a function named 'handleButtonClick'.",
                "Access the file input element using 'fileInputRef.current'.",
                "Call the 'click' method on this element.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Handle File Selection",
          sections: [
            {
              descriptions: [
                "Inside your 'FileUploadComponent' function, define a function named 'handleFileChange'.",
                "Access the selected files using 'fileInputRef.current.files'.",
                "Convert the 'FileList' to an array using 'Array.from'.",
                "Map over the array to create a new array of objects containing 'name' and 'url' properties for each file.",
                "Use 'URL.createObjectURL' to create a URL for each file.",
                "Update the state with the new array of file data objects.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Handle File Deletion",
          sections: [
            {
              descriptions: [
                "Inside your 'FileUploadComponent' function, define a function named 'handleFileDelete'.",
                "Accept the index of the file to be deleted as a parameter.",
                "Use the 'filter' method to create a new array excluding the file at the specified index.",
                "Update the state with the new array.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Display Selected Files",
          sections: [
            {
              descriptions: [
                "In your JSX, conditionally render the file names if there are any files selected.",
                "Check if 'filesData' array has any elements.",
                "If yes, map over the 'filesData' array to render a list of file names.",
                "If no, display a message indicating that no files are selected.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Enable File Download",
          sections: [
            {
              descriptions: [
                "In your JSX, 'map' over the 'filesData' array to create download links for each file.",
                "Use the map method on the 'filesData' array to create download links.",
                "For each file, use an anchor (<a>) tag with 'href' set to the file's URL and 'download' attribute set to the file's name.",
                "Next to each download link, include a button to delete the file, wired to the 'handleFileDelete' function.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Style the Component",
          sections: [
            {
              descriptions: [
                "Create a CSS file, e.g., FileUploadComponent.css, to style the component.",
                "Import this CSS file into your FileUploadComponent.js.",
                "Or simply download the styles from the link provided below.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Export, Use and test the Component",
          sections: [
            {
              descriptions: [
                "Export the 'FileUploadComponent' at the end of your file.",
                "Open 'App.js' and import the FileUploadComponent.",
                "Use the component inside the 'App' component's JSX.",
                "Start your React development server with 'npm start'.",
                "Open your browser and navigate to 'http://localhost:3000' to test the file upload functionality.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/ympqz7?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson38.webp"),
    },
    {
      taskId: "Cake-Website",
      taskTitle: "Cake Website",
      introduction:
        "This project is a responsive React application designed to simulate the online presence of a bakery. It includes essential components like a dynamic navigation bar, a rotating showcase of bakery specials, and a footer with contact information and social media links. Utilizing React hooks such as useState and useEffect, along with custom hooks for scroll and email validation, the application enhances user interaction and responsiveness, offering a seamless browsing experience for potential customers exploring the bakery's offerings and services.",

      steps: [
        {
          stepTitle: "Step 1: Set Up the Project",
          sections: [
            {
              descriptions: [
                "Use 'create-react-app' to set up a new React project.",
                " Install necessary packages for icons. 'npm install 'react-icons''",
                "Organize your components in a components folder and hooks in a hooks folder.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Implement NavBar Component",
          titleDescription: "NavBar.js",
          sections: [
            {
              descriptions: [
                "Navigate to the src/components directory in your project.",
                "Create a new file named Navbar.js.",
                "Import React and the necessary hooks (useState, useEffect).",
                "Import the required icons from 'react-icons'.",
                "Import the 'useScrollEffect' custom hook (refer to step 6).",
                "Define a functional component named Navbar.",
                "Inside the component: Create a state variable to manage the open/close state of the navigation menu.",
                "Use the 'useScrollEffect' hook to manage the scroll effect.",
                "Create a state variable to manage the number of items in the cart (for simulation purposes only).",
                "Use 'useEffect' to set the cart items with a random number for now.",
                "Define a function to toggle the navigation menu.",
                "Return JSX for the Navbar, including a logo, a button to toggle the menu, navigation links, and a cart icon with a count.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Implement MainSection Component",
          titleDescription: "MainSection.js",
          sections: [
            {
              descriptions: [
                "Navigate to the src/components directory.",
                "Create a new file named MainSection.js.",
                "Import React and the necessary hooks (useState, useEffect).",
                "Import icons from 'react-icons'.",
                "Define a functional component named MainSection.",
                "Inside the component: Create a state variable to manage the current image index.",
                "Define an array of image URLs.",
                "Use 'useEffect' to set an interval that changes the image index every few seconds.",
                "Return JSX for the main section, including the background image, a welcome message, and feature icons with text.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Implement Specials Component",
          titleDescription: "Specials.js",
          sections: [
            {
              descriptions: [
                "Navigate to the src/components directory.",
                "Create a new file named Specials.js.",
                "Import React and the necessary hooks (useState).",
                "Import icons from 'react-icons'.",
                "Define functional components named 'SpecialCard' and 'Specials'.",
                "Inside the 'SpecialCard' component: Create a state variable to manage the hover state.",
                "Return JSX for the special card, including an icon, title, description, price, and a conditional 'Order Now' button.",
                "Inside the 'Specials' component: Return JSX for the specials section, including multiple 'SpecialCard' components and additional offers.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Implement Footer Component",
          titleDescription: "Footer.js",
          sections: [
            {
              descriptions: [
                "Navigate to the src/components directory.",
                "Create a new file named Footer.js.",
                "Import React and the necessary hooks (useState).",
                "Import icons from 'react-icons'.",
                "Import the 'useEmailValidation' custom hook (refer to step 7). ",
                "Define a functional component named Footer.",
                "Inside the component: Create a state variable to manage the email input.",
                "Use the 'useEmailValidation' hook to validate the email.",
                "Define a function to handle form submission and display an alert based on email validity.",
                "Return JSX for the footer, including contact information, a newsletter subscription form, and social media icons.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Implement useScrollEffect Hook",
          titleDescription: "useScrollEffect.js",
          sections: [
            {
              descriptions: [
                "Navigate to the src/hooks directory.",
                "Create a new file named useScrollEffect.js.",
                "Import 'useEffect' and 'useState' from the 'react' library. These will be used to manage side effects and state within your custom hook.",
                "Create a function named 'useScrollEffect' that accepts an optional 'threshold' parameter. This parameter will determine the scroll position beyond which the hook will consider the user as having scrolled.",
                "Inside the 'useScrollEffect' function, use the 'useState' hook to initialize a state variable 'scrolled' with an initial value of 'false'. This state will indicate whether the user has scrolled past the threshold.",
                "Use the 'useEffect' hook to set up a scroll event listener when the component using this hook mounts or when the 'threshold' value changes. Define a function 'handleScroll' that checks the current 'window.scrollY' position against the 'threshold' value and updates the 'scrolled' state accordingly.",
                "Within the 'useEffect' hook, add the 'handleScroll' function as an event listener to the 'scroll' event on 'window'.",
                "Return a cleanup function from the 'useEffect' hook using 'return () => { ... }' syntax. Inside this cleanup function, remove the 'handleScroll' function as an event listener using 'window.removeEventListener'.",
                "Finally, return the scrolled state variable from the custom hook. This will allow components using the hook to know whether the user has scrolled past the threshold.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Implement useEmailValidation Hook",
          titleDescription: "useEmailValidation.js",
          sections: [
            {
              descriptions: [
                "Navigate to the src/hooks directory.",
                "Create a new file named useEmailValidation.js.",
                " Import 'useState' and 'useEffect' from the 'react' library. These are necessary for managing state and performing side effects within your custom hook.",
                "Create a function named 'useEmailValidation' that takes an 'email' parameter. This parameter represents the email address to be validated.",
                " Inside the 'useEmailValidation' function, use the 'useState' hook to initialize a state variable 'isValid' with an initial value of 'false'. This state will indicate whether the provided 'email' is valid according to the defined regular expression.",
                "Use the 'useEffect' hook to perform the email validation whenever the 'email' parameter changes. Define a function within 'useEffect' that creates a regular expression (emailRegex) to validate the email format (/^([A-Za-zd_-]+)@([A-Za-zd_-]+).([A-Za-z]{2,14})(.[A-Za-z]{2,8})?$/). Use 'emailRegex.test(email)' to check if the provided 'email' matches the regex pattern and update the 'isValid' state accordingly using 'setIsValid'.",
                "Return the 'isValid' state variable from the custom hook. This allows components using the hook to know whether the provided email is valid.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Implement EmailInput Hook",
          titleDescription: "EmailInput.js",
          sections: [
            {
              descriptions: [
                "Navigate to the src/hooks directory.",
                "Create a new file named EmailInput.js.",
                "Import 'useState' from react and the 'useEmailValidation' custom hook from './hooks/useEmailValidation'. This allows the EmailInput component to use state management and email validation logic provided by the custom hook.",
                "Define the 'EmailInput' functional component.",
                "Use 'useState' to manage 'email' (current input value) initialized to ''. Use 'useEmailValidation(email)' to get 'isValidEmail'.",
                "Render: <input> for email with: 'type='email'' and 'value={email}'. 'onChange={(e) => setEmail(e.target.value)}'. 'className={isValidEmail ? 'valid' : 'invalid'}'. ",
                "Conditional <p> for '!isValidEmail'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Apply Styles",
          sections: [
            {
              descriptions: [
                "Create a src/styles directory.",
                "Create CSS files for each component (Navbar.css, MainSection.css, Specials.css, Footer.css).",
                "Open each CSS file.",
                "Write styles for each component, including layout, colors, typography, and responsive design.",
                "Make sure to include styles for different states like hover, active, and focus.",
                "Open each component file.",
                "Import the corresponding CSS file at the top.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Test the Application",
          sections: [
            {
              descriptions: [
                "Open your terminal.",
                "Navigate to your project directory.",
                "Run the command to start your development server (usually 'npm start').",
                "Open your browser and go to the URL where your app is running (usually http://localhost:3000).",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/j7jpf2?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson39.webp"),
    },
    {
      taskId: "Interactive-3D-Card-Viewer",
      taskTitle: "Interactive 3D Card Viewer",
      introduction:
        "An interactive React application that visually enhances user engagement by rotating a 3D-rendered card in response to mouse movements and touch gestures, showcasing both the front and back images dynamically.",

      steps: [
        {
          stepTitle: "Step 1: Set Up the React Project",
          sections: [
            {
              descriptions: [
                "Initialize a new React project using 'create-react-app' or ensure your existing project is ready.",
                "Make sure you have the necessary files for the project.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Define the Component",
          sections: [
            {
              descriptions: [
                "Navigate to App.js file.",
                "Create a functional component named App.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Implement the useEffect Hook",
          sections: [
            {
              descriptions: [
                "Inside the App component, use the useEffect hook to run code after the component mounts.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Define handleMouseMove Function",
          sections: [
            {
              descriptions: [
                "Inside the useEffect hook, define a function handleMouseMove that takes an event object as a parameter.",
                "Capture the pageX and pageY properties from the event object.",
                "Select the .card element using document.querySelector('.card').",
                "Update the style.transform property of the .card element to apply the rotation based on the x and y coordinates.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Define handleTouchMove Function",
          sections: [
            {
              descriptions: [
                "Inside the same useEffect hook, define a function handleTouchMove that takes an event object as a parameter.",
                "Capture the pageX and pageY properties from e.touches[0] (the first touch point).",
                "Select the .card element using document.querySelector('.note').",
                "Update the style.transform property of the .note element to apply the rotation based on the x and y coordinates.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Add Cleanup Logic",
          sections: [
            {
              descriptions: [
                "Inside the same useEffect hook, add event listeners to document.body for the mousemove event and to document for the touchmove event, linking them to handleMouseMove and handleTouchMove, respectively.",
                "Return a cleanup function from the useEffect hook that removes the event listeners for mousemove and touchmove.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Define the JSX Structure",
          sections: [
            {
              descriptions: [
                "Inside the return statement of the App component, create a div with the class name App.",
                "Inside this div, add another div with the class name card.",
                "Inside the card div, add two more divs with class names front and back.",
                "Place img elements inside these divs to display the images for the front and back of the card. Use the src attribute to point to the respective image paths and the alt attribute for accessibility.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: CSS Styling",
          sections: [
            {
              descriptions: [
                "In a CSS file (index.css)  style the .card, .front, and .back elements.",
                "Ensure the .card element has a 3D transformation perspective and any necessary styling for rotation.",
                "Import the CSS file into your component to apply the styles.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Images",
          sections: [
            {
              descriptions: [
                "Place the images (image1.jpg and image2.jpg) in the appropriate directory (public/img).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Test the Component",
          sections: [
            {
              descriptions: [
                "Run your React project using npm start.",
                "Open your browser to see the component.",
                "Move your mouse or touch the screen to see the rotation effect.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/hch2kt?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson40.webp"),
    },
    {
      taskId: "Dev-Portfolio",
      taskTitle: "DevPortfolio",
      introduction:
        "DevPortfolio is a personal portfolio website designed for web developers to showcase their skills, projects, and contact information in a clean and professional manner. It features smooth navigation, interactive project filters, and a responsive design, making it an ideal platform for highlighting your digital portfolio.",

      steps: [
        {
          stepTitle: "Step 1: Setup Your React Project",
          sections: [
            {
              descriptions: [
                "Use 'create-react-app' to set up a new React project.",
                "Navigate to the project directory.",
                "Install 'react-router-dom' using npm to handle the routing in your application.",
                "Create a 'components' directory inside the 'src' folder.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Navbar Component",
          titleDescription: "Navbar.js",
          sections: [
            {
              descriptions: [
                "Navigate to the 'components' directory.",
                "Create a new file named Navbar.js.",
                "Import 'React', 'useState', 'useEffect' from 'react'.",
                "Import 'Link' from 'react-router-dom'.",
                "Define a state to track the scroll position.",
                "Set up an effect to handle scroll events.",
                "In return statement: Create a 'nav' element. Add a 'div' for the logo using 'Link' to navigate to the home page. Create an unordered list with 'Link' elements for Home, About, Portfolio, and Contact.",
                "Add a class to the 'nav' element based on the scroll position.",
                "Export the 'Navbar' component for use in other parts of the app.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Home Component",
          titleDescription: "Home.js",
          sections: [
            {
              descriptions: [
                "Navigate to the 'components' directory.",
                "Create a new file named Home.js.",
                "Import 'React' and 'Link' from 'react-router-dom'.",
                "in return statement: Create a section element for the home content. Add a heading for the welcome message. Add a paragraph describing yourself. Add a 'Link' element styled as a button to navigate to the Portfolio page.",
                "Export the 'Home' component for use in other parts of the app.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: About Component",
          titleDescription: "About.js",
          sections: [
            {
              descriptions: [
                "Navigate to the 'components' directory.",
                "Create a new file named About.js.",
                "Import 'React'.",
                "Create an array of skills (e.g., HTML, CSS, JavaScript, etc.).",
                "In return statement: Create a section element for the about content. Add a heading for the About section. Add a paragraph describing yourself. Create a subsection for skills. Use an unordered list to display skills dynamically.",
                "Export the 'About' component for use in other parts of the app.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Portfolio Component",
          titleDescription: "Portfolio.js",
          sections: [
            {
              descriptions: [
                "Navigate to the 'components' directory.",
                "Create a new file named Portfolio.js.",
                "Import 'React' and 'useState'.",
                "Create a state to track the selected filter.",
                "Create an array of projects with properties like id, title, category, and image URL.",
                "Filter the projects based on the selected filter.",
                "In return statement: Create a section element for the portfolio content. Add a heading for the Portfolio section. Add buttons for filtering projects (All, Web, Mobile, Design). Create a grid to display the filtered projects. Use project data to dynamically generate project cards.",
                "Export the 'Portfolio' component for use in other parts of the app.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Contact Component",
          titleDescription: "Contact.js",
          sections: [
            {
              descriptions: [
                "Navigate to the 'components' directory.",
                "Create a new file named Contact.js.",
                "Import 'React' and 'useState'.",
                "Create a state to manage form data (name, email, message).",
                "Define functions to handle form changes and form submission.",
                "In return statement: Create a section element for the contact content. Add a heading for the Contact section. Create a form with input fields for name, email, and message. Add a submit button.",
                "Export the 'Contact' component for use in other parts of the app.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Footer Component",
          titleDescription: "Footer.js",
          sections: [
            {
              descriptions: [
                "Navigate to the 'components' directory.",
                "Create a new file named Footer.js.",
                "Import 'React'.",
                "In return statement: Create a footer element. Add a paragraph with copyright information. Add links to social media profiles (GitHub, LinkedIn, Twitter).",
                "Export the 'Footer' component for use in other parts of the app.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Setup Routing",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Ensure you are in the src directory of your project.",
                "Create a new file named App.js if it doesn't already exist.",
                "Import React from 'react'.",
                "Import BrowserRouter, Routes, and Route from 'react-router-dom'.",
                "Import all the components you created: Navbar, Home, About, Portfolio, Contact, and Footer.",
                "Wrap the entire application inside the BrowserRouter component to enable routing.",
                "Include the Navbar component at the top so it appears on all pages.",
                "Use the Routes component to define different Route elements for each page (Home, About, Portfolio, Contact).",
                "Set the path for each route to match the desired URL (e.g., '/', '/about', '/portfolio', '/contact').",
                "Set the element for each route to the corresponding component (e.g., Home, About, Portfolio, Contact).",
                "Include the Footer component at the bottom so it appears on all pages.",
                "Export the App component as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Add Styles",
          sections: [
            {
              descriptions: [
                "Create a 'styles' directory inside the 'src' folder.",
                "Add necessary CSS files to style your components.",
                "Import these CSS files into your respective component files.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Testing and Final Adjustments",
          sections: [
            {
              descriptions: [
                "Run your project using 'npm start'.",
                "Test all the routes and components to ensure they are working as expected.",
                "Make any final adjustments to styles and functionality.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/xz4mnz?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson41.webp"),
    },
    {
      taskId: "Fruit-Carousel",
      taskTitle: "Fruit Carousel",
      introduction:
        "Fruit Carousel is an interactive image carousel component that showcases a variety of fruit images. Users can navigate through the carousel using scroll gestures or navigation buttons, with a dynamic progress bar indicating the current slide position.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your Project",
          sections: [
            {
              descriptions: [
                "Use Create React App or any other React setup to initialize your project.",
                "Open a terminal and run 'npx create-react-app my-carousel-app'.",
                "If you don't have them already, install the packages you need using npm.",
                "For instance, run npm install in your project directory.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create a New Component File",
          titleDescription: "Carousel.js",
          sections: [
            {
              descriptions: [
                "Navigate to your 'src' folder.",
                "Create a file named Carousel.js.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Define the Component Structure",
          sections: [
            {
              descriptions: [
                "At the top of Carousel.js, import React, and the hooks useState, useEffect, and useCallback from the react library.",
                "Create a functional component named Carousel. This component will receive 'items' as a prop, which is an array of objects representing each carousel item.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Initialize State",
          sections: [
            {
              descriptions: [
                "'activeIndex': Use 'useState' to define this state variable, initializing it to '1'. This will track the index of the currently active item.",
                "'visibleItems': Define another state variable to hold the items currently visible in the carousel. Initialize it as an empty array.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Handle Visible Items",
          sections: [
            {
              descriptions: [
                "Create a function named 'updateVisibleItems' that takes 'index' as a parameter.",
                "Compute the indices for the previous, current, and next items, accounting for circular navigation (wrap-around using modular arithmetic).",
                "Set 'visibleItems' to an array containing the previous, current, and next items.",
                "Use 'useCallback' to memoize 'updateVisibleItems' so it only changes when 'items' changes.",
                "Use 'useEffect' to call 'updateVisibleItems' whenever 'activeIndex' changes. This ensures the visible items are updated accordingly.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Add Navigation Logic",
          sections: [
            {
              descriptions: [
                "'nextSlide': Define a function to increment 'activeIndex' and handle wrap-around to the beginning of the list.",
                "'prevSlide': Define a function to decrement 'activeIndex' and handle wrap-around to the end of the list.",
                "Use 'useCallback' to memoize 'nextSlide' and 'prevSlide' functions so they only re-create when 'items.length' changes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Handle Scrolling",
          sections: [
            {
              descriptions: [
                "Define a function named 'handleScroll' that determines scroll direction and calls either 'nextSlide' or 'prevSlide' accordingly.",
                "Use 'useCallback' to memoize 'handleScroll' so it doesn't get re-created unnecessarily.",
                "Use 'useEffect' to attach a 'wheel' event listener to the carousel container.",
                "Ensure the event listener is removed when the component unmounts to avoid memory leaks.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Render the Carousel Items",
          sections: [
            {
              descriptions: [
                "Inside the return statement of the component, map over 'visibleItems' to render each item.",
                "Assign a unique 'key' to each item, and conditionally apply CSS classes to indicate the item's position (e.g., active, prev, next).",
                "Attach an 'onClick' event handler to each item that updates 'activeIndex' to the index of the clicked item.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Add Navigation Buttons",
          sections: [
            {
              descriptions: [
                "Add two buttons for navigation: one for moving to the previous slide and one for moving to the next slide.",
                "Attach the 'prevSlide' and 'nextSlide' functions to the 'onClick' event handlers of these buttons.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Add a Progress Bar",
          sections: [
            {
              descriptions: [
                "Add a progress bar element below or above the carousel items.",
                "Style the progress bar to visually indicate the current slide position based on 'activeIndex'. Adjust its width proportionally to the total number of items.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Add Styles",
          sections: [
            {
              descriptions: [
                "Inside the src folder, create a new CSS file named Carousel.css.",
                "Add styles for the carousel container, items, navigation buttons, and progress bar.",
                "Use appropriate class names in the JSX of your 'Carousel' component to apply these styles.",
                "Import the Carousel.css file into your Carousel.js file.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Use the Carousel Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Open the App.js file and import the Carousel component.",
                "Define an array of objects representing the items you want to display in the carousel. Each object should include properties like 'title', 'num', and 'img'.",
                "Pass the array of items as a prop to the Carousel component in your App component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 13: Test the Component",
          sections: [
            {
              descriptions: [
                "Start your React development server by running 'npm start'.",
                "Open your browser and navigate to http://localhost:3000 to see your carousel in action.",
                "Ensure that the navigation buttons work correctly.",
                "Check that the items update appropriately when scrolled using the mouse wheel.",
                "Verify that clicking on an item updates the active index.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/3k8v5w?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson42.webp"),
    },
    {
      taskId: "FitLife-Website",
      taskTitle: "FitLife Website",
      introduction:
        "FitLife is a modern and dynamic fitness website designed to provide personalized fitness programs, expert trainer insights, and seamless user interaction. With a focus on engaging visuals and smooth navigation, FitLife aims to inspire and support users on their fitness journey.",

      steps: [
        {
          stepTitle: "Step 1: Setup React Application",
          sections: [
            {
              descriptions: [
                "Run 'npx create-react-app your-app-name' in your terminal.",
                "Navigate to the project directory using 'cd your-app-name'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Install Required Dependencies",
          sections: [
            {
              descriptions: [
                "Run 'npm install react-router-dom'.",
                "Run 'npm install react-slick slick-carousel'.",
                "Run 'npm install @fortawesome/fontawesome-free'. Make sure you add <link> in your index.html file",
                "Run 'npm install react-scroll'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create Navbar Component",
          titleDescription: "Navbar.js",
          sections: [
            {
              descriptions: [
                "File Location: src/components/Navbar.js",
                "Create a functional component named 'Navbar'.",
                "Import 'useState' and 'useEffect' from React for managing state and side effects.",
                "Import 'Link' from 'react-scroll' for smooth scrolling links.",
                "Create state variables 'isNavOpen' (to handle the toggle state of the navbar in mobile view) and 'isScrolled' (to apply a sticky effect on scroll).",
                "Set up an event listener for the window's scroll event inside 'useEffect'.",
                "Create a function to update 'isScrolled' based on the window's scroll position.",
                "Remove the event listener in the cleanup function of 'useEffect'.",
                "Define a 'nav' element with conditional class names based on 'isScrolled'.",
                "Include a brand logo wrapped in a 'Link' component for scrolling to the home section.",
                "Add a button for the hamburger menu to toggle 'isNavOpen'.",
                "Create a 'div' for the collapsible navbar content with conditional class names based on 'isNavOpen'.",
                "Inside the 'div', add 'ul' with 'li' elements for navigation links to different sections.",
                "Write CSS to style the navbar, making it responsive and adding a sticky effect.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create HeroSection Component",
          titleDescription: "HeroSection.js",
          sections: [
            {
              descriptions: [
                "File Location: src/components/HeroSection.js.",
                "Create a functional component named 'HeroSection'.",
                "Import 'Link' from 'react-scroll' for the call-to-action button.",
                "Define a 'div' element with a class 'hero-section'.",
                "Add a 'video' element for the background video.",
                "Create a 'div' for the content, including a heading, a paragraph, and a 'Link' button for smooth scrolling to the contact section.",
                "Include a 'div' with a 'Link' element for smooth scrolling to the about section, representing the scroll-down indicator.",
                "Write CSS to style the hero section, ensuring the video covers the entire background and the content is centered and visually appealing.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create AboutSection Component",
          titleDescription: "AboutSection.js",
          sections: [
            {
              descriptions: [
                "File Location: src/components/AboutSection.js.",
                "Create a functional component named 'AboutSection'.",
                "This function has an empty body. Next steps must be achieved in return statements.",
                "Define a 'section' element with an id 'about' and class 'about-section'.",
                "Add a 'div' with a class 'container' to center the content.",
                "Create a 'h2' element for the section heading.",
                "Add a 'div' with a class 'about-cards' to contain the service cards.",
                "Inside the 'about-cards' div, create multiple 'div' elements with a class 'about-card', each containing an icon, a 'h3' element for the service title, and a 'p' element for the service description.",
                "Write CSS to style the about section and cards, ensuring they are visually appealing and responsive.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create TrainersSection Component",
          titleDescription: "TrainersSection.js",
          sections: [
            {
              descriptions: [
                "File Location: src/components/TrainersSection.js.",
                "Create a functional component named 'TrainersSection'.",
                "Import 'Slider' from 'react-slick' and the necessary CSS files for the carousel.",
                "Define the settings for the carousel, including properties like 'dots', 'infinite', 'speed', 'slidesToShow', 'slidesToScroll', and responsive breakpoints.",
                "Define a 'section' element with an id 'trainers' and class 'trainers-section'.",
                "Add a 'div' with a class 'container' to center the content.",
                "Create a 'h2' element for the section heading.",
                "Add the 'Slider' component and map through the trainers' data to generate 'div' elements for each trainer card.",
                "Each trainer card should contain an 'img' element for the trainer's image, a 'div' for trainer info, including the trainer's name, a 'p' element for the trainer's role, and a 'div' for social media links.",
                "Write CSS to style the trainers section and cards, ensuring the carousel is visually appealing and responsive.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Create ContactForm Component",
          titleDescription: "ContactForm.js",
          sections: [
            {
              descriptions: [
                "File Location: src/components/ContactForm.js.",
                "Create a functional component named 'ContactForm'.",
                "Import 'useState' from React for managing form data and submission state.",
                "Create state variables for form data (name, email, message) and a submission state (isSubmitted).",
                "Define 'handleChange' function to update form data state on input change.",
                "Define 'handleSubmit' function to handle form submission, prevent default form behavior, log form data, and set 'isSubmitted' to 'true'.",
                "Define a 'section' element with an id 'contact' and class 'contact-section'.",
                "Add a 'div' with a class 'container' to center the content.",
                "Create a 'h2' element for the section heading.",
                "Conditionally render a success message or the form based on 'isSubmitted'.",
                "Define the form structure with 'div' elements for each form group (input fields for name, email, and a textarea for the message).",
                "Add a submit button to the form.",
                "Write CSS to style the contact form and success message, ensuring they are visually appealing and responsive.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Create Footer Component",
          titleDescription: "Footer.js",
          sections: [
            {
              descriptions: [
                "File Location: src/components/Footer.js.",
                "Create a functional component named 'Footer'.",
                "Import 'Link' from 'react-scroll' for smooth scrolling.",
                "This function has an empty body. Next steps must be achieved in return statements.",
                "Define a 'footer' element with a class 'footer'.",
                "Add a 'div' with a class 'container' to center the content.",
                "Create 'div' elements for footer content sections: brand info, quick links, and newsletter subscription.",
                "In the quick links section, use 'Link' components for smooth scrolling to different sections.",
                "In the newsletter section, create a form with an input field for email and a submit button.",
                "Add a 'div' for social media icons, including links to social platforms.",
                "Add a 'div' for the footer bottom content, including a copyright notice and a back-to-top button using a 'Link' component.",
                "Write CSS to style the footer, ensuring it is visually appealing and responsive.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Assemble Components in App Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "File Location: src/App.js.",
                "Import BrowserRouter from react-router-dom.",
                "Wrap the entire return statement in App with BrowserRouter.",
                "Import all created components: Navbar, HeroSection, AboutSection, TrainersSection, ContactForm, and Footer.",
                "Inside the div with class App, arrange the imported components in the following order: <Navbar /> <HeroSection /> <AboutSection /> <TrainersSection /> <ContactForm /> <Footer />",
                "Ensure the overall layout and styling in App.css to maintain consistency and responsiveness across all sections.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Configure React Slick adn Smooth Scrolling",
          sections: [
            {
              descriptions: [
                "Import 'slick-carousel/slick/slick.css' and 'slick-carousel/slick/slick-theme.css' in TrainersSection.js.",
                "Import Link from react-scroll in components where smooth scrolling is needed.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Configure React Slick adn Smooth Scrolling",
          sections: [
            {
              descriptions: [
                "Run npm start to start the development server.",
                "Ensure each component renders correctly and functionalities like form submission, smooth scrolling, and the carousel work as expected.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/q38qf8?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson43.webp"),
    },
    {
      taskId: "FAQ-Toggle",
      taskTitle: "FAQ Toggle",
      introduction:
        "A dynamic FAQ component built with React that allows users to expand and collapse answers to frequently asked questions, providing a clean and interactive way to present information. This project demonstrates efficient state management and conditional rendering using React hooks.",

      steps: [
        {
          stepTitle: "Step 1: Setting Up Your React Project",
          sections: [
            {
              descriptions: [
                "Open your terminal and run: 'npx create-react-app faq-project' then 'cd faq-project' and to run it use this command: 'npm start'",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create the FAQ Component",
          sections: [
            {
              descriptions: [
                " In your src directory, create a new file called FAQ.js.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Import Necessary React Modules",
          sections: [
            {
              descriptions: [
                " Import the 'useState' hook from 'React' at the top of your FAQ.js file.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Set Up State for Active FAQ Item",
          sections: [
            {
              descriptions: [
                "Use 'useState' to manage the active FAQ item's index. Initialize it to 'null'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Define the FAQ Data",
          sections: [
            {
              descriptions: [
                "Each object in the array should represent a question and its corresponding answer. (You can make it in separate file if you want).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create a Function to Toggle FAQ Items",
          titleDescription:
            "This function will handle the logic for expanding or collapsing the FAQ items when a question is clicked.",
          sections: [
            {
              descriptions: [
                "Compare the passed 'index' with the current active 'index' stored in the state.",
                "If the passed 'index' matches the current active 'index', it means the same item is being clicked again, so set the active 'index' to 'null' (collapse the item).",
                "If the passed 'index' does not match the current active 'index', set the active 'index' to the passed 'index' (expand the new item).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Render the FAQ List",
          sections: [
            {
              descriptions: [
                "Use the 'map' method to iterate over the array of FAQ data.",
                "For each item in the array, generate a list item element.",
                "Wrap each FAQ item (question and answer) in a list item element.",
                "Create a button element that displays the FAQ question.",
                "Attach an 'onClick' event listener to the button, which calls the toggle function with the current 'index' as the argument.",
                "Within the list item, conditionally render the FAQ answer based on the active 'index'.",
                "Check if the current 'index' matches the active 'index'.",
                "If it matches, render the answer.",
                "If it does not match, do not render the answer (or render it in a hidden state).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Add CSS for Styling",
          sections: [
            {
              descriptions: [
                "Create a new CSS file (e.g., FAQ.css) and import it into your FAQ.js file. Add styles for the FAQ container, list, items, questions, and answers. Include styles for the active state to show and hide the answers appropriately.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Integrate the FAQ Component",
          sections: [
            {
              descriptions: [
                "Import and use the FAQ component in your App.js file.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Test Your Application",
          sections: [
            {
              descriptions: [
                "Test the FAQ component in your browser to ensure it works as expected. Each question should toggle the visibility of its answer when clicked.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/gc2rr9?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson44.webp"),
    },
    {
      taskId: "Pomodoro-Focus-Timer",
      taskTitle: "Pomodoro Focus Timer",
      introduction:
        "A simple and interactive Pomodoro Timer designed to help users improve productivity by alternating between focused work sessions and short breaks, with customizable durations and a rotating visual countdown.",

      steps: [
        {
          stepTitle: "Step 1: Set Up the Project",
          sections: [
            {
              descriptions: [
                "Ensure you have Node.js and npm installed on your system.",
                "Open your terminal and run the 'npx create-react-app pomodoro-timer' command to create a new React application.",
                "Navigate to the project directory using this 'cd pomodoro-timer' command.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create the Pomodoro Timer Component",
          sections: [
            {
              descriptions: [
                "Open the project in your preferred code editor.",
                "Navigate to the 'src' directory and create a new file named PomodoroTimer.js.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Implement the Pomodoro Timer Component",
          sections: [
            {
              descriptions: [
                "At the top of PomodoroTimer.js, ensure you import useState and useEffect from the 'react' library. These hooks are essential for managing state and side effects in your component.",
                "Declare a functional component named 'PomodoroTimer' using the ES6 arrow function syntax.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Initialize state variables using useState",
          sections: [
            {
              descriptions: [
                "'workTime': Initialize this state variable to 25, representing the work duration in minutes.",
                "'breakTime': Initialize this state variable to 5, representing the break duration in minutes.",
                "'seconds': Initialize this state variable to workTime * 60, converting the work duration to seconds.",
                "'isActive': Initialize this state variable to false, indicating whether the timer is running.",
                "'isRotating': Initialize this state variable to false, controlling the rotation effect for the timer UI.",
              ],
            },
          ],
        },
        {
          stepTitle:
            "Step 5: Set up the useEffect hook for the timer countdown",
          sections: [
            {
              descriptions: [
                "Use the useEffect hook to manage the timer's behavior.",
                "Declare a variable interval initialized to null.",
                "Check if isActive is true. If so, use setInterval to update the seconds state every second.",
                "Inside the setInterval callback, decrease the seconds state by 1.",
                "If seconds reaches 0, clear the interval, set isActive and isRotating to false.",
                "Ensure the interval is cleared when the timer is not active or the component unmounts to prevent memory leaks.",
                "Pass [isActive, seconds] as the dependency array to the useEffect hook to re-run the effect when either of these values changes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Define the reset function",
          sections: [
            {
              descriptions: [
                "Create a function named reset that stops the timer and resets the seconds state to the initial workTime value.",
                "Set isActive and isRotating to false to ensure the timer stops and the rotation effect is reset.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Define the startCountdown function",
          sections: [
            {
              descriptions: [
                "Create a function named startCountdown that accepts a duration parameter in minutes.",
                "Set the seconds state to duration * 60 to convert the duration to seconds.",
                "Set isActive to true to start the timer.",
                "Reset isRotating to false, then use setTimeout to set it to true after a short delay (e.g., 50 milliseconds) to trigger the rotation effect.",
              ],
            },
          ],
        },
        {
          stepTitle:
            "Step 8: Create functions to start work and break countdowns",
          sections: [
            {
              descriptions: [
                "Define startWorkCountdown to call startCountdown with the workTime value.",
                "Define startBreakCountdown to call startCountdown with the breakTime value.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Format time function",
          sections: [
            {
              descriptions: [
                "Create a function named formatTime that takes the seconds state as an argument.",
                "Convert seconds to minutes and remaining seconds.",
                "Return a formatted string in MM:SS format, ensuring both minutes and seconds are always two digits.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Render the Component",
          sections: [
            {
              descriptions: [
                "Use a <main> element as the container for the entire timer.",
                "Inside the <main> element, add a <h1> element with the text 'Pomodoro Timer' as the header.",
                "Create a <section> element with an id of 'pomodoro' to contain the timer display and settings.",
                "Inside the <section>, create a <div> with an id of 'clock-container' for the visual timer.",
                "Add another <div> inside 'clock-container' with an id of 'clockBody' to apply rotation effect, using the isRotating state to conditionally apply a 'rotating' CSS class.",
                "Add a <div> with an id of 'timer' to display the formatted time using the formatTime function.",
                "Create a <div> with an id of 'settings' for the input fields and buttons.",
                "Add a <label> which should have the text 'Work' and link to the input with htmlFor='work'.",
                "Add an <input> which should have an id of 'work', type of 'number', value bound to workTime, and constraints with max='60' and min='0'.",
                "Attach an onChange handler to update workTime when the input value changes.",
                "Add a <button> to start the work countdown, with an onClick handler calling startWorkCountdown.",
                "Add a <label> which should have the text 'Break' and link to the input with htmlFor='breakT'.",
                "Add an <input> which should have an id of 'breakT', type of 'number', value bound to breakTime, and constraints with max='60' and min='0'.",
                "Attach an onChange handler to update breakTime when the input value changes.",
                "Add a <button> to start the break countdown, with an onClick handler calling startBreakCountdown.",
                "Add a <button> with an id of 'reset' and type of 'reset' to reset the timer, with an onClick handler calling the reset function.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Add CSS for Rotation Effect",
          sections: [
            {
              descriptions: [
                "Add styles for the rotating effect and other styles to enhance the UI.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12:  Integrate the Component in the App and Run it",
          sections: [
            {
              descriptions: [
                "Open App.js in the src directory.",
                "Import and use the PomodoroTimer component inside the App component.",
                "In the terminal, start the development server using this 'npm start' command.",
                "Open your browser and navigate to http://localhost:3000 to see your Pomodoro Timer in action.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/m454vt?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson45.webp"),
    },
    {
      taskId: "Profolio",
      taskTitle: "Profolio",
      introduction:
        "Profolio is a dynamic and visually appealing personal portfolio website built with React and Framer Motion. It showcases professional skills, projects, and contact information with engaging animations and a sleek, modern design.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your React Project",
          sections: [
            {
              descriptions: [
                "Use create-react-app to set up a new React project.",
                "Open your terminal and run: 'npx create-react-app my-portfolio' then 'cd my-portfolio'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Install Required Packages",
          sections: [
            {
              descriptions: [
                "Run the following command: 'npm install framer-motion react-icons' to install Framer Motion which is used for animations. ",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Set Up Your Project Structure",
          sections: [
            {
              descriptions: [
                "Inside the src folder, create a components folder to organize your components.",
                "Within the components folder, create subfolders (if you want, it is not necessary) for each main component: Navbar, Header, About, Skills, Portfolio, Contact, and Footer.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create Components",
          sections: [
            {
              descriptions: [
                "For each component (Navbar, Header, About, Skills, Portfolio, Contact, Footer), create a corresponding .js or .jsx file within its folder.",
                "Example: For the Navbar, create Navbar.js in the components/Navbar folder.",
                "Implement the structure and basic functionality for each component based on your requirements.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create the About Component",
          titleDescription: "About.js",
          sections: [
            {
              descriptions: [
                "At the top of the About.js file, import 'React' from the 'react' library.",
                "Import the 'motion' component from the 'framer-motion' library.",
                "Define a functional component named 'About'.",
                "Inside the component, use the 'useState' hook to manage the state for showing more content.",
                "Return a 'motion.div' with initial, animate, and transition properties to handle the entry animation.",
                "Add a className for styling purposes and an id to link the section in the navigation.",
                "Inside the 'motion.div', set up a 'div' with a className to wrap the content.",
                "Use another div with a className for layout purposes, such as centering the text.",
                "Add a 'motion.h1' element for the main heading (e.g., 'About Me').",
                "Define its initial, animate, and transition properties for scaling animation.",
                "Add a className for styling.",
                "Add a 'motion.h3' element for the subheading (e.g., 'I'm Alex, Aspiring Web Developer').",
                "Define its initial, animate, and transition properties for fade-in effect.",
                "Add a className for styling.",
                "Add a 'motion.p' element for the main description text.",
                "Define its initial, animate, and transition properties for fade-in effect.",
                "Add a className for styling.",
                "Within the 'motion.p' element, use conditional rendering to show more text when the state is true.",
                "Add a 'motion.span' for the additional text, defining its initial, animate, and transition properties for fade-in effect.",
                "Add a 'motion.button' element to toggle the show more state.",
                "Use the 'onClick' event handler to change the state.",
                "Define hover and tap effects using 'whileHover' and 'whileTap' properties for button interaction.",
                "Add a className for styling.",
                "Add another 'motion.div' for the education and work experience content.",
                "Define initial, animate, and transition properties for fade-in effect.",
                "Add a 'div' with a className to wrap the education content.",
                "Add a heading for the education section.",
                "Use a 'motion.div' with initial, animate, and transition properties to animate the timeline items.",
                "Map through an array of education details to create multiple timeline items dynamically.",
                "Add a 'div' with a className to wrap the work experience and skills content.",
                "Add a heading for this section.",
                "Use a 'motion.div' with initial, animate, and transition properties to animate the timeline items.",
                "Create multiple timeline items for work experience and skills.",
                "At the end of the file, export the About component to use it in other parts of the application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Design the Navbar with Smooth Scroll",
          titleDescription: "Navbar.js",
          sections: [
            {
              descriptions: [
                "Import 'React' from the 'react' library.",
                "Import the 'motion' component from the 'framer-motion' library.",
                "Define a functional component named Navbar.",
                "Return a 'nav' element with a className for styling.",
                "Inside the 'nav' element, add a 'div' for the logo.",
                "Add an 'ul' element for the navigation links.",
                "Inside the 'ul' element, add 'li' elements for each navigation link (e.g., Home, About, Portfolio, Skills, Contact).",
                "Use 'motion.a' for each link, defining initial, animate, and transition properties for animations.",
                "Add 'href' attributes to link to the corresponding sections.",
                "Add a 'button' for the hamburger menu icon.",
                "Use state to manage the visibility of the mobile menu.",
                "Toggle the menu visibility using an 'onClick' event handler.",
                "Use the 'motion' component to animate the appearance of the navbar and its items.",
                "Export the Navbar component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Implement the Header Section",
          titleDescription: "Header.js",
          sections: [
            {
              descriptions: [
                "Import 'React' and 'motion' from their respective libraries.",
                "Define a functional component named Header.",
                "Return a 'header' element with a className for styling.",
                "Inside the 'header', add a 'div' to wrap the content.",
                "Add a 'motion.h1' element for the main heading.",
                "Add a 'motion.p' element for a subheading or description.",
                "Add a 'motion.button' for a call-to-action.",
                "Define initial, animate, and transition properties for each 'motion' element.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Set Up the Portfolio Section",
          titleDescription: "Portfolio.js",
          sections: [
            {
              descriptions: [
                "Import 'React' and 'motion' from their respective libraries.",
                "Define a functional component named Portfolio.",
                "Return a 'section' element with a className and id for styling and linking.",
                "Add a 'div' to wrap the content.",
                "Add a 'motion.h2' element for the section heading.",
                "Use an array to store portfolio item details.",
                "Map through the array to create 'motion.div' elements for each portfolio item.",
                "Each item should include an image, title, and description.",
                "Define initial, animate, and transition properties for each 'motion.div' element.",
                "Export the Portfolio component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Build the Skills Section",
          titleDescription: "Skills.js",
          sections: [
            {
              descriptions: [
                "Import 'React' and 'motion' from their respective libraries.",
                "Define a functional component named Skills.",
                "Return a 'section' element with a className and id for styling and linking.",
                "Add a 'div' to wrap the content.",
                "Add a 'motion.h2' element for the section heading.",
                "Use an array to store skill details.",
                "Map through the array to create 'motion.div' elements for each skill.",
                "Each skill should include an icon or image, name, and proficiency level.",
                "Define initial, animate, and transition properties for each 'motion.div' element.",
                "Export the Skills component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Develop the Contact Section",
          titleDescription: "Contact.js",
          sections: [
            {
              descriptions: [
                "Import 'React' and 'motion' from their respective libraries.",
                "Define a functional component named Contact.",
                "Return a 'section' element with a className and id for styling and linking.",
                "Add a 'div' to wrap the content.",
                "Add a 'motion.h2' element for the section heading.",
                "Inside the 'div', add a 'form' element.",
                "Add 'motion.input' elements for name, email, and subject.",
                "Add a 'motion.textarea' for the message.",
                "Add a 'motion.button' for form submission.",
                "Define initial, animate, and transition properties for each 'motion' element.",
                "Add an 'onSubmit' event handler to manage form submission.",
                "Use state to manage form input values.",
                "Export the Contact component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Implement the Footer",
          sections: [
            {
              descriptions: [
                "Import 'React' and 'motion' from their respective libraries.",
                "Define a functional component named Footer.",
                "Return a 'footer' element with a className for styling.",
                "Inside the 'footer', add a 'div' to wrap the content.",
                "Add a 'motion.p' for the copyright text.",
                "Add 'motion.a' elements for social media links.",
                "Define initial, animate, and transition properties for each 'motion' element.",
                "Export the Footer component.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Combine All Components in App.js",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Import React to use JSX.",
                "Import motion from Framer Motion to add animations.",
                "Import all the created components from the 'components' folder.",
                "Create a functional component named App.",
                "Use 'motion.div' to wrap the main 'div' and apply animations (set initial opacity to 0, animate to opacity 1, and set transition duration to 1 second).",
                "Set the 'id' for the main 'div'.",
                "Inside the App component, render the following components in order: Navbar, Header, About, Skills, Portfolio, Contact, and Footer.",
                "Use another 'motion.div' to wrap the components between Header and Footer for potential animations on the content wrapper.",
                "Export the App component as the default export.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/qjhhgd?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson46.webp"),
    },

    {
      taskId: "Animated-Progress-Loader",
      taskTitle: "Animated Progress Loader",
      introduction:
        "This React application features an engaging loading animation using Framer Motion, transitioning seamlessly from a progress indicator to the main content. It demonstrates how to create smooth, visually appealing user experiences with state management and CSS animations.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your React Project",
          sections: [
            {
              descriptions: [
                "If you haven't already, download and install Node.js from the official website.",
                "Open your terminal.",
                "Run 'npx create-react-app progress-loader'.",
                "Navigate into your project directory by running 'cd progress-loader'.",
                "In the terminal, run npm install 'framer-motion'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Implement the App Component",
          sections: [
            {
              descriptions: [
                "Open src/App.js.",
                "Ensure that you import 'useState' and 'useEffect' from React to manage the component's state and lifecycle.",
                "Import 'motion' and 'AnimatePresence' from Framer Motion to handle animations.",
                "Create a state variable called 'loading' initialized to 'true' to keep track of whether the content is still loading.",
                "Create a state variable called 'progress' initialized to '0' to track the loading progress percentage.",
                "Use the 'useEffect' hook to start an interval that updates the 'progress' state variable every 30 milliseconds.",
                "Inside the interval function, increment the 'progress' state by 1.",
                "When the 'progress' state reaches 100, clear the interval and set 'loading' to false.",
                "Return a cleanup function from 'useEffect' to clear the interval when the component unmounts.",
                "Wrap the main JSX structure in a 'div' with a class name like 'app-container'.",
                "Use 'AnimatePresence' to enable animations when components mount and unmount.",
                "Conditionally render either the loader or the main content based on the 'loading' state.",
                "If 'loading' is true, render a 'motion.div' for the loader.",
                "If 'loading' is false, render a 'motion.div' for the main content.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create the Loader Animation",
          sections: [
            {
              descriptions: [
                "Within the loader 'motion.div', create a circular progress indicator.",
                "Use CSS to style this circular progress component.",
                "Utilize the 'conic-gradient' CSS property to visually represent the progress based on the 'progress' state. The gradient should start from a base color and transition to another color as the progress increases.",
                "Use 'motion.div' properties to define initial, animate, and exit states for the loader.",
                "Set the initial scale to 0.8 and opacity to 0.",
                "Animate the scale to 1 and opacity to 1.",
                "On exit, animate the scale to 1.2 and opacity to 0.",
                "Inside the loader 'motion.div', add a 'div' to display the current progress percentage.",
                "Style this text to be easily readable and position it appropriately within the loader.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create the Main Content",
          sections: [
            {
              descriptions: [
                "Within the main content 'motion.div', add elements like headings and paragraphs to represent your primary content.",
                "Ensure this content is well-structured and easy to read.",
                "Use 'motion.div' properties to define the initial, animate, and transition states for the main content.",
                "Set the initial opacity to 0 and y-position (vertical position) to 20 pixels.",
                "Animate the opacity to 1 and y-position to 0.",
                "Define a transition duration to smooth out the animation effect.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Add CSS Styles",
          sections: [
            {
              descriptions: [
                "Style the .app-container to center the content vertically and horizontally.",
                "Style the loader and main content components appropriately.",
                "Import the CSS file into App.js.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Run the Application",
          sections: [
            {
              descriptions: [
                "Run 'npm start' to start the development server.",
                "Observe the loading animation and the transition to the main content once loading completes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Customize and Extend",
          sections: [
            {
              descriptions: [
                "Customize the styles and animations to fit your design preferences.",
                "Add more content to the main content section as needed.",
                "Test and refine the application to ensure smooth transitions and animations.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/d6dcwc?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson47.webp"),
    },
    {
      taskId: "Dynamic-Loader",
      taskTitle: "DynamicLoader",
      introduction:
        "DynamicLoader is a React application featuring a sophisticated animated loader that transitions smoothly into the main content, showcasing the power of Framer Motion for creating visually engaging user experiences.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your React Project",
          sections: [
            {
              descriptions: [
                "If you haven't already, download and install Node.js from the official website.",
                "Open your terminal.",
                "Run 'npx create-react-app dynamic-loader'.",
                "Navigate into your project directory by running 'cd dynamic-loader'.",
                "In the terminal, run npm install 'framer-motion'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Creating the LoaderShape Component",
          sections: [
            {
              descriptions: [
                "Ensure that you import 'useState' and 'useEffect' from React. Also import as an object 'motion' and 'AnimatePresence' from 'framer-motion'",
                "Create a functional component named 'LoaderShape' which receives 'progress' as a prop.",
                "Inside this component, return an 'svg' element with a 'className' of 'loader-shape' and a 'viewBox' attribute of '0 0 100 100'.",
                "Add a 'motion.circle' element.",
                "Set its center at 'cx=50', 'cy=50', and radius 'r=45'.",
                "Remove the fill, set the stroke color to cyan (#00ffff), and stroke width to 2.",
                "Initialize the path length to 0 and rotate to 0 degrees.",
                "Animate the path length based on the 'progress' prop (i.e., pathLength: progress / 100) and rotate to 360 degrees continuously over 4 seconds.",
                "Add another 'motion.circle' element.",
                "Set its center at 'cx=50', 'cy=50', and radius 'r=35'.",
                "Remove the fill, set the stroke color to magenta (#ff00ff), and stroke width to 4.",
                "Initialize the path length to 0 and rotate to 0 degrees.",
                "Animate the path length based on the 'progress' prop (i.e., pathLength: progress / 100) and rotate to -360 degrees continuously over 6 seconds.",
                "Add a 'motion.path' element with a path definition forming a circle (d attribute).",
                "Remove the fill, set the stroke color to green (#00ff00), and stroke width to 3.",
                "Initialize the path length to 0.",
                "Animate the path length based on the 'progress' prop.",
                "Map over an array of four elements (indices 0, 1, 2, 3) to create four 'motion.circle' elements.",
                "Set their center at 'cx=50' and 'cy=50', and radius 'r=5'.",
                "Fill color is set to white (#ffffff).",
                "Initialize their scale to 0.5 and opacity to 0.5.",
                "Animate their scale and opacity with a pulsating effect (scale: [0.5, 1, 0.5] and opacity: [0.5, 1, 0.5]), each with a 2-second duration and repeating infinitely.",
                "Apply a rotation transformation to position them around the central circle, each offset by 90 degrees.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Setting Up the Main App Component",
          sections: [
            {
              descriptions: [
                "Create a functional component named App.",
                "Use the 'useState' hook to create two state variables: 'loading' (initially set to true) and 'progress' (initially set to 0).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Managing Progress with useEffect",
          sections: [
            {
              descriptions: [
                "Inside the 'useEffect' hook, define an interval function that increments the 'progress' state by 1 every 30 milliseconds.",
                "If 'progress' reaches or exceeds 100, clear the interval and set 'loading' to 'false'.",
                "Ensure the interval is cleared when the component unmounts by returning a cleanup function from the 'useEffect' hook.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Conditional Rendering Based on Loading State",
          sections: [
            {
              descriptions: [
                "Use the 'AnimatePresence' component to handle the conditional rendering.",
                "If 'loading' is 'true', render a 'motion.div' with a 'className' of 'loader'.",
                "Inside this 'motion.div', include the 'LoaderShape' component, passing 'progress' as a prop.",
                "Add a 'motion.div' with a 'className' of 'progress-text' to display the 'progress' percentage.",
                "If 'loading' is 'false', render a different 'motion.div' with a 'className' of 'content'.",
                "Inside this 'motion.div', add an 'h1' element with the text 'Welcome' and a 'p' element with the text 'Your future awaits.'",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Adding Animation Effects",
          sections: [
            {
              descriptions: [
                "Apply initial, animate, and exit properties to the 'motion.div' containing the loader:",
                "'initial={{ opacity: 0 }}' to start with zero opacity.",
                "'animate={{ opacity: 1 }}' to fade in to full opacity.",
                "'exit={{ opacity: 0 }}' to fade out to zero opacity when exiting.",
                "Set a transition duration of 0.3 seconds for smooth transitions.",
                "Apply initial and animate properties to the 'motion.div' containing the main content:",
                "'initial={{ opacity: 0 }}' to start with zero opacity.",
                "'animate={{ opacity: 1 }}' to fade in to full opacity.",
                "Set a transition duration of 0.3 seconds for smooth transitions.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Exporting the App Component",
          sections: [
            {
              descriptions: [
                "Export the 'App' component as the default export so it can be rendered by the application.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/y58dqv?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson48.webp"),
    },
    {
      taskId: "Speech-Synth",
      taskTitle: "SpeechSynth",
      introduction:
        "SpeechSynth is a web application that converts text into speech using a React-based front end and a Node.js back end with gTTs Text-to-Speech integration. Users can input text and download the generated speech as an MP3 file with a simple and intuitive interface.",

      steps: [
        {
          stepTitle: "Step 1: Set Up the React Front End",
          sections: [
            {
              description: [
                "Use 'create-react-app' to set up a new React project.",
                "Navigate to your project directory and run the following command: 'npx create-react-app text-to-speech-app' then 'cd text-to-speech-app'.",
                "Install Axios using this command: 'npm install axios'. Axios is used to make HTTP requests from the React app to the Node.js server.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create the Text-to-Speech Component",
          titleDescription: "Front End",
          sections: [
            {
              descriptions: [
                "Open your terminal or command prompt.",
                "Change the current directory to the 'src' folder within your React project. This is where all your component files will be stored.",
                "In the 'src' directory, create a new file named TextToSpeechApp.js. This file will contain the code for your Text-to-Speech component. ( In my case I contain all my Front End code in App.js file. ).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Set Up Imports",
          sections: [
            {
              descriptions: [
                "Open TextToSpeechApp.js in your code editor.",
                "At the top of the file, import the React library.",
                "Import the 'useState' hook to manage state within the component.",
                "Import the 'useEffect' hook to perform side effects, such as updating the symbol count.",
                "Import Axios to make HTTP requests to the back-end server.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Initialize State Variables",
          sections: [
            {
              descriptions: [
                "Within the component function, use the useState hook to create three state variables:",
                "'inputText': Stores the text input by the user.",
                "'loading': A boolean indicating whether the text-to-speech generation is in progress.",
                "'symbolCount': Stores the number of characters in the 'inputText'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Implement useEffect Hook",
          sections: [
            {
              descriptions: [
                "Use the 'useEffect' hook to monitor changes to 'inputText'.",
                "Whenever 'inputText' changes, update 'symbolCount' with the length of 'inputText'.",
                "Ensure that this effect runs only when 'inputText' changes by including it in the dependency array of 'useEffect'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create Input Change Handler",
          sections: [
            {
              descriptions: [
                "Define a function to handle changes to the text input field.",
                "This function should update the 'inputText' state variable with the value from the input event.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Create the Speak Handler",
          sections: [
            {
              descriptions: [
                "Define an asynchronous function to handle the click event of the 'Generate Speech' button.",
                "Within this function, check if 'inputText' is not empty and proceed only if it contains text.",
                "Set 'loading' to 'true' to indicate that the process has started.",
                "Use Axios to send a POST request to the back-end server, including the 'inputText' as the request body.",
                "Handle the response by creating a URL from the received blob data and triggering a download.",
                "Use a try-catch block to manage errors and ensure 'loading' is set back to 'false' after the request completes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Create the JSX Structure",
          sections: [
            {
              descriptions: [
                "In the return statement of the component function, create a heading element to display the title of the app.",
                "A paragraph element to explain what the app does.",
                "A textarea element for user input, with an event handler for changes.",
                "A paragraph element to display the current symbol count.",
                "A button element to trigger the text-to-speech generation, with conditional text to show 'Processing...' when 'loading' is 'true' and 'Generate Speech' when 'loading' is 'false'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Export the Component",
          sections: [
            {
              descriptions: [
                "At the end of the file, export the component as the default export so that it can be imported and used in other parts of the application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Create the Server Script",
          titleDescription: "Back End",
          sections: [
            {
              descriptions: [
                "Open your terminal or command prompt.",
                "Change the current directory to where you want to set up the Node.js server. ( In my case I created server.js file in the root of my project, next to the package.json file. ).",
                "In the server directory, create a new file named server.js. This file will contain the code for your back-end server.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Set Up Imports",
          sections: [
            {
              descriptions: [
                "Open server.js in your code editor.",
                "Import the Express framework to create the server and handle HTTP requests.",
                "Import the CORS middleware to enable cross-origin requests from the front-end server.",
                "Import the 'fs' module to perform file system operations, such as saving and deleting files.",
                "Import the 'path' module to handle and manipulate file paths.",
                "Import the 'gtts' package to use the Google Text-to-Speech API for generating speech from text.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Initialize Express App",
          sections: [
            {
              descriptions: [
                "Create an instance of the Express app.",
                "Define a port number for the server to listen on, such as 3001.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 13: Set Up Middleware",
          sections: [
            {
              descriptions: [
                "Use the CORS middleware to allow requests from the front-end server running on a different port.",
                "Use Express's built-in middleware to parse JSON request bodies so that you can access the 'text' field from the client's request.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 14: Create Synthesize Route",
          sections: [
            {
              descriptions: [
                "Define a POST route at '/synthesize' to handle incoming text-to-speech requests.",
                "Extract the 'text' field from the request body.",
                "Create an instance of 'gtts' with the extracted text and specify the language for speech synthesis.",
                "Define a file path where the generated speech file will be saved temporarily.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 15: Generate and Send Speech File",
          sections: [
            {
              descriptions: [
                "Use the 'gtts.save' method to save the generated speech to the specified file path.",
                "Handle any errors that occur during the saving process.",
                "If the file is saved successfully, send it as a download to the client.",
                "Ensure the temporary file is deleted from the server after it has been sent to the client.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 16: Start the Server",
          titleDescription: "package.json",
          sections: [
            {
              descriptions: [
                "Create a 'start script' that runs both the backend and frontend when you type 'npm start' in the terminal.",
                "Ensure you have 'concurrently' installed as a dev dependency.",
                "Open your package.json file.",
                "Find the 'scripts' section.",
                "Include 'client': 'react-scripts start' in the 'scripts' section to ensure the frontend server can be started with 'npm run client'.",

                "Include 'build': 'react-scripts build' in the 'scripts' section to ensure the frontend server can be started with 'npm run client'.",
                "Add a start script: 'concurrently 'npm run server' 'npm run client'', that uses 'concurrently' to run both the backend and frontend scripts. ( Make sure that you use double quotes in package.json file. ).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 17: Bonus Step",
          sections: [
            {
              descriptions: [
                "Install Nodemon using this command: 'npm install --save-dev nodemon'. ",
                "'nodemon' is a useful tool for development as it automatically restarts your Node.js server whenever you make changes to the code.",
                "Update your package.json and add to the 'scripts' section the following entry: 'server': 'nodemon server.js' ( Do not fotget to use double quotes in the package.json file. ).",
                "Update your package.json and add to the 'scripts' section the following entry: 'client': 'react-scripts start' ( Do not fotget to use double quotes in the package.json file. ).",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/c6f9lk?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson49.webp"),
    },
    {
      taskId: "Smooth-Scroll-Navigator",
      taskTitle: "SmoothScroll Navigator",
      introduction:
        "SmoothScroll Navigator is a React application that features a dynamic navigation bar with smooth scrolling and automatic section highlighting. This project demonstrates an intuitive user interface, enhancing the user experience by visually guiding them through different sections of the webpage.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your Project",
          sections: [
            {
              descriptions: [
                "Initialize your React project if you haven't already. You can do this using Create React App: 'npx create-react-app scroll-navigation'.",
                "Install react-scroll package: 'npm install react-scroll'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create Your Sections Array",
          titleDescription:
            "Define an array of section objects. Each object should include:",
          sections: [
            {
              descriptions: [
                "'id': Unique identifier for the section.",
                "'label': Name to be displayed in the navigation.",
                "'height': Minimum height for the section.",
                "'icon': Icon to be displayed in the navigation.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Implement the Scroll Logic",
          sections: [
            {
              descriptions: [
                "Use 'useState' to create a state variable for the active index ('activeIndex').",
                "Use 'useState' to create a state variable for the current scroll position ('scrollY').",
                "Use 'useEffect' to add a scroll event listener to the window.",
                "In the scroll event handler, get the current scroll position ('window.scrollY').",
                "Loop through each section and compare the current scroll position with the top offset of each section.",
                "Use 'element.offsetTop' to get the vertical position of each section.",
                "Update 'activeIndex' based on the current scroll position relative to section positions.",
                "Set the state variables ('scrollY' and 'activeIndex') inside the scroll event handler.",
                "Ensure the scroll event listener is cleaned up when the component unmounts.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Handle Click Events for Navigation",
          titleDescription: "Create Click Handler Function",
          sections: [
            {
              descriptions: [
                "Define a function that takes an index and a section ID as parameters.",
                "Update 'activeIndex' to the index of the clicked navigation item.",
                "Use 'scroller.scrollTo' from 'react-scroll' to scroll to the section with the provided ID.",
                "Configure 'scroller.scrollTo' with options for smooth scrolling, duration, and offset.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Build the Navigation UI",
          sections: [
            {
              descriptions: [
                "Iterate over the sections array to create a list item ('li') for each section.",
                "Attach the click handler function to each navigation item.",
                "Use the 'activeIndex' state to conditionally apply an 'active' class to the currently active navigation item.",
                "Use CSS to style the navigation bar, items, and active state.",
                "Position the navigation bar at the top or side of the page.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Build the Content Sections",
          sections: [
            {
              descriptions: [
                "Iterate over the sections array to create a 'div' for each section.",
                "Set the 'id' attribute of each 'div' to the corresponding section ID.",
                "Apply the 'height' value from each section object to the corresponding 'div' using inline styles or a CSS class.",
                "Use the 'activeIndex' state to conditionally apply an 'active' class to the currently active section.",
                "Include headings, text, and other content within each section 'div'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Add a Scroll-to-Top Button",
          sections: [
            {
              descriptions: [
                "Add a button or link element at the bottom of the page.",
                "Style the button for visibility and positioning.",
                "Attach an 'onClick' event handler to the button.",
                "Use 'scroll.scrollToTop' from 'react-scroll' to scroll smoothly to the top of the page.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Style Your Components",
          titleDescription: "",
          sections: [
            {
              descriptions: [
                "Navigation bar and items.",
                "Active states for both navigation and sections.",
                "Content sections to ensure proper layout and spacing.",
                "Scroll-to-top button for visibility and functionality.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Test Your Application",
          sections: [
            {
              descriptions: [
                "Navigation bar highlights the correct section as you scroll.",
                "Clicking on a navigation item smoothly scrolls to the correct section.",
                "Scroll-to-top button functions correctly.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/6wnq7t?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson50.webp"),
    },
    {
      taskId: "Tesla-Experience",
      taskTitle: "Tesla Experience",
      introduction:
        "Tesla Experience is a sleek and engaging web application that presents Tesla's innovative electric vehicles, featuring detailed model information and immersive animations. Navigate through Tesla's offerings and discover the unique advantages of each model with an intuitive and visually appealing interface.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your Project",
          sections: [
            {
              descriptions: [
                "Use 'create-react-app' to set up your React project.",
                "Navigate to your project directory and open it in your code editor.",
                "Install the necessary packages: 'react-router-dom' for routing and 'framer-motion' for animations.",
                "Organize your project directory to include components, data, and assets folders.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Set Up Routing",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Import BrowserRouter, Route, and Routes from react-router-dom.",
                "Import 'motion' from 'framer-motion'.",
                "Import the Header, Home, Model, and Footer components.",
                "Import the 'models' data from your data file.",
                "Wrap the entire application in the 'BrowserRouter' component to enable routing.",
                "Include the 'Header' component at the top of the main component layout.",
                "Use the 'Routes' component to define the routing logic.",
                "Place the 'Footer' component at the bottom of the main component layout.",
                "Inside the 'Routes' component, define a 'Route' for the home page with the path set to '/'.",
                "Set the element of this route to the 'Home' component.",
                "Loop through the 'models' data array to create a dynamic route for each car model.",
                "For each model in the 'models' array, define a 'Route' with the path set to the 'model.path'.",
                "Use a unique 'key' for each Route, typically the 'index' of the model in the array or a unique identifier.",
                "Set the element of each route to the 'Model' component wrapped in a 'motion.div' to add animations.",
                "Wrap the Model component inside a 'motion.div' to apply animations.",
                "Set the initial animation state for 'motion.div' to have 'opacity: 0' and 'y: 50' (slightly below its final position).",
                "Define the animate state to transition to 'opacity: 1' and 'y: 0' (its final position).",
                "Configure the transition duration for the animation, for example, 0.8 seconds.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create Data File",
          titleDescription: "models.js",
          sections: [
            {
              descriptions: [
                "In the data directory, create a file named models.js.",
                "Inside this file, define an array of objects, where each object represents a Tesla model.",
                "Include properties such as path, backgroundImage, modelName, speed, topSpeed, range, price, and description.",
                "Export this array as the default export.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create Header Component",
          titleDescription: "Header.js",
          sections: [
            {
              descriptions: [
                "Import 'React': Required to use React functionality and JSX syntax.",
                "Import 'Link' and 'useLocation' from 'react-router-dom': 'Link' is used for navigation, and 'useLocation' provides information about the current URL.",
                "Import 'motion' from 'framer-motion': Used to add animations to components.",
                "Define the 'Header' component using a function.",
                "Call 'useLocation' to access the current URL path. This will help in determining which menu item is active.",
                "Wrap in 'motion.div': 'Use motion.div' to apply animation to the entire header component.",
                "Set Initial Animation State: Define the initial state of the header (e.g., y: -100 for vertical position and opacity: 0 for invisibility).",
                "Define Animated State: Set the final state (e.g., y: 0 for the final position and opacity: 1 for full visibility).",
                "Configure Transition: Specify the transition duration (e.g., duration: 0.5 seconds).",
                "Add 'nav' Element: Include a <nav> element to contain the navigation links.",
                "Apply 'motion' Animation: Wrap the <nav> element in a 'motion.div' to animate it.",
                "Create Logo Link: Use 'motion.a' to animate the logo link.",
                "Set Hover Animation: Define hover effects (e.g., scale: 1.1 to enlarge the logo slightly).",
                "Add Logo Image: Use an <img> tag to display the logo image with appropriate 'src' and 'alt' attributes.",
                "Add Unordered List: Use an <ul> element for navigation links.",
                "Apply motion Animation: Wrap the <ul> element in 'motion.div' for animations.",
                "Create a list item <li> with 'motion' animation.",
                "Use 'Link' to navigate to the home page (to=" / ").",
                "Add a conditional class (active) based on the current path to highlight the active page.",
                "Iterate over the 'models' array to create links for each car model.",
                "Use 'map' to create list items <li> for each model.",
                "Apply 'motion' animation to each <li>.",
                "Use 'Link' to navigate to each model's path (to={model.path}).",
                "Apply a conditional class (active) to highlight the current model page.",
                "Use 'motion.a' to animate the button.",
                "Set hover effects (e.g., scale: 1.1 to enlarge and backgroundColor: '#c01118' to change color).",
                "Include text or label for the button (e.g., 'Reserve Now').",
                "Use 'export default Header'; to make the Header component available for import in other parts of the application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Define Home Component",
          titleDescription: "Home.js",
          sections: [
            {
              descriptions: [
                "Import 'React': Required to use React functionality and JSX syntax.",
                "Import 'motion' and 'useAnimation' from 'framer-motion': 'motion' is used for animations, and use'A'nimation provides programmatic control over animations.",
                "Create a Functional Component: Define the 'Home' component using a function.",
                "Initialize Animation Controls: Use 'useAnimation' to create animation control methods.",
                "Use 'useEffect' Hook: Apply the 'useEffect' hook to start animations when the component mounts.",
                "Define Animation Effects: Use 'controls.start' to animate the 'y' position and 'opacity' of the component.",
                "Wrap in 'motion.div': Use 'motion.div' to apply animation to the entire 'Home' component.",
                "Set Initial Animation State: Define the initial state of the 'motion.div' (e.g., y: 50 for vertical position and opacity: 0 for invisibility).",
                "Define Animated State: Set the final state (e.g., y: 0 for the final position and opacity: 1 for full visibility).",
                "Configure Transition: Specify the transition 'duration' and 'delay' (e.g., duration: 0.8 seconds and delay: 0.2 seconds).",
                "Add Intro Section: Use an HTML <section> element with a class name of 'intro' to group 'introductory' content.",
                "Animate Heading (h1): Wrap the <h1> element in a 'motion.h1' to apply animations.",
                "Set initial animation state (e.g., y: -50, opacity: 0).",
                "Define animated state (e.g., y: 0, opacity: 1).",
                "Specify transition details (e.g., duration: 0.8 seconds, delay: 0.4 seconds).",
                "Animate Paragraph (p): Wrap the <p> element in a 'motion.p' to apply animations.",
                "Set initial animation state (e.g., y: 50, opacity: 0).",
                "Define animated state (e.g., y: 0, opacity: 1).",
                "Specify transition details (e.g., duration: 0.8 seconds, delay: 0.6 seconds).",
                "Add Features Section: Use an HTML <section> element with a class name of 'features' to group 'feature-related' content.",
                "Animate Subheading (h2): Wrap the <h2> element in a 'motion.h2' to apply animations.",
                "Set initial animation state (e.g., y: -50, opacity: 0).",
                "Define animated state (e.g., y: 0, opacity: 1).",
                "Specify transition details (e.g., duration: 0.8 seconds, delay: 0.4 seconds).",
                "Add a container <div> with a class name of 'feature-cards' to group 'individual feature' cards.",
                "Animate Feature Cards: Use 'motion.div' for each feature card.",
                "Set initial animation state (e.g., y: 50, opacity: 0).",
                "Define animated state (e.g., y: 0, opacity: 1).",
                "Specify transition details (e.g., duration: 0.8 seconds, with increasing delays for each card).",
                "Add Test Drive Section: Use an HTML <section> element with a class name of 'test-drive' to group the test 'drive-related' content.",
                "Animate Subheading (h2): Wrap the <h2> element in a 'motion.h2' to apply animations.",
                "Set initial animation state (e.g., y: -50, opacity: 0).",
                "Define animated state (e.g., y: 0, opacity: 1).",
                "Specify transition details (e.g., duration: 0.8 seconds, delay: 0.4 seconds).",
                "Animate Paragraph (p): Wrap the <p> element in a 'motion.p' to apply animations.",
                "Set initial animation state (e.g., y: 50, opacity: 0).",
                "Define animated state (e.g., y: 0, opacity: 1).",
                "Specify transition details (e.g., duration: 0.8 seconds, delay: 0.6 seconds).",
                "Create Booking Button: Wrap the <a> element (styled as a button) in a 'motion.a' to apply animations.",
                "Set initial animation state (e.g., y: 50, opacity: 0).",
                "Define animated state (e.g., y: 0, opacity: 1).",
                "Specify transition details (e.g., duration: 0.8 seconds, delay: 0.8 seconds).",
                "Define hover effects (e.g., scale: 1.1 and backgroundColor: '#c01118').",
                "Export Component: Use 'export default Home'; to make the 'Home' component available for import in other parts of the application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Implement Model Component",
          titleDescription: "Model.js",
          sections: [
            {
              descriptions: [
                "Import 'React': Required to use React functionality and JSX syntax.",
                "Import 'motion' from 'framer-motion': Allows for animations and transitions within the component.",
                "Create a Functional Component: Define the 'Model' component using a function that receives props (backgroundImage, modelName, speed, topSpeed, range, price, description).",
                "Wrap in 'motion.div': Use 'motion.div' for the main container of the 'Model' component.",
                "Set Background Image: Apply a background image using inline styles.",
                "Define Initial Animation State: Set the initial state for 'opacity' (e.g., opacity: 0).",
                "Define Animated State: Set the final state for 'opacity' (e.g., opacity: 1).",
                "Configure Transition: Specify the transition 'duration' (e.g., duration: 0.8 seconds).",
                "Add model-info Container: Use a <div> with a class name of 'model-info' to group all 'model-related' information.",
                "Wrap Model Name in 'motion.h1': Set Initial Animation State: Define the initial state for y 'position' and 'opacity' (e.g., y: -50, opacity: 0).",
                "Define Animated State: Set the final state (e.g., y: 0, opacity: 1).",
                "Configure Transition: Specify transition details (e.g., duration: 0.8 seconds).",
                "Wrap Description in 'motion.p': Set Initial Animation State: Define the initial state for 'y' position and 'opacity' (e.g., y: 50, opacity: 0).",
                "Define Animated State: Set the final state (e.g., y: 0, opacity: 1).",
                "Configure Transition: Specify transition details with a 'delay' (e.g., duration: 0.8 seconds, delay: 0.2 seconds).",
                "Add Specs Container: Use a <div> with a class name of 'specs' to group the individual specifications.",
                "Animate Speed: Wrap the speed information in a 'motion.div'.",
                "Set Initial Animation State: Define the initial state (e.g., y: 50, opacity: 0).",
                "Define Animated State: Set the final state (e.g., y: 0, opacity: 1).",
                "Configure Transition: Specify transition details with increasing 'delay' (e.g., duration: 0.8 seconds, delay: 0.4 seconds).",
                "Animate Top Speed: Wrap the top speed information in another 'motion.div'.",
                "Set Initial Animation State: Define the initial state (e.g., y: 50, opacity: 0).",
                "Define Animated State: Set the final state (e.g., y: 0, opacity: 1).",
                "Configure Transition: Specify transition details with increasing 'delay' (e.g., duration: 0.8 seconds, delay: 0.6 seconds).",
                "Animate Range: Wrap the range information in another 'motion.div'.",
                "Set Initial Animation State: Define the initial state (e.g., y: 50, opacity: 0).",
                "Define Animated State: Set the final state (e.g., y: 0, opacity: 1).",
                "Configure Transition: Specify transition details with increasing 'delay' (e.g., duration: 0.8 seconds, delay: 0.8 seconds).",
                "Wrap Price in 'motion.h2'.",
                "Set Initial Animation State: Define the initial state for 'y' position and 'opacity' (e.g., y: 50, opacity: 0).",
                "Define Animated State: Set the final state (e.g., y: 0, opacity: 1).",
                "Configure Transition: Specify transition details with a 'delay' (e.g., duration: 0.8 seconds, delay: 1.0 seconds).",
                "Wrap Button in 'motion.a.'",
                "Set Initial Animation State: Define the initial state for 'y' position and 'opacity' (e.g., y: 50, opacity: 0).",
                "Define Animated State: Set the final state (e.g., y: 0, opacity: 1).",
                "Configure Transition: Specify transition details with a 'delay' (e.g., duration: 0.8 seconds, delay: 1.2 seconds).",
                "Define Hover Effects: Use 'whileHover' to add scaling and color change effects (e.g., scale: 1.1, backgroundColor: '#c01118').",
                "Export Component: Use 'export default Model'; to make the 'Model' component available for import in other parts of the application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Create Footer Component",
          titleDescription: "Footer.js",
          sections: [
            {
              descriptions: [
                "Import 'motion' from 'framer-motion': This allows you to use animations and transitions in the Footer component.",
                "Create a Functional Component: Define the Footer component using a function.",
                "Wrap in 'motion.footer': Use 'motion.footer' to apply animations to the footer element.",
                "Define Initial Animation State: Set the initial state for 'opacity' and 'vertical position' (e.g., opacity: 0, y: 50).",
                "Define Animated State: Set the final state for 'opacity' and 'vertical position' (e.g., opacity: 1, y: 0).",
                "Configure Transition: Specify the transition 'duration' (e.g., duration: 0.8 seconds).",
                "Add Copyright Information: Include a paragraph (<p>) element displaying the copyright symbol and the current year, dynamically retrieved using 'new Date().getFullYear()'.",
                "Wrap Links in' motion.a': Use 'motion.a' for each link to apply hover effects and animations.",
                "Set Hover Effects: Define hover states such as 'scaling' and 'color change' (e.g., scale: 1.1, color: '#fff').",
                "Configure Transition: Specify the transition duration for hover effects (e.g., duration: 0.3 seconds).",
                "Link Separators: Use the pipe (|) character to separate links and ensure proper spacing between them.",
                "Add Each Link: Include individual 'motion.a' elements for each link (e.g., Privacy & Legal, Contact, Careers, Get Newsletter, Locations).",
                "Export Component: Use 'export default Footer'; to make the 'Footer' component available for import in other parts of the application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Add Styling",
          titleDescription: "index.css",
          sections: [
            {
              descriptions: [
                "Create CSS files for each component to style them according to your design.",
                "Use 'flexbox' or 'grid' for layout, and apply animations and transitions.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Test and Refine",
          sections: [
            {
              descriptions: [
                "Open your terminal and navigate to the project directory.",
                "Run the command to start your development server. This is usually done with a command like 'npm start'.",
                "Your application should open automatically in your default web browser. If it doesn't, navigate to the local development server URL, typically http://localhost:3000.",
                "Navigate through all the routes defined in your application.",
                "Click on the links in the 'Header' component to ensure each route correctly displays the 'Home' and 'Model' components.",
                "Verify that the dynamic routes for each car model display the correct data and animations.",
                "Pay close attention to the animations defined using 'motion.div' in the 'Home' and 'Model' components.",
                "Ensure that the animations for entering and leaving the components are smooth and as expected.",
                "If animations are not smooth or behave unexpectedly, adjust the initial, animate, and transition properties in your 'motion.div' components.",
                "Check the browser console for any warnings or errors and resolve them.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Deploy Your Application",
          sections: [
            {
              descriptions: [
                "Ensure that your application is free of errors and that all functionalities work as expected.",
                "In your terminal, run the command to build your application for production. This is typically done with 'npm run build'. This command will create a build folder in your project directory containing the optimized production-ready files.",
                "Select a hosting provider that suits your needs. Popular options include Netlify, Vercel, GitHub Pages, and AWS Amplify.",
                "Follow the deployment instructions provided by your chosen hosting provider.",
                "Upload the contents of the build folder to the hosting provider. This can often be done through their web interface or by using a 'CLI' tool.",
                "For example, if using Netlify or Vercel, you can link your GitHub repository, and they will automatically handle the deployment.",
                "Set up a custom domain if desired, following the instructions from your hosting provider.",
                "Ensure that your site is served over 'HTTPS' by configuring 'SSL' certificates.",
                "Set up monitoring to keep track of your site's performance and availability.",
                "Regularly update your dependencies and application to keep it secure and up-to-date.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/mtwj4n?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson51.webp"),
    },
    {
      taskId: "Dynamic-Dashboard",
      taskTitle: "Dynamic Dashboard",
      introduction:
        "Dynamic Dashboard is a modern web application that provides an interactive and responsive interface for managing and visualizing various types of data. It features a sidebar navigation, day-based tabbed views, and animated components for displaying schedules, user information, and application details.",

      steps: [
        {
          stepTitle: "Step 1: Setup React Project",
          sections: [
            {
              descriptions: [
                "Create a new React project using Create React App or any other method you prefer.",
                "Install necessary dependencies: React Router, Framer Motion, and React Icons.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create Project Structure",
          sections: [
            {
              descriptions: [
                "Organize your project structure with the following folders and files:",
                "src/components: For reusable components like Header, Sidebar, DayTabs, LoadingSpinner, Table.",
                "src/pages: For page components like Home, Users, Schedule, Info.",
                "src/App.js: Main app component to set up routing and layout.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create a Header Component",
          titleDescription: "components/Header.js",
          sections: [
            {
              descriptions: [
                "Name the component Header.",
                "Add a button element.",
                "Use a state handler (passed as a prop) for the 'onClick' event to toggle the sidebar menu state.",
                "Add a link element (<Link> from React Router or a plain <a> tag).",
                "Ensure the link opens in a new tab (using target='_blank' and rel='noopener noreferrer' if necessary).",
                "Use an icon library like 'react-icons' (e.g., FaBars).",
                "Import and include the icon inside the button element.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Implement a Sidebar Component",
          titleDescription: "components/Sidebar.js",
          sections: [
            {
              descriptions: [
                "Name the component Sidebar.",
                "Use a library like Framer Motion to animate the sidebar.",
                "Set initial, animate, and transition properties for smooth opening and closing.",
                "Use 'NavLink' from React Router for navigation links.",
                "Define links for Home, Users, Schedule, and Info pages.",
                "Add an 'onClick' handler to each link to close the sidebar.",
                "Ensure the sidebar is hidden or slides out when not open; (optional).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Define a DayTabs Component",
          titleDescription: "components/DayTabs.js",
          sections: [
            {
              descriptions: [
                "Name the component DayTabs.",
                "Use useState to manage the active day state.",
                "Define an array with the days of the week.",
                "Map through the array to create a button for each day.",
                "Set the 'onClick' event for each button to update the active day state.",
                "Apply conditional styling to indicate the active day (e.g., highlight the active button).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create a LoadingSpinner Component",
          titleDescription: "components/LoadingSpinner.js",
          sections: [
            {
              descriptions: [
                "Name the component LoadingSpinner.",
                "Install a library like 'react-loader-spinner'.",
                "Import and use the appropriate spinner component (e.g., Oval).",
                "Center the spinner in the middle of the container.",
                "Set dimensions and colors as needed.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Define a Table Component",
          titleDescription: "components/Table.js",
          sections: [
            {
              descriptions: [
                "Name the component Table.",
                "Define data for the table, either statically or dynamically generated.",
                "Create a table structure with headers.",
                "Map through the data to create rows and cells.",
                "Use Framer Motion to animate the table's appearance.",
                "Set initial, animate, and transition properties for smooth entry.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Implement a Home Component",
          titleDescription: "pages/Home.js",
          sections: [
            {
              descriptions: [
                "Name the component Home.",
                "Import and render the 'DayTabs' component at the top.",
                "Import and render the 'Table' component below the 'DayTabs'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Declare a Users Component ",
          titleDescription: "pages/Users.js",
          sections: [
            {
              descriptions: [
                "Name the component Users.",
                "Use 'useState' to manage the users state.",
                "Use 'useEffect' to simulate data fetching.",
                "Set a 'timeout' to mimic an API call and update the state with user data.",
                "Create a table structure to display the fetched user data.",
                "Map through the user data to create table rows.",
                "Render the LoadingSpinner component while the data is loading.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Create a Schedule Component",
          titleDescription: "pages/Schedule.js",
          sections: [
            {
              descriptions: [
                "Name the component Schedule.",
                "Use 'useState' to manage the schedule data.",
                "Use 'useEffect' to simulate data fetching.",
                "Set a 'timeout' to mimic an API call and update the state with schedule data.",
                "Create a layout to display the schedule data.",
                "Map through the schedule data to create schedule items.",
                "Render the LoadingSpinner component while the data is loading.",
                "Use Framer Motion to animate the appearance of schedule items.",
                "Set initial, animate, and transition properties for smooth entry.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Implement a Info Component",
          titleDescription: "pages/Info.js",
          sections: [
            {
              descriptions: [
                "Name the component Info.",
                "Use 'useState' to manage the info data.",
                "Use 'useEffect' to simulate data fetching.",
                "Set a 'timeout' to mimic an API call and update the state with info data.",
                "Create a layout to display the information data.",
                "Structure the data into sections (e.g., About, Version, Author, Features).",
                "Render the LoadingSpinner component while the data is loading.",
                "Use Framer Motion to animate the appearance of info content.",
                "Set initial, animate, and transition properties for smooth entry.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Set Up Routing",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Import BrowserRouter, Routes, and Route from React Router.",
                "Wrap the application in a 'BrowserRouter' component.",
                "Use the 'Routes' and 'Route' components to define routes.",
                "Map the Home component to the root path (/).",
                "Map the Users component to the /users path.",
                "Map the Schedule component to the /schedule path.",
                "Map the Info component to the /info path.",
                "Render the Header and Sidebar components outside the 'Routes' component.",
                "Ensure they are always visible regardless of the active route.",
                "Ensure the 'NavLink' elements in the Sidebar match the defined routes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 13: Styling",
          sections: [
            {
              descriptions: [
                "Add CSS styles for layout and design; (or simply download the styles from the link below).",
                "Ensure responsiveness and a consistent look and feel across components.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 14: Testing and Debugging",
          sections: [
            {
              descriptions: [
                "Test the application to ensure all components and routes work as expected.",
                "Debug any issues that arise during development.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/h66drj?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson52.webp"),
    },
    {
      taskId: "Quiz-Master",
      taskTitle: "Quiz Master",
      introduction:
        "React Quiz Master is an interactive quiz application designed to test and enhance your knowledge of React concepts. Featuring dynamic animations and detailed feedback, it provides a seamless and engaging learning experience for React enthusiasts.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your Project",
          sections: [
            {
              descriptions: [
                " Use 'create-react-app' to set up a new React project.",
                "Make sure you have 'framer-motion' installed to handle animations.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create the Basic Structure",
          sections: [
            {
              descriptions: [
                "Set up the App.js, quizData.js, and Quiz.js files",
                "Add any necessary CSS to style your components (e.g., App.css or Quiz.css).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Build the App Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Inside the 'src' folder of your React project, create a file named App.js.",
                "Import React, quizData and the Quiz components.",
                "Create a functional component named App.",
                "In your App component, create a 'div' with the class name App.",
                "Add a 'div' with the class name 'react-logo' for any React logo or icon you might want to display.",
                "Inside the main di'v, add a 'header' element with the class name App-header.",
                "Within the 'header', include an 'h1' tag with the text 'React Mastery Challenge' to serve as the title.",
                "Render the Quiz component inside the 'header' element.",
                "Ensure the 'App' class, 'App-header' class, and any other elements are styled to your preference (e.g., centering, spacing, font sizes).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Prepare Quiz Data",
          titleDescription: "data/quizData.js",
          sections: [
            {
              descriptions: [
                "Inside the src folder, create a data directory and a file named quizData.js.",
                "Define an array of objects, each representing a quiz question. Each object should contain:",
                "'q': The question text.",
                "'o': An array of options (strings) for the question.",
                "'a': The index of the correct option in the 'o' array.",
                "Use export default to export the quizData array from quizData.js so it can be imported into other components.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create the Quiz Component",
          titleDescription: "components/Quiz.js",
          sections: [
            {
              descriptions: [
                "Create a file named Quiz.js in the 'src' directory.",
                "Import React and hooks like 'useState' and 'useEffect', and also import 'motion' and 'AnimatePresence' from 'Framer Motion'.",
                "Set up state variables using 'useState':",
                "'currentQuestion' to track the current question index.",
                "'score' to track the user's score.",
                "'selectedOption' to store the index of the currently selected answer.",
                "'startTime' to record when the user starts answering a question.",
                "'questionTimes' to keep a record of the time taken for each question and whether the answer was correct.",
                "'quizFinished' to indicate if the quiz is over.",
                " Implement a 'useEffect' that sets 'startTime' to the current time whenever 'currentQuestion' changes or when the quiz is restarted.",
                "Inside 'useEffect' hook create a function called 'handleOptionClick' that will be triggered when a user clicks on an answer option.",
                "Within 'handleOptionClick', first check if an option is already selected or if the quiz is finished. If either condition is true, exit the function early.",
                "Capture the current time 'using Date.now()' to determine the end time of the current question. Compute the time taken by subtracting 'startTime' from this end time.",
                "Compare the index of the clicked option with the correct answer index stored in your quiz data. This determines if the user's selection was correct.",
                " If the selected option is correct, increment the 'score' state variable by 1.",
                "Update 'questionTimes' by appending an object containing:",
                "The current question index.",
                "The time taken to answer.",
                "A boolean indicating if the answer was correct.",
                "Update 'selectedOption' with the index of the clicked option.",
                "Use 'setTimeout' to introduce a brief delay (e.g., 500 milliseconds) before proceeding. This delay allows the user to see the result of their selection before moving to the next question or ending the quiz.",
                "Within 'setTimeout' check if 'currentQuestion' is less than the last question index (i.e., quizData.length -1), increment 'currentQuestion' to load the next question.",
                " If the current question is the last one, set the 'quizFinished' flag to true to indicate that the quiz has ended.",
                "Define a restartQuiz function that resets the state variables (currentQuestion, score, selectedOption, questionTimes, startTime, and quizFinished).",
                "After the quiz is finished, calculate The number of correct and incorrect answers from 'questionTimes', and the total time taken for the quiz.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Implement Animation",
          sections: [
            {
              descriptions: [
                " Import and use 'motion' and 'AnimatePresence' from 'framer-motion' to animate question transitions and option selections.",
                "Apply animations to the quiz question (fade in/out), options (scale on hover/tap), and results to enhance user experience.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Testing",
          sections: [
            {
              descriptions: [
                "Ensure that the quiz progresses correctly, animations work as expected, and the final results are displayed properly.",
                "Fix any issues that arise during testing.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Refine and Style",
          sections: [
            {
              descriptions: [
                "Make any final adjustments to styling and layout for a polished look.",
                "Ensure the application runs smoothly and efficiently.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/m7xfwj?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson53.webp"),
    },
    {
      taskId: "Profile-Popup-Animation",
      taskTitle: "Profile Popup Animation",
      introduction:
        "A React-based web application that showcases user profile information with an animated popup using Framer Motion and Font Awesome icons. The popup provides additional details about the user, featuring smooth animations for an engaging user experience.",

      steps: [
        {
          stepTitle: "Step 1: Setup Your React Environment",
          sections: [
            {
              descriptions: [
                "Open your terminal and run: 'npx create-react-app popup-animation-app'.",
                "Navigate into your project directory: 'cd popup-animation-app'.",
                "In your project directory, open terminal and run: 'npm install framer-motion @fortawesome/fontawesome-free'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Implement the Main Component",
          titleDescription: "App.js",
          sections: [
            {
              descriptions: [
                "Open src/App.js in your code editor.",
                "Import 'React' and 'useState' from 'react'.",
                "Import 'motion' and 'AnimatePresence' from 'framer-motion'.",
                "Import Font Awesome CSS.",
                "Define the component using an arrow function.",
                "Use the useS'tate hook to manage the state for showing/hiding the popup.",
                "Create a table inside the component to display user information:",
                "Use the <table>, <tbody>, <tr>, and <td> elements to structure the table.",
                "Populate the table with sample data (e.g., Name: John Doe, Age: 30, Occupation: Software Developer).",
                "Create a button inside the component that toggles the popup:",
                "Use the <motion.button> element for the button.",
                "Add 'onClick' event handler to toggle the popup state.",
                "Use Framer Motion properties (whileHover and whileTap) to add hover and tap animations.",
                "Use AnimatePresence to conditionally render the popup:",
                "Wrap the popup component with <AnimatePresence> to handle the mounting and unmounting of the popup with animations.",
                "Use a <motion.div> element for the overlay.",
                "Add initial, animate, and exit properties to handle opacity transitions.",
                "Use another <motion.div> element inside the overlay for the popup container.",
                "Add initial, animate, and exit properties to handle scale and opacity transitions.",
                "Use 'transition' property with type, stiffness, and damping for a spring effect.",
                "Create a <motion.h1> element for the title inside the popup container.",
                "Use initial, animate, and transition properties for animation.",
                "Create two <motion.p> elements for the popup paragraphs.",
                "Use initial, animate, and transition properties for animation with delays.",
                "Use a <motion.button> element for the close button.",
                "Add 'onClick' event handler to toggle the popup state.",
                "Use Framer Motion properties (whileHover and whileTap) for hover and tap animations.",
                "Add a Font Awesome icon for the close button.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Styling the Components",
          titleDescription: "index.css",
          sections: [
            {
              descriptions: [
                "Add styles for the container, table, buttons, and popup.",
                "Ensure the popup has an overlay to cover the background when displayed.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Using Font Awesome Icons",
          sections: [
            {
              descriptions: [
                "Import Font Awesome CSS in your src/App.js file.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Running the Application",
          sections: [
            {
              descriptions: [
                "In your project directory, run: 'npm start'",
                "Open your browser and navigate to http://localhost:3000 to see your application in action.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Testing and Debugging",
          sections: [
            {
              descriptions: [
                "Click the 'Read more' button to open the popup.",
                "Ensure the popup displays with animations.",
                "Click the close button to hide the popup with animations.",
                "Check the console for any errors and address them.",
                "Adjust animations and styles to your preference.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/74py2f?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson54.webp"),
    },
    {
      taskId: "Movies4u",
      taskTitle: "Movies4u",
      introduction:
        "Movies4u is a dynamic React web application that allows users to explore and search through a collection of movie-related images. The app features a responsive header with a search bar and navigation menu, a carousel slider that filters images based on user queries, and an interactive modal for viewing image details.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your Project",
          sections: [
            {
              subtitleDescription: "Initialize a React Project:",
              descriptions: [
                "Use 'create-react-app' or another tool to set up a new React project.",
              ],
            },
            {
              subtitleDescription: "Install Dependencies:",
              descriptions: [
                "Ensure you have necessary packages like 'react', 'react-dom', and 'react-scripts'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create the Header Component",
          titleDescription: "Header.js",
          sections: [
            {
              subtitleDescription: "Create the File:",
              descriptions: [
                "Navigate to your 'src/components' directory.",
                "Create a file named Header.js.",
              ],
            },
            {
              subtitleDescription: "Define the Component Structure:",
              descriptions: [
                "Add a 'div' or 'h1' element to display the logo or brand name, e.g., 'Movies4u'.",
                "Create a 'nav' element containing 'a' tags for each menu item (Home, Movies, Genre, Actors).",
                "Add an input element of type 'text' for the search bar with appropriate placeholder text.",
                "Add a 'button' element for toggling the mobile menu.",
              ],
            },
            {
              subtitleDescription: "Add State Management:",
              descriptions: [
                "Import 'useState' from React.",
                "Define state variables: 'mobileMenuOpen': to track if the mobile menu is open. 'searchQuery': to manage the search input locally.",
              ],
            },
            {
              subtitleDescription: "Implement Event Handlers:",
              descriptions: [
                "Create a function 'toggleMobileMenu' that toggles the 'mobileMenuOpen' state.",
                "Create a function 'handleSearchChange' that updates 'searchQuery' state and calls the 'onSearch' prop function with the new search query.",
              ],
            },
            {
              subtitleDescription: "Conditional Rendering:",
              descriptions: [
                "Use conditional class names to toggle the visibility of the mobile menu based on 'mobileMenuOpen'.",
              ],
            },
            {
              subtitleDescription: "Add Styling:",
              descriptions: [
                "Apply CSS classes to style the header elements (e.g., header, logo, menu, search-bar, mobile-menu).",
                "Make sure to include styles for both desktop and mobile views.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create the Slider Component",
          titleDescription: "Slider.js",
          sections: [
            {
              subtitleDescription: "Create the File:",
              descriptions: [
                "Navigate to your src/components directory.",
                "Create a file named Slider.js.",
              ],
            },
            {
              subtitleDescription: "Define the Component Structure",
              descriptions: [
                "Use a 'div' container to hold images. Map through 'filteredImages' to display each image with 'img' elements.",
                "Add 'button' elements for 'next' and 'previous' slide functionality.",
                "Add a container for thumbnails where each thumbnail corresponds to a slide.",
              ],
            },
            {
              subtitleDescription: "Add State Management",
              descriptions: [
                "Import 'useState' and 'useEffect' from React.",
                "Define state variables:",
                "'activeIndex': to track the currently active slide.",
                "'filteredImages': to store images filtered based on the search query.",
                "'isModalOpen': to control the visibility of the modal.",
                "'modalImage': to store the image currently being viewed in the modal.",
              ],
            },
            {
              subtitleDescription: "Implement Slide Navigation:",
              descriptions: [
                "Create a function 'nextSlide' that updates 'activeIndex' to the next image.",
                "Create a function 'prevSlide' that updates 'activeIndex' to the previous image.",
                "Use 'useEffect' to set up an interval that automatically changes the slide every 5 seconds.",
              ],
            },
            {
              subtitleDescription: "Filter Images:",
              descriptions: [
                "Use 'useEffect' to filter 'images' based on the 'searchQuery' prop and update 'filteredImages'. Ensure the active slide index is reset when the search query changes.",
              ],
            },
            {
              subtitleDescription: "Implement Modal:",
              descriptions: [
                "Create a function 'openModal' that sets 'modalImage' to the current slide and opens the modal.",
                "Create a function 'closeModal' that hides the modal and clears 'modalImage'.",
              ],
            },
            {
              subtitleDescription: "Add Styling:",
              descriptions: [
                "Apply CSS classes to style the slider, navigation buttons, thumbnails, and modal.",
                "Ensure that the slider is responsive and looks good across different screen sizes.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create the Modal Component",
          titleDescription: "Modal.js",
          sections: [
            {
              subtitleDescription: "Create the File:",
              descriptions: [
                "Navigate to your src/components directory.",
                "Create a file named Modal.js.",
              ],
            },
            {
              subtitleDescription: "Define the Component Structure:",
              descriptions: [
                "Create a 'div' with a class of 'modal-overlay' that covers the entire screen.",
                "Create a 'div' inside the overlay with a class of 'modal-content' to contain the image, title, and description.",
                "Add a 'button' element with a class of 'close-button' to close the modal.",
              ],
            },
            {
              subtitleDescription: "Implement Conditional Rendering:",
              descriptions: [
                "Use conditional rendering to only display the modal if 'isOpen' prop is 'true'.",
              ],
            },
            {
              subtitleDescription: "Implement Event Handlers:",
              descriptions: [
                "Write a function that closes the modal when clicking on the overlay or the close button.",
              ],
            },
            {
              subtitleDescription: "Add Styling:",
              descriptions: [
                "Apply CSS classes to style the modal overlay, content, and close button.",
                "Ensure that the modal is centered and has appropriate padding and margins.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create the App Component",
          titleDescription: "App.js",
          sections: [
            {
              subtitleDescription: "Create the File:",
              descriptions: [
                "Navigate to your src directory.",
                "Create a file named App.js.",
              ],
            },
            {
              subtitleDescription: "Define the Structure:",
              descriptions: [
                "Import and include the 'Header' component at the top of your component tree.",
                "Import and include the 'Slider' component below the 'Header'.",
                "Detail 2.3",
              ],
            },
            {
              subtitleDescription: "Manage State:",
              descriptions: [
                "Import 'useState' from React.",
                "Define state variable: 'searchQuery': to manage the search input state.",
                "Create a function 'setSearchQuery' to update the 'searchQuery' state.",
              ],
            },
            {
              subtitleDescription: "Handle Prop Passing:",
              descriptions: [
                "Pass the 'setSearchQuery' function to 'Header' as the 'onSearch' prop.",
                "Pass the 'searchQuery' state to 'Slider' as a prop.",
              ],
            },
            {
              subtitleDescription: "Add Styling:",
              descriptions: [
                "Apply CSS classes to the 'app-container' to ensure proper layout and styling.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Integrate Header with App",
          sections: [
            {
              subtitleDescription: "Connect Search Functionality:",
              descriptions: [
                "Ensure that when the user types in the 'Header' search input, the 'App' component's searchQuery state is updated correctly.",
              ],
            },
            {
              subtitleDescription: "Mobile Menu Handling:",
              descriptions: [
                "Confirm that the mobile menu in 'Header' operates independently but aligns with the overall design and layout of the 'App'.",
              ],
            },
            {
              subtitleDescription: "Confirm Prop Handling:",
              descriptions: [
                "Verify that 'Header' receives and uses the 'onSearch' prop correctly to update the 'searchQuery' in 'App'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Integrate Slider with App",
          sections: [
            {
              subtitleDescription: "Connect Slider to Search Query:",
              descriptions: [
                "Ensure that 'Slider' receives the 'searchQuery' prop from App and filters the images according to the search query.",
              ],
            },
            {
              subtitleDescription: "Verify Modal Functionality:",
              descriptions: [
                "Check that clicking on an image in 'Slider' correctly opens the modal with the appropriate image details.",
              ],
            },
            {
              subtitleDescription: "Confirm Prop Handling:",
              descriptions: [
                "Ensure that Slider correctly receives and uses the searchQuery prop to filter and display images.",
              ],
            },
            {
              subtitleDescription: "Ensure Layout and Styling:",
              descriptions: [
                "Make sure the layout of 'Slider' and 'Header' integrates smoothly within the 'App' component, maintaining consistent styling and responsiveness.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Handle State and Effects",
          sections: [
            {
              subtitleDescription: "Manage State:",
              descriptions: [
                "Use 'useState' for local state management (e.g., search query, active slide, modal visibility).",
              ],
            },
            {
              subtitleDescription: "Effect Hooks:",
              descriptions: [
                "Utilize 'useEffect' to handle side effects such as automatic slide transitions and search query updates.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Add Styling",
          sections: [
            {
              subtitleDescription: "CSS:",
              descriptions: [
                "Create and apply CSS classes to style your components (e.g., header, slider, modal).",
              ],
            },
            {
              subtitleDescription: "Responsive Design:",
              descriptions: [
                "Ensure your application is responsive, especially the mobile menu and slider.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Test Functionality",
          sections: [
            {
              subtitleDescription: "Verify Search Functionality:",
              descriptions: [
                "Ensure that the search input filters the images correctly.",
              ],
            },
            {
              subtitleDescription: "Check Slider Navigation:",
              descriptions: [
                "Confirm that the slider navigates correctly and auto-advances.",
              ],
            },
            {
              subtitleDescription: "Test Modal Interaction:",
              descriptions: [
                "Make sure the modal opens and closes correctly and displays the appropriate content.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 11: Optimize and Refactor",

          sections: [
            {
              subtitleDescription: "Code Review:",
              descriptions: [
                "Review your code for optimization opportunities and ensure it adheres to best practices.",
              ],
            },
            {
              subtitleDescription: "Refactor:",
              descriptions: [
                "Clean up any redundant code and ensure components are modular and reusable.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 12: Deploy",
          sections: [
            {
              subtitleDescription: "Build the Application:",
              descriptions: [
                "Use 'npm run build' or equivalent to prepare your app for deployment.",
              ],
            },
            {
              subtitleDescription: "Deploy:",
              descriptions: [
                "Choose a hosting service (e.g., Vercel, Netlify) and deploy your application.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 1,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/p94546?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson55.webp"),
    },
    {
      taskId: "Natures-Beauty",
      taskTitle: "Nature's Beauty",
      introduction:
        "Nature's Beauty is a React-based web project that showcases the elegance and tranquility of nature through a visually appealing interface. It features a responsive navigation bar, immersive content sections, and smooth interactivity to enhance the user experience.",

      steps: [
        {
          stepTitle: "Step 1: Set Up the Development Environment",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Ensure you have Node.js and 'npm' installed on your computer.",
                "Open a terminal or command prompt.",
                "Use 'npx create-react-app <project-name>' to generate a new React project.",
                "Navigate into the project directory using cd <project-name>.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Organize the Project Structure",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Create a components folder inside the src directory.",
                "Plan to create separate component files for each logical section of your HTML structure: Navbar.js, Main.js, Links.js.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Create the Navbar Component",
          titleDescription: "components/Navbar.js",
          sections: [
            {
              subtitleDescription: "Navigate to the components Folder",
              descriptions: [
                "In your project, go to the src/components directory.",
              ],
            },
            {
              subtitleDescription: "Create the Navbar.js File",
              descriptions: [
                "Create a new file named Navbar.js within the components folder.",
              ],
            },
            {
              subtitleDescription: "Define the Navbar Structure",
              descriptions: [
                "Include a 'div' with a class of 'navbar' to serve as the container for the navbar.",
                "Inside this, add another 'div' with a class of 'menu' to group the logo and hamburger menu together.",
                "Create an 'h3' element with the class 'logo' to display the text 'Nature' with a 'span' element around the word 'Beauty' to style it separately.",
                "Add a div with the class 'hamburger-menu', and inside it, create another 'div' with the class 'bar' to represent the lines of the hamburger icon.",
              ],
            },
            {
              subtitleDescription: "Implement the Menu Toggle Functionality",
              descriptions: [
                "Use React's 'useState' hook or a simple method to handle the toggle functionality.",
                "Add an 'onClick' event to the 'hamburger-menu' 'div' to toggle a class on the container 'div'. This will control the opening and closing of the menu.",
              ],
            },
            {
              subtitleDescription: "Export the Navbar Component",
              descriptions: [
                "At the bottom of Navbar.js, ensure you export the component so it can be imported into App.js.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Create the Main Component",
          titleDescription: "components/Main.js",
          sections: [
            {
              subtitleDescription: "Create the Main.js File",
              descriptions: [
                "In the 'components' folder, create a new file named Main.js.",
              ],
            },
            {
              subtitleDescription: "Set Up the Main Structure",
              descriptions: [
                "Create a 'div' with a class of 'main' to wrap the main content.",
                "Inside this, create a 'header' element to serve as the top section of your main content.",
                "Add a 'div' with the class 'overlay' inside the 'header' to darken or style the background.",
                "Inside the 'overlay', add a 'div' with the class 'inner' to center the content.",
              ],
            },
            {
              subtitleDescription: "Add the Header Content",
              descriptions: [
                "Inside the 'inner' 'div', include: An 'h2' element with a class of 'title' for the heading 'Embrace the Beauty of Nature'.",
                "Then add a 'p' element to hold the paragraph text describing nature's beauty.",
                "Create a 'button' element with a class of 'btn' that will serve as the 'Explore Nature' button.",
              ],
            },
            {
              subtitleDescription: "Export the Main Component",
              descriptions: [
                "As with Navbar.js, ensure the 'Main' component is exported at the end of the file.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create the Links Component",
          titleDescription: "components/Links.js",
          sections: [
            {
              subtitleDescription: "Create the Links.js File",
              descriptions: [
                "Inside the 'components' folder, create a new file named Links.js.",
              ],
            },
            {
              subtitleDescription: "Structure the Links Section",
              descriptions: [
                "Inside Links.js, create a 'div' with the class 'links'.",
                "Inside this 'div', add a 'ul' element to hold the list of navigation links.",
              ],
            },
            {
              subtitleDescription: "Add List Items for Each Link",
              descriptions: [
                "Within the 'ul', create 'li' elements for each link, such as 'Home', 'Services', 'About', and 'Contact'.",
                "Each 'li' element should contain an 'a' element with the 'href' attribute set to '#' or a relevant link. Style the links with inline 'style' props to add animation delays using the '--i' CSS variable.",
              ],
            },
            {
              subtitleDescription: "Export the Links Component",
              descriptions: [
                "Like the other components, make sure to export Links.js so it can be used in App.js.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Assemble Components in App.js",
          titleDescription: "App.js",
          sections: [
            {
              subtitleDescription: "Import the Components",
              descriptions: [
                "Open the App.js file in the src directory.",
                "Import 'Navbar', 'Main', and 'Links' at the top of the file using ES6 import syntax.",
              ],
            },
            {
              subtitleDescription: "Structure the App Component",
              descriptions: [
                "Inside the App function, structure the JSX to render the 'Navbar', 'Main', and 'Links' components.",
                "Wrap these components within a 'div' with the class 'container'. This 'div' will serve as the main wrapper for all content.",
              ],
            },
            {
              subtitleDescription: "Include Additional Elements",
              descriptions: [
                "Below the 'Main' component, add two additional 'div' elements with classes 'shadow one' and 'shadow two' to replicate any shadow effects or overlays used in the original design.",
              ],
            },
            {
              subtitleDescription: "Ensure Proper Export",
              descriptions: [
                "Confirm that App.js properly exports the App function as the default export.",
              ],
            },
            {
              subtitleDescription: "Run the Application",
              descriptions: [
                "Start the development server using 'npm start' and open the application in your browser to see the assembled components working together.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Transfer and Adapt CSS",
          titleDescription: "index.css",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Copy your original CSS into the App.css file within the src directory.",
                "Adjust the CSS classes to ensure they apply correctly to the React components.",
                "Test and modify any class selectors or styles to match the React component structure.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Add Interactivity with JavaScript",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Set Up State Management for Menu Toggle",
              descriptions: [
                "In Navbar.js, import the 'useState' hook from React.",
                "Create a state variable (e.g., isMenuOpen) to track whether the menu is open or closed.",
                "Set the initial state to 'false' (menu closed).",
                "Use the 'setState' function (e.g., setIsMenuOpen) to toggle the state between 'true' and 'false' when the hamburger menu is clicked.",
              ],
            },
            {
              subtitleDescription: "Toggle CSS Classes Based on State",
              descriptions: [
                "Use a conditional expression within the 'className' prop of the container 'div' in App.js or Navbar.js.",
                "If 'isMenuOpen' is 'true', apply an additional class like 'active' to the container 'div', which can control the visibility of the menu in your CSS.",
                "Ensure the CSS for the 'active' class modifies the layout or visibility of the elements as intended.",
              ],
            },
            {
              subtitleDescription:
                "Attach the Event Handler to the Hamburger Menu",
              descriptions: [
                "Add an 'onClick' event listener to the 'hamburger-menu' 'div' in Navbar.js.",
                "The event handler should call the function that toggles the 'isMenuOpen' state.",
                "This will trigger the conditional rendering or class application in the component.",
              ],
            },
            {
              subtitleDescription: "Animate the Menu Transition",
              descriptions: [
                "Use CSS transitions in App.css to animate changes in properties like 'height', 'width', 'opacity', or 'transform' when the 'active' class is added or removed.",
                "Ensure the menu opens and closes with a smooth transition rather than a sudden jump.",
              ],
            },
            {
              subtitleDescription: "Handle Outside Clicks (Optional)",
              descriptions: [
                "Use an event listener to detect clicks outside the menu.",
                "In Navbar.js, use a useEffect hook to add an event listener to the document that listens for clicks.",
                "If the click is outside the menu (i.e., not on the hamburger icon or within the menu), set isMenuOpen to false.",
                "Remember to clean up the event listener in the useEffect return function to avoid memory leaks.",
              ],
            },
            {
              subtitleDescription: "Make the Button Functional (Optional)",
              descriptions: [
                "Add an 'onClick' event to the button element in Main.js.",
                "This could navigate the user to a different page, open a modal, or scroll to another section of the page.",
                "Depending on the action, you may need to implement additional logic or import navigation functions from React Router if navigating to a different route.",
              ],
            },
            {
              subtitleDescription: "Refactor for Reusability (Optional)",
              descriptions: [
                "If the toggle logic or event handling can be reused, consider abstracting it into a custom hook or utility function.",
                "This makes the component more modular and easier to manage as your application grows.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Run and Test the Application",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Start the development server using 'npm start'.",
                "Test the application in your browser to ensure everything works as expected.",
                "Debug any issues related to component rendering, CSS styling, or JavaScript interactivity.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Refine and Optimize",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Refactor code as needed for better readability or performance.",
                "Optimize the CSS and JS for responsiveness and smooth transitions.",
                "Prepare the project for deployment or further development as required.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 1,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/3tx6y3?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson56.webp"),
    },
    {
      taskId: "Captcha-Guard",
      taskTitle: "Captcha Guard",
      introduction:
        "CaptchaGuard is a simple yet effective React-based captcha validation tool that enhances security by generating random character captchas. It ensures users are not bots by verifying their input against a dynamically generated string, providing immediate visual feedback on success or failure.",

      steps: [
        {
          stepTitle: "Step 1: Project Setup",
          sections: [
            {
              subtitleDescription: "Initialize a New React Project",
              descriptions: [
                "If you haven't already, start by setting up a new React project using create-react-app. This will provide you with the necessary files and structure to build the application.",
              ],
            },
            {
              subtitleDescription: "Install Required Packages",
              descriptions: [
                "Ensure that you have the @fortawesome/react-fontawesome package installed, as it will be used for icons. You can install it using npm.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",
          titleDescription: "Create the Main Component",
          sections: [
            {
              descriptions: [
                "Start by creating a new file for your main component, typically named App.js or App.jsx, inside the src directory of your React project.",
                "Inside this file, set up a functional component using the React useState and useEffect hooks, as they will be essential for managing state and lifecycle events in your application.",
              ],
            },
            {
              subtitleDescription: "Captcha State",
              descriptions: [
                "Define a state variable to store the generated captcha string. This state will hold the captcha that the user needs to match.",
              ],
            },
            {
              subtitleDescription: "User Input State",
              descriptions: [
                "Define another state variable to capture and store the user's input. This will track what the user types into the input field.",
              ],
            },
            {
              subtitleDescription: "Message State",
              descriptions: [
                "Set up a state variable to manage feedback messages. This will be updated based on whether the user correctly matches the captcha or not.",
              ],
            },
            {
              subtitleDescription: "Success State",
              descriptions: [
                "Create a boolean state variable to indicate whether the captcha was successfully matched. This can be used to control the display of success or error messages.",
              ],
            },
            {
              subtitleDescription: "Layout Setup",
              descriptions: [
                "Inside your component, define the overall layout structure using basic HTML elements such as 'div', 'h3', 'input', and 'button'.",
                "Add a title or header for your captcha validator, which could include an icon (e.g., a robot) to make the interface more engaging.",
                "Include a section where the captcha string will be displayed prominently, ensuring it's easy for users to read and type out.",
                "Place an input field where users will enter the captcha. Make sure this input field is clearly labeled or has a placeholder to guide the user on what to do.",
                "Add at least two buttons: one for the user to submit their captcha input for verification and another to refresh or regenerate the captcha if they want a new one.",
                "Include an area below the input field and buttons to display success or error messages based on the user's input.",
              ],
            },
            {
              subtitleDescription: "Event Handling Functions",
              descriptions: [
                "Plan out functions that will handle specific user actions.",
                "A function to handle changes in the input field, updating the corresponding state variable.",
                "A function to verify the captcha when the user clicks the 'Verify' button.",
                "A function to generate a new captcha when the user clicks the 'Refresh' button.",
              ],
            },
            {
              subtitleDescription: "Use of FontAwesome Icons",
              descriptions: [
                "Import FontAwesome icons that you'll use for visual elements like the title and feedback messages. This adds a user-friendly and professional touch to your interface.",
                "Plan where each icon will be used, such as a robot icon for the title, a checkmark for success, and an exclamation mark for errors.",
              ],
            },
            {
              subtitleDescription: "Component Export",
              descriptions: [
                "Ensure your component is exported so it can be rendered by your React application. If this is the main component, it should be imported and used in the index.js or index.jsx file to render your application.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Captcha Generation Logic",
          sections: [
            {
              subtitleDescription: "Character Set Definition",
              descriptions: [
                "Decide on the characters that your captcha will use. Include a mix of uppercase letters (A-Z), lowercase letters (a-z), and digits (0-9). This variety makes the captcha more secure and challenging.",
              ],
            },
            {
              subtitleDescription: "Random Character Selection",
              descriptions: [
                "Create a function that will generate the captcha.",
                "Loop a fixed number of times (e.g., 6 times) to create a captcha of a specific length.",
                "In each iteration of the loop, randomly select one character from your predefined character set.",
                "Concatenate each selected character into a string.",
                "Optionally, add spaces between characters to enhance readability for the user.",
              ],
            },
            {
              subtitleDescription: "Captcha State Management",
              descriptions: [
                "Store the generated captcha string in a state variable. This will allow the captcha to be displayed on the UI and used for verification later.",
              ],
            },
            {
              subtitleDescription: "Captcha Display",
              descriptions: [
                "Ensure that the generated captcha is rendered prominently on the UI, perhaps using a large, bold font to make it easy to read.",
              ],
            },
            {
              subtitleDescription: "Captcha Refresh Function",
              descriptions: [
                "Create a separate function to regenerate the captcha whenever needed, such as when the user requests a new one or when they successfully complete the current one. This function should follow the same logic as the initial generation.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: User Input Handling",
          sections: [
            {
              subtitleDescription: "Input Field Creation",
              descriptions: [
                "Add an input field where users will enter the captcha text. This field should be clearly labeled to avoid confusion.",
              ],
            },
            {
              subtitleDescription: "Input State Management",
              descriptions: [
                "Use a state variable to keep track of what the user types into the input field. Update this state variable every time the user changes the input.",
              ],
            },
            {
              subtitleDescription: "Input Validation",
              descriptions: [
                "When the user submits their input (e.g., by clicking a 'Verify' button), create a function to validate the input against the generated captcha.",
                "Remove any spaces from both the user's input and the generated captcha string to ensure they are compared accurately.",
                "Check if the cleaned input matches the cleaned captcha.",
              ],
            },
            {
              subtitleDescription: "Handle Incorrect Input",
              descriptions: [
                "If the user's input does not match the captcha display an error message informing them that the captcha was incorrect.",
                "Allow the user to try again without immediately regenerating the captcha unless desired.",
                "Reset the input field so they can re-enter their attempt.",
              ],
            },
            {
              subtitleDescription: "Handle Correct Input",
              descriptions: [
                "If the user's input matches the captcha display a success message indicating that the captcha was correct.",
                "Consider triggering an automatic captcha refresh after a short delay (e.g., 2.5 seconds) so the user can proceed to the next step or try again.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Message Display and Feedback",
          sections: [
            {
              subtitleDescription: "Message State Management",
              descriptions: [
                "Use a state variable to store feedback messages. This will dynamically change depending on whether the captcha was entered correctly or incorrectly.",
              ],
            },
            {
              subtitleDescription: "Visual Feedback",
              descriptions: [
                "Create visual cues for the user.",
                "Use success indicators (like green checkmarks) when the captcha is correct.",
                "Use error indicators (like red warning signs) when the captcha is incorrect.",
                "Utilize icons from FontAwesome to enhance the visual clarity of these messages.",
              ],
            },
            {
              subtitleDescription: "Dynamic Message Display",
              descriptions: [
                "Ensure that the feedback message and corresponding icon are displayed only after the user attempts to verify the captcha.",
                "The message should be positioned close to the input field and buttons so the user sees it immediately.",
              ],
            },
            {
              subtitleDescription: "Message Clearing on New Captcha",
              descriptions: [
                "When a new captcha is generated (either manually by the user or automatically after success), clear the previous message so the user starts fresh.",
              ],
            },
            {
              subtitleDescription: "Smooth User Experience",
              descriptions: [
                "Consider adding subtle animations or transitions when showing or hiding messages to enhance the user experience.",
                "Optionally, disable the 'Verify' button after a correct input to prevent double submissions during the auto-refresh delay.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: User Interface and Styling",
          sections: [
            {
              subtitleDescription: "Design the Layout",
              descriptions: [
                "Structure your component's layout using basic HTML elements like div, h3, input, and button.",
              ],
            },
            {
              subtitleDescription: "Styling",
              descriptions: [
                "Style your application using CSS classes for various elements like the captcha display, input field, buttons, and messages. Ensure that the UI is user-friendly and accessible.",
              ],
            },
            {
              subtitleDescription: "Add Icons",
              descriptions: [
                "Use FontAwesome icons in your component for a visual touch, especially next to the captcha title and in the success/error messages.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Initialize the Captcha on Load",
          sections: [
            {
              subtitleDescription: "Use the useEffect Hook",
              descriptions: [
                "Ensure the captcha is generated as soon as the component mounts by using the useEffect hook. This will automatically call the captcha generation function when the component loads.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Testing and Final Touches",
          sections: [
            {
              subtitleDescription: "Test Functionality",
              descriptions: [
                "Manually test your application by entering different values to ensure the captcha verification works correctly.",
              ],
            },
            {
              subtitleDescription: "Edge Cases",
              descriptions: [
                "Consider edge cases like empty inputs, multiple attempts, and refresh scenarios.",
              ],
            },
            {
              subtitleDescription: "Adjust and Improve",
              descriptions: [
                "Make any necessary adjustments to improve the usability, such as handling case sensitivity or adding more visual enhancements.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 1,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/y9zdzc?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson57.webp"),
    },

    {
      taskId: "Calculator",
      taskTitle: "Calculator",
      introduction:
        "This project is a simple calculator built using React. It allows users to input numbers and basic operators, display the current expression, and calculate the result using the mathjs library. Features include adding, deleting, resetting inputs, and evaluating mathematical expressions with error handling for invalid inputs.",

      steps: [
        {
          stepTitle: "Step 1: Set Up the Project",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Use 'create-react-app' to start a new project by running npx 'create-react-app calculator-app' in your terminal.",
                "Install 'mathjs' for evaluating expressions by running 'npm install mathjs'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create the Component and State",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Inside 'src/', create a new component called Calculator.js.",
                "In this component, use the 'useState' hook to create a 'display' state. This will store the user's input and the result.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Handle Button Clicks",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Create a function 'showBtn(value)' that updates the 'display' state by appending the button value (numbers or operators) to the current display value.",
                "Pass this function to the number and operator buttons so that clicking them updates the display.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Evaluate the Expression",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Use the 'evaluate' function from 'mathjs' inside a 'calculateResult' function.",
                "When the user clicks the '=' button, the function should evaluate the current expression, convert it to a string, and update the display.",
                "Add error handling using a 'try-catch' block to show 'Error' if the expression is invalid.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Create a Reset Function",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Implement a 'resetDisplay' function to clear the 'display' state when the 'reset' button is clicked. This function should set the 'display' back to an empty string.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Implement Delete Function",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Add a 'deleteLast' function that removes the last character from the 'display'. This allows users to correct mistakes.",
                "Bind this function to a 'del' button.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Design the Calculator Layout",
          titleDescription: "",
          sections: [
            {
              subtitleDescription:
                "Use JSX to create a basic structure for the calculator:",
              descriptions: [
                "You will need a display section to show the input/result.",
                "Also, a grid of buttons for numbers (0-9), operators (+, -, *, /), a delete button (del), and other controls like reset and equal (=).",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "Loop through an array of button values to generate the buttons dynamically.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Style the Calculator",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Add a CSS file to style the calculator, ensuring the layout is clean and buttons are easy to interact with.",
                "Style the display to resemble a digital calculator, showing numbers clearly as they are entered.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Test the Application",
          titleDescription: "",
          sections: [
            {
              subtitleDescription:
                "Run your project with npm start and test all functions:",
              descriptions: [
                "Entering numbers and operators.",
                "Calculating results.",
                "Resetting and deleting entries.",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "Ensure that invalid expressions display an error message.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 1,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/rfdkfz?view=editor+%2B+preview",
      img: require("../images/ReactLesson58.webp"),
      videoLink: "",
    },

    {
      taskId: "Copy-To-Clipboard",
      taskTitle: "Copy To Clipboard",
      introduction:
        "This React project features a simple clipboard tool that allows users to copy text from a textarea to their clipboard with a single click. It provides immediate feedback by changing the button text to 'Copied!' when the copy operation is successful.",

      steps: [
        {
          stepTitle: "Step 1: Set Up Your React Project",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Ensure you have a React project set up. If not, create one using a tool like Create React App or Vite.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Install Clipboard.js",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Install the Clipboard.js library using npm command in your terminal: 'npm install clipboard'",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Import Necessary Libraries",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Import 'React', 'useState', 'useEffect', 'useRef' from React.",
                "Import the Clipboard.js library.",
                "Import any required CSS files for styling.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Initialize State and Refs",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Use 'useState' to manage the 'copied' state.",
                "Use 'useRef' to create a reference for the 'textarea' element.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Set Up Clipboard.js in useEffect",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Initialize Clipboard.js inside the 'useEffect' hook.",
                "Pass the button selector (.clipboard-button) and a function to retrieve the text to copy from the 'textarea' ref.",
              ],
            },
            {
              subtitleDescription: "Handle Success and Error Events",
              descriptions: [
                "Add event listeners for the 'success' and 'error' events of Clipboard.js.",
                "On success, update the 'copied' state to 'true' and use 'setTimeout' to revert it after 2 seconds.",
                "On error, log the error to the console.",
              ],
            },
            {
              subtitleDescription: "Clean Up",
              descriptions: [
                "Ensure you clean up Clipboard.js when the component unmounts by calling 'clipboard.destroy()'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Create the JSX Structure",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Create a container 'div' for your component.",
                "Add a card with a title and content section.",
                "Include a 'textarea' for input, referencing it with 'useRef'.",
                "Add a button with the class 'clipboard-button' and adjust its text based on the 'copied' state.",
                "Add a second 'textarea' for pasting and testing the copied content.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Add Styling",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Ensure your styles.css file contains styles for the container, card, title, textareas, and button. ",
                "Additionally, you can download the styles using the link provided below.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Export Your Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Export the component as the default export from the file.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Integrate the Component",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Use this component in your main application file or any other part of your application where you want it to appear.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/6hlym8?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson59.webp"),
      videoLink: "",
    },
    {
      taskId: "English-Dictionary",
      taskTitle: "English Dictionary",
      introduction:
        "This React dictionary app allows users to search for the meaning, phonetic transcription, example sentences, and synonyms of words using an external dictionary API. It provides a dynamic user interface with animated transitions for search results, enhancing the overall user experience.",

      steps: [
        {
          stepTitle: "Step 1: Set Up the React Project",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create the Project",
              descriptions: [
                "Use Create React App (npx create-react-app dictionary-app) to set up a new React project.",
              ],
            },
            {
              subtitleDescription: "Install Dependencies",
              descriptions: [
                "Install 'framer-motio'n using npm (npm install framer-motion).",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: Create the Main Component Structure",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Create App.js",
              descriptions: [
                "This will be your main component file where all the logic resides.",
              ],
            },
            {
              subtitleDescription: "Import React and Framer Motion",
              descriptions: [
                "Import 'useState', and 'AnimatePresence' from 'react', and 'motion' from 'framer-motion'.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 3: Set Up State Management",
          titleDescription: "Define State Variables",
          sections: [
            {
              subtitleDescription: "Use useState to initialize these states.",
              descriptions: [
                "'word': To store the user's input.",
                "'result': To store the search result fetched from the API.",
                "'infoText': To store informational messages for the user.",
              ],
            },
            {
              subtitleDescription: "State Initialization",
              descriptions: [
                "Initialize 'word' as an empty string.",
                "Initialize 'result' as 'null' since there is no result initially.",
                "Set 'infoText' with a default instructional message.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 4: Implement the API Fetching Logic",
          titleDescription: "Define the fetchApi Function",
          sections: [
            {
              subtitleDescription: "Create the fetchApi Function",
              descriptions: [
                "This function will handle the process of fetching the word's definition and related information from the dictionary API.",
                "It accepts one argument: 'word' (the word entered by the user).",
              ],
            },
            {
              subtitleDescription: "Set Informational Text",
              descriptions: [
                "Update 'infoText' to inform the user that the app is searching for the word.",
                "This gives feedback to the user that the search is in progress.",
              ],
            },
            {
              subtitleDescription: "Use the Fetch API",
              descriptions: [
                "Use the 'fetch' function to make a GET request to the dictionary API with the user-provided word.",
                "The API endpoint will look like this: 'https://api.dictionaryapi.dev/api/v2/entries/en/${word}'.",
                "This call returns a promise that resolves with the response, which is then converted to JSON.",
              ],
            },
            {
              subtitleDescription: "Check for Errors",
              descriptions: [
                "The API may return an error if the word is not found or the request fails.",
                "If the API returns an object with a 'title' property (indicating an error), update infoText to notify the user that the word was not found and set 'result' to 'null'.",
              ],
            },
            {
              subtitleDescription: "Extract Word Data",
              descriptions: [
                "If the API call is successful, extract the relevant information from the response.",
                "'wordData.word': The word itself.",
                "'phonetics': Phonetic transcription, if available (wordData.phonetics[0]?.text).",
                "'meanings': Array of meanings, extract the first definition (wordData.meanings[0].definitions[0]).",
                "Create an object to store these extracted details.",
              ],
            },
            {
              subtitleDescription: "Update the State",
              descriptions: [
                "Update the 'result' state with the extracted word data to be displayed in the UI.",
                "Clear 'infoText' since the word has been successfully fetched and processed.",
              ],
            },
            {
              subtitleDescription: "Catch Network Errors",
              descriptions: [
                "Use '.catch' to handle any network or other errors that occur during the fetch operation.",
                "Update 'infoText' to inform the user that the search failed.",
                "Set 'result' to 'null' to clear any previous search results.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 5: Handle User Interactions",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Search Button Logic",
              descriptions: [
                "Create handleSearch function.",
                "Check if the word input is not empty.",
                "Call fetchApi with the trimmed word if valid.",
                "Update infoText if the input is empty.",
              ],
            },
            {
              subtitleDescription: "Clear Button Logic",
              descriptions: [
                "Create handleRemove function.",
                "Clear the word input.",
                "Reset result to null.",
                "Reset infoText to the default instructional message.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 6: Build the JSX Structure",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Input Field",
              descriptions: [
                "Render an input element bound to word state for user input.",
                "Include an onChange event to update the word state as the user types.",
              ],
            },
            {
              subtitleDescription: "Search and Clear Buttons",
              descriptions: [
                "Render a Search button with an onClick event to trigger handleSearch.",
                "Include a Clear button (or icon) with an onClick event to trigger handleRemove.",
              ],
            },
            {
              subtitleDescription: "Info Text",
              descriptions: [
                "Display infoText in a paragraph element to provide user guidance and feedback.",
              ],
            },
            {
              subtitleDescription: "Search Results",
              descriptions: [
                "Use AnimatePresence and motion from Framer Motion to animate the search results.",
                "Render a list (ul) of results if result is not null.",
                "Display the word and its phonetic transcription.",
                "Display the definition.",
                "Display an example sentence if available.",
                "If available, display clickable synonyms that trigger a new search when clicked.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 7: Implement Animations with Framer Motion",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Wrap Results in AnimatePresence",
              descriptions: [
                "Use AnimatePresence to manage the mounting and unmounting of search result elements.",
              ],
            },
            {
              subtitleDescription:
                "Use motion components to apply animations to list items",
              descriptions: [
                "Initial state: Hidden (e.g., opacity: 0, scale: 0, x: -20).",
                "Animate to visible state (e.g., opacity: 1, scale: 1, x: 0).",
                "Define transitions for smooth animations.",
              ],
            },
            {
              subtitleDescription: "Customize Animations",
              descriptions: [
                "Adjust durations and easing for animations to match the desired look and feel.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 8: Apply Styling",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Define CSS",
              descriptions: [
                "Style the input field, buttons, and results list for a clean layout.",
                "Use flexbox or grid to arrange elements neatly.",
              ],
            },
            {
              subtitleDescription: "Integrate Animations",
              descriptions: [
                "Ensure the transitions and animations are well integrated into the UI design.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 9: Testing and Refinement",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "Test the App",
              descriptions: [
                "Test different words to ensure the app fetches and displays results correctly.",
                "Test edge cases like entering a non-existent word, using special characters, and handling network errors.",
              ],
            },
            {
              subtitleDescription: "Debug and Refine",
              descriptions: [
                "Ensure the app handles errors gracefully and provides user-friendly feedback.",
                "Make refinements to the UI and animations based on testing results.",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 10: Final Review and Deployment",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "Go through the app to check for any final improvements.",
                "Deploy the app to a hosting platform like Vercel, Netlify, or GitHub Pages to make it accessible.",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl:
        "https://codesandbox.io/embed/czpt6f?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
      img: require("../images/ReactLesson60.webp"),
      videoLink: "",
    },
  ],
};

export { tasksData, authorsData };

/* Task description example template:

----------------------REACT, js
React: [
    {
      taskId: "reacttask",
      taskTitle: "",
      introduction: "",
      task: { 
          taskDescription: "",
          estimatedTime: "", 
          requirements: [
        "",
        "",
        "",
        "",
        ],
        },
      steps: [
       {
          stepTitle: "Step 1: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 2: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 3: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 4: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 5: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 6: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 7: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 8: ",
           titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 9: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 10: ",
           titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [
                "",
                "",
                "",
              ],
            },
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      codesandboxUrl: "",
      img: require("../images/ReactLesson1.webp"),
      videoLink: '', 
    },

   
  ],  
  
  */

/*   
  
  
  BLOG TOPIC EXAMPLE
  
  const blogTopic = [
  {
    id: 1,
    image: "example.jpg",
    paragraphs: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: null, 
        isList: false 
      },
      {
        text: "This is an example of adding a picture to a paragraph:",
        image: "example2.jpg", 
        isList: false 
      },
      {
        text: [
          "List item 1",
          "List item 2",
          "List item 3"
        ],
        image: null, 
        isList: true 
      },
      
    ]
  }
];

  
  */

/*   
Live lessons

     {
      taskId: "LiveTasks",
      taskTitle: "",
      introduction: "",
      task: {
        taskDescription: "",
        platform: 'Freelancer',
        projectName: "",
        biddingEnds: '',
        requirements: [
            "",
                "",
                "",
       
      ],
      },
      steps: [
        {
          stepTitle: "Step 1: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
              descriptions: [ 
              "",
              "",
              "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [ 
              "",
              "",
              "",
              ],
            },
            {
              subtitleDescription: "",
            descriptions: [ 
              "",
              "",
              "",
              ],
            },
            {
              subtitleDescription: "",
             descriptions: [ 
              "",
              "",
              "",
              ],
            },
          ],
        },
        {
          stepTitle: "Step 2: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
             descriptions: [ 
              "",
              "",
              "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [ 
              "",
              "",
              "",
              ],
            },
            {
              subtitleDescription: "",
            descriptions: [ 
              "",
              "",
              "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 3: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
            descriptions: [ 
              "",
              "",
              "",
              ],
            },
            {
              subtitleDescription: "",
             descriptions: [ 
              "",
              "",
              "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 4: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
            descriptions: [ 
              "",
              "",
              "",
              ],
            },
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 5: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 6: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [ 
               "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [ 
               "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 7: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
              descriptions: [ 
               "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
            descriptions: [ 
               "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 8: ",
           titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 9: ",
          titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
          ],
        },
         {
          stepTitle: "Step 10: ",
           titleDescription: "",
          sections: [
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
            {
              subtitleDescription: "",
             descriptions: [ 
               "",
                "",
                "",
              ],
            },
          ],
        },
       
      ],
      taskType: "Live",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["Live Projects"],
      completed: false,
      codesandboxUrl: "codesandbox",
      img: require("../images/livelessons.webp"),
      videoLink: "",
    },



*/
