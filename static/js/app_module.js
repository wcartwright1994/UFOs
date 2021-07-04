// import the data from data.js
const tableData = data

// Reference the HTML table using d3
var tbody = d3.select('tbody')
    // use d3.select to tell JS to look for
    // the <tbody> tags in the HTML

// Build Dynamic Tables
function buildTable(data) {
    // Clear vales from existing data table
    tbody.html('');
    // Append <tr> tag for each row in data 
    data.forEach((dataRow) => {
        let row = tbody.append('tr');
        // Loop through each field in data <td> is table data
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
            }
        );
    });
}

// Add filtering functions
function handleClick() {
    let date = d3.select('#datetime').property('value');
    let filterdData = tableData;
    console.log(date);
    console.log(tableData);

    if (date) {
        filterdData = filterdData.filter (
            row => row.datetime === date
            );
        console.log(row.datetime)
    }
    buildTable(filterdData);
}

// Listen for event
d3.selectAll('#filter-btn').on('click',handleClick);

// Build the table when the page loads
buildTable(tableData);