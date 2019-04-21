if(document.getElementById('loginform')) {
var loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function(){
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    
    if(username.value == "" || username.value == null){
        alert('Please enter valid username');
        username.focus();
        return false;
    }
    if(password.value == "" || password.value == null){
        alert('Please enter valid password');
        password.focus();
        return false;
    } else if(password.value.length < 6 ) {
        alert('Password must contains at least 6 character');
        password.focus();
        return false;
    }
    window.location = "index2.html?username="+ username.value
});

var resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', function(){
    loginform.reset();
})

}




if(document.getElementById('usernamefilled')){
    var user = document.getElementById('usernamefilled');
    params = [];
    location.search.substr(1).split("?").forEach(function (item) {
        params = item.split("=");
    });
    var usernamefilled = params[1];
    user.innerHTML = usernamefilled;
}

if(document.getElementById('registerform')){

    $( "#dob" ).datepicker();

    var regBtn = document.getElementById("register");

    regBtn.addEventListener('click', function(){
    
        var fname = document.getElementById('fname');
        if(fname.value == "" || fname.value == null){
            alert('Please enter first name');
            fname.focus();
            return false;
        }
        var email = document.getElementById('email');
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var invalidEmal =  regEx.test(String(email.value).toLowerCase());
        if(email.value == "" || email.value == null){
            alert('Please enter email');
            email.focus();
            return false;
        }
         else if(!invalidEmal) {
            alert('Please enter valid email');
            email.focus();
            return false;
        }
        var password = document.getElementById('password');
        if(password.value == "" || password.value == null){
            alert('Please enter password');
            password.focus();
            return false;
        } else if(password.value.length < 6 ) {
            alert('Password must contains at least 6 character');
            password.focus();
            return false;
        }

        var answer = document.getElementById('security-ans');
        if(answer.value == "" || answer.value == null){
            alert('Security answer must be filled');
            answer.focus();
            return false;
        }

       


        document.getElementById('registerform').style.display = 'none';
    
        document.getElementById('sucess-msg').style.display = 'block';

    });

        var checkaddress = document.getElementById('checkaddress');    
        checkaddress.addEventListener('change', function(){
        if(checkaddress.checked){
            document.getElementById('perm-address').style.display = "none";
        } else {
            document.getElementById('perm-address').style.display = "block";
        }
    })
}


