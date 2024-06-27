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
    image: "https://previews.dropbox.com/p/thumb/ACVNZmwOdZgABQt74eB7VAb5zOhr1TkEa3SjZI4vFdEyr3P5AO8gggwquX36rHG5dKfmazOVaf4BmBS2M_s50CqLUdgTiksdcC-BZy4RN0pu19Z7rLE2EgH6y6RAA1JhmMDhDaCYfHEGpsxT2FLnWP5pKZWyfWIh6SqiWOaGiL69xKFCr6Spd4HmHa5zT4AMj48MoGeVkxJfAU6pF7wol76OI6A9ss1rVxvbjKjyPHICL9-S1yR6ZRg0hWFIhjHR7tFr7gO36LRLa7IMjl_pEUIbsbziZaR-JsSn9_6jQn-5tQfy1shda_12svviwtphhD_gABi5hPXHfaTHMPMYTaPh/p.png",
  },
  {
    id: 4,
    title: "Going Live with Stripe in Your React Project",
    extract:
      "Transitioning your React project from Stripe's test environment to the live environment is a crucial step to start processing real payments. This process ensures that your application is fully prepared to handle secure transactions in a production setting.",
    date: "23 June 2024",
    image:
      "https://previews.dropbox.com/p/thumb/ACSAWT2-Uqhlmo0YehiFk6x07fP8R0W0Buuj3t-KL3qhvRAIID0I-xMjkqUQxZPlXzqRF-KJx2b_xeSBglwbrx1mHhjwadgvsiAQ92FzniP01Vqq25o6Qd53HZzowx36IiKXzPPQfe5hZaO6snksyQhuVbxf8r3Sl7wfYFKUmA3rlD4ldZgbIGsGAdbdIbB4BRndJw5HdkA9AXJf4bdB39DSczoOJFv1O4Wzfs6zgL-V6AWcUIR_9ZcXLAk5Afn4t29gzTlJyesIdczxMsrJrYaKD8IR7wRsa1vINuEupe_CNJEYnSVfLTT4CZhhVL_fFqxs-4TTqTg8oKWMj9G86Bqs/p.png",
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
    image: "https://www.themexpert.com/images/blog/how_add_google-analytics/image9.png",
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
        image: "https://previews.dropbox.com/p/thumb/ACWHrEEocOeW4a-se9v5ZB2A4IgtzDV-ffgPB3ZXgOY5nXqty900BOwFI2V1ROvpekL97p66MRr3LO11-RqlQdbzAbgV7j9BprfzL-MortkYmgk3MVCnH2psZUvRRD0GE82QSRxrClvqaF10_aeF7gKqw5h7i_POnz-oBIggdC3CYeYGTElGrLvjKsqND8WtVMEM8vXzTDtrYJfF8DbjEGNpqNKLNGhN00zOWr39-QcbpjVGsnJrw0EZkSaYCm0eYIKfu82tJrxpcrENz4PwvMLSq5pIZGCnLdCREE6WFpf_a9kiGuhSjG4yc1XH1u9vs4hOiTwopLhy_mgGkH3iG4cy_heT8isARGjN06KuREX_m-OEs3AHHYSaElsM-ToAOOE/p.png",
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
              "Use Stripe’s test card numbers for various scenarios (e.g., success, failure).",
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
        ]
      },
];

export { articles, blogCards };

//  {
//     id: ,
//     title: "",
//     image: "/images/articleImg/AuthGuard1.webp",
//     paragraphs: [
//       {
//         type: "text",
//         content: `text`,
//       },
//       {
//         type: "image",
//         src: "https://upload.wikime",
//         alt: "React Icon",
//       },
//       {
//        type: "list",
//        items: [
//          "",
//          "",
//          "",
//          "",
//          "",
//          "",
//        ],
//       },
//     ]
//   },
