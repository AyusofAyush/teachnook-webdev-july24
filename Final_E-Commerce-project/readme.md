# E-Commerce Full stack Website - Frontend + Backend

## Lets start by creating a Backend Web Application for E-Commerce

Here's a high-level overview of how you can structure your e-commerce backend application using Express, Node, and MongoDB, following the MVC architecture (without views) and implementing JWT-based authentication and authorization, as well as SOLID principles.

### Project Structure

```bash
ecommerce-backend/
│
├── config/
│   └── db.js           # MongoDB connection setup
│
├── controllers/
│   ├── authController.js       # User authentication and authorization
│   ├── productController.js    # Products CRUD operations
│   ├── categoryController.js   # Categories CRUD operations
│   ├── orderController.js      # Order Management APIs
│   └── userController.js       # User profile management
│
├── services/
│   ├── authService.js          # JWT handling, password hashing, etc.
│   ├── productService.js       # Business logic for products
│   ├── categoryService.js      # Business logic for categories
│   ├── orderService.js         # Business logic for orders
│   └── userService.js          # User profile related services
│
├── middleware/
│   ├── authMiddleware.js       # JWT authentication middleware
│   ├── roleMiddleware.js       # Role-based authorization middleware
│
├── models/
│   ├── Product.js              # Product schema
│   ├── Category.js             # Category schema
│   ├── Order.js                # Order schema
│   └── User.js                 # User schema with JWT integration
│
├── routes/
│   ├── productRoutes.js        # Routes for product APIs
│   ├── categoryRoutes.js       # Routes for category APIs
│   ├── userRoutes.js           # Routes for user profile and authentication
│   └── orderRoutes.js          # Routes for order APIs
│
├── utils/
│   ├── errorHandler.js         # Centralized error handling
│   ├── asyncHandler.js         # Utility to wrap async routes and avoid try-catch
│
├── app.js                      # Main entry point of the application
├── package.json                # Project dependencies and scripts
└── .env                        # Environment variables
```

### Key Components

#### **1. Models**
Define the Mongoose schemas for `Product`, `Category`, `Order`, and `User` in the `models/` directory.

- **Product.js**

```js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  stock: { type: Number, default: 0 },
  description: String,
  imageUrl: String
});

module.exports = mongoose.model('Product', productSchema);
```

- **Category.js**

```js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
});

module.exports = mongoose.model('Category', categorySchema);
```

- **User.js**

```js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }, // Can be 'admin' or 'user'
});

// Hash password before saving user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password for login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

#### **2. JWT Authentication (AuthService)**

- **authService.js**

```js
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = { generateToken };
```

#### **3. Controllers**

Your controllers will handle HTTP requests and delegate business logic to the corresponding services.

- **productController.js**

```js
const asyncHandler = require('../utils/asyncHandler');
const ProductService = require('../services/productService');

exports.createProduct = asyncHandler(async (req, res) => {
  const product = await ProductService.createProduct(req.body);
  res.status(201).json(product);
});

// Implement other CRUD methods for products
```

- **authController.js**

```js
const User = require('../models/User');
const AuthService = require('../services/authService');

exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  const token = AuthService.generateToken(user);
  res.status(201).json({ token });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = AuthService.generateToken(user);
    res.json({ token });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
```

#### **4. Routes**

Define your routes in `routes/` and map them to controllers.

- **productRoutes.js**

```js
const express = require('express');
const { createProduct } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, admin, createProduct);
// Add more routes for CRUD

module.exports = router;
```

#### **5. Middleware**

- **authMiddleware.js**

```js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
};

