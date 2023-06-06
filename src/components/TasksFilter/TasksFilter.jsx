import React, {Component} from "react"
import PropTypes from 'prop-types'
import './TasksFilter.css'

const SELECTED = 'selected'

export default class TasksFilter extends Component {
    constructor() {
        super()
        this.state = {
            all: SELECTED,
            active: '',
            complete: ''
        }
        this.onClick = (e) => {
            const text = e.target.innerText
            if(text === 'All') {
                this.setState({
                    all: SELECTED,
                    active: '',
                    complete: ''
                })
                this.props.handlefilter('all')
            }
            if(text === 'Active') {
                this.setState({
                    all: '',
                    active: SELECTED,
                    complete: ''
                })
                this.props.handlefilter('active')
            }
            if (text !== 'Completed') {
                return
            }
            this.setState({
                all: '',
                active: '',
                complete: SELECTED
            })
            this.props.handlefilter('completed')
        }
    }
    render () {
        const {all, active, complete} = this.state
        return (
            <ul className="filters">
                <li>
                    <button className={all} onClick={this.onClick}>All</button>
                </li>
                <li>
                    <button className={active} onClick={this.onClick}>Active</button>
                </li>
                <li>
                    <button className={complete} onClick={this.onClick}>Completed</button>
                </li>
            </ul>
        )
    }
    static defaultPtops = {
        handlefilter: ()=>{}
    }

    static propTypes = {
        handlefilter: PropTypes.func
    }
}
