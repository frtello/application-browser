/*
 * Copyright (c) 2020 by PROS, Inc.
 */

var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'package.json');
var maker = process.argv.slice(2)[0];

fs.readFile(filePath, {encoding: 'utf-8'}, function(error, data) {
    if (!error) {
        var jsonObj = JSON.parse(data);
        jsonObj.config.forge.makers[0].name = maker;
        let outputText = JSON.stringify(jsonObj, null, 4);
        fs.writeFileSync('package.json', outputText);
    } else {
        console.log(error);
    }
});
