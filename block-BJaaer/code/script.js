let form = document.querySelector("form");




let userInfo = {};

function handleform(event){
event.preventDefault();

userInfo.name = form.elements.name.value;
userInfo.email = form.elements.email.value;
userInfo.activity = form.elements.activity.value;
userInfo.color = form.elements.color.value;
userInfo.terms = form.elements.terms.checked;
userInfo.rating = form.elements.rating.value

}

console.log(userInfo);


form.addEventListener("submit",handleform)


