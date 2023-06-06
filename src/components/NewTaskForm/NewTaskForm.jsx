import React, {Component} from "react"
import PropTypes from 'prop-types'

import './NewTaskForm.css'

export default class NewTaskForm extends Component {
    constructor() {
        super();
        this.state = {
            label: ''
        }
        this.onLabelChange = (e) => {
            this.setState({
                label: e.target.value
            })
        }
        this.onSubmit = (e) => {
            e.preventDefault()
            this.props.addNewTask(this.state.label)
            this.setState({
                label: ''
            })
        }
    }

    render () {
        const {label} = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus
                       onChange={this.onLabelChange} value={label}
                />
            </form>
        )
    }

    static defaultProps = {addNewTask: ()=>{}}
    static propTypes = {addNewTask: PropTypes.func}

}
