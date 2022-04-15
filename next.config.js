/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL:"https://happy-cat.ca",
    LOCAL_URL:"http://localhost:3750"
  }
}

module.exports = nextConfig
