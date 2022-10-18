import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

// 48 36 28 24 12 16
