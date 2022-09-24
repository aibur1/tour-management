const Tour = require('../models/Tour');

exports.getToursServices = async (filters, queries) => {
    const tours = await Tour.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.fields)
        .sort(queries.sortBy);
    const total = await Tour.countDocuments(filters);
    const page = Math.ceil(total / queries.limit);
    return { total, page, tours };
};

exports.createToursService = async (data) => {
    const tours = await Tour.create(data);
    return tours;
};

exports.getTourByIdService = async (id) => {
    const tourDetail = await Tour.findOne({ _id: id });
    return tourDetail;
};

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
    const result = await Tour.find({}).sort({ viewCount: -1 }).limit(3);
    return result;
};
exports.getToursByCheapestServices = async () => {
    const result = Tour.find({}).limit(3).sort('price');
    return result;
    // console.log('Tour with cheapest!');
};
