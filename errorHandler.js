class ErrorHandler extends Error {
  // Error Handler
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    console.error(this.stack);
  }
}


module.exports = ErrorHandler;