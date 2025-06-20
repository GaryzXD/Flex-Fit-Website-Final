let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let autoSlideInterval;
const autoSlideTime = 5000; // Change this value (in ms) for auto-slide timing

function scrollToContact() {
  const contactSection = document.getElementById('enquire');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, autoSlideTime);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Initial setup
showSlide(currentSlide);
startAutoSlide();

// Event listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});
prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});
nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });


document.getElementById("enquiryForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! We will get back to you soon.");
});
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function() {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});


