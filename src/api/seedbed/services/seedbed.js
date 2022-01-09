'use strict';

/**
 * seedbed service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seedbed.seedbed');
