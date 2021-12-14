import { object, number, string, TypeOf } from "zod";



const payload = {
  body: object({
    title: string({
      required_error: "Title is required",
    }).nonempty({ message: "Title Can't be empty" }),
    description: string({
      required_error: "Description is required",
    }).min(2, "Description should be at least 120 characters long").nonempty({ message: "Title Can't be empty" }),
    price: number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }).int(),
    categoryName: string({
        required_error: "Category is required",
      }).nonempty({ message: "choose a category " }),
    image: string({
      required_error: "Image is required",
    }).nonempty({ message: "image Can't be empty" }),
  }),
};

const params = {
  params: object({
    productId: string({
      required_error: "productId is required",
    }),
  }),
};

export const createProductSchema = object({
  ...payload,
});

export const updateProductSchema = object({
  ...payload,
  ...params,
});

export const deleteProductSchema = object({
  ...params,
});

export const getProductSchema = object({
  ...params,
});

export type CreateProductInput = TypeOf<typeof createProductSchema>;
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type ReadProductInput = TypeOf<typeof getProductSchema>;
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>;