import { OrderModel } from "./order.model.js";
const createNewOrder = async (orderData) => {
    const newOrder = await OrderModel.create(orderData);
    return newOrder;
};
const getOrders = async (query) => {
    const filter = query ? { email: query } : {};
    const order = await OrderModel.find(filter);
    return order;
};
const updateOrder = async (productId = "", updatedOrderData) => {
    const query = productId
        ? { productId: { $regex: productId, $options: "i" } }
        : {};
    const updatedOrder = await OrderModel.findOneAndUpdate(query, updatedOrderData);
    return updatedOrder;
};
const deleteOrder = async (productId = "") => {
    const query = productId
        ? { productId: { $regex: productId, $options: "i" } }
        : {};
    const deletedOrder = await OrderModel.findOneAndDelete(query);
    return deletedOrder;
};
export const orderService = {
    createNewOrder,
    getOrders,
    updateOrder,
    deleteOrder,
};
//# sourceMappingURL=order.service.js.map