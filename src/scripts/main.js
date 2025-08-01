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


// Instagram Feed Integration
// This code dynamically creates an iframe to embed the Instagram feed using SnapWidget
  window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.createElement('iframe');
    iframe.src = "https://snapwidget.com/embed/1100193";
    iframe.className = "snapwidget-widget";
    iframe.allowTransparency = true;
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.width = "100%";
    iframe.style.height = "510px";
    iframe.title = "Posts from Instagram";
    
    document.querySelector('.instagram-feed-container').appendChild(iframe);
  });



document.getElementById("enquiryForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = this.name.value;
  const phone = this.phone.value;
  const email = this.email.value;
  const message = this.message.value;

  const enquiry = { name, phone, email, message };

  try {
    const response = await fetch("https://flexfit-backend-qvfc.onrender.com/api/enquiry", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enquiry),
    });

    const result = await response.json();
    if (response.ok) {
      alert("✅ Enquiry submitted successfully!");
      this.reset();
    } else {
      alert("❌ Failed to submit enquiry: " + result.error);
    }
  } catch (err) {
    alert("⚠️ Error connecting to server.");
    console.error(err);
  }
});


