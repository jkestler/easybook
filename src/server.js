const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Jonathan', lastName: 'Kestler' },
    { id: 2, firstName: 'Lucy', lastName: 'Kestler'},
    { id: 3, firstName: 'Buster', lastName: 'Kestler'}
  ];

  res.json(customers);
  
});

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});