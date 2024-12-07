document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("celsiusButton").addEventListener("click", convertCtoF);
    document.getElementById("fahrenheitButton").addEventListener("click", convertFtoC);
    document.getElementById("metersButton").addEventListener("click", convertMtoFt);
    document.getElementById("feetButton").addEventListener("click", convertFtToM);
});

function convertCtoF() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('resultCtoF').innerText = `${celsius} °C = ${fahrenheit.toFixed(2)} °F`;
    } else {
        document.getElementById('resultCtoF').innerText = 'Please enter a valid number.';
    }
}

function convertFtoC() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('resultFtoC').innerText = `${fahrenheit} °F = ${celsius.toFixed(2)} °C`;
    } else {
        document.getElementById('resultFtoC').innerText = 'Please enter a valid number.';
    }
}

function convertMtoFt() {
    const meters = parseFloat(document.getElementById('meters').value);
    if (!isNaN(meters)) {
        const feet = meters * 3.28084;
        document.getElementById('resultMtoFt').innerText = `${meters} m = ${feet.toFixed(2)} ft`;
    } else {
        document.getElementById('resultMtoFt').innerText = 'Please enter a valid number.';
    }
}

function convertFtToM() {
    const feet = parseFloat(document.getElementById('feet').value);
    if (!isNaN(feet)) {
        const meters = feet / 3.28084;
        document.getElementById('resultFtToM').innerText = `${feet} ft = ${meters.toFixed(2)} m`;
    } else {
        document.getElementById('resultFtToM').innerText = 'Please enter a valid number.';
    }
}

function clearCtoF() {
    document.getElementById('celsius').value = '';
    document.getElementById('resultCtoF').innerText = '';
}

function clearFtoC() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('resultFtoC').innerText = '';
}

function clearMtoFt() {
    document.getElementById('meters').value = '';
    document.getElementById('resultMtoFt').innerText = '';
}

function clearFtToM() {
    document.getElementById('feet').value = '';
    document.getElementById('resultFtToM').innerText = '';
}
