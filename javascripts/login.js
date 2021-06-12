function login()
{
var uname=document.getElementById("uname").value;
var pswd=document.getElementById("password").value;
var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if ( uname == "" && pswd == "")
{
alert ("please Enter Username and password");
location.href = "www.yoursite.com";
}
else if (pswd =="")
{
alert ("Please Enter Password.");
}
else if (uname == "admin" && pswd == "admin")
{
//location.replace("notimplemented.html");
location.href ="notimplemented.html";
//alert ("Thank You for Login & You are Redirecting to Admin Home page");

}

}

function adminlogin()
{
  location.href="adminlogin.html";
}

function createservice() {
  location.href="createservices.html";
}
