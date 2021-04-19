const OracleDBHelper = require("../utils/oracleDB-helper");
const {apiResponse} = require('../utils/api-response');
const MessageHandler = require('../utils/message-handler');

class VesselFinder {
  constructor() {
    this._db = new OracleDBHelper();
  }

  async getVesselInfoByName(params) {
    try {
      await this._db.createPool();
      let result;
      if (!params.vslName) {
        result = apiResponse.missingParams
        return result
      }
      const sql = MessageHandler.vesselInfoFindQuery();
      const data = params;
      const sqlResult = await this._db.querySelect(sql, data);
      result = sqlResult.map(MessageHandler.convertVesselInfo)
      return result;
    } finally {
      await this._db.closePool();
    }
  }  
}

module.exports = VesselFinder;