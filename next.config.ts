/** @type {import('next').NextConfig} */
import type { Configuration } from 'webpack';

const nextConfig = {
  images: {
    domains: ['images.prom.ua'],
  },
  webpack(config : Configuration) {
    config?.module?.rules?.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js'
        }
      },
    }
  },
};

module.exports = nextConfig;
