import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project lives inside a larger repo; pin the workspace root so
  // Turbopack doesn't resolve against the outer lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // Photography is hotlinked from Unsplash in this prototype; swap for
    // your own CDN/assets in production. `unoptimized` keeps the demo free
    // of a server-side image pipeline dependency.
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
