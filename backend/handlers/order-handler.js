const Order = require("./../db/order");

async function addOrder(userId, orderModel) {
  let order = new Order({
    ...orderModel,
    userId: userId,
    status:"in-progress",
  });
  await order.save();
  
}

async function getCustomerOrders(userId) {
  let orders = await Order.find({ userId: userId });
  return orders.map((x) => x.toObject());
}

module.exports = {addOrder, getCustomerOrders}
