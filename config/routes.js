const controllers = require('../controllers/index');
const path = require('path');

module.exports = (app) => {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../src', 'index.html'));
    });
	 app.get('/index.js', function (req, res) {
        res.sendFile(path.join(__dirname, '../src', 'index.js'));
    });
    app.get('/get', controllers.recepie.get);
    app.get('/length', controllers.recepie.length);
    app.post('/save', controllers.recepie.save);
    app.post('/delete', controllers.recepie.deleteRecepie);
};