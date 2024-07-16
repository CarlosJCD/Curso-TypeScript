import express, { NextFunction, Request, Response } from "express";
import { json } from "body-parser";

import toDoRoutes from "./routes/toDo"

const app = express();

app.use(json());
app.use((error:Error, request: Request, response: Response, next: NextFunction) => { 
     response.json({ message: error.message })
})


app.use("/toDoItems", toDoRoutes);

app.listen(3000);