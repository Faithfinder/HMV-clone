export default (error, request, response, next) => {
  return response.status(error.status || 500).json({
    error: {
      message: error.message || "Unknown error"
    }
  });
}
