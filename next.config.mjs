/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cloudflare-ipfs.com', 
      'avatars.githubusercontent.com', 
      'loremflickr.com',
      'picsum.photos',
      'm.media-amazon.com'
    ],
  },
};

export default nextConfig;
