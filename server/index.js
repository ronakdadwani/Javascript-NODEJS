const http = require('http');

const PORT = 3030;
const HOSTNAME = 'localhost';

const server = http.createServer((req , res) =>{

    //Home page
    //About Page
    //Contact page
    //Product page
    //Rest... > Error


    if(req.url== '/'){

        res.statusCode = 200;
        res.setHeader('Content-type' , 'text/plain');
        res.end('Welcome to nodejs server by ronak');
        
    } else if (req.url == '/about') {

        res.statusCode = 200;
        res.setHeader('Content-type' , 'text/plain');
        res.end("About Page");

    } else if (req.url ==  '/contact'){
        res.statusCode = 200;
        res.setHeader('Content-type' , 'text/plain');
        res.end("Contact Page");

    } else if (req.url == '/product'){

        res.statusCode = 200;
        res.setHeader('Content-type' , 'text/plain');
        res.end(JSON.stringify({productname : "Product 1"}));

    } else {
        res.statusCode = 500;
        res.setHeader('Content-type' , 'text/plain');
        res.end("Server Error !");
    }
    // res.end('node Server created  by ronak ')
   
});

server.listen(PORT , () =>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
    
})