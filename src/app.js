const express = require('express');
const app = express();
const port = 3000;

// Define a route that responds with HTML content
app.get('/', (req, res) => {
  const htmlResponse = `<h1>Server Connected</h1>`;
  res.send(htmlResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
