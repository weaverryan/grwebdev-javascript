var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    // will output as public/build/app.js
    .addEntry('app', './public/app.js')
    .enableSourceMaps(!Encore.isProduction())
    .enableReactPreset()
; 

module.exports = Encore.getWebpackConfig(); 
