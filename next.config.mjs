/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    PUBLIC_GROUP_CHAT_ID: process.env.PUBLIC_GROUP_CHAT_ID,
  },
};

export default nextConfig;
