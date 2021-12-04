const mongoose = require('mongoose');

let recepieSchema = mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
    },
	content: {
        type: mongoose.Schema.Types.String,
    },
});


const Recepie = mongoose.model('Recepie', recepieSchema);

module.exports = Recepie;
