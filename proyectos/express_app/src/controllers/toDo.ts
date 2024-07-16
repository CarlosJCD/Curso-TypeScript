import { RequestHandler } from "express";

import ToDoItem from "../models/ToDoItem";

let ToDoItems: ToDoItem[] = []

export const getToDoItems: RequestHandler = ( request, response, next ) => {
    response.json({
        toDoItems: ToDoItems,
        total: ToDoItems.length
    })
}

export const createToDoItem: RequestHandler = ( request, response, next ) => {
    const newToDoItemText = (request.body as {text: string}).text;

    const newToDoItem = new ToDoItem(Math.random(), newToDoItemText);

    ToDoItems = [...ToDoItems, newToDoItem]

    response.json({message: "ToDoItem created succesfully!", createdToDo: newToDoItem})
};

export const updateToDoItem: RequestHandler<{id: number}> = (request, response, next) => {
    const idOfItemToUpdate = request.params.id;
    
    const updatedToDoItemText = (request.body as {text: string}).text;

    ToDoItems.forEach( toDoItem => { 
        if(toDoItem.id == idOfItemToUpdate){ 
            toDoItem.text = updatedToDoItemText;
        }
    } )

    response.json({ message:`To Do item with the ID ${idOfItemToUpdate} updated successfully`})
}

export const deleteToDoItem: RequestHandler<{id: number}> = (request, response, next) => {
    const idOfItemToDelete = request.params.id;

    ToDoItems = ToDoItems.filter(toDoItem => toDoItem.id != idOfItemToDelete)

    response.json({
        message: `To Do item with the ID ${idOfItemToDelete} deleted successfully`
    })
 
}