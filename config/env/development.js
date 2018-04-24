require('dotenv').config();

exports.Info = {
  facebook: {
    clientID: process.env.FB_CLIENT_SECRET,
    clientSecret: process.env.FB_CLIENT_ID,
    callbackUrl: 'localhost:3000',
  },
  twitter: {
    clientID: process.env.TWITTER_CONSUMER_KEY,
    clientSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackUrl: 'localhost:3000',
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_SECRET,
    clientSecret: process.env.GOOGLE_CLIENT_ID,
    callbackUrl: 'localhost:3000',
  },
  github: {
    clientID: process.env.GITHUB_CLIENT_SECRET,
    clientSecret: process.env.GITHUB_CLIENT_ID,
    callbackUrl: 'localhost:3000',
  },
};

