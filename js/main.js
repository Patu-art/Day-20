const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});


const recommendations = {
  relax: [
    "Aromatherapy Massage",
    "A gentler treatment focused on slowing down and switching off.",
    "60 min"
  ],
  tension: [
    "Traditional Thai Massage",
    "Pressure, movement and assisted stretching for guests looking to release everyday tension.",
    "60 min"
  ],
  recovery: [
    "Deep Tissue / Sports Massage",
    "A firmer, more focused option for recovery and deeper pressure.",
    "60 min"
  ],
  feet: [
    "Reflexology",
    "Focused time for tired feet and lower legs.",
    "Ask Smui"
  ],
  couples: [
    "Couples Massage",
    "Reserve time together with a treatment arranged for two guests.",
    "Ask Smui"
  ],
  unsure: [
    "Traditional Thai Massage",
    "Start with Smui's signature tradition and let the therapist discuss pressure and preferences with you.",
    "60 min"
  ]
};

const recommendationTitle = document.querySelector("#rec-title");
const recommendationCopy = document.querySelector("#rec-copy");
const recommendationTime = document.querySelector("#rec-time");
let selectedTreatment = "Aromatherapy Massage";

document.querySelectorAll(".need").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".need.active")?.classList.remove("active");
    button.classList.add("active");

    const [title, copy, time] = recommendations[button.dataset.need];

    selectedTreatment = title;
    recommendationTitle.textContent = title;
    recommendationCopy.textContent = copy;
    recommendationTime.textContent = time;
  });
});


const treatmentSelect = document.querySelector("#treatment-select");
const bookingSection = document.querySelector("#booking");

function setTreatment(name) {
  const matchingOption = [...treatmentSelect.options].find(
    (option) => option.textContent === name
  );

  if (matchingOption) {
    treatmentSelect.value = matchingOption.value;
  }

  bookingSection.scrollIntoView({ behavior: "smooth" });
}

document.querySelector(".choose-treatment").addEventListener("click", () => {
  setTreatment(selectedTreatment);
});

document.querySelectorAll("[data-treatment]").forEach((link) => {
  link.addEventListener("click", () => {
    setTreatment(link.dataset.treatment);
  });
});


const dateInput = document.querySelector("#book-date");
const tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);
dateInput.min = tomorrow.toISOString().split("T")[0];

const timeInput = document.querySelector("#chosen-time");

document.querySelectorAll(".time-grid button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".time-grid button.active")?.classList.remove("active");
    button.classList.add("active");
    timeInput.value = button.dataset.time;
  });
});


const form = document.querySelector("#booking-form");
const steps = [...document.querySelectorAll(".book-step")];
const progressItems = [...document.querySelectorAll(".booking-progress span")];
const nextButton = document.querySelector("#book-next");
const backButton = document.querySelector("#book-back");
const successPanel = document.querySelector(".booking-success");
const resetButton = document.querySelector("#book-reset");

let currentStep = 0;

function fieldsAreValid() {
  const requiredFields = [
    ...steps[currentStep].querySelectorAll("[required]")
  ];

  for (const field of requiredFields) {
    if (!field.value || !field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }

  if (currentStep === 2 && !timeInput.value) {
    return false;
  }

  return true;
}

function renderStep() {
  steps.forEach((item, index) => {
    item.classList.toggle("active", index === currentStep);
  });

  progressItems.forEach((item, index) => {
    item.classList.toggle("active", index <= currentStep);
  });

  backButton.hidden = currentStep === 0;
  nextButton.textContent =
    currentStep === steps.length - 1
      ? "Record request →"
      : "Continue →";
}

nextButton.addEventListener("click", () => {
  if (!fieldsAreValid()) return;

  if (currentStep < steps.length - 1) {
    currentStep += 1;
    renderStep();
    return;
  }

  form.hidden = true;
  successPanel.hidden = false;
});

backButton.addEventListener("click", () => {
  if (currentStep === 0) return;

  currentStep -= 1;
  renderStep();
});

resetButton.addEventListener("click", () => {
  form.reset();

  timeInput.value = "";
  document.querySelector(".time-grid button.active")?.classList.remove("active");

  currentStep = 0;
  renderStep();

  form.hidden = false;
  successPanel.hidden = true;
});

renderStep();
