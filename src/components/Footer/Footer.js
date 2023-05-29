import React from "react";
import './Footer.css'
import TasksFilter from "../TasksFilter/TasksFilter";

const Footer = ({leftItems, handleFilter, clear}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{leftItems} items left</span>
            <TasksFilter handlefilter={handleFilter}/>
            <button className="clear-completed" onClick={clear}>Clear completed</button>
        </footer>
    )
}

export default Footer
