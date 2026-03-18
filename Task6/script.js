// Sticky nav CTA scroll
document.getElementById("cta-nav").addEventListener("click", () => {
  document.getElementById("hero-form").scrollIntoView({ behavior: "smooth" });
});

// Mobile nav toggle
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

// Hero form: simple validation + message
const heroForm = document.getElementById("hero-form");
const heroEmail = document.getElementById("hero-email");

heroForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = heroEmail.value.trim();

  if (!value || !value.includes("@")) {
    alert("Please enter a valid email to start your trial.");
    return;
  }

  alert(`Thanks! A trial link has been sent to ${value}.`);
  heroForm.reset();
});

// Pricing toggle: monthly/yearly
const billingToggle = document.getElementById("billing-toggle");
const priceAmounts = document.querySelectorAll(".amount");

billingToggle.addEventListener("change", () => {
  const yearly = billingToggle.checked;
  priceAmounts.forEach((el) => {
    const monthPrice = el.dataset.month;
    const yearPrice = el.dataset.year;
    el.textContent = yearly ? yearPrice : monthPrice;
  });
});

// Plan selection buttons
document.querySelectorAll(".select-plan").forEach((btn) => {
  btn.addEventListener("click", () => {
    const plan = btn.dataset.plan;
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

    const messageField = document.getElementById("message");
    if (!messageField.value.includes("Plan:")) {
      messageField.value = `Plan: ${plan}\n\nTell us more about your team…`;
    } else {
      // Update plan line if already present
      messageField.value = messageField.value.replace(/Plan: .*/, `Plan: ${plan}`);
    }
  });
});

// Contact form: fake submit with status message
const contactForm = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  statusEl.className = "form-status";
  statusEl.textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const teamSize = document.getElementById("team-size").value;

  if (!name || !email || !teamSize) {
    statusEl.textContent = "Please fill in all required fields.";
    statusEl.classList.add("error");
    return;
  }

  // Simulate async submission
  statusEl.textContent = "Sending your request…";
  setTimeout(() => {
    statusEl.textContent = `Thanks ${name}, we’ve received your request and will email you at ${email}.`;
    statusEl.classList.add("success");
    contactForm.reset();
  }, 800);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
