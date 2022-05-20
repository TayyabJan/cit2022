  const fs = require('fs');

//  // // doing practice again.

//  // // to check a file 

//  fs.exists('test.txt', function (exists) {
//      console.log(exists);
//  })

// fs.readFile('test.txt','utf8',function(err,data){
//     if(err) throw err;
//     console.log(data);
// });

// fs.writeFile('test.txt','Welcome to filehandling',function (err){
//     if(err) throw err;
//     console.log('file saved');
// })

// fs.rename('test.txt','test2.txt',function(err){
//     if(err) throw err;
//     console.log('file renamed');
// })
// fs.unlink('test2.txt',function(err) {
//     if(err) throw err;
//     console.log('file deleted');
// })
// fs.link('test2.txt','utf8',function (err){
//     if(err) throw err;
//     console.log('file created');
// });

fs.exists('TestFolder', function (exists){
  console.log(exists);
})

// fs.readdir('TestFolder',function (err,files){
//   if(err) throw err;
//   console.log(files);
// })
// fs.rename('TestFolder','MyFolder',function(err){
//   if(err) throw err;
//   console.log('folder renamed');
// })

// fs.mkdir('Myfolder',function(err){
// if(err) throw err;
// console.log('folder created');
// })

fs.rmdir('TestFolder',function(err){
if(err) throw err;
console.log('folder deleted');
})



// const ShowFileInitially = () => { 
//      fs.readFile('test.txt','utf8', function (err,data){
//     if(err) throw err;
//     console.log(data);
// })
// }


// const writeFilefn = () =>{ 
//     fs.writeFile('test.txt','This is file writing info', function (err){
//     if(err) throw err;
//     console.log("file updated");
// })
// }

//  async function filestreaming() {
//     await ShowFileInitially();
//     await writeFilefn();
// }
// filestreaming();


// fs.exists('text.txt',function(exists) {
//     console.log(exists);
// })













// // // // to check if a file exists 

// // // fs.exists('test.txt',function (exists) {

// // //     console.log(exists);
// // // })

// // // fs.writeFile('test.txt','Hello Tayyab',function (err){
// // //     if(err) throw err;
// // //     console.log("file updated");
// // // })

// // // fs.readFile('test.txt','utf8',function(err,data){
// // //     if(err) throw err;
// // //     console.log(data);
// // // })

// // // // // Rename a file 

// // // fs.rename('test.txt','test2.txt', function (err){
// // //     if(err) throw err;
// // //     console.log("renamed");
// // // })

// // // fs.readFile('test2.txt','utf8',function (err,data){
// // //     if(err) throw err;
// // //     console.log(data);
// // // })

// // // fs.rename('test2.txt','test.txt', function (err){
// // //     if(err) throw err;
// // //     console.log("file name renamed again");
// // // })



// // fs.readFile('test.txt','utf8',function (err,data){
// //     if(err) throw err;
// //     console.log(data);
// // })


// // fs.writeFile('test.txt','Hello JS',function (err){
// //     if(err) throw err;
// //     console.log("file updated");
// // })


// // // // fs.link('test.txt', function (err) {
// // // //     if(err) throw err;
// // // //     console.log('File Created');
// // // // })

// fs.unlink('test2.txt', function (err) {
//     if (err) throw err;
//     console.log('Deleted!');
// })