var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;

var FindJakesSchema = new Schema({
	id: String,
    name: String,
    address: String,
    searchLocation: String,
    latitude: String,
    longitude: String,
    forMale: String,
    forFemale: String,
    forSpeciallyAbled: String,
    haveBathroom: String,
    rating1: String,
    rating2: String,
    rating3: String,
    rating4: String,
    rating5: String
});

mongoose.model('FindJakes', FindJakesSchema);
