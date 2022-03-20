

function view(num){
    document.getElementById('result').value += num;
}

function compute(){
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
}

function clear(){
    document.getElementById('result').value = "";
}