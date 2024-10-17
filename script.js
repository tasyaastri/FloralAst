
document.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const freshSection = document.querySelector('.fresh-section');
    const sectionPosition = freshSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    const scrollPosition = window.scrollY || window.pageYOffset;

    // Cek apakah hero section sudah di-scroll 1/3 nya
    const heroHeight = heroSection.offsetHeight;
    if (scrollPosition > heroHeight / 3) { // Mulai dari 1/3 tinggi hero section
        const slowScroll = -(scrollPosition - heroHeight / 3) * 0.2; // Bergerak ke atas dengan kecepatan lebih lambat
        heroSection.style.backgroundPositionY = `${slowScroll}px`; // Scroll gambar ke atas
    }

    // Menambahkan kelas 'visible' untuk Fresh Section
    if (sectionPosition < screenPosition) {
        freshSection.classList.add('visible');
    } else {
        freshSection.classList.remove('visible'); // Untuk memastikan fresh section tidak menghilang
    }
});



// Modal functionality
let currentSlideIndex = 0; // Indeks gambar saat ini
const images = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const captionText = document.getElementById('caption');

function openModal(event) {
    modal.style.display = "block";
    currentSlideIndex = Array.from(images).indexOf(event.target);
    showSlide(currentSlideIndex);
}

function closeModal() {
    modal.style.display = "none";
}

function showSlide(index) {
    modalImage.src = images[index].src;
    captionText.innerText = images[index].alt;
}

function changeSlide(n) {
    currentSlideIndex += n;
    if (currentSlideIndex >= images.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = images.length - 1;
    }
    showSlide(currentSlideIndex);
}

// Menambahkan event listener untuk gambar di galeri
images.forEach(image => {
    image.parentElement.addEventListener('click', openModal);
});

// Menambahkan event listener untuk close modal
document.querySelector('.close').addEventListener('click', closeModal);

