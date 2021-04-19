const oracledb = require('oracledb');
const { dbConfig } = require('../configs/config');

class OracleDbHelper {

  async createPool() {
    try { 
      await oracledb.createPool(dbConfig);
    } catch (error) {
      console.error(error);
    }
  }

  async getConnection() {
    let connection;
    connection = await oracledb.getConnection(dbConfig.poolAlias);
    return connection;
  }

  async releaseConnection(connection) {
    await connection.release({drop: false});
  }

  async closePool() {
    await oracledb.getPool(dbConfig.poolAlias).close(10);
  }

  async showPoolStatus() {
    oracledb.getPool(dbConfig.poolAlias)._logStats();
  }

  async querySelect(sql, data) {
    let connection = await this.getConnection();
    let result = await connection.execute(sql, data, {outFormat: oracledb.OBJECT});  // JSON 으로 Return
    await this.releaseConnection(connection);
    return result.rows;
  }

  async query(sql, data) {
    let connection = await this.getConnection();
    let result = await connection.execute(sql, data, dbConfig.options);
    await this.releaseConnection(connection);
    return result;
  }

}

module.exports = OracleDbHelper;
