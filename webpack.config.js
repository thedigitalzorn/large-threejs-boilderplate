const path = require('path')


module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'viewer.js',
        path:path.resolve(__dirname, 'build')
    },
    devtool: 'inline-source-map',
    devServer :{
        contentBase: path.join(__dirname, './public'),
        hot: true
    }
}