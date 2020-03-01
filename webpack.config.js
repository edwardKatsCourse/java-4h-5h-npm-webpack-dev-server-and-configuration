//1. compile my project
//2. minification
//3. gather all JS files into single file
//4. web server
//+ live reload

//- module (rules) - что хотим поменять в проекте
//- plugins        - какой JS библиотекой (плагином)

//require - import
let HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,  //REGEX
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html", //source - входная точка
            filename: "./index.html"     //dist - куда складывать
        })
    ]

};

