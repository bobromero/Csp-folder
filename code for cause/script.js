var emails = [];
function openBox()
{
	var email = prompt("Enter your email to join the Mailing List");
	if(email == "" || !email.includes("@"))
	{
		alert("Not a valid email");
		openBox();
		return;
	}
	emails.push(email);
	alert("Thank you!");
}
