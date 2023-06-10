let form = document.querySelector("form");

let usernameError = ""

let userInfo = {};

function doescontainNum(str){
return str.split("").some(e=>Number(e));
}


function handleform(event){
event.preventDefault();
//console.dir(event.target)
let  username = event.target.elements.username
let parentElm = username.parentElement
console.log(username);
if(username.value === ""){
    usernameError = "can't be empty!"
    parentElm.classlist.add("error");
}else if(username.value.length>5){
usernameError = "can't be less than five character"
parentElm.classlist.add("error");
}else if(!doescontainNum(username.value)){
usernameError = "Must contains at least one number"
parentElm.classlist.add("error");
}else{

    usernameError = ""
    parentElm.classlist.add("success");
    parentElm.classlist.remove("error");
}

username.nextElementSibling.innerText = usernameError;
}




form.addEventListener("submit",handleform)



