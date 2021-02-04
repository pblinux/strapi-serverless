'use strict'

// Import Strapi and serverless-http
const strapi = require('strapi/lib/Strapi');
const serverless = require('serverless-http');

/// Handler for requests
module.exports.handler = async (event, context) => {
  if (!global.strapi) {
    console.log('Cold starting Strapi');
    await strapi({ dir: __dirname }).start();
  }
  const handler = serverless(global.strapi.app);
  return handler(event, context);
};