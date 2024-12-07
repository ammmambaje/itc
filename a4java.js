let payroll = [];

function ConvertDecimal(value, decimals) {
    return isNaN(value) ? '' : value.toFixed(decimals);
}

function initPayroll() {
    payroll = [];
    document.getElementById("payrollBody").innerHTML = '';
}

function showPayroll() {
    let tbody = '';

    payroll.forEach((employee, index) => {
        tbody += `<tr>
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td style='text-align:right'>${ConvertDecimal(employee.dailyRate, 2)}</td>
            <td style='text-align:right'>${ConvertDecimal(employee.grossPay, 2)}</td>
            <td style='text-align:right'>${ConvertDecimal(employee.deductionAmount, 2)}</td>
            <td style='text-align:right'>${ConvertDecimal(employee.netPay, 2)}</td>
        </tr>`;
    });

    document.getElementById("payrollBody").innerHTML = tbody;
}

(() => {
    initPayroll();

    document.getElementById('addEmployeeButton').addEventListener('click', () => {
        const name = document.getElementById('employeeName').value;
        const daysWorked = parseInt(document.getElementById('daysWorked').value);
        const dailyRate = parseFloat(document.getElementById('dailyRate').value);
        const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

        if (name === '' || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount)) {
            alert('Please fill in all fields correctly.');
            return;
        }

        const grossPay = daysWorked * dailyRate;
        const netPay = grossPay - deductionAmount;

        payroll.push({ name, daysWorked, dailyRate, grossPay, deductionAmount, netPay });
        
        showPayroll();
        clearInputs(); 
    });

    document.getElementById('deleteEmployeeButton').addEventListener('click', openInputModal);

    function openInputModal() {
        document.getElementById('inputModal').style.display = 'block';
    }

    function closeInputModal() {
        document.getElementById('inputModal').style.display = 'none';
    }

    document.getElementById('nextDeleteButton').addEventListener('click', openConfirmModal);

    function openConfirmModal() {
        const lineNumber = parseInt(document.getElementById('lineNumberToDelete').value);
        
        if (lineNumber > 0 && lineNumber <= payroll.length) {
            document.getElementById('inputModal').style.display = 'none'; 
            document.getElementById('confirmModal').style.display = 'block';
            document.getElementById('confirmDeleteButton').onclick = () => confirmDelete(lineNumber);
        } else {
            alert('Invalid line number. Please enter a valid number.');
        }
    }

    function confirmDelete(lineNumber) {
        payroll.splice(lineNumber - 1, 1);
        showPayroll();
        closeConfirmModal(); 
        closeInputModal(); 
        document.getElementById('lineNumberToDelete').value = ''; 
    }

    function closeConfirmModal() {
        document.getElementById('confirmModal').style.display = 'none';
    }

    function clearInputs() {
        document.getElementById('employeeName').value = '';
        document.getElementById('daysWorked').value = '';
        document.getElementById('dailyRate').value = '';
        document.getElementById('deductionAmount').value = '';
   }

   window.onclick = function(event) {
       const inputModal = document.getElementById('inputModal');
       const confirmModal = document.getElementById('confirmModal');
       if (event.target == inputModal) {
           closeInputModal();
       } else if (event.target == confirmModal) {
           closeConfirmModal();
       }
   };
})();
