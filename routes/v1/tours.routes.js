/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();

const toursController = require('../../controllers/tours.controllers');
const viewCount = require('../../middleware/viewCount');

router.route('/').get(toursController.getTours).post(toursController.createTour);
router.route('/:id').get(viewCount, toursController.getTourById);

module.exports = router;
