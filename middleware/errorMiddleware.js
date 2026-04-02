// errorMiddleware.js
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // Handle Prisma specific errors
    if (err.code === 'P2025') {
        statusCode = 404;
        message = 'Record not found';
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};


