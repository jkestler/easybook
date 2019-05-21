module.exports = {

  index(req, res, nextj) {
    res.send("Static route initialized.")
  },
  
  getCustomers(req, res, next) {
    const customers = [
      { id: 1, firstName: 'Jonathan', lastName: 'Kestler' },
      { id: 2, firstName: 'Lucy', lastName: 'Kestler'},
      { id: 3, firstName: 'Buster', lastName: 'Kestler'}
    ];
    res.json(customers);
  }

}
