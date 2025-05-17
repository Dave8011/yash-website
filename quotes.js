const quotes = [
  "Success begins before the first step – that's Step Zero.",
  "Confidence is silent, insecurities are loud.",
  "Mindset isn't everything, but it's the first thing.",
  "What you believe shapes what you achieve.",
  "The brain follows where belief leads."
];

function typeWriterEffect(el, text, i = 0) {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    setTimeout(() => typeWriterEffect(el, text, i + 1), 40);
  }
}

function initQuoteRotation(quoteSelector) {
  const textEl = document.querySelector(`${quoteSelector} #quoteText`);
  let index = 0;

  const rotate = () => {
    textEl.textContent = "";
    typeWriterEffect(textEl, quotes[index]);
    index = (index + 1) % quotes.length;
  };

  rotate();
  setInterval(rotate, 7000); // Rotate every 7 sec
}
