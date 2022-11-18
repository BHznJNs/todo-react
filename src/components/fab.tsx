import "./fab.css"
import { Component, KeyboardEvent } from "react"

export default class FAB extends Component {
    props: Readonly<{
        pushTodo: Function
    }>

    constructor(props: any) {
        super(props)
        this.props = props
    }

    keyDownEvent = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const el = event.target as HTMLInputElement
            const value = el.value
            this.props.pushTodo(value)
            el.value = ""
        }
    }
    render() {
        return (<>
            <div className="mdui-textfield mdui-fab-fixed mdui-textfield-expandable mdui-float-right">
                <button className="mdui-textfield-icon mdui-btn mdui-btn-icon mdui-color-theme-accent">
                    <i className="mdui-icon material-icons mdui-text-color-white-text">add</i>
                </button>
                <input
                    className="mdui-textfield-input" 
                    onKeyDown={this.keyDownEvent} type="text"
                    placeholder="Input your todo content here"
                />
                <button className="mdui-textfield-close mdui-btn mdui-btn-icon">
                    <i className="mdui-icon material-icons">close</i>
                </button>
            </div>
        </>)
    }
}