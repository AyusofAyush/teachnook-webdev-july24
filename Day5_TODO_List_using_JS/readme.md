# Interactive TODO List using JS, Git and Github

## Recap from previous JS session

### Diff between call, bind & apply 

```
refer scripts.js
```

### JS Async programming

### Asynchronous Programming in JavaScript

Asynchronous programming is a paradigm that allows a program to perform tasks such as fetching data from a server, reading files, or performing other operations without blocking the main thread of execution. This is crucial for maintaining a responsive user interface and improving the overall performance of applications.

### Key Concepts

#### Callback Functions
A callback function is a function passed as an argument to another function, which is then executed after the completion of some operation.

**Example**:
```javascript
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData() {
    console.log("Processing data");
}

fetchData(processData);
```

**Study**: `Callback Hell problem in Javascript`

#### Promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.

**Example**:
```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve("Data");
        }, 1000);
    });
}

fetchData().then(data => {
    console.log("Processing", data);
}).catch(error => {
    console.error("Error:", error);
});
```

#### Async/Await
Async/Await is syntactic sugar built on top of Promises, providing a more readable and straightforward way to handle asynchronous code.

**Example**:
```javascript
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve("Data");
        }, 1000);
    });
}

async function processData() {
    try {
        const data = await fetchData();
        console.log("Processing", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

processData();
```

**Watch**: `What the heck is Event Loop ? (30 mins)`

### Event Loop

The event loop is a fundamental part of JavaScript's concurrency model. It allows JavaScript to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.

#### How the Event Loop Works:

1. **Call Stack**: The call stack is where the JavaScript engine keeps track of function calls. Functions are pushed onto the stack when called and popped off when they return.
2. **Web APIs**: Browsers provide Web APIs that handle asynchronous tasks like `setTimeout`, `fetch`, and DOM events. When these tasks are completed, they push callback functions to the Task Queue.
3. **Task Queue**: A queue where callback functions are pushed once their associated asynchronous tasks are complete.
4. **Event Loop**: Continuously checks the call stack and the task queue. If the call stack is empty, the event loop moves the first callback from the task queue to the call stack for execution.

#### Example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 1000);

console.log("End");
```

**Output**:
```
Start
End
Timeout
```

Here’s how the event loop handles this:

1. `console.log("Start")` is executed and logged to the console.
2. `setTimeout` is called and its callback is sent to the Web API, with a timer set for 1000ms.
3. `console.log("End")` is executed and logged to the console.
4. After 1000ms, the timer completes, and the callback is pushed to the Task Queue.
5. The Event Loop sees the call stack is empty, so it pushes the callback from the Task Queue to the call stack.
6. The callback `console.log("Timeout")` is executed and logged to the console.

### Summary

- **Asynchronous programming** in JavaScript allows non-blocking operations.
- **Callback functions** handle asynchronous operations but can lead to "callback hell."
- **Promises** provide a cleaner, more manageable way to handle async operations.
- **Async/Await** offers a more readable syntax for working with Promises.
- The **Event Loop** is the mechanism that allows JavaScript to perform non-blocking operations, ensuring the main thread remains responsive.


## Summary of the Interative TODO list

Creating an interactive Todo list using HTML, CSS, and JavaScript involves understanding how to manipulate the Document Object Model (DOM) to dynamically add, remove, and mark items as complete. Here's a step-by-step guide to help you understand the basics and the JavaScript concepts involved.

### Step 1: Setting Up the HTML

First, create a simple HTML structure for the Todo list.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Todo List</h1>
        <input type="text" id="todo-input" placeholder="Add a new task">
        <button id="add-button">Add</button>
        <ul id="todo-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Step 2: Adding Basic CSS

Next, add some basic styling to make the Todo list look better.

```css
/* styles.css */

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    width: 300px;
    text-align: center;
}

