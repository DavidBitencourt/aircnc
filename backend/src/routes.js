const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const DashBoardController = require('./controllers/DashBoardController');

const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);



routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'),SpotController.store);


routes.get('/dashboard', DashBoardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);
routes.post('/bookings/:bookings_id/approvals', ApprovalController.store);
routes.post('/bookings/:bookings_id/rejections', RejectionController.store);

module.exports =  routes;