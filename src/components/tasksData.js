const tasksData = {
  HTML: [
    {
      taskId: "task1",
      taskTitle: "Simple Web Page",
      introduction:
        "Creating a simple HTML page involves structuring the document with HTML tags like html, head, and body, adding content elements such as headings and paragraphs, and optionally styling the page using CSS, resulting in a basic webpage that can be viewed in a web browser.",
      taskText: (
        <div>
          <h3>Step 1: Setting Up the HTML File</h3>
          <input type='checkbox' id='step1' />
          <label htmlFor='step1'>
            Open a text editor such as Notepad, Sublime Text, or Visual Studio
            Code.
          </label>
          <br />
          <input type='checkbox' id='step2' />
          <label htmlFor='step2'>
            Create a new file and save it with a .html extension, for example,
            index.html.
          </label>
          <h3>Step 2: Writing the Basic HTML Structure</h3>
          <input type='checkbox' id='step3' />
          <label htmlFor='step3'>
            In the HTML file, write the basic structure of an HTML document
            using !.
          </label>
          <br />
          <input type='checkbox' id='step4' />
          <label htmlFor='step4'>
            The code should include the !DOCTYPE html declaration, the html root
            element, the head section with meta information and the body section
            where the visible content will go.
          </label>
          <h3>Step 3: Adding Content to the HTML Page</h3>
          <input type='checkbox' id='step5' />
          <label htmlFor='step5'>
            Add some content to the body section; hheading h1 and a paragraph p
            containing some introductory text.
          </label>
          <h3>Step 4: Adding Styling (Optional)</h3>
          <input type='checkbox' id='step6' />
          <label htmlFor='step6'>
            You can add some basic CSS to style your HTML page. For simplicity,
            use inline styles.
          </label>
          <br />
          <input type='checkbox' id='step7' />
          <label htmlFor='step7'>
            Save your HTML file and open it in a web browser. You should see
            your simple HTML page with the added content and styling.
          </label>
        </div>
      ),
      taskType: "HTML",
      difficulty: "Easy",
      author: "myself",
      prerequisites: ["HTML Basics"],
      completed: false,
    },
    {
      taskId: "task2",
      taskText: "HTML Task 2 Description",
      taskType: "HTML",
      difficulty: "Easy",
      prerequisites: ["HTML Basics"],
      completed: false,
    },
    {
      taskId: "task3",
      taskText: "HTML Task 2 Description",
      taskType: "HTML",
      difficulty: "Easy",
      prerequisites: ["HTML Basics"],
      completed: false,
    },
    {
      taskId: "task4",
      taskText: "HTML Task 2 Description",
      taskType: "HTML",
      difficulty: "Easy",
      prerequisites: ["HTML Basics"],
      completed: false,
    },
    {
      taskId: "task5",
      taskText: "HTML Task 2 Description",
      taskType: "HTML",
      difficulty: "Easy",
      prerequisites: ["HTML Basics"],
      completed: false,
    },{
      taskId: "task6",
      taskText: "HTML Task 2 Description",
      taskType: "HTML",
      difficulty: "Easy",
      prerequisites: ["HTML Basics"],
      completed: false,
    },
  ],
  CSS: [
    {
      taskId: "task1",
      taskText: "CSS Task 1 Description",
      taskType: "CSS", // Corrected task type
      difficulty: "Easy",
      prerequisites: ["CSS Basics"],
      completed: false,
    },
    {
      taskId: "task2",
      taskText: "CSS Task 2 Description",
      taskType: "CSS", // Corrected task type
      difficulty: "Easy",
      prerequisites: ["CSS Basics"],
      completed: false,
    },
  ],
  React: [
    {
      taskId: "task1",
      taskText: "React Task 1 Description",
      taskType: "React", // Corrected task type
      difficulty: "Easy",
      prerequisites: ["React Basics"],
      completed: false,
    },
  ],
};

export default tasksData;
