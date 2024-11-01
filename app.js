const http = require('http');
const taskroutes = require('./routes/taskroutes');
const PORT = 9000;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/task')) {
        taskroutes(req, res);
    } else {
        res.writeHead(404, 'Not Found', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Sorry, you got lost!'
        }));
    }
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on port ${PORT}`);
});



