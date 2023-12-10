const API_BASE_URL = "https://api.frontendexpert.io/api/fe/testimonials";
const PAGE_SIZE = 5;
let afterId = null;
let canFetch = true;
let lastTestimonial;
const testimonialContainer = document.getElementById("testimonial-container");


testimonialContainer.addEventListener("scroll", handleScroll);

fetchAndAppend();

async function fetchAndAppend() {
  canFetch = false;
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
  } else {
    testimonialContainer.removeEventListener("scroll", handleScroll);
  }
  canFetch = true;
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

function handleScroll() {
  if (!canFetch) {
    return;
  }
  const bottomSpaceLeftToScroll =
    this.scrollHeight - this.scrollTop - this.clientHeight;
  if (bottomSpaceLeftToScroll > 0) return;
  fetchAndAppend();
}
