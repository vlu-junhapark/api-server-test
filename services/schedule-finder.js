const OracleDBHelper = require("../utils/oracleDB-helper");
const {apiResponse} = require('../utils/api-response');
const MessageHandler = require('../utils/message-handler');

class ScheduleFinder {
  constructor() {
    this._db = new OracleDBHelper();
  }

  async getOceanScheduleByPorts(params) {
    try {
      await this._db.createPool();
      let result;
      if (!params.from | !params.to) {
        result = apiResponse.missingParams;
        return result
      }
      const sql = MessageHandler.oceanScheduleFindQuery();
      const data = MessageHandler.convertOceanSchQueryParamsToData(params);
      const sqlResult = await this._db.querySelect(sql, data);
      result = sqlResult.map(MessageHandler.convertOceanScheduleResult)
      return result;
    } finally {
      await this._db.closePool();
    }
  }

  async getAirScheduleByPorts(params) {
    try {
      await this._db.createPool();
      let result;
      if (!params.from | !params.to) {
        result = apiResponse.missingParams;
        return result
      }
      const sql = MessageHandler.airScheduleFindQuery();
      let data = MessageHandler.convertAirSchQueryParamsToData(params);
      const sqlResult = await this._db.querySelect(sql, data);
      console.log(sqlResult);
      if (sqlResult.length === 0) {
        result = apiResponse.noData;
        return result;
      } else {
        result = sqlResult.map(MessageHandler.convertAirScheduleResult)
        return result;
      }
    } finally {
      await this._db.closePool();
    }
  }  
}

module.exports = ScheduleFinder;
