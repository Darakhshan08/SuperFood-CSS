/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "superfood.qodeinteractive.com",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
         
        },
        {
          protocol: "https",
          hostname: "passiongreensltd.com",
       
        },
        {
          protocol: "https",
          hostname: "thumbs.dreamstime.com",
   
         
        },
        {
          protocol: "https",
          hostname: "media.istockphoto.com",
        },
        {
          protocol: "https",
          hostname: "unsplash.com",
  
        },
        {
          protocol: "https",
          hostname: "plus.unsplash.com",
        
        },
      
      ],
    },
  };

export default nextConfig;