// Middleware for admin roles
exports.admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403);
    throw new Error('Not authorized as admin');
  }
};
```

### Final Thoughts
1. **SOLID Principles**: 
   - **Single Responsibility**: Split the controllers and services.
   - **Dependency Injection**: Use services inside controllers.
   - **Open-Closed Principle**: Services can be extended for more functionality without modifying existing code.

2. **Environment Variables**:
   Use `.env` for managing secrets like JWT keys, MongoDB URI, etc.

This architecture can be extended further for features like logging, rate limiting, unit testing, etc., to make the application fully production-ready.


---- 

## Backend Summary

### **Project Summary**

You have developed a comprehensive backend e-commerce application using **Express**, **Node.js**, and **MongoDB**. The application supports functionalities for managing products, categories, orders, and users, and includes user authentication and authorization features. Below is a detailed summary of each part of the project, including the latest information, necessary packages, how to start the project, and how to test the APIs.

#### **1. Project Overview**

- **Product Management**: Allows CRUD operations on products.
- **Category Management**: Provides CRUD operations for categories.
- **Order Management**: Enables CRUD operations on orders.
- **User Management**: Handles user registration, login, profile management, and admin-only operations.
- **Authentication & Authorization**: Uses JWT tokens for securing routes and managing user roles.
- **Logging**: Integrated Morgan for logging HTTP requests and responses.
- **Error Handling**: Centralized error handling using a custom `ErrorResponse` class.

#### **2. Key Components**

1. **Controllers**: Handle the business logic for different routes.
   - `authController.js`: Manages user registration, login, and profile operations.
   - `categoryController.js`: Handles CRUD operations for categories.
   - `orderController.js`: Manages CRUD operations for orders.
   - `productController.js`: Handles CRUD operations for products.
   - `userController.js`: Manages admin operations related to users.

2. **Services**: Encapsulate the business logic and interact with the database.
   - `authService.js`: Contains methods for user authentication and token management.
   - `categoryService.js`: Provides category-related business logic.
   - `orderService.js`: Manages order-related business logic.
   - `productService.js`: Contains product-related business logic.
   - `userService.js`: Handles user-related operations, including admin functionalities.

3. **Middleware**:
   - `authMiddleware.js`: Protects routes by verifying JWT tokens and extracting user information.
   - `roleMiddleware.js`: Restricts access based on user roles, including admin checks.
   - `errorHandler.js`: Centralized error handling for the application.
   - `generateToken.js`: Utility for generating JWT tokens.

4. **Routes**:
   - `categoryRoutes.js`: Defines endpoints for category management.
   - `orderRoutes.js`: Sets up endpoints for order management.
   - `productRoutes.js`: Configures endpoints for product management.
   - `userRoutes.js`: Manages endpoints for user operations.

5. **Logging**:
   - Integrated Morgan for logging HTTP requests and responses.

#### **3. Latest Information**

1. **Error Handling**:
   - Fixed the `ErrorResponse` class export issue and configured centralized error handling in `app.js`.

2. **Authentication Middleware**:
   - Added an `admin` method in `authMiddleware.js` to handle admin-specific routes.

3. **Routes and Controllers**:
   - Updated `authController.js` to include `getUsers`, `getUser`, and `deleteUser` methods for admin functionalities.

4. **Morgan Integration**:
   - Added Morgan to log all kinds of API responses.

#### **4. Required Packages**

Here is the list of npm packages you need to install:

```bash
npm install express mongoose cors dotenv morgan jsonwebtoken bcryptjs
```

### **5. Starting the Project**

1. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory of your project and add your MongoDB URI and any other environment variables.

   Example `.env` file:
   ```
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret
   PORT=5000
   NODE_ENV=development
   ```

2. **Run the Server**:
   - Start your application using the command:
   ```bash
   node app.js
   ```

### **6. cURL Commands to Test APIs**

Below is a list of all the APIs for your backend server, organized by functionality. These endpoints follow the pattern described earlier and cover user, category, order, and product management. I’ll also include example cURL commands for testing these APIs.

### **1. User Routes**

#### **Registration and Authentication**
- **POST** `/api/v1/users/register`
  - Registers a new user.
  - **Request Body**: `{ "name": "string", "email": "string", "password": "string" }`
  - **Example**:
    ```bash
    curl -X POST http://localhost:4000/api/v1/users/register \
    -H "Content-Type: application/json" \
    -d '{"name": "John Doe", "email": "john@example.com", "password": "password123"}'
    ```

- **POST** `/api/v1/users/login`
  - Logs in an existing user.
  - **Request Body**: `{ "email": "string", "password": "string" }`
  - **Example**:
    ```bash
    curl -X POST http://localhost:4000/api/v1/users/login \
    -H "Content-Type: application/json" \
    -d '{"email": "john@example.com", "password": "password123"}'
    ```

#### **User Profile Management**
- **GET** `/api/v1/users/profile`
  - Retrieves the profile of the logged-in user.
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X GET http://localhost:4000/api/v1/users/profile \
    -H "Authorization: Bearer <token>"
    ```

