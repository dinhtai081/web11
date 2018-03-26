const fs = require('fs');

let readFile = (path) =>{
    return JSON.parse(fs.readFileSync(path,'utf-8'));
}
let writeFile = (path,writeData,onWriteFileDone) =>{
    fs.writeFile(path, JSON.stringify(writeData),onWriteFileDone);
}
// let readFile = (path, onReadFileDone) => {
//     fs.readFile(path,'utf-8', (err,data) =>{
//         if (err) {console.log(err);}
//         onReadFileDone(data);
//     });
// }
// let writeFile = (path, writeData, onWriteFileDone ) => {
//     fs.writeFile(path, JSON.stringify(writeData), (err) => {
//         if (err) {console.log(err);}
//         onWriteFileDone();
//     });
// }

module.exports = {
    readFile,
    writeFile
}