input, button {
    padding: 10px;
    margin: 5px 0;
    width: 100%;
    box-sizing: border-box;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 10px;
    background: #eee;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li.completed {
    text-decoration: line-through;
    color: #888;
}
```

### Step 3: Writing JavaScript

Now, let's write the JavaScript to make the Todo list interactive.

```javascript
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // Event listener to add a new todo item
    addButton.addEventListener('click', () => {
        const todoText = input.value.trim();
        if (todoText) {
            addTodoItem(todoText);
            input.value = '';
        }
    });

    // Function to add a new todo item
    function addTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;

        // Create a delete button for each todo item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        // Toggle completion status on click
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
```

### Explanation of JavaScript Code

1. **DOM Content Loaded Event**: `document.addEventListener('DOMContentLoaded', () => { ... });`
   - This ensures the JavaScript code runs only after the HTML content is fully loaded.

2. **Querying DOM Elements**:
   ```javascript
   const input = document.getElementById('todo-input');
   const addButton = document.getElementById('add-button');
   const todoList = document.getElementById('todo-list');
   ```
   - `document.getElementById` is used to get the input field, add button, and the todo list `<ul>` element.

3. **Event Listener for Add Button**:
   ```javascript
   addButton.addEventListener('click', () => {
       const todoText = input.value.trim();
       if (todoText) {
           addTodoItem(todoText);
           input.value = '';
       }
   });
   ```
   - This adds an event listener to the "Add" button that triggers when the button is clicked.
   - `input.value.trim()` gets the text from the input field and removes any leading/trailing whitespace.
   - If the input is not empty, it calls the `addTodoItem` function and then clears the input field.

4. **Function to Add Todo Item**:
   ```javascript
   function addTodoItem(text) {
       const li = document.createElement('li');
       li.textContent = text;

       const deleteButton = document.createElement('button');
       deleteButton.textContent = 'Delete';
       deleteButton.addEventListener('click', () => {
           li.remove();
       });

       li.addEventListener('click', () => {
           li.classList.toggle('completed');
       });

       li.appendChild(deleteButton);
       todoList.appendChild(li);
   }
   ```
   - `document.createElement('li')` creates a new `<li>` element for the todo item.
   - `li.textContent = text` sets the text content of the `<li>` to the todo item text.
   - A delete button is created and an event listener is added to remove the `<li>` element when clicked.
   - An event listener is added to the `<li>` to toggle the `completed` class when clicked.
   - The delete button is appended to the `<li>`, and the `<li>` is appended to the `<ul>` todo list.

This is the basic structure of creating an interactive Todo list using HTML, CSS, and JavaScript. You can expand this by adding more features like editing items, storing them in local storage, or adding animations.



## Git, Github & Deploying Website on github

Here's a summary of some commonly used Git commands with brief descriptions and examples:

### 1. `git init`
**Description**: Initializes a new Git repository.
**Example**:
```sh
git init
```
This command creates a new `.git` directory in your project, setting up the necessary files for version control.

### 2. `git clone`
**Description**: Copies an existing Git repository.
**Example**:
```sh
git clone https://github.com/username/repo.git
```
This command clones the repository at the specified URL into a new directory.

### 3. `git status`
**Description**: Shows the status of changes as untracked, modified, or staged.
**Example**:
```sh
git status
```
This command lists all new or modified files that haven't yet been committed.

### 4. `git add`
**Description**: Adds files to the staging area.
**Example**:
```sh
git add filename
```
To add all files:
```sh
git add .
```
This command stages the specified files, preparing them for a commit.

### 5. `git commit`
**Description**: Records changes to the repository.
**Example**:
```sh
git commit -m "Commit message"
```
This command commits the staged changes with a descriptive message.

### 6. `git push`
**Description**: Updates the remote repository with local commits.
**Example**:
```sh
git push origin main
```
This command pushes your changes to the `main` branch of the remote repository.

### 7. `git pull`
**Description**: Fetches and integrates changes from the remote repository.
**Example**:
```sh
git pull origin main
```
This command fetches changes from the `main` branch and merges them into your local branch.

### 8. `git branch`
**Description**: Lists, creates, or deletes branches.
**Example**:
List branches:
```sh
git branch
```
Create a new branch:
```sh
git branch new-branch
```
Delete a branch:
```sh
git branch -d new-branch
```

### 9. `git checkout`
**Description**: Switches branches or restores working tree files.
**Example**:
Switch to a branch:
```sh
git checkout main
```
Create and switch to a new branch:
```sh
git checkout -b new-branch
```

### 10. `git merge`
**Description**: Joins two or more development histories together.
**Example**:
```sh
git merge new-branch
```
This command merges the `new-branch` into the current branch.

### 11. `git remote`
**Description**: Manages set of tracked repositories.
**Example**:
Add a remote repository:
```sh
git remote add origin https://github.com/username/repo.git
```
List remote repositories:
```sh
git remote -v
```

### 12. `git log`
**Description**: Shows the commit logs.
**Example**:
```sh
git log
```
This command lists the commit history for the current branch.

### 13. `git reset`
**Description**: Resets current HEAD to the specified state.
**Example**:
Unstage a file:
```sh
git reset filename
```
Reset to a specific commit:
```sh
git reset --hard commit-hash
```

### 14. `git stash`
**Description**: Temporarily shelves changes made to your working directory.
**Example**:
Save changes:
```sh
git stash
```
Apply stashed changes:
```sh
git stash apply
```

### 15. `git rebase`
**Description**: Reapplies commits on top of another base tip.
**Example**:
```sh
git rebase main
```
This command replays commits from the current branch onto `main`.

### 16. `git diff`
**Description**: Shows changes between commits, commit and working tree, etc.
**Example**:
```sh
git diff
```
This command shows the differences between the working directory and the index.

### 17. `git tag`
**Description**: Creates, lists, or deletes tags.
**Example**:
Create a tag:
```sh
git tag v1.0
```
List tags:
```sh
git tag
```
Push a tag:
```sh
git push origin v1.0
```

### Summary
- **`git init`**: Initialize a new repository.
- **`git clone`**: Clone an existing repository.
- **`git status`**: Check status of changes.
- **`git add`**: Stage changes.
- **`git commit`**: Commit changes.
- **`git push`**: Push changes to remote.
- **`git pull`**: Pull changes from remote.
- **`git branch`**: Manage branches.
- **`git checkout`**: Switch branches or restore files.
- **`git merge`**: Merge branches.
- **`git remote`**: Manage remote repositories.
- **`git log`**: View commit logs.
- **`git reset`**: Reset changes.
- **`git stash`**: Stash changes.
- **`git rebase`**: Reapply commits on top of another base tip.
- **`git diff`**: Show differences.
- **`git tag`**: Manage tags.

Understanding these commands will give you a solid foundation in using Git for version control.


### How to deploy your Static Website on Github Pages

Deploying a static website on GitHub Pages is straightforward and free. Here's a step-by-step guide to help you deploy your site:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and log in to your account.
2. Click on the `+` icon in the upper-right corner and select `New repository`.
3. Name your repository (e.g., `my-website`). Ensure the repository name is in lowercase and without spaces (use hyphens if necessary).
4. Optionally, add a description.
5. Choose `Public` for the repository visibility.
6. Initialize the repository with a `README.md` file.
7. Click `Create repository`.

### Step 2: Add Your Website Files

1. On your local machine, navigate to your project directory containing the static website files (HTML, CSS, JavaScript, images, etc.).
2. Initialize a new Git repository if you haven't already:
   ```sh
   git init
   ```
3. Add the GitHub repository as a remote:
   ```sh
   git remote add origin https://github.com/your-username/my-website.git
   ```
4. Add all your files to the repository:
   ```sh
   git add .
   ```
5. Commit the files:
   ```sh
   git commit -m "Initial commit"
   ```
6. Push the files to GitHub:
   ```sh
   git push -u origin main
   ```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub.
2. Click on the `Settings` tab.
3. Scroll down to the `Pages` section in the left sidebar.
4. Under `Source`, select the branch you want to deploy (usually `main`).
5. If your files are in the root directory, choose `/ (root)` for the folder. If they are in a specific folder (like `docs`), select that folder.
6. Click `Save`.

### Step 4: Access Your Website

1. After a few moments, GitHub will build and deploy your site.
2. A banner will appear at the top of the `Pages` section with the URL of your deployed site, typically `https://your-username.github.io/my-website/`.
3. Visit the URL to see your deployed site.

