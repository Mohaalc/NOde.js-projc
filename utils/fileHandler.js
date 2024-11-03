const fs=require('fs');
const path=require('path');
const filepath='./data/tasks.json';
exports. writetaskTofile=(tasks)=>{
  fs.writeFileSync(filepath,JSON.stringify(tasks,null,2));   
}
exports. readTasksFromFile =()=>{
    if(! fs.existsSync(filepath)){
       this.writetaskTofile([])
    }
    const data =fs.readFileSync(filepath);
    return JSON.parse(data)
}