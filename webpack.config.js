const path = require('path');

const publicDirPath = path.join(__dirname, 'public');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: publicDirPath,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx"]
      },
    module: {
        rules: [{ 
            loader: 'babel-loader', 
            test: /\.jsx?$/, 
            exclude: /node_modules/ 
        }, {
            use: ['style-loader', 'css-loader', 'sass-loader'],
            test: /\.s?css$/,
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: publicDirPath,
        historyApiFallback: true
    }
};
