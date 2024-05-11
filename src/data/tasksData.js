const authorsData = [
  {
    name: { first: "Jevin", last: "B" },
    position: "React",
    description: "I will update this soon....",
    picture: { medium: require("../images/me.webp") }, // Use require to import images
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/120px-React_Logo_SVG.svg.webp",
  },
  {
    id: 2,
    title: "InsightTrack: Empowering Your Digital Presence",
    extract:
      "Google Analytics is a powerful web analytics service offered by Google that helps website owners and marketers track and analyze their website traffic and user behavior. By providing detailed insights into visitor demographics, acquisition channels, user engagement, and conversion metrics, Google Analytics enables businesses to make data-driven decisions to improve their online presence, optimize marketing strategies, and enhance the overall user experience.",
    date: "5 May 2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/220px-GAnalytics.svg.webp",
  },
  {
    id: 3,
    category: "JavaScript",

    title: "Mastering JavaScript Pagination",
    extract:
      "Discover the ins and outs of JavaScript pagination in this comprehensive guide. Learn the theory behind pagination, explore practical code examples, and uncover where and why pagination shines in web development. From enhancing performance to improving user experience, pagination is a powerful technique you don't want to overlook.",
    date: "8 May 2024",
    image:
      "https://previews.dropbox.com/p/thumb/ACR5ZavloDgY7Puh3xjuBAAgD4ogUz50R5SAIEdIweVFothY40CcTX8InXrRDAzIehspQ2h2HamapyRGP3BYMHq0ri3Xuk43iT0VBKWvixIgFcNR-sgcRxtnRWxgp9hgydUWlmA7RXFZPUkZOj-RZThyXD2ds69yNm04ZPK4M736XL3ayT2brEFMEw6oULk89VWEJFseDBsxcYRpFCIA6WKfSWFvmDeDa5gsEJ4g2q4jDm0eabiY9FowsnJVplEPFlaC15OyWs41OOVdxDM9VPPcWE1wrpTmBdihoK0Aa45Q9FDLtAuu0cr6YSwTlcvCSHRQ863sh6MvBVBPaSD4jCug/p.png",
  },
];
const blogTopic = [
  {
    id: 1,
    image: "AuthGuard (1).webp",
    paragraphs: [
      {
        text: "Setup Firebase Authentication: Ensure you have set up Firebase Authentication properly. This includes setting up a Firebase project, enabling the Authentication service, and configuring sign-in methods (like email/password, Google, etc.). Create Firebase Configuration File: Ensure you have a Firebase configuration file (usually named firebase.html or similar) where you initialize Firebase with your configuration.",
        image: null,
        isList: false,
      },
      {
        text: [
          "Implement AuthGuard Component:",
          "Create an AuthGuard.html file. This component will handle the authentication logic.",
          "Inside the AuthGuard component, you're using useEffect hook to listen for changes in authentication state (onAuthStateChanged). When the authentication state changes, it updates the isLoggedIn state.",
          "If the user is authenticated (user is not null), isLoggedIn is set to true. Otherwise, it's set to false, and the user is redirected to the login page using navigate(/login).",
          "This component returns the children (components wrapped inside it) only if the user is authenticated. Otherwise, it returns null.",
        ],
        image: null,
        isList: true,
      },
      {
        text: [
          "Import necessary modules from React",
          "Import useNavigate hook from react-router-dom",
          "Import the 'auth' object from './firebase' file",
          "Define a functional component AuthGuard that takes 'children' as a prop",
          "Initialize navigate function using the useNavigate hook from react-router-dom",
          "Initialize 'isLoggedIn' state variable with false using useState hook",
          "Implement useEffect hook",
          "Call onAuthStateChanged method on 'auth' object to listen for authentication state changes",
        ],
        image: null,
        isList: true,
      },
    ],
  },
  {
    id: 2,
    image: "googleAnalytics.webp",
    paragraphs: [
      {
        text: "Having Google Analytics installed on your website is beneficial because it provides valuable insights into your website's performance and visitor behavior. It allows you to track key metrics such as website traffic, user engagement, conversion rates, and more, helping you make informed decisions to optimize your website, improve user experience, and ultimately achieve your business goals.",
        image: null,
        isList: false,
      },
      {
        text: [
          "Go to the Google Analytics Website: Visit the Google Analytics website by typing 'Google Analytics' into your browser's search bar or directly navigating to analytics.google.com.",
          "Sign In or Create an Account: If you already have a Google account (Gmail, Google Drive, etc.), you can sign in with those credentials. If not, you'll need to create a Google account by clicking on the 'Create account' link and following the instructions.",
          "Start Setting Up Google Analytics: Once you're signed in, click on the 'Start for free' button. This will begin the process of setting up your Google Analytics account.",
          "Set Up Your Property: After clicking 'Start for free', you'll be prompted to set up your first property. A property represents your website, app, or other digital asset you want to track with Google Analytics. Click on the 'Web' option if you're setting up analytics for a website.",
          "Enter Property Details: Enter the details for your website, such as the website name, URL, industry category, and reporting time zone.",
        ],
        image: null,
        isList: true,
      },
      {
        text: [
          "Get Tracking ID: After entering your property details, you'll be presented with a Google Analytics tracking ID. This ID is a unique code that you'll need to add to your website's code so Google can track your site's traffic. You can copy this tracking ID or directly install the Google Analytics tracking code on your website.",
          "Install Tracking Code: To track your website's traffic accurately, you'll need to install the Google Analytics tracking code on every page of your website. You can either manually add the tracking code to your website's HTML or use a website platform like WordPress that offers plugins for easy integration.",
          "Verify Tracking Installation: Once you've installed the tracking code, return to the Google Analytics interface and click on the 'Send test traffic' button. This will send test data to Google Analytics to verify that the tracking code is installed correctly.",
          "Explore Reports: Once you've set up your Google Analytics account and verified that tracking is working, you can start exploring the reports. Google Analytics provides a wealth of data about your website's visitors, including information about where they're coming from, what pages they're visiting, and how they're interacting with your site.",
        ],
        image: null,
        isList: true,
      },
    ],
  },
  {
    id: 3,
    image: ["Pagination.webp"],
    paragraphs: [
      {
        text: [
          "Mastering JavaScript Pagination: Theory, Implementation, and Best Practices In the dynamic landscape of web development, efficient data management and presentation are paramount. One common challenge developers face is efficiently displaying large datasets while maintaining user experience. Enter JavaScript pagination—a technique that not only enhances performance but also improves usability by breaking down voluminous data into digestible chunks. In this comprehensive guide, we'll delve into the theory behind pagination, provide practical code examples, and explore its applications across various scenarios.",
        ],
        image: null,
        isList: false,
      },
      {
        text: [
          "Pagination, in essence, involves dividing content into discrete pages, typically with a limited number of items per page. This approach offers several benefits:",
          "Enhanced Performance: Loading a large dataset in a single go can strain server resources and lead to sluggish user experiences. Pagination mitigates this issue by distributing data across multiple pages, resulting in faster load times.",
          "Improved User Experience: Navigating through pages is intuitive for users, allowing them to consume content at their own pace without feeling overwhelmed.",
          "Optimized Bandwidth Usage: By fetching only the necessary data for each page, pagination reduces bandwidth consumption, making it ideal for users with limited internet connectivity.",
        ],
        image: null,
        isList: true,
      },
      {
        text: [
          "Let's illustrate pagination implementation using HTML, CSS and JavaScript. Consider a scenario where we have an array of items and aim to display them in paginated form.",
        ],
        images: [
          "https://previews.dropbox.com/p/thumb/ACTGcr5YpyNERnqPTDt-wQdJRh-2ps5WaDQriA9zofvCiIPCKBG6vSIkp8o1n5EESk9oT8ymkgqFyH6eM2wTz6Xt6gsgkkXeyW3zHrGNpN5KKX8iIOECBr7NztGDfhiVgCF8aR5wYCd5jPIR61ZUyRi9joO42gwAqMPUtKguuPLO7FmL0TAWxtjpPET9SV0kRTI3w8Y2SPV9S_Nn0KWlzrVjY4FW_MqxwJAPZWOFUhEKzDeuDhGr4HfnRbFeNu4DcBLkwM9wsefpLm4Qn17WoQR2lMcmAm2IN5VdwSiLS_I7OWmL0A7TZYwmpNOaMx7rkitriW_OU4Mh9e-T71QZbmEf/p.png",
        ],
        isList: false,
      },
      {
        text: null,
        images: [
          "https://previews.dropbox.com/p/thumb/ACRhCnNrGLxYDzQfd54JCzF96cvc6UuqE6StiC9q2Xe4s4e6e2Eb5TIu1rMhNhla7BOAk-thOatjRVa5hhsLDVld7pb8imIuaI2bDbUXRwCP9J8trDULla5QaMI9lORUgDXqlEn3hofjW5NGdqCeS8upH8swYDJkdCI43CxFSLN01F4bFc-tvSAcylDflkTDykgFJUiZfpZfO5_vygp2pqLbHT0wW3ZGZBHElQipnGSofOubpwCwawUvBySylagR2rujLzMNFIn1U9Ga5WJhGT2Gh4jg1tqIXXA8pgI1R2GRVHnpIZgOHtOSZTVrXMIMSxJYbiB3Ru_RQ_PkYFWYYIDY/p.png",
        ],
        isList: false,
      },
      {
        text: null,
        images: [
          "https://previews.dropbox.com/p/thumb/ACQbe5_oezyLk8dsOmkhZic3MTlwPC0luDRaKaSsGB8PTrV0X2jwmGm79xQwrgrZ_hWMkE47ibzALxH4Nyx5j7VLT7nGRdDLXhGTDo306VzPNHXTadrjZ3L166kveeZvBvAHyKzwbYsQ2hE2P42FJqAGTb8UUafOhHWJSznT4-zy7tfNvp1iyjoAZcIymu_PQigNPXJrhNVyLu1EY0DrLVNFdqRhY9kHZX-zedW8WBxtJFjqsuGKMQ8pbn_hXVh6A0HG8FX9r91NFE9U3qnJdCKqbWuGVXN3-CRVgK5IKMMnyiZ-bjwV1heDRefgaYtyhqtJyjZetdIEzGNmSqMaRIFL/p.png",
        ],
        isList: false,
      },
      {
        text: null,
        images: [
          "https://previews.dropbox.com/p/thumb/ACTmpS5JUvtU-2zSzAKqEFtqD_vOCKTYVR_EJQeCnb3rAsO3I9dzAuWffrsPAzh8M_4Tv-VkkYMnYwOTcOrgFm52F546kztZnuFfooX_UvmWzpnm1BWWCu69BE3QD0qvO3-afwRtOkKoBtnov7RR_mV94hOo725vYPxNNaqQFNjZk1MUeVUkZu01Sj_yXy99tkHUSoS7vtP3mHSqEJd6XalPWgFDaTMJD5Dcvt2mbY9TolPib4jvsKFDWT7cHwYt6eMBu5R7kwN-hXpfe5VGzIGl3mKbDIaxqnaqvOKweymo5oY9jd9xnV-lKWvjWrFxzn8xhcvm8sf1WghsoYp1vKwz/p.png",
        ],
        isList: false,
      },
      {
        text: [
          "In this example, we start by defining an array of items. The displayItems function takes care of rendering items for the current page, while renderPaginationButtons generates pagination controls. Clicking on a pagination button triggers the display of corresponding items.",
        ],

        isList: false,
      },
      {
        text: [
          "Where to Use Pagination:",
          "Pagination finds applications across various domains, including:",
          "E-commerce Websites: Displaying products in paginated grids allows users to navigate through extensive catalogs conveniently.",
          "Blogs and Articles: Long-form content can be divided into pages, facilitating easier reading and navigation.",
          "Data Tables: In applications dealing with tabular data, pagination enhances readability and performance by splitting data into manageable chunks.",
          "Search Results: Search engines often paginate results to present them in a structured and navigable manner.",
        ],

        isList: true,
      },
      {
        text: [
          "In conclusion, JavaScript pagination is a versatile tool for managing and presenting data in web applications. By understanding its theory, implementing it effectively, and leveraging it across various contexts, developers can significantly enhance user experience and optimize performance.",
        ],

        isList: false,
      },
    ],
  },
];

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
      img: require("../images/ReactLesson1.webp"),
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
      img: require("../images/ReactLesson2.webp"),
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
      img: require("../images/ReactLesson3.webp"),
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
      img: require("../images/ReactLesson4.webp"),
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
      img: require("../images/ReactLesson5.webp"),
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
      img: require("../images/ReactLesson6.webp"),
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
      img: require("../images/ReactLesson7.webp"),
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
      img: require("../images/ReactLesson8.webp"),
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
      img: require("../images/ReactLesson9.webp"),
      link: "https://www.dropbox.com/scl/fi/mqd7ggdarkm4fl704iun1/memoryStyles.css?rlkey=9amnv9br4g9t7iz3w4iz9e8h8&st=xopph5bz&dl=0",
      link2:
        "https://www.dropbox.com/scl/fo/xun1wmslf3nuok6kjslto/AJAoOoiDotzvxhHAdeA20co?rlkey=lfo67u2afk1bsaouc41azfd5p&st=cfmm90r4&dl=0",
    },
    {
      taskId: "reacttask10",
      taskTitle: "Color Generator",
      introduction:
        "In this tutorial, you will learn how to build a React application for generating and displaying color palettes. We'll create two components: App, which handles user input and color generation, and SingleColor, responsible for rendering individual color swatches with the ability to copy color values to the clipboard. ",

      steps: [
        {
          stepTitle: "Step 1: Setting Up React Environment",
          titleDescription: "",
          description: [
            "Make sure you have Node.js installed on your system.",
            "Create a new React project using create-react-app or any other method you prefer.",
            "Install values.js",
            "Navigate to the project directory in your terminal.",
          ],
        },
        {
          stepTitle: "Step 2: Component Files",
          titleDescription: "",
          description: [
            "Inside the src folder of your React project, create two new files: App.js and SingleColor.js.",
          ],
        },
        {
          stepTitle: "Step 3: App Component",
          titleDescription: "App.js",
          description: [
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
        {
          stepTitle: "Step 4: SingleColor Component",
          titleDescription: "SingleColor.js",
          description: [
            "Import React and necessary hooks from the 'react' library.",
            "Define a functional component named SingleColor.",
            "Inside the component, set up state variables using the useState hook: 'alert': to track whether the color value has been copied to the clipboard.",
            "Extract the rgb, weight, index, and hexColor props from the component props.",
            "Convert the rgb array to a string to represent the background color.",
            "Define a hexValue variable to represent the hex color value.",
            "Implement a useEffect hook to clear the alert message after 3 seconds.",
            "Return JSX: Render an article element representing a single color. Set the background color using inline styles. Display the weight percentage and hex color value. Show an alert message if 'alert' state is 'true'.",
            "Export the SingleColor component as the default export.",
          ],
        },
        {
          stepTitle: "Step 5: Styling",
          titleDescription: "",
          description: [
            "Style the components using CSS according to your preferences.",
            "You can add CSS classes and styles directly in your component files or download separate CSS file and import them into your components.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson10.webp"),
      link: "https://www.dropbox.com/scl/fi/y011c3db1gyww9io1b31k/colorStyles.css?rlkey=xqydm3kozk30nac0tt4d7bozv&st=dhj5uhv0&dl=0",
    },
    {
      taskId: "reacttask11",
      taskTitle: "Range Slider",
      introduction:
        "'Range Slider' is a versatile React project that features a customizable double range slider component. With intuitive user interaction and adjustable minimum and maximum values, it offers a seamless way to select a range of values within a specified range.",

      steps: [
        {
          stepTitle: "Step 1: Setup your React environment",
          titleDescription: "",
          description: [
            "Make sure you have Node.js and npm installed on your machine.",
            "Create a new React project using create-react-app or any other method you prefer.",
          ],
        },
        {
          stepTitle: "Step 2: Create a new component file",
          titleDescription: "",
          description: [
            "In your React project, create a new file called DoubleRangeSlider.js.",
          ],
        },
        {
          stepTitle: "Step 3: Import necessary dependencies",
          titleDescription: "",
          description: [
            "At the top of your DoubleRangeSlider.js file, import React, useState, useEffect, useRef, and PropTypes",
          ],
        },
        {
          stepTitle: "Step 4: Create the component function",
          titleDescription: "",
          description: [
            "Declare your component function named DoubleRangeSlider and pass min and max as props",
          ],
        },
        {
          stepTitle: "Step 5: Initialize state for min and max values",
          titleDescription: "",
          description: [
            "Inside the component function, use the useState hook to create state variables for minVal and maxVal",
          ],
        },
        {
          stepTitle: "Step 6:Create refs for DOM elements",
          titleDescription: "",
          description: [
            "Define refs for the left thumb, right thumb, and the range track",
          ],
        },
        {
          stepTitle: "Step 7: Define utility functions",
          titleDescription: "",
          description: [
            "Create a utility function getPercent to convert slider values to percentage",
          ],
        },
        {
          stepTitle: "Step 8: Implement useEffect for left thumb",
          titleDescription: "",
          description: [
            "Within the useEffect hook, calculate the percentage value of minVal using the getPercent utility function.",
            "Update the left thumb's position using the calculated percentage.",
            "Also, update the position of the range track.",
          ],
        },
        {
          stepTitle: "Step 9: Implement useEffect for right thumb ",
          titleDescription: "",
          description: [
            "Inside the useEffect hook, calculate the percentage value of maxVal using the getPercent utility function.",
            "Update the right thumb's position using the calculated percentage.",
            "Adjust the width of the range track based on the difference between minVal and maxVal.",
          ],
        },
        {
          stepTitle: "Step 10: Render the component ",
          titleDescription: "",
          description: [
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
        {
          stepTitle: "Step 11: Add PropTypes validation",
          titleDescription: "",
          description: ["Define PropTypes for the min and max props."],
        },
        {
          stepTitle: "Step 12: Apply CSS classes and styles",
          titleDescription: "",
          description: [
            "Define CSS classes for styling the range slider components.",
            "Apply styles to position the thumbs, track, and value displays.",
            "Use CSS to customize the appearance of the range slider according to your design preferences.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson11.webp"),
      link: "https://www.dropbox.com/scl/fi/c6zfmsr8pc53v6kchxndv/rangeStyles.css?rlkey=20wjzpsgqvtzpxk634w1oyk5s&st=i048axb2&dl=0",
    },
    {
      taskId: "reacttask12",
      taskTitle: "React Form Validation Component",
      introduction:
        "This React task designed to facilitate form input validation within a user interface. It employs conditional logic to validate user input for fields such as username, email, password, and confirm password, displaying corresponding error messages and dynamically adjusting border colors to indicate validation status.",

      steps: [
        {
          stepTitle: "Step 1: Import React and useState Hook",
          titleDescription: "",
          description: [
            " Import React at the top of your file. Then, import the useState hook from the react package.",
          ],
        },
        {
          stepTitle: "Step 2: Create Functional Component",
          titleDescription: "",
          description: ["Define a functional component named Main."],
        },
        {
          stepTitle: "Step 3: Initialize State Variables",
          titleDescription: "",
          description: [
            "Inside the Main component, initialize state variables using the useState hook for username, email, password, confirmPassword, errorUserName, errorEmail, errorPassword, errorConfrimPassword, userColor, emailColor, passwordColor, and confirmPasswordColor.",
          ],
        },
        {
          stepTitle: "Step 4: Create Validation Function",
          titleDescription: "",
          description: [
            "Define a function named validate within the Main component. This function will handle form validation.",
          ],
        },
        {
          stepTitle: "Step 5: Prevent Default Behavior",
          titleDescription: "",
          description: [
            "In the validate function, prevent the default form submission behavior using e.preventDefault().",
          ],
        },
        {
          stepTitle: "Step 6: Validate Username",
          titleDescription: "",
          description: [
            "Check if the length of the username is greater than 8 characters. If it is, clear any existing error message related to the username and set the userColor state to green. Otherwise, set the error message to 'Username must be 8 letters long' and userColor to red.",
          ],
        },
        {
          stepTitle: "Step 7: Validate Email",
          titleDescription: "",
          description: [
            "Check if the email includes '@gmail'. If it does, clear any existing error message related to the email and set the emailColor state to green. Otherwise, set the error message to 'Email should have @gmail' and emailColor to red.",
          ],
        },
        {
          stepTitle: "Step 8: Validate Password",
          titleDescription: "",
          description: [
            "Check if the length of the password is greater than 8 characters. If it is, clear any existing error message related to the password and set the passwordColor state to green. Otherwise, set the error message to 'Password should be 8 letters long' and passwordColor to red.",
          ],
        },
        {
          stepTitle: "Step 9: Validate Confirm Password",
          titleDescription: "",
          description: [
            "Check if the password and confirmPassword match. If they do, clear any existing error message related to the confirm password and set the confirmPasswordColor state to green. Otherwise, set the error message to 'Passwords didn't matched' and confirmPasswordColor to red.",
          ],
        },
        {
          stepTitle: "Step 10: Render Form Inputs",
          titleDescription: "",
          description: [
            "Render input fields for username, email, password, and confirmPassword. Apply inline styles to set the border color based on the corresponding state variables (userColor, emailColor, passwordColor, confirmPasswordColor).",
          ],
        },
        {
          stepTitle: "Step 11: Render Error Messages",
          titleDescription: "",
          description: [
            "Render error messages below each input field to display validation errors (errorUserName, errorEmail, errorPassword, errorConfrimPassword).",
          ],
        },
        {
          stepTitle: "Step 12: Attach Event Handlers",
          titleDescription: "",
          description: [
            "Attach onChange event handlers to update state variables as the user types in each input field.",
          ],
        },
        {
          stepTitle: "Step 13: Attach Click Event Handler",
          titleDescription: "",
          description: [
            "Attach a onClick event handler to the submit button (<button>). This handler will call the validate function when the button is clicked.",
          ],
        },
        {
          stepTitle: "Step 14: In your App.js file",
          titleDescription: "",
          description: [
            "Import the Main component from the './Main' file.",
            "Import the CSS styles from the './index.css' file to apply styling to the components.",
            "Create a functional component named App using an arrow function syntax (=>), (or other preferable way).",
            "Within the App component, return the Main component. This will render the form validation component within the App.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson12.webp"),
      link: "https://www.dropbox.com/scl/fi/oh478sruh4coo1niwb2c4/formValidationStyles.css?rlkey=7b9v41wez31d5fqgzgl53qmoe&st=nfdqrklr&dl=0",
    },
    {
      taskId: "reacttask13",
      taskTitle: "Markdown Preview App",
      introduction:
        "The Markdown Preview app is a simple yet powerful tool built using React, a popular JavaScript library for building user interfaces. Markdown is a lightweight markup language with plain-text formatting syntax, often used to format text on the web. This app allows users to input Markdown syntax in a textarea and instantly preview the formatted output in real-time.",

      steps: [
        {
          stepTitle: "Step 1: Create React App",
          titleDescription: "",
          description: [
            "If you haven't already, initiate a new React project using Create React App",
          ],
        },
        {
          stepTitle: "Step 2: Install Dependencies",
          titleDescription: "",
          description: [
            "Install the necessary dependencies for your Markdown preview app. In this case, you'll need the react-markdown library.",
          ],
        },
        {
          stepTitle: "Step 3: Component Structure",
          titleDescription: "",
          description: [
            "Inside App.js, you'll create a functional component named App. This component will manage the state of the Markdown content and render both the textarea for input and the Markdown preview.",
          ],
        },
        {
          stepTitle: "Step 4: State Management",
          titleDescription: "",
          description: [
            "Utilize the useState hook to manage the Markdown content. Initially, set the default Markdown content to '# Markdown Preview:'.",
          ],
        },
        {
          stepTitle: "Step 5: Rendering",
          titleDescription: "",
          description: [
            "Render the main component structure inside the App component. This includes a textarea for input and an article for the Markdown preview. Bind the textarea value to the Markdown state and update the state whenever the content in the textarea changes.",
          ],
        },
        {
          stepTitle: "Step 6: Markdown Rendering",
          titleDescription: "",
          description: [
            "Use the ReactMarkdown component from the react-markdown library to render the Markdown content inside the article.",
          ],
        },
        {
          stepTitle: "Step 7: Styling ",
          titleDescription: "",
          description: [
            "Add some basic styling to your app for a better user experience. You can download a CSS file from below.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson13.webp"),
      link: "https://www.dropbox.com/scl/fi/iim1mrxbiomqdfu6a8534/markdownStyles.css?rlkey=x702xjplsx1lmje9xlxsmnztl&st=tjk1d94n&dl=0",
    },
    {
      taskId: "reacttask14",
      taskTitle: "React Menu App",
      introduction:
        "React Menu App is a responsive web application. It provides users with a dynamic menu interface, allowing them to explore a variety of food items categorized into different sections. Users can easily navigate through the menu, filter items based on categories, and view detailed information such as item descriptions and prices. With its intuitive design and interactive features, ReactMenuApp offers a delightful browsing experience for discovering delicious dishes.",

      steps: [
        {
          stepTitle: "Step 1: Setting Up the Project",
          titleDescription: "",
          description: [
            "Start by creating a new React project using Create React App or any other method you prefer.",
            "Make sure you have React installed in your project.",
          ],
        },
        {
          stepTitle: "Step 2: Data Setup",
          titleDescription: "data.js",
          description: [
            "Create a file named data.js where you will store the menu items as an array of objects.",
            "Each object should represent a menu item and include properties like id, title, category, price, img, and desc.",
          ],
        },
        {
          stepTitle: "Step 3: Creating Components",
          titleDescription: "",
          description: [
            "Create three new files: App.js, Categories.js, and Menu.js in your project directory.",
          ],
        },
        {
          stepTitle: "Step 4: Create an App Component",
          titleDescription: "App.js",
          description: [
            "Start by importing React and useState hook at the top of App.js.",
            "Import Menu, Categories, and items from their respective files (Menu.js, Categories.js, and data.js).",
            "Create a constant allCategories that includes all unique categories from the items data. You can achieve this using the map function along with the Set object to filter out unique categories.",
            "Utilize the useState hook to create state variables for menuItems and categories. Initialize them with items and allCategories respectively.",
            "Implement a function named filterItems that takes a category parameter. Inside this function, check if the selected category is 'all'. If it is, set menuItems state to the entire items array. Otherwise, filter the items array based on the selected category and update the state of menuItems accordingly.",
            "Within the return statement, render the Categories and Menu components. Pass the appropriate props (categories, filterItems, and menuItems) to each component.",
          ],
        },
        {
          stepTitle: "Step 5: Create a Categories Component",
          titleDescription: "Categories.js",
          description: [
            "Import React and useState hook at the top of Categories.js.",
            "Create a functional component named Categories that takes categories and filterItems as props.",
            "Use the useState hook to create a state variable named activeCategory and initialize it to null.",
            "Implement a function named handleCategoryClick that takes category as a parameter. Inside this function, call the filterItems function passed as a prop and update the activeCategory state with the selected category.",
            "Map through the categories array and render a button for each category. Use the activeCategory state to conditionally apply a CSS class to highlight the active category. Implement an onClick event on each button to call the handleCategoryClick function with the corresponding category.",
          ],
        },
        {
          stepTitle: "Step 6: Create a Menu Component",
          titleDescription: "Menu.js",
          description: [
            "Import React at the top of Menu.js.",
            "Create a functional component named Menu that takes items as a prop.",
            "Map through the items array passed as props. For each item, destructure its properties (such as id, title, img, desc, and price) and render them within an <article> element.",
            "Inside the <article> element, render the item's image, title, price, and description using the destructured properties.",
            "Assign a unique key prop to each <article> element, using the item's id property to ensure React can efficiently update the DOM when items are added, removed, or reordered.",
          ],
        },
        {
          stepTitle: "Step 7: Styling",
          titleDescription: "",
          description: [
            "Add CSS files (App.css, Menu.css, Categories.css) to style your components.",
            "Style the menu, categories, buttons, and other elements as per your design.",
          ],
        },
        {
          stepTitle: "Step 8: Wiring Everything Together",
          titleDescription: "",
          description: [
            "Import the necessary components into App.js.",
            "Ensure proper props are passed to each component.",
            "Test your application to see if everything works as expected.",
            "Make adjustments and refactor code if needed.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson14.webp"),
      link: "https://www.dropbox.com/scl/fi/tuz5g26aze4lf3y9xixfq/menuStyles.css?rlkey=7tqcib3pn704k93ezqeqi5di5&st=cbhgezxb&dl=0",
    },
    {
      taskId: "reacttask15",
      taskTitle: "Responsive Navbar",
      introduction:
        "This project is a simple React application focused on building a responsive navbar component. It includes a logo, navigation links, and social icons. It's designed to repeat the basics of React component creation, state management, and rendering dynamic data. This hands-on project offers a step-by-step guide to help understand the fundamentals of web development using React.js.",

      steps: [
        {
          stepTitle: "Step 1: Setting Up React Project",
          titleDescription: "",
          description: [
            "Begin by creating a new React project using Create React App or your preferred method.",
            "Make sure you have Node.js and npm (Node Package Manager) installed on your system.",
          ],
        },
        {
          stepTitle: "Step 2: Create Data File",
          titleDescription: "",
          description: [
            "Create a new file named data.js.",
            "Inside data.js, define two arrays: links and social.",
            "Each array should contain objects with properties like id, url, text, and icon. Populate them with your desired data.",
          ],
        },
        {
          stepTitle: "Step 3: Create Navbar Component",
          titleDescription: "Navbar.js",
          description: [
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
        {
          stepTitle: "Step 4: Create App Component",
          titleDescription: "App.js",
          description: [
            "Open App.js.",
            "Import React at the top of the file. ( use 'imr' snippet ;) )",
            "Import Navbar component from the Navbar.js file.",
            "Define a functional component named App. ( use 'nfn' snippet ;) )",
            "Inside the component, return JSX that renders the Navbar component.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson15.webp"),
      link: "https://www.dropbox.com/scl/fi/ks97vsqcdxhjg236ystvp/navbarStyles.css?rlkey=zcqeskq64ip14h2l07ouf2lt8&st=s8s2fkc7&dl=0",
    },
    {
      taskId: "reacttask16",
      taskTitle: "Pagination Page",
      introduction:
        "This project is a React application designed to showcase pagination functionality while fetching and displaying a list of GitHub followers. Through the use of React hooks, specifically useState and useEffect, it efficiently manages state and data fetching. The main component, App, orchestrates the pagination logic, rendering follower cards dynamically with the help of the Follower component. The useFetch custom hook handles fetching data from the GitHub API, while a utility function called paginate organizes the fetched data into pages for easier navigation. By studying and implementing this project, you will gain valuable insights into React state management, data fetching, and pagination techniques.",

      steps: [
        {
          stepTitle: "Step 1: Project Setup",
          titleDescription: "",
          description: [
            "Set up a new React project using Create React App or by initializing a project manually.",
            "Install necessary dependencies such as react and react-dom.",
          ],
        },
        {
          stepTitle: "Step 2: Create useFetch Hook",
          titleDescription: "useFetch.js",
          description: [
            "Create a new file named useFetch.js.",
            "Import useState and useEffect from the React library.",
            "Define the useFetch function as a custom hook.",
            "Inside useFetch, initialize state variables using useState: 'loading': to track whether data is currently being fetched. 'data': to store the fetched data from the GitHub API.",
            "Write an asynchronous function within useFetch to fetch data from the GitHub API: Use 'fetch' to make a GET request to the API endpoint (https://api.github.com/users/znkbnk/followers?per_page=100). Convert the response to JSON using 'response.json()'. Update the 'data' state with the fetched data. Set 'loading' to 'false' once the data is fetched.",
            "Use 'useEffect' within the 'useFetch' function to trigger the data fetching process when the component mounts: Pass an empty dependency array ([]) to ensure 'useEffect' only runs once. Call the asynchronous function responsible for fetching data.",
          ],
        },
        {
          stepTitle: "Step 3: Create paginate Utility Function",
          titleDescription: "paginate.js",
          description: [
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
        {
          stepTitle: "Step 4: Build the Follower Component",
          titleDescription: "Follower.js",
          description: [
            "Create a new file named Follower.js.",
            "Define the 'Follower' component as a functional component that takes props (e.g., avatar_url, html_url, login).",
            "Inside the 'Follower' component, destructure the props to access individual follower data.",
            "Use JSX to render the follower card, including the follower's avatar, username, and a link to their GitHub profile.",
            "Utilize appropriate HTML elements and attributes (e.g., <img>, <h4>, <a>) to structure the follower card.",
            "Ensure that the GitHub profile link (html_url) is set as the 'href' attribute of the anchor (<a>) tag.",
          ],
        },
        {
          stepTitle: "Step 5: Implement Pagination in the App Component",
          titleDescription: "App.js",
          description: [
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
        {
          stepTitle: "Step 6: Style the Components",
          titleDescription: "",
          description: [
            "Create a CSS file (e.g., styles.css) to style the components.",
            "Style the follower cards, buttons, and pagination elements to improve the appearance and layout of the application. ( Or download from the bottom )",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson16.webp"),
      link: "https://www.dropbox.com/scl/fi/8g5fg5okeku604k3v1ijv/paginationStyles.css?rlkey=gxh2ah4lqq2v9qb7im9bnqmgr&st=ymt2ym6v&dl=0",
    },
    {
      taskId: "reacttask17",
      taskTitle: "Search Bar",
      introduction:
        "This project is a React-based web application designed to facilitate user searches within a given dataset. The core functionality revolves around a SearchBar component, allowing users to input search queries. As users type into the search bar, the application dynamically fetches data from an external API and filters the results based on the user's input. The search results are then displayed in a list format, enabling users to browse and select relevant items.",

      steps: [
        {
          stepTitle: "Step 1: Create a React project",
          titleDescription: "",
          description: [
            "If you haven't already, set up a new React project using Create React App or any other preferred method.",
          ],
        },
        {
          stepTitle: "Step 2: Component Structure",
          titleDescription: "",
          description: [
            "Ensure that you have three components: SearchBar, SearchResult, and SearchResultsList.",
            "Each component should be in its own file with appropriate names (SearchBar.js, SearchResult.js, SearchResultsList.js).",
          ],
        },
        {
          stepTitle: "Step 3: Component Styling",
          titleDescription: "",
          description: [
            "Create CSS files for each component to handle their styling (SearchBar.css, SearchResult.css, SearchResultsList.css).",
            "Style each component according to the provided CSS classes. ( Or just download all the styles from link provided on the bottom )",
          ],
        },
        {
          stepTitle: "Step 4: Implement SearchBar Component",
          titleDescription: "SearchBar.js",
          description: [
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
        {
          stepTitle: "Step 5: Implement SearchResult Component",
          titleDescription: "SearchResult.js",
          description: [
            "Import React and the CSS file for styling at the top of your SearchResult.js file.",
            "Define the SearchResult functional component that accepts props (user and onSelect).",
            "Destructure the user and onSelect props within the function signature.",
            "Render JSX elements to display the search result information.",
            "Typically, this includes rendering the user's name within a clickable container.",
            "Handle user interactions such as clicking on the search result.",
            "Implement an onClick event on the container element to invoke the onSelect function with the selected user as an argument.",
          ],
        },
        {
          stepTitle: "Step 6: Implement SearchResultsList Component",
          titleDescription: "SearchResultsList.js",
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
        {
          stepTitle: "Step 7: App Component Implementation",
          titleDescription: "App.js",
          description: [
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
        {
          stepTitle: "Step 8: Integrate Components",
          titleDescription: "",
          description: [
            "Import the SearchBar component into your main application file (e.g., App.js) and render it within your main component hierarchy.",
            "Ensure that the SearchBar component is properly integrated with the rest of your application, and its functionality is tested thoroughly.",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson17.webp"),
      link: "https://www.dropbox.com/scl/fi/wj8mbt35tzthwb59t0fpp/searchBarStyles.css?rlkey=1ssb43swqlr20wm3e5nkugzzk&st=s1gbhfpy&dl=0",
    },
    {
      taskId: "reacttask18",
      taskTitle: "Dropdown",
      introduction:
        "This project is a React application that implements a dropdown menu for selecting programming languages. Users can click on an input field, triggering the appearance of a dropdown menu containing a list of programming languages. They can then select a language from the list, and the selected language will be displayed in the input field. The dropdown menu can be toggled open and closed by clicking on the input field. Overall, this project provides a user-friendly interface for selecting programming languages within a React environment.",

      steps: [
        {
          stepTitle: "Step 1: Import CSS File",
          titleDescription: "",
          description: [
            "Import the CSS file (App.css) at the top of your JavaScript file to apply styles to the components used in your React application.",
            "Or download from the link below",
          ],
        },
        {
          stepTitle: "Step 2: Import Necessary Dependencies",
          titleDescription: "",
          description: [
            "Import necessary dependencies from React such as 'useState' and 'useRef' to manage state and create refs, respectively.",
            "Also, import the 'FontAwesomeIcon' component and 'faCaretDown' icon from @fortawesome/react-fontawesome to use an icon for the dropdown indicator.",
          ],
        },
        {
          stepTitle: "Step 3: Define Options Array",
          titleDescription: "",
          description: [
            "Create an array named 'optionsArray' containing different programming languages that users can select from.",
          ],
        },
        {
          stepTitle: "Step 4: Declare State Variables",
          titleDescription: "",
          description: [
            "Use the 'useState' hook to declare a state variable named 'isOpenSelect'. This variable will manage the visibility of the dropdown menu.",
          ],
        },
        {
          stepTitle: "Step 5: Create Ref for Input Element",
          titleDescription: "",
          description: [
            "Create a ref using the 'useRef' hook to reference the input element where the selected language will be displayed.",
          ],
        },
        {
          stepTitle: "Step 6: Define selectLanguage Function",
          titleDescription: "",
          description: [
            "Define a function named 'selectLanguage' that takes an event as a parameter.",
            "Inside this function, access the text content of the clicked option using 'e.target.textContent'.",
            "Update the value of the input field (languageInput.current.value) with the selected language.",
            "Set the 'isOpenSelect' state to 'false' to close the dropdown menu after selection.",
          ],
        },
        {
          stepTitle: "Step 7: Define toggleOptions Function",
          titleDescription: "",
          description: [
            "Define a function named 'toggleOptions' that toggles the visibility of the dropdown menu.",
            "Inside this function, use 'setIsOpenSelect' to update the 'isOpenSelect' state by toggling its value between 'true' and 'false'.",
          ],
        },
        {
          stepTitle: "Step 8: Render Input Field",
          titleDescription: "",
          description: [
            "Render an input field (<input>) for selecting languages.",
            "Attach the 'onClick' event listener to the input field to trigger the 'toggleOptions' function when clicked.",
            "Attach the 'onBlur' event listener to the input field to close the dropdown menu when it loses focus.",
            "Set the 'ref' attribute of the input field to 'languageInput' to create a reference to this input element.",
          ],
        },
        {
          stepTitle: "Step 9: Render Caret Icon",
          titleDescription: "",
          description: [
            "Render a caret icon (downward arrow) using 'FontAwesomeIcon' component.",
            "Pass the 'faCaretDown' icon as a prop to 'FontAwesomeIcon'.",
          ],
        },
        {
          stepTitle: "Step 10: Render Dropdown Menu",
          titleDescription: "",
          description: [
            "Render the dropdown menu containing the options from the 'optionsArray'.",
            "Use the map method to iterate over the 'optionsArray' and render each option as a list item (<li>).",
            "Attach the 'onClick' event listener to each list item to trigger the 'selectLanguage' function when clicked.",
          ],
        },
        {
          stepTitle: "Step11: Apply Conditional Classes",
          titleDescription: "",
          description: [
            "Apply conditional classes to the icon and options container based on the state of 'isOpenSelect'.",
            "If 'isOpenSelect' is 'true', add the class 'active' to the icon and options container to make them visible; otherwise, remove the class to hide them.",
           
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson18.webp"),
      link: "https://www.dropbox.com/scl/fi/a4s2nemre2jjzb30u75u5/dropdownStyles.css?rlkey=12wx0dim604hwgarpnjssr8qu&st=har5kkyl&dl=0",
    },
    {
      taskId: "reacttask19",
      taskTitle: "",
      introduction:
        "This is a React-based web application featuring a dynamic sidebar navigation menu, offering users easy access to various sections and functionalities. With a customizable and expandable structure, it enhances user experience by providing seamless navigation within the application.",

      steps: [
        {
          stepTitle: "Step 1: Setup your React project",
          titleDescription: "",
          description: [
            "Ensure you have a React project set up with all necessary dependencies installed.",
            "Install 'Bootstrap Icons' via npm",
          ],
        },
        {
          stepTitle: "Step 2: Create Components",
          titleDescription: "",
          description: [
            "Create a Sidebar.js file inside the components directory.",
            "Create a SidebarItem.js file inside the components directory.",
          ],
        },
        {
          stepTitle: "Step 3: Implement SidebarItem Component",
          titleDescription: "SidebarItem.js",
          description: [
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
        {
          stepTitle: "Step 4: Implement Sidebar Component",
          titleDescription: "Sidebar.js",
          description: [
            "Inside the 'components' directory, create a new file named Sidebar.js.",
            "Import 'SidebarItem' component.",
            "Import the sidebar data from the JSON file.",
            "Create a functional component named 'Sidebar'.",
            "Inside the component, map through the sidebar data and render each sidebar item using the 'SidebarItem' component.",
          ],
        },
        {
          stepTitle: "Step 5: Implement Main App Component",
          titleDescription: "App.js",
          description: [
            "Import the 'Sidebar' component at the top of the file.",
            "In the 'App' functional component, structure the layout with a main container and a sidebar.",
            "Render the 'Sidebar' component inside the main container.",
          ],
        },
        {
          stepTitle: "Step 6: Import Sidebar Data",
          titleDescription: "sidebar.json",
          description: [
            "Inside the src directory (or wherever your data folder is located), create a new file named sidebar.json.",
            "Manually type or define your sidebar data structure within this JSON file.",
            "This structure should have an array of sidebar items, each containing properties such as title, icon, path, and optionally childrens.",
            "Or you can download it from the link below",
          ],
        },
        {
          stepTitle: "Step 7: Style Your Components",
          titleDescription: "",
          description: [
            "Style your components using CSS. You can create a separate CSS file or use CSS-in-JS libraries like Styled Components.",
            "Or simply download it from the link below",
          ],
        },
      ],
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson19.webp"),
      link: "https://www.dropbox.com/scl/fi/gkczh6ps4swxpr1cebv3m/sidebarStyles.css?rlkey=1gn09lghyev6h92r4vzm143ny&st=sjjt66f6&dl=0",
      link3:
        "https://www.dropbox.com/scl/fi/cbzzf2hzzi7bpzfzm5496/sidebar.json?rlkey=3wufj9ijefhd9zdl3lucq6jn0&st=muc48ibt&dl=0",
    },
  ],
};

const exercisesData = [
  // {
  //   img: require("../images/js.webp"),
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
    desc: "Explore React, the widely-used JavaScript library designed for crafting dynamic and engaging user interfaces. Discover its core concepts such as components and state management, alongside navigating the diverse React ecosystem, empowering you to construct contemporary web applications.",
    to: "/reactlessons",
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
        },{
          stepTitle: "Step 6: ",
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
        },{
          stepTitle: "Step 7: ",
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
        },{
          stepTitle: "Step 8: ",
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
        },{
          stepTitle: "Step 9: ",
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
        },{
          stepTitle: "Step 10: ",
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
      img: require("../images/ReactLesson1.webp"),
      link: "https://www.dropbox.com/scl/fi/6cblzwczzki50yxwaxszo/style.css?rlkey=bydjjmcbwquipvhhlw470mbkb&dl=0",
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
