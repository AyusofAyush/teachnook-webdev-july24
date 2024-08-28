const express = require('express');
const db = require('./database');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (from forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.) from the 'public' directory
app.use(express.static('public'));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to render layout
app.use(async (req, res, next) => {
    res.renderWithLayout = async (view, options) => {
        options = options || {};
        // Render the view content into the layout's body placeholder
        const viewContent = await new Promise((resolve, reject) => {
            res.render(view, options, (err, html) => {
                if (err) return reject(err);
                resolve(html);
            });
        });
        res.render('layout', { body: viewContent });
    };
    next();
});

// Home route - list all posts
app.get('/', async (req, res) => {
    db.all('SELECT * FROM posts ORDER BY created_at DESC', (err, posts) => {
        if (err) {
            return res.status(500).send('Database error');
        }
        res.renderWithLayout('index', { posts });
    });
});

// Route to show a specific post along with its comments
app.get('/post/:id', async (req, res) => {
    const postId = req.params.id;
    db.get('SELECT * FROM posts WHERE id = ?', [postId], (err, post) => {
        if (err) {
            return res.status(500).send('Database error');
        }
        db.all('SELECT * FROM comments WHERE post_id = ? ORDER BY created_at DESC', [postId], (err, comments) => {
            if (err) {
                return res.status(500).send('Database error');
            }
            res.renderWithLayout('post', { post, comments });
        });
    });
});

// Route to handle adding a new comment to a specific post
app.post('/post/:id/comment', (req, res) => {
    const postId = req.params.id;
    const content = req.body.content;
    db.run('INSERT INTO comments (post_id, content) VALUES (?, ?)', [postId, content], (err) => {
        if (err) {
            return res.status(500).send('Database error');
        }
        res.redirect(`/post/${postId}`);
    });
});

// Route to display the form for creating a new post
app.get('/new-post', (req, res) => {
    res.renderWithLayout('new-post');
});

// Route to handle the creation of a new post
app.post('/new-post', (req, res) => {
    const { title, content } = req.body;
    db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], (err) => {
        if (err) {
            return res.status(500).send('Database error');
        }
        res.redirect('/');
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
