import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateEmployee from "./pages/CreateEmployee"
import EmployeeList from "./pages/EmployeeList"

export default function App() {
  const [employees, setEmployees] = useState([])

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <CreateEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route
          path="/employee-list"
          element={<EmployeeList employees={employees} />}
        />
      </Routes>
    </Router>
  )
}
