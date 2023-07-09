const express = require('express');

const { InfoController } = require('../../controllers');
const { create } = require('../../services/user-service');

const router = express.Router();

router.post("/", create)

router.get('/info', InfoController.info);

module.exports = router;