- **PUT** `/api/v1/users/profile`
  - Updates the profile of the logged-in user.
  - **Request Body**: `{ "name": "string", "email": "string", "password": "string" }`
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X PUT http://localhost:4000/api/v1/users/profile \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <token>" \
    -d '{"name": "John Doe", "email": "john.doe@example.com", "password": "newpassword123"}'
    ```

#### **Admin-Only User Management**
- **GET** `/api/v1/users`
  - Retrieves all users (admin only).
  - **Headers**: `Authorization: Bearer <admin-token>`
  - **Example**:
    ```bash
    curl -X GET http://localhost:4000/api/v1/users \
    -H "Authorization: Bearer <admin-token>"
    ```

- **GET** `/api/v1/users/:id`
  - Retrieves a single user by ID (admin only).
  - **Headers**: `Authorization: Bearer <admin-token>`
  - **Example**:
    ```bash
    curl -X GET http://localhost:4000/api/v1/users/1234567890abcdef \
    -H "Authorization: Bearer <admin-token>"
    ```

- **DELETE** `/api/v1/users/:id`
  - Deletes a user by ID (admin only).
  - **Headers**: `Authorization: Bearer <admin-token>`
  - **Example**:
    ```bash
    curl -X DELETE http://localhost:4000/api/v1/users/1234567890abcdef \
    -H "Authorization: Bearer <admin-token>"
    ```

### **2. Category Routes**

- **GET** `/api/v1/categories`
  - Retrieves all categories.
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X GET http://localhost:4000/api/v1/categories \
    -H "Authorization: Bearer <token>"
    ```

- **POST** `/api/v1/categories`
  - Creates a new category.
  - **Request Body**: `{ "name": "string" }`
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X POST http://localhost:4000/api/v1/categories \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <token>" \
    -d '{"name": "Electronics"}'
    ```

- **PUT** `/api/v1/categories/:id`
  - Updates an existing category.
  - **Request Body**: `{ "name": "string" }`
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X PUT http://localhost:4000/api/v1/categories/1234567890abcdef \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <token>" \
    -d '{"name": "Home Appliances"}'
    ```

- **DELETE** `/api/v1/categories/:id`
  - Deletes a category.
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X DELETE http://localhost:4000/api/v1/categories/1234567890abcdef \
    -H "Authorization: Bearer <token>"
    ```

### **3. Order Routes**

- **GET** `/api/v1/orders`
  - Retrieves all orders.
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X GET http://localhost:4000/api/v1/orders \
    -H "Authorization: Bearer <token>"
    ```

- **POST** `/api/v1/orders`
  - Creates a new order.
  - **Request Body**: `{ "productId": "string", "quantity": "number" }`
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X POST http://localhost:4000/api/v1/orders \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <token>" \
    -d '{"productId": "1234567890abcdef", "quantity": 2}'
    ```

- **GET** `/api/v1/orders/:id`
  - Retrieves an order by ID.
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X GET http://localhost:4000/api/v1/orders/1234567890abcdef \
    -H "Authorization: Bearer <token>"
    ```

- **PUT** `/api/v1/orders/:id`
  - Updates an order.
  - **Request Body**: `{ "status": "string" }`
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X PUT http://localhost:4000/api/v1/orders/1234567890abcdef \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <token>" \
    -d '{"status": "shipped"}'
    ```

- **DELETE** `/api/v1/orders/:id`
  - Deletes an order.
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X DELETE http://localhost:4000/api/v1/orders/1234567890abcdef \
    -H "Authorization: Bearer <token>"
    ```

