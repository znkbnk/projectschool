const tasksData = {
  js: [
    {
      taskId: "jstask1",
      taskTitle: "Simple Web Page1",
      introduction:
        "Creating a simple JS page involves structuring the document with JS tags like html, head, and body, adding content elements such as headings and paragraphs, and optionally styling the page using CSS, resulting in a basic webpage that can be viewed in a web browser.",
      taskText: (
        <div className='taskText-container'>
          <h3>Step 1: Setting Up the html File</h3>
          <div className='checkbox-container'>
            <input type='checkbox' id='step1' />
            <label htmlFor='step1'>
              Open a text editor such as Notepad, Sublime Text, or Visual Studio
              Code.
            </label>
          </div>
          <br />
          <div className='checkbox-container'>
            <input type='checkbox' id='step2' />
            <label htmlFor='step2'>
              Create a new file and save it with a .js extension, for example,
              index.js.
            </label>
          </div>
          <h3>Step 2: Writing the Basic html Structure</h3>
          <div className='checkbox-container'>
            <input type='checkbox' id='step3' />
            <label htmlFor='step3'>
              In the html file, write the basic structure of an html document
              using !.
            </label>
          </div>
          <br />
          <div className='checkbox-container'>
            <input type='checkbox' id='step4' />
            <label htmlFor='step4'>
              The code should include the !DOCTYPE html declaration, the html
              root element, the head section with meta information and the body
              section where the visible content will go.
            </label>
          </div>
          <h3>Step 3: Adding Content to the html Page</h3>
          <div className='checkbox-container'>
            <input type='checkbox' id='step5' />
            <label htmlFor='step5'>
              Add some content to the body section; hheading h1 and a paragraph
              p containing some introductory text.
            </label>
          </div>
          <h3>Step 4: Adding Styling (Optional)</h3>
          <div className='checkbox-container'>
            <input type='checkbox' id='step6' />
            <label htmlFor='step6'>
              You can add some basic CSS to style your html page. For
              simplicity, use inline styles.
            </label>
          </div>
          <br />
          <div className='checkbox-container'>
            <input type='checkbox' id='step7' />
            <label htmlFor='step7'>
              Save your html file and open it in a web browser. You should see
              your simple html page with the added content and styling.
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
   
  ],
  CSS: [
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
    {
      taskId: "csstask2",
      taskTitle: "CSS Task 2 Description",
      introduction: "introduction/description",
      taskText: "",
      taskType: "CSS",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["CSS Basics"],
      completed: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817",
    },
    {
      taskId: "csstask3",
      taskTitle: "CSS Task 2 Description",
      introduction: "introduction/description",
      taskText: "",
      taskType: "CSS",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["CSS Basics"],
      completed: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817",
    },
    {
      taskId: "csstask4",
      taskTitle: "CSS Task 2 Description",
      introduction: "introduction/description",
      taskText: "",
      taskType: "CSS",
      difficulty: "Hard",
      authorIndex: 0,
      prerequisites: ["CSS Basics"],
      completed: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817",
    },
  ],
  React: [
    {
      taskId: "reacttask1",
      taskTitle: "React Task 1 Description",
      introduction: "introduction/description",
      taskText: "",
      taskType: "React",
      difficulty: "Easy",
      authorIndex: 0,
      prerequisites: ["React Basics"],
      completed: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
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
    description: "ты тоже это заметил?",
    picture: { medium: require("../images/me.jpg") }, // Use require to import images
  },
  {
    name: { first: "Somebody", last: "Ok" },
    position: "React",
    description: "ты тоже это заметил?",
    picture: { medium: require("../images/sectionImg7.png") }, // Use require to import images
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
        </p>{" "}
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
    question: "3",
    answer: "3",
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
  {
    id: 2,

    category: "JavaScript",
    title: "Filtering Logic Mastery",
    extract:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, omnis placeat. Aut ipsum tenetur temporibus asperiores cumque, iure deserunt quis...",
    date: "07 june 2020",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
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
