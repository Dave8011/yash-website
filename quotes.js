// quotes.js

const quotes = [
  "Success begins before the first step – that's Step Zero.",
  "Confidence is silent, insecurities are loud.",
  "Mindset isn't everything, but it's the first thing.",
  "What you believe shapes what you achieve.",
  "The brain follows where belief leads."
];

function initQuoteRotation(quoteSelector, animated = false) {
  const quoteEl = document.querySelector(quoteSelector);
  if (!quoteEl) return;

  let index = 0;
  const showNextQuote = () => {
    if (animated) {
      quoteEl.classList.remove("fade-in");
      void quoteEl.offsetWidth; // Trigger reflow to restart animation
    }
    quoteEl.textContent = quotes[index];
    if (animated) quoteEl.classList.add("fade-in");
    index = (index + 1) % quotes.length;
  };

  showNextQuote();
  setInterval(showNextQuote, 5000); // Change every 5 seconds
}
