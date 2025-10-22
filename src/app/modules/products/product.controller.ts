import type { Request, Response } from "express";
import ProductValidationSchema from "./product.validation.js";
import { productServices } from "./product.service.js";
import { string } from "zod";

const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req?.query;
    const products = await productServices.getProducts(searchTerm as string);
    res.status(200).json({
      success: true,
      message: "All products fetch successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};
const createProducts = async (req: Request, res: Response) => {
  try {
    const zodParser = ProductValidationSchema.parse(req.body); // validation with zod
    const result = await productServices.createAProductIntoDB(zodParser);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const params = req.params.productId;
    const productById = await productServices.getProductById(params);
    res.status(200).json({
      success: true,
      message: "Here is your product.",
      data: productById,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong!!!",
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await productServices.updateProductById(req);
    res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong!!!",
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const productId = req?.params?.productId;
    const deletedProduct = await productServices.deleteProductById(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong!!!",
    });
  }
};

export const ProductController = {
  getProducts,
  createProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
