const fs = require('fs');

// fs.createWriteStream('Test.txt','utf8',(err,data) =>{ 
//     if (err) return;

// })

fs.createWriteStream('test.json',(err,data) =>{ 
    if (err) return;

})

// // write a file
// fs.writeFile('test.txt', 'Hello World!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// })

// read a file
// fs.readFile('test.txt', 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// })



// rename a file
// fs.rename('test.txt', 'test2.txt', function (err) {
//     if (err) throw err;
//     console.log('Renamed!');
// })

// delete a file
// fs.unlink('test2.txt', function (err) {
//     if (err) throw err;
//     console.log('Deleted!');
// })

// // create a directory
// fs.mkdir('test', function (err) {
//     if (err) throw err;
//     console.log('Folder created!');
// })

// // delete a directory
// fs.rmdir('test', function (err) {
//     if (err) throw err;
//     console.log('Folder deleted!');
// })

// // read a directory
// fs.readdir('test', function (err, files) {
//     if (err) throw err;
//     console.log(files);
// })



// // check if a file exists
// fs.exists('test.txt', function (exists) {
//     console.log(exists);
// })

// // check if a directory exists
// fs.exists('test', function (exists) {
//     console.log(exists);
// })