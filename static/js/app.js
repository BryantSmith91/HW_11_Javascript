// from data.js
var tableData = data


var tbody = document.querySelector("tbody")
var inputedDate = document.querySelector('#datetime')
var searchButton = document.querySelector('#filter-btn')
var resetButton = document.querySelector('#reset-btn')

searchButton.addEventListener('click', handleSearch)
resetButton.addEventListener('click', handleReset)

function makeTable() {

    // removes all data from table befopre loading more data to table
    d3.selectAll("tr").remove()

    for (var i = 0; i < tableData.length; i++) {
        var report = tableData[i]
        var fields = Object.keys(report)
        var row = tbody.insertRow(i)

        // Leftovers from figuring this out
        // firstElement = Object.values(report)[0]
        // console.log(firstElement)

        for (var j = 0; j < fields.length; j++) {
            var field = fields[j]
            var cell = row.insertCell(j)
            cell.innerText = report[field]
        }
    }
}

function handleSearch() {

    event.preventDefault()

    var filterDate = inputedDate.value.trim()
    tableData = data.filter(function(report) {
        var filterExport = report.datetime
        console.log(filterDate)
        return filterExport === filterDate
    })

    makeTable()
}

// Function resets table to it's default state upon loading the page.
function handleReset() {
    event.preventDefault()
    tableData = data
    makeTable()
}

makeTable()







//IDK IF I'LL DO LEVEL 2 LET'S SEE.
// ### Level 2: Multiple Search Categories (Optional)
// * Complete all of Level 1 criteria.
// * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:
//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`
// - - -