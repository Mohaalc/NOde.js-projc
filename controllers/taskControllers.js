const { IncomingForm } = require('formidable');
const { readTasksFromFile, writeTaskToFile } = require("../utils/fileHandler");
const { copyFileSync } = require('fs'); 
const path = require('path'); 

exports.getTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks));
};

exports.createTask = (req, res) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: 'Error parsing form'
            }));
            return;
        }

        const tasks = readTasksFromFile();
        const newTask = {
            id: Date.now(),
            title: fields.title,
            description: fields.description || '',
            status: fields.status || 'pending',
            Image:Image ? `/uploads/${Image.orginfilename}` : null,
        };

        tasks.push(newTask);
        writeTaskToFile(tasks);
        console.log(files.Image.name)

        if (files.Image) {
            copyFileSync(Image.filepath, path.join(__dirname, '../uploads', Image.newfilename));
        }

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newTask));
    });
};

exports.updateTask = (req, res) => {
    res.end(JSON.stringify({
        message: 'Not yet implemented'
    }));
};

exports.deleteTask = (req, res) => {
    res.end(JSON.stringify({
        message: 'Not yet implemented'
    }));
};
