let teams = ['A', 'B', 'C', 'D', 'E'];
let html = "<tr><th></th>";

for (let i = 0; i < teams.length; i++) {
    html += '<th>' + teams[i] + '</th>';
}
html += '</tr>';

for (let i = 0; i < teams.length; i++) {
    html += '<tr><th>' + teams[i] + '</th>';
    for (let j = 0; j < teams.length; j++) {
        if (i === j || i > j) {
            html += '<td></td>';
        } else {
            html += '<td>' + teams[i] + ' vs ' + teams[j] + '</td>';
        }
    }
    html += '</tr>';
}

let elem = document.querySelector('table');
elem.innerHTML = html;