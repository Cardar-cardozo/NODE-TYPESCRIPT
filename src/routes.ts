import { Express, Request, Response } from "express";
import { createCategoryHandler } from "./controller/category.controller";
import { createProductHandler } from "./controller/product.controller";
import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from "./controller/session.controller";
import { createUserHandler } from "./controller/user.controller";
import requireUser from "./middleware/requireUser";
import validateResource from "./middleware/validateResource";
import { createProductSchema } from "./schema/product.schema";
import { createSessionSchema } from "./schema/session.schema";
import { createCategorySchema } from "./schema/category.shema";
import { createUserSchema } from "./schema/user.schema";

function routes(app:Express) {
    // app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    app.post("/create", validateResource(createUserSchema), createUserHandler);
    app.post("/login", validateResource(createSessionSchema),
    createUserSessionHandler);
    app.get("/getsessions", requireUser, getUserSessionsHandler);
    app.delete("/deletesessions", requireUser, deleteSessionHandler);
    app.post(
        "/products",
        [requireUser, validateResource(createProductSchema)],
        createProductHandler
      );
      app.post(
        "/category",
        [requireUser, validateResource(createCategorySchema)],
        createCategoryHandler
      );

}

export default routes