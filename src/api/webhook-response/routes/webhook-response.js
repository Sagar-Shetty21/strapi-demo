'use strict';

/**
 * webhook-response router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::webhook-response.webhook-response');
