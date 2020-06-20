const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb');

let reviewSchema = mongoose.Schema({

});

let Reviews = mongoose.model('Reviews',reviewSchema);

