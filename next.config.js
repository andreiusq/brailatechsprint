/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      "cngmm.ro",
      "imgur.com",
      "i.imgur.com",
      "archive.andreiusq.dev",
      "scontent.fotp3-3.fna.fbcdn.net",
      "scontent.fotp3-2.fna.fbcdn.net",
      "scontent.fotp3-1.fna.fbcdn.net",
      "media.licdn.com",
    ],
  },
};

module.exports = nextConfig;
