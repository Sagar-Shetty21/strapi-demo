const crypto = require('crypto');

module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
    },
  },
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
});