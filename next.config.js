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
  // headers: headers,
};

module.exports = nextConfig;
