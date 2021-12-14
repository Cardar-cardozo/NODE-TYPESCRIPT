import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import CategoryModel, {
    CategoryDocument,
  CategoryInput,
} from "../models/category";


export async function createCategory(input: CategoryInput) {
  const metricsLabels = {
    operation: "createProduct",
  };

 
  try {
    const result = await CategoryModel.create(input);
   
    return result;
  } catch (e) {
    
    throw e;
  }
}

// export async function findProduct(
//   query: FilterQuery<ProductDocument>,
//   options: QueryOptions = { lean: true }
// ) {
//   const metricsLabels = {
//     operation: "findProduct",
//   };

  
//   try {
//     const result = await ProductModel.findOne(query, {}, options);

//     return result;
//   } catch (e) {
   

//     throw e;
//   }
// }

// export async function findAndUpdateProduct(
//   query: FilterQuery<ProductDocument>,
//   update: UpdateQuery<ProductDocument>,
//   options: QueryOptions
// ) {
//   return ProductModel.findOneAndUpdate(query, update, options);
// }

// export async function deleteProduct(query: FilterQuery<ProductDocument>) {
//   return ProductModel.deleteOne(query);
// }