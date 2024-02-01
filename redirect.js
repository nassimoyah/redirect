 const fs = require('fs')
const http = require('http');  
// req comes with tones of informations about the the request , such as the url , request type , post get ...
 //res , sending a response to the browser 
const server = http.createServer((req,res) => {
    console.log(req.url, req.method); 

    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break; 
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;

            
    }


    // set header content type 
    res.setHeader('content-type', 'text/html');
    // send an html file 
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data); 
            res.end();
        }

    }
    )
    
});

server.listen(3000, 'localhost', () => { // 3000 port number 
    console.log('listening for request on port 3000 ')
})
