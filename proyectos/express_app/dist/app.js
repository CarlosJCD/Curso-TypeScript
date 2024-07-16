"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const toDo_1 = __importDefault(require("./routes/toDo"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((error, request, response, next) => {
    response.json({ message: error.message });
});
app.use("/toDoItems", toDo_1.default);
app.listen(3000);
