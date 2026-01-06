// EMI Calculator Logic
document.getElementById('emi-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const principal = parseFloat(document.getElementById('loan-amount').value);
    const rate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12; // Monthly rate
    const tenure = parseInt(document.getElementById('tenure').value);
    
    if (principal > 0 && rate > 0 && tenure > 0) {
        const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
        const totalAmount = emi * tenure;
        const totalInterest = totalAmount - principal;
        
        document.getElementById('emi').textContent = emi.toFixed(2);
        document.getElementById('interest').textContent = totalInterest.toFixed(2);
        document.getElementById('total').textContent = totalAmount.toFixed(2);
    } else {
        alert('Please enter valid values.');
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});