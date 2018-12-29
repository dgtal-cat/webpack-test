const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: "./assets/"
    }
};