function apply() {
  Swal.fire({
    title: "",
    html: `
        <div class="">
        <h1 class="text-center display-1 "> <span class="bi bi-computer text-danger"></span></h1>    
       <h2>Apply Now</h2>
        <p><a class="btn btn-dark mr-2 m-2" onclick="Swal.close()">Cancel</a><a class="btn btn-warning m-2" onclick="sendapplication()">Send</a></p>
         
        </div>  
          `,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: "whitepopup",
  });
}

function close() {
  Swal.close();
}

function sendapplication() {
  alert("application sent successfully !");
}
