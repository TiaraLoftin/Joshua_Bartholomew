function sendMail(){
  var params ={
    from_name : document.getElementById("from_name").value,
    email: document.getElementById("email").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_2hy6l8j", "template_fc5cmnu", params).then(function (res){
    alert("Success!" +res.status);
  })
}
