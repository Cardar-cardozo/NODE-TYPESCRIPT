import { Request, Response } from "express";
import {
    CreateCategoryInput,
  UpdateProductInput,
} from "../schema/category.shema";
import {
  createCategory,
  
} from "../service/category.service";

export async function createCategoryHandler(
  req: Request<{}, {}, CreateCategoryInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;

  const body = req.body;

  const category = await createCategory({ ...body, user: userId });

  return res.send(category);
}

// export async function updateProductHandler(
//   req: Request<UpdateProductInput["params"]>,
//   res: Response
// ) {
//   const userId = res.locals.user._id;

//   const productId = req.params.productId;
//   const update = req.body;

//   const product = await findProduct({ productId });

//   if (!product) {
//     return res.sendStatus(404);
//   }

//   if (String(product.user) !== userId) {
//     return res.sendStatus(403);
//   }

//   const updatedProduct = await findAndUpdateProduct({ productId }, update, {
//     new: true,
//   });

//   return res.send(updatedProduct);
// }

// export async function getProductHandler(
//   req: Request<UpdateProductInput["params"]>,
//   res: Response
// ) {
//   const productId = req.params.productId;
//   const product = await findProduct({ productId });

//   if (!product) {
//     return res.sendStatus(404);
//   }

//   return res.send(product);
// }

// export async function deleteProductHandler(
//   req: Request<UpdateProductInput["params"]>,
//   res: Response
// ) {
//   const userId = res.locals.user._id;
//   const productId = req.params.productId;

//   const product = await findProduct({ productId });

//   if (!product) {
//     return res.sendStatus(404);
//   }

//   if (String(product.user) !== userId) {
//     return res.sendStatus(403);
//   }

//   await deleteProduct({ productId });

//   return res.sendStatus(200);
// }