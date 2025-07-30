const householdItems = [
    {
        name: "Пральна машина",
        category: "побутова техніка",
        price: "1600 грн",
        inUse: true
    },
    {
        name: "Kофемашина",
        category: "Кухонна техніка",
        price: "24000 грн",
        inUse: false
    },
    {
        name: "Кондиционер",
        category: "побутова техніка",
        price: "20000 грн",
        inUse: true
    },
    {
        name: "Мікрохвильова піч",
        category: "Кухонна техніка",
        price: "8000 грн",
        inUse: false
    },
]

householdItems.forEach(item => console.log(`Перелік всієї техніки в домі по категорії \n ${item.category} та назві - ${item.name}, за ціною - ${item.price} `))

console.log('---');

householdItems.filter((item) => item.inUse === true).forEach(item =>
    console.log(`Перелік техніки постійного вжитку: \n по категорії  ${item.category} та назві - ${item.name}, за ціною - ${item.price} `))

//функція створення та додавання обєктів в масив
const householdItem = () => {
    let nameAppliance = prompt('Введіть назву побутової техніки')
    let categoryAppliance = prompt('Введіть категорію побутової техніки')
    let priceAppliance = prompt('Введіть ціну побутової техніки')
    let inUseAppliance = confirm('Чи ви користуєтесь цією побутовою технікою? скасуйте якщо ні')

    if (householdItems.length <= 5) {
        householdItems.push({
            name: nameAppliance,
            category: categoryAppliance,
            price: priceAppliance,
            inUse: inUseAppliance
        })
    } else {
        alert("Максимальна кількість предметів у списку досягнута!");
    }
}


// householdItem();

const box = document.querySelector(".item-1")
// функція створення html  списку виведення обєктів масиву
const createList = (obj) => {
    let itemlist = document.createElement('ul')

    for (let el in obj) {
        let item = document.createElement('li')
        item.textContent = obj[el]

        itemlist.appendChild(item)
    }
    return itemlist;
}

householdItems.filter((item) => item.inUse === true).forEach(item => box.appendChild(createList(item)))

