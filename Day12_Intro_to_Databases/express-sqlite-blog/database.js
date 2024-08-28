const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// Check if blog.db file exists; if it does, use it instead of in-memory database
const dbFilePath = './blog.db';
let db;

if (fs.existsSync(dbFilePath)) {
    // If blog.db exists, open it as the database
    db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error('Error opening blog.db:', err.message);
        } else {
            console.log('Connected to the blog.db database.');
        }
    });
} else {
    // If blog.db does not exist, create an in-memory database
    db = new sqlite3.Database(':memory:', (err) => {
        if (err) {
            console.error('Error opening in-memory database:', err.message);
        } else {
            console.log('Connected to the in-memory database.');
            initializeInMemoryDatabase();
        }
    });
}

// Function to initialize the in-memory database with the necessary tables
function initializeInMemoryDatabase() {
    db.serialize(() => {
        // Create the 'posts' table
        db.run(`
            CREATE TABLE posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                content TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `, (err) => {
            if (err) {
                console.error('Error creating posts table:', err.message);
            } else {
                console.log('Posts table created successfully.');
            }
        });

        // Create the 'comments' table with a foreign key reference to 'posts'
        db.run(`
            CREATE TABLE comments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                post_id INTEGER,
                content TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY(post_id) REFERENCES posts(id)
            )
        `, (err) => {
            if (err) {
                console.error('Error creating comments table:', err.message);
            } else {
                console.log('Comments table created successfully.');
            }
        });
    });
}

module.exports = db;
