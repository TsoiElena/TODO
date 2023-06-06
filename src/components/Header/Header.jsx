import React from 'react'
import PropTypes from 'prop-types'

import NewTaskForm from '../NewTaskForm/NewTaskForm'

function Header({ addNewTask }) {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addNewTask={addNewTask} />
      </header>
    )
}

Header.defaultProps = {
    addNewTask: () => {},
}

Header.propTypes = {
    addNewTask: PropTypes.func,
}

export default Header
