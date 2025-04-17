// import path from 'path';
// import { fileURLToPath } from 'url';

// // Create __dirname equivalent in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const nextConfig = {
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')]
//     },
//     images: {
//         domains: ['pixlr.com'], // ✅ Allow images from pixlr.com
//     }
// };

// export default nextConfig;


// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
      // Optionally, you can use remotePatterns for more fine-grained control:
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
      ],
    },
  };
  
  export default nextConfig;