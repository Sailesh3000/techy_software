const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = 3001;


app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD, 
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

app.post('/api/feedback', (req, res) => {
  const { firstName, lastName, email, feedback } = req.body;

  const query = 'INSERT INTO feedback (first_name, last_name, email, feedback) VALUES (?, ?, ?, ?)';
  db.query(query, [firstName, lastName, email, feedback], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ message: 'Feedback submitted successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
