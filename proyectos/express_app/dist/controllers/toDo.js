"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDoItem = exports.updateToDoItem = exports.createToDoItem = exports.getToDoItems = void 0;
const ToDoItem_1 = __importDefault(require("../models/ToDoItem"));
let ToDoItems = [];
const getToDoItems = (request, response, next) => {
    response.json({
        toDoItems: ToDoItems,
        total: ToDoItems.length
    });
};
exports.getToDoItems = getToDoItems;
const createToDoItem = (request, response, next) => {
    const newToDoItemText = request.body.text;
    const newToDoItem = new ToDoItem_1.default(Math.random(), newToDoItemText);
    ToDoItems = [...ToDoItems, newToDoItem];
    response.json({ message: "ToDoItem created succesfully!", createdToDo: newToDoItem });
};
exports.createToDoItem = createToDoItem;
const updateToDoItem = (request, response, next) => {
    const idOfItemToUpdate = request.params.id;
    const updatedToDoItemText = request.body.text;
    ToDoItems.forEach(toDoItem => {
        if (toDoItem.id == idOfItemToUpdate) {
            toDoItem.text = updatedToDoItemText;
        }
    });
    response.json({ message: `To Do item with the ID ${idOfItemToUpdate} updated successfully` });
};
exports.updateToDoItem = updateToDoItem;
const deleteToDoItem = (request, response, next) => {
    const idOfItemToDelete = request.params.id;
    ToDoItems = ToDoItems.filter(toDoItem => toDoItem.id != idOfItemToDelete);
    response.json({
        message: `To Do item with the ID ${idOfItemToDelete} deleted successfully`
    });
};
exports.deleteToDoItem = deleteToDoItem;
