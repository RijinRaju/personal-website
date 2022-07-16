
function validateForm() {


    var name = document.myForm.name.value;
    var email = document.myForm.email.value;
    var sub = document.myForm.subject.value;
    var msg = document.myForm.message.value;


    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (name == null || name == "") {
        alert("Enter a valid Name");
        return false;
    }
    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        alert("please enter a valid email");
        return false;

    }
    else if (sub == null || sub == "") {
        alert("Please enter proper subject");
        return false;
    }
    else if (msg == null || msg == "") {
        alert("Enter the message");
        return false;
    }
    else {
      
    }



}
