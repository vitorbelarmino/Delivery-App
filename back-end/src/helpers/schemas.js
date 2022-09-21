const msgSchema = {
  requiredEmailPassword: {
    'string.base': '"fields" must be a string', 
    'string.empty': 'Some required fields are missing1', 
    'any.required': 'Some required fields are missing',
  },
  defaultMsg: {
    'string.base': '"fields" must be a string', 
    'string.empty': 'Some required fields are missin2', 
    'any.required': 'Some required fields are missin3',
  },
};

module.exports = { msgSchema };