let user="";
let pass;
function addacc() {//this is for signing up :)
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let usernameregex = /^[A-Za-z0-9_.]+@[A-Za-z]+\.[a-z]{2,6}$/;
    if (!usernameregex.test(username)) {
        alert("Enter Valid Email ID ");
        return false;
    }
    let passwordregex = /^[A-Za-z0-9_.%$#&@]{4,}$/;
    if (!passwordregex.test(password)) {
        alert("Enter Valid Password ");
        return false;
    }

    if (localStorage.getItem(username)) {
        alert("Account Already Exists");
        return false;
    } else {
        localStorage.setItem(username, password);
        alert("Account created successfully!");
        return true;
    }
    return true;
}

function validate() {//this is for the login :)
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let usernameregex = /^[A-Za-z0-9_.]+@[A-Za-z]+\.[a-z]{2,6}$/;
    if (!usernameregex.test(username)) {
        alert("Enter Valid Email ID ");
        return false;
    }
    let passwordregex = /^[A-Za-z0-9_.%$#&@]{4,}$/;
    if (!passwordregex.test(password)) {
        alert("Enter Valid Password ");
        return false;
    }

    if (localStorage.getItem(username) !== password) {
        alert("Invalid Username Or Password");
        return false;
    }
    alert("Login successful!");
    user=username;
    pass=password;
    return true;
}

list=['hi','hello','nah'];
let textindex=0;
let charindex=0;
let currenttext="";
let deletetext = false;
const delaybetween = 1000;
const typespeed = 100;
const backspacespeed=100;

function typetext()
{
    const dynamictext = document.getElementById("dynamic-text");

    if(deletetext){
        currenttext=list[textindex].substring(0,charindex-1);
        charindex--;
    }
    else{
        currenttext=list[textindex].substring(0,charindex+1);
        charindex++;
    }

    dynamicTextElement.innerHTML=currenttext;

    if(!deletetext && charindex === list[textindex].length){
        deletetext=true;
        setTimeout(typetext,delaybetween);
    }
    else if(deletetext && charindex === 0){
        deletetext=false;
        setTimeout(typetext,typespeed);
    }
    else{
        speed = deletetext ? typespeed : backspacespeed;
        setTimeout(typetext,speed);
    }
}