### Example Project Directory Structure

Make sure your project structure looks something like this:

```
my-website/
├── index.html
├── about.html
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
└── images/
    └── logo.png
```

### Additional Tips

- **Custom Domains**: If you want to use a custom domain, add a `CNAME` file with your domain name (e.g., `www.yourdomain.com`) to the root of your repository.
- **404 Pages**: GitHub Pages supports custom 404 pages. Just create a `404.html` file in your repository.
- **Updating Your Site**: To update your site, make changes locally, commit them, and push to the `main` branch. GitHub Pages will automatically update the site.

By following these steps, you can easily deploy your static website on GitHub Pages and make it accessible to the world.






## What is Frontend Development ?

Frontend development is the practice of creating the part of a website or web application that users interact with directly. It involves building the visual and interactive elements of a site, using technologies such as HTML, CSS, and JavaScript. Here are the key aspects of frontend development:

### Key Technologies:

1. **HTML (HyperText Markup Language):**

   - The standard language for creating web pages and web applications.
   - Defines the structure of web content.

2. **CSS (Cascading Style Sheets):**

   - Used for describing the presentation of a document written in HTML.
   - Controls the layout, colors, fonts, and overall visual appearance.

3. **JavaScript:**
   - A programming language that enables dynamic content, such as interactive forms, animations, and other client-side scripts.

### Frontend Frameworks and Libraries:

