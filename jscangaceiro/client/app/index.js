let fields = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

let tableBody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){

    event.preventDefault();
    let tableRow = document.createElement('tr');

    fields.forEach(function(field) {
        let tableData = document.createElement('td');

        tableData.textContent = field.value;
        tableRow.appendChild(tableData);
    })
    debugger    
    let tableDataVolume = document.createElement('td');
    tableDataVolume.textContent = fields[1].value * fields[2].value;
    console.log(tableDataVolume);
    tableRow.appendChild(tableDataVolume);

    tableBody.appendChild(tableRow);

    fields[0].value = '';
    fields[1].value = 1;
    fields[2].value = 0;
    fields[0].focus();
});
