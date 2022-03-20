let result = "<table border='2'><tr><th>Square</th><th>Cube</th><th>Square Root</th></tr>";

for(let i = 0; i <= 100; i++){
  let row = "<tr><td>" + (i*i) + "</td><td>" + (i*i*i) + "</td><td>" + Math.sqrt(i) + "</td></tr>";
  result += row;
}

result += "</table>";

let table = document.getElementById('table');
table.innerHTML = result;