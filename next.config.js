const withMDX = require('@next/mdx')(
    {
        extension: /\.(md|mdx)$/,
        options: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }
)
module.exports = withMDX(
    {
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
        webpack(config, options) {
          return config
        },
      }
)