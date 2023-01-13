const validatePerson = (req, res, next) => {
  const newPlaces = req.body;
  const error = newPlaces.every((item) => item.person.length > 4);
  if (!error) res.status(422).json({ message: 'o campo person deve possuir 5 ou mais caracteres' });
  next();
};

module.exports = {
  validatePerson,
};
