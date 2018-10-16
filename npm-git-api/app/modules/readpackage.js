const fs = require('fs');

function readDependences(){
    console.log(__dirname);
    let pa = fs.readFileSync(__dirname+'/../../package.json','utf-8');
    pa = JSON.parse(pa);
    let packages = pa.dependencies;

    return packages;
}

module.exports = readDependences();