flag = false;

function check() {

    // function calls
    
    flag = parenthesis("first_name");
    flag = false;
    flag = parenthesis("last_name");
    flag = false;
    flag = parenthesis("address", 1);
    flag = false;
    flag = parenthesis("gender", 2);
    flag = false;
    flag = parenthesis("dob", 3);
    flag = false;
    flag = parenthesis("email", 4);

    // if all ok, then alert success

    success();

}

function success() {
    if(flag) {
        window.alert("success");
        window.location.href = "index.html";
    }
}

// for first name and last name. group = same regex syntax

function parenthesis(element) {
    
    name = document.getElementById(element).value;
    //console.log(name);
    var regex = /^[a-z]*$/i;
    if(!regex.test(name)) {
        document.getElementById(element).focus();
        window.alert("Entered name is not valid! Please try again");
    } else return true;
}

// function overload for all other validations

function parenthesis(element, flag) {

    if(flag === 2) {

        // for gender 
        
        if(document.getElementById("maleGender").checked) {
            gender = document.getElementById("maleGender").value;
        } else if(document.getElementById("femaleGender").checked) {
            gender = document.getElementById("femaleGender").value;
        } else {
            gender = "other";
        }

        console.log(gender);
    } else if(flag === 3) {

        // for date of birth

        dob = document.getElementById(element).value;
        var regex = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
        // console.log(dob);
        if(!regex.test(dob)) {
            document.getElementById(element).focus();
            window.alert("Entered date of birth is not valid! Please try again");
        } else return true;
    } else if(flag === 4) {

        email = document.getElementById(element).value;
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!regex.test(email)) {
            document.getElementById(element).focus();
            window.alert("Entered email address is not valid! Please try again");
        } else return true;

    } else {

        // for address 

        address = document.getElementById(element).value;
        //console.log(name);
        var regex = /^([a-z][0-9])*.{4,}$/i;
        if(!regex.test(address)) {
            document.getElementById(element).focus();
            window.alert("Entered address is not valid! Please try again");
        } else return true;
    }

}

// to reset all values. quick fix.

function reset() {
    window.location.reload(true);
}