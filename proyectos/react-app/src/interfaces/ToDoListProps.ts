import ToDoItem from "./ToDoItem"

export default interface ToDoListProps{
    items: ToDoItem[];
    onDeleteToDoItem: (itemToDeleteId: number) => void;
}