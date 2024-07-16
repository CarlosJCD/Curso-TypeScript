import React, { JSX }from "react";



import ToDoListProps from "../interfaces/ToDoListProps";
import ToDoItem from "../interfaces/ToDoItem";
import { List, Button, Icon } from "semantic-ui-react";


const ToDoList: React.FC<ToDoListProps> = props => {
    const buildToDoItemInJSX: (toDoItem: ToDoItem) => JSX.Element = (toDoItem: ToDoItem) => {
        return (
            <List.Item  key={toDoItem.id} >
                {toDoItem.text}
                <Button onClick={props.onDeleteToDoItem.bind(null, toDoItem.id)} circular size="mini">
                    <Icon color="red" name="cancel"/>
                </Button>
            </List.Item>
        )
    }


    return (
        <List>
            {props.items.map(toDoItem => buildToDoItemInJSX(toDoItem))}
        </List> 
    )
}

export default ToDoList;