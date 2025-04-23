// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Client-side only configuration
        config.resolve.fallback = {
          ...config.resolve.fallback,
          stream: require.resolve('stream-browserify'),
          util: require.resolve('util/'),
          buffer: require.resolve('buffer/'),
          https: require.resolve('https-browserify'),
          url: require.resolve('url/'),
          crypto: require.resolve('crypto-browserify'),
          os: require.resolve('os-browserify/browser'),
          path: require.resolve('path-browserify'),
          http: require.resolve('stream-http'),
          zlib: require.resolve('browserify-zlib'),
          fs: false, // Disable fs module
          net: false, // Disable net module
          tls: false, // Disable tls module
          dns: false, // Disable dns module
          http2: false // Disable http2 module
        };
      }
      return config;
    }
  };