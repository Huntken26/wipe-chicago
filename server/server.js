const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Set up express app
const app = express();
app.use(express.json());

// Define routes for API
app.get('/api/services', (req, res) => {
  // return list of services
});

app.post('/api/contact', (req, res) => {
  // save contact form data to database
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
