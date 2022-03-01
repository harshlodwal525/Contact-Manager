const path = require('path');
module.exports = {
    entry: './src/ContactManager.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.join(__dirname, 'node_modules')
        }]
    }

}