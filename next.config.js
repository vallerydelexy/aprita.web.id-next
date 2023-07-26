module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
        },
      };
    }
    config.module = {
      ...config.module,
      exprContextCritical: false,
    };
    return config;
  },
}