/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arg){
    return {
        firstName : arg[0],
        familyName : arg[1],
        title : arg[2],
        payPerHour : arg[3],
        timeInEvents : [],
        timeOutEvents : []
    }
}

function createEmployees(array){
    return array.map(arr => createEmployeeRecord(arr))
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    let timeInEvents = {
        type : 'TimeIn',
        date : date,
        hour : Number(hour)
    }
    this.timeInEvents.push(timeInEvents)
    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    let timeOutEvents = {
        type : 'TimeOut',
        date : date,
        hour : Number(hour)
    }
    this.timeOutEvents.push(timeOutEvents)
    return this
}

function hoursWorkedOnDate(dateStamp){
    const timeInHour = this.timeInEvents.find(timeIn => timeIn.date == dateStamp).hour;
    const timeOutHour = this.timeOutEvents.find(timeOut => timeOut.date == dateStamp).hour;
    return (timeOutHour - timeInHour) / 100;
}

function wagesEarnedOnDate(dateStamp) {
    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour;
}   

function createEmployeeRecords(array) {
    return array.map(record => createEmployeeRecord(record));
}

function findEmployeebyFirstName(array, firstName) {
    return array.find(record => record.firstName == firstName);
}

function calculatePayroll(array) {
    return array.map(employeeRecord => employeeRecord.timeInEvents.map(record => wagesEarnedOnDate.call(employeeRecord, record.date)).reduce((a, b) => a + b)).reduce((a, b) => a + b);
}
