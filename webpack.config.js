const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode =
    process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode: mode,
    entry: {
        main: ['./src/js/index.js', './src/sass/style.scss'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [{
                test: /.(scss|css)$/,
                exclude: /node_modules/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    devtool: 'source-map',
};

// npm run build - for development
//npm run build-prod - for production