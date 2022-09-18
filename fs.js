const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

console.log(path.join(__dirname, 'src/demofile.txt'));

// read file sync to get the data
const textdata = fs.readFileSync(path.join(__dirname, 'src/demofile.txt'), 'utf8');

// write file sync to write the data
fs.writeFileSync(path.join(__dirname, 'src/demofile2.txt'), 'Hello content!', 'utf8');

// append file sync to append the data
fs.appendFileSync(path.join(__dirname, 'src/demofile2.txt'), ' This is my text.', 'utf8');

// rename file sync to rename the file
fs.renameSync(path.join(__dirname, 'src/demofile2.txt'), path.join(__dirname, 'src/demofile3.txt'));

// // delete file sync to delete the file
// fs.unlinkSync(path.join(__dirname, 'src/demofile3.txt'));

// // create folder sync to create the folder
// fs.mkdirSync(path.join(__dirname, 'src/test'));

// // delete folder
// fs.rmdirSync(path.join(__dirname, 'src/test'));

// // read folder sync to read the folder
// fs.readdir(path.join(__dirname, 'src'), (err, files) => {
//     if (err) throw err;
//     for (const file of files) {
//         console.log(file);
//     }
// });



// access() method checks if the file or directory exists in the specified path.
fs.access(path.join(__dirname, 'src/demofile.txt'), (err) => {
    console.log(`${path.join(__dirname, 'src/demofile.txt')} ${err ? 'does not exist' : 'exists'}`);
});

// // mkdtemp() method creates a unique temporary directory.
// fs.mkdtemp(path.join(__dirname, 'src/test-'), (err, folder) => {
//     if (err) throw err;
//     console.log('Folder:', folder);
// });




console.log(textdata);

app.get('/', (req, res) => {
    res.send(textdata);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

