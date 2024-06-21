let html = "<tr><th></th>";
for (let x = 1; x <= 99; x++) {
    html += '<th>' + x + '</th>';
}
html += '</tr>';

for (let y = 1; y <= 99; y++) {
    html += '<tr><th>' + y + '</th>';
    for (let x = 1; x <= 99; x++) {
        html += '<td>' + x * y + '</td>';
    }
    html += '</tr>';
}

let elem = document.querySelector('table');
elem.innerHTML = html;