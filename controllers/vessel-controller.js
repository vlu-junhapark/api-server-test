const VesselFinder = require('../services/vessel-finder');

exports.getVesselInfoByName = async (req, res) => {
  const vesselFinder = new VesselFinder();
  const params = req.query;
  let jsonResult = await vesselFinder.getVesselInfoByName(params);
  res.status(jsonResult.statusCode? jsonResult.statusCode : 200).send(jsonResult);  
}