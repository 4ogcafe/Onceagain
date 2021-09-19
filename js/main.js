
  //Bottam to Top Button function      

$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop()>100) {
			$('#myBtn').fadeIn();
		}else{
			$('#myBtn').fadeOut();
		}
	});
$('#myBtn').click(function(){
	$('html,body').animate({scrollTop:0},100);
});
});

// form validation function
function validateForm() {
  var x = document.forms["myForm"]["name","mobile","email","msg"].value;
      if (x == "") {
    alert("Something is Empty Fields. Please Fill complete form.");
    return false;
  }else if(x!==""){
  	alert("Thank you for contact us. We will contact you within 20 Minutes.");
  	return true;
  }
}

 // Image change onmouseover or out function
 function fimg()
{
this.setAttribute("src","images/corona1.jpg");
}
function simg()
{
this.setAttribute("src","images/corona2.jpg");
}


//  js for login and registation

    var LoginForm=document.getElementById("LoginForm");
    var RegForm= document.getElementById("RegForm");
    var Indicator= document.getElementById("Indicator");
    function register(){
        RegForm.style.transform="translateX(0px)";
        LoginForm.style.transform="translateX(0px)";
        Indicator.style.transform="translateX(100px)";
    }
    function login(){
        RegForm.style.transform="translateX(300px)";
        LoginForm.style.transform="translateX(300px)";
        Indicator.style.transform="translateX(0px)";
    }
