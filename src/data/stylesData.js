// stylesData.js
const stylesData = [
  {
    taskId: "3D-Interactive-Card",
    title: "3D Interactive Card",
    css: `
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    
    .app-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f0f0f0;
      margin: 0;
    }
    
    
    .card {
      width: 300px;
      height: 400px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
      transition: transform 0.5s;
      transform-style: preserve-3d;
      perspective: 1000px;
    }
    
    
    .sneaker-image {
      position: relative;
      z-index: 1;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    
    .circle {
      position: absolute;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: #f5f5f5;
      z-index: -1;
    }
    
    
    .sneaker-image img {
      width: 150px; /* Adjust size as needed */
      height: auto;
      display: block;
      transform-origin: center;
      transition: transform 0.5s;
    }
    
    
    .info {
      padding: 20px;
      text-align: center;
    }
    
    
    .title {
      font-size: 24px;
      margin: 0;
      transition: transform 0.5s;
    }
    
    
    .description {
      font-size: 16px;
      margin: 10px 0;
      transition: transform 0.5s;
    }
    
    
    .difficulty-buttons {
      display: flex;
      justify-content: space-around;
      margin: 20px 0;
      transition: transform 0.5s;
    }
    
    
    .difficulty-buttons button {
      padding: 10px;
      border: none;
      background: #ddd;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }
    
    
    .difficulty-buttons button:hover {
      background: #ccc;
    }
    
    
    .start-button {
      margin-top: 20px;
      transition: transform 0.5s;
    }
    
    
    .start-button button {
      padding: 10px 20px;
      border: none;
      background: #3498db;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }
    
    
    .start-button button:hover {
      background: #2980b9;
    }
    
      
      `,
  },
  {
    taskId: "BMI-Tracker",
    title: "BMITracker",
    css: `body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    .app {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
    }
    
    .container {
      box-shadow: 0px 0px 12px #ccc;
      border-radius: 8px;
      padding: 3rem;
    }
    
    input {
      width: 100%;
      font-size: 1.2rem;
      padding: 15px 4px;
      margin: 8px 0;
      border-radius: 8px;
    }
    
    .btn {
      display: block;
      width: 100%;
      font-size: 1.2rem;
      margin: 8px 0;
      padding: 15px 0;
      background-color: #0077ee;
      color: #fff;
      border: 1px solid #333;
      border-radius: 8px;
      cursor: pointer;
    }
    /* unvisited link */
    
    .btn-outline {
      background-color: #fff;
      color: #707377;
    }
    
    .center {
      text-align: center;
      margin: 24px 0;
    }
    
    p {
      margin: 10px 0;
    }  
      `,
  },
  {
    taskId: "Dark-Light-Mode-Toggle",
    title: "Dark Light Mode Toggle",
    css: `:root {
      --clr-bcg: #fff;
      --clr-font: #282c35;
      --clr-primary: #d23669;
    }
    
    .dark-theme {
      --clr-bcg: #282c35;
      --clr-font: #fff;
      --clr-primary: #ffa7c4;
    }
    .light-theme {
      --clr-bcg: #fff;
      --clr-font: #282c35;
      --clr-primary: #d23669;
    }
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      background: var(--clr-bcg);
      color: var(--clr-font);
      line-height: 1.5;
      font-size: 0.875rem;
      transition: all 0.3s linear;
    }
    
    /*
      =============== 
      Navbar
      ===============
      */
    .nav-center {
      width: 90vw;
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 0;
    }
    .nav-center h1 {
      font-size: 2.5rem;
      text-transform: capitalize;
      letter-spacing: 2px;
    }
    
    .articles {
      padding: 5rem 0;
      width: 90vw;
      max-width: 600px;
      margin: 0 auto;
    }
    .post {
      margin-bottom: 3rem;
    }
    .post h2 {
      color: var(--clr-primary);
      text-transform: capitalize;
      letter-spacing: 2px;
      font-size: 1.75rem;
    }
    .post-info {
      margin-bottom: 0.75rem;
      font-style: italic;
    }
    .post-info span {
      margin-right: 0.5rem;
    }
    
    .btn {
      background: var(--clr-primary);
      color: var(--clr-bcg);
      padding: 0.25rem 0.5rem;
      border-radius: 5px;
      border-color: transparent;
      text-transform: capitalize;
      transition: all 0.3s linear;
      font-weight: bold;
      letter-spacing: 2px;
      cursor: pointer;
    }`,
  },
  {
    taskId: "Sortify-Search-by-Name",
    title: "Sortify Search by Name",
    css: `
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    `,
  },
  {
    taskId: "Simple-Quiz-App",
    title: "Simple Quiz App",
    css: `
    body {
      margin: 0;
      font-family: "Verdana", cursive, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    
    .app {
      background-color: #ffffff;
      width: 600px;
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .score-section {
      margin-top: 20px;
      font-size: 20px;
    }
    
    /* QUESTION SECTION */
    .question-section {
      text-align: center;
      width: 100%;
      margin-bottom: 20px;
    }
    
    .question-count {
      margin-bottom: 10px;
    }
    
    .question-count span {
      font-size: 24px;
    }
    
    .question-text {
      font-size: 18px;
      margin-bottom: 10px;
    }
    
    /* ANSWER SECTION */
    .answer-section {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    
    button {
      font-size: 16px;
      color: #ffffff;
      background-color: #4caf50;
      border: none;
      border-radius: 8px;
      padding: 15px 20px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    button:hover {
      background-color: #45a049;
    }
    
    button:active {
      background-color: #3e8e41;
    }
    
    .correct {
      background-color: #66bb6a;
    }
    
    .incorrect {
      background-color: #ef5350;
    }
    
    `,
  },
  {
    taskId: "FAQ",
    title: "FAQ",
    css: `
    :root {
      --clr-primary-1: hsl(205, 86%, 17%);
      --clr-primary-5: hsl(205, 78%, 60%);
      --clr-grey-1: hsl(209, 61%, 16%);
      --clr-grey-3: hsl(209, 34%, 30%);
      --clr-grey-10: hsl(210, 36%, 96%);
      --transition: all 0.3s linear;
      --spacing: 0.1rem;
      --radius: 0.25rem;
      --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      --max-width: 1170px;
      --fixed-width: 920px;
    }
    
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      background: var(--clr-grey-10);
      color: var(--clr-grey-1);
      line-height: 1.5;
      font-size: 0.875rem;
    }
    
    ul {
      list-style-type: none;
    }
    
    a {
      text-decoration: none;
    }
    
    h1,
    h2,
    h3,
    h4 {
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      line-height: 1.25;
      margin-bottom: 0.75rem;
    }
    
    h1 {
      font-size: 3rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.25rem;
    }
    
    h4 {
      font-size: 0.875rem;
    }
    
    p {
      margin-bottom: 1.25rem;
      color: var(--clr-grey-3);
    }
    
    @media screen and (min-width: 800px) {
      h1 {
        font-size: 4rem;
      }
      h2 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.75rem;
      }
      h4 {
        font-size: 1rem;
      }
      body {
        font-size: 1rem;
      }
      h1,
      h2,
      h3,
      h4 {
        line-height: 1;
      }
    }
    
    /* App Styles */
    main {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .container {
      width: 90vw;
      margin: 5rem auto;
      background: var(--clr-white);
      border-radius: var(--radius);
      padding: 2.5rem 2rem;
      max-width: var(--fixed-width);
      display: grid;
      gap: 1rem 2rem;
      box-shadow: var(--light-shadow);
    }
    
    .container h3 {
      line-height: 1.2;
      font-weight: 500;
    }
    
    @media screen and (min-width: 992px) {
      .container {
        display: grid;
        grid-template-columns: 250px 1fr;
      }
    }
    
    /* Question Styles */
    .question {
      padding: 1rem 1.5rem;
      border: 2px solid var(--clr-grey-10);
      margin-bottom: 1rem;
      border-radius: var(--radius);
      box-shadow: var(--light-shadow);
    }
    
    .question h4 {
      text-transform: none;
      line-height: 1.5;
    }
    
    .question p {
      color: var(--clr-grey-3);
      margin-bottom: 0;
      margin-top: 0.5rem;
    }
    
    .question header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .question header h4 {
      margin-bottom: 0;
    }
    
    .btn {
      background: transparent;
      border-color: transparent;
      width: 2rem;
      height: 2rem;
      background: var(--clr-grey-10);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: var(--clr-primary-5);
      cursor: pointer;
      margin-left: 1rem;
      align-self: center;
      min-width: 2rem;
    }
    
    `,
  },
  {
    taskId: "Birthday-Reminder",
    title: "Birthday Reminder",
    css: `
    :root {
      --primary-color: #ff6b6b;
      --secondary-color: #48dbfb;
      --text-color: #2c3a47;
      --bg-color: #f8f9fa;
      --accent-color: #1dd1a1;
      --shadow-color: rgba(0, 0, 0, 0.2);
    }
    html {
      display: flex;
      justify-content: center;
    }
    
    
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 500px;
      font-family: "Poppins", sans-serif;
      background: var(--bg-color);
      color: var(--text-color);
      line-height: 1.6;
    }
    
    
    h1,
    h2,
    h3,
    h4 {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
    }
    
    
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 1.5rem;
      box-shadow: 0 10px 20px var(--shadow-color);
      padding: 2.5rem;
      margin-top: 40px;
      transition: all 0.3s ease;
    }
    
    
    .container:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 25px var(--shadow-color);
    }
    
    
    .person img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      box-shadow: 0 5px 15px var(--shadow-color);
      transition: all 0.3s ease;
    }
    
    
    .person img:hover {
      transform: scale(1.1);
    }
    
    
    .container button {
      background: var(--accent-color);
      color: #fff;
      border: none;
      border-radius: 30px;
      padding: 0.8rem 1.5rem;
      font-size: 1.1rem;
      cursor: pointer;
      outline: none;
      transition: background 0.3s ease;
    }
    
    
    .container button:hover {
      background: #16a085;
    }
    
    `,
  },
  {
    taskId: "Dynamic-Box-Shadow-Generator",
    title: "Dynamic Box Shadow Generator",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f2f2f2;
  }
  
  .container {
    display: flex;
    min-height: 100vh;
    justify-content: space-between;
    align-items: center;
    margin: 0 700px;
  }
  
  .preview-box {
    height: 200px;
    width: 200px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .preview-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .controls-box {
    width: 600px;
    background-color: #272727;
    padding: 2em;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    color: #fff;
    margin: 2em;
    transition: all 0.3s ease;
  }
  
  .controls-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }
  
  label {
    display: block;
    margin-bottom: 1em;
    color: #aaa;
  }
  
  input[type="range"],
  input[type="color"] {
    width: 100%;
    display: block;
    margin-bottom: 1.5em;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5em;
    outline: none;
  }
  
  input[type="color"] {
    width: 30px;
    padding: 0;
  }
  
  .text-right {
    text-align: center;
  }
  
  button {
    border: none;
    outline: none;
    background-color: #007bff;
    padding: 1em 2em;
    border-radius: 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .codes.controls-box {
    margin-top: 2em;
  }
  
  .codes .code {
    color: #e64;
  }
  
    `,
  },
  {
    taskId: "Memory-Game",
    title: "Memory Game",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body {
    height: 100%;
  }
  
  body {
    font-family: "Roboto", "Arial", sans-serif;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
  
  .container {
    height: 600px;
    width: 600px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1em;
    justify-content: center;
  }
  
  .card {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transform: rotateY(180deg);
    animation: 1s ease-out 0s 1 hideCard;
    transition: transform 0.5s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 150px;
    height: 150px;
  }
  
  @keyframes hideCard {
    0%,
    70% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
  
  .card img {
    max-width: 90%;
    max-height: 90%;
    transition: transform 0.5s;
    transform: scale(0);
    animation: 1s ease-out 0s 1 hideImage;
  }
  
  @keyframes hideImage {
    0%,
    70% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  
  .card.active {
    transform: rotateY(0);
  }
  
  .card.correct {
    background-color: #4caf50;
  }
  
  .card.wrong {
    background-color: #f44336;
  }
  
  .card.active img {
    transform: scale(1);
  }
  
  /* Button Styles */
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button {
    margin: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
    `,
  },
  {
    taskId: "Color-Generator",
    title: "Color Generator",
    css: `
    :root {
      --clr-primary-1: hsl(205, 86%, 17%);
      --clr-primary-2: hsl(205, 77%, 27%);
      --clr-primary-3: hsl(205, 72%, 37%);
      --clr-primary-4: hsl(205, 63%, 48%);
      --clr-primary-5: hsl(205, 78%, 60%);
      --clr-primary-6: hsl(205, 89%, 70%);
      --clr-primary-7: hsl(205, 90%, 76%);
      --clr-primary-8: hsl(205, 86%, 81%);
      --clr-primary-9: hsl(205, 90%, 88%);
      --clr-primary-10: hsl(205, 100%, 96%);
      --clr-grey-1: hsl(209, 61%, 16%);
      --clr-grey-2: hsl(211, 39%, 23%);
      --clr-grey-3: hsl(209, 34%, 30%);
      --clr-grey-4: hsl(209, 28%, 39%);
      --clr-grey-5: hsl(210, 22%, 49%);
      --clr-grey-6: hsl(209, 23%, 60%);
      --clr-grey-7: hsl(211, 27%, 70%);
      --clr-grey-8: hsl(210, 31%, 80%);
      --clr-grey-9: hsl(212, 33%, 89%);
      --clr-grey-10: hsl(210, 36%, 96%);
      --clr-white: #fff;
      --clr-red-dark: hsl(360, 67%, 44%);
      --clr-red-light: hsl(360, 71%, 66%);
      --clr-green-dark: hsl(125, 67%, 44%);
      --clr-green-light: hsl(125, 71%, 66%);
      --clr-black: #222;
      --transition: all 0.3s ease-in-out;
      --spacing: 0.1rem;
      --radius: 0.5rem;
      --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      --dark-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
      --max-width: 1170px;
      --fixed-width: 620px;
    }
    
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      background: var(--clr-grey-10);
      color: var(--clr-grey-1);
      line-height: 1.6;
      font-size: 1rem;
    }
    
    ul {
      list-style-type: none;
    }
    
    a {
      text-decoration: none;
    }
    
    h1,
    h2,
    h3,
    h4 {
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
    
    h1 {
      font-size: 3.5rem;
    }
    
    h2 {
      font-size: 2.5rem;
    }
    
    h3 {
      font-size: 1.75rem;
    }
    
    h4 {
      font-size: 1.25rem;
    }
    
    p {
      margin-bottom: 1.5rem;
      color: var(--clr-grey-6);
    }
    
    @media screen and (min-width: 800px) {
      body {
        font-size: 1.1rem;
      }
      h1,
      h2,
      h3,
      h4 {
        line-height: 1.3;
      }
    }
    
    .section {
      width: 90vw;
      margin: 0 auto;
      max-width: var(--max-width);
      padding: 2rem;
      background-color: var(--clr-white);
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    }
    
    @media screen and (min-width: 992px) {
      .section {
        width: 95vw;
      }
    }
    
    .container {
      text-align: center;
      display: flex;
      align-items: center;
      height: 100px;
      padding: 0 2rem;
      background-color: var(--clr-primary-10);
      border-radius: var(--radius);
      box-shadow: var(--light-shadow);
    }
    
    .container h3 {
      margin-right: 2rem;
      color: var(--clr-primary-2);
    }
    
    input,
    .btn {
      padding: 0.8rem 1.5rem;
      font-size: 1.1rem;
      border-radius: var(--radius);
      border: none;
      transition: var(--transition);
    }
    
    .btn {
      background: var(--clr-primary-2);
      color: var(--clr-white);
      cursor: pointer;
    }
    
    .btn:hover {
      background: var(--clr-primary-6);
    }
    
    input.error {
      border: 2px solid var(--clr-red-dark);
    }
    
    .colors {
      min-height: calc(100vh - 100px);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300, 1fr));
      grid-template-rows: repeat(auto-fit, minmax(66px, 1fr));
    }
    
    .color {
      padding: 1rem 2rem;
      cursor: pointer;
      font-size: 1rem;
      text-transform: none;
      background-color: var(--clr-white);
      border-radius: var(--radius);
      box-shadow: var(--light-shadow);
      transition: var(--transition);
    }
    
    .color:hover {
      transform: translateY(-5px);
      box-shadow: var(--dark-shadow);
    }
    
    .percent-value,
    .color-value {
      margin-bottom: 0.5rem;
    }
    
    .color-light .color-value,
    .color-light .percent-value {
      color: var(--clr-white);
    }
    
    .alert {
      text-transform: uppercase;
      font-size: 0.9rem;
      margin-top: 1rem;
      color: var(--clr-red-dark);
    }
    
    `,
  },
  {
    taskId: "Range-Slider",
    title: "Range Slider",
    css: `
    body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
    }
    
    * {
      box-sizing: border-box;
    }
    
    .container {
      width: 450px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      position: relative;
      padding: 20px 0;
    }
    
    input[type="range"] {
      -webkit-appearance: none;
      width: 100%;
      height: 0;
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }
    
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 24px;
      height: 24px;
      background: #007bff;
      border: 3px solid #fff;
      cursor: pointer;
      border-radius: 50%;
      pointer-events: auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: background 0.3s ease;
      z-index: 3;
    }
    
    input[type="range"]::-webkit-slider-thumb:hover {
      background: #0056b3;
    }
    
    input[type="range"]::-moz-range-thumb {
      width: 24px;
      height: 24px;
      background: #007bff;
      border: 3px solid #fff;
      cursor: pointer;
      border-radius: 50%;
      pointer-events: auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: background 0.3s ease;
      z-index: 3;
    }
    
    input[type="range"]::-moz-range-thumb:hover {
      background: #0056b3;
    }
    
    .slider {
      position: relative;
      height: 8px;
      background: #ddd;
      border-radius: 4px;
      margin-top: 20px;
      z-index: 1;
    }
    
    .slider__track,
    .slider__range {
      position: absolute;
      height: 100%;
      border-radius: 4px;
    }
    
    .slider__track {
      width: 100%;
      background: #ddd;
    }
    
    .slider__range {
      background: #007bff;
    }
    
    .leftvalue,
    .rightvalue {
      position: absolute;
      top: -35px;
      color: #333;
      font-size: 14px;
      background: #fff;
      padding: 4px 8px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      white-space: nowrap;
      font-weight: bold;
    }
    
    .leftvalue {
      transform: translateX(-50%);
    }
    
    .rightvalue {
      transform: translateX(-50%);
    }
    
    .leftvalue span,
    .rightvalue span {
      position: absolute;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #ffffff;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
    
    `,
  },
  {
    taskId: "Form-Validation-Component",
    title: "Form Validation Component",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    height: 100vh;
    background-image: linear-gradient(
      to right,
      #234c77 0%,
      #9b3c3c 50%,
      #306d5e 100%
    );
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card {
    background: #f0f5f9;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50rem;
    height: 30rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }
  
  .card-image {
    background: url("https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-position: center;
    background-size: cover;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  input {
    padding: 12px 16px;
    margin: 8px;
    width: 20rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-bottom: 2px solid #5eff8b;
    outline: none;
    color: #0c4164;
  }
  
  .submit-btn {
    width: 80%;
    margin-top: 20px;
    padding: 12px 24px;
    background: #52bbb2;
    cursor: pointer;
    border: none;
    color: #000;
    font-weight: bold;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
  }
  
  .error {
    font-family: sans-serif;
    color: #ff6b6b;
  }
  
    `,
  },
  {
    taskId: "Markdown-Preview-App",
    title: "Markdown Preview App",
    css: `
    :root {
      /* Colors */
      --primary: hsl(205, 78%, 60%);
      --primary-dark: hsl(205, 86%, 17%);
      --primary-light: hsl(205, 90%, 88%);
      --secondary: hsl(360, 67%, 44%);
      --grey: hsl(210, 22%, 49%);
      --light-grey: hsl(210, 36%, 96%);
      --dark-grey: hsl(209, 61%, 16%);
      --black: #000;
      --white: #fff;
    
      /* Spacing */
      --spacing: 2rem;
    
      /* Shadows */
      --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    
      /* Fonts */
      --font-primary: "Roboto", sans-serif;
      --font-secondary: "Open Sans", sans-serif;
    }
    
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: var(--font-primary);
      background-color: var(--light-grey);
      color: var(--black);
      line-height: 1.6;
      font-size: 16px;
    }
    
    h1,
    h2,
    h3,
    h4 {
      font-family: var(--font-secondary);
      margin-bottom: 1rem;
      transition: var(--transition);
    }
    
    /* Markdown */
    .markdown {
      padding: var(--spacing);
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
    }
    
    .input {
      border: 1px solid var(--grey);
      border-radius: 0.5rem;
      font-size: 1rem;
      padding: 1rem;
      box-shadow: var(--shadow);
      min-height: 20vh;
      transition: var(--transition);
    }
    
    .input:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(68, 138, 255, 0.2);
    }
    
    .input,
    .result {
      padding: 1rem;
    }
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      transition: var(--transition);
    }
    
    img:hover {
      transform: scale(1.05);
    }
    
    blockquote {
      font-style: italic;
      border-left: 4px solid var(--primary);
      padding-left: 1rem;
      margin: 1rem 0;
      transition: var(--transition);
    }
    
    pre {
      background-color: var(--black);
      color: var(--white);
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      overflow-x: auto;
      transition: var(--transition);
    }
    
    pre:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow);
    }
    
    `,
  },
  {
    taskId: "Menu-App",
    title: "Menu App",
    css: `
    :root {
      /* Colors */
      --clr-primary: hsl(217, 90%, 61%);
      --clr-secondary: hsl(34, 97%, 64%);
      --clr-accent: hsl(217, 90%, 61%);
      --clr-background: #f4f4f4;
      --clr-text: #333;
      --clr-grey: #999;
      --clr-white: #fff;
    
      /* Shadows */
      --shadow-light: 0 2px 5px rgba(0, 0, 0, 0.1);
      --shadow-dark: 0 5px 15px rgba(0, 0, 0, 0.2);
    
      /* Spacing */
      --spacing-xs: 0.5rem;
      --spacing-sm: 1rem;
      --spacing-md: 1.5rem;
      --spacing-lg: 2rem;
    
      /* Border radius */
      --radius-sm: 0.25rem;
      --radius-md: 0.5rem;
      --radius-lg: 1rem;
    
      /* Transitions */
      --transition: all 0.3s ease;
    }
    
    /*
      =============== 
      Global Styles
      ===============
      */
    
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: "Roboto", sans-serif;
      background: var(--clr-background);
      color: var(--clr-text);
      line-height: 1.6;
      font-size: 1rem;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }
    
    h1,
    h2,
    h3,
    h4 {
      margin-bottom: var(--spacing-sm);
    }
    
    p {
      margin-bottom: var(--spacing-md);
    }
    
    ul {
      list-style-type: none;
    }
    
    /* 
      =============== 
      Menu
      ===============
      */
    
    .menu {
      padding: var(--spacing-lg) 0;
    }
    
    .title {
      text-align: center;
      margin-bottom: var(--spacing-md);
    }
    
    .underline {
      width: 5rem;
      height: 0.25rem;
      background: var(--clr-primary);
      margin: var(--spacing-sm) auto;
    }
    
    .btn-container {
      margin-bottom: var(--spacing-lg);
      display: flex;
      justify-content: center;
    }
    
    .filter-btn {
      background: transparent;
      border: none;
      font-size: 1rem;
      text-transform: capitalize;
      margin: 0 var(--spacing-xs);
      letter-spacing: 1px;
      padding: 0.375rem 0.75rem;
      color: var(--clr-primary);
      cursor: pointer;
      transition: var(--transition);
      border-radius: var(--radius-sm);
    }
    
    .filter-btn:hover {
      background: var(--clr-primary);
      color: var(--clr-white);
    }
    
    .filter-btn.active {
      border-bottom: 2px solid var(--clr-primary);
    }
    
    .section-center {
      width: 90%;
      margin: 0 auto;
      max-width: 1170px;
      display: grid;
      gap: var(--spacing-lg);
      justify-items: center;
    }
    
    .menu-item {
      display: grid;
      grid-template-columns: minmax(200px, 1fr) 2fr;
      gap: var(--spacing-md);
      max-width: 800px;
    }
    
    .photo {
      object-fit: cover;
      height: 150px;
      width: 100%;
      border-radius: var(--radius-md);
    }
    
    .item-info header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--clr-grey);
    }
    
    .item-info h4 {
      margin-bottom: var(--spacing-xs);
    }
    
    .price {
      color: var(--clr-accent);
    }
    
    .item-text {
      padding-top: var(--spacing-sm);
    }
    
    @media screen and (min-width: 768px) {
      .menu-item {
        grid-template-columns: minmax(150px, 1fr) 3fr;
        gap: var(--spacing-lg);
        max-width: 1000px;
      }
    
      .photo {
        height: 120px;
      }
    }
    
    @media screen and (min-width: 1200px) {
      .section-center {
        width: 95%;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
    
    `,
  },
  {
    taskId: "Responsive-Navbar",
    title: "Responsive Navbar",
    css: `
    :root {
      /* dark shades of primary color*/
      --clr-primary-1: hsl(205, 86%, 17%);
      --clr-primary-2: hsl(205, 77%, 27%);
      --clr-primary-3: hsl(205, 72%, 37%);
      --clr-primary-4: hsl(205, 63%, 48%);
      /* primary/main color */
      --clr-primary-5: hsl(205, 78%, 60%);
      /* lighter shades of primary color */
      --clr-primary-6: hsl(205, 89%, 70%);
      --clr-primary-7: hsl(205, 90%, 76%);
      --clr-primary-8: hsl(205, 86%, 81%);
      --clr-primary-9: hsl(205, 90%, 88%);
      --clr-primary-10: hsl(205, 100%, 96%);
      /* darkest grey - used for headings */
      --clr-grey-1: hsl(209, 61%, 16%);
      --clr-grey-2: hsl(211, 39%, 23%);
      --clr-grey-3: hsl(209, 34%, 30%);
      --clr-grey-4: hsl(209, 28%, 39%);
      /* grey used for paragraphs */
      --clr-grey-5: hsl(210, 22%, 49%);
      --clr-grey-6: hsl(209, 23%, 60%);
      --clr-grey-7: hsl(211, 27%, 70%);
      --clr-grey-8: hsl(210, 31%, 80%);
      --clr-grey-9: hsl(212, 33%, 89%);
      --clr-grey-10: hsl(210, 36%, 96%);
      --clr-white: #fff;
      --clr-red-dark: hsl(360, 67%, 44%);
      --clr-red-light: hsl(360, 71%, 66%);
      --clr-green-dark: hsl(125, 67%, 44%);
      --clr-green-light: hsl(125, 71%, 66%);
      --clr-black: #222;
      --transition: all 0.3s linear;
      --spacing: 0.1rem;
      --radius: 0.25rem;
      --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      --max-width: 1170px;
      --fixed-width: 620px;
    }
    /*
      =============== 
      Global Styles
      ===============
      */
    
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      background: var(--clr-grey-10);
      color: var(--clr-grey-1);
      line-height: 1.5;
      font-size: 0.875rem;
    }
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4 {
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      line-height: 1.25;
      margin-bottom: 0.75rem;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    h4 {
      font-size: 0.875rem;
    }
    p {
      margin-bottom: 1.25rem;
      color: var(--clr-grey-5);
    }
    @media screen and (min-width: 800px) {
      h1 {
        font-size: 4rem;
      }
      h2 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.75rem;
      }
      h4 {
        font-size: 1rem;
      }
      body {
        font-size: 1rem;
      }
      h1,
      h2,
      h3,
      h4 {
        line-height: 1;
      }
    }
    
    /* section */
    .section {
      width: 90vw;
      margin: 0 auto;
      max-width: var(--max-width);
    }
    
    @media screen and (min-width: 992px) {
      .section {
        width: 95vw;
      }
    }
    
    /*
      =============== 
      Navbar
      ===============
      */
    nav {
      background: var(--clr-white);
      box-shadow: var(--light-shadow);
    }
    .nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    
    .nav-toggle {
      font-size: 1.2rem;
      color: var(--clr-primary);
      background: transparent;
      border: none;
      transition: var(--transition);
    }
    
    .nav-toggle:hover {
      color: var(--clr-primary-light);
      transform: rotate(90deg);
    }
    .logo {
      height: 40px;
    }
    .links a {
      color: var(--clr-grey);
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: 0.05rem;
      display: block;
      padding: 1rem;
      transition: var(--transition);
    }
    
    .links a:hover {
      background: var(--clr-primary-light);
      color: var(--clr-primary);
      padding-left: calc(1rem + 0.5rem);
    }
    .social-icons {
      display: none;
    }
    .links-container {
      height: 0;
      overflow: hidden;
      transition: var(--transition);
    }
    .show-container {
      height: 10rem;
    }
    @media screen and (min-width: 800px) {
      .nav-center {
        max-width: 1170px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
      }
      .nav-header {
        padding: 0;
      }
      .nav-toggle {
        display: none;
      }
      .links-container {
        height: auto !important;
      }
      .links {
        display: flex;
      }
      .links a {
        padding: 0;
        margin: 0 0.5rem;
      }
      .links a:hover {
        padding: 0;
        background: transparent;
      }
      .social-icons {
        display: flex;
      }
      .social-icons a {
        margin: 0 0.75rem;
        font-size: 1.2rem;
        color: var(--clr-primary);
        transition: var(--transition);
      }
    
      .social-icons a:hover {
        color: var(--clr-primary-light);
      }
    }
    
    `,
  },
  {
    taskId: "Pagination-Page",
    title: "Pagination Page",
    css: `
    :root {
      /* dark shades of primary color*/
      --clr-primary-1: hsl(200, 86%, 15%);
      --clr-primary-2: hsl(200, 77%, 25%);
      --clr-primary-3: hsl(200, 72%, 35%);
      --clr-primary-4: hsl(200, 63%, 45%);
      /* primary/main color */
      --clr-primary-5: hsl(200, 78%, 55%);
      /* lighter shades of primary color */
      --clr-primary-6: hsl(200, 89%, 65%);
      --clr-primary-7: hsl(200, 90%, 71%);
      --clr-primary-8: hsl(200, 86%, 76%);
      --clr-primary-9: hsl(200, 90%, 83%);
      --clr-primary-10: hsl(200, 100%, 91%);
      /* darkest grey - used for headings */
      --clr-grey-1: hsl(205, 61%, 13%);
      --clr-grey-2: hsl(207, 39%, 20%);
      --clr-grey-3: hsl(205, 34%, 27%);
      --clr-grey-4: hsl(205, 28%, 36%);
      /* grey used for paragraphs */
      --clr-grey-5: hsl(206, 22%, 46%);
      --clr-grey-6: hsl(205, 23%, 57%);
      --clr-grey-7: hsl(207, 27%, 67%);
      --clr-grey-8: hsl(206, 31%, 77%);
      --clr-grey-9: hsl(208, 33%, 86%);
      --clr-grey-10: hsl(206, 36%, 93%);
      --clr-white: #fff;
      --clr-red-dark: hsl(360, 67%, 40%);
      --clr-red-light: hsl(360, 71%, 60%);
      --clr-green-dark: hsl(125, 67%, 40%);
      --clr-green-light: hsl(125, 71%, 60%);
      --clr-black: #222;
    
      --transition: all 0.4s ease-in-out;
      --spacing: 0.2rem;
      --radius: 1rem;
      --light-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      --dark-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
      --max-width: 1200px;
      --fixed-width: 640px;
    }
    
    /*
      =============== 
      Global Styles
      ===============
      */
    
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: "Poppins", sans-serif;
      background: var(--clr-grey-6);
      color: var(--clr-grey-1);
      line-height: 1.6;
      font-size: 1rem;
    }
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4 {
      letter-spacing: var(--spacing);
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1.25rem;
    }
    p {
      margin-bottom: 1.5rem;
      color: var(--clr-grey-5);
    }
    
    /*
      =============== 
      Pagination
      ===============
      */
    .section-title {
      text-align: center;
      margin: 5rem 0 7rem;
    }
    .underline {
      width: 20rem;
      height: 0.3rem;
      background: var(--clr-primary-3);
      margin: 0 auto;
    }
    .followers {
      width: 95vw;
      max-width: var(--max-width);
      margin: 6rem auto;
    }
    .container {
      display: grid;
      gap: 2.5rem;
      margin-bottom: 5rem;
    }
    @media screen and (min-width: 576px) {
      .container {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      }
    }
    .card {
      background: var(--clr-white);
      border-radius: 50%;
      box-shadow: var(--light-shadow);
      padding: 2.5rem 4rem;
      text-align: center;
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-10px);
      box-shadow: var(--dark-shadow);
    }
    .card img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1.25rem;
    }
    
    .card h4 {
      margin-bottom: 2rem;
      font-size: 1rem;
      color: var(--clr-grey-5);
    }
    
    .btn {
      padding: 0.5rem 1rem;
      letter-spacing: 2px;
      font-size: 0.9rem;
      color: var(--clr-white);
      background: var(--clr-primary-5);
      border-radius: var(--radius);
      border-color: transparent;
      text-transform: uppercase;
      transition: var(--transition);
      cursor: pointer;
      box-shadow: var(--light-shadow);
    }
    .btn:hover {
      background: var(--clr-primary-7);
      box-shadow: var(--dark-shadow);
    }
    
    .btn-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .page-btn {
      width: 2.5rem;
      height: 2.5rem;
      background: var(--clr-primary-7);
      border-color: transparent;
      border-radius: 6px;
      cursor: pointer;
      margin: 0.75rem;
      transition: var(--transition);
    }
    .page-btn:hover {
      background: var(--clr-primary-9);
    }
    .active-btn {
      background: var(--clr-primary-1);
      color: var(--clr-white);
    }
    .prev-btn,
    .next-btn {
      background: transparent;
      border: 2px solid var(--clr-primary-3);
      color: var(--clr-primary-1);
      font-weight: bold;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      margin: 0.75rem;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease;
    }
    
    .prev-btn:hover,
    .next-btn:hover {
      background: var(--clr-primary-3);
      color: var(--clr-white);
    }
    
    @media screen and (min-width: 775px) {
      .btn-container {
        margin: 0 auto;
        max-width: 720px;
      }
    }
    
    `,
  },
  {
    taskId: "Search-Bar",
    title: "Search Bar",
    css: `
    .App {
      background-color: #eee;
      width: 100vw;
      height: 100vh;
    }
    
    .search-bar-container {
      padding-top: 20vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 200px;
    }
    
    .result-container {
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 20px;
      margin: 20px 0;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .result-container p {
      margin: 10px 0;
    }
    
    .result-container p:first-child {
      font-weight: 600;
      font-size: 1.2em;
      text-align: center;
      margin-bottom: 15px;
    }
    
    .result-container p:not(:first-child) {
      margin-left: 20px;
    }
    
    .result-container p span {
      font-weight: 500;
    }
    
    .result-container p span:first-child {
      color: #007bff;
    }
    
    /* SearchBar.css */
    
    .search-bar {
      width: 40%;
      position: relative;
    }
    
    .input-wrapper {
      position: relative;
      width: 100%;
    }
    
    input {
      background-color: #f5f5f5;
      border: none;
      height: 3rem;
      font-size: 1.25rem;
      width: 100%;
      padding-left: 40px;
      border-radius: 25px;
      transition: background-color 0.3s ease;
    }
    
    input:focus {
      background-color: #ffffff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
    }
    
    #search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #007bff;
      transition: color 0.3s ease;
    }
    
    #search-icon:hover {
      color: #0056b3;
    }
    
    /* SearchResult */
    
    .search-result {
      padding: 10px 20px;
    }
    
    .search-result:hover {
      background-color: #efefef;
    }
    
    /* SearchResultsList */
    
    .results-list {
      width: 100%;
      background-color: white;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 0px 8px #ddd;
      border-radius: 10px;
      margin-top: 1rem;
      max-height: 300px;
      overflow-y: auto;
    }
    
    `,
  },
  {
    taskId: "Dropdown",
    title: "Dropdown",
    css: `
    .App {
      width: 100%;
      height: 100vh;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .selectOption {
      position: relative;
      width: 300px;
    }
    
    input {
      width: 100%;
      padding: 15px;
      outline: none;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      background: #fff;
      color: #333;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
      cursor: pointer;
    }
    
    input:focus {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 18px;
      color: #666;
      transition: transform 0.3s ease;
      pointer-events: none;
    }
    
    .icon.active {
      transform: translateY(-50%) rotate(180deg);
    }
    
    .options {
      position: absolute;
      width: calc(100% - 30px);
      background: #fff;
      border-radius: 8px;
      top: calc(100% + 5px);
      left: 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0s linear 0.3s;
    }
    
    .options.active {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.3s ease, visibility 0s linear 0s;
    }
    
    li {
      list-style: none;
      font-size: 16px;
      padding: 12px 15px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    li:hover {
      background-color: #f5f5f5;
    }
    
    `,
  },
  {
    taskId: "Sidebar",
    title: "Sidebar",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body {
    height: 100vh;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #fff;
  }
  
  .main {
    display: flex;
    height: 100vh;
  }
  
  .container {
    flex-grow: 1;
    padding: 2em;
    background-image: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
      url("../public/banner.webp");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .title {
    font-size: 3em;
  }
  .info {
    font-size: 1.1em;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 1.5em;
    color: rgb(224, 224, 224);
  }
  .btn {
    margin: 0 auto;
    border: none;
    outline: none;
    padding: 0.75em 1em;
    font-size: 1em;
    letter-spacing: 1px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 3px;
    background-color: rgb(134, 49, 0);
    color: #fff;
  }
  
  .sidebar {
    width: 260px;
    flex-shrink: 0;
    background-color: rgba(22, 22, 22, 1);
    height: 100%;
    overflow: auto;
  }
  
  .sidebar-item {
    padding: 0.75em 1em;
    display: block;
    transition: background-color 0.15s;
    border-radius: 5px;
  }
  .sidebar-item:hover {
    background-color: rgba(212, 212, 212, 0.308);
  }
  
  .sidebar-title {
    display: flex;
    font-size: 1.2em;
    justify-content: space-between;
  }
  .sidebar-title span i {
    display: inline-block;
    width: 1.5em;
  }
  .sidebar-title .toggle-btn {
    cursor: pointer;
    transition: transform 0.3s;
  }
  .sidebar-item.open > .sidebar-title .toggle-btn {
    transform: rotate(180deg);
  }
  .sidebar-content {
    padding-top: 0.25em;
    height: 0;
    overflow: hidden;
  }
  .sidebar-item.open > .sidebar-content {
    height: auto;
  }
  
  .sidebar-item.plain {
    color: #fff;
    text-decoration: none;
  }
  .sidebar-item.plain:hover {
    text-decoration: underline;
  }
  .sidebar-item.plain i {
    display: inline-block;
    width: 1.7em;
  }
  
    `,
  },
  {
    taskId: "Dynamic-Table-with-Sorting-and-Copy-Functionality",
    title: "Dynamic Table with Sorting and Copy Functionality",
    css: `
    html,
body {
  height: 100%;
}
body {
  margin: 0;
  background: rgb(148, 148, 148);
  font-family: sans-serif;
  font-weight: 100;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 600px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
table {
  width: 800px;
  height: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}
th,
td {
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.356);
  color: #000000;
  height: 50px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
th {
  text-align: left;
}
thead th {
  background-color: #66948e;
}
tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
tbody td {
  position: relative;
}
tbody td:hover:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -9999px;
  bottom: -9999px;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -1;
}

button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3px;
}

button:hover {
  background-color: #0056b3;
}

    `,
  },
  {
    taskId: "To-Do-App",
    title: "ToDo App",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.App {
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.TodoWrapper {
  background: #fff;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.TodoForm {
  width: 100%;
}

.todo-input {
  outline: none;
  background: #f0f0f0;
  border: 1px solid #ddd;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  color: #333;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-input::placeholder {
  color: #bbb;
}

.todo-btn {
  background: #58e6ff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.todo-btn:hover {
  background: #6742b5;
}

.Todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #333;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease;
}

.Todo.completed {
  background-color: #c7e8a9;
}

.Todo:hover {
  background-color: #c7e8a9;
}

.fa-trash {
  margin-left: 1rem;
}

.completed {
  text-decoration: line-through;
}

    `,
  },
  {
    taskId: "Testimonials",
    title: "Testimonials",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f6f9fc;
  }
  
  .testimonials {
    margin: 0 auto;
    text-align: center;
    font-family: "Roboto", sans-serif;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    max-width: 600px;
  }
  
  .testimonials-quote {
    font-size: 22px;
    font-style: italic;
    margin-bottom: 20px;
    color: #444444;
  }
  
  .testimonials-author {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #222222;
  }
  
  .testimonials-nav {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .testimonials-nav button {
    padding: 10px 20px;
    border: none;
    background-color: #ab36bb;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s;
    margin: 0 5px;
  }
  
  .testimonials-nav button:hover {
    background-color: rgba(153, 54, 187, 0.8);
  }
  
  .testimonials-nav button:active {
    transform: scale(0.95);
  }
  
    `,
  },
  {
    taskId: "Voice-to-Text",
    title: "Voice to Text",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: "Inter", sans-serif;
  color: #333;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  max-width: 600px;
  padding: 0 20px;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 40px;
}

.main-content {
  max-width: 100%;
  width: 100%;
  min-height: 200px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #eee;
  transition: box-shadow 0.3s ease;
}

.main-content:focus {
  outline: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.btn-style {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:focus,
button:hover {
  background-color: #e45748;
}

.counter-container {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.875rem;
  }

  button {
    padding: 12px 20px;
  }

  .btn-style {
    flex-direction: column;
  }
}

    `,
  },
  {
    taskId: "Text-to-Voice",
    title: "Text to Voice",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: "Inter", sans-serif;
  color: #333;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  max-width: 800px;
  padding: 0 20px;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 40px;
}

.input-text {
  max-width: 100%;
  width: 100%;
  min-height: 200px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #eee;
  transition: box-shadow 0.3s ease;
}

.input-text:focus {
  outline: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.btn-style {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:focus,
button:hover {
  background-color: #e45748;
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.875rem;
  }

  button {
    padding: 12px 20px;
  }

  .btn-style {
    flex-direction: column;
  }
}

    `,
  },
  {
    taskId: "Course-Finder",
    title: "Course Finder",
    css: `
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  
  a {
    text-decoration: none;
    color: rgb(97, 97, 97);
  }
  
  li {
    list-style: none;
  }
  
  .btns {
    padding: 10px 20px;
    margin-right: 6px;
    background: transparent;
    border: none;
    border: 0.6px solid #ccc;
    border-radius: 5px;
    color: #323232;
    cursor: pointer;
  }
  
  /* Button */
  
  .button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .button:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }
  
  .button:active {
    background-color: #388e3c;
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08);
  }
  
  /* Nav  */
  
  nav {
    display: flex;
    border-bottom: 2px solid #f3f3f3;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fff;
    width: 100%;
    top: 0;
    z-index: 999;
  }
  
  input {
    padding: 12px 20px;
    border: 1px solid #ddd;
    background: #f7f6f6;
    outline: none;
    border-radius: 25px;
    width: 100%;
    max-width: 300px;
  }
  
  .nav-icons {
    width: 2rem;
    height: 2rem;
    margin-left: 2rem;
    cursor: pointer;
  }
  
  /* Product  */
  
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin-left: 20rem;
    margin-top: 2rem;
    z-index: -2;
    gap: 20px;
    padding: 0 20px;
  }
  
  .card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  .card-img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  .card-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .card-reviews {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #666;
  }
  
  .rating-star {
    color: #f90;
  }
  
  .card-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    font-size: 1rem;
    color: #333;
  }
  
  .bag-icon {
    color: #007185;
  }
  
  /* Recommended  */
  
  .recommended-flex {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 0 20px;
    margin-left: 20rem;
  }
  
  .recommended-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
    margin-top: 20px;
  }
  
  .button {
    background-color: #4caf50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
  }
  
  .button:hover {
    background-color: #45a049;
  }
  
  /* Category  */
  
  .sidebar-title {
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 20px;
  }
  
  .sidebar-items {
    margin-top: 20px;
  }
  
  .sidebar-label-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .sidebar-label-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }
  
  .all {
    background: linear-gradient(blue, crimson);
  }
  
  .sidebar-label-container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  .sidebar-label-container input:checked ~ .checkmark {
    background-color: #2196f3;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .sidebar-label-container input:checked ~ .checkmark:after {
    display: block;
  }
  
  .sidebar-label-container .checkmark:after {
    top: 6.4px;
    left: 6.4px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: white;
  }
  
  .line {
    margin-top: 3rem;
    border-color: #f7f7f7;
  }
  
  /* Price  */
  
  .price-title {
    margin-top: 20px;
  }
  
  /* Sidebar   */
  
  .sidebar {
    width: 280px;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .logo-container {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .logo-container h1 {
    margin-top: 0.8rem;
    font-size: 1.8rem;
    color: #333;
  }
  
    `,
  },
  {
    taskId: "Course-Shop",
    title: "Course Shop",
    css: `
    .App {
      width: 100%;
      height: auto;
      min-height: 100vh;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    
    /* Navbar  */
    
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
    
    .navbar {
      width: 100%;
      height: 80px;
      background-color: #1c1c1e;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
    }
    
    .navbar:hover {
      background-color: #28282a;
    }
    
    .links {
      margin-right: 50px;
      display: flex;
      align-items: center;
    }
    
    .links a {
      text-decoration: none;
      color: white;
      margin-left: 20px;
      font-size: 18px;
      font-family: "Roboto", sans-serif;
      transition: color 0.3s ease, transform 0.3s ease;
    }
    
    .links a:hover {
      color: #f39c12;
      transform: translateY(-3px);
    }
    
    .links a:active {
      color: #e67e22;
    }
    
    .links a:last-child {
      display: flex;
      align-items: center;
    }
    
    .links a svg {
      margin-left: 10px;
      transition: transform 0.3s ease;
    }
    
    .links a:hover svg {
      transform: scale(1.1);
    }
    
    /* Cart  */
    
    .cart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .cartItem {
      width: 700px;
      height: 250px;
      display: flex;
    
      align-items: center;
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
      border-radius: 25px;
      margin: 30px;
    }
    
    .cartItem img {
      width: 200px;
      margin: 20px;
      border-radius: 25px;
    }
    
    .cartItem .description {
      width: 100%;
      font-size: 30px;
    }
    
    .countHandler input {
      width: 25px;
      padding: 10px;
      border: 2px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      transition: border-color 0.3s ease;
    }
    
    .countHandler button {
      background-color: #45a049;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 8px 12px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .countHandler button:hover {
      background-color: #4caf50;
    }
    
    .countHandler input:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
    
    .checkout {
      display: flex;
      gap: 20px;
    }
    
    .checkout button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 16px;
      transition: background-color 0.3s ease-in-out;
    }
    
    .checkout button:hover {
      background-color: #45a049;
      cursor: pointer;
    }
    
    /* Shop  */
    
    .shopTitle {
      margin-top: 50px;
      text-align: center;
      font-size: 48px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .products {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .product {
      border-radius: 20px;
      width: 300px;
      height: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease-in-out;
      margin: 25px;
    }
    
    .product img {
      width: 100%;
      border-radius: 15px;
    }
    
    .product .description {
      text-align: center;
    }
    
    .product:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    
    .addToCartBttn {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 16px;
      transition: background-color 0.3s ease-in-out;
    }
    
    .addToCartBttn:hover {
      background-color: #45a049;
      cursor: pointer;
    }
    
    `,
  },
  {
    taskId: "MATERIALIZECSS-Portfolio",
    title: "MATERIALIZECSS Portfolio",
    css: `
    .main-container {
      width: 100%;
    }
    
    .parallax-container {
      height: 400px;
    }
    .logo {
      padding-left: 20px;
    }
    .btn {
      width: 120px;
      height: 40px;
      line-height: 40px;
      display: inline-block;
      text-align: center;
      font-size: 14px;
      margin-right: 10px;
    }
    .cta {
      font-size: 35px;
      font-weight: 300px;
      text-shadow: 1px 1px black;
    }
    .cform {
      padding-top: 40px;
    }
    .project,
    .section-header {
      padding-top: 10px;
      text-align: center;
    }
    .card-content b {
      color: black;
    }
    /* Footer animations */
    .social:hover {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -o-transform: scale(1.1);
    }
    .social {
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
      -moz-transform: scale(0.8);
      -o-transform: scale(0.8);
      transition-duration: 0.5s;
      -webkit-transition-duration: 0.5s;
      -moz-transition-duration: 0.5s;
      -o-transition-duration: 0.5s;
    }
    .footer-copyright .container .material-icons {
      margin-left: 20px;
    }
    
    /* label color */
    .input-field label {
      color: #000;
    }
    /* label focus color */
    .input-field input[type="text"]:focus + label {
      color: #000;
    }
    /* label underline focus color */
    .input-field input[type="text"]:focus {
      border-bottom: 1px solid #000;
      box-shadow: 0 1px 0 0 #000;
    }
    /* valid color */
    .input-field input[type="text"].valid {
      border-bottom: 1px solid #000;
      box-shadow: 0 1px 0 0 #000;
    }
    /* invalid color */
    .input-field input[type="text"].invalid {
      border-bottom: 1px solid #000;
      box-shadow: 0 1px 0 0 #000;
    }
    /* icon prefix focus color */
    .input-field .prefix.active {
      color: #000;
    }
    
    `,
  },
  {
    taskId: "TradeHub-React-Trading-Dashboard",
    title: "TradeHub React Trading Dashboard",
    css: `
    import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

    export const theme = extendTheme(
    {
    colors: {
      purple: {
        500: "#5F00D9",
      },
      p: {
        purple: "#5F00D9",
        black: "#171717",
      },
      black: {
        5: "#F3F3F7",
        10: "#EEEEF4",
        20: "#D8DDE2",
        40: "#BABAC4",
        60: "#797E82",
        80: "#535D66",
      },
    },
    fonts: {
      heading: 'Ubuntu',
      body: "Ubuntu",
    },
    textStyles: {
      h1: {
        fontSize: {
          base: "30px",
          md: "32px",
        },
        color: "p.black",
        lineHeight: {
          base: "34px",
          md: "36px",
        },
      },
      h2: {
        fontSize: {
          base: "24px",
          md: "28px",
        },
        color: "p.black",
        lineHeight: { base: "28px", md: "32px" },
      },
      h3: {
        fontSize: {
          base: "22px",
          md: "24px",
          xl: "32px",
        },
        color: "p.black",
        lineHeight: { base: "26px", md: "28px", xl: "36px" },
      },
      h4: {
        fontSize: {
          base: "20px",
          md: "22px",
        },
        color: "p.black",
        lineHeight: { base: "24px", md: "26px" },
      },
      h5: {
        fontSize: {
          base: "18px",
          md: "20px",
        },
        color: "p.black",
        lineHeight: { base: "22px", md: "24px" },
      },
      h6: {
        fontSize: {
          base: "16px",
          md: "18px",
        },
        color: "p.black",
        lineHeight: { base: "20px", md: "22px" },
      },
    },

    fontSizes: {
      xs: "12px",
      sm: "14px",
      base: { base: "16px", md: "18px" },
      lg: { base: "18px", md: "20px" },
      xl: { base: "20px", md: "22px" },
      "2xl": { base: "22px", md: "24px" },
      "3xl": { base: "24px", md: "28px" },
      "4xl": { base: "30px", md: "32px" },
    },
    styles: {
      global: {        
        body: {
          bg: "#F3F3F7",
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: "bold",
          borderRadius: "10px",
        },
      },
      FormLabel: {
        baseStyle: {
          fontSize: "sm",
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              h: "38px",
              borderRadius: "8px",
              fontSize: "sm",
              pb: "0",
              _focus: {
                boxShadow: "0 0 0 1px #5F00D9",
              },
            },
          },
        },
      },
      Textarea: {
        variants: {
          outline: {
            h: "38px",
            borderRadius: "8px",
            fontSize: "sm",
            _focus: {
              boxShadow: "0 0 0 1px #5F00D9",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "purple" })
);

    `,
  },
  {
    taskId: "Cube-Image-Gallery",
    title: "Cube Image Gallery",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

:root {
  --font-family: "Montserrat", Arial, sans-serif;
  --font-weight: 500;
  --primary-color: #ab00fb;
  --secondary-color: #ea16f1;
  --background-color: #080808;
  --border-color: rgb(182, 0, 238);
}

body {
  font-family: var(--font-family);
  font-weight: var(--font-weight);
  line-height: 1.6;
  text-align: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  color: #fafafa;
  background-color: var(--background-color);
}

h1 {
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 2.5rem;
}

.cube-container {
  position: relative;
  width: 30rem;
  height: 30rem;
  margin: 5rem auto 6rem;
  perspective: 100rem;
}

.cube {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s cubic-bezier(0.32, 0.05, 0.35, 1.6);
}

.cube-face-image {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 0.5rem #fff, 0 0 1.5rem var(--border-color),
    0 0 3rem var(--border-color);
}

.image-buttons {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.image-buttons input {
  width: 100px;
  height: 100px;
  border: 0.2rem solid #fafafa;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}

.image-buttons input:focus {
  outline: none;
  border-color: var(--border-color);
}

.image-1 {
  transform: translateZ(15rem);
}

.image-2 {
  transform: rotateX(-180deg) translateZ(15rem);
}

.image-3 {
  transform: rotateY(90deg) translateZ(15rem);
}

.image-4 {
  transform: rotateY(-90deg) translateZ(15rem);
}

.image-5 {
  transform: rotateX(90deg) translateZ(15rem);
}

.image-6 {
  transform: rotateX(-90deg) translateZ(15rem);
}

.cube.initial-position {
  transform: translateZ(-15rem) translateY(-2rem) rotateX(-15deg) rotateY(18deg)
    rotateZ(2deg);
}

.cube.show-image-1 {
  transform: translateZ(-15rem);
}

.cube.show-image-2 {
  transform: translateZ(-15rem) rotateX(180deg);
}

.cube.show-image-3 {
  transform: translateZ(-15rem) rotateY(-90deg);
}

.cube.show-image-4 {
  transform: translateZ(-15rem) rotateY(90deg);
}

.cube.show-image-5 {
  transform: translateZ(-15rem) rotateX(-90deg);
}

.cube.show-image-6 {
  transform: translateZ(-15rem) rotateX(90deg);
}

    `,
  },
  {
    taskId: "Analog-Clock",
    title: "Analog Clock",
    css: `
    body {
      margin: 0;
      overflow: hidden;
    }
    
    h1 {
      color: #fff;
    }
    
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(to right, #2c3e50, #3498db);
    }
    
    .clock {
      width: 50vmin;
      height: 50vmin;
      border: 8px solid rgb(255, 255, 255);
      box-shadow: 0 0 5px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),
        0 0 20px rgb(255, 255, 255);
    
      position: relative;
      transform: rotate(-90deg);
      border-radius: 50%;
      background: radial-gradient(circle, #34495e, #2c3e50);
    }
    
    .time {
      color: #fff;
      position: absolute;
      transform: rotate(90deg);
    }
    
    .line {
      position: absolute;
      width: 50%;
      height: 2%;
      background: red;
      top: 50%;
      left: 50%;
      transform-origin: 0% 50%;
      transform: rotate(90deg);
    }
    
    .mid {
      position: absolute;
      width: 4%;
      height: 4%;
      background: #fff;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }
    
    #seconds {
      border-radius: 25px;
    
      background: rgb(255, 255, 255);
      width: 45%;
      height: 0.8%;
      box-shadow: 0 0 5px green, 0 0 10px green, 0 0 20px green;
    }
    
    #minutes {
      border-radius: 25px;
      background: rgb(255, 255, 255);
      width: 40%;
      height: 1.6%;
      box-shadow: 0 0 5px blue, 0 0 10px blue, 0 0 20px blue;
    }
    
    #hours {
      border-radius: 25px;
    
      background: rgb(255, 255, 255);
      width: 30%;
      height: 2.4%;
      box-shadow: 0 0 5px red, 0 0 10px red, 0 0 20px red;
    }
    
    .time-12 {
      top: 50%;
      right: 0%;
      margin-top: -2%;
    }
    
    .time-3 {
      bottom: 0%;
      left: 50%;
      margin-left: -1%;
    }
    
    .time-6 {
      top: 50%;
      left: 0%;
      margin-top: -1.6%;
      margin-left: 1%;
    }
    
    .time-9 {
      top: 0%;
      left: 50%;
      margin-left: -1%;
    }
    
    `,
  },
  {
    taskId: "Dynamic-Menu-Highlighter",
    title: "Dynamic Menu Highlighter",
    css: `
    html {
      box-sizing: border-box;
      --bgColorMenu: #1d1d27;
      --duration: 0.7s;
    }
    
    html *,
    html *::before,
    html *::after {
      box-sizing: inherit;
    }
    
    body {
      margin: 0;
      width: 100%;
      overflow: hidden;
      background-color: #ffb457;
      -webkit-tap-highlight-color: transparent;
      transition: background-color var(--duration);
    }
    
    .menu {
      margin: 300px 0;
    
      display: flex;
      font-size: 1.5em;
      padding: 0 2.85em;
      position: relative;
    
      background-color: var(--bgColorMenu);
    }
    
    .menu__item {
      all: unset;
      flex-grow: 1;
      z-index: 100;
      display: flex;
      cursor: pointer;
      position: relative;
      border-radius: 50%;
      align-items: center;
      will-change: transform;
      justify-content: center;
      padding: 0.55em 0 0.85em;
      transition: transform var(--timeOut, var(--duration));
    }
    
    .menu__item::before {
      content: "";
      z-index: -1;
      width: 4.2em;
      height: 4.2em;
      border-radius: 50%;
      position: absolute;
      transform: scale(0);
      transition: background-color var(--duration), transform var(--duration);
    }
    
    .menu__item.active {
      transform: translate3d(0, 0.8em, 0);
    }
    
    .menu__item.active::before {
      transform: scale(1);
      background-color: var(--bgColorItem);
    }
    
    .icon {
      width: 2.6em;
      height: 2.6em;
      stroke: white;
      fill: transparent;
      stroke-width: 1pt;
      stroke-miterlimit: 10;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 400;
    }
    
    .menu__item.active .icon {
      animation: strok 1.5s reverse;
    }
    
    @keyframes strok {
      100% {
        stroke-dashoffset: 400;
      }
    }
    
    .menu__border {
      left: 0;
      top: 99%;
      width: 10.9em;
      height: 2.4em;
      position: absolute;
      clip-path: url(#menu);
      will-change: transform;
      background-color: var(--bgColorMenu);
      transition: transform var(--timeOut, var(--duration));
    }
    
    .svg-container {
      width: 0;
      height: 0;
    }
    
    @media screen and (max-width: 50em) {
      .menu {
        font-size: 0.8em;
      }
    }
    
    `,
  },
  {
    taskId: "Order-Tracker-Mobile-App",
    title: "Order Tracker Mobile App",
    css: `
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.3s ease;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  animation: gradientBG 15s ease infinite;
  background-size: 400% 400%;
  overflow: hidden;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

a {
  text-decoration: none;
  color: white;
}

.container {
  padding: 0;
  margin: 20px 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  position: relative;
  height: 100vh;
  width: 100vw;
}

.iphone {
  background-color: #f4f4fb;
  height: 812px;
  width: 375px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  z-index: 2;
  transform-origin: top center;
  transition: transform 0.5s ease;
}

.container,
.iphone {
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  background: linear-gradient(45deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
}

.order-summary {
  margin-left: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.order-summary > div {
  margin: 6px;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.order-status {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.order-date {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
}

.order-day {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.back-btn {
  color: rgb(255, 255, 255);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.384);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}

.back-btn:hover {
  transform: scale(1.2) rotate(360deg);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.603);
  background-color: rgba(255, 255, 255, 0.3);
}

.back-btn i {
  color: white;
  font-size: 1.2rem;
}

.hero-img-container {
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 20px;
  overflow: hidden;
}

.hero-img-container::before {
  height: 20px;
  width: 20px;
  background-color: transparent;
  position: absolute;
  top: 60px;
  right: 120px;
  content: "";
  border-radius: 50%;
  border: 2px solid #ff6a88;
  border-top: 2px solid transparent;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.arc {
  border: 1px solid #7c28c0;
  display: inline-block;
  min-width: 150px;
  min-height: 150px;
  padding: 0.5em;
  border-radius: 50%;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;
  opacity: 0.4;
  position: absolute;
  transform: rotate(-40deg);
  left: 110px;
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(-40deg);
  }
  to {
    transform: rotate(320deg);
  }
}

.triangle1 {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 20px 10px;
  border-color: transparent transparent #ff6a88 transparent;
  position: absolute;
  top: 50px;
  left: 130px;
  transform: rotate(-45deg);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(-45deg);
  }
  50% {
    transform: translateY(-10px) rotate(-45deg);
  }
  100% {
    transform: translateY(0) rotate(-45deg);
  }
}

.hero-img {
  width: 80%;
  transition: transform 0.3s ease;
}

.order-status-container {
  z-index: 3;
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  position: relative;
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.1);
}

.status-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 150px;
  padding-top: 20px;
}

.status-item > div {
  margin: 10px;
}

.status-circle {
  height: 20px;
  width: 20px;
  background-color: #ff6a88;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 5;
  transition: all 0.3s;
  cursor: pointer;
}

.status-circle:hover {
  transform: scale(1.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.status-text {
  font-size: 0.8rem;
  font-weight: 500;
}

.status-text span {
  display: block;
  text-align: center;
  padding: 2px;
}

.green {
  color: #84fab0;
}

.first::before {
  content: "";
  height: 4px;
  width: 70px;
  background-color: #ff6a88;
  position: absolute;
  z-index: 4;
  top: 83px;
  left: 40px;
}

.second::before {
  content: "";
  height: 4px;
  width: 210px;
  background-color: #ff6a88;
  position: absolute;
  z-index: 4;
  top: 83px;
  left: 100px;
  opacity: 0.2;
}

.order-details-container {
  position: relative;
  z-index: 6;
  height: 900px;
  background: linear-gradient(45deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  padding-top: 20px;
  transform: translateY(-45px);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease, opacity 0.5s ease;
  cursor: default;
  overflow: hidden;
}

.odc-header {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.hidden-odc-header .odc-header {
  display: none;
}

.cta-text {
  margin-top: 40px;
  margin-right: 25px;
  color: white;
  font-size: 0.9rem;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.18);
}

.cta-button {
  margin-top: 20px;
  padding: 20px 40px;
  background-color: #ff6a88;
  border: 0;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: shadow-pulse 1s infinite;
  cursor: pointer;
  transition: all 1s ease;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

@keyframes shadow-pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 35px rgba(255, 255, 255, 0);
  }
}

.cta-button:focus {
  outline: none;
}

.order-details-container::before {
  content: "";
  position: absolute;
  width: 70px;
  height: 3px;
  background-color: #eaebff;
  opacity: 0.8;
  border-radius: 2px;
  top: 20px;
  left: 150px;
}
.top-of-order {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.action-btn {
  cursor: pointer;
}
.odc-wrapper {
  margin: 30px;
}

.odc-header-line {
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
}

.odc-header-details {
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
}

.product-container {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 10px;
  transition: all 1s ease;
}

.product-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.product span {
  display: block;
  color: white;
  margin-left: 25px;
  margin-bottom: 8px;
  flex-grow: 1;
}

.product span:first-child {
  font-weight: 300;
  font-size: 0.8rem;
}

.product span:last-child {
  font-weight: 500;
  font-size: 1.3rem;
}

.img-photo {
  width: 60px;
  transform: rotate(-35deg);
  transition: transform 0.3s ease;
}

.img-photo:hover {
  transform: rotate(0deg) scale(1.1);
}

.cancellation {
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px 20px;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.cancellation:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.shipping-desc {
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
}

.shipping-address {
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px 20px;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.shipping-address:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.footer {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 0.9rem;
}

.footer small {
  font-size: 0.7rem;
}

.footer a {
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 2px;
  transition: all 0.3s ease;
}

.footer a:hover {
  color: #ff6a88;
  border-bottom-color: #ff6a88;
}

    `,
  },
  {
    taskId: "Timer-App",
    title: "Timer App",
    css: `
    @keyframes subtlePulse {
      0%,
      100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.02);
        opacity: 0.9;
      }
    }
    
    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }
    
    @keyframes neonGlow {
      0%,
      100% {
        box-shadow: 0 0 5px #ff69b4, 0 0 10px #ff69b4, 0 0 15px #ff69b4,
          0 0 20px #ff69b4;
      }
      50% {
        box-shadow: 0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff69b4,
          0 0 40px #ff69b4;
      }
    }
    
    .timer-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url("https://images.unsplash.com/photo-1550039120-5d6529f0c4de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
      background-size: cover;
      background-position: center;
      height: 100vh;
      overflow: hidden;
      position: relative;
    }
    
    .timer-container::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
    }
    
    .timer {
      background-color: rgba(20, 20, 20, 0.8);
      backdrop-filter: blur(10px);
      border-radius: 30px;
      padding: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
      z-index: 2;
      position: relative;
      overflow: hidden;
      border: 2px solid #ff69b4;
      animation: neonGlow 2s infinite;
    }
    
    .timer::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: shimmer 8s infinite linear;
    }
    
    .timer.active {
      transform: scale(1.03);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
    
    .time-display {
      font-size: 5.5em;
      font-weight: 300;
      color: #ff69b4;
      text-shadow: 0 0 10px rgba(255, 105, 180, 0.7);
      margin-bottom: 30px;
      font-family: "Helvetica Neue", Arial, sans-serif;
      letter-spacing: 2px;
      animation: subtlePulse 2s infinite ease-in-out;
    }
    
    .button-container {
      display: flex;
      gap: 20px;
    }
    
    .start-btn,
    .pause-btn,
    .reset-btn {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 0.9em;
      font-weight: 400;
      cursor: pointer;
      border-radius: 50px;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 2px;
      position: relative;
      overflow: hidden;
      border: 1px solid #ff69b4;
    }
    
    .start-btn::before,
    .pause-btn::before,
    .reset-btn::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: all 0.5s;
    }
    
    .start-btn:hover::before,
    .pause-btn:hover::before,
    .reset-btn:hover::before {
      left: 100%;
    }
    
    .start-btn:hover,
    .pause-btn:hover,
    .reset-btn:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 0 10px #ff69b4;
    }
    
    .start-btn {
      background-color: rgba(255, 105, 180, 0.3);
    }
    
    .pause-btn {
      background-color: rgba(255, 152, 0, 0.3);
    }
    
    .reset-btn {
      background-color: rgba(244, 67, 54, 0.3);
    }
    
    @media (max-width: 768px) {
      .timer {
        padding: 40px;
      }
    
      .time-display {
        font-size: 4em;
      }
    
      .button-container {
        flex-direction: column;
      }
    }
    
    `,
  },
  {
    taskId: "Portfolio-Website",
    title: "Portfolio Website",
    css: `
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body,
  html {
    height: 100%;
    font-family: "Roboto", sans-serif;
    color: #454545;
    width: 100%;
  }
  
  img {
    width: 100%;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 80px 0;
  }
  
  @media screen and (max-width: 760px) {
    .container {
      padding: 80px 25px;
    }
  }
  
  .section-title {
    font-size: 36px;
    text-align: center;
    margin-bottom: 50px;
  }
  
  .accent-text {
    font-family: "Dancing Script", cursive;
    color: #13b5d1;
  }
  
  .active,
  .is-checked {
    color: #13b5d1;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  h3 {
    margin: 20px 0 10px 0;
  }
  
  p {
    padding: 2rem;
    font-size: 16px;
    line-height: 1.6;
    color: #a3a3a3;
  }
  
  ul {
    list-style: none;
  }
  
  li {
    display: inline-block;
  }
  
  a {
    text-decoration: none;
  }
  
  /* Services */
  
  .services-grid {
    width: 800px;
  }
  
  /* Contact */
  
  #contact {
    padding: 80px 0;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 60px;
  }
  
  .section-title h1 {
    font-size: 36px;
    color: #333;
  }
  
  .accent-text {
    color: #007bff;
  }
  
  .contact-form {
    width: 500px;
    background-color: #fff;
    padding: 30px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    color: #333;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 25px;
    font-size: 16px;
  }
  
  textarea {
    height: 150px;
  }
  
  button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  /* Scroll Bar Styles */
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background: #a3a3a3;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #13b5d1;
  }
  
  /* Preload Page Styles */
  #preload-overlay {
    width: 100%;
    height: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9000;
  }
  
  .loader-frame {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .loader1,
  .loader2 {
    position: absolute;
    border: 5px solid transparent;
    border-radius: 50%;
  }
  
  .loader1 {
    width: 100px;
    height: 100px;
    border-top: 5px solid #13b5d1;
    border-bottom: 5px solid #13b5d1;
    animation: clockwisespin 2s linear infinite;
  }
  
  .loader2 {
    width: 90px;
    height: 90px;
    border-left: 5px dotted #454545;
    border-right: 5px dotted #454545;
    top: 5px;
    left: 5px;
    animation: anticlockwisespin 2.5s linear infinite;
  }
  
  @keyframes clockwisespin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes anticlockwisespin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
  
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  /* Header Styles */
  #main-header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 0;
    z-index: 900;
    background: #fff;
    border-bottom: 1px solid #e52e2d;
    transition: max-height 0.3s ease;
  }
  
  .header-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    padding: 0 25px;
  }
  
  .logo {
    float: left;
    display: block;
    line-height: 1;
    font-size: 27pt;
    font-weight: bold;
    color: #13b5d1;
    font-family: "Dancing Script", cursive;
  }
  
  nav ul {
    float: right;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    display: inline-block;
    margin-left: 20px;
  }
  
  nav ul a {
    color: #454545;
    text-transform: uppercase;
    font-size: 14px;
    transition: color 0.3s ease;
  }
  
  nav ul a:hover,
  nav ul .active {
    color: #13b5d1;
  }
  
  .mobile-toggle {
    display: none;
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    right: 22px;
    top: 20px;
    width: 30px;
    transition: all 200ms ease-in;
  }
  
  .mobile-toggle span {
    width: 30px;
    height: 4px;
    margin-bottom: 6px;
    border-radius: 1000px;
    background: #454545;
    display: block;
  }
  
  @media screen and (max-width: 768px) {
    #main-header {
      max-height: 70px;
      overflow: hidden;
    }
  
    #main-header.open-nav {
      max-height: 400px;
    }
  
    .mobile-toggle {
      display: block;
    }
  
    .open-nav .mobile-toggle {
      transform: rotate(-90deg);
    }
  
    nav {
      width: 100%;
      padding-top: 20px;
    }
  
    nav ul {
      float: none;
      text-align: center;
    }
  
    nav ul li {
      width: 100%;
      padding: 10px 0;
      margin: 0;
    }
  
    .logo {
      float: none;
      margin: 0 auto;
      text-align: center;
    }
  }
  
  /* Hero Styles */
  #hero {
    background: url("https://images.unsplash.com/photo-1573537805874-4cedc5d389ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    position: relative;
    margin-top: 70px;
  }
  
  #particles-js {
    width: 100%;
    height: 100%;
  }
  
  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 50px;
    color: #fff;
    margin: 30px 0 10px;
  }
  
  .hero-content h2 {
    font-size: 30px;
    color: #bfbfbf;
  }
  
  .hero-content .download {
    color: #bfbfbf;
    background: #13b5d1;
    border: 1px solid #13b5d1;
    border-radius: 1000px;
    padding: 10px;
    transition: border-color 0.3s ease;
    cursor: pointer;
  }
  
  .hero-content .download a {
    color: #000000;
    font-size: 16px;
  }
  
  .hero-content .download:hover {
    border-color: #bfbfbf;
  }
  
  .hero-content img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 3px solid #13b5d1;
  }
  
  @media screen and (max-width: 768px) {
    .hero-content img {
      width: 200px;
      height: 200px;
    }
  }
  
  /* Clients */
  
  #client {
    height: 100vh;
  }
  
  .client-item img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 3px solid #13b5d1;
  }
  
  /* About Styles */
  .about-text {
    opacity: 0;
    transform: translateX(25px);
    transition: all 0.3s ease-out;
  }
  
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
  }
  
  .about-text-animate {
    opacity: 1;
    transform: translateX(0);
  }
  
  .about-social {
    margin: 20px 0;
  }
  
  .about-social li {
    padding-right: 20px;
  }
  
  .about-social .fab,
  .about-social .far {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    border: 1px solid #a3a3a3;
    border-radius: 50%;
    color: #454545;
    transition: color 0.3s ease;
    cursor: pointer;
  }
  
  .about-social .fab:hover,
  .about-social .far:hover {
    color: #13b5d1;
  }
  
  .skill-progress-container p {
    color: #454545;
  }
  
  .skill-progress-container,
  .eduction-block {
    margin-bottom: 15px;
    padding-left: 16px;
    width: 80%;
  }
  
  .skill-bar {
    position: relative;
    width: 100%;
    height: 5px;
    margin-top: 5px;
    background: #a3a3a3;
  }
  
  .bar-percent {
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    background: #13b5d1;
  }
  
  .education-container h3 {
    text-transform: capitalize;
  }
  
  @media screen and (max-width: 768px) {
    .education-container h3 {
      margin-top: 20px;
    }
  }
  
  .education-block {
    margin-bottom: 25px;
  }
  
  .education-block h3 {
    text-transform: uppercase;
    color: #13b5d1;
  }
  
  .education-block p {
    font-size: 14px;
  }
  
  /* Portfolio.css */
  
  .section-title {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .accent-text {
    color: #13b5d1;
  }
  
  .button-group {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .button-group ul {
    list-style: none;
    padding: 0;
  }
  
  .button-group button {
    padding: 10px 20px;
    border-radius: 1000px;
    background: none;
    border: 1px solid #13b5d1;
    color: #13b5d1;
    text-transform: capitalize;
    cursor: pointer;
    margin-right: 5px;
    transition: all 0.3s ease;
  }
  
  .button-group button:hover,
  .button-group button.is-checked {
    color: #fff;
    background: #13b5d1;
  }
  
  .img-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .img-container {
    width: 250px;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease;
    text-align: center;
  }
  
  .hidden {
    display: none;
  }
  
  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .img-container:hover img {
    transform: scale(1.1);
  }
  
  /* Testimonials Styles */
  .testimonial-block {
    margin-bottom: 30px;
  }
  
  .testimonial-block p {
    font-style: italic;
    margin: 0 0 10px 0;
  }
  
  .testimonial-name h3 {
    display: inline-block;
  }
  
  .testimonial-name span {
    font-style: italic;
    margin-left: 20px;
  }
  
  .owl-theme .owl-dots .owl-dot {
    background: #a3a3a3;
    border-radius: 50%;
    display: inline-block;
    height: 10px;
    margin: 0 5px;
    width: 10px;
  }
  
  .owl-theme .owl-dots .owl-dot.active {
    background: #13b5d1;
  }
  
  /* Footer Styles */
  #main-footer {
    background: #454545;
    padding: 40px 0;
  }
  
  #main-footer p {
    color: #fff;
    text-align: center;
    font-size: 14px;
  }
  
  .social-links {
    color: white;
    text-align: center;
  }
  
  .social-links :visited {
    color: inherit;
    text-decoration: none;
  }
  
  .social-links li {
    margin-right: 10px;
  }
  
    `,
  },
  {
    taskId: "Materialize-Portfolio",
    title: "Materialize Portfolio",
    css: `
    .header {
      padding: 0;
      min-height: calc(100vh - 64px);
    }
    .header .wrapper {
      margin: auto;
    }
    .header .btn-large {
      margin: 8px;
      width: 200px;
    }
    .header h1 {
      margin-top: 20px;
      text-align: center;
      font-weight: 500;
    }
    .header .scroll-down {
      color: #ddd !important;
      display: block;
      margin-top: 20vh;
      font-size: 2rem;
    }
    .header .scroll-down i {
      display: block;
      font-size: 5rem;
    }
    nav ul li a,
    nav .material-icons {
      font-weight: 500;
      color: #039be5 !important;
    }
    nav .material-icons {
      padding-left: 16px;
    }
    nav .brand-logo img {
      width: 25px;
    }
    @media (min-width: 993px) {
      nav {
        padding: 0 calc(15vw + 1.5rem);
        margin: auto;
        left: 0;
        right: 0;
      }
    }
    ul li.list-head {
      color: rgba(0, 0, 0, 0.87);
      padding: 0px 30px 12px;
    }
    ul li.list-head:hover {
      background: transparent;
    }
    @media (max-width: 600px) {
      ul li.list-head {
        padding-bottom: 6px;
      }
      ul li.list-head h4 {
        font-size: 1.9em;
      }
      iframe {
        height: 380px !important;
      }
    }
    .img-box .text {
      margin-top: 32px;
    }
    .col .divider {
      margin: 62px 0 32px 0;
    }
    h2,
    h3 {
      margin-bottom: 40px;
      font-weight: 200;
      text-align: center;
    }
    .text {
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 2rem;
      text-align: justify;
    }
    footer a {
      font-weight: 500;
    }
    iframe.z-depth-1 {
      transition: 0.3s;
      height: 600px;
    }
    .col {
      transition: 0.4s;
    }
    
    .copyright {
      color: black;
    }
    
    .hidden {
      opacity: 0;
      transform: translateX(-16px);
      transition: 0.4s;
    }
    .pointer {
      cursor: pointer;
    }
    
    `,
  },
  {
    taskId: "File-Uploader",
    title: "File Uploader",
    css: `
    body {
      background: no-repeat center
        url("https://images.unsplash.com/photo-1618912487390-8987d3c3b862?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
      background-size: cover;
      font-family: "Quicksand", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
    }
    
    h1 {
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      font-size: 2.5em;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .file-upload {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(255, 255, 255, 0.9);
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
      font-size: 15px;
      text-align: center;
    }
    
    .file-upload__input {
      display: none;
    }
    
    .file-upload__button {
      background: #00a884;
      border: none;
      border-radius: 4px;
      padding: 0.8em 1.2em;
      color: #ffffff;
      font-size: 1em;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.2s ease;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    
    .file-upload__button:hover {
      background: #009879;
      transform: scale(1.05);
    }
    
    .file-upload__button:active {
      background: #00745d;
      transform: scale(1);
    }
    
    .file-upload__label {
      margin-top: 15px;
      max-width: 300px;
      font-size: 1em;
      overflow: hidden;
      white-space: nowrap;
      font-family: "Quicksand", sans-serif;
      color: #333;
      background: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .file-upload__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f9f9f9;
      padding: 5px 10px;
      border-radius: 5px;
      margin-top: 5px;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .file-upload__downloads {
      margin-top: 20px;
    }
    
    .file-upload__download-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #eaeaea;
      padding: 10px;
      border-radius: 5px;
      margin-top: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .file-upload__delete {
      margin-left: 10px;
      background: #ff4d4d;
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 0.8em;
      font-weight: bold;
      cursor: pointer;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
    
    .file-upload__delete:hover {
      background: #ff1a1a;
    }
    
    .file-upload__downloads a {
      display: block;
      color: #007bff;
      text-decoration: none;
      margin-top: 5px;
      transition: color 0.3s ease;
      font-size: 1em;
    }
    
    .file-upload__downloads a:hover {
      color: #0056b3;
      text-decoration: underline;
    }
    
    `,
  },
  {
    taskId: "Cake-Website",
    title: "Cake Website",
    css: `
    @import url("https://fonts.googleapis.com/css?family=Josefin+Sans");

/* Global styles */
body {
  font-family: "Josefin Sans", sans-serif;
  background-color: #e4e1dc;
  color: #3e4546;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

p {
  font-size: 90%;
  line-height: 1.7;
}

h3 {
  font-family: "Snell Roundhand", cursive;
  font-weight: normal;
  color: #54301a;
  text-shadow: 0 0 1px #54301a;
}

/* Navbar styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(228, 225, 220, 0.9);
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.navbar.scrolled {
  background-color: rgba(228, 225, 220, 1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo img {
  width: 60px;
  height: auto;
  transition: transform 0.3s ease;
}

.logo img:hover {
  transform: scale(1.1);
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #54301a;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style-type: none;
}

.nav-links li a {
  text-decoration: none;
  color: #54301a;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links li a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #54301a;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-links li a:hover {
  color: #7f5b51;
}

.nav-links li a:hover::after {
  transform: scaleX(1);
}

.cart-icon {
  position: relative;
  font-size: 1.5rem;
  color: #54301a;
  cursor: pointer;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #54301a;
  color: #fff;
  font-size: 0.8rem;
  padding: 2px 6px;
  border-radius: 50%;
}

/* Main section styles */
.main-section {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  transition: background-image 0.5s ease-in-out;
}

.main-content {
  max-width: 800px;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.main-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: "Snell Roundhand", cursive;
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-style: italic;
}

.features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.cta-button {
  display: inline-block;
  background-color: #54301a;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #7f5b51;
  transform: translateY(-3px);
}

/* Specials section styles */
.specials-section {
  background-color: #f8f5f2;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.specials-section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #54301a;
  margin-bottom: 2rem;
}

.specials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.special-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.special-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.special-icon {
  font-size: 2.5rem;
  color: #54301a;
  margin-bottom: 1rem;
}

.special-card h3 {
  font-size: 1.5rem;
  color: #54301a;
  margin-bottom: 0.5rem;
}

.special-card .time {
  font-size: 0.9rem;
  color: #7f5b51;
  margin-bottom: 1rem;
}

.special-card .description {
  font-size: 1rem;
  color: #3e4546;
  margin-bottom: 1rem;
}

.special-card .price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #54301a;
  margin-bottom: 0.5rem;
}

.special-card .extra-info {
  font-size: 0.9rem;
  color: #7f5b51;
}

.order-now {
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  background-color: #54301a;
  color: #fff;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
  transition: bottom 0.3s ease;
}

.special-card:hover .order-now {
  bottom: 0;
}

.children-offer {
  background-color: #54301a;
  color: #fff;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.child-icon {
  font-size: 3rem;
}

.children-offer p {
  font-size: 1rem;
  line-height: 1.6;
}

/* Footer styles */
.footer {
  background-color: #54301a;
  color: #fff;
  padding: 4rem 2rem 2rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
}

.footer-logo {
  width: 80px;
  height: auto;
  margin-bottom: 1rem;
}

.footer h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #e4e1dc;
}

.footer-nav {
  display: flex;
  flex-direction: column;
}

.footer-nav a {
  color: #e4e1dc;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-nav a:hover {
  color: #b48b66;
}

.footer p {
  margin-bottom: 0.5rem;
}

.newsletter-form {
  display: flex;
  margin-bottom: 1rem;
}

.newsletter-form input {
  flex-grow: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 4px 0 0 4px;
}

.newsletter-form input.valid {
  border: 2px solid #4caf50;
}

.subscribe-btn {
  background-color: #b48b66;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.subscribe-btn:hover {
  background-color: #7f5b51;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icons a {
  color: #e4e1dc;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #b48b66;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #7f5b51;
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .nav-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 74px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: rgba(228, 225, 220, 0.95);
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-150%);
    transition: transform 0.3s ease;
  }

  .nav-links.open {
    transform: translateY(0);
  }

  .main-content h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .features {
    flex-direction: column;
    gap: 1rem;
  }

  .specials-section h2 {
    font-size: 2rem;
  }

  .children-offer {
    flex-direction: column;
    gap: 1rem;
  }

  .footer-content {
    flex-direction: column;
  }

  .footer-section {
    margin-bottom: 2rem;
  }
}

    `,
  },
  {
    taskId: "Interactive-3D-Card-Viewer",
    title: "Interactive 3D Card Viewer",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    cursor: grabbing;
    user-select: none;
  }
  
  .card {
    width: 350px;
    height: 150px;
    position: relative;
    transform-style: preserve-3d;
    perspective: 600px;
  }
  
  .front,
  .back {
    width: 100%;
    overflow: hidden;
    transition: all 0.9s linear;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .front {
    transform: translateZ(1px) translateX(0px) translateY(0px);
  }
  
  .back {
    transform: translateZ(0px) translateX(0px) translateY(0px) rotateY(180deg);
  }
  
  img {
    width: 100%;
  }
  
  h3 {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #666;
    text-transform: capitalize;
    font-size: 1.2em;
    font-weight: 100;
    font-family: "Roboto", sans-serif;
  }
  
  h2 {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: #555;
    text-transform: capitalize;
    font-size: 1em;
    font-weight: 50;
    font-family: "Roboto", sans-serif;
  }
  
    `,
  },
  {
    taskId: "Dev-Portfolio",
    title: "Dev Portfolio",
    css: `
    /* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Navbar Styles */
.navbar {
  background-color: transparent;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: #333;
}

.navbar.scrolled {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

.navbar.scrolled .navbar-logo {
  color: #333;
}

.nav-menu {
  display: flex;
  list-style: none;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.navbar.scrolled .nav-link {
  color: #333;
}

.nav-link:hover {
  color: #007bff;
}

/* Home Styles */
.home {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat center center/cover;
  color: #fff;
  text-align: center;
}

.home-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cta-button {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #0056b3;
}

/* About Styles */
.about {
  height: 100vh;
  padding: 5rem 0;
  background-color: #fff;
}

.about h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.about-text,
.skills {
  flex: 1;
  padding: 0 1rem;
}

.skills ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.skills li {
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
}

/* Portfolio Styles */
.portfolio {
  height: 100vh;

  padding: 5rem 0;
  background-color: #f4f4f4;
}

.portfolio h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.filter-buttons button {
  background-color: transparent;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.filter-buttons button:hover,
.filter-buttons button.active {
  color: #007bff;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-card h3 {
  padding: 1rem;
  text-align: center;
}

/* Contact Styles */
.contact {
  height: 100vh;

  padding: 5rem 0;
  background-color: #fff;
}

.contact h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.contact form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.contact input,
.contact textarea {
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.contact textarea {
  height: 150px;
}

.contact button {
  background-color: #007bff;
  color: #fff;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact button:hover {
  background-color: #0056b3;
}

/* Footer Styles */
footer {
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.social-links a {
  color: #fff;
  margin-left: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #007bff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .about-text,
  .skills {
    margin-bottom: 2rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .footer-content {
    flex-direction: column;
  }

  .social-links {
    margin-top: 1rem;
  }
}

    `,
  },
  {
    taskId: "Fruit-Carousel",
    title: "Fruit Carousel",
    css: `
    body {
      margin: 0;
      padding: 0;
      background: #f0f0f0;
      font-family: "Poppins", sans-serif;
      overflow-x: hidden;
      overflow: hidden;
    }
    
    .carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      position: relative;
      overflow: hidden;
    }
    
    .carousel:hover {
      overflow: auto;
      scrollbar-width: none; /* For Firefox */
      -ms-overflow-style: none; /* For Internet Explorer and Edge */
    }
    
    .carousel:hover::-webkit-scrollbar {
      display: none; /* For Chrome, Safari, and Opera */
    }
    
    .carousel-item {
      position: absolute;
      width: 60vw;
      height: 70vh;
      transition: all 0.5s ease;
      opacity: 0;
      transform: scale(0.8);
    }
    
    .carousel-item.active {
      opacity: 1;
      transform: scale(1);
      z-index: 2;
    }
    
    .carousel-item.prev,
    .carousel-item.next {
      opacity: 0.5;
      z-index: 1;
    }
    
    .carousel-item.prev {
      z-index: 1;
      transform: translateX(-50%) scale(0.8);
      opacity: 0.7;
    }
    
    .carousel-item.next {
      z-index: 1;
      transform: translateX(50%) scale(0.8);
      opacity: 0.7;
    }
    
    .carousel-box {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      background: #fff;
    }
    
    .carousel-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .carousel-box:hover img {
      transform: scale(1.05);
    }
    
    .carousel-box .content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }
    
    .carousel-box:hover .content {
      transform: translateY(0);
    }
    
    .carousel-box .title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    
    .carousel-box .num {
      font-size: 18px;
      opacity: 0.8;
    }
    
    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.7);
      color: #333;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 10;
    }
    
    .nav-button:hover {
      background: rgba(255, 255, 255, 0.9);
    }
    
    .nav-button.prev {
      left: 20px;
    }
    
    .nav-button.next {
      right: 20px;
    }
    
    .progress-bar {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
      overflow: hidden;
    }
    
    .progress {
      width: 0;
      height: 100%;
      background: #fff;
      transition: width 0.3s ease;
    }
    
    `,
  },
  {
    taskId: "FitLife-Website",
    title: "FitLife Website",
    css: `
    :root {
      --primary-color: #ff4c29;
      --secondary-color: #082032;
      --text-color: #2c394b;
      --background-color: #f0f0f0;
    }
    
    body {
      font-family: "Roboto", sans-serif;
      color: var(--text-color);
      background-color: var(--background-color);
      line-height: 1.6;
    }
    
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .btn {
      display: inline-block;
      padding: 0.8rem 1.5rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
    }
    
    .btn-primary {
      background-color: var(--primary-color);
      color: white;
      cursor: pointer;
    }
    
    .btn-primary:hover {
      background-color: #333;
    }
    
    /* Navbar.css */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      transition: background-color 0.3s ease;
    }
    
    .navbar-collapse {
      display: flex;
      align-items: center;
    }
    
    .navbar.scrolled {
      background-color: var(--secondary-color);
    }
    
    .navbar.scrolled a {
      color: #fff;
      cursor: pointer;
    }
    
    .navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    
    .navbar-brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
      text-decoration: none;
    }
    
    .brand-highlight {
      color: var(--primary-color);
    }
    
    .navbar-toggler {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
    }
    
    .navbar-cta {
      margin-left: auto;
    }
    
    .burger-icon {
      display: block;
      width: 25px;
      height: 3px;
      background-color: var(--primary-color);
      position: relative;
      transition: background-color 0.3s ease;
    }
    
    .burger-icon::before,
    .burger-icon::after {
      content: "";
      position: absolute;
      width: 25px;
      height: 3px;
      background-color: var(--primary-color);
      transition: all 0.3s ease;
    }
    
    .burger-icon::before {
      top: -8px;
    }
    
    .burger-icon::after {
      bottom: -8px;
    }
    
    .navbar-nav {
      display: flex;
      list-style-type: none;
      margin-right: 1rem;
      margin-bottom: 0;
    }
    
    .navbar-nav li {
      margin-left: 2rem;
    }
    
    .navbar-nav a {
      color: #333;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      cursor: pointer;
    }
    
    .navbar-nav a:hover {
      color: var(--primary-color);
    }
    
    @media (max-width: 768px) {
      .navbar-toggler {
        display: block;
      }
    
      .navbar-collapse {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--secondary-color);
        padding: 1rem;
        display: none;
      }
    
      .navbar-collapse.show {
        display: block;
      }
    
      .navbar-nav {
        flex-direction: column;
      }
    
      .navbar-nav li {
        margin: 1rem 0;
      }
    
      .navbar-nav a {
        color: #fff;
      }
    
      .navbar-toggler.active .burger-icon {
        background-color: transparent;
      }
    
      .navbar-toggler.active .burger-icon::before {
        top: 0;
        transform: rotate(45deg);
      }
    
      .navbar-toggler.active .burger-icon::after {
        bottom: 0;
        transform: rotate(-45deg);
      }
    }
    
    /* HeroSection.css */
    .hero-section {
      height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      overflow: hidden;
    }
    
    .hero-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
    
    .hero-content {
      max-width: 800px;
      padding: 2rem;
    }
    
    .hero-content h1 {
      color: var(--primary-color);
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }
    
    .hero-content p {
      color: #333;
    
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    
    .scroll-down {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
    }
    
    .scroll-down i {
      font-size: 2rem;
      color: rgb(0, 0, 0);
    }
    
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
    
    /* AboutSection.css */
    .about-section {
      padding: 5rem 0;
      background-color: white;
    }
    
    .about-section h2 {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .about-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .about-card {
      background-color: var(--background-color);
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
      transition: transform 0.3s ease;
    }
    
    .about-card:hover {
      transform: translateY(-10px);
    }
    
    .about-card i {
      font-size: 3rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
    
    .about-card h3 {
      margin-bottom: 1rem;
    }
    
    /* TrainersSection.css */
    .trainers-section {
      padding: 5rem 0;
      background-color: var(--secondary-color);
      color: white;
    }
    
    .trainers-section h2 {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .trainer-card {
      background-color: white;
      border-radius: 10px;
      overflow: hidden;
    }
    
    .trainer-card img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    
    .trainer-info {
      padding: 1.5rem;
      text-align: center;
      color: var(--text-color);
    }
    
    .trainer-social {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }
    
    .social-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      margin: 0 0.5rem;
      transition: background-color 0.3s ease;
    }
    
    .social-btn:hover {
      background-color: darken(var(--primary-color), 10%);
    }
    
    /* ContactForm.css */
    .contact-section {
      padding: 5rem 0;
      background-color: white;
    }
    
    .contact-section h2 {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .contact-form {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    .form-group textarea {
      height: 150px;
    }
    
    .success-message {
      text-align: center;
      background-color: #4caf50;
      color: white;
      padding: 2rem;
      border-radius: 5px;
    }
    
    /* Footer.css */
    .footer {
      background-color: var(--secondary-color);
      color: white;
      padding: 3rem 0 1rem;
      position: relative;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .footer-brand h3 {
      margin-bottom: 1rem;
    }
    
    .footer-links ul {
      list-style-type: none;
      padding: 0;
    }
    
    .footer-links li {
      margin-bottom: 0.5rem;
    }
    
    .footer-links a {
      color: white;
      text-decoration: none;
      cursor: pointer;
    }
    
    .footer-newsletter form {
      display: flex;
    }
    
    .footer-newsletter input {
      flex-grow: 1;
      padding: 0.5rem;
      border: none;
      border-radius: 5px 0 0 5px;
    }
    
    .footer-newsletter button {
      border-radius: 0 5px 5px 0;
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .social-icons a {
      color: white;
      font-size: 1.2rem;
      margin-left: 1rem;
    }
    
    .back-to-top {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      background-color: var(--primary-color);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
    
    .back-to-top:hover {
      background-color: darken(var(--primary-color), 10%);
    }
    
    `,
  },
  {
    taskId: "FAQ-Toggle",
    title: "FAQ Toggle",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap");

:root {
  --primary-color: #6c63ff;
  --secondary-color: #4caf50;
  --background-color: #1e1e2e;
  --item-background: #2a2a3c;
  --text-color: #e0e0e0;
  --text-color-muted: #b0b0b0;
  --transition-speed: 0.5s;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: "Poppins", sans-serif;
}

.faq-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.faq-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 10% 20%,
      rgba(108, 99, 255, 0.15) 0%,
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(76, 175, 80, 0.15) 0%,
      transparent 30%
    );
  filter: blur(60px);
  z-index: -1;
}