### **4. Product Routes**

- **GET** `/api/v1/products`
  - Retrieves all products.
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X GET http://localhost:4000/api/v1/products \
    -H "Authorization: Bearer <token>"
    ```

- **POST** `/api/v1/products`
  - Creates a new product.
  - **Request Body**: `{ "name": "string", "price": "number", "categoryId": "string" }`
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X POST http://localhost:4000/api/v1/products \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <token>" \
    -d '{"name": "Laptop", "price": 999.99, "categoryId": "1234567890abcdef"}'
    ```

- **GET** `/api/v1/products/:id`
  - Retrieves a product by ID.
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X GET http://localhost:4000/api/v1/products/1234567890abcdef \
    -H "Authorization: Bearer <token>"
    ```

- **PUT** `/api/v1/products/:id`
  - Updates an existing product.
  - **Request Body**: `{ "name": "string", "price": "number" }`
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X PUT http://localhost:4000/api/v1/products/1234567890abcdef \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <token>" \
    -d '{"name": "Gaming Laptop", "price": 1299.

99}'
    ```

- **DELETE** `/api/v1/products/:id`
  - Deletes a product.
  - **Headers**: `Authorization: Bearer <token>`
  - **Example**:
    ```bash
    curl -X DELETE http://localhost:4000/api/v1/products/1234567890abcdef \
    -H "Authorization: Bearer <token>"
    ```

### **Testing All Scenarios**

Here’s a checklist for testing all the scenarios:

1. **Registration and Login**:
   - Register a new user.
   - Log in with that user.

2. **Profile Management**:
   - Fetch the profile of the logged-in user.
   - Update the user profile.

3. **Admin User Management**:
   - Fetch all users.
   - Fetch a user by ID.
   - Delete a user.

4. **Category Management**:
   - Fetch all categories.
   - Create a new category.
   - Update a category.
   - Delete a category.

5. **Order Management**:
   - Fetch all orders.
   - Create a new order.
   - Fetch an order by ID.
   - Update an order.
   - Delete an order.

6. **Product Management**:
   - Fetch all products.
   - Create a new product.
   - Fetch a product by ID.
   - Update a product.
   - Delete a product.

Make sure to replace placeholders like `<token>` and `<admin-token>` with actual tokens obtained from the authentication endpoints. Also, validate that your authorization and error handling logic work as expected by simulating various scenarios, including unauthorized access and invalid inputs.

### **Starting the Project**

1. **Install

 Dependencies**:
   ```bash
   npm install express mongoose cors dotenv morgan jsonwebtoken bcryptjs
   ```

2. **Set Up Environment Variables**:
   - Create a `.env` file with MongoDB URI and other settings.

3. **Start the Application**:
   ```bash
   node app.js
   ```

This setup covers the core functionality and testing scenarios for your backend e-commerce application.

-----

## cURL commands List
**Updated cURL commands List** 

Here’s the complete list of `cURL` commands for testing all the scenarios of your e-commerce backend application:

### **1. Authentication APIs**

#### **1.1 Register a User**
```bash
curl -X POST http://localhost:5000/api/v1/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"John Doe", "email":"john@example.com", "password":"password123", "profile_img":"http://example.com/profile.jpg"}'
```

#### **1.2 Login a User**
```bash
curl -X POST http://localhost:5000/api/v1/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"john@example.com", "password":"password123"}'
```

#### **1.3 Get Logged-in User Profile**
```bash
curl -X GET http://localhost:5000/api/v1/auth/profile \
-H "Authorization: Bearer <your_token>"
```

#### **1.4 Update User Profile**
```bash
curl -X PUT http://localhost:5000/api/v1/auth/profile \
-H "Authorization: Bearer <your_token>" \
-H "Content-Type: application/json" \
-d '{"name":"Updated Name", "profile_img":"http://example.com/updated_profile.jpg"}'
```

---

### **2. User Management APIs (Admin Only)**

#### **2.1 Get All Users**
```bash
curl -X GET http://localhost:5000/api/v1/users \
-H "Authorization: Bearer <admin_token>"
```

