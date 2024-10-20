const express = require('express');
const router = express.Router();

// Example user data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    // In a real app, return a token or user object
    return res.json({ id: user.id, username: user.username });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Serve user data at /api/users
router.get('/users', (req, res) => {
  res.json(users);
});

module.exports = router;
