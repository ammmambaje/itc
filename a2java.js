function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    let tax = 0;

    if (isNaN(income) || income < 0) {
        document.getElementById('result').innerText = 'Please enter a valid income.';
        return;
    }

    if (income <= 250000) {
        tax = 0; // No tax for income up to P250,000
    } else if (income <= 400000) {
        tax = (income - 250000) * 0.20; // 20% of the excess over P250,000
    } else if (income <= 800000) {
        tax = 30000 + (income - 400000) * 0.25; // P30,000 + 25% of the excess over P400,000
    } else if (income <= 2000000) {
        tax = 130000 + (income - 800000) * 0.30; // P130,000 + 30% of the excess over P800,000
    } else if (income <= 8000000) {
        tax = 490000 + (income - 2000000) * 0.32; // P490,000 + 32% of the excess over P2,000,000
    } else {
        tax = 2410000 + (income - 8000000) * 0.35; // P2,410,000 + 35% of the excess over P8,000,000
    }

    document.getElementById('result').innerText = `Your income tax is: PHP ${tax.toFixed(2)}`;
}

document.getElementById('calculateTaxButton').addEventListener('click', calculateTax);

function clearInputs() {
    document.getElementById('income').value = '';
    document.getElementById('result').innerText = '';
}

document.getElementById('clearButton').addEventListener('click', clearInputs);
