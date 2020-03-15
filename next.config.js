//Feel free to change this file if you are not using ZEIT/now to develop & deploy. It is .gitignored
module.exports = {
  env: {
    BUILTON_APIKEY: process.env.BUILTON_APIKEY,
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL
  }
};
