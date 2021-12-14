import { object, number, string, TypeOf } from "zod";



const payload = {
  body: object({
    categoryName: string({
      required_error: "Title is required",
    }),
    image: string({
      required_error: "Image is required",
    }),
  }),
};

const params = {
  params: object({
    categoryId: string({
      required_error: "productId is required",
    }),
  }),
};

export const createCategorySchema = object({
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

export type CreateCategoryInput = TypeOf<typeof createCategorySchema>;
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type ReadProductInput = TypeOf<typeof getProductSchema>;
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>;