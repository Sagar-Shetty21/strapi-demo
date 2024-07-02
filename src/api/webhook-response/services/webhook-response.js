'use strict';

/**
 * webhook-response service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webhook-response.webhook-response');
