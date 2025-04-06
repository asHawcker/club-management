export const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({code: statusCode, message: err.message, stack: err.stack});
}
