/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    { source: "/work/:slug", destination: "/projects/:slug", permanent: true },
    { source: "/work", destination: "/projects", permanent: true },
  ],
}

export default nextConfig
