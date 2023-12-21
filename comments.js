// Create Web Server
// npm install express --save
// npm install body-parser --save
// npm install mongoose --save
// npm install cors --save
// npm install morgan --save
// npm install nodemon --save-dev
// npm start
// npm run dev

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require("morgan");
const app = express();

// Import routes
const postsRoute = require('./routes/posts');
const commentsRoute = require('./routes/comments');

// Import database
const db = require('./config/db');

// Connect to database
mongoose.connect(db.url, { useNewUrlParser: true });

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/posts', postsRoute);
app.use('/comments', commentsRoute);

// Start server
app.listen(3000);