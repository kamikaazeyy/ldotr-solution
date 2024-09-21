
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Alice Smith' },
  { id: 4, name: 'Bob Smith' },
  { id: 5, name: 'Charlie Brown' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});