import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./mdui-v1.0.1/css/mdui.css"
import "./mdui-v1.0.1/js/mdui.js"

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)