const http = require ('http');

const server = http.createServer((req, res)=>{
    console.log(req.url)
    if (req.url=="/") {
        res.end("Hello home")
    }
    else if(req.url=='/about'){
        res.end("Hello about")
    }
    else if(req.url=='/contact'){
        res.end("Hello contact")
    }
    else{
        res.writeHead(404)
        res.end("Hello page does not exist")
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening on port 8000")
})