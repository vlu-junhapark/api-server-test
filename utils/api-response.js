const apiResponse = {
  missingParams : {
    statusCode: 400,
    reason: 'Bad request',
    message: 'Some query parameter(s) are missing. Please call with the correct query parameter(s).'
  },
  noData : {
    statusCode : 200,
    reason: 'No content',
    message: `There is no appropriate data.`,
  },
  forbidden: {
    statusCode : 403,
    reason: 'Forbidden',
    message: `You don't have the right to access the resources.`
  },
}


module.exports = {apiResponse}