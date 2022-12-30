const http = require ('http');
const fs = require('fs');
const { default: reviews } = require('./apiSection');

const server = http.createServer((req, res)=>{
    // console.log(req.url)
    if (req.url=="/") {
        res.end("Hello home")
    }
    else if(req.url=='/about'){
        res.end("Hello about")
    }
    else if(req.url=='/contact'){
        res.end("Hello contact")
    }
    else if(req.url=='/api'){
        fs.readFile(`${__dirname}/apiSection.json`, "utf-8", (err,data)=>{
            console.log(data);
            res.end(data)
        })
    }
    else{
        res.writeHead(404)
        res.end("Hello page does not exist")
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening on port 8000")
})