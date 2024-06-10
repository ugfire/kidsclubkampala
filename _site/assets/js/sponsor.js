Swal.fire({
  title: "Sponsor a child's Education?",
  html: `
  <h1 class="text-center display-1 "> <span class="bi bi-pen-fill text-dark"></span></h1>    
  Would you like to sponsor a child?
  <p><a class="btn btn-dark mr-2 m-2">Not Yet</a><a class="btn btn-success m-2">Yes please</a></p>
     
    `,
  showCloseButton: true,
  showCancelButton: false,
  showConfirmButton: false,
});

function close() {
  Swal.close();
}

function contact() {
  window.location.href = "/contact";
}
