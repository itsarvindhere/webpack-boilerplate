//Steps to setup Babel

1. We first use npm init to create a package.json file

2. Then we install @babel/core and @babel/cli from npm. We install them as devDependencies

   npm install @babel/core @babel/cli --save-dev

3. We also install the @babel/presets/env to specify the preset we will be working with

    npm install @babel/presets/env --save-dev

4. Finally, we register this preset in the .babelrc file
    {
    "presets": ["@babel/preset-env"]
    }


//Using the Babel CLI

1. Suppose we have a file named modern.js with the new ES6 features

2. To convert this code to older JS version, we say in terminal - 

    node/modules\.bin\babel modern.js -o old.js
3. Here, old.js is the output file where we want the code in previous JS version.

//Creating an npm script to run the above babel line

Inside package.json, we can crate a script under scripts section such as - 

    "babel": "babel src/index.js -w -o dist/assets/bundle.js"

Here, -w after index.js means it will keep watching the index.js file for changes and as some changes are made to it and it is saved, this script is automatically run. 

//What is Webpack??

It is a module bundler. It means multiple source files bundled into one single file. It also works well with Babel. We can also use it for a local development server. 

    We install the webpack and webpack cli via npm   
    npm install webpack webpack-cli --save-dev


//Webpack.config.js

We create this file in the root of our project where we specify everything such as the entry point and the output file path etc.

//Just like Babel, the webpack cli is in the node_modules/.bin/webpack so we can run it as just saying - 
    node_modules/.bin/webpack

 in the terminal. We do not need to specify the name of input or output files because we have already set them in the configuration file for webpack. 


 //webpack dev server

 We can use the webpack dev server to have a local development server so that we can preview our changes in the browser. For this, first we install this package 
    
        npm install webpack-dev-server

//using Babel with Webpack

//Loaders in webpack -> they are like tasks that we can run on our code when it is loaded via the module system. Or when it is loaded by some kind of import statement. So we can use babel loader in that case and we can configure that in webpack config file.

//First install babel-loader
        npm install babel-loader --save-dev
    

And the rest of config is in webpack config file. 