const msgSchema = {
  requiredEmailPassword: {
    'string.base': '"fields" must be a string', 
    'string.empty': 'Some required fields are missing', 
    'any.required': 'Some required fields are missing',
  },
  defaultMsg: {
    'string.base': '"fields" must be a string', 
    'string.empty': 'Some required fields are missing', 
    'any.required': 'Some required fields are missing',
  },
};

module.exports = { msgSchema };