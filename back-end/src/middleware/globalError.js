const { CustomError } = require('../helpers/customError');

class GlobalError {
  constructor(defaultStatus) {
    this.defaultStatus = defaultStatus;
  }

  handle(error, _request, response, _next) {
    if (error instanceof CustomError) {     
      return response.status(error.status).json({ error: error.message });
    }
    console.log('globalError', this.defaultStatus);
    return response.status(500).json({ error: error.message });
  }
}
const globalError = new GlobalError();

module.exports = { globalError };