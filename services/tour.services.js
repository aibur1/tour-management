const Tour = require('../models/Tour');

exports.updateTourByIdService = async (tourId, data) => {
    const result = await Tour.updateOne(
        { _id: tourId },
        { $set: data },
        {
            runValidators: true,
        },
    );

    return result;
};

exports.getToursByTrendingServices = async () => {
    console.log('Tour with trending!');
};
exports.getToursByCheapestServices = async () => {
    const result = await Tour.aggregate([
        {
            $group: {
                _id: '$price',
                docs: { $push: '$$ROOT' },
            },
        },
        { $sort: { _id: 1 } },
        { $limit: 3 },
    ]);
    return result;
    // console.log('Tour with cheapest!');
};
