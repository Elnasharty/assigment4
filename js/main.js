let SignUpNameInput =document.getElementById("SignUpNameInput")
let SignUpEmailInput =document.getElementById("SignUpEmailInput")
let SignUpPasswordInput =document.getElementById("SignUpPasswordInput")
let SignUpMassage =document.getElementById("SignUpMassage")
let signUpButton =document.getElementById("signUpButton")
let userArray =[]


if(localStorage.getItem("userArray")!=null)
{userArray =JSON.parse(localStorage.getItem("userArray"))}


function SignUp(){

let user ={username:  SignUpNameInput.value ,
    email: SignUpEmailInput.value , 
    Password: SignUpPasswordInput.value
}
if(user.username =="" || user.email ==""|| user.Password ==""){
    SignUpMassage.innerHTML ="all inputs are required"
}

else if(oldEmail(user.email)==true)
{ 
     SignUpMassage.innerHTML ="Email already exists"
}
else {
    SignUpMassage.innerHTML ="success"
    userArray.push(user)
    localStorage.setItem("userArray" , JSON.stringify(userArray))
}
}

function oldEmail(email) 
{
    for( let i=0 ; i<userArray.length ; i++)
    {if (userArray[i].email == email) 
    return true;
}
return false ;
}
if (signUpButton != null  )
signUpButton.addEventListener("click" , SignUp)

let loginEmailInput  =document.getElementById("loginEmailInput");
let loginPasswordInput =document.getElementById("loginPasswordInput") ;
let loginMassage =document.getElementById("loginMassage");
let loginButton = document.getElementById("loginButton");

function login()
{
if(loginEmailInput.value ==""  ||  loginPasswordInput.value =="" )
{
    loginMassage.innerHTML ="all inputs are required"
}
if(userExist(loginEmailInput.value , loginPasswordInput.value)){
   window.location.href = './home.html'
}else{
    loginMassage.innerHTML ="email or password is incorrect"
}
}
let homeParagraph =document.getElementById("homeParagraph")
function userExist(email,password)
{
  
    for(let i = 0 ; i < userArray.length ; i++)
    { 
        if(userArray[i].email==email && userArray[i].Password==password)
        {
        localStorage.setItem("currentUserName", JSON.stringify(userArray[i].username))
        return true;
        }
    }
  
}

if(loginButton != null  )
loginButton.addEventListener("click", login)

if(homeParagraph != null)
{
homeParagraph.innerHTML =     `welcome ${ JSON.parse(localStorage.getItem('currentUserName'))}`;
}




























