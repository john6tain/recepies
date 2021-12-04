const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app, config) => {
    "use strict";
    app.use('/', express.static(path.join(__dirname, '/../../build')));
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(bodyParser.json());

    app.use(cors());


   /* app.use((req, res, next) => {
        if (req.user) {
            res.locals.user = req.user;
        }

        next();
    });*/
};