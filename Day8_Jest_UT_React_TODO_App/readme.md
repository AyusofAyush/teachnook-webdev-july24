# Introduction to Unit testing & TODO React Application

## React TODO App

Creating a React TODO application with a polished UI and complete functionality involves several steps. Below is a guide to building such an application, focusing on React best practices and concepts.

### 1. **Setting Up the Project**
   
First, let's create a new React project using `create-react-app`.

```bash
npx create-react-app todo-app --template cra-template-pwa
cd todo-app
npm install
```

The `cra-template-pwa` template is used to enable Progressive Web App features out of the box.

### 2. **Structuring the Project**

A well-structured React project is key to maintaining and scaling the application. Below is a suggested structure:

```
src/
│
├── components/
│   ├── AddTodo.js
│   ├── TodoItem.js
│   ├── TodoList.js
│   ├── Header.js
│   └── Footer.js
│
├── hooks/
│   ├── useTodos.js
│
├── styles/
│   ├── App.css
│   ├── Header.css
│   ├── Footer.css
│   ├── TodoItem.css
│   └── TodoList.css
│   └── AddTodo.css
│
├── App.js
├── index.js
└── reportWebVitals.js
```

### 3. **Building the Components**

#### `AddTodo.js`
This component will handle the addition of new todos.

```jsx
import { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="todo-input"
      />
      <button type="submit" className="add-todo-button">Add</button>
    </form>
  );
};

export default AddTodo;
```

#### `TodoItem.js`
This component represents a single todo item.

```jsx
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} className="delete-button">Delete</button>
    </div>
  );
};

export default TodoItem;
```

#### `TodoList.js`
This component will display the list of todos.

```jsx
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))
      ) : (
        <p>No tasks added yet!</p>
      )}
    </div>
  );
};

export default TodoList;
```

#### `Header.js`
A simple header for the application.

```jsx
const Header = () => {
  return (
    <header className="header">
      <h1>Todo List</h1>
    </header>
  );
};

export default Header;
```

#### `Footer.js`
A footer to show some information or credits.

```jsx
const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Todo App</p>
    </footer>
  );
};

export default Footer;
```

### 4. **Using Custom Hooks**

Custom hooks are a great way to encapsulate reusable logic. We will create a `useTodos` hook to manage the todos state.

#### `useTodos.js`

```jsx
import { useState } from 'react';

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};

export default useTodos;
```

### 5. **Creating the Main Application Component**

Finally, let's assemble everything in the `App.js` component.

```jsx
import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import './styles/App.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

### 6. **Styling the Application**

Create a clean and modern look using CSS. You can use a CSS framework like Tailwind CSS, or create custom styles.

#### Example `App.css`

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.App {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.main-content {
  margin-bottom: 20px;
}

.todo-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.add-todo-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;
}

.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.todo-item.completed span {
  text-decoration: line-through;
  color: #888;
}

.delete-button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

### 7. **React Best Practices**
- **Use Functional Components and Hooks:** Avoid class components unless necessary.
- **Component Reusability:** Create small, reusable components.
- **State Management:** Use hooks like `useState`, `useEffect`, or custom hooks to manage state efficiently.
- **CSS Modules or Styled Components:** Consider using CSS Modules or Styled Components for scoped styling.
- **Testing:** Use tools like Jest and React Testing Library to write unit tests for your components.
- **Prop Types:** Consider using TypeScript or PropTypes for type checking your components.

### 8. **Running the Application**

To start the application, run:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

---

This setup will give you a clean, functional, and scalable React TODO application with a polished UI and best practices in place.


------

