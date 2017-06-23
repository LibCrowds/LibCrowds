# vue-pybossa-frontend

[![Build Status](https://travis-ci.org/LibCrowds/vue-pybossa-frontend.svg?branch=master)](https://travis-ci.org/LibCrowds/vue-pybossa-frontend)
[![dependencies Status](https://david-dm.org/LibCrowds/vue-pybossa-frontend/status.svg)](https://david-dm.org/LibCrowds/vue-pybossa-frontend)
[![devDependencies Status](https://david-dm.org/LibCrowds/vue-pybossa-frontend/dev-status.svg)](https://david-dm.org/LibCrowds/vue-pybossa-frontend?type=dev)

> A Vue.js frontend for PyBossa (>=2.5.0).

## Installing

Install [Node.js](https://nodejs.org/en/), then:

``` bash
# install dependencies
npm install
```

## Configuring

All settings can be found in [src/config.js.tmpl](src/config.js.tmpl); to use
the theme you will need to make a copy of this file locally.

``` bash		
# create local configuration file
cp src/config.js.tmpl src/config.js
```

## Building

``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Testing

``` bash
# run unit tests
npm unit

# run e2e tests
export BROWSERSTACK_USERNAME=<browserstack-username>
export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
npm run e2e
```

End-to-end tests are run using BrowserStack, a cross browser and real device web-based testing platform.

[![BrowserStack Logo](browserstack-logo.png)](https://www.browserstack.com)

## Developing

Start up a local PyBossa instance using the default settings, then:

``` bash
# serve with hot reload at localhost:8080
npm run dev
```
