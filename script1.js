function reset(){
   /* document.getElementById('formData').reset();*/
   document.getElementById("fname").value = " ";
   document.getElementById("mname").value =" ";
   document.getElementById("lname").value = " ";
   document.querySelector('input[name="gender"]:checked').checked = false;
   document.getElementById("sugg").value = " ";
}

function validate(){
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mname = document.getElementById("mname").value;
    var sugg = document.getElementById('sugg').value;
    var gender = document.getElementsByName('gender');
    for(var i = 0;i<gender.length;i++){
        if(gender[i].checked){
           var gen = gender[i].value;
        }
    }
    
    
    var flag = true;
    if(gen == "Male"){
        var g = "Mr.";
    }
    else{
        var g = "Ms.";
    }
    if(fname == ""){
        alert("Please Enter first name");
        flag = false;
        return;
    }
    if(lname == ""){
        alert("Please Enter last name");
        flag = false;
        return;
    }
    if(sugg == ""){
        alert("please enter suggestions");
        flag = false;
        return;
    }
    
    if(flag){
        document.getElementById('display').innerHTML += `${g} ${fname} ${mname} ${lname} says ${sugg}<br><hr><br><br>`;
    }


        
}
