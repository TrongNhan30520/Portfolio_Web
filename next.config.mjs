import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

const millionConfig = {
  auto: true,
  // if you're using RSC:
  // auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
