const { error } = require('console')
const fs = require('fs')
const path = require('path')

// fs.readFile("new.html",'utf8',(error,data)=>{
//     if(data){
//         console.log("data",data)
//     }else{
//         console.log("error",error)
//     }
// })

// fs.mkdir('example-dir', { recursive: true }, (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//     } else {
//         console.log('Directory created successfully!');
//     }
// });
// fs.rmdir('example-dir', (err) => {
//     if (err) {
//         console.error('Error deleting directory:', err);
//     } else {
//         console.log('Directory deleted successfully!');
//     }
// });


// Create a file and write content
// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     if (err) throw err;
//     console.log('File created and content written.');
// });

// fs.mkdir('myAsyncFolder', { recursive: true }, (err) => {
//     if (err) throw err;
//     const filePath = path.join('myAsyncFolder', 'example.txt');
//     fs.writeFile(filePath, 'Asynchronous file creation!', (err) => {
//         if (err) throw err;
//         console.log('File created inside folder asynchronously.');
//     });
// });

const http = require('http')
// const path = require('path')
const filepath = path.join(__dirname,'newfile.html')
const server = http.createServer((req,res)=>{
    
    fs.readFile(filepath,'utf8',(error,data)=>{
        res.end(data)
    })
})
server.listen(4000)
// fs.writeFile("newfile.html","hallow",(error,data)=>{
//     if(error){
//         console.log("error",error);
        
//     }else{
//         console.log('file created',data);
        
        
//     }
// })
