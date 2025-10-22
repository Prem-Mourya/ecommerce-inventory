// An Interface in TypeScript is a way to define the shape of an object. It's like a blueprint or a contract that says what properties an object must have and what type those properties should be.

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory; // this is object
};

export type TVariant = {
  type: string;
  value: string;
};
export type TInventory = {
  quantity: number;
  inStock: boolean;
};
