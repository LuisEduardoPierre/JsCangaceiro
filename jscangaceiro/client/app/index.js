var fields = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(fields)

var tbody = document.querySelector('table tbody')

document.querySelector('.form').addEventListener('submit', function(event){
    debugger
    event.preventDefault()
    var tableRow = document.createElement('tr')

    fields.forEach(function(field) {
        var tableData = document.createElement('td');

        tableData.textContent = field.value;
        tableRow.appendChild(tableData);
    })

    var tableDataVolume = document.createElement('td');
    tableDataVolume.textContent = fields[1].value * fields.value;

    tableRow.appendChild(tableDataVolume)
});
