const denominations = {
  et2000: 2000,
  et500: 500,
  et200: 200,
  et100: 100,
  et50: 50,
  et20: 20,
  et10: 10,
  et5: 5,
  et2: 2,
  et1: 1
};

function calculateTotal() {
  let total = 0;
  for (let id in denominations) {
    const count = parseInt(document.getElementById(id).value) || 0;
    const value = count * denominations[id];
    document.getElementById('txt' + id.substring(2)).textContent = value;
    total += value;
  }
  document.getElementById('total').textContent = total;
  document.getElementById('inWords').textContent = convertToWords(total) + ' Only';
}

function resetCalculator() {
  for (let id in denominations) {
    document.getElementById(id).value = '';
    document.getElementById('txt' + id.substring(2)).textContent = '0';
  }
  document.getElementById('total').textContent = '0';
  document.getElementById('inWords').textContent = 'Zero Rupees Only';
}

for (let id in denominations) {
  document.getElementById(id).addEventListener('input', calculateTotal);
}

function convertToWords(num) {
  if (num === 0) return "Zero Rupees";

  const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const numberToWords = (n) => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + " " + a[n % 10];
    if (n < 1000) return a[Math.floor(n / 100)] + " Hundred " + numberToWords(n % 100);
    if (n < 100000) return numberToWords(Math.floor(n / 1000)) + " Thousand " + numberToWords(n % 1000);
    if (n < 10000000) return numberToWords(Math.floor(n / 100000)) + " Lakh " + numberToWords(n % 100000);
    return numberToWords(Math.floor(n / 10000000)) + " Crore " + numberToWords(n % 10000000);
  };

  return numberToWords(num).trim() + " Rupees";
}

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  themeLabel.textContent = document.body.classList.contains("dark") ? "Dark Mode" : "Light Mode";
});