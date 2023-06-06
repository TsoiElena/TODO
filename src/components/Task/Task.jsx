import React, {Component} from "react"
import {formatDistanceToNow} from 'date-fns'
import PropTypes from 'prop-types'


export default class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editingValue: this.props.description,
            createdValue: 'created ' + formatDistanceToNow(this.props.created, {includeSeconds: true, addSuffix: true}),
        }
        this.editing = (e) => {
            this.setState({
                editingValue: e.target.value
            })
        }
        this.descChange = (e) => {
            e.preventDefault()
            this.props.descChanged(this.state.editingValue)
        }
        this.tick = () => {
            this.setState({
                createdValue: 'created ' + formatDistanceToNow(this.props.created, {includeSeconds: true, addSuffix: true}),
            })
        }
    }

    componentDidMount() {
        this.timerId = setInterval(()=> this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render () {
        const {description, editing, onDeleted, handleDone, done, onEdit} = this.props
        const {editingValue, createdValue} = this.state

        return (
            <>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={handleDone} checked={done}/>
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{createdValue}</span>
                    </label>
                    <button className="icon icon-edit" onClick={onEdit}/>
                    <button className="icon icon-destroy" onClick={onDeleted}/>
                </div>
                {editing ? (
                    <form onSubmit={this.descChange}>
                        <input type="text" className="edit" value={editingValue} onChange={this.editing}/>
                    </form>
                ): null}
            </>
        )
    }
    static defaultProps = {
        description: '',
        editing: false,
        onDeleted: ()=>{},
        handleDone: () => {},
        done: false,
        onEdit: ()=>{}
    }
    static propTypes = {
        description: PropTypes.string,
        editing: PropTypes.bool,
        onDeleted: PropTypes.func,
        handleDone: PropTypes.func,
        done: PropTypes.bool,
        onEdit: PropTypes.func
    }
}
