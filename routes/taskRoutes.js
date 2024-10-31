const taskroutes=(req,res) =>{
    if(req.method=='GET'){
        getTasks(req,res); 
    }
    else if(req.method=='POST'){
        createTask(req,res)  
    }
    else if(req.method == 'PATCH'){
      
        updateTask(req,res)
    }
    else if(req.method == 'DELETE'){
        deleteTask(req,res)
    }
    else{
        res.writehead(404,'not found',{'content_type':'application/json'
        })
        res.end(JSON.stringify({
            message:'unkown method required'
        }))
         
        }
    }

module.exports=taskroutes;