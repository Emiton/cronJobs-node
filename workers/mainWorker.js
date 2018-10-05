// Just import cronJobs, not the whole lib
const CronJob = require('cron').CronJob;

// Create an instance of a cron job
//CronJob(time, onTick, onComplete, start, timeZone )
const mainWorker = new CronJob('*/5 * * * * *', function() {
    console.log("You will see this message each second in the console")
}, null, false, "America/New_York");

module.exports = mainWorker;