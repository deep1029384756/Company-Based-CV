function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "chaudharydeep118@gmail.com",
        Password : "954FBDC0D8FE8E011DFEECF7D07328D4AC66",
        To : "chaudharydeep118@gmail.com",
        From : "chaudharydeep118@gmail.com",
        Subject : "form inquiry",
        Body : "hey deep"
    }).then(
      message => alert(message)
    );
    // Email.send({
    //     SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    //     To : 'deepdeveloper20@gmail.com',
    //     From : document.getElementById("email").value,
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );
}

$(document).ready(function(){
  var type = new Typed(".typing",{
    strings: ["Student","Software Intern"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
  })

})