console.log("akash");

function check(){
    var isEmpty = false;
var fname = document.getElementById("validationCustom01").value,
        lname = document.getElementById("validationCustom02").value,
        email = document.getElementById("validationCustomUsername").value,
        city = document.getElementById("City").value,
        state = document.getElementById("validationCustom04").value,
        gender = document.getElementById("gender").value,
        // gender = document.getElementById("inlineCheckbox2").value,
        // favcolor = document.getElementById("favcolor").value,
        message = document.getElementById("textarea").value;
        
        if(fname==""){
            alert("enter your firstname");
            isEmpty=true;
        }
        else if (lname==""){
            alert("enter your last name");
            isEmpty=true;
        }
        else if (email==""){
            alert("enter your last email");
            isEmpty=true;
        }
        else if (city==""){
            alert("enter your last city");
            isEmpty=true;
        }
        else if (state==""){
            alert("enter your last state");
            isEmpty=true;
        }
        else if (message==""){
            alert("enter your last message");
            isEmpty=true;
        }
        else if (gender==""){
            alert("enter your last message");
            isEmpty=true;
        }
        return isEmpty;
    }

function submitkro(){
    
    if (!check()){
        var table = document.getElementById("table");
    var newrow = table.insertRow(table.length);
        cell1 = newrow.insertCell(0),
        cell2 = newrow.insertCell(1),
        cell3 = newrow.insertCell(2),
        cell4 = newrow.insertCell(3),
        cell5 = newrow.insertCell(4),
        cell6 = newrow.insertCell(5),
        cell7 = newrow.insertCell(6),
        cell8 = newrow.insertCell(7);
        var fname = document.getElementById("validationCustom01").value,
        lname = document.getElementById("validationCustom02").value,
        email = document.getElementById("validationCustomUsername").value,
        city = document.getElementById("City").value,
        state = document.getElementById("validationCustom04").value,
        // gender = document.getElementById("inlineCheckbox1").value,
        // gender = document.getElementById("inlineCheckbox2").value,
        // favcolor = document.getElementById("favcolor").value,
        message = document.getElementById("textarea").value;

    
    cell1.innerHTML = fname;
    console.log(cell1);
    cell2.innerHTML= lname;
    cell3.innerHTML= email;
    cell4.innerHTML= city;
    cell5.innerHTML= state;
    cell8.innerHTML= message;
    
    // console.log("works");

    var typeg= document.getElementsByName("typeg");
    if(typeg[0].checked)
    {
        cell6.innerHTML="male";
    }
    else if (typeg[1].checked)
    {
        cell6.innerHTML="female";
    }

    var typec= document.getElementsByName("typec");
    if(typec[0].checked)
    {
        cell7.innerHTML="red";
    }
    else if (typec[1].checked)
    {
        cell7.innerHTML="blue";
    }


    document.getElementById("form").reset();
    }
    // var reset = document.getElementById("subBtn");
    // reset.addEventListener("click",function(e){
    //     var form= document.getElementById("form");
    //     form.reset();
}

// function submitkro(){
//     console.log("yeh gender ke liye hai");
// }