// next.config.mjs

import nextMDX from "@next/mdx"

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
  // optional: specify remark/rehype plugins here
})

export default withMDX({
  // all your existing Next config
  pageExtensions: ["ts", "tsx", "md", "mdx"],
})
