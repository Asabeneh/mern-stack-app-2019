const validator = require('validator');
const isEmpty = require('./is-empty');

const validateSignupInput = data => {
  const errors = {};

  if (!validator.isLength(data.firstName, { min: 2, max: 15 })) {
    errors.firstName = 'First name must be between 2 to 15 characters';
  }
  if (isEmpty(data.firstName)) {
    errors.firstName = 'First name field is required';
  }

  if (!validator.isLength(data.lastName, { min: 2, max: 15 })) {
    errors.lastName = 'Last name must be between 2 to 15 characters';
  }
  if (isEmpty(data.lastName)) {
    errors.lastName = 'Last name field is required';
  }

  if (!validator.isLength(data.username, { min: 2, max: 15 })) {
    errors.username = 'Username must be between 2 to 15 characters';
  }
  if (isEmpty(data.username)) {
    errors.username = 'Username field is required';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email must be valid';
  }
  if (isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Pass must be between 6 to 30 characters.';
  }
  if (isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }
  if (isEmpty(data.password2)) {
    errors.password2 = 'Confirm field is required';
  }
  if (!validator.equals(data.password2, data.password)) {
    errors.password2 = 'Confirm must match';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateSignupInput;