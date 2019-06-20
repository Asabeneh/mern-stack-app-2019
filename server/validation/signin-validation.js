const validator = require('validator');
const isEmpty = require('./is-empty');

const validateSigninInput = data => {
  const errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

 
  if (!validator.isEmail(data.email)) {
    errors.email = 'Email must be valid';
  }
  if (isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!validator.isLength(data.password, { min: 6, max: 20 })) {
    errors.password = 'Password must be at least six characters';
  }
  if (isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateSigninInput; 
