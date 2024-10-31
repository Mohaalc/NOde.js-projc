const fs = require('fs');
const path = require('path');

const filePath = './data/tasks.json';

exports.writeTasksToFile = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
};

exports.readTasksFromFile = () => {
    if (!fs.existsSync(filePath)) {
        exports.writeTasksToFile([]);  // Use `exports` to refer to the function
    }

    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};
