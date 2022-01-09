module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1435cb839e7a6d7876027a7c317bf60f'),
  },
});
