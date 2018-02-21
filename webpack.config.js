const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const publicDirPath = path.join(__dirname, 'public');

module.exports = (env) => {
    const isProduction = (env === 'production');
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true }
                        }, {
                            loader: 'sass-loader',
                            options: { sourceMap: true }
                        }
                    ]
                })
            }]
        },
        plugins: [ CSSExtract ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: publicDirPath,
            historyApiFallback: true
        }
    };
};