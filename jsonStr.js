const fs = require('fs')

const data = {
    name:"Abc",
    age:19,
    class:12
}

const Json = JSON.stringify(data)
fs.writeFile("write.json", Json, (err)=>{
    console.log("done")
})
fs.readFile("write.json", "utf-8", (err,data)=>{
    console.log(data)
})

const Obj = JSON.parse(Json)
console.log(Obj)