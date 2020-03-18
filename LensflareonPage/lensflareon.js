var navbarlink = document.getElementsByClassName('navBarLink');
navbarlink.addEventListener("mouseover",function(event){
    event.target.style.zIndex=-1;
    event.target.style.visibility='visible'
});

function formValidation(){
	var userEmail=
		document.getElementById("email").value;
	var firstName = 
		document.getElementById("fname").value;
	var lastName=
		document.getElementById("lname").value;
	submitOK=true;
		
	function isEmailValid(Email){
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
	}
		if(firstName.length > 14){
			document.getElementById("fNameHelp").style.visibility="visible";
			document.getElementById("fNameHelp").innerHTML="*First name must be under 14 characters.";
			//document.getElementById("button").style.visibility="hidden";
			
			submitOK=false;
		}else if(firstName.length == ""){
			document.getElementById("fNameHelp").style.visibility="visible";
			document.getElementById("fNameHelp").innerHTML="*First name cannot be blank.";
			submitOK=false;
			
		}else{
		
			document.getElementById("fNameHelp").innerHTML="";
		}
		if(lastName.length > 14){
			document.getElementById("lNameHelp").style.visibility="visible";
			document.getElementById("lNameHelp").innerHTML="*Last name must be under 14 characters.";
			submitOK=false;
		}else if(lastName.length == ""){
			document.getElementById("lNameHelp").style.visibility="visible";
			document.getElementById("lNameHelp").innerHTML="*Last name cannot be blank.";
			submitOK=false;
		}else{
			document.getElementById("lNameHelp").innerHTML="";
		}
		
		if(isEmailValid(userEmail)==false){
			document.getElementById("emailHelp").style.visibility="visible";
			document.getElementById("emailHelp").innerHTML="*Invalid Email.";
			submitOK=false;
		}else{
			document.getElementById("emailHelp").innerHTML="";
		}
		if(submitOK==false){
			return false;
		}
	}
	