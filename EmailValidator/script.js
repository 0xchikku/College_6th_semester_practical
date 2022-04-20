function emailValidator(){
    var reg = /^([A-Za-z0-9_/-/.])+\@([A-Za-z0-9_/-/.])+\.([A-Za-z]{2,4})$/;
    var address = document.getElementById("email").value;
    if(reg.test(address)==false){
        alert("Invalid Email Id");
    }else{
        alert('Valid Email Id');
    }
}

function reset(){
    document.getElementById('email').value = '';
}