var logger=require("./logger");
// console.log(logger);

logger.log_fuction('hehehe........');
const pathObj=require('path');
console.log(pathObj.parse(__filename));

const os=require('os');
// console.log(os);
console.log(os.freemem);
console.log(os.totalmem());

const fs= require('fs');
console.log(fs.readdirSync("./") );
fs.readdir('./', function(err, files){
    if(err) console.log(err);
    else console.log(files);
});
 /*function sayHello(name ){
    console.log( "hello "+name);

}
// sayHello('pankaj');
console.log(windows);
*/