require-all
===========
[![Build Status](https://travis-ci.org/alvinl/require-all.svg?branch=master)](https://travis-ci.org/alvinl/require-all)

Requires all .js files in a folder and returns them as an object

## Install

```
npm install git://github.com/alvinl/require-all.git
```

## Example Usage
``` js

var reqAll = require('require-all'),
    routes = reqAll(__dirname + '/routes');

// routes/home.js is now accessible via routes.home and
// all its other exports (ie routes.home.index)

```
