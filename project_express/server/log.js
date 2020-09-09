const fs = require('fs');
const moment = require('moment');

const logger = (action, id, date) => {

    const logfile = {action: action, id: id, date: date};

    fs.readFile('logfile.json', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        const log = JSON.parse(data);
        log.push(logfile);
            fs.writeFile('logfile.json', JSON.stringify(log), (error) => {
            if (error) {
                console.log(error);
            }
        });
    }
    });
}

module.exports = {
    logger,
};
  