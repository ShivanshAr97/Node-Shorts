const fs= require('fs');
// fs.writeFileSync("write.txt", "lorem ipsum")
// fs.appendFileSync("write.txt", "lorem ipsum")
// fs.writeFileSync("write.txt", "lorem ipsum lorem ipsum")
// const read = fs.readFileSync("write.txt")
// console.log(read)
{/* <Buffer 6c 6f 72 65 6d 20 69 70 73 75 6d 20 6c 6f 72 65 6d 20 69 70 73 75 6d> */}

// const read2 = read.toString()
// console.log(read2)

// fs.renameSync("write.txt", "rewrite.txt")

// console.log(fs.readFileSync("rewrite.txt", "utf8"))

fs.unlinkSync("rewrite.txt")