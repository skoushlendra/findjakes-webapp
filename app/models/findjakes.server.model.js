var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;

var FindJakesSchema = new Schema({
	id: Number,
    category: String,
    name: String,
    address: String,
    searchLocation: String,
    latitude: String,
    longitude: String,
    forMale: Boolean,
    forFemale: Boolean,
    forSpeciallyAbled: Boolean,
    haveBathroom: Boolean,
    isVerified: Boolean,
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
    isActive: Boolean,
    rating1: Number,
    rating2: Number,
    rating3: Number,
    rating4: Number,
    rating5: Number
});

mongoose.model('FindJakes', FindJakesSchema);
