const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define routes
app.get('/', (req, res) => {
  res.status(200).send('Hello Node!');
});

// Only start the server if not in test environment
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

module.exports = app;  // Export the app for testing
