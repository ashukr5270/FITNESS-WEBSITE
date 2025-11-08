// ===== Menu Toggle =====
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ===== Typing Text Effect =====
const typed = new Typed('.multiple-text', {
  strings: [
    'Physical Fitness',
    'Weight Gain',
    'Strength Training',
    'Fat Loss',
    'Weight Lifting',
    'Running'
  ],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

// ===== Pricing Auto Toggle (Monthly ↔ Yearly) =====
const prices = document.querySelectorAll('.price');
let pricingYearly = false;

function togglePricing() {
  pricingYearly = !pricingYearly;
  prices.forEach(price => {
    const monthly = price.getAttribute('data-monthly');
    const yearly = price.getAttribute('data-yearly');
    price.textContent = pricingYearly ? yearly : monthly;
  });
}

// Auto toggle pricing every 4s
if (prices.length > 0) {
  setInterval(togglePricing, 4000);
}

// ===== Review Auto-Slider =====
let currentReview = 0;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;

function showReview(index) {
  reviews.forEach((rev, i) => {
    rev.classList.remove('active');
    if (i === index) rev.classList.add('active');
  });
}

function nextReview() {
  currentReview = (currentReview + 1) % totalReviews;
  showReview(currentReview);
}

// Auto-slide reviews every 5s
if (reviews.length > 0) {
  showReview(currentReview);
  setInterval(nextReview, 5000);
}           