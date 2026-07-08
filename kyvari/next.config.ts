import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project lives inside a larger repo; pin the workspace root so
  // Turbopack doesn't resolve against the outer lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
