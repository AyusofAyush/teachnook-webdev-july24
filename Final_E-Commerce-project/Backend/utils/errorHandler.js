class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    // Capture stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

// Error Handler which takes cares of all the generic error in the application
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error for developer
  console.log(err.stack);

  // Handle specific errors
  if (err.name === "CastError") {
    error = new ErrorResponse(
      `Resource not found with id of ${err.value}`,
      404
    );
  }

  if (err.code === 11000) {
    error = new ErrorResponse("Duplicate field value entered", 400);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Server Error",
  });
};

module.exports = {
  ErrorResponse,
  errorHandler
};
