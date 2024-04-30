const express = require('express');
const routes = require('./routes');

const app = express();
const port = 1245;

// Mount routes
app.use('/', routes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
