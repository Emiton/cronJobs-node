// Just import cronJobs, not the whole lib
const CronJob = require('cron').CronJob;
const adder = require('../test');

// Create an instance of a cron job
//CronJob(time, onTick, onComplete, start, timeZone )
const adderWorker = new CronJob('* * * * * *', function(num) {
    // will cause it to run once and stop
    this.stop();
    adder(num);
}, null, false, "America/New_York");

module.exports = adderWorker;