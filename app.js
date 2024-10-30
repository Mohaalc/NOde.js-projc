const http = require('http');
const taskRoutes = require('./taskRoutes');
const { Console } = require('console');

const HOSTNAME = 'localhost'
const PORT = 9000
const  server = http.createServer((req ,res) => {
    if (req.url.startsWith('/task')){
        taskRoutess(req,res)
    } else {
        res.writeHead(404, 'not found',{'content-type' : 'application/json'})
        res.end(JSON.stringify({
            message:'sorry, you got lost'
        }))
    }
});
server,listen(PORT,HOSTNAME, () =>{
    Console.log ('server running on port ${PORT} ')
})