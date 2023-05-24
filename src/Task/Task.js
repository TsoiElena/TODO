import React from "react";

const Task = ({description, created, editing}) => {
    const edit = <input type="text" className="edit" value="Editing task"/>

    return (
        <>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>
                    <span className="description">{description}</span>
                    <span className="created">{created}</span>
                </label>
                <button className="icon icon-edit"/>
                <button className="icon icon-destroy"/>
            </div>
            {editing ? edit: null}
        </>
    )
}

export default Task
