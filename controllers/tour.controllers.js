const {
    updateTourByIdService,
    getToursByTrendingServices,
    getToursByCheapestServices,
} = require('../services/tour.services');

exports.updateTourById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateTourByIdService(id, req.body);
        res.status(200).json({
            status: 'Success',
            message: 'Successfully updated the tour!!',
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: "Couldn't update the tour!",
            error: error.message,
        });
    }
};
exports.getTourByTrending = async (req, res, next) => {
    try {
        const result = await getToursByTrendingServices();
        res.status(200).json({
            status: 'Success',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Can't get the tour by trending!",
            error: error.message,
        });
    }
};
exports.getTourByCheapest = async (req, res, next) => {
    try {
        const result = await getToursByCheapestServices();
        res.status(200).json({
            status: 'Success',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Can't get the tour by cheapest!",
            error: error.message,
        });
    }
};