1. **React:**

   - A JavaScript library for building user interfaces, particularly single-page applications.
   - Developed by Facebook.

2. **Angular:**

   - A TypeScript-based open-source web application framework.
   - Developed by Google.

3. **Vue.js:**

   - A progressive JavaScript framework for building user interfaces.
   - Focuses on the view layer and can be integrated into projects incrementally.


### Tools and Workflow:

1. **Version Control (e.g., Git):**

   - Tracks changes in source code during development.
   - Allows multiple developers to collaborate on the same project.

2. **Task Runners and Module Bundlers (e.g., Gulp, Webpack):**

   - Automates repetitive tasks such as minification, compilation, unit testing, and linting.
   - Bundles various assets and modules into a single file.

3. **Development Environments (e.g., VS Code):**
   - Provides tools for writing, testing, and debugging code.
   - Enhances productivity with features like syntax highlighting, code completion, and integrated terminal.

### Responsibilities of a Frontend Developer:

1. **Designing User Interfaces:**

   - Creating aesthetically pleasing and functional user interfaces.
   - Collaborating with designers to translate designs into code.

2. **Ensuring Responsiveness:**

   - Making sure websites and applications work well on various devices and screen sizes.
   - Utilizing responsive design techniques and frameworks.

3. **Optimizing Performance:**

   - Ensuring fast load times and smooth interactions.
   - Minimizing the size of files and optimizing images and assets.

4. **Accessibility:**

   - Making websites usable for people with disabilities.
   - Following accessibility guidelines and standards.

5. **Cross-Browser Compatibility:**
   - Ensuring that web applications work consistently across different web browsers.
   - Testing and debugging issues specific to certain browsers.

Frontend development is crucial for creating engaging and effective web experiences. It combines technical skills, creativity, and an understanding of user behavior to build interfaces that are both functional and visually appealing.



## Frontend Development

#### 1. **Introduction to Frontend Development**

- **Definition:**

  - Frontend development involves creating the visual and interactive parts of a website or web application that users interact with directly.

- **Key Technologies:**
  - **HTML (HyperText Markup Language):** Structures web content.
  - **CSS (Cascading Style Sheets):** Styles the visual presentation.
  - **JavaScript:** Adds interactivity and dynamic content.

#### 2. **Frontend Frameworks and Libraries**

- **Frameworks:**

  - **React:**
    - **Use:** Build single-page applications (SPAs) with reusable components.
    - **Pros:** Reusable components, fast rendering with Virtual DOM, strong community support.
    - **Cons:** Learning curve, requires understanding of JavaScript ES6 and JSX.
  - **Angular:**
    - **Use:** Develop complex, large-scale applications.
    - **Pros:** Two-way data binding, comprehensive framework, TypeScript support.
    - **Cons:** Steep learning curve, opinionated structure.
  - **Vue.js:**
    - **Use:** Integrate into existing projects incrementally or build SPAs.
    - **Pros:** Easy to learn, flexible, strong community.
    - **Cons:** Smaller ecosystem compared to React and Angular.

#### 3. **When to Use Frameworks and Libraries**

- **When to Use:**

  - **Large, complex applications:** Frameworks like React, Angular, or Vue.js are suitable.
  - **Consistency and speed:** Libraries like Bootstrap for quick, consistent styling.

- **When to Avoid:**
  - **Small, simple websites:** Overhead of frameworks can be unnecessary.
  - **Performance-critical applications:** Lightweight solutions might be better.

#### 4. **Pros and Cons of Using Frameworks**

- **Pros:**

  - **Efficiency:** Pre-built components save time.
  - **Scalability:** Structured approach aids in managing large projects.
  - **Community Support:** Large user base, extensive documentation, and third-party plugins.

- **Cons:**
  - **Learning Curve:** Time investment to understand frameworks.
  - **Overhead:** Can be overkill for simple projects.
  - **Dependency:** Relying on third-party updates and fixes.

#### 5. **Common Frontend Terminologies**

- **DOM (Document Object Model):**
  - Represents the structure of a webpage.
  - Allows manipulation of HTML and CSS via JavaScript.
- **SPA (Single-Page Application):**
  - Web app that loads a single HTML page and dynamically updates content.
- **Responsive Design:**
  - Designing websites that work well on various devices and screen sizes.
- **AJAX (Asynchronous JavaScript and XML):**
  - Allows web pages to be updated asynchronously by exchanging data with a web server.
- **REST (Representational State Transfer):**
  - Architectural style for designing networked applications using stateless communication protocols.

#### 6. **Career in Frontend Development**