.faq-list {
  list-style: none;
  padding: 0;
}

.faq-item {
  background: var(--item-background);
  border-radius: 15px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: all var(--transition-speed) cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.faq-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(108, 99, 255, 0.3);
}

.faq-question {
  width: 100%;
  background: none;
  border: none;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
}

.faq-question-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color);
  text-align: left;
}

.faq-icon {
  position: relative;
  width: 20px;
  height: 20px;
}

.faq-icon-bar {
  position: absolute;
  background-color: var(--primary-color);
  transition: all var(--transition-speed) ease;
}

.faq-icon-bar:first-child {
  width: 100%;
  height: 2px;
  top: 50%;
  transform: translateY(-50%);
}

.faq-icon-bar:last-child {
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.faq-item.active .faq-icon-bar:last-child {
  transform: translateX(-50%) scaleY(0);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all var(--transition-speed) cubic-bezier(0.23, 1, 0.32, 1);
}

.faq-item.active .faq-answer {
  max-height: 1000px;
  padding: 0 30px 25px;
}

.faq-answer p {
  margin: 0;
  font-weight: 300;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);
  transition: all var(--transition-speed) ease 0.2s;
  color: var(--text-color-muted);
}

.faq-item.active .faq-answer p {
  opacity: 1;
  transform: translateY(0);
}

