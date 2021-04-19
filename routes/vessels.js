var express = require('express');
var router = express.Router();
const VesselController = require('../controllers/vessel-controller');

router.get('/', VesselController.getVesselInfoByName);

module.exports = router;
