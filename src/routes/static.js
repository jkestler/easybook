const express = require('express');
const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.send('Static route initialized.')
// });

router.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Jonathan', lastName: 'Kestler' },
    { id: 2, firstName: 'Lucy', lastName: 'Kestler'},
    { id: 3, firstName: 'Buster', lastName: 'Kestler'}
  ];

  res.json(customers);
  
});


module.exports = router;