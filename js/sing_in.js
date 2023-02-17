const inputUsername = document.querySelector("#Username");
const inputPassword = document.querySelector("#Password");
const button = document.querySelector(".sing-up");

const userNameError = document.querySelector(".usernameError");
const passwordError = document.querySelector(".passError");

class UserData{
    constructor(data){
        this.data = data;
    }
    setUsername(username = ""){
        if (Send.getOutLocalStorage(username) == null){
            inputUsername.classList.add("input-error");
            userNameError.textContent = "Аккаунта с таким именем не существует!";
        }
        else {
            inputUsername.classList.remove("input-error");
            userNameError.textContent = "";
            this.data.name = username;
        }
    }    
    setPassword(password = ""){
        if (Send.getOutLocalStorage(this.data.name).password !== password){
            inputPassword.classList.add("input-error");
            passwordError.textContent = "Неверный пароль";
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
    password: ""
}) 
inputUsername.addEventListener("input", e => {
    userData.setUsername(inputUsername.value);  
})
inputPassword.addEventListener("input", e => {
    userData.setPassword(inputPassword.value);
})
button.addEventListener("click", e => {
   if (userData.data.name === "" || userData.data.password === ""){
        e.preventDefault();
   }
})