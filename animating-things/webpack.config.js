const path = require('path')

module.exports = {
  entry: './templates/tutorial.html',
  module: {

    rules: [
      {
        test: /\.html$/,
        use: [ 'file-loader?name=[path][name].[ext]!extract-loader!html-loader' ]
      },
      {
        test: /tutorial\/.+\.md/,
        use: [
          { loader: 'raw-loader' },
          {
            loader: '@nuxtjs/markdownit-loader',
            options: {
              // markdown-it config
              preset: 'default',
              breaks: true,

              preprocess: function(markdownIt, source) {
                // do any thing

                return source
              },

              use: [
                /* markdown-it plugin */
                'markdown-it-emoji',

                /* or */
                // ['markdown-it-emoji', 'this is options']
              ]
            }
          }
        ]
      }
    ]
  }
};