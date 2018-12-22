let form=document.getElementById("fform");
form.addEventListener("submit",event=>{
   let user=form.elements["Name"];
   let userError=document.getElementById("user-errorr");
   let msg=form.elements["Message"];
   let msgError=document.getElementById("msg");
   let email=form.elements["Email"];
   let emailError=document.getElementById("emailerror");
   if(user.value.length <4){
    event.preventDefault();
   userError.textContent="Invalid entry-minimum 5 characters";
   userError.style.color="blue";
   user.style.borderColour="yellow";
   user.focus()
   }

    if(email.value.length<7){
    event.preventDefault();
    user.focus()
    emailError.textContent="Please enter a valid Email ID";
    emailError.style.color="blue";
   }

    if(msg.value.length<1){
    event.preventDefault();
    user.focus()
    msgError.textContent="Message field cannot be Blank";
    msgError.style.color="blue";
   }

   if(user.value.length>5)
   {
    userError.textContent=" ";
   }
   if(msg.value.length>1){
    msgError.textContent=" ";
   }
   if(email.value.length>7){
    emailError.textContent=" ";
   }
});

