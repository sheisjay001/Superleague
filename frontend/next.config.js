const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
          pathname: "/**",
        },
      ],
    },
    
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    },
  };

  module.exports = nextConfig;