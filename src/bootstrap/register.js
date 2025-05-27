'use strict';

module.exports = async ({ strapi }) => {
  // Log all registered content types
  console.log('\n=== Registered Content Types ===');
  Object.keys(strapi.contentTypes).forEach(contentType => {
    console.log(`- ${contentType}`);
  });
  console.log('===============================\n');
}
