/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.plugins.push(
        new (require("webpack")).DefinePlugin({
          "process.env.NEXT_PUBLIC_API_URL": JSON.stringify(process.env.NEXT_PUBLIC_API_URL),
        })
      );
      return config;
    },
  };
  
  module.exports = nextConfig;
  