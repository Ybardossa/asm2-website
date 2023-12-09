
let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("Login");


function checkLogin(user, pass) {
    if ((user == "pp") && (pass == "123456"))
    {
        
        alert("Login success");
        window.location.href="index.html";

    }
    else
    {
       
        alert("Wrong login credentials")
        username.value = "";
        password.value = "";
    }
}


    window.onload = (event) => {
loginBtn.addEventListener("click", function(){
    let user = username.value;
    let pass = password.value;
    checkLogin(user,pass);
});
}
const registerButton = document.getElementById('Register');

registerButton.addEventListener('click', () => {
  window.location.href = 'register.html';
});