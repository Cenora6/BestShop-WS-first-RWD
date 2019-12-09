document.addEventListener('DOMContentLoaded', function (e) {
    console.log('DOM');

    // calculator calculations

    const dropdown = document.querySelector('.dropdown-visible');
    const dropdownButton = document.querySelector('.package-choosing');

    dropdownButton.addEventListener('click', function () {

        dropdownButton.classList.toggle('package-arrow-up');
        e.preventDefault();
        dropdown.classList.toggle('dropdown-hidden');

    });

    const productQuantity = document.querySelector('.product-quantity');
    const estimatedOrders = document.querySelector('.orders');

    const productValue = document.querySelector('.product-values');
    const productTotal = document.querySelector('.product-total');
    const productBar = document.querySelector('.product-bar');

    const ordersValue = document.querySelector('.orders-values');
    const ordersTotal = document.querySelector('.orders-total');
    const ordersBar = document.querySelector('.orders-bar');

    const packageValue = document.querySelector('.package-values');
    const packageTotal = document.querySelector('.package-total');
    const packageBar = document.querySelector('.package-bar');

    const resultTotal = document.querySelector('.result-total');

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;

    // product quantity

    productQuantity.addEventListener('input', function () {
        if (this.value < 0 || this.value.includes(".") || this.value.includes(",")) {
            alert("Wpisana liczba nie jest liczbą całkowitą dodatnią!");
            productValue.innerText = 'error';
            sum1 = 0 * 0.5;
            productTotal.innerText = 'error';
            productBar.style.visibility = 'visible';
            resultTotal.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
        } else {
            productQuantity.innerText = this.value + ' * $0.5';
            productValue.innerText = this.value + " * $0.5";
            sum1 = this.value * 0.5;
            productTotal.innerText = "$" + sum1;
            productBar.style.visibility = 'visible';
            resultTotal.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
        }

    });

    // estimated orders

    estimatedOrders.addEventListener('input', function () {
        if (this.value < 0 || this.value.includes(".") || this.value.includes(",")) {
            alert("Wpisana liczba nie jest liczbą całkowitą dodatnią!");
            ordersValue.innerText = 'error';
            sum2 = 0 * 0.25;
            ordersTotal.innerText = 'error';
            ordersBar.style.visibility = 'visible';
            resultTotal.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
        } else {
            estimatedOrders.innerText = this.value + ' * $0.25';
            ordersValue.innerText = this.value + " * $0.25";
            sum2 = this.value * 0.25;
            ordersBar.style.visibility = 'visible';
            ordersTotal.innerText = "$" + sum2;
            resultTotal.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
        }

    });

    // choosing the package

    const optionBasic = document.querySelector('.option.basic');
    const optionProfessional = document.querySelector('.option.professional');
    const optionPremium = document.querySelector('.option.premium');

    optionBasic.addEventListener('click', function () {
        dropdownButton.innerText = optionBasic.innerText;
        dropdownButton.classList.add('chosen');
        dropdown.classList.toggle('dropdown-hidden');
        packageValue.innerText = 'Basic';
        packageTotal.innerText = '$' + 0;
        packageBar.style.visibility = "visible";
        dropdownButton.classList.toggle('package-arrow-up');
        sum3 = 0;
        resultTotal.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
    });

    optionProfessional.addEventListener('click', function () {
        dropdownButton.innerText = optionProfessional.innerText;
        dropdownButton.classList.add('chosen');
        dropdown.classList.toggle('dropdown-hidden');
        packageValue.innerText = 'Professional';
        packageTotal.innerText = '$' + 25;
        packageBar.style.visibility = "visible";
        dropdownButton.classList.toggle('package-arrow-up');
        sum3 = 25;
        resultTotal.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);

    });

    optionPremium.addEventListener('click', function () {
        dropdownButton.innerText = optionPremium.innerText;
        dropdownButton.classList.add('chosen');
        dropdown.classList.toggle('dropdown-hidden');
        packageValue.innerText = 'Premium';
        packageTotal.innerText = '$' + 60;
        packageBar.style.visibility = "visible";
        dropdownButton.classList.toggle('package-arrow-up');
        sum3 = 60;
        resultTotal.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);

    });

    // accounting (checkbox)

    const accountingTotal = document.querySelector('.accounting-total');
    const accountingCheckbox = document.querySelector('.accounting');
    const accountingBar = document.querySelector('.accounting-bar');

    const terminalTotal = document.querySelector('.terminal-total');
    const terminalCheckbox = document.querySelector('.rental');
    const terminalBar = document.querySelector('.terminal-bar');

    accountingCheckbox.addEventListener('change', function (e) {
        if (this.checked) {
            accountingBar.style.visibility = "visible";
            accountingTotal.innerText = '$' + 35;
            sum4 = 35;
        } else {
            accountingBar.style.visibility = "visible";
            accountingTotal.innerText = '$' + 0;
            sum4 = 0;
        }
        resultTotal.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
    });

    // terminal (checkbox)

    terminalCheckbox.addEventListener('change', function (e) {
        if (this.checked) {
            terminalBar.style.visibility = "visible";
            terminalTotal.innerText = '$' + 5;
            sum5 = 5;
        } else {
            terminalBar.style.visibility = "visible";
            terminalTotal.innerText = '$' + 0;
            sum5 = 0;
        }
        resultTotal.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
    });

});