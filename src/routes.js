const {Router} = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');

const ItemController = require('./app/controllers/ItemController');
const PointController = require('./app/controllers/PointController');

const uploads = multer(multerConfig);

const routes = new Router();



routes.get('/items', ItemController.index);

routes.post(
    '/points',
    uploads.single('image'),
    PointController.store
);

routes.get('/points', PointController.index);

routes.get('/points/:id', PointController.show);

module.exports = routes;