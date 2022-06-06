/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es'
    }
}

module.exports = nextConfig