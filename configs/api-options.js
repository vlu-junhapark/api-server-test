const MessageHandler = require('../utils/message-handler');

const getProductsOptions = {
  method: 'get',
  url: "/api/v2/admin/products",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
  },
  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', 'DELETE , and 'PATCH'
  data :{
  }
}

const getOrdersOptions = {
  method: 'get',
  url: "/api/v2/admin/orders",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    start_date: MessageHandler.get7daysbefore().toISOString().slice(0,10),  // with format yyyy-mm-dd
    end_date: new Date().toISOString().slice(0,10)
  },
  data :{
  }
}



module.exports = { getProductsOptions, getOrdersOptions };