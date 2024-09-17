const ErrorResponse = require('../utils/errorHandler').ErrorResponse;

// Restrict routes to certain roles
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorResponse(`User role '${req.user.role}' is not authorized to access this route`, 403));
    }
    next();
  };
};
