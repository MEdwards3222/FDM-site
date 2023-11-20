const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'FDM Bank',
        filename: 'index.html',
        template: './src/index.html'
    })
  ],
  module: {
    rules: [
        {
            test: /\.(scss)$/,
            use:
            [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: () => [
                                require('autoprefixer')
                            ]
                        }
                    }
                },
                {
                    loader: 'sass-loader'
                }
            ]
        },
        {
            test: /\.html$/i,
            loader: "html-loader"
        },
        {
            test:/\.css$/i,
            use:["style-loader", "css-loader"],
        }
    ]
  }
}
