import { Product } from "./product.model.js";
const getProducts = async (searchTerm = "") => {
    const query = searchTerm
        ? { name: { $regex: searchTerm, $options: "i" } }
        : {};
    const data = await Product.find(query);
    return data;
};
const createAProductIntoDB = async (productData) => {
    const result = await Product.create(productData);
    return result;
};
const getProductById = async (params) => {
    const productId = params;
    const productById = await Product.findById(productId);
    return productById;
};
const updateProductById = async (req) => {
    const productId = req?.params?.productId;
    const data = req?.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, data);
    return updatedProduct;
};
const deleteProductById = async (productId) => {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
};
export const productServices = {
    getProducts,
    createAProductIntoDB,
    getProductById,
    updateProductById,
    deleteProductById,
};
//# sourceMappingURL=product.service.js.map