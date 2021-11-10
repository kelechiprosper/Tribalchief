// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// calculate Results
function calculateResults(e){
    console.log('calculating...');
    // UI vars
    const amount = document.getElementById('Amount');
    const interest = document.getElementById('Interest');
    const years = document.getElementById('Years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    const principal = parseFloat (amount.value);
    const calculatedInterest = parseFloat(interst.value)/ 100 / 12;
    const calculatedPayment =parseFloat(years.value) * 12;

    
    
    e.preventDefault();
}
