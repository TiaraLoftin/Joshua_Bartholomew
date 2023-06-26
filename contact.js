function send()
{
  emailjs.send("service_i3vwd2s","template_fc5cmnu",{
    from_name: document.querySelector("#from_name").value,
    email_to: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  }).then(response =>{
    console.log("success", response.status);
  },(error)=>{
    console.log(error);
  })
}
document.querySelector(".send").addEventListener("click",send)
