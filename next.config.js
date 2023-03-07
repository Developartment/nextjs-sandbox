const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sentry: {
        hideSourceMaps: false,
    },
};

module.exports = withSentryConfig(nextConfig);
