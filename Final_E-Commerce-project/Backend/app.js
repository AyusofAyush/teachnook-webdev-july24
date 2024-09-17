require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./utils/errorHandler");
const { protect } = require('./middleware/authMiddleware');

connectDB();
const app = express();

app.use(express.json());

// Use Morgan for logging
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(cors());

// Use routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/categories', protect, categoryRoutes);
app.use('/api/v1/orders', protect, orderRoutes);
app.use('/api/v1/products', protect, productRoutes);

// Global error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
