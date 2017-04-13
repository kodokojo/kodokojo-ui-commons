
# Kodo Kojo UI Commons

This is the UI commons for Kodo Kojo project 

[![Join the chat at https://gitter.im/kodokojo/kodokojo](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/kodokojo/kodokojo) 

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/) 
[![](https://img.shields.io/badge/license-GPLv3-blue.svg?style=flat)](http://www.gnu.org/licenses/gpl-3.0.en.html)     

[![Kodo Kojo UI version](https://img.shields.io/badge/version-1.5.2-orange.svg?style=flat&maxAge=2592000)](https://github.com/kodokojo/kodokojo-ui#kodo-kojo-ui)
[![node](https://img.shields.io/badge/node-6.x.x-yellow.svg?style=flat&maxAge=2592000)](https://github.com/kodokojo/kodokojo-ui#kodo-kojo-ui) 
[![npm](https://img.shields.io/badge/npm-3.x.x-blue.svg?style=flat&maxAge=2592000)](https://github.com/kodokojo/kodokojo-ui#kodo-kojo-ui)  

[![Dependency Status](https://dependencyci.com/github/kodokojo/kodokojo-ui/badge)](https://dependencyci.com/github/kodokojo/kodokojo-ui)


## License

`kodokojo-ui-commons` is a licensed under [GNU General Public License v3](http://www.gnu.org/licenses/gpl-3.0.en.html).

## Contribute

You want to contribute? You are very welcome!  
Chat with us on Gitter.  
Please read following [commit message policy](https://github.com/kodokojo/kodokojo-ui/blob/dev/COMMIT.md) and [contributing policy](https://github.com/kodokojo/kodokojo-ui/blob/dev/CONTRIBUTING.md).

## Prerequisite

- NodeJS (see package.json file for version).
- Consider using nvm to switch node version in development easily.

## Browser support

The UI is tested on Firefox and Chrome  

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- |
| last version| last version| last version
<sub><sub>thanks to @godban for the badge generator</sup></sub>

## Installation

First install npm packages, build development files into static/, start webpack dev server on localhost:3000.

    $ NODE_ENV=development npm install


## Run styleguide

Build and run styleguide.

    $ npm run styleguide

Then open your browser.

    $ open http://localhost:9001


## Add license in source files headers

    $ npm run license


## Tests (no tests yet)

Run tests.

    $ npm test

Run tests in watch mode.

    $ npm run test:watch

Run coverage.

    $ npm run coverage
    $ open ./coverage/lcov-report/index.html 

:heart: Thanks to all Open source projects which made such project possible!
