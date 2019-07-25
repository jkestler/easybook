module.exports = {
  
  validateUsers(req, res, next) {
    if(req.method === 'POST') {
      req.checkBody('email', 'Must be a valid email').isEmail();
      req.checkBody('password', 'Password must be at least 6 characters in length').isLength({ min: 6 });
      req.checkBody('passwordConfirmation', 'Passwords must match').optional().matches(req.body.password);
    }

    const errors = req.validationErrors();

    if (errors) {
      req.flash('errors', errors);
      console.log('VALIDATION ERRORS:', errors);
      return res.status(422).json({errors});  
    } else {
      return next();
    }
  }

}