import "./drawer.css"
import React from "react"

export default class Drawer extends React.Component {
    props: Readonly<{
        isClosed: boolean
    }>

    constructor(props: any) {
        super(props)
        this.props = props
    }

    render() {
        return (<>
            <div className={
                "mdui-color-white mdui-drawer " +
                (this.props.isClosed ? "drawer-close" : "")
            }>
                ... drawer content ...
            </div>
        </>)
    }
}