const express = require('express');

const router = express.Router();

const toursController = require('../../controllers/tours.controllers');
const viewCount = require('../../middleware/viewCount');

router.route('/tours').get(toursController.getTours).post(toursController.createTour);

router.route('/tour/trending').get(toursController.getTourByTrending);
router.route('/tour/cheapest').get(toursController.getTourByCheapest);
router.route('/tours/:id').get(viewCount, toursController.getTourById);
router.route('/tour/:id').patch(toursController.updateTourById);

module.exports = router;
