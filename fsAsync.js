const fs = require('fs');
// fs.writeFile("write.txt", "lorem ipsum", (err)=>{
//     console.log(err);
// })
// fs.appendFile("write.txt", "this is sample text", (err)=>{
//     console.log("completed")
// })
fs.readFile("write.txt", "utf-8", (err, data)=>{
    console.log(data)
})