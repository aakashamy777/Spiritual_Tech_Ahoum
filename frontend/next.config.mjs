/** @type {import('next').NextConfig} */
const nextConfig = {
    // Re-writes are handled by Nginx in prod, but for local dev this is optional since Nginx is fronting both
    // However, if requested by assignment to be handled here:
    // rewrites: async () => [
    //     {
    //         source: '/api/:path*',
    //         destination: 'http://backend:8000/api/:path*', 
    //     }
    // ]
};

export default nextConfig;
