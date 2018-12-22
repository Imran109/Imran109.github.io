let form=document.getElementById("fform");
form.addEventListener("submit",event=>{
   let user=form.elements["Name"];
   let userError=document.getElementById("user-error");
   let email=form.elements["Email"];
   let emailError=document.getElementById("emailerror");
   if(user.value.length < 4){
    event.preventDefault();
   userError.textContent="Invalid entry-minimum 5 characters";
   userError.style.color="green";
   user.style.borderColour="yellow";
   user.focus();
   }
   if((user.value.length>4)&&(user.value!=="imranps"||user.value!=="S Priya")){
    userError.textContent="Access denied.Contact P.S.M.I to gain access";
    event.preventDefault();
    user.focus();
   }

    if(email.value.length<7){
      event.preventDefault();
      user.focus()
      emailError.textContent="Please enter a valid Email ID";
      emailError.style.color="blue";
     }
     if(email.value.length>7){
      emailError.textContent=" ";
     }
     if(user.value==="imranps" || user.value==="S Priya"){
      userError.textContent=" ";
     }
});



