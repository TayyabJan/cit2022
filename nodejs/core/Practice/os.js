const os = require('os');

// get total memory of os 

console.log(os.totalmem());
// free memory 

console.log(os.freemem());
// host name 
console.log(os.hostname());

// os type 
console.log(os.type());
// os plateform 
console.log(os.platform());
// os version 
console.log(os.version());
console.log(os.release());
// up time
console.log(os.uptime());
console.log(os.loadavg());
//console.log(os.userInfo());
//console.log(os.cpus());
//console.log(os.arch());
//console.log(os.networkInterfaces());
console.log(os.EOL);
console.log(os.endianness());