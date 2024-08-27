# Build Simple API using NodeJS (Express)

## Notes for Building a Simple API using Express and MVC Pattern

#### 1. **Introduction to MVC Pattern**
   - **Model**: Represents the data and business logic. It interacts with the database and defines the data structure.
   - **View**: Manages the presentation layer. For an API, this usually means formatting data as JSON or XML.
   - **Controller**: Handles the incoming HTTP requests, interacts with the model, and returns a response using the view.

#### 2. **Setting Up the Project**

1. **Initialize the Project**
   ```bash
   mkdir express-mvc-api
   cd express-mvc-api
   npm init -y
   ```
   This creates a `package.json` file.

2. **Install Dependencies**
   ```bash
   npm install express mongoose
   ```
   - `express`: The framework for building the API.
   - `mongoose`: An ODM (Object Data Modeling) library for MongoDB and Node.js.

3. **Project Structure**
   ```
   express-mvc-api/
   ├── models/
   │   └── userModel.js
   ├── controllers/
   │   └── userController.js
   ├── routes/
   │   └── userRoutes.js
   ├── app.js
   └── server.js
   ```

#### 3. **Creating the Model**
   The model interacts with the database, defining the data structure and methods to interact with it.

   **File**: `models/userModel.js`
   ```javascript
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
   });

   const User = mongoose.model('User', userSchema);

   module.exports = User;
   ```

   - **Explanation**:
     - We define a `userSchema` using Mongoose.
     - `User` is the model that interacts with the `users` collection in MongoDB.

#### 4. **Creating the Controller**
   The controller handles the incoming requests and interacts with the model.

   **File**: `controllers/userController.js`
   ```javascript
   const User = require('../models/userModel');

   // @desc   Get all users
   // @route  GET /api/users
   // @access Public
   exports.getUsers = async (req, res) => {
     try {
       const users = await User.find();
       res.json(users);
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
   };

   // @desc   Create a new user
   // @route  POST /api/users
   // @access Public
   exports.createUser = async (req, res) => {
     const { name, email, password } = req.body;

     try {
       const user = new User({ name, email, password });
       const newUser = await user.save();
       res.status(201).json(newUser);
     } catch (error) {
       res.status(400).json({ message: error.message });
     }
   };
   ```

   - **Explanation**:
     - **`getUsers`**: Fetches all users from the database and sends them as JSON.
     - **`createUser`**: Takes data from the request body, creates a new user, and saves it to the database.

#### 5. **Creating the Routes**
   Routes map the URLs to the corresponding controller methods.

   **File**: `routes/userRoutes.js`
   ```javascript
   const express = require('express');
   const router = express.Router();
   const userController = require('../controllers/userController');

   router.get('/users', userController.getUsers);
   router.post('/users', userController.createUser);

   module.exports = router;
   ```

   - **Explanation**:
     - **`router.get('/users')`**: Maps the `GET /api/users` route to the `getUsers` controller function.
     - **`router.post('/users')`**: Maps the `POST /api/users` route to the `createUser` controller function.

#### 6. **Setting Up the Express Application**

   **File**: `app.js`
   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   const userRoutes = require('./routes/userRoutes');

   const app = express();

   // Middleware to parse JSON
   app.use(express.json());

   // Routes
   app.use('/api', userRoutes);

   // Database connection
   mongoose.connect('mongodb://localhost/express_mvc_api', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   }).then(() => console.log('MongoDB connected'))
     .catch((error) => console.error('MongoDB connection error:', error));

   module.exports = app;
   ```

   - **Explanation**:
     - **`express.json()`**: Middleware to parse incoming JSON requests.
     - **`app.use('/api', userRoutes)`**: Registers the user routes under the `/api` path.
     - **`mongoose.connect`**: Connects to a MongoDB database.

#### 7. **Starting the Server**

   **File**: `server.js`
   ```javascript
   const app = require('./app');

   const PORT = process.env.PORT || 5000;

   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
   ```

   - **Explanation**:
     - Starts the server on the specified port, defaulting to 5000.

#### 8. **Testing the API**
   - **GET** Request to `/api/users` should return an empty array initially.
   - **POST** Request to `/api/users` with a JSON body `{ "name": "John", "email": "john@example.com", "password": "123456" }` should create a new user.

#### 9. **Conclusion**
   - This structure cleanly separates concerns following the MVC pattern.
   - The controller handles the logic, the model interacts with the database, and the routes handle HTTP requests.

   