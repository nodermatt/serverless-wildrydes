'use strict';

module.exports.hello = async event => {
  const { USER_POOL_ID, USER_POOL_CLIENT_ID } = process.env;
  console.log(USER_POOL_CLIENT_ID + " " + USER_POOL_ID);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, DELETE, PUT, POST',
      'Access-Control-Allow-Content': '*',
      'Access-Control-Allow-Headers': "Authorization, Origin, Content-Type, Accept",
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!, Pool: ' + USER_POOL_ID + ", Client: " + USER_POOL_CLIENT_ID ,
        //message: 'Go Serverless v1.0! Your function executed successfully!,' ,
        input: event,
      },
      null,
      2
    ),
  };
};
