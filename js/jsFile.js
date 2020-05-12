function countryCheck() {
    if (document.getElementById('canada').checked) {
        document.getElementById('canadas').style.visibility = 'visible';
        document.getElementById('uss').style.visibility = 'hidden';
    } else if (document.getElementById('us').checked) {
        document.getElementById('uss').style.visibility = 'visible';
        document.getElementById('canadas').style.visibility = 'hidden';
    } else if (document.getElementById('other').checked){
        document.getElementById('canadas').style.visibility = 'hidden';
        document.getElementById('uss').style.visibility = 'hidden';
    }
}

function characterNumberCheck(){
    var namevalue = document.getElementById("fullname");
    if (namevalue.value.length > 5) {
        document.getElementById("name").style.borderColor = "green";
        }
    if (namevalue.value.length < 5) {
        document.getElementById("name").style.borderColor = "red";
        }
}
function checkEmailNumber(){
    var emailvalue = document.getElementById("email");
    if (emailvalue.value.length > 8) {
        document.getElementById("inputemail").style.borderColor = "green";
    }
    if (emailvalue.value.length < 5) {
        document.getElementById("inputemail").style.borderColor = "red";
    }
}

