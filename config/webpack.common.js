const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

process.chdir(__dirname);
module.exports = {
    entry: '../src/ts/index.ts',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: '../src/index.html',
            title: 'Game',
            minify: {
                collapseWhitespace: true,
                minifyCSS: true,
                removeComments: true
            },
        })
    ],
    module: {
        rules: [
            // css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            // typescript
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },

            // Actual sprites
            // Using Piksel thus far to create sprites manually
            // it saves stuff as PNG, that may not be super optimal
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.css']
    },
};