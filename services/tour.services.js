const Tour = require('../models/Tour');

exports.updateTourByIdService = async (tourId, data) => {
    const result = await Tour.updateOne(
        { _id: tourId },
        { $set: data },
        {
            runValidators: true,
        }
    );

    return result;
};

exports.getToursByTrendingServices = async () => {
    console.log('Tour with trending!');
};
exports.getToursByCheapestServices = async () => {
    const result = Tour.find({}).limit(3).sort('price');
    return result;
    // console.log('Tour with cheapest!');
};
