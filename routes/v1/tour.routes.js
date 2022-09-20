const express = require('express');
const tourController = require('../../controllers/tour.controllers');

const router = express.Router();
router.route('/trending').get(tourController.getTourByTrending);
router.route('/cheapest').get(tourController.getTourByCheapest);
router.route('/:id').patch(tourController.updateTourById);

module.exports = router;
