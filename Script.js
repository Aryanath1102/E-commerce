function checkpassword(){
    let Password=document.getElementById("Password").value;
    let confirmPassword= document.getElementById("Confirm-Password").value;
    console.log(Password,confirmPassword);
    let message=document.getElementById("message");
    if(Password.length  !=0){
        if(Password==confirmPassword){
        message.textContent="Password Match";
        message.style.backgroundColor="green"}
    else{
        message.textContent="Password does not match";
        message.style.backgroundColor="red";
    }

    }
}
