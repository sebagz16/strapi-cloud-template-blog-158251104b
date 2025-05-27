export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});


// Debug: Log environment variables
console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
console.log('ADMIN_JWT_SECRET exists:', !!process.env.ADMIN_JWT_SECRET);