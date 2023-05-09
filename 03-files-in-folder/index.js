const fs = require('fs');
const path = require('path');


fs.readdir(path.resolve(__dirname, 'secret-folder'), function (err, items) {
  console.log(items);

  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
});


// fs.stat(path.resolve(__dirname, 'secret-folder'), (err, stats) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   stats.isFile() //true
//   stats.isDirectory() //false
//   stats.isSymbolicLink() //false
//   stats.size //1024000 //= 1MB
// })