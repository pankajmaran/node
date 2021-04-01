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

const EventEmitter=require('events');
const emitter = new EventEmitter();
// console.log(EventEmitter);
// console.log(emitter);
// on == addlistner
emitter.on("msgLogged", function(arg){
    console.log('got a new event');
    console.log(arg);
});
emitter.emit("msgLogged", {id : '1', url : "https/"});

 /*function sayHello(name ){
    console.log( "hello "+name);

}
// sayHello('pankaj');
console.log(windows);
*/