/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
    /* config options here */
    output: "standalone",
    // If your site will be served from a subpath (not root domain):
    basePath: `/${process.env.REPO_NAME}`,
    assetPrefix: `/${process.env.REPO_NAME}/`,
}

module.exports = nextConfig
