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
    category: "Info",
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
    image: "./images/articleImg/3/title.webp",
  },
  {
    id: 4,
    category: "Info",
    title: "Going Live with Stripe in Your React Project",
    extract:
      "Transitioning your React project from Stripe's test environment to the live environment is a crucial step to start processing real payments. This process ensures that your application is fully prepared to handle secure transactions in a production setting.",
    date: "23 June 2024",
    image: "./images/articleImg/4/title.webp",
  },
  {
    id: 5,
    category: "Info",
    title: "Guide to Implementing Git in Visual Studio Code",
    extract:
      "This step-by-step guide provides detailed instructions on installing Git and Visual Studio Code, configuring Git, managing repositories, and performing common Git operations such as staging, committing, and pushing changes to a remote repository. Ideal for beginners, this guide ensures a smooth start to using Git in your development workflow.",
    date: "13 July 2024",
    image:
      "https://previews.dropbox.com/p/thumb/ACVsWSdi2QVvfAwDVlef1T6OikObpg-ZzV7xLzRMR0xoboGuiL8GHESCenjDcQOFhDezj21qWp2w80wX-C0w0yOWfI-V5bGvUe1_3ci6HxAoiG25sjnRBYMLOQqJk6IrTpaAFe4CMiSeuxN6J9Kq6DyLJ3a1PVX9dD9l_9-GJbuMJzdO3juHBrWRzWaPBER3X0rapasNP9R8isUl8UQF8Xk9hpPXTruYo9PItJDYUWeWPa24nIQ6DDPYuErMRBSGBIv9UdqUqGxAPddKhUZmQZoKXzCYla3C8knsUtIiUUE7ez_z3d4Gb9gkOKCmgfqnBfiEBhSD0NdY_st7AP7fhTgp/p.png",
  },
];

