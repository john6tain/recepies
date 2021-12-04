const Recepie = require('../models/Recepie');

module.exports = {

    save: (req, res) => {
        let recepieData = req.body.title && req.body || JSON.parse(Object.keys(req.body).pop());
        Recepie.find({
            title: recepieData.title
        }).then(existingRecepie => {
            if (existingRecepie.length === 0) {
                Recepie.create({
                    title: recepieData.title,
                    content: recepieData.content
                })
                .then(Recepie => {
                    res.status(200).send({
                        success: true,
                        message: 'You successfully created the recepie'
                    });
                })
                .catch(error => {
                    res.status(404).send({
                        error: error
                    });
                });

                return;
            } else {
                Recepie.findOneAndUpdate({
                    title: recepieData.title
                }, {
                    title: recepieData.title,
                    content: recepieData.content
                })
                .then(Recepie => {
                    res.status(200).send({
                        success: true,
                        message: 'You successfully updated your recepie'
                    });
                })
                .catch(error => {
                    res.status(404).send({
                        error: error
                    });
                });
                return
            }
        });
    },
    deleteRecepie: (req, res) => {
        let recepieData = req.body._id && req.body || JSON.parse(Object.keys(req.body).pop());
        Recepie.remove({
            _id: recepieData._id
        }).then(existingRecepie => {
            return res.status(200).send({
                message: "You have deleted the recepie"
            });
        }).catch(error => {
            res.status(404).send({
                error: error
            });
        });
    },
    get: (req, res) => {
        Recepie
        .find()
        .then(recepies => {
            if (recepies.length === 0) {
                return res.status(200).send({
                    recepies: [],
                    message: "You don\'t have recepies in the DB"
                });

            }
            res.status(200).send({
                recepies: recepies
            });
        });
    },
    length: (req, res) => {
        Recepie
        .find()
        .then(recepies => {
            res.status(200).send({
                recepiesLength: recepies.length
            });
        });
    },
};
