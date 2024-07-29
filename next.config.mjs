/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        ppr:true
    },
    images: {
        domains: ['localhost', 'res.cloudinary.com', 'centralcam.vercel.app'], // Agrega dominios adicionales si es necesario
        unoptimized: true
    },
    compress: true,
};

export default nextConfig;
