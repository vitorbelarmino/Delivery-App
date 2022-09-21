const { CustomError } = require('../helpers/customError')

class GlobalError {
  constructor(defaultStatus = 500) {
    this.defaultStatus = defaultStatus;
  }

  handle(error, _request, response, _next) {
    if (error instanceof CustomError) {
      return response.status(error.status).json({ message: error.message });
    }
    return response.status(this.defaultStatus).json({ message: 'error no servidor' });
  }
}
const globalError = new GlobalError();

module.exports = { globalError };