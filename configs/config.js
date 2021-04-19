const dbConfig = {
  user          : process.env.NODE_ORACLEDB_USER || "VLUDEV",
  password      : process.env.NODE_ORACLEDB_PASSWORD || "VLUDEV",
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "vl-db-dev.cxlbpxukk7bo.ap-northeast-2.rds.amazonaws.com:1521/orcl",
  poolMin: 1,
  poolMax: 10,
  poolTimeout: 300,
  _enableStats  : true, 
  options : {
    autoCommit : true,
  },
  poolAlias: 'devpool',
}

const authConfig = {
  redirectUri: "https://127.0.0.1:3000/receivedCode/",
  clientId: "K4zSI7oDOVpvLhsjO4blBB",
  clientSecret : "ov70Stu5E55uTL16mTqnxC",
}

const simpleOauthConfig = {
  client: {
    id: authConfig.clientId,
    secret: authConfig.clientSecret,
  },
  auth: {
    tokenHost: "https://vlutestid.cafe24.com/",
    authorizePath: "/api/v2/oauth/authorize",
  },
};

module.exports = { dbConfig, authConfig, simpleOauthConfig }