- **Roles and Responsibilities:**

  - Building and maintaining the client-side of web applications.
  - Collaborating with designers and backend developers.
  - Ensuring cross-browser compatibility and optimizing performance.

- **Skills Required:**

  - Proficiency in HTML, CSS, JavaScript.
  - Knowledge of frontend frameworks/libraries (React, Angular, Vue.js).
  - Understanding of responsive design principles.
  - Familiarity with version control systems (e.g., Git).

- **Career Prospects:**
  - High demand due to the growing need for web applications.
  - Opportunities in various industries (tech, e-commerce, finance).
  - Potential to advance to roles like Senior Frontend Developer, Full-Stack Developer, or UI/UX Designer.

### Conclusion

Frontend development is a dynamic and essential field in web development. Understanding when to use frameworks and libraries, mastering core technologies, and staying updated with industry trends are crucial for a successful career. As the demand for interactive and user-friendly web applications continues to grow, frontend developers will play a pivotal role in shaping the digital landscape.


## Bonus - CSS Framework:


When learning web development, CSS frameworks can help you quickly build and style your websites. Here are some popular CSS frameworks you should consider:

### 1. Bootstrap

**Description**:
Bootstrap is the most popular CSS framework that helps in developing responsive and mobile-first websites quickly. It provides a comprehensive collection of pre-designed components such as navigation bars, buttons, forms, modals, and more.

**Key Features**:
- Grid system for responsive design
- Extensive library of reusable components
- JavaScript plugins for interactive elements
- Customizable with Sass variables

**Example**:
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
```

**Website**: [Bootstrap](https://getbootstrap.com/)

### 2. Foundation

**Description**:
Foundation by ZURB is another responsive front-end framework. It is known for its flexibility and customization options, allowing developers to create advanced, professional web applications.

**Key Features**:
- Responsive grid and components
- Flexible and customizable
- Extensive set of UI components
- Built-in support for Sass

**Example**:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.3/css/foundation.min.css">
```

**Website**: [Foundation](https://get.foundation/)

### 3. Bulma

**Description**:
Bulma is a modern CSS framework based on Flexbox. It is easy to use and allows for rapid development of responsive websites. Bulma has a minimalistic approach, which makes it lightweight and easy to learn.

**Key Features**:
- Flexbox-based layout
- Responsive and modular design
- Simple syntax and easy to customize
- Lightweight with minimal footprint

**Example**:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
```

**Website**: [Bulma](https://bulma.io/)

### 4. Tailwind CSS

**Description**:
Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing CSS from scratch. It emphasizes flexibility and composability.

**Key Features**:
- Utility-first approach
- Highly customizable with configuration files
- Modular and reusable utility classes
- PurgeCSS for removing unused styles

**Example**:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
```

**Website**: [Tailwind CSS](https://tailwindcss.com/)

### 5. Materialize

**Description**:
Materialize is a CSS framework based on Google's Material Design principles. It offers a range of components and animations that adhere to Material Design guidelines, making it ideal for creating visually appealing and consistent user interfaces.

**Key Features**:
- Material Design components and styles
- Responsive grid system
- Built-in animations and transitions
- Sass support for customization

**Example**:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```

**Website**: [Materialize](https://materializecss.com/)

### 6. Semantic UI

**Description**:
Semantic UI is a framework that uses human-friendly HTML to create responsive and sleek designs. It focuses on the semantics of HTML to make the code more readable and intuitive.

**Key Features**:
- Intuitive and human-readable HTML
- Wide range of UI components
- Responsive and themable
- Integration with other libraries and frameworks

**Example**:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
```

**Website**: [Semantic UI](https://semantic-ui.com/)

### 7. UIkit

**Description**:
UIkit is a lightweight and modular front-end framework for developing fast and powerful web interfaces. It offers a comprehensive collection of HTML, CSS, and JavaScript components.

**Key Features**:
- Modular and lightweight
- Responsive components and grid system
- Easy to customize with Less or Sass
- Comprehensive documentation

**Example**:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.22/css/uikit.min.css">
```

**Website**: [UIkit](https://getuikit.com/)

### 8. Pure.css

**Description**:
Pure.css is a minimal CSS framework developed by Yahoo. It is small in size and designed to be fast and efficient. Pure.css is ideal for projects where performance is critical.

**Key Features**:
- Small file size (under 4KB)
- Modular components
- Responsive design
- Built-in support for grids and forms

**Example**:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pure/2.0.5/pure-min.css">
```

**Website**: [Pure.css](https://purecss.io/)

Each of these CSS frameworks has its strengths and is suitable for different types of projects. Exploring and using them can significantly speed up your web development process and improve the quality of your designs.