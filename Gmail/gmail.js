function sendEmail(){
    Email.send({
        SecureToken:"f9064c4c-0466-497d-93b0-849ded1df8e4",
        To : 'beenox1211@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact from Enquiry",
        Body : "Name:" +document.getElementById("name").value
        + "<br> Email :" + document.getElementById("email").value
        + "<br> Phone no: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}