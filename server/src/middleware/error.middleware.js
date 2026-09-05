export function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    success: false,
    message:
      "Something went wrong while sending your message. Please try again later.",
  });
}