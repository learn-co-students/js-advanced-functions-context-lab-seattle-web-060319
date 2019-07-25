/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(arr) {
    let employee = {}
    employee.firstName = arr[0]
    employee.familyName = arr[1]
    employee.title = arr[2]
    employee.payPerHour = arr[3]
    employee.timeInEvents = []
    employee.timeOutEvents = []
    return employee
}

function createEmployees(arg) {
    let newArr = []
    arg.forEach(employee => {
    newArr.push(createEmployeeRecord(employee))
})
return newArr
}

function createTimeInEvent(str) {
    let time = str.split(' ')
    let day = time[0]
    let hour = parseInt(time[1])
    this.timeInEvents.push({type: "TimeIn", hour: hour, date: day})
    return this
}

function createTimeOutEvent(str) {
    let time = str.split(' ')
    let day = time[0]
    let hour = parseInt(time[1])
    this.timeOutEvents.push({type: "TimeOut", hour: hour, date: day})
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(obj => obj.date === date)
    let timeOut = this.timeOutEvents.find(obj => obj.date === date)
    let hoursWorked = (timeOut.hour - timeIn.hour)/100
    return hoursWorked
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    let pay = hours * this.payPerHour
    return pay
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(arr) {
    let rawWages = arr.map(employee => allWagesFor.call(employee))
    let reducer = (acc, curr) => acc + curr
    let totalWages = rawWages.reduce(reducer)
    return totalWages
}

function findEmployeebyFirstName(arr, firstName) {
    let employee = arr.find(employee => {
        return employee.firstName == firstName
    })

  return employee
}


function createEmployeeRecords(arr) {
let newEmployees = []
arr.forEach(employee => newEmployees.push(createEmployeeRecord(employee)))
return newEmployees
}