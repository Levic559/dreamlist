/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL:"http://dreamlistserver-env-1.eba-rr2fbshw.us-west-2.elasticbeanstalk.com",
    LOCAL_URL:"http://localhost:3750"
  }
}

module.exports = nextConfig
