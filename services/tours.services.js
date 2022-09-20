const Tour = require('../models/Tour');

exports.getToursSerivices = async (filters, queries) => {
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
