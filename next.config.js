const { env } = require("process");

module.exports = {
  env: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,

    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,

    HOST_LOCAL_BACKEND: process.env.HOST_LOCAL_BACKEND,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};
