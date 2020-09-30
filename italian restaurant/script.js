function openBox() {
    var email = prompt("Enter your name to get a reservation");
    if(email == "" || !email.includes("@"))
    {
        alert("No reservations avaliable");
        return;
    }
emails.push(email);
alert("Thank you!");
    }