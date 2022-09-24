const Tour = require('../models/Tour');

// eslint-disable-next-line consistent-return
const viewCount = async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const tour = await Tour.findById(id);
    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Tour not found',
        });
    }
    tour.viewCount += 1;
    await tour.save();
    next();
};

// let count = 0;
// const viewCount = async (req, res, next) => {
//     count++;
//     console.log(count);
//     next();
// };

module.exports = viewCount;
