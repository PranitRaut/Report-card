function result(){

    Name = document.getElementById("Name").value;
    rollnumber = document.getElementById("rollnumber").value;
    java = document.getElementById("java").value;
    cpp = document.getElementById("cpp").value;
    jsp = document.getElementById("jsp").value;
    python = document.getElementById("python").value;
    sql = document.getElementById("sql").value;


    total = +java + +cpp + +jsp + +python + +sql;

    per = total/500*100;

    document.getElementById("p_name").innerHTML = Name;
    document.getElementById("p_roll").innerHTML = rollnumber;

    document.getElementById("p_java").innerHTML = java;
    document.getElementById("p_cpp").innerHTML = cpp;
    document.getElementById("p_jsp").innerHTML = jsp;
    document.getElementById("p_python").innerHTML = python;
    document.getElementById("p_sql").innerHTML = sql;

    document.getElementById("total").innerHTML = total;
    document.getElementById("per").innerHTML = per;


}