const { IncomingForm } = require('formidable');
const { readTasksFromFile, writeTasksToFile } = require("../utils/fileHandler");
const { copyFileSync } = require('fs');
const path = require('path');

exports.getTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(tasks));
};

exports.createTask = (req, res) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.writeHead(400, {'content-type': 'application/json'});
            res.end(JSON.stringify({
                message: 'Error parsing form'
            }));
            return;
        }
        const tasks = readTasksFromFile();
        const newTask = {
            id: Date.now(),
            title: fields.title,  // Adjusted to use title from fields
            description: fields.description || '',
            status: fields.status || 'pending',
            image: files.image ? `/uploads/${files.image.name}` : null,  // Use files.image
        };
        tasks.push(newTask);
        writeTasksToFile(tasks);

        if (files.image) {
            copyFileSync(files.image.path, path.join(__dirname, '../uploads', files.image.name));
            res.end(JSON.stringify(newTask));
        } else {
            res.end(JSON.stringify(newTask));
        }
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
