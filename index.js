function signIn(){
    const loginBtn = document.querySelector(".login-button");
    const usernameInput = document.querySelectorAll("input")[0];
    const passwordInput = document.querySelectorAll("input")[1];

    loginBtn.addEventListener("click", function () {

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if(username === "admin" && password === "admin123"){
            localStorage.setItem("loggedIn", "true");
            window.location.href = "home.html";

        }else{
            alert("Invalid Username or Password");
        }

    });

};