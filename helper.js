var expressWinston = require('express-winston');
var winston = require('winston');
const moment = require('moment')
require('winston-mongodb')

expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');


const log = () => expressWinston.logger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true,
            level: 'info',
            handleExceptions: true,
        }),
        new winston.transports.File({
            name: 'logiboltt',
            filename: 'winston.log',
            level: 'debug',
            maxsize: 5242880, //5MB
            maxFiles: 10,
            json: true,
            colorize: true
        }),
        
    ],
    exitOnError: false,
    meta: true,
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
})

module.exports = {
    log
}