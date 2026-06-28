function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

function validateForm(){

    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;

    if(name=="" || phone==""){
        alert("Fill all fields");
        return false;
    }

    alert("Application Submitted Successfully");   
    return true;  
}
