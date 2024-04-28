let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Saat dokumen dimuat, inisialisasikan fungsi untuk tombol back to top
document.addEventListener("DOMContentLoaded", function() {
  var backButton = document.querySelector(".btn-back_to_top");

  // Tampilkan tombol ketika pengguna mulai menggulir ke bawah
  window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
          backButton.classList.add("show");
      } else {
          backButton.classList.remove("show");
      }
  });

  // Fungsi untuk menggulir ke atas ketika tombol diklik
  backButton.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth" // Menggunakan efek scroll halus
      });
  });
});
