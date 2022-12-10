/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'media.istockphoto.com',
            'cdn.cnn.com',
            'hips.hearstapps.com',
            'cdn.akc.org',
            'img.freepik.com',
            'cdn.pixabay.com',
        ],
    },
};

module.exports = nextConfig;
