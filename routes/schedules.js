var express = require('express');
var router = express.Router();
const ScheduleController = require('../controllers/schedule-controller');

/* GET API home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ValueLinkU Schedule API Home' });
});

router.get('/ocean', ScheduleController.getOceanScheduleByPorts);
router.get('/air', ScheduleController.getAirScheduleByPorts);

module.exports = router;
