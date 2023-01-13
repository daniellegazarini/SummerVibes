const summerModel = require('../models/summerModel');

const listAllPlaces = async () => {
  const places = await summerModel.listAllPlaces();

  return places;
};

const getPlaceById = async (id) => {
  const place = await summerModel.getPlaceById(id);

  if (!place) return { type: 404, message: 'Localidade não encontrada' };

  return { type: null, data: place };
};

const registerPlaces = async (newPlaces) => {
  const insertPlace = await summerModel.registerPlaces(newPlaces);
  await Promise.all(insertPlace);
  const places = await listAllPlaces();
  return places;
};

const deletePlace = async (id) => {
  const place = await summerModel.deletePlace(id);

  if (place.affectedRows === 1) return { type: 200 };

  return place;
};

module.exports = {
  listAllPlaces,
  getPlaceById,
  registerPlaces,
  deletePlace,
};
