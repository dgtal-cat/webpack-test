const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};