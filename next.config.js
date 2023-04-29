/** @type {import('next').NextConfig} */

const headers = async () => {
  return [
    {
      source: "/",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "default-src 'self'",
        },
      ],
    },
  ];
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "murilomelo.vercel.app",
      "localhost",
    ],
    loader: "custom",
  },
  // headers: headers,
};

module.exports = nextConfig;
