const http = require('http');

const server = http.createServer((req , res)=>{
    if(req.url == '/'){
        res.write('<h1> Hello Node.js </h1>');
    } else if (req.url == '/about'){
        res.write('<h1>About Page</h1>');
        res.write('<p> lorem50 </p>');
    }

    res.end();
})

server.listen(500);

console.log("THe HTTP server is running on port 500");