@keyframes soft-pulse {
  0% {
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.2),
      0 0 20px rgba(108, 99, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 10px rgba(108, 99, 255, 0.3),
      0 0 30px rgba(108, 99, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.2),
      0 0 20px rgba(108, 99, 255, 0.1);
  }
}

.faq-item.active {
  animation: soft-pulse 3s infinite;
}

@media (max-width: 768px) {
  .faq-container {
    padding: 10px;
  }

  .faq-question {
    padding: 20px;
  }

  .faq-question-text {
    font-size: 16px;
  }
}

    `,
  },
  {
    taskId: "Pomodoro-Focus-Timer",
    title: "Pomodoro Focus Timer",
    css: `
    :root {
      --color1: #ff6b6b;
      --color2: #4ecdc4;
      --color3: #45b7d1;
      --color4: #f7d44c;
      --background: #2f3640;
      --text: #f5f6fa;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background: var(--background);
      color: var(--text);
      font-family: "Orbitron", sans-serif;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    
    #pomodoro {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    
    h1 {
      font-size: 2.5em;
      margin-bottom: 1em;
      text-transform: uppercase;
      letter-spacing: 3px;
      text-align: center;
      color: var(--color4);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    #clock-container {
      position: relative;
      width: 300px;
      height: 300px;
    }
    
    #clockBody {
      width: 100%;
      height: 100%;
      background: conic-gradient(
        var(--color1) 0deg,
        var(--color2) 90deg,
        var(--color3) 180deg,
        var(--color4) 270deg
      );
      border-radius: 50%;
      position: absolute;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
      transition: transform 0.5s ease;
    }
    
    #clockBody.rotating {
      animation: rotate 60s linear infinite;
    }
    
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    #timer {
      font-size: 3em;
      font-weight: bold;
      background: var(--background);
      border-radius: 50%;
      width: 80%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
    
    #settings {
      margin-top: 2em;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;
      width: 100%;
      max-width: 500px;
    }
    
    label {
      font-size: 0.9em;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color4);
    }
    
    input {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      color: var(--text);
      padding: 0.5em;
      font-size: 1em;
      text-align: center;
      border: none;
      border-radius: 25px;
      outline: none;
      font-family: "Orbitron", sans-serif;
    }
    
    button {
      width: 100%;
      padding: 0.7em;
      font-size: 0.9em;
      text-transform: uppercase;
      letter-spacing: 1px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: "Orbitron", sans-serif;
      position: relative;
      overflow: hidden;
    }
    
    button::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: all 0.5s;
    }
    
    button:hover::before {
      left: 100%;
    }
    
    button:nth-child(3n + 1) {
      background: var(--color1);
      clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
    }
    
    button:nth-child(3n + 2) {
      background: var(--color2);
      clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
    }
    
    button:nth-child(3n) {
      background: var(--color3);
      clip-path: circle(50% at 50% 50%);
    }
    
    #reset {
      grid-column: span 3;
      background: var(--color4);
      clip-path: polygon(
        20% 0%,
        80% 0%,
        100% 20%,
        100% 80%,
        80% 100%,
        20% 100%,
        0% 80%,
        0% 20%
      );
    }
    
    @media screen and (max-width: 480px) {
      #clockBody {
        width: 250px;
        height: 250px;
      }
    
      #timer {
        font-size: 2.5em;
      }
    
      #settings {
        grid-template-columns: 1fr 1fr;
      }
    
      #reset {
        grid-column: span 2;
      }
    }
    
    `,
  },
  {
    taskId: "Profolio",
    title: "Profolio",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body {
    overflow-x: hidden;
  }
  
  body {
    font-family: "Poppins", sans-serif;
    background-color: #f6f9fc;
    color: #2c3e50;
    line-height: 1.6;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .section-padding {
    padding-top: 80px;
  }
  
  h2 {
    text-align: center;
  }
  
  /* Navbar */
  .navbar {
    background-color: rgba(44, 62, 80, 0.9);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    height: 80px;
    padding: 0 15px;
  }
  
  .container {
    height: 100%;
  }
  
  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  
  .navbar-logo {
    flex-shrink: 0;
  }
  
  .logo-img {
    height: 40px;
    width: auto;
  }
  
  .navbar-menu {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  
  .navbar-nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .navbar-nav .menu__item {
    margin: 0 10px;
    display: flex;
    align-items: center;
  }
  
  .navbar-nav .menu__item a {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
  }
  
  .navbar-nav .menu__item img {
    height: 70px;
    width: auto;
  }
  
  .navbar-nav .menu__item a:hover::after {
    width: 100%;
  }
  
  /* Header styles */
  .jumbotron.homepage {
    background: linear-gradient(135deg, #3498db, #8e44ad);
    color: #ecf0f1;
    padding: 200px 0 150px;
    margin-bottom: 0;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
  
  .profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid #ecf0f1;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  
  .profile-image:hover {
    transform: scale(1.05) rotate(5deg);
  }
  
  .header-text h1 {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .header-text h3 {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 30px;
  }
  
  .header-text .highlight {
    color: #f39c12;
    font-weight: 600;
  }
  
  .cta-buttons {
    margin-top: 30px;
  }
  
  .cta-buttons .btn {
    margin: 0 10px;
    padding: 12px 30px;
    font-size: 1.2rem;
    border-radius: 30px;
    transition: all 0.3s ease;
  }
  
  .cta-buttons .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .jumbotron.homepage .row {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  
  .jumbotron.homepage img {
    border: 5px solid #ecf0f1;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  
  .jumbotron.homepage img:hover {
    transform: scale(1.05);
  }
  
  .header-text h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .header-text h3 {
    font-size: 2rem;
    font-weight: 300;
  }
  
  .header-text h3 span {
    color: #f39c12;
    font-weight: 600;
  }
  
  section {
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  
  section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom right, #f6f9fc 49%, transparent 51%);
  }
  
  section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top left, #f6f9fc 49%, transparent 51%);
  }
  
  section h1 {
    font-size: 3rem;
    margin-bottom: 50px;
    text-align: center;
    position: relative;
  }
  
  section h1::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 5px;
    background: linear-gradient(to right, #3498db, #8e44ad);
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2.5px;
  }
  
  /* About Section */
  #about .highlight {
    color: #3498db;
    font-weight: 600;
  }
  
  #about .lead {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
  
  .container#about {
    height: auto;
  }
  
  /* Button styling */
  .btn {
    background: linear-gradient(135deg, #3498db, #2ecc71);
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn:hover {
    background: linear-gradient(135deg, #2ecc71, #3498db);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
  
  .btn:focus {
    outline: none;
  }
  
  .btn:active {
    background: linear-gradient(135deg, #3498db, #2ecc71);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }
  
  .btn-lg {
    padding: 14px 28px;
    font-size: 18px;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #3498db, #2ecc71);
  }
  
  /* Timeline */
  .timeline {
    position: relative;
    padding: 20px 0;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 40px;
    width: calc(70% - 20px);
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transform: translateX(0);
    transition: all 0.3s ease;
  }
  
  .timeline-item.left {
    float: left;
    clear: left;
  }
  
  .timeline-item.right {
    float: right;
    clear: right;
  }
  
  .timeline-item .timeline-badge {
    position: absolute;
    top: 20px;
    right: -60px;
    width: 100px;
    height: 40px;
    background: #3498db;
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  
  .timeline-item.right .timeline-badge {
    right: auto;
    left: -60px;
  }
  
  .timeline-item .timeline-panel {
    position: relative;
  }
  
  .timeline-item h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 700;
    color: #3498db;
  }
  
  .timeline-item p {
    font-size: 1rem;
    color: #2c3e50;
  }
  
  /* Skills section */
  .skills-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  .skills-container {
    width: 100%;
  }
  
  .skill-item {
    margin-bottom: 20px;
  }
  
  .skill-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .skill-name {
    font-weight: bold;
    font-size: 16px;
  }
  
  .skill-level {
    font-size: 14px;
    color: #555;
  }
  
  .skill-bar {
    height: 12px;
    border-radius: 6px;
    transition: width 0.3s ease-in-out;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Portfolio section */
  .portfolio-items {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
  
  .portfolio-item {
    flex: 1 1 calc(33.333% - 20px);
    box-sizing: border-box;
  }
  
  .portfolio-card {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  #portfolio {
    margin-top: 100px;
  }
  
  .img-responsive {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .portfolio-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(52, 152, 219, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .portfolio-card:hover .portfolio-overlay {
    opacity: 1;
  }
  
  .portfolio-overlay h3 {
    color: #fff;
    margin-bottom: 15px;
  }
  
  .portfolio-overlay .btn {
    background: linear-gradient(135deg, #3498db, #2ecc71);
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .portfolio-overlay .btn:hover {
    background: linear-gradient(135deg, #2ecc71, #3498db);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
  
  .portfolio-overlay .btn:focus {
    outline: none;
  }
  
  .portfolio-overlay .btn:active {
    background: linear-gradient(135deg, #3498db, #2ecc71);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }
  
  /* Contact Section Styles */
  .contact-section {
    position: relative;
    overflow: hidden;
  }
  
  .contact-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
  }
  
  .contact-section h1 {
    color: #2c3e50;
    margin-bottom: 50px;
  }
  
  .contact-info {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info h3 {
    color: #3498db;
    margin-bottom: 20px;
  }
  
  .contact-details {
    list-style: none;
    padding: 0;
  }
  
  .contact-details li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  .contact-details li svg {
    margin-right: 10px;
    color: #3498db;
  }
  
  .contact-form {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    position: relative;
    margin-bottom: 20px;
  }
  
  .input-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #3498db;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px 10px 10px 40px;
    border: none;
    border-bottom: 2px solid #e9ecef;
    background-color: transparent;
    transition: all 0.3s ease;
  }
  
  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    border-bottom-color: #3498db;
  }
  
  .contact-form button {
    background: linear-gradient(135deg, #3498db, #2ecc71);
    color: #fff;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  }
  
  .contact-form button:hover {
    background: linear-gradient(135deg, #2ecc71, #3498db);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(52, 152, 219, 0.4);
  }
  
  /* Footer Styles */
  footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 60px 0 30px;
    position: relative;
    overflow: hidden;
  }
  
  footer::before {
    content: "";
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top left, #2c3e50 49%, transparent 51%);
  }
  
  footer h3 {
    color: #3498db;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
  
  footer ul {
    list-style: none;
    padding: 0;
  }
  
  footer ul li {
    margin-bottom: 10px;
  }
  
  footer a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  footer a:hover {
    color: #3498db;
  }
  
  .social-icons {
    display: flex;
    justify-content: flex-start;
    gap: 15px;
  }
  
  .social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  
  .social-icons a:hover {
    background-color: #3498db;
    transform: translateY(-3px);
  }
  
  footer hr {
    border-color: rgba(255, 255, 255, 0.1);
    margin: 30px 0;
  }
  
  footer p {
    font-size: 0.9rem;
    opacity: 0.7;
  }
  
    `,
  },
  {
    taskId: "Animated-Progress-Loader",
    title: "Animated Progress Loader",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #f0f0f0;
  color: #333;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circular-progress {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circular-progress-inner {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #f0f0f0;
}

