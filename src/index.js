import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./assets/styles/global.scss"
import "./index.css"
import { AppContextProvider } from "./utils/AppContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
)
