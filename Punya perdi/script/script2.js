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
