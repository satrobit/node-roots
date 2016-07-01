node-roots
=========

Equation root computer


## Installation

```shell
  npm install node-roots
```

## Usage

```js
  (function() {
    "use strict";



    function mod(x) {
        var res = Math.pow(x, 3) + x + 1;
        return res;
    }

    function mod2(t) {
        var res = Math.pow(t, 3) + 3 * Math.pow(t, 2) - 4 * t + 7;
        return res;
    }

    function mod3(x) {
        var res = 2 * Math.pow(x, 2) - x;
        return res;
    }

    function mod4(t) {
        var res = Math.pow(t, 2) - 9;
        return res;
    }

    function mod5(x) {
        var res = Math.pow(x, 7) + x + 1;
        return res;
    }




    /* Dependencies */
    var promise = require('es6-promise'),
        roots = require('./index');

    /* Instances */
    promise.polyfill();

    (function solve() {
        roots.computer(1, -100, 100, mod4)
            .then(function(res) {
                console.log(res);
            })
            /* Error! */
            .catch(function(err) {
                console.log(err);
            });
    })();
})();
```

## Tests

```shell
   npm test
```

## Release History

* 1.0.0 Initial release