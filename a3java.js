function calculateFactorial() {
    const n = parseInt(document.getElementById('factorialInput').value);
    if (n >= 0) {
        let factorial = 1;
        let i = 1;
        while (i <= n) {
            factorial *= i;
            i++;
        }
        document.getElementById('factorialResult').innerText = `Factorial of ${n} is ${factorial}.`;
    } else {
        document.getElementById('factorialResult').innerText = 'Please enter a non-negative integer.';
    }
}

function calculateSum() {
    const n = parseInt(document.getElementById('sumInput').value);
    if (n >= 0) {
        let sum = 0;
        let i = 1;
        do {
            sum += i;
            i++;
        } while (i <= n);
        document.getElementById('sumResult').innerText = `Sum of first ${n} natural numbers is ${sum}.`;
    } else {
        document.getElementById('sumResult').innerText = 'Please enter a non-negative integer.';
    }
}

function calculateAverage() {
    const n = parseInt(document.getElementById('averageInput').value);
    if (n > 0) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        const average = sum / n;
        document.getElementById('averageResult').innerText = `Average of first ${n} natural numbers is ${average.toFixed(2)}.`;
    } else if (n === 0) {
        document.getElementById('averageResult').innerText = 'Average of first 0 natural numbers is undefined.';
    } else {
        document.getElementById('averageResult').innerText = 'Please enter a positive integer.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('factorialButton').addEventListener('click', calculateFactorial);
    document.getElementById('sumButton').addEventListener('click', calculateSum);
    document.getElementById('averageButton').addEventListener('click', calculateAverage);
});

function clearFactorial() {
    document.getElementById('factorialInput').value = '';
    document.getElementById('factorialResult').innerText = '';
}

function clearSum() {
    document.getElementById('sumInput').value = '';
    document.getElementById('sumResult').innerText = '';
}

function clearAverage() {
    document.getElementById('averageInput').value = '';
    document.getElementById('averageResult').innerText = '';
}
