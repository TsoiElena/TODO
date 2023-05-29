import React from "react";

const Task = ({description, created, editing, onDeleted, handleDone, done}) => {
    const edit = <input type="text" className="edit" value="Editing task"/>

    return (
        <>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={handleDone} checked={done}/>
                <label>
                    <span className="description">{description}</span>
                    <span className="created">{created}</span>
                </label>
                <button className="icon icon-edit"/>
                <button className="icon icon-destroy" onClick={onDeleted}/>
            </div>
            {editing ? edit: null}
        </>
    )
}

export default Task
