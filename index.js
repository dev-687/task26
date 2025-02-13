
const http =require('http')
const fs =require("fs")
const port=3000;
const hostname="localhost";
const home =fs.readFileSync("./index.html")
const about =fs.readFileSync("./about.html")
const contact =fs.readFileSync("./contact.html")
const server= http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=='/'){
        res.end(home)
    }else if(req.url=='/about')
    {
        res.end(about)
    }
    else if(req.url=='/contact')
        {
            res.end(contact)
        }
    else{
        res.end("<h1>404! Page Not Found</h1>")
    }
})

server.listen(port,hostname,()=>{
    console.log(`server is working on http://${hostname}:${port}`);
    
})
