const tasksData = {
  js: [],
  CSS: [],
  React: [
    {
      taskId: "reacttask1",
      taskTitle: "React 3D Interactive Card",
      introduction:
        "In this lesson, we're building a dynamic React component featuring a card with interactive 3D effects that respond to mouse movements, offering an engaging user experience.",
      taskText: ({ checkboxStates, handleCheckboxChange }) => (
        <div className='taskText-container'>
          <h3>Step 1: Define functional component Card</h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step1'
              checked={checkboxStates["step1"]}
              onChange={() => handleCheckboxChange("step1")}
            />
            <label htmlFor='step1'>
              <ul>
                <li>Create a reference for the card element</li>
                <li>Create a reference for the title element</li>
                <li>Create a reference for the sneaker image element</li>
                <li>Create a reference for the description element</li>
                <li>Create a reference for the difficulty buttons element</li>
                <li>Create a reference for the start button element</li>
              </ul>
            </label>
          </div>
          <br />

          <h3>Step 2: Function to handle mouse movement</h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step2'
              checked={checkboxStates["step2"]}
              onChange={() => handleCheckboxChange("step2")}
            />
            <label htmlFor='step2'>
              <ul>
                <li>
                  Calculate the rotation on the X-axis based on mouse position
                </li>
                <li>
                  Calculate the rotation on the Y-axis based on mouse position
                </li>
                <li> Apply rotation to the card element</li>
              </ul>
            </label>
          </div>
          <br />

          <h3>Step 3: Function to handle mouse entering the card</h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step3'
              checked={checkboxStates["step3"]}
              onChange={() => handleCheckboxChange("step3")}
            />
            <label htmlFor='step3'>
              <ul>
                <li>Remove transition effect</li>
                <li>Apply transformation to the title</li>
                <li>Apply transformation to the sneaker image</li>
                <li>Apply transformation to the description</li>
                <li>Apply transformation to the difficulty buttons</li>
                <li>Apply transformation to the start button</li>
              </ul>
            </label>
          </div>
          <h3>Step 4: Function to handle mouse leaving the card</h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step4'
              checked={checkboxStates["step4"]}
              onChange={() => handleCheckboxChange("step4")}
            />
            <label htmlFor='step4'>
              <ul>
                <li>Add transition effect</li>
                <li>Reset rotation of the card</li>
                <li>Reset transformation of the title</li>
                <li>Reset transformation of the sneaker image</li>
                <li>Reset transformation of the description</li>
                <li>Reset transformation of the difficulty buttons</li>
                <li>Reset transformation of the start button</li>
              </ul>
            </label>
          </div>
          <h3>Step 5: Return JSX for the component</h3>

          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step5'
              checked={checkboxStates["step5"]}
              onChange={() => handleCheckboxChange("step5")}
            />
            <label htmlFor='step5'>
              <ul>
                <li>Container for the card with mouse move event handler</li>
                <li>Attach reference to the card element</li>
                <li>Attach mouse enter event handler</li>
                <li>Attach mouse leave event handler</li>
                <li>Container for the sneaker image</li>
                <li>Circular background for the image</li>
                <li>Source for the image</li>
                <li>Alt text for the image</li>
                <li>Attach reference to the sneaker image element</li>
                <li>Container for the information</li>
                <li>Title of the card</li>
                <li>Description of the card</li>
                <li>Container for the difficulty buttons</li>
                <li>Button for easy difficulty</li>
                <li>Button for advanced difficulty</li>
                <li>Button for hard difficulty</li>
                <li>Button for pro difficulty</li>
                <li>Container for the start button</li>
                <li>Start button</li>
              </ul>
            </label>
          </div>
        </div>
      ),
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson1.png"),
      link: "https://www.dropbox.com/scl/fi/6cblzwczzki50yxwaxszo/style.css?rlkey=bydjjmcbwquipvhhlw470mbkb&dl=0",
    },

    {
      taskId: "reacttask2",
      taskTitle: "BMI Tracker",
      introduction:
        "BMI Tracker is a user-friendly tool designed to calculate and monitor Body Mass Index (BMI) quickly and accurately. Easily input your weight and height to instantly receive your BMI along with personalized health messages, helping you track your fitness journey with ease.",
      taskText: ({ checkboxStates, handleCheckboxChange }) => (
        <div className='taskText-container'>
          <h3>Step 1: Import React and useState hook</h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step1'
              checked={checkboxStates["step1"]}
              onChange={() => handleCheckboxChange("step1")}
            />
            <label htmlFor='step1'>
              Import the React library and the useState hook from the react
              package. This is necessary to define a functional component and
              manage state within it.
            </label>
          </div>
          <br />

          <h3>Step 2: Import CSS files</h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step2'
              checked={checkboxStates["step2"]}
              onChange={() => handleCheckboxChange("step2")}
            />
            <label htmlFor='step2'>
              Import the CSS files (App.css or index.css) to style the BMI
              calculator component.
            </label>
          </div>
          <br />

          <h3>Step 3: Define the BMI function component</h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step3'
              checked={checkboxStates["step3"]}
              onChange={() => handleCheckboxChange("step3")}
            />
            <label htmlFor='step3'>Create a function component named BM3</label>
          </div>
          <h3>Step 4: State initialization</h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step4'
              checked={checkboxStates["step4"]}
              onChange={() => handleCheckboxChange("step4")}
            />
            <label htmlFor='step4'>
              Initialize state variables using the useState hook:
              <ul>
                <li>weight: Holds the weight input value, initialized to 0.</li>
                <li>height: Holds the height input value, initialized to 0.</li>
                <li>
                  bmi: Holds the calculated BMI value, initialized as an empty
                  string.
                </li>
                <li>
                  message: Holds the message corresponding to the BMI category,
                  initialized as an empty string.
                </li>
              </ul>
            </label>
          </div>
          <h3>Step 5: calcBmi function</h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step5'
              checked={checkboxStates["step5"]}
              onChange={() => handleCheckboxChange("step5")}
            />
            <label htmlFor='step5'>
              Define a function calcBmi to calculate BMI when the form is
              submitted:
              <ul>
                <li>Prevent the default form submission behavior.</li>
                <li>
                  Check if weight or height is equal to 0, if so, display an
                  alert asking the user to enter valid inputs.
                </li>
                <li>
                  Calculate BMI using the formula weight / (heightInCm *
                  heightInCm), where heightInCm is calculated by dividing height
                  by 100.
                </li>
                <li>Set the calculated BMI using setBmi.</li>
                <li>
                  Determine the BMI category based on the calculated BMI and set
                  the appropriate message using setMessage.
                </li>
              </ul>
            </label>
          </div>
          <h3>Step 6: Render JSX</h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step6'
              checked={checkboxStates["step6"]}
              onChange={() => handleCheckboxChange("step6")}
            />
            <label htmlFor='step6'>
              Return the JSX structure for the BMI calculator component:
              <ul>
                <li>
                  Enclose the entire component within a div with the class app.
                </li>
                <li>
                  Inside the div, create a container div with the class
                  container.
                </li>
                <li>Display the heading "BMI Calculator".</li>
                <li>Create a form with input fields for weight and height.</li>
                <li>
                  Attach the calcBmi function to the form's onSubmit event.
                </li>
                <li>
                  Add buttons for submitting the form and reloading the page.
                </li>
                <li>Display the calculated BMI and corresponding message.</li>
              </ul>
            </label>
          </div>
        </div>
      ),
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: require("../images/ReactLesson2.png"),
      link: "https://www.dropbox.com/scl/fi/03e0si4h3xgxgg74ygra3/BMIstyles.css.css?rlkey=v7kz0wgjp8qtyhfr7ttco3vqx&dl=0",
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
  {
    question: (
      <div className='faq-container-answer'>
        <p>
          {" "}
          Is this React school suitable for individuals who are new to
          programming without heavy theoretical emphasis?
        </p>
        
      </div>
    ),

    answer: (
      <div className='faq-container-answer'>
        <p>
          Yes, our React school is suitable for beginners who have a basic
          understanding of programming concepts. While we prioritize practical
          exercises over theoretical learning, we do assume that students have
          some foundational knowledge in programming. This might include
          familiarity with concepts such as variables, loops, functions, and
          basic HTML/CSS. However, our program is designed to guide beginners
          through hands-on tasks that will help them develop practical skills
          and confidence in React programming. Whether you're new to programming
          or looking to expand your skills specifically in React, our approach
          focuses on active engagement and real-world application to facilitate
          learning and growth.
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

{
      taskId: "reacttask",
      taskTitle: "Simple Web Page1",
      introduction:
        "",
      taskText: ({ checkboxStates, handleCheckboxChange }) => (
        <div className='taskText-container'>
          <h3>Step 1: </h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step1'
              checked={checkboxStates["step1"]}
              onChange={() => handleCheckboxChange("step1")}
            />
            <label htmlFor='step1'>
              text
            </label>
          </div>
          <br />
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step2'
              checked={checkboxStates["step2"]}
              onChange={() => handleCheckboxChange("step2")}
            />
            <label htmlFor='step2'>
              text
            </label>
          </div>
          <h3>Step 2: </h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step3'
              checked={checkboxStates["step3"]}
              onChange={() => handleCheckboxChange("step3")}
            />
            <label htmlFor='step3'>
              text
            </label>
          </div>
          <br />
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step4'
              checked={checkboxStates["step4"]}
              onChange={() => handleCheckboxChange("step4")}
            />
            <label htmlFor='step4'>
              text
            </label>
          </div>
          <h3>Step 3: </h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step5'
              checked={checkboxStates["step5"]}
              onChange={() => handleCheckboxChange("step5")}
            />
            <label htmlFor='step5'>
              text
            </label>
          </div>
          <h3>Step 4: </h3>
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step6'
              checked={checkboxStates["step6"]}
              onChange={() => handleCheckboxChange("step6")}
            />
            <label htmlFor='step6'>
              text
            </label>
          </div>
          <br />
          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='step7'
              checked={checkboxStates["step7"]}
              onChange={() => handleCheckboxChange("step7")}
            />
            <label htmlFor='step7'>
              text
            </label>
          </div>
        </div>
      ),
      taskType: "js",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["js Basics"],
      completed: false,
      img: "https://user-images.githubusercontent.com/68542775/167072911-dc31eac8-6885-4a05-9c25-279ecce22a79.png",
    },

------------- CSS
  {
      taskId: "csstask1",
      taskTitle: "CSS Task 1 Description",
      introduction: "introduction/description",
      taskText: "",
      taskType: "CSS",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["CSS Basics"],
      completed: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817",
    },

      */
     