#### **2.2 Get a Single User by ID**
```bash
curl -X GET http://localhost:5000/api/v1/users/<user_id> \
-H "Authorization: Bearer <admin_token>"
```

#### **2.3 Delete a User by ID**
```bash
curl -X DELETE http://localhost:5000/api/v1/users/<user_id> \
-H "Authorization: Bearer <admin_token>"
```

---

### **3. Product Management APIs**

#### **3.1 Create a Product**
```bash
curl -X POST http://localhost:5000/api/v1/products \
-H "Authorization: Bearer <admin_token>" \
-H "Content-Type: application/json" \
-d '{"name":"Product A", "price":100, "description":"A great product", "category":"<category_id>", "stock":10, "product_img":"http://example.com/product.jpg"}'
```

#### **3.2 Get All Products**
```bash
curl -X GET http://localhost:5000/api/v1/products
```

#### **3.3 Get a Single Product by ID**
```bash
curl -X GET http://localhost:5000/api/v1/products/<product_id>
```

#### **3.4 Update a Product by ID**
```bash
curl -X PUT http://localhost:5000/api/v1/products/<product_id> \
-H "Authorization: Bearer <admin_token>" \
-H "Content-Type: application/json" \
-d '{"name":"Updated Product A", "price":150, "product_img":"http://example.com/updated_product.jpg"}'
```

#### **3.5 Delete a Product by ID**
```bash
curl -X DELETE http://localhost:5000/api/v1/products/<product_id> \
-H "Authorization: Bearer <admin_token>"
```

---

### **4. Category Management APIs**

#### **4.1 Create a Category**
```bash
curl -X POST http://localhost:5000/api/v1/categories \
-H "Authorization: Bearer <admin_token>" \
-H "Content-Type: application/json" \
-d '{"name":"Category A"}'
```

#### **4.2 Get All Categories**
```bash
curl -X GET http://localhost:5000/api/v1/categories
```

#### **4.3 Get a Single Category by ID**
```bash
curl -X GET http://localhost:5000/api/v1/categories/<category_id>
```

#### **4.4 Update a Category by ID**
```bash
curl -X PUT http://localhost:5000/api/v1/categories/<category_id> \
-H "Authorization: Bearer <admin_token>" \
-H "Content-Type: application/json" \
-d '{"name":"Updated Category A"}'
```

#### **4.5 Delete a Category by ID**
```bash
curl -X DELETE http://localhost:5000/api/v1/categories/<category_id> \
-H "Authorization: Bearer <admin_token>"
```

---

### **5. Order Management APIs**

#### **5.1 Create an Order**
```bash
curl -X POST http://localhost:5000/api/v1/orders \
-H "Authorization: Bearer <user_token>" \
-H "Content-Type: application/json" \
-d '{"products":[{"product_id":"<product_id>","quantity":2}],"totalPrice":200}'
```

#### **5.2 Get All Orders**
```bash
curl -X GET http://localhost:5000/api/v1/orders \
-H "Authorization: Bearer <admin_token>"
```

#### **5.3 Get a Single Order by ID**
```bash
curl -X GET http://localhost:5000/api/v1/orders/<order_id> \
-H "Authorization: Bearer <user_token>"
```

#### **5.4 Update an Order by ID**
```bash
curl -X PUT http://localhost:5000/api/v1/orders/<order_id> \
-H "Authorization: Bearer <admin_token>" \
-H "Content-Type: application/json" \
-d '{"status":"shipped"}'
```

#### **5.5 Delete an Order by ID**
```bash
curl -X DELETE http://localhost:5000/api/v1/orders/<order_id> \
-H "Authorization: Bearer <admin_token>"
```

---

### **Notes**
- Replace `<your_token>`, `<admin_token>`, `<user_token>`, `<user_id>`, `<product_id>`, `<category_id>`, and `<order_id>` with actual values as needed for your tests.
- Ensure your server is running and accessible at `http://localhost:5000` (or change the URL accordingly). 

You can use these commands to test the functionalities of your backend application. Let me know if you need any further assistance!

----