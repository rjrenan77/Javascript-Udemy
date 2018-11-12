const _ = require("lodash") //vai em index.js em node_modules para importar a lib

//instalou lodash
//instalou nodemon para reexecutar automatico quando salva

setInterval(() => console.log(_.random(1,100)), 2000);