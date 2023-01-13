const express = require('express');
const summerController = require('../controllers/summerController');
const validate = require('../middlewares/validate');

const router = express.Router();
// rota  /summer/:id
router.get('/', summerController.listAllPlaces);
router.get('/:id', summerController.getPlaceById);
router.post('/', validate.validatePerson, summerController.registerPlaces);
router.delete('/:id', summerController.deletePlace);

module.exports = router;
