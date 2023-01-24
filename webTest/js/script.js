function bookform(){
    var name = document.getElementById("name").value; 
    var email = document.getElementById("email").value; 
    var contact = document.getElementById("contact").value;
    var add = document.getElementById("add").value;  
         if(name=="" && email=="" && contact=="" && add ==""){
            //alert();
            document.getElementById("head").innerHTML="Booking Form Error";
            document.getElementById("mbody").innerHTML="Please fill the form correctly";
            document.getElementById("head").style.color ="red";
            document.getElementById("mbody").style.color ="red";
        }
        else if(name!="" && email!="" && contact!="" && add!=""){
            document.getElementById("head").innerHTML="Thank you!!";
            document.getElementById("mbody").innerHTML="Your filled form !!";
            document.getElementById("head").style.color ="GREEN";
            document.getElementById("mbody").style.color ="GREEN";
        }
    }

    