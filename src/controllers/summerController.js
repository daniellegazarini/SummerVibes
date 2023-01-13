const summerService = require('../services/summerService');
// const errorMap = require('../utils/errorMap');

const listAllPlaces = async (_req, res) => {
  const places = await summerService.listAllPlaces();

  return res.status(200).json(places);
};

const getPlaceById = async (req, res) => {
  const { id } = req.params;

  const { type, message, data } = await summerService.getPlaceById(id);

  if (type) return res.status(type).json(message);

  return res.status(200).json(data);
};

const registerPlaces = async (req, res) => {
  const newPlaces = req.body;

  const places = await summerService.registerPlaces(newPlaces);

  return res.status(201).json(places);
};

const deletePlace = async (req, res) => {
  const { id } = req.params;
  const { type } = await summerService.deletePlace(id);

  return res.status(type).json({ message: 'Local deletado com sucesso' });
};

module.exports = {
  listAllPlaces,
  getPlaceById,
  registerPlaces,
  deletePlace,
};
