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
    distDir: "build",
    output: "export",
    images: {
      unoptimized: true,
    },
  };

  module.exports = nextConfig;