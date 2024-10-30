const taskRoutes = (req,res) => {
    if (req.method === 'GET'){
        getTasks(req,res);
    } else if(req.method === 'POST'){
        createTask(req,res)
    } else if(req.method ==='PATCH'){
        updateTask(rq,res)
    } else if(req.method === 'Delete'){
        deleteTask(req,res)
    }
    else {
        res.writeHead(404, 'date not found ', {'content-type': 'application/json'})
        res.end(JSON.stringify({
            message: "unknown method required."
        }))
    }
}
module.exports = taskRoutes;