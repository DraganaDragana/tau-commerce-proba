const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: path.resolve(__dirname, 'sass'),
    entry: './style.scss',
    module: {
        rules: [{
            test: /.(scss|css)$/,
            exclude: /node_modules/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,

                },
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]

        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}

// npm run build