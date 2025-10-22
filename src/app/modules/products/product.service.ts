import type { TProduct } from "./product.interface.js";
import { Product } from "./product.model.js";

const getProducts = async (searchTerm = "") => {
  const query = searchTerm
    ? { name: { $regex: searchTerm, $options: "i" } }
    : {};
  const data = await Product.find(query);
  return data;
};
const createAProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getProductById = async (params: any) => {
  const productId = params;
  const productById = await Product.findById(productId);
  return productById;
};

const updateProductById = async (req: any) => {
  const productId: String = req?.params?.productId;
  const data: TProduct = req?.body;
  const updatedProduct = await Product.findByIdAndUpdate(productId, data);
  return updatedProduct;
};

const deleteProductById = async (productId: string | undefined) => {
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
