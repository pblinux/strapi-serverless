module.exports = ({ env }) => {
  let url = "http://localhost:1337";

  if (env("SLS", null) === 'true') {
    if (process.env.NODE_ENV === 'production') {
      url = "https://031k7170cd.execute-api.us-east-1.amazonaws.com/dev/"
    } else {
      url = "http://localhost:3000/dev"
    }
  }

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url,
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', '425dcca738c650d91ff4922aaa9e03af'),
      },
      autoOpen: false,
      serveAdminPanel: !env('SLS', false),
      url: env('SLS', false) ? '/' : '/admin'
    },
  };
}

