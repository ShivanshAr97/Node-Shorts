const fs = require('fs')
// const data = fs.readFileSync("write.txt", 'utf-8' )
// console.log(data)
// console.log("done")

fs.readFile("write.txt", 'utf-8', (err,data)=>{
    console.log(data)
} )
console.log("done")
