'use strict';

/**
 * winter service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::winter.winter');
