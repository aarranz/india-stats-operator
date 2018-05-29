/*
 * india-stats
 * https://github.com/aarranz/india-stats-operator
 *
 * Copyright (c) 2018 Future Internet Consulting and Development Solutions S.L.
 * Licensed under the MIT license.
 */

(function () {

    "use strict";

    var data = [];

    MashupPlatform.wiring.registerCallback("data", function (new_data) {
        data = data.concat(new_data);

        var totalMale = 0;
        var totalFemale = 0;

        data.forEach((entity) => {
            if (entity.Gender === "Male") {
                totalMale += 1;
            } else if (entity.Gender === "Female") {
                totalFemale += 1;
            }
        });

        let gender = {
            "type": "PieChart",
            "options": {
                "title": "Gender Wise Population",
                "is3D": true
            },
            "data": [
                ["Task", "Hours per Day"],
                ["Male", totalMale],
                ["Female", totalFemale]
            ]
        };

        MashupPlatform.wiring.pushEvent("gender-wise-population", JSON.stringify(gender));
    }.bind(this));

    /* test-code */

    /* end-test-code */

})();
