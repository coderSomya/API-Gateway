const express = require('express');

const { InfoController } = require('../../controllers');
// const { sign } = require('../../services/user-service');
const {UserController} = require('../../controllers')
const userRouter = require('./user-routes');

const router = express.Router();

// router.post("/", create)

router.get('/info', InfoController.info);

router.use('/signup', userRouter)

module.exports = router;