const householdItems = [
    { name: 'чайник', category: 'побутова техніка', price: 870, inUse: true, },
    { name: 'холодильник', category: 'побутова техніка', price: 12000, inUse: false, },
    { name: 'телевізор', category: 'побутова техніка', price: 23900, inUse: true, },
    { name: 'фен', category: 'побутова техніка', price: 1299, inUse: false, },
];

householdItems.forEach(item => console.log(`Пристрій ${item.name} з категорії ${item.category}, і його ціна: ${item.price} грн.`));

const itemsInUse = householdItems.filter(item => item.inUse);

itemsInUse.forEach(item => console.log(`Пристрій ${item.name} використовується в данний момент.`));
