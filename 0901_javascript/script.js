let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

let employees = [
    {
        name: 'James',
        age: 21,
        country: 'U.S.A',
        sex: 'male'
    },
    {
        name: 'Rony',
        age: 31,
        country: 'Korea',
        sex: 'female'
    },
    {
        name: 'Peter',
        age: 27,
        country: 'Japan',
        sex: 'male'
    },
    {
        name: 'Marks',
        age: 29,
        country: 'U.S.A',
        sex: 'male'
    }
]

let headers = ['Names','Age','Country','Sex'];

btnGet.addEventListener('click', () => {

    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    employees.forEach(emp => {

        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);

    });

    myTable.appendChild(table);

});