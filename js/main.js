const inputUsername = document.querySelector("#Username");
const inputEmail = document.querySelector("#Email");
const inputPassword = document.querySelector("#Password");
const button = document.querySelector(".sing-up");

const userNameError = document.querySelector(".usernameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passError");

class UserData{
    constructor(data){
        this.data = data;
    }
    setUsername(username = ""){
        if (username.length < 4){
            inputUsername.classList.add("input-error");
            userNameError.textContent = "Минимальная длинна имени: 4 символа";
        }
        else if (Send.getOutLocalStorage(username) != null){
            inputUsername.classList.add("input-error");
            userNameError.textContent = "Аккаунт с таким именем уже существует!";
        }
        else {
            inputUsername.classList.remove("input-error");
            userNameError.textContent = "";
            this.data.name = username;
        }
    }    
    setEmail(email = ""){
        if (email.indexOf("@email.com") == -1){
            inputEmail.classList.add("input-error");
            emailError.textContent = "Введите корректную почту";
        }
        else {
            inputEmail.classList.remove("input-error");
            emailError.textContent = "";
            this.data.email = email;
        }
    }
    setPassword(password = ""){
        if (password.length < 8){
            inputPassword.classList.add("input-error");
            passwordError.textContent = "Минимальный размер пароля: 8 символов!";
        }
        else {
            inputPassword.classList.remove("input-error");
            passwordError.textContent = "";
            this.data.password = password;
        }
    }
}
class Send{
    constructor(userData){
        this.userData = userData;
    }
    setToLocalStorage(){
        localStorage.setItem(`ACCOUNT ${this.userData.data.name}`, JSON.stringify(this.userData.data));
    }
    static getOutLocalStorage(username){
        return JSON.parse(localStorage.getItem(`ACCOUNT ${username}`));
    }
}
const userData = new UserData ({
    name: "",
    email: "",
    password: ""
}) 
inputUsername.addEventListener("input", e => {
    userData.setUsername(inputUsername.value);  
})
inputEmail.addEventListener("input", e => {
    userData.setEmail(inputEmail.value);  
})
inputPassword.addEventListener("input", e => {
    userData.setPassword(inputPassword.value);
})
button.addEventListener("click", e => {
    const send = new Send(userData);
    send.setToLocalStorage();
    if (userData.data.name === "" || userData.data.password === ""){
        e.preventDefault();
    }
})