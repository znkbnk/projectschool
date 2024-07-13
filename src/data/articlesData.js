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
    image:
      "https://previews.dropbox.com/p/thumb/ACXHehgHW93I8Z_TTQmXBYP9UthgWgwcTwm5kEwsFP5mYG7_XZPY7fi-KZWGzeseefbQcV4ptILs9l3tW6hpcwW6LMFUixBClUSiGufC3Ecqalp6oAcbQfZ4I1zp8EWakbuf_sIq1jLAuuKRHk4zJtzGnm-vkhVsM0FiexvXtiWJASAS7UEgHFWyHCvakbQG3YQHVnT-BplUKqom1IajiXEXH5_PYuYWTY03t8APxiJl4_eEtHvqJct-yzCuv9udQczn30oS-zAmevGlV4cg5-hxZYTHUtpM_K3OUAmt4nqVPYHShguhb8URMhlHBfQ2dULxEtY3ga5-YRd6oWmCESlQagwxDcbNC6GEc4Hd7Ez1ytyoAbCSR7aZVXl-W2YJyVo/p.png",
  },
  {
    id: 4,
    category: "Info",
    title: "Going Live with Stripe in Your React Project",
    extract:
      "Transitioning your React project from Stripe's test environment to the live environment is a crucial step to start processing real payments. This process ensures that your application is fully prepared to handle secure transactions in a production setting.",
    date: "23 June 2024",
    image:
      "https://previews.dropbox.com/p/thumb/ACXVLpoSw9Vig8CjWqPFcL-xV5YSsFrrklllhD5vPORvyMWOuahnYpzBQFbmNGHsar3ksKVW2qB6K1wx0XAsrM6WuFUjVOfaerFfcyP1v5oA53n4zDZjglje9CrVFyIMK8TQmj_71E8zoE6AxgVQlUpqvJjEisQzKbDLegwsTXWr_nNqJw_j9KNQxCV19R7B-Yzz9HOf6dDHaPQ4cvBqEITOrkm6USXiOup38dsw1LBHcrA72P2iXdyqRf0r0Ibnt8LNCh7N5eiAKFH6wSHOCe5IHBCYakU9ZK4sJ07S9zWFvLzYa6gIupZ-JxTPdYpwHzGwUSWgCdcqSlJ25GXDbczvlzycAfmIRO5VajbyjFdvZdkiMKCItTvUIZxYwaDhzog/p.png",
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
    image:
      "https://previews.dropbox.com/p/thumb/ACUycNzocrtt-i2wPHZQGrpViqvMrOSe5RJP-yiH9mSGhAikew_TOoMQunFh8Dn53qAtTgvfplrianDM0C6DM2T3ot9KnB4WvgEOUQtKja1pfH7KYPQhQJZ8MYfHR12V3APVFnW1KRXQfk5Oz-yJKhvKl6YnJGSfcx5NWTWAiFbD-WId9uB3MZGXjskfWBInwwQoGC9xpJIL5Kqc_bArxQLorpkwSl1n5AUJ_rLnpgks3pdnxGl2Fv6ULyIOzfSe6vWfdtG2_sTg_9mwdvGKXg7MVKoAXyNAOKJuFFrmDIAa8sGTsEyYWQLSYhoWvv_ua_ZtJ5eJ5vWqohgZYw_5gfVr8O5ph0yxJv8A4ZDjl46g-HgVPgVgsP8YMENvBrLCwTQ/p.png",
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
        src: "https://previews.dropbox.com/p/thumb/ACVh6WCzo4T2P_-_k0IHayPrduhCW_JoBxixZRZ80NXudH75XUiLT29xPIMPxTSi--zuwxL7l_7yLM2itO0WL4Qd_TUrFVPKcZD7QK3ZqaHF9Gz7xSZZsqYd66kIv0LwfdTn0vi4JESrElcHtz5Tu48L_KleuVaN8dRtrRYE6LYIEqmVL63Hckywu2njbcEH0J41yUmZq081eSd4z_EVmO6gdHnsLtTH-Pa0Kenzz3NVlcGO-EMzQ7cdiw1ktLcExzPew08IfJj5jvbD9nv6_FNhaswMs9N83ZJiyvjaMIN4Lh7lxzq8ZRRzvMZTukBkG5Dzeu33bLovcX33UjoXWR0yj6k6EwNiKPreuhdBJCV9PYXfa6LWcs-FF4qqrKIhUco/p.png",
        alt: "React Icon",
      },
      {
        type: "image",
        src: "https://previews.dropbox.com/p/thumb/ACXMwtzFvZBeY97WyrEz6LR5h5rNK71TGjWQo_Rn6ufMmtYRvwJuOUwLAuLqypB5-BMoJptTdihVxY1RK5HvmCs4EzYEf-Y4hyBOkjpD9rWezfBLRF27o27OEdj7V57Nexv13JtQ-SM0zqmUewjeV3OcahttPe4IFWo5vRsuxGJMLn5KH7kSZsFNrUM0P2yiijXHNWgNulgbOxsQ1-u4V9R97YXC9Y7_sucwEWl6JORm_rmgNo3RieaJJyGQEAnsOzj4gBR7i_c-KDkaKxdcgHSv1K1uVZa-_nOCe_4dItMiOnJlNdFvR66MlKDSIz4IbO5hQdzSMvWCqgE8z6bz0y-BRac3F-2i2c9y5va94ylSTqXJr07vno30OnyFqMg9k6o/p.png",
        alt: "React Icon",
      },
      {
        type: "image",
        src: "https://previews.dropbox.com/p/thumb/ACWb8ll9aiGicdF4bbizHsveu4IY7NcgyK66d5D-tTK7nSRQ31wiptdAEW-5jqqyCJvf9hvPvaXKqUdjZ5F1XQLUEurb2r_ROD82Lf647g8E4F25Adn4XHXUWLI40iJMm13LnGXqvoz1uaQ_VfWuCyZZJnhbZVY-njfWPcOKMKM_uEgPLADswC0L1g-Zk7kIszqyaAZLrGiObQAjQj8vXr-2gIMHrxT5Ww_yHqqg3bHF9iJZ6y-NtK9kv51SkJlvI1RtNjf8K2tEgqmJS20oGgGWsocESWKa_ccb8vVRRXzpzTI8qiiTsaLYXXPgm4iOdc9WXh5YrP_Wnae0Z-jLkUUQYlgdU87knSzVMtAdFHJTreF7JfLxZEoCuSKt5yKpMvs/p.png",
        alt: "React Icon",
      },
      {
        type: "image",
        src: "https://previews.dropbox.com/p/thumb/ACUGaDiLGUCbeqOvn4zeAEp6g95-HTYb7yICcv05F8eZMCignrd9Mv-7RfLbfE8A1SZVSKDEl5LuYydaGqGi_jltUKfPUEilmbCF2eYCUI1a4OB_spPXzNC6RKm3bpc3oTEBBsn-rfEcpej9atAfw8VUNyWLYNVZIpFC-d2lTInU-RDtt8KI3B1N4TckxDF7cNEu2PiCHl3umPkQeVwRJrS730h62vQwr57TLTNnnwnsfWbSAesljfJ9aEqwHgkMEKzEFoNY8Pq1ZiGGBK5EVOc10ncO3FP4Ic3DVkTu40KyNNwWJ-be4wl-PPT7jdLMQ4BUXN6VwbO9SnRiA5ofG-pUMUw9l9MNwCXJdab8EF7ZfywblT5ZLzjqUVIyoeyVN-I/p.png",
        alt: "React Icon",
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
      "https://previews.dropbox.com/p/thumb/ACWHrEEocOeW4a-se9v5ZB2A4IgtzDV-ffgPB3ZXgOY5nXqty900BOwFI2V1ROvpekL97p66MRr3LO11-RqlQdbzAbgV7j9BprfzL-MortkYmgk3MVCnH2psZUvRRD0GE82QSRxrClvqaF10_aeF7gKqw5h7i_POnz-oBIggdC3CYeYGTElGrLvjKsqND8WtVMEM8vXzTDtrYJfF8DbjEGNpqNKLNGhN00zOWr39-QcbpjVGsnJrw0EZkSaYCm0eYIKfu82tJrxpcrENz4PwvMLSq5pIZGCnLdCREE6WFpf_a9kiGuhSjG4yc1XH1u9vs4hOiTwopLhy_mgGkH3iG4cy_heT8isARGjN06KuREX_m-OEs3AHHYSaElsM-ToAOOE/p.png",
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
    title: "",
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
        items: [
          "Make changes in your code.",              
         
        ],
      },
      {
        type: "image",
        src: "https://previews.dropbox.com/p/thumb/ACUNee5LAkP6BPw5WCn9ilYgArZ9N1dWeIJsQmWRr1_aEhIXjg0huGIgeYfvySp0A03nuE-YzMVlU6_qSyKJqbiuZzUx6GUlW7Gp1Og8Zk7CEFfJfhiG9Rgw3J5SKM7TIjHhhT-ViE1BN0LpvlM_l3NXt05WsSrmBIClwgvnJ_u7WKZnSTPhYTCC8V3B9UlQAqVdYvFhd39JIaq4DTyLmaCVsGA0OdlmYlIC2-nDSeESJciL-HcRZuHUH-u1G6GHvrIkVLEIqBFx7Uivm4cPHPYo35yQBjzMDBIrnRFVlicjfuPSxMBytt9wXoNxgwF1LdPy4XnQFN7kGZBg43WwKryQnf2de3XNhMjAxapb4DRrNKfnf_TYHsoPR7vLlh9ZnpM/p.png",
        alt: "Pic1",
      },
      {
        type: "list",
        items: [
          "Press Source Control icon.",              
         
        ],
      },
      {
        type: "image",
        src: "https://previews.dropbox.com/p/thumb/ACXSfALVFKgiCT__8Bcj8iDzmoaADGrO3X0YJYkeb3xx0_KUW7f1Cg__BfrZ46HI18br7ln9OjmGKRwSWUxrcKt0N0Lb-OvP1HksgM0wLfCC0Q6WwjS5BltbNB_r1W15W3uY1nNnkG4VyzZ1-AVO-G5P3S_mP4OCg3kkyyYvXMqBFt7uggL4j-vNRLpXYCZFYCwPj0LacJPX5cpU2sXVs5iliZxSnZ8dlVCtajKPb4dwl_wjOxgj1y8VA3PY2UWICNgFFWYPeh42OwhqddJ1vWxcU7gkrZp_40ov6Ygwog_2HxUEvUWodvegykAWHKoWX32ByFXZepusluQkwMXGk99cPDOBYwHi0J-ZT22540mbmrr5gC1lXVspMtd2yqGz-h0/p.png",
        alt: "Pic2",
      },
      {
        type: "list",
        items: [
          "Press '+' to Stage Changes",              
         
        ],
      },
      {
        type: "image",
        src: "https://previews.dropbox.com/p/thumb/ACXRHLqVnTgVyveBuUj4LjFqRMp5b0BTzgXHwbJ_UDKcC2b8xpAeTScFMdx0py3jNQdyFo-TgkqxJUiK2x92bPtFVSjDP6AZui38nLovQK6eHrDSUio_kCwgPIvR21q85ALdpxrOhDmQQeNU6k8lr3BqsiokEr8rC6yGRA3OvvlQsVK2QUZaSUFJmwzAVcpc7PxWhX-WxtwxNjWxKm1b8esEy99dR0k9iLKjkZrueingGmJGBNRfl9ysSFXAj46TOR-9QemO2BDMkhtPuiasMBOJi2hZfTVxw8fr56JxoaFOzPdQjIo9vqd3kRpNCvzvTpNLM4suf8rPop2Z7kxFCKr4MtUvyCou9Vkrt1vWnwcp1FqJuGV-qTFqc4cRZO3-SmY/p.png",
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
        src: "https://previews.dropbox.com/p/thumb/ACVl3qnwqW12-S7r1pJlmTcT56ljPGlryha-OQr3y3Lqja_97toBfnE22vs66rlwTROAK8OibVfV0gQT4OoqY2gKb1-8oMXfIbqZkfvekvPj4GZzun2xijF2mCWHSfBQqEvwuCE3doM5z3PgUPk1VxvBBzBIB-kUF4QUswStomJsDrcdF_0xnBtqkkXqpSzHupemFwgeEG9fPrBmdQc75t0QlOxphkTAYUQI-DDUBAWuumtOGq97uBgqhLeehVUykY1aR_AE1zG922InEuTFwdtcDNcq2JhMxDqs8TKpUx51xNfebvOJ0Hp7GSLYdqqYSc0am0Dj4ZtAEYBNBMEe-EVH/p.png",
        alt: "Pic4",
      },
      {
        type: "list",
        items: [
          "Press three dots (...) next to main or master.",              
         
        ],
      },
      {
        type: "image",
        src: "https://previews.dropbox.com/p/thumb/ACWxhXfD9H1MSG3O5z1yIPGO06Coz1Nm6sFbL4TVI22Bj-5e3qupl06PyS1a43oiSKOfu8QSkcwwrXTJTvmHrHIGwAxliCXGZ48w_kYA1kLxTwKsCmAZH6n3eRavcb6S1VoIsRkStXOvkSZRs7aMFXXEPLRCspDGEO0nEZSYlJiO7ZI7HboCZRaxvpkuPMlp1IqB0w9arwVHhBxhYLYz-k6X_IVh_LdkRkU1nMlhAxUln9lhqXuGMekTmguG4lIaFzQxS5TkZAABFGNDVUMxi24IzQp30_iA6NtSjuj2b_Auj-ST69NxB_01rgsaVPKALJ8L1QSm9LB-w6KQ0RWKQoMnV0VDMG4onf5p904VrETNY5w8JJiFl4U2pfGCt1ngSKc/p.png",
        alt: "Pic5",
      },
      {
        type: "list",
        items: [
          "Press Push.",              
         
        ],
      },
      {
        type: "image",
        src: "https://previews.dropbox.com/p/thumb/ACWw28RSA5_gtbNsTWUmiIUJYwDBRmS-uLhUWU1PVXDQHa437qCD74ryq1rISWd7N8EhkSq4mUd73Ywj_Osj9_F_eHMj_LJB4UkxjeY_xP8pzeYAsj_BloueM7kBbmPb0iMupuHaRmZ3u8u3G5tNM0Zld3RBBp2bWLQLnLFKIQpHNIsKsZDcu68oLpEEVllwmJr0wVYIClYMxqmiecUw0SMdIjl95L5LoOYG3QFAr-X9xueJiLzYxPj7pM6X05XoJ6T1WghqckeNu2kxC2Or3vgx84gZBlH57nHtayH2iHRXAy-H-7b7ObIxsQaOBkmj-iaKJm4BWkuLa_5ETNXJvn3IoOXKXXkIGLZyuclDAcX4gSIG03saeUFYm39gL1hw37E/p.png",
        alt: "Pic6",
      },
      {
        type: "list",
        items: [
          "In your Github account navigate to repository.", 
          "There you will find all the changes you made."             
         
        ],
      },
      {
        type: "image",
        src: "https://previews.dropbox.com/p/thumb/ACWoKIwkqvunxtiOZB6y5d0O0nhlThcMgDzowePwwipVGMcT4G1i0NrNpyGwnh4-Pixh6cgbBAvyBntoSnd888o6eUQjIJSOQxrvHTkjI-nS5HfwCmalWQqjir8D1qHEN7lOibyxaS_dOD1LJah991Q9VIh9OX41-nhj1N_CExBq8QgycvSWj6PzrQmD3u1d1G2jz72AWaAQBEEo5ZwmMEQSaGnFtuz_2fQre0P1uojoondNFAWNdzjDQdC0KMpLkxFib0Q6Dk-WxKHs5lsgKQUtIdnrvGqt5Ii77a0_tqLHCeVDbe2-NkYC6r2g7voPL7-HhhSTknYVTOHzYIOqG07b9SIrsMB3Dv3APsJkpwS4jnxzyWfDFQW9xLjeiZgAhqI/p.png",
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
