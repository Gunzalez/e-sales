var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'wwwroot/js/dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: {
        client: APP_DIR + '/app'
},
devtool: 'inline-source-map',
output: {
    path: BUILD_DIR,
        filename: '[name].bundle.js'
},
module : {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
}
},
    {
        test: /\.scss$/,
            use: [{
        loader: 'iso-morphic-style-loader' // creates style nodes from JS strings
    }, {
        loader: 'css-loader' // translates CSS into CommonJS
    }, {
        loader: 'sass-loader' // compiles Sass to CSS
    }]
    },
    {
        test: /\.(svg|png|jpg|etc)$/,
            exclude: [/\.inline\.svg$/],
        use: ['url-loader']
    },
    {
        test: /\.inline\.svg$/,
            loader: 'svg-inline-loader'
    }
]
},
resolve: {
    extensions: ['.js', '.jsx']
},
externals: {
    // Use external version of React (from CDN for client-side, or bundled with ReactJS.NET for server-side)
    // Comment this out if you want to load your own version of React
    react: 'React'
}
};

module.exports = config;