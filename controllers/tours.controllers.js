const {
    createToursService,
    getTourByIdService,
    getToursSerivices,
} = require('../services/tours.services');

exports.getTours = async (req, res, next) => {
    try {
        console.log('ar ek vhejal', req.query);
        let filters = { ...req.query };
        const excludeFields = ['sort', 'page', 'limit'];
        excludeFields.forEach((field) => delete filters[field]);
        // eslint-disable-next-line prettier/prettier
       let filtersString = JSON.stringify(filters);
        // eslint-disable-next-line no-unused-vars
        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
        filters = JSON.parse(filtersString);

        const queries = {};

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            queries.sortBy = sortBy;
        }

        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;
            console.log('vhejal--->', fields);
        }

        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            // eslint-disable-next-line radix
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            // eslint-disable-next-line radix
            queries.limit = parseInt(limit);
        }

        const tours = await getToursSerivices(filters, queries);
        res.status(200).json({
            status: 'Success',
            data: tours,
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Can't get the data!",
            error: error.message,
        });
    }
};

exports.createTour = async (req, res, next) => {
    try {
        const result = await createToursService(req.body);

        res.status(200).json({
            status: 'Success',
            message: 'Data inserted successfully!',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: 'Data is not inserted',
            error: error.message,
        });
    }
};

exports.getTourById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const detail = await getTourByIdService(id);
        res.status(200).json({
            status: 'success',
            data: detail,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: 'Can not get tour detail!',
            error: error.message,
        });
    }
};
