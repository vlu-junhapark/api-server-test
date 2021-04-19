const ScheduleFinder = require('../services/schedule-finder');

exports.getOceanScheduleByPorts = async (req, res) => {
  const scheduleFinder = new ScheduleFinder();
  const params = req.query;
  let jsonResult = await scheduleFinder.getOceanScheduleByPorts(params);
  res.status(jsonResult.statusCode? jsonResult.statusCode : 200).send(jsonResult);  
}

exports.getAirScheduleByPorts = async(req, res)=> {
  const scheduleFinder = new ScheduleFinder();
  const params = req.query;
  let jsonResult = await scheduleFinder.getAirScheduleByPorts(params);
  res.status(jsonResult.statusCode? jsonResult.statusCode : 200).send(jsonResult);
}

