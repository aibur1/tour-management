const mongoose = require('mongoose');

// Schema design

const TourSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name for this product!'],
            trim: true,
            unique: [true, 'Name must be unique!'],
            minLength: [3, 'Name should be at least 3 characters'],
            maxLength: [100, 'Name not excedded 100 words'],
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: [0, "Price can't be negative value!"],
        },
        status: {
            type: String,
            required: true,
            enum: {
                values: ['in-service', 'out-of-service', 'discontinued'],
                message: "Status can't be {VALUE}",
            },
        },
        viewCount: {
            type: Number,
            default: 0,
        },
        location: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;
