const http = require('http');
const taskRoutes = require('./taskRoutes');

const HOSTNAME = 'localhost';
const PORT = 9000;

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/task')) {
        taskRoutes(req, res);
    } else {
        res.writeHead(404, 'Not found', {'content-type': 'application/json'});
        res.end(JSON.stringify({
            message: 'Sorry, you got lost'
        }));
    }
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on port ${PORT}`);
});
