import "./header.css"
import { Component, KeyboardEvent } from "react"

export default class Header extends Component {
    props: Readonly<{
        openDrawer: Function,
        search: Function,
    }>

    constructor(props: any) {
        super(props)
        this.props = props
    }
    openDrawer = () => {
        this.props.openDrawer()
    }
    keyDownEvent = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const el = event.target as HTMLInputElement
            this.props.search(el.value)
        }
    }
    render() {
        return (<>
            <div className="mdui-toolbar mdui-color-theme">
                <button onClick={ this.openDrawer } className="mdui-btn mdui-btn-icon">
                    <i className="mdui-icon material-icons">menu</i>
                </button>
                <span className="mdui-typo-title">Todo React</span>
                <div className="mdui-toolbar-spacer"></div>
                <div className="mdui-textfield mdui-textfield-expandable mdui-float-right">
                    <button className="mdui-textfield-icon mdui-btn mdui-btn-icon">
                        <i className="mdui-icon material-icons">search</i>
                    </button>
                    <input
                        className="mdui-textfield-input"
                        type="text" placeholder="Search"
                        onKeyDown={ this.keyDownEvent }
                    />
                    <button className="mdui-textfield-close mdui-btn mdui-btn-icon">
                        <i className="mdui-icon material-icons">close</i>
                    </button>
                </div>
                <button className="mdui-btn mdui-btn-icon">
                    <i className="mdui-icon material-icons">more_vert</i>
                </button>
            </div>
        </>)
    }
}