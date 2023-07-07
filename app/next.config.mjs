/** @type {import('next').NextConfig} */
import million from 'million/compiler';
const nextConfig = {
	reactStrictMode: true,
};

// module.exports = nextConfig
export default million.next(nextConfig);
