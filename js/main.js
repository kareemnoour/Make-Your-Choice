const input = document.querySelector("input");
const btn = document.getElementById("btn");

console.log(input.value) 

btn.onclick = () => {
    let theName = sessionStorage.setItem("username", JSON.stringify(input.value));
    let user = sessionStorage.getItem("username");
    window.location.assign("./theGame.html");  
}
