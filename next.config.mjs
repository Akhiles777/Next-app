/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Отключает оптимизацию изображений (иначе нужен next start)
    },
};

export default nextConfig;
