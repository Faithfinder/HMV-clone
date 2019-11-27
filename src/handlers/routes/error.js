export default (error, request, response, next) => {
    if (response.headersSent) {
        return next(error);
    }
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "Unknown error"
        }
    });
};
