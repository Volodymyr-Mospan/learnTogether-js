fetch("./data/order.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Збій створення замовлення");
    }
    return response.json();
  })
  .then((order) => {
    console.log(`Замовлення: ${order.product}, ТТН ${order.deliveryId}`);
  })
  .catch((err) => {
    console.error(`Помилка при fetch-запиті: ${err.message}`);
  });
