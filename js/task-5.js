let deliveryPrice;
let country = prompt('Введите страну доставки');

if (country === null) {
    console.log('Отменено пользователем');
} else {
    const fixedCountryName = country[0].toUpperCase() + country.slice(1, country.length).toLowerCase();

    switch(fixedCountryName) {
        case 'Китай':
            deliveryPrice = 100;
            break;
        case 'Чили':
            deliveryPrice = 250;
            break;
        case 'Австралия':
            deliveryPrice = 170;
            break;
        case 'Индия':
            deliveryPrice = 80;
            break;
        case 'Ямайка':
            deliveryPrice = 120;
            break;
        default: 
            alert('В вашей стране доставка не доступна');
    }

    if (deliveryPrice) {
        alert(`Доставка в ${fixedCountryName} будет стоить ${deliveryPrice} кредитов`);
    }
}