// turning off Data content Display to None
function onload()
{
    document.getElementById("data").style.display="none";
}

function show()
{
    document.getElementById("data").style.display="block";
    document.getElementById("u").innerHTML=document.getElementById("userName").value;
    document.getElementById("p").innerHTML=document.getElementById("passWord").value;
    document.getElementById("e").innerHTML=document.getElementById("Email").value;
    document.getElementById("db").innerHTML=document.getElementById("dob").value;
    document.getElementById("c").innerHTML=document.getElementById("clg").value;
    document.getElementById("cn").innerHTML=document.getElementById("Course").value;
}
