// <!-- Script: Active page highlight -->

  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

    //  <!-- Book a table sucessfull alert Js -->
    
  document.getElementById("reservationForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    document.getElementById("successAlert").classList.remove("d-none");
    this.reset();
    
    setTimeout(() => {
      document.getElementById("successAlert").classList.add("d-none");
      const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
      modal.hide();
    }, 2000);
  });
