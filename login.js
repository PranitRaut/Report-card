function login(){

    u_name = document.getElementById("username").value;
    u_pwd = document.getElementById("password").value;

    if(u_name == "admin" && u_pwd == "admin@12345"){

        window.open("index.html")
    
    }else
    {

        alert("Check Password And Login Again...")
    }


}