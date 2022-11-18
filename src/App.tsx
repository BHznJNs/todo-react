import React from "react"
import "./App.css"
import Header from "./components/header"
import FAB from "./components/fab"
import TodoItem from "./components/todoItem"
import Drawer from "./components/drawer"
import { threadId } from "worker_threads"

export default class App extends React.Component {
    state: Readonly<{
        drawerState: boolean,
        searchQuery: string,
        todoContent: string[],
    }>

    constructor(props: any) {
        super(props)
        this.state = {
            drawerState: true, // drawer close
            searchQuery: "",
            todoContent: [
                "一条 todo",
                "两条 todo",
                "三条 todo",
                "四条 todo",
            ]
        }
    }
    
    pushTodo(content: string) {
        this.state.todoContent.push(content)
        this.setState(this.state)
    }

    render(): React.ReactNode {
        return (<>
            <Header
                openDrawer={() => {this.setState({drawerState: !this.state.drawerState})}}
                search={(query: string) => {this.setState({searchQuery: query})}}
            ></Header>
            <main>
                <Drawer isClosed={ this.state.drawerState }></Drawer>
                <ul className="mdui-list">
                    {
                        this.state.todoContent.map((item: string, index: number) => {
                            if (item.includes(this.state.searchQuery)) {
                                return (
                                    <li className="mdui-list-item" key={index}>
                                        <TodoItem content={ item }></TodoItem>
                                    </li>)
                            }
                        })
                    }
                </ul>
            </main>
            <FAB pushTodo={ this.pushTodo.bind(this) }></FAB>
        </>)
    }
}