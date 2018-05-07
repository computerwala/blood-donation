//for validation
function valid(e){
e.preventDefault();

var name=document.getElementById('name').value;
var mail=document.getElementById('email').value;
var tel=document.getElementById('phone').value;
var pass=document.getElementById('pass').value;

if(name==''||mail==''||tel==''||pass==''){
	alert('Empty Fields');
	}
else{
	if(name.length<3){
		alert('Name must be atleast 3 characters');
		}
	else if(/^\w\+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email.value)==0){
		alert('Invalid E-Mail address');
		}
	else if(isNaN(tel)||tel.length!=10){
		alert('Invalid Phone Number');
		}
	else{
		alert('Thanks for Joining Us - '+name);
		document.getElementById("myform").reset();
		}
	}
}

//for submit event
document.getElementById("myform").addEventListener('submit',valid,false);

// When the user clicks on button, open the popup
function bllur() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    return true;
}