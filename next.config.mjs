import nextMDX from "@next/mdx"

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
})

const isProd = process.env.NODE_ENV === "production"

export default withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export",
  basePath: isProd ? "/julie" : "",
  assetPrefix: isProd ? "/julie/" : "",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
})
