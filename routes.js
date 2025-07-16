const http = require('http');
const server= http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('welcome to Gomathi Traders');
    }else if(req.url === '/about'){
        res.end('About us,here good product are available in healthy');
    }else if(req.url === '/contact'){
        res.end('contact page,panrutti,sathipattu');
    }else {
        res.statuscode=404;
        res.end('page not found');
    }
    });
    server.listen(3000);