const articles = [
  {
    id: 1,
    title: "How to create Authentication Guard Component",
    image: "/images/articleImg/AuthGuard1.webp",
    paragraphs: [
      {
        type: "text",
        content: `Setup Firebase Authentication: Ensure you have set up Firebase Authentication properly. This includes setting up a Firebase project, enabling the Authentication service, and configuring sign-in methods (like email/password, Google, etc.). Create Firebase Configuration File: Ensure you have a Firebase configuration file (usually named firebase.html or similar) where you initialize Firebase with your configuration.`,
      },
      {
        type: "text",
        content: `Create an AuthGuard.js file. This component will handle the authentication logic.`,
      },
      {
        type: "text",
        content: `Inside the AuthGuard component:`,
      },
      {
        type: "list",
        items: [
          "Import necessary modules from React and useNavigate from react-router-dom.",
          "Import the 'auth' object from './firebase' file.",
          "Define a functional component AuthGuard that takes 'children' as a prop.",
          "Initialize navigate function using the useNavigate hook from react-router-dom.",
          "Initialize 'isLoggedIn' state variable with false using useState hook.",
        ],
      },
      {
        type: "text",
        content: `Implement the useEffect hook:`,
      },
      {
        type: "list",
        items: [
          "Call onAuthStateChanged method on 'auth' object to listen for authentication state changes.",
          "Update the 'isLoggedIn' state based on whether the user (from onAuthStateChanged) is null or not.",
          "If 'isLoggedIn' is false, redirect the user to the login page using navigate('/login').",
        ],
      },
      {
        type: "text",
        content: `Ensure useEffect has the correct dependencies (auth, navigate) specified.`,
      },
      {
        type: "text",
        content: `In your return statement:`,
      },
      {
        type: "list",
        items: [
          "If isLoggedIn is true, render the children (components wrapped inside AuthGuard).",
          "If isLoggedIn is false, return null to prevent rendering unauthorized content.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "InsightTrack: Empowering Your Digital Presence",
    image:
      "https://www.themexpert.com/images/blog/how_add_google-analytics/image9.png",
    paragraphs: [
      {
        type: "text",
        content: `Having Google Analytics installed on your website is beneficial because it provides valuable insights into your website's performance and visitor behavior. It allows you to track key metrics such as website traffic, user engagement, conversion rates, and more, helping you make informed decisions to optimize your website, improve user experience, and ultimately achieve your business goals.`,
      },
      {
        type: "list",
        items: [
          "Go to the Google Analytics Website: Visit the Google Analytics website by typing 'Google Analytics' into your browser's search bar or directly navigating to analytics.google.com.",
          "Sign In or Create an Account: If you already have a Google account (Gmail, Google Drive, etc.), you can sign in with those credentials. If not, you'll need to create a Google account by clicking on the 'Create account' link and following the instructions.",
          "Start Setting Up Google Analytics: Once you're signed in, click on the 'Start for free' button. This will begin the process of setting up your Google Analytics account.",
          "Set Up Your Property: After clicking 'Start for free', you'll be prompted to set up your first property. A property represents your website, app, or other digital asset you want to track with Google Analytics. Click on the 'Web' option if you're setting up analytics for a website.",
          "Enter Property Details: Enter the details for your website, such as the website name, URL, industry category, and reporting time zone.",
          "Get Tracking ID: After entering your property details, you'll be presented with a Google Analytics tracking ID. This ID is a unique code that you'll need to add to your website's code so Google can track your site's traffic. You can copy this tracking ID or directly install the Google Analytics tracking code on your website.",
          "Install Tracking Code: To track your website's traffic accurately, you'll need to install the Google Analytics tracking code on every page of your website. You can either manually add the tracking code to your website's HTML or use a website platform like WordPress that offers plugins for easy integration.",
          "Verify Tracking Installation: Once you've installed the tracking code, return to the Google Analytics interface and click on the 'Send test traffic' button. This will send test data to Google Analytics to verify that the tracking code is installed correctly.",
          "Explore Reports: Once you've set up your Google Analytics account and verified that tracking is working, you can start exploring the reports. Google Analytics provides a wealth of data about your website's visitors, including information about where they're coming from, what pages they're visiting, and how they're interacting with your site.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Mastering JavaScript Pagination",
    image: "./images/articleImg/3/logo.webp",
    paragraphs: [
      {
        type: "text",
        content: `Mastering JavaScript Pagination: Theory, Implementation, and Best Practices In the dynamic landscape of web development, efficient data management and presentation are paramount. One common challenge developers face is efficiently displaying large datasets while maintaining user experience. Enter JavaScript pagination—a technique that not only enhances performance but also improves usability by breaking down voluminous data into digestible chunks. In this comprehensive guide, we'll delve into the theory behind pagination, provide practical code examples, and explore its applications across various scenarios.`,
      },
      {
        type: "list",
        items: [
          "Pagination, in essence, involves dividing content into discrete pages, typically with a limited number of items per page. This approach offers several benefits:",
          "Enhanced Performance: Loading a large dataset in a single go can strain server resources and lead to sluggish user experiences. Pagination mitigates this issue by distributing data across multiple pages, resulting in faster load times.",
          "Improved User Experience: Navigating through pages is intuitive for users, allowing them to consume content at their own pace without feeling overwhelmed.",
          "Optimized Bandwidth Usage: By fetching only the necessary data for each page, pagination reduces bandwidth consumption, making it ideal for users with limited internet connectivity.",
        ],
      },
      {
        type: "text",
        content: `Let's illustrate pagination implementation using HTML, CSS and JavaScript. Consider a scenario where we have an array of items and aim to display them in paginated form.`,
      },
      {
        type: "image",
        src: "./images/articleImg/3/pic1.webp",
        alt: "Pic1",
      },
      {
        type: "image",
        src: "./images/articleImg/3/pic2.webp",

        alt: "Pic2",
      },
      {
        type: "image",
        src: "./images/articleImg/3/pic3.webp",

        alt: "Pic3",
      },
      {
        type: "image",
        src: "./images/articleImg/3/pic4.webp",

        alt: "Pic4",
      },
      {
        type: "text",
        content: `In this example, we start by defining an array of items. The displayItems function takes care of rendering items for the current page, while renderPaginationButtons generates pagination controls. Clicking on a pagination button triggers the display of corresponding items.`,
      },
      {
        type: "text",
        content: `Where to use pagination:`,
      },
      {
        type: "list",
        items: [
          "Pagination finds applications across various domains, including:",
          "E-commerce Websites: Displaying products in paginated grids allows users to navigate through extensive catalogs conveniently.",
          "Blogs and Articles: Long-form content can be divided into pages, facilitating easier reading and navigation.",
          "Data Tables: In applications dealing with tabular data, pagination enhances readability and performance by splitting data into manageable chunks.",
          "Search Results: Search engines often paginate results to present them in a structured and navigable manner.",
        ],
      },
      {
        type: "text",
        content: `In conclusion, JavaScript pagination is a versatile tool for managing and presenting data in web applications. By understanding its theory, implementing it effectively, and leveraging it across various contexts, developers can significantly enhance user experience and optimize performance.`,
      },
    ],
  },
  {
    id: 4,
    title: "Going Live with Stripe in Your React Project",
    image:
      "./images/articleImg/4/title.webp",
    paragraphs: [
      {
        type: "text",
        content: `To transition your React project from using the Stripe test environment to the live environment, you'll need to make a few changes and take some steps to ensure your application can handle real payments securely.`,
      },
      {
        type: "text",
        content: `Stripe provides separate API keys for test and live environments. You need to replace the test API keys in your React project with the live API keys.`,
      },
      {
        type: "list",
        items: [
          "Log in to your Stripe account.",
          "Go to the Dashboard.",
          "Navigate to Developers > API keys.",
          "Copy your live Publishable key and Secret key.",
          "Replace the test keys with the live keys in your React project. Typically, this means updating your Stripe initialization code or configuration file where the API keys are set.",
        ],
      },
      {
        type: "text",
        content: `If your application uses Stripe webhooks for handling events like payment success or failure, you'll need to ensure that your live webhook endpoints are set up and can handle live events.`,
      },
      {
        type: "list",
        items: [
          "In the Stripe Dashboard, under Developers > Webhooks, add and configure your live webhook endpoints (e.g., https://yourdomain.com/stripe-webhook). Make sure these endpoints point to your live server or API.",
          "If your React project communicates with a backend (Node.js, Django, etc.) that handles Stripe webhooks, update the webhook handling logic to verify live events and update your application accordingly.",
        ],
      },
      {
        type: "text",
        content: `Before going fully live, thoroughly test your application in the live environment. You can do this with real transactions, but Stripe provides a way to test without actually charging a card.`,
      },
      {
        type: "list",
        items: [
          "Use Stripe's test card numbers for various scenarios (e.g., success, failure).",
          "Set the amount to a low value (e.g., $0.50) to avoid significant charges during testing.",
          "Ensure all parts of your checkout process (payment form, payment confirmation, error handling) work correctly with live API keys.",
        ],
      },
      {
        type: "text",
        content: `During testing and after going live, monitor your application for any errors or edge cases.`,
      },
      {
        type: "list",
        items: [
          "Handle API Errors: Stripe may return different error codes in live mode compared to test mode. Ensure your application can handle these gracefully.",
          "Check for Edge Cases: Test scenarios such as declined cards, expired cards, insufficient funds, and other common issues that can occur during payments.",
        ],
      },
      {
        type: "text",
        content: `Ensure your application complies with PCI-DSS (Payment Card Industry Data Security Standard) requirements if you’re handling card information directly. Stripe handles much of the compliance burden through their payment forms, but you should still be aware of any relevant regulations.`,
      },

      {
        type: "text",
        content: `Refer to Stripe's documentation for detailed guides and best practices for going live. If you encounter any issues or have questions, Stripe’s support team is also available to help.`,
      },
      {
        type: "text",
        content: `After completing these steps, your React project will be ready to securely process real payments with Stripe, ensuring a seamless and reliable experience for your users in a live production environment.`,
      },
    ],
  },
  {
    id: 5,
    title: "Git with VSCode",
    image: "/images/articleImg/gitLogo.webp",
    paragraphs: [
      {
        type: "text",
        content: `Step 1: Install Git`,
      },

      {
        type: "list",
        items: [
          "Go to the Git website. (https://git-scm.com).",
          "Click on 'Download' and choose the version that matches your operating system (Windows, macOS, or Linux).",
          "Follow the instructions to download the installer.",
          "Run the downloaded installer.",
          "Follow the setup instructions. You can use the default settings for most options unless you have specific requirements.",
          "Open your terminal ( in your VSCode ) or command prompt.",
          "Type 'git --version' or ( 'git -v' ) and press Enter.",
          "You should see the installed Git version, confirming that Git is installed successfully.",
        ],
      },
      {
        type: "text",
        content: `Step 2: Install Visual Studio Code`,
      },

      {
        type: "list",
        items: [
          "Go to the VS Code website. (https://code.visualstudio.com).",
          "Click on 'Download' and choose the version that matches your operating system.",
          "Run the downloaded installer.",
          "Follow the setup instructions.",
        ],
      },
      {
        type: "text",
        content: `Step 3: Configure Git in VS Code`,
      },

      {
        type: "list",
        items: [
          "Open Visual Studio Code.",
          "Go to the top menu and click on 'Terminal' > 'New Terminal'.",
          "Set your Git username by typing: git config --global user.name 'Your Name' and press Enter.",
          "Set your Git email by typing: git config --global user.email 'you@example.com' and press Enter.",
        ],
      },
      {
        type: "text",
        content: `Step 4: Initialize a Git Repository`,
      },

      {
        type: "list",
        items: [
          "Open the folder containing your project files in VS Code by clicking on 'File' > 'Open Folder' and selecting your project folder.",
          "Open the terminal in VS Code (Terminal > New Terminal).",
          "Navigate to your project folder if not already there. (type: cd projectFolderName)",
          "Type 'git init' and press Enter to initialize a new Git repository.",
        ],
      },
      {
        type: "text",
        content: `Step 5: Make Changes and Commit`,
      },

      {
        type: "list",
        items: [
          "Create or edit files in your project folder using the VS Code editor.",
          "Open the terminal in VS Code.",
          "Type git commit -m 'Your commit message' and press Enter to commit the changes with a descriptive message.",
        ],
      },
      {
        type: "text",
        content: `Step 6: Push to a Remote Repository`,
      },

      {
        type: "list",
        items: [
          "Go to 'GitHub', 'GitLab', or 'Bitbucket' and create a new repository.",
          "In the terminal, type git remote add origin https://github.com/your-username/your-repository.git (replace the URL with your repository's URL) and press Enter.",
          "Type git push -u origin master and press Enter to push your local changes to the remote repository.",
        ],
      },
      {
        type: "text",
        content: `Step 7: Pull Changes from Remote Repository`,
      },

      {
        type: "list",
        items: [
          "In the terminal, type git pull origin master and press Enter to pull the latest changes from the remote repository to your local repository.",
        ],
      },
      {
        type: "text",
        content: `Step 8: Viewing Git Changes in VS Code`,
      },

      {
        type: "list",
        items: [
          "Click on the Source Control icon in the Activity Bar on the side of the VS Code window (or press Ctrl+Shift+G).",
          "In the Source Control view, you can see the list of changes, staged changes, and commit history.",
        ],
      },
      {
        type: "text",
        content: `Common Git Commands Cheat Sheet`,
      },

      {
        type: "list",
        items: [
          "'git status' - Show the working directory status.",
          "'git add .' - Add all changes to staging.",
          "'git commit -m 'message'' - Commit changes with a message. ( without message it WILL NOT commit ).",
          "'git push' - Push changes to remote repository.",
          "'git pull' - Pull changes from remote repository.",
          "'git checkout branch-name' - Switch to a branch.",
          "'git merge branch-name' - Merge a branch into the current branch.",
        ],
      },
      {
        type: "text",
        content: `Use my example as a guide`,
      },

      {
        type: "list",
        items: ["Make changes in your code."],
      },
      {
        type: "image",
        src: "./images/articleImg/5/blog1.webp",
        alt: "Pic1",
      },
      {
        type: "list",
        items: ["Press Source Control icon."],
      },
      {
        type: "image",
        src: "./images/articleImg/5/blog2.webp",
        alt: "Pic2",
      },
      {
        type: "list",
        items: ["Press '+' to Stage Changes"],
      },
      {
        type: "image",
        src: "./images/articleImg/5/blog3.webp",
        alt: "Pic3",
      },
      {
        type: "list",
        items: [
          "Type message. ( without message it will not commit ).",
          "Then press Commit button.",
        ],
      },
      {
        type: "image",
        src: "./images/articleImg/5/blog4.webp",
        alt: "Pic4",
      },
      {
        type: "list",
        items: ["Press three dots (...) next to main or master."],
      },
      {
        type: "image",
        src: "./images/articleImg/5/blog5.webp",
        alt: "Pic5",
      },
      {
        type: "list",
        items: ["Press Push."],
      },
      {
        type: "image",
        src: "./images/articleImg/5/blog6.webp",
        alt: "Pic6",
      },
      {
        type: "list",
        items: [
          "In your Github account navigate to repository.",
          "There you will find all the changes you made.",
        ],
      },
      {
        type: "image",
        src: "./images/articleImg/5/blog7.webp",

        alt: "Pic7",
      },
    ],
  },
];

export { articles, blogCards };
/*

 {
    id: ,
    title: "",
    image: "/images/articleImg/AuthGuard1.webp",
    paragraphs: [
      {
        type: "text",
        content: `text`,
      },
      {
        type: "image",
        src: "https://upload.wikime",
        alt: "React Icon",
      },
      {
       type: "list",
       items: [
         "",
         "",
         "",
         "",
         "",
         "",
       ],
      },
    ]
  },

  */
