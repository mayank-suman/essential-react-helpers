var path = require('path');

module.exports = {
    mode: 'production',
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'lib.js',
        library: 'commonjs2',
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules\//,
            use: [{ loader: 'babel-loader' }],
          },
        ]
    }
}