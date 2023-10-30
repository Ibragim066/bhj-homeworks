function getCurrencyRates() {
    document.getElementById('loader').classList.add('loader_active');

    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {
            document.getElementById('loader').classList.remove('loader_active');

            const valuts = data.response.Valute;
            const itemsContainer = document.getElementById('items');

            Object.keys(valuts).forEach(key => {
                const currency = valuts[key];

                const itemCode = document.createElement('div');
                itemCode.className = 'item__code';
                itemCode.textContent = currency.CharCode;

                const itemValue = document.createElement('div');
                itemValue.className = 'item__value';
                itemValue.textContent = currency.Value;

                const itemCurrency = document.createElement('div');
                itemCurrency.className = 'item__currency';
                itemCurrency.textContent = 'руб.';

                const itemContainer = document.createElement('div');
                itemContainer.className = 'item';
                itemContainer.appendChild(itemCode);
                itemContainer.appendChild(itemValue);
                itemContainer.appendChild(itemCurrency);

                itemsContainer.appendChild(itemContainer);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('loader').classList.remove('loader_active');
        });
}

document.addEventListener('DOMContentLoaded', getCurrencyRates);


