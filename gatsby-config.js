module.exports = {
  siteMetadata: {
    siteUrl: 'https://differential.com',
    title: 'Differential',
    description: 'A digital-product agency',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-prettier-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-root-import',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Bebas Neue',
            variants: ['400'],
          },
          {
            family: 'Work Sans',
            variants: ['400', '500', '600', '700'],
          },
        ],
      },
    },
  ],
}
