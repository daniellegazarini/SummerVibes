const connection = require('./connection');

const listAllPlaces = async () => {
  const [result] = await connection.execute('SELECT * FROM summer');
  return result;
};
const getPlaceById = async (id) => {
  const [[place]] = await connection.execute('SELECT * FROM summer WHERE id = ?', [id]);
  return place;
};

const registerPlaces = async (newPlaces) => {
  const insertPlace = newPlaces.map(async (item) => {
    const [place] = await connection.execute('INSERT INTO summer (person_name, place_name, place_location, activities) VALUES (?, ?, ?, ?)', [item.person, item.place, item.location, item.activities]);
    return place;
  });
  return insertPlace;
};

const deletePlace = async (id) => {
  const [result] = await connection.execute('DELETE FROM summer WHERE id = ?', [id]);

  return result;
};

deletePlace(3)
module.exports = {
  listAllPlaces,
  getPlaceById,
  registerPlaces,
  deletePlace,
};
