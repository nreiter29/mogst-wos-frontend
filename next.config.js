/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "images.dog.ceo",
    }, {
      protocol: "http",
      hostname: "localhost"
    }]
},
}

module.exports = nextConfig
