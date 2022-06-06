
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/nicosammito/juli-generator/gh-pages/' : '',
}

module.exports = nextConfig