.progress-text {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  color: #333;
}

.content {
  text-align: center;
  max-width: 800px;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #6366f1;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .circular-progress {
    width: 120px;
    height: 120px;
  }

  .circular-progress-inner {
    width: 100px;
    height: 100px;
  }

  .progress-text {
    font-size: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}

    `,
  },
  {
    taskId: "Dynamic-Loader",
    title: "Dynamic Loader",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Space Mono", monospace;
  background-color: #000;
  color: #fff;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #000, #111);
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loader-shape {
  width: 200px;
  height: 200px;
}

.progress-text {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  color: #00ff00;
}

.content {
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #00ffff;
}

p {
  font-size: 1.5rem;
  color: #ff00ff;
}

@media (max-width: 768px) {
  .loader-shape {
    width: 150px;
    height: 150px;
  }

  .progress-text {
    font-size: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}

    `,
  },
  {
    taskId: "Speech-Synth",
    title: "Speech Synth",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: "Inter", sans-serif;
  color: #333;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  max-width: 800px;
  padding: 0 20px;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 40px;
}

.input-text {
  max-width: 100%;
  width: 100%;
  min-height: 200px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #eee;
  transition: box-shadow 0.3s ease;
}

.input-text:focus {
  outline: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.btn-style {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:focus,
button:hover {
  background-color: #e45748;
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.875rem;
  }

  button {
    padding: 12px 20px;
  }

  .btn-style {
    flex-direction: column;
  }
}

    `,
  },
  {
    taskId: "Smooth-Scroll-Navigator",
    title: "Smooth Scroll Navigator",
    css: `
    body,
html {
  background: #2c3e50;
  font-family: "Exo", sans-serif;
  color: #ecf0f1;
}

#nav-wrap {
  background-color: #34495e;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
}

