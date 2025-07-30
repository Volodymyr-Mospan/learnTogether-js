const householdItems = [];

const washingMachine = {
    itemName: "пральна машина",
    category: "побутова техніка",
    price: 15000,
    inUse: true,
};
const vacuumCleaner = {
    itemName: "пилосос",
    category: "побутова техніка",
    price: 5000,
    inUse: true,
};

const breadMachine = {
    itemName: "хлібопічка ('...дуже класна, давай купимо!' за версією дружини)",
    category: "кухонна техніка",
    price: 3000,
    inUse: false,
};

const multiCook = {
    itemName: "мультиварка",
    category: "кухонна техніка",
    price: 4000,
    inUse: true,
};

const blender = {
    itemName: "блендер",
    category: "кухонна техніка",
    price: 1500,
    inUse: false,
};
const tv = {
    itemName: "телевізор",
    category: "побутова техніка",
    price: 15000,
    inUse: true,
};

householdItems.push(washingMachine, vacuumCleaner, breadMachine, multiCook, blender, tv);
console.log(`Всього предметів  в масиві: ${householdItems.length}`);

householdItems.forEach(({ itemName, category, price }) => {
    console.log(`Назва предмета: "${itemName}", категорія предмета: "${category}", вартість предмета: "${price} грн"`);
});

console.log("\n".repeat(2));

let itemsInUse = householdItems.filter((item) => item.inUse).length;
console.log(`Всього предметів використовується: ${itemsInUse}`);

householdItems.forEach(({ itemName, category, price, inUse }) => {
    if (inUse) {
        console.log(
            `Назва предмета: "${itemName}", категорія предмета: "${category}", вартість предмета: "${price} грн", активно використовується`
        );
    }
});
