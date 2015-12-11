module.exports = {
    entry: {
        app: './public/javascripts/app.js'
    },

    output: {
        path: './public/dist',
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }

};