.clearfix {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav-btn {
  width: 100px;
  padding: 20px 0;
  font-size: 14px;
  color: #bdc3c7;
  transition: all 0.3s ease;
}

#nav-indicator {
  background: #3498db;
  height: 3px;
  transition: all 0.3s ease;
}

.nav-icon {
  display: block;
  font-size: 24px;
  margin-bottom: 5px;
}

h1,
h2 {
  color: #ecf0f1;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 60px;
}

.row {
  background: #34495e;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.row:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.row h3 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #3498db;
}

.row p {
  font-size: 18px;
  line-height: 1.6;
}

.row.active {
  background: #2c3e50;
  border: 2px solid #3498db;
}

#top {
  background: #3498db;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  transition: all 0.3s ease;
}

#top:hover {
  background: #2980b9;
  transform: scale(1.1);
}

    `,
  },
  {
    taskId: "Tesla-Experience",
    title: "Tesla Experience",
    css: `
    body {
      margin: 0;
      font-family: "Gotham", Arial, sans-serif;
      background-color: #000;
      color: #fff;
    }
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem 2rem;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
    }
    
    .header-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1200px;
    }
    
    .header .logo {
      height: 30px;
    }
    
    .header-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .header-links li {
      margin: 0 1rem;
    }
    
    .header-links li a {
      color: #fff;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    
    .header-links li a.active,
    .header-links li a:hover {
      color: #c0c0c0;
    }
    
    .header .btn {
      background-color: #e82127;
      color: #fff;
      padding: 0.5rem 1.2rem;
      text-decoration: none;
      border-radius: 5px;
      font-size: 0.95rem;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }
    
    .header .btn:hover {
      background-color: #c01118;
    }
    
    .home {
      text-align: center;
      padding: 6rem 2rem 2rem;
    }
    
    .home .intro {
      max-width: 800px;
      margin: 0 auto 4rem;
    }
    
    .home .intro h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .home .intro p {
      font-size: 1.2rem;
    }
    
    .home .features {
      margin: 4rem 0;
    }
    
    .home .features h2 {
      font-size: 2.2rem;
      margin-bottom: 2rem;
    }
    
    .feature-cards {
      display: flex;
      justify-content: space-around;
      margin: 2rem 0;
    }
    
    .feature-card {
      width: 30%;
      padding: 2rem;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.05);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
    }
    
    .feature-card h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    
    .feature-card p {
      font-size: 1rem;
      line-height: 1.5;
    }
    
    .test-drive {
      margin: 4rem 0;
    }
    
    .test-drive h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
    
    .test-drive p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    
    .test-drive .btn {
      background-color: #e82127;
      color: #fff;
      padding: 0.8rem 1.5rem;
      text-decoration: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }
    
    .test-drive .btn:hover {
      background-color: #c01118;
    }
    .model {
      height: 100vh;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    .model::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    
    .model-info {
      padding: 2rem;
      border-radius: 10px;
      z-index: 2;
      text-align: center;
      max-width: 800px;
    }
    
    .model-info h1 {
      font-size: 3rem;
      margin-top: 0;
      margin-bottom: 1rem;
    }
    
    .model-info p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    
    .specs {
      display: flex;
      justify-content: space-around;
      margin: 2rem 0;
    }
    
    .specs div {
      text-align: center;
    }
    
    .specs h2 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    
    .specs p {
      font-size: 1rem;
    }
    
    .price {
      text-align: center;
      margin: 2rem 0;
    }
    
    .price h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .btn {
      background-color: #e82127;
      color: #fff;
      padding: 0.8rem 1.5rem;
      text-decoration: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }
    
    .btn:hover {
      background-color: #c01118;
    }
    .footer {
      text-align: center;
      padding: 1.5rem;
      background-color: #111;
      color: #ccc;
      font-size: 0.9rem;
    }
    
    .footer a {
      color: #ccc;
      text-decoration: none;
      margin: 0 0.5rem;
      transition: color 0.3s ease;
    }
    
    .footer a:hover {
      color: #fff;
    }
    
    `,
  },
  {
    taskId: "Dynamic-Dashboard",
    title: "Dynamic Dashboard",
    css: `
    :root {
      --primary-color: #3498db;
      --secondary-color: #2c3e50;
      --background-color: #ecf0f1;
      --text-color: #333;
      --sidebar-width: 150px;
    }
    
    body {
      font-family: "Roboto", Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: var(--background-color);
      color: var(--text-color);
    }
    
    header {
      background: var(--secondary-color);
      color: white;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    header a {
      color: white;
      text-decoration: none;
      padding: 10px;
      transition: color 0.3s ease;
    }
    
    header a:hover {
      color: var(--primary-color);
    }
    
    aside {
      width: var(--sidebar-width);
      position: fixed;
      top: 70px;
      left: 0;
      bottom: 0;
      background: white;
      padding: 20px;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    aside a {
      display: block;
      padding: 15px;
      color: var(--text-color);
      text-decoration: none;
      transition: background-color 0.3s ease;
      border-radius: 5px;
    }
    
    aside a:hover,
    aside a.current {
      background-color: var(--primary-color);
      color: white;
    }
    
    #main {
      margin-left: var(--sidebar-width);
      padding: 30px;
      transition: margin-left 0.3s ease;
    }
    
    .sub {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 20px;
    }
    
    .sub button {
      background: none;
      border: none;
      padding: 10px 15px;
      margin-right: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      border-bottom: 2px solid transparent;
    }
    
    .sub button.current,
    .sub button:hover {
      border-bottom: 2px solid var(--primary-color);
      color: var(--primary-color);
    }
    
    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      background-color: white;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      overflow: hidden;
    }
    
    th,
    td {
      padding: 15px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    
    th {
      background-color: var(--primary-color);
      color: white;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    tr:last-child td {
      border-bottom: none;
    }
    
    tr:nth-child(even) {
      background-color: #f8f8f8;
    }
    
    tr:hover {
      background-color: #f0f0f0;
    }
    
    
    
    .schedule-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .schedule-item {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease; 
    }
    
    .schedule-item:hover {
      transform: scale(1.1);
    }
    
    .schedule-item h3 {
      color: var(--primary-color);
      margin-top: 0;
    }
    
    .schedule-item ul {
      list-style-type: none;
      padding: 0;
    }
    
    .schedule-item li {
      padding: 10px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .schedule-item li:last-child {
      border-bottom: none;
    }
    
    .info-container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .info-card,
    .features-card {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .features-card ul {
      list-style-type: none;
      padding: 0;
    }
    
    .features-card li {
      padding: 10px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .features-card li:last-child {
      border-bottom: none;
    }
    
    .menu-toggle {
      display: block;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    @media (max-width: 768px) {
      aside {
        transform: translateX(-100%);
      }
    
      #main {
        margin-left: 0;
      }
    
      .menu-open aside {
        transform: translateX(0);
      }
    
      .menu-open #main {
        margin-left: var(--sidebar-width);
      }
    }
    
    .loading-spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    
    `,
  },
  {
    taskId: "Quiz-Master",
    title: "Quiz Master",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap');


:root {
  --react-blue: #61dafb;
  --dark-bg: #282c34;
  --neon-green: #39ff14;
}


html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  background-color: var(--dark-bg);
}


.App {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code', monospace;
  position: relative;
  overflow: hidden;
  color: var(--react-blue);
}


.react-logo {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="%2361dafb"/><g stroke="%2361dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>') no-repeat center center;
  background-size: 50%;
  opacity: 0.1;
  animation: rotate 60s linear infinite;
}


@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


.App-header {
  padding: 20px;
  z-index: 10;
  position: relative;
}


.App-header h1 {
  font-size: 3em;
  margin-bottom: 30px;
  text-shadow: 0 0 10px var(--react-blue);
  animation: neon 1.5s ease-in-out infinite alternate;
}


@keyframes neon {
  from { text-shadow: 0 0 10px var(--react-blue), 0 0 20px var(--react-blue), 0 0 30px var(--react-blue); }
  to { text-shadow: 0 0 5px var(--react-blue), 0 0 10px var(--react-blue), 0 0 15px var(--react-blue); }
}


.quiz-container {
  background-color: rgba(40, 44, 52, 0.8);
  border: 2px solid var(--react-blue);
  border-radius: 15px;
  padding: 30px;
  max-width: 600px;
  width: 90%;
  margin: auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px var(--react-blue);
}


.quiz-container::before {
  content: '<React>';
  position: absolute;
  top: 5px;
  left: 15px;
  font-size: 0.8em;
  color: var(--neon-green);
  opacity: 0.7;
}


.quiz-container::after {
  content: '</Quiz>';
  position: absolute;
  bottom: 5px;
  right: 15px;
  font-size: 0.8em;
  color: var(--neon-green);
  opacity: 0.7;
}


.quiz-question {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: var(--neon-green);
  text-align: center;
  padding: 10px;
  background: rgba(57, 255, 20, 0.1);
  border-radius: 5px;
}


.quiz-options {
  display: flex;
  flex-direction: column;
}


.quiz-option {
  cursor: pointer;
  padding: 15px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: rgba(97, 218, 251, 0.1);
  color: var(--react-blue);
  font-size: 1em;
  transition: all 0.3s ease;
  text-align: left;
  position: relative;
  overflow: hidden;
}


.quiz-option::before {
  content: '{ }';
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
  font-size: 1.2em;
  color: var(--react-blue);
}


.quiz-option.correct::before {
  content: '{✔}'; 
  color: #009200; 
}


.quiz-option.wrong::before {
  content: '{✘}';
  color:#811111; 
}


.quiz-option.wrong {
  background-color: #eb6c6b;
}


.quiz-option.correct {
  background-color: rgb(85, 207, 85);
}


.quiz-result {
  font-size: 1.2em;
  color: var(--neon-green);
}


.quiz-result h2 {
  margin-bottom: 20px;
}


.quiz-result p {
  margin: 10px 0;
  text-align: left;
}


button {
  background-color: var(--react-blue);
  border: none;
  color: var(--dark-bg);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-family: 'Fira Code', monospace;
  font-weight: bold;
  position: relative;
  overflow: hidden;
}


button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(45deg);
  z-index: 1;
  transition: all 0.3s ease;
}


button:hover::before {
  left: 100%;
}


button:hover {
  box-shadow: 0 0 10px var(--react-blue);
}


@media (max-width: 600px) {
  .App-header h1 {
    font-size: 2em;
  }
  
  .quiz-question {
    font-size: 1.2em;
  }
  
  .quiz-option {
    font-size: 0.9em;
  }
}

    `,
  },
  {
    taskId: "Profile-Popup-Animation",
    title: "Profile Popup Animation",
    css: `
    .app-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #111;
      color: #fff;
      font-family: "Arial", sans-serif;
    }
    
    .profile-container {
      background-color: #222;
      border-radius: 20px;
      padding: 30px;
      max-width: 600px;
      width: 100%;
      position: relative;
    }
    
    .info-table {
      border-collapse: separate;
      border-spacing: 0 10px;
      margin-bottom: 20px;
    }
    
    .table-row {
      background-color: #333;
      transition: background-color 0.3s ease;
    }
    
    .table-row:hover {
      background-color: #444;
    }
    
    .table-cell {
      padding: 15px;
      border-radius: 5px;
    }
    
    .table-cell:first-child {
      font-weight: bold;
      color: #888;
    }
    
    .btn {
      background-color: #444;
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      transition: all 0.3s ease;
      margin-top: 20px;
    }
    
    .btn:hover {
      background-color: #555;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .popup {
      background-color: #222;
      padding: 30px;
      border-radius: 15px;
      max-width: 500px;
      width: 100%;
      position: relative;
      box-shadow: 10px 10px 25px rgba(153, 153, 153, 0.5);
      overflow: hidden;
      border: #777 0.1px solid;
    }
    
    .popup::before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: linear-gradient(45deg, #ff00ff, #00ffff, #ff8800, #00ff00);
      z-index: -1;
      filter: blur(20px);
      animation: borderGlow 10s linear infinite;
    }
    
    .popup::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      right: 2px;
      bottom: 2px;
      background-color: #222;
      border-radius: 13px;
      z-index: -1;
    }
    
    @keyframes borderGlow {
      0% {
        filter: blur(20px) hue-rotate(0deg);
      }
      100% {
        filter: blur(20px) hue-rotate(360deg);
      }
    }
    
    .popup-title {
      font-size: 28px;
      margin-bottom: 20px;
      color: #fff;
      text-align: center;
    }
    
    .popup-text {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 15px;
      color: #ddd;
    }
    
    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .close-btn:hover {
      color: #ff00ff;
      transform: rotate(90deg);
    }
    
    `,
  },
  {
    taskId: "Movies4u",
    title: "Movies 4 You",
    css: `
    /* General styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #141414;
  color: #fff;
}

.app-container {
  min-height: 100vh;
}

/* Header styles */
.header {
  background-color: transparent;
  padding: 1rem 2rem;
  position: relative;
  z-index: 10;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
}

.menu {
  display: flex;
  gap: 1rem;
}

.menu-item {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.menu-button {
  display: none;
}

/* Mobile menu */
.mobile-menu {
  display: none;
}

.mobile-menu.open {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #141414;
  padding: 1rem 2rem;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
}

.mobile-menu-item {
  display: block;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 1rem 0;
  font-size: 2rem;
}

/* Slider styles */
.slider-container {
  height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  bottom: 10%;
  left: 10%;
  right: 10%;
  color: #fff;
  z-index: 1;
}

.slide-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.slide-description {
  font-size: 1rem;
}

.slider-nav {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;
  z-index: 2;
}

.nav-button {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
}

.thumbnail-container {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.thumbnail {
  width: 100px;
  height: 60px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail:hover,
.thumbnail.active {
  opacity: 1;
}

/* Responsive styles */
@media (max-width: 768px) {
  .menu {
    display: none;
  }

  .menu-button {
    display: block;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    z-index: 3;
  }

  .mobile-menu {
    display: none;
  }

  .mobile-menu.open {
    display: block;
  }
}

/* Search bar */
.search-bar {
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  margin-right: 1rem;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.modal-content {
  background: #fff;
  color: #000;
  padding: 1.5rem;
  border-radius: 8px;
  position: relative;
  text-align: center;
  width: 80%;
  max-width: 500px;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.modal-description {
  font-size: 1rem;
}

    `,
  },
  {
    taskId: "Natures-Beauty",
    title: "Natures Beauty",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  min-height: 100vh;
  width: 100%;

  background-color: #217c24;
  background-image: linear-gradient(62deg, #217c24 22%, #0b4e0c 100%);

  overflow-x: hidden;
  transform-style: preserve-3d;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 3rem;
}

.menu {
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  /* border: 1px solid white; */
}

.logo {
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 4rem;
}

.logo span {
  font-weight: 300;
}

.hamburger-menu {
  height: 4rem;
  width: 3rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.bar {
  width: 1.9rem;
  height: 1.5px;

  border-radius: 2px;
  background-color: #eee;
  transition: 0.5s;
  position: relative;
}

.bar::before,
.bar::after {
  content: "";

  position: absolute;
  width: inherit;
  height: inherit;
  background: #eee;
  transition: 0.5s;
}

.bar::before {
  transform: translateY(-9px);
}

.bar::after {
  transform: translateY(9px);
}

.container.active .bar {
  transform: rotate(360deg);
  background-color: transparent;
}

.main {
  position: relative;

  width: 100%;
  left: 0;
  z-index: 5;
  overflow: hidden;
  transform-origin: left;
  transition: 0.5s;
}

header {
  min-height: 100vh;
  width: 100%;
  background: url("./images/bg.jpg") no-repeat top center / cover;
  position: relative;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #0000006b;

  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  max-width: 45rem;
  text-align: center;
  color: #fff;

  padding: 0 2rem;
}

.title {
  font-size: 4rem;
}

.btn {
  margin-top: 1rem;
  padding: 0.6rem 1.8rem;
  background-color: #29b546;
  border: none;
  outline: none;
  border-radius: 25px;

  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
}

.container.active .bar::before {
  transform: translateY(0) rotate(45deg);
}
.container.active .bar::after {
  transform: translateY(0) rotate(-45deg);
}

.container.active .main {
  cursor: pointer;
  transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
}

.links {
  position: absolute;
  width: 30%;
  right: 0;
  top: 0;
  height: 100vh;

  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
}

.links a {
  text-decoration: none;
  color: #eee;

  padding: 0.7rem 0;

  display: inline-block;
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;

  letter-spacing: 1px;
  transition: 0.3s;
  transform: translateY(10px);

  animation: hide 0.5s forwards ease;
}

.links a:hover {
  transform: scale(1.05);
}

.container.active .links a {
  animation: appear 0.5s forwards ease var(--i);
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes hide {
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}

.shadow {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: black;
  transform-style: preserve-3d;
  transform-origin: left;
  transition: 0.5s;
  z-index: -1;

  border: 2px solid black;
}

.shadow.one {
  z-index: -1;
  opacity: 0.15;
}

.shadow.two {
  z-index: -2;
  opacity: 0.1;
}

.container.active .shadow.one {
  transform: perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5);
}

.container.active .shadow.two {
  transform: perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5);
}

.container.active .main:hover + .shadow.one {
  transform: perspective(1300px) rotateY(20deg) translateZ(230px) scale(0.5);
}
.container.active .main:hover + .shadow.two {
  transform: perspective(1300px) rotateY(20deg) translateZ(230px) scale(0.5);
}

.container.active .main:hover {
  transform: perspective(1300px) rotateY(20deg) translateZ(340px) scale(0.5);
}

    `,
  },
  {
    taskId: "Captcha-Guard",
    title: "Captcha Guard",
    css: `
    :root {
      --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      --text-color: #ffffff;
      --input-bg: rgba(255, 255, 255, 0.1);
      --button-gradient: linear-gradient(
        45deg,
        #ff9a9e 0%,
        #fad0c4 99%,
        #fad0c4 100%
      );
      --success-color: #4ade80;
      --error-color: #f87171;
    }
    
    body {
      font-family: "Poppins", sans-serif;
      background: var(--bg-gradient);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      color: var(--text-color);
    }
    
    .container {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 3rem;
      width: 380px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      background-clip: padding-box; 
    }
    
    .container:hover {
      transform: translateY(-5px);
      box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.35);
    }
    
    .title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
      text-align: center;
      background: linear-gradient(to right, #fff, #ffe4e1);
      -webkit-background-clip: text;
      background-clip: text; /* Standard */
      -webkit-text-fill-color: transparent;
    }
    
    .captcha {
      background: var(--input-bg);
      border-radius: 15px;
      padding: 2rem 1rem;
      margin-bottom: 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .captcha::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0) 70%
      );
      animation: ripple 15s linear infinite;
    }
    
    @keyframes ripple {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    .captcha h3 {
      font-size: 2.5rem;
      letter-spacing: 8px;
      font-weight: 700;
      margin: 0;
      background: linear-gradient(to right, #fff, #ffd1dc);
      -webkit-background-clip: text;
      background-clip: text; 
      -webkit-text-fill-color: transparent;
      position: relative;
      z-index: 1;
    }
    
    .user-input {
      width: 100%;
      padding: 1rem;
      background: var(--input-bg);
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      font-size: 1.1rem;
      color: var(--text-color);
      margin-bottom: 2rem;
      transition: all 0.3s ease;
      box-sizing: border-box;
      background-clip: padding-box; 
    }
    
    .user-input:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
    }
    
    .user-input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    .button-container {
      display: flex;
      gap: 1rem;
    }
    
    button {
      flex: 1;
      padding: 1rem;
      border: none;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      position: relative;
      overflow: hidden;
      background-clip: padding-box; 
    }
    
    button::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: all 0.5s;
    }
    
    button:hover::before {
      left: 100%;
    }
    
    .check-btn {
      background: var(--button-gradient);
      color: #2d3748;
    }
    
    .generate-btn {
      background: rgba(255, 255, 255, 0.2);
      color: var(--text-color);
    }
    
    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
    }
    
    .message-container {
      margin-top: 2rem;
      text-align: center;
    }
    
    .message {
      font-size: 1.1rem;
      padding: 1rem;
      border-radius: 12px;
      transition: all 0.3s ease;
      animation: fadeInUp 0.5s ease-out;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .message.success {
      background: rgba(74, 222, 128, 0.2);
      color: var(--success-color);
    }
    
    .message.error {
      background: rgba(248, 113, 113, 0.2);
      color: var(--error-color);
    }
    
    .fa-robot,
    .fa-circle-check,
    .fa-triangle-exclamation {
      margin-right: 0.5rem;
    }
    
    `,
  },
  {
    taskId: "Calculator",
    title: "Calculator",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Great+Vibes&family=Spartan:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: hsl(222, 26%, 31%);
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Spartan", sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
}

header h3 {
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 1.5em;
}

.calculator {
  width: 500px;
}

.theme {
  text-align: center;
  display: flex;
  position: relative;
}

.theme h4 {
  position: absolute;
  left: -90%;
  top: 50%;
}

.toggle {
  margin: 0.5rem 0;
}

.background {
  background-color: hsl(218, 30%, 18%);
  width: 80px;
  height: 25px;
  border-radius: 1rem;
  position: relative;
}

.circle {
  background: hsl(6, 63%, 50%);
  height: 67%;
  width: 17px;
  border-radius: 1rem;
  position: absolute;
  top: 15%;
  left: 5%;
  cursor: pointer;
}

span {
  font-size: 0.8em;
}

.display {
  width: 95%;
  height: 150px;
  background: hsl(218, 32%, 15%);
  border-radius: 1rem;
  text-align: right;
  line-height: 150px;
  padding-right: 1rem;
  font-size: 3.5em;
  margin-left: 2%;
  overflow-x: hidden;
}

.buttons-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;
  gap: 10px;
  background: hsl(218, 30%, 21%);
  width: 95%;
  margin-left: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
}

button {
  width: 100%;
  height: 70px;
  cursor: pointer;
  background: hsl(30, 25%, 89%);
  color: hsl(221, 14%, 31%);
  font-size: 1.2em;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  box-shadow: 0 -5px 0 rgba(0, 0, 0, 0.3) inset;
  transition: 0.2s ease-in-out;
}

button:hover {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

#equal {
  background: hsl(6, 63%, 50%);
  color: white;
  grid-column: span 2;
}

#equal:hover {
  background: hsl(6, 98%, 61%);
}

#reset {
  grid-column: span 2;
}

#del,
#reset {
  background-color: hsl(221, 27%, 46%);
  color: white;
  box-shadow: 0 -5px 0 rgba(0, 0, 0, 0.5) inset;
}

#del:hover,
#reset:hover {
  background-color: white;
  color: hsl(221, 27%, 46%);
}

.one,
.two,
.three {
  padding: 0 0.5rem;
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .calculator {
    width: 100%;
  }
  header {
    width: 350px;
    margin: 0 auto;
  }
}

    `,
  },
  {
    taskId: "Copy-To-Clipboard",
    title: "Copy To Clipboard",
    css: `
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
}

.clipboard-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.clipboard-card {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  max-width: 32rem;
  width: 100%;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.clipboard-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.clipboard-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: -1px;
}

.clipboard-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.clipboard-textarea {
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
}

.clipboard-textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.25);
}

.clipboard-button {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.clipboard-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.clipboard-button:active {
  transform: translateY(0);
}

.clipboard-button.copied {
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.clipboard-textarea,
.clipboard-button {
  animation: fadeIn 0.5s ease-out;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .clipboard-card {
    padding: 2rem;
  }

  .clipboard-title {
    font-size: 2rem;
  }
}

    `,
  },
  {
    taskId: "English-Dictionary",
    title: "English Dictionary",
    css: `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #119fb8 0%, #7c378d 100%);
  }
  
  ::selection {
    color: #fff;
    background: #764ba2;
  }
  
  .wrapper {
    width: 450px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .wrapper header {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: #333;
    margin-bottom: 25px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  .wrapper .search {
    position: relative;
    margin-bottom: 25px;
  }
  
  .search input {
    height: 55px;
    width: 100%;
    outline: none;
    font-size: 18px;
    border-radius: 30px;
    padding: 0 60px 0 25px;
    border: 2px solid #ddd;
    transition: all 0.3s ease;
  }
  
  .search input:focus {
    border-color: #764ba2;
    box-shadow: 0 0 10px rgba(118, 75, 162, 0.3);
  }
  
  .search input::placeholder {
    color: #999;
  }
  
  .search span {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 22px;
    color: #764ba2;
    transition: color 0.3s ease;
  }
  
  .search span:hover {
    color: #667eea;
  }
  
  .search-btn {
    display: block;
    width: 200px;
    height: 50px;
    margin: 0 auto 25px;
    background: linear-gradient(135deg, #af66ea 0%, #4b9fa2 100%);
    color: #fff;
    border: none;
    border-radius: 25px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .search-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(118, 75, 162, 0.4);
  }
  
  .wrapper .info-text {
    font-size: 15px;
    color: #666;
    margin-bottom: 20px;
    text-align: center;
    line-height: 1.5;
  }
  
  .wrapper ul {
    padding: 0;
    transition: all 0.3s ease;
  }
  
  .wrapper ul li {
    list-style: none;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }
  
  ul li:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  ul .word p {
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin-bottom: 5px;
  }
  
  ul .word span {
    font-size: 16px;
    color: #764ba2;
  }
  
  ul .content {
    max-height: 300px;
    overflow-y: auto;
    padding-right: 10px;
  }
  
  ul .content::-webkit-scrollbar {
    width: 6px;
  }
  
  ul .content::-webkit-scrollbar-thumb {
    background: #764ba2;
    border-radius: 3px;
  }
  
  .content li .details {
    padding-left: 20px;
    border-left: 4px solid #764ba2;
    margin-top: 15px;
  }
  
  .content li p {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
  }
  
  .content li span {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
  }
  
  .content .synonyms .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  
  .content .synonyms span {
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 5px;
    padding: 5px 10px;
    border-radius: 20px;
    background: rgba(118, 75, 162, 0.1);
    color: #764ba2;
    transition: all 0.3s ease;
  }
  
  .content .synonyms span:hover {
    background: #764ba2;
    color: #fff;
  }
  
    `,
  },
  {
    taskId: "day1",
    title: "Day 1",
    css: `
    /* Main Navbar Styling */
    body {
      margin: 0;
    }
.navbar {
  background: linear-gradient(to right, #6a0dad, #1e3a8a);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 0 16px;
}

.navbar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.brand-name {
  font-size: 24px;
  font-weight: bold;
}

.navbar-list {
  display: flex;
  gap: 32px;
  list-style: none;
  padding-left: 0;
}
.navbar-list ul{
  list-style: none;
}

.navbar-item {
  position: relative;
}

.navbar-item a {
  text-decoration: none;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  font-size: 16px;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
}

.chevron-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
}

/* Hover effect for showing dropdown */
.navbar-item:hover .dropdown-menu {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu {
  position: absolute;
  left: 0;
  top: 100%;
  min-width: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  margin-top: 0;
  border: 1px solid #f3f4f6;
  display: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 10;
  
}

.dropdown-item {
  padding: 8px 16px;
  font-size: 14px;
  color: #374151;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
}

/* Sub Dropdown */
.sub-dropdown-menu {
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 180px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  margin-top: 0;
  border: 1px solid #f3f4f6;
  display: none;
  opacity: 0;
  visibility: hidden;
  transform: translateX(10px);
  transition: all 0.3s ease;
}

/* Show sub-dropdown when parent item is hovered */
.dropdown-item:hover .sub-dropdown-menu {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.sub-dropdown-item {
  padding: 8px 16px;
  font-size: 14px;
  color: #374151;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.sub-dropdown-item:hover {
  background-color: #f3f4f6;
}

/* Burger Menu */
.navbar-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
}

.navbar-toggle .bar {
  height: 4px;
  width: 100%;
  background-color: white;
  border-radius: 2px;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .navbar-list {
    display: none;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    background: linear-gradient(to right, #6a0dad, #1e3a8a);
    position: absolute;
    top: 64px;
    left: 0;
    padding: 16px 0;
  }

  .navbar-list.open {
    display: flex;
  }

  .navbar-item {
    text-align: center;
  }

  .navbar-toggle {
    display: flex;

  }
}

    `,
  },
];

export default stylesData;

/*


  {
    taskId: "task",  
    title: "title",
    css: `
    
    `,
  },
  

  */
