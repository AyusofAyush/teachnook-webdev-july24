const ErrorResponse = require('../utils/errorHandler');

// Restrict access based on user roles
exports.checkRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorResponse(`User role '${req.user.role}' is not authorized`, 403));
    }
    next();
  };
};
