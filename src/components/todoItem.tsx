import { Component } from "react"
import "./todoItem.css"

export default class TodoItem extends Component {
    props: Readonly<{
        content: string
    }>
    state: {
        isFinished: boolean
    }
    constructor(props: any) {
        super(props)
        this.props = props

        this.state = {
            isFinished: false
        }
    }
    clickEvent = () => {
        this.setState({
            isFinished: !this.state.isFinished
        })
    }
    render() {
        return (
            <label className="mdui-checkbox">
                <input
                    checked={this.state.isFinished}
                    type="checkbox"
                    onClick={this.clickEvent}
                    onChange={() => { }}
                />
                <i className="mdui-checkbox-icon"></i>
                <span className={ this.state.isFinished ? "del" : undefined }>{this.props.content}</span>
            </label>)
    }
}