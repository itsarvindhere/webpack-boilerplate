const path = require('path');

module.exports = { 

    //development mode -> faster but no compression or minification is done in bundle.js
    //Entry point
    entry : './src/index.js',
    //Output file
    output : {
        //Absolute path
        // __dirname => absolute path until the root directory of this project

        //path.resolve() joins the paths. So we get path till the project from __dirname and then we append the rest of the path till the output file
        path: path.resolve(__dirname, 'dist/assets'),

        //output file name
        filename: 'bundle.js'
    },

    devServer : {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/'
    },

    module : {
        rules: [{
            //WE only want to use babel loader on js files so we set a rule where we first test if filename matches a regex pattern. This pattern below tests if a filename ends with .js (\. means we are excaping the dot so it does not consider it as a dot in regex. It considers it as a normal dot)
            test: /\.js$/,

            //Exclude the .js files in node_modules as we do not want to run those through the loader
            exclude: /node_modules/,

            //Set the loader to use
            use : {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};