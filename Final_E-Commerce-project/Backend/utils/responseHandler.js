// Send a formatted response
const sendResponse = (res, statusCode, data, message) => {
    res.status(statusCode).json({
      success: true,
      message: message || 'Success',
      data
    });
  };
  
  module.exports = sendResponse;
  