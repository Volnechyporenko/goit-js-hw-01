const credits = 23580;
const pricePerDroid = 3000;
const numberOfDroids = prompt('Сколько дроидов хотите купить?');

if (numberOfDroids === null) {
    console.log('Отменено пользователем!');
} else {
    const totalPrice = pricePerDroid * numberOfDroids;
    
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        const leftCredits = credits - totalPrice;
        console.log(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${leftCredits} кредитов.`);
    }
} 