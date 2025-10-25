import { orderService } from "./order.service.js";
import OrderValidationSchema from "./order.validation.js";
import { success } from "zod";
import { Product } from "../products/product.model.js";
const createOrder = async (req, res) => {
    try {
        const zodValidation = OrderValidationSchema.safeParse(req.body);
        if (typeof zodValidation.error !== "undefined" &&
            zodValidation.error.name === "zodError") {
            const errorList = zodValidation.error.issues.map((err) => err.message);
            res.status(500).json({
                success: false,
                message: "validation error",
                errors: errorList,
            });
        }
        if (zodValidation.success) {
            const product = await Product.findById(zodValidation.data.productId);
            if (product && product.inventory.quantity < zodValidation.data.quantity) {
                return res.status(500).json({
                    success: false,
                    message: " Insufficient quantity available in product inventory",
                });
            }
            if (product) {
                product.inventory.quantity =
                    product.inventory.quantity - zodValidation.data.quantity;
                product.inventory.inStock =
                    product.inventory.quantity === 0 ? false : true;
                const newOrder = await orderService.createNewOrder(zodValidation.data);
                await product.save();
                res.status(200).json({
                    success: true,
                    message: "Order placed successfully",
                    data: newOrder,
                });
            }
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong...",
            error: error,
        });
    }
};
const getOrders = async (req, res) => {
    try {
        const email = req?.query.email;
        const order = await orderService.getOrders(email);
        res.status(200).json({
            success: true,
            message: "order are fetch successfully.",
            data: order,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong...",
        });
    }
};
const updateOrder = async (req, res) => {
    try {
        const { productId } = req?.query;
        const updatedOrderData = req?.body;
        const updatedOrder = await orderService.updateOrder(productId, updatedOrderData);
        res.status(200).json({
            success: true,
            message: "order updated successfully.",
            data: updatedOrder,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong...",
        });
    }
};
const deleteOrder = async (req, res) => {
    try {
        const { productId } = req?.query;
        const deletedOrder = await orderService.deleteOrder(productId);
        res.status(200).json({
            success: true,
            message: "order deleted successfully.",
            data: deletedOrder,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong...",
        });
    }
};
export const OrderController = {
    createOrder,
    getOrders,
    updateOrder,
    deleteOrder,
};
//# sourceMappingURL=order.controller.js.map