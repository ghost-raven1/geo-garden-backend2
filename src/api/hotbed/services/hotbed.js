'use strict';

/**
 * hotbed service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hotbed.hotbed');
