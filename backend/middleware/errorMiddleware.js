const notFound = (req, res, next) => {
  const error = new Error(`not Found ${error}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = error.message;

  //mongoose not foun resource
  if (error.name === "CastError" && error.kind === "ObjectId") {
    message = `resource not Found`;
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? ":)" : error.stack,
  });
};

export { notFound, errorHandler };
