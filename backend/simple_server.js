const http= require('http')

const server= http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.writeHead(200,{'Content-Type': 'text/plain'})
        res.end('Hello World');
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
})

const port=3000
server.listen(port,()=>{
    console.log(`server running on port ${port}`)
})