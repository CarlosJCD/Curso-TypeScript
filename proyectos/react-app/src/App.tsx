import React, { useState } from 'react';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import ToDoItem from './interfaces/ToDoItem';

const App: React.FC = () => {
    const [toDoItems, setToDoItems] = useState<ToDoItem[]>([])

    const AddToDoItem = (textTaskToDo: string) => {
        const newToDoItem: ToDoItem = {
            id: Math.random(), 
            text: textTaskToDo
        }

        setToDoItems(previousToDoItems => [ ...previousToDoItems, newToDoItem ])
    }

    const DeleteToDoItem = (itemToDeleteId: number) => {
        setToDoItems( prevToDoItems => toDoItems.filter(toDoItem => toDoItem.id !== itemToDeleteId) )
    }

    return(
        <div className="App">
            <NewToDo onAddToDoItem={AddToDoItem}/>
            <ToDoList items={toDoItems} onDeleteToDoItem={DeleteToDoItem}/>
        </div>
    )
}

export default App;
