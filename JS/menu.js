//  order now button js //

function openOrderModal(title, description, price, imageSrc) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;
  document.getElementById('modalPrice').innerText = price;
  document.getElementById('modalImage').src = imageSrc;
}

function confirmOrder() {
  const modal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
  modal.hide();
  
  // Popup Alert
  setTimeout(() => {
    const alertDiv = document.createElement('div');
    alertDiv.className = "alert alert-success text-center position-fixed top-0 start-50 translate-middle-x mt-3 px-4 shadow";
    alertDiv.style.zIndex = 2000;
    alertDiv.innerText = "✅ Order Confirmed Successfully!";
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 2500);
  }, 500);
}
//  Booking Modal alert js //
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
  //  Navbar active page js
  