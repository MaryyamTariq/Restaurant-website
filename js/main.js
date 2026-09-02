document.addEventListener('DOMContentLoaded', () => {
  
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  const slides = document.querySelectorAll('.testimonial-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  if (slides.length > 0) {
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 4000);
  }

  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value.trim();
      const email = document.querySelector('#email').value.trim();
      const message = document.querySelector('#message').value.trim();

  if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
    } else if (!email.includes('@') || !email.includes('.com')) {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you! Your message has been sent successfully.');
      contactForm.reset();
    }
    });
  }


  const galleryImages = document.querySelectorAll('.gallery-grid img');
  if (galleryImages.length > 0) {

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:none; justify-content:center; align-items:center; z-index:2000; cursor:pointer;';
    
    const lightboxImg = document.createElement('img');
    lightboxImg.style.cssText = 'max-width:90%; max-height:90%; border-radius:8px; box-shadow:0 5px 15px rgba(0,0,0,0.3);';
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }

});