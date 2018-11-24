const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 18 * * 6", function(){
    console.log("Executando tarefa1", new Date().getSeconds());
});

setTimeout(function () {
    tarefa1.cancel()
    console.log("cancelando tarefa 1");

}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1,5)];
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduledJob(regra, function() {
    console.log("Executando tarefa 2", new Date().getSeconds());
});