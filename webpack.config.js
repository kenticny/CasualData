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
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: 'babel', 
            query: {
                presets: ['react']
            }
        }]
    },

    resolve: {
        extensions: ['', '.js']
    }

};