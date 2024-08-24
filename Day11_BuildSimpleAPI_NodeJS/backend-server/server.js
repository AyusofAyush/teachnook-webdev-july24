const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for logging HTTP requests
app.use(morgan('dev'));

// Middleware for parsing JSON bodies
app.use(express.json()); // Replaces body-parser.json()

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Set up API routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
