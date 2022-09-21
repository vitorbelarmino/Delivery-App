const errorMiddleware = (err, _req, res, next) => {
  const { name, message } = err;
  console.log(name);
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    case 'UnauthorizedError':
      res.status(401).json({ message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;    
    default:
      res.status(500).json({ message });
      break;
  }
  console.log(err);
  next();
};

module.exports = errorMiddleware;
