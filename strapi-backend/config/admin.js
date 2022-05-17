module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '53cd252c10602c1ec433747319c399d6'),
  },
});
