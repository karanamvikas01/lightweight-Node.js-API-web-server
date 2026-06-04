const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
        message: "Docker exercise successful!", 
        status: "Running inside a container" 
    }));
});

server.listen(3000, () => {
    console.log('Server is tracking on port 3000');
});
