/* Your Code Here */
let createEmployeeRecord = (arr) => {
    const [firstName, familyName, title, payPerHour] = arr
    const newRecord = Object.assign({}, { firstName }, { familyName }, { title }, { payPerHour }, { timeInEvents: [] }, { timeOutEvents: [] })
    return newRecord
}

let createEmployees = (empArr) => {
    let newRecords = empArr.map(arr => {
        return createEmployeeRecord(arr)
    })
    return newRecords
}

function createTimeInEvent(str) {
    let [date, hour] = str.split(' ')
    let event = {
        type: "TimeIn",
        hour: Number(hour),
        date: date
    }
    this.timeInEvents.push(event)
    return this
}

function createTimeOutEvent(str) {
    let [date, hour] = str.split(' ')
    let event = {
        type: "TimeOut",
        hour: Number(hour),
        date: date
    }
    this.timeOutEvents.push(event)
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let timeIn = this.timeInEvents.find((event) => {
        return event.date == dateStamp
    })
    let timeOut = this.timeOutEvents.find((event) => {
        return event.date == dateStamp
    })

    let hoursWorked = (timeOut.hour - timeIn.hour) / 100
    return hoursWorked
}

function wagesEarnedOnDate(dateStamp) {
    return (hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour)
}

function createEmployeeRecords(arr) {
    let allNew = arr.map(newEmployeeArr => createEmployeeRecord(newEmployeeArr));
    return allNew
}

function findEmployeebyFirstName(srcArray, firstName) {
    let employee = srcArray.find((employee) => {
        return employee.firstName == firstName
    })
    return employee
}

function calculatePayroll(employeesArray) {
    let employees_wages = employeesArray.map(record => {
        return allWagesFor.call(record)
    })
    let rfx = (memo, value) => memo + value
    let payroll = employees_wages.reduce(rfx)
    return payroll
}

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