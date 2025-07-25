import { User } from "./user.js";
import { Order } from "./order.js";

const user = new User('Vasyl', 'vasyl@gmail.com')
const order = new Order(user, 'Laptop', 2)
user.displayInfo()
order.displayOrder()