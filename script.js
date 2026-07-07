function Register() {

    var a = document.getElementById('name').value;
    var b = document.getElementById('password').value;



    if (a == "Dipika Paik" && b == 1234) {
        window.alert("Connected!❤️");
    }

    else {
        window.alert("Invalid!");
        window.alert("Please register with the correct username or password!");
    }

}
