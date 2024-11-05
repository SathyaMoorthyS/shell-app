// // const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
// // const path = require('path');
// // module.exports = {
// //   output: {
// //     path: path.resolve(__dirname, 'dist'),
// //     publicPath: 'auto',
// //   },
// //   plugins: [
// //     new ModuleFederationPlugin({
// //       name: 'microFrontEnd1',
// //       filename: 'remoteEntry.js',
// //       exposes: {
// //         './Module': './src/app/app.module.ts', // Adjust this path
// //       },
// //       // shared: {
// //       //   '@angular/core': { singleton: true, strictVersion: true },
// //       //   '@angular/common': { singleton: true, strictVersion: true },
// //       //   '@angular/router': { singleton: true, strictVersion: true },
// //       // },
// //     }),
// //   ],
// // };


const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        microFrontEnd1: 'MFE1Module@http://localhost:4201/remoteEntry.js'
      },
      // shared: {
      //   '@angular/core': { singleton: true, strictVersion: true, eager: true,  requiredVersion: '17.3.12'  },
      //   '@angular/common': { singleton: true, strictVersion: true, eager: true,  requiredVersion: '17.3.12'  },
      //   '@angular/router': { singleton: true, strictVersion: true , eager: true,  requiredVersion: '17.3.12' },
      // },
    }),
  ],
};

