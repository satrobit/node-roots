/**
 * node-roots
 * https://github.com/satrobit/node-roots
 *
 * Copyright (c) 2016 Amir Keshavarz
 * Licensed under the MIT license.
 */
(function(module) {
    "use strict";

    var settings = {
        dec: 10
    };

    var cur_sign, baze = null,
        abs_answers = [];


    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function decimalPlaces(num) {
        var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) {
            return 0;
        }
        return Math.max(
            0,
            // Number of digits right of decimal point.
            (match[1] ? match[1].length : 0)
            // Adjust for scientific notation.
            -
            (match[2] ? +match[2] : 0));
    }


    function computer(tagh, tcur, max, func) {

        return new Promise(function(resolve, reject) {

            if (decimalPlaces(tagh) > settings.dec) {
                return;
            }

            cur_sign = null;

            while (true) {
                var cur_res = func(tcur);
                if (cur_res === 0) {
                    baze = {
                        min: tcur,
                        max: tcur
                    };
                    (resolve)(baze);
                    break;
                }
                if (isNumeric(cur_sign)) {
                    if (cur_sign !== Math.sign(cur_res)) {
                        baze = {
                            min: tcur - tagh,
                            max: tcur
                        };
                        computer(tagh / 10, tcur - tagh, tcur, func);
                        (resolve)(baze);
                        break;


                    }
                }
                tcur = tcur + tagh;
                var cur_sign = Math.sign(cur_res);
                if (tcur > max) {
                    break;
                }
            }

            if (baze == null) {
                (reject)('No roots for this function');
            }

        });


    }


    /* Public Methods */
    module.exports = {
        computer: computer
    };
})(module);