const url = require('url');

const urllink = 'http://localhost:8080/default.html?year=2013&month=february';

const urlobj = url.parse(urllink,true);

console.log(urlobj.host);
console.log(urlobj.pathname);
console.log(urlobj.search);
const qdata = urlobj.query;
console.log(qdata);
console.log(qdata.month);
console.log(qdata.year);

