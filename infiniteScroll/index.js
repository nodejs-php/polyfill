const API_BASE_URL = "https://api.frontendexpert.io/api/fe/testimonials";
const PAGE_SIZE = 5;
let afterId = null;
let lastTestimonial;
const testimonialContainer = document.getElementById("testimonial-container");

const intersectionObserver = new IntersectionObserver(handleIntersection, {
  root: testimonialContainer,
  threshold: 1, // Only trigger when the entire target element is intersecting the root.
});

function handleIntersection(entries) {
  entries.forEach((entry) => {
    // In our case, there will always only be one entry.
    if (entry.isIntersecting) {
      fetchAndAppend();
    }
  });
}

fetchAndAppend();

async function fetchAndAppend() {
  const url = testUrl();
  const response = await fetch(url);
  const { testimonials, hasNext } = await response.json();
  const fragment = document.createDocumentFragment();
  testimonials.forEach(({ message }) => {
    fragment.appendChild(createTestimonialElement(message));
  });
  testimonialContainer.appendChild(fragment);
  if (hasNext) {
    afterId = testimonials[testimonials.length - 1].id;
    if (lastTestimonial) {
      intersectionObserver.unobserve(lastTestimonial);
    }
    lastTestimonial = document.querySelector(".testimonial:last-child");
    intersectionObserver.observe(lastTestimonial);
  } else {

    intersectionObserver.unobserve(lastTestimonial);
  }

}

function testUrl() {
  const url = new URL(API_BASE_URL);
  url.searchParams.set("limit", PAGE_SIZE);

  if (afterId !== null) {
    url.searchParams.set("after", afterId);
  }

  return url;
}

function createTestimonialElement(message) {
  const testimonialEl = document.createElement("p");
  testimonialEl.classList.add("testimonial");
  testimonialEl.textContent = message;

  return testimonialEl;
}
