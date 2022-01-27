import React from "react"
import { Link } from "react-router-dom"
import shortid from "shortid"
import "./table.css"

export default function Table(employees) {
  const employeesList = employees.employees

  const columns = [
    "First Name",
    "Last Name",
    "Start Date",
    "Department",
    "Date of Birth",
    "Street",
    "City",
    "State",
    "Zip Code",
  ]

  return (
    <>
      <main id="employee-div" className="container">
        <h1 className="table-title">Current Employees</h1>
        <Link to="/">Home</Link>
        <div className="table-container">
          <table id="employee-table" className="table">
            <thead>
              <tr>
                {columns.map((column) => {
                  return <th key={column}>{column}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {employeesList
                ? employeesList.map((employee) => {
                    return (
                      <tr key={shortid.generate()}>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.startDate}</td>
                        <td>{employee.department}</td>
                        <td>{employee.dateOfBirth}</td>
                        <td>{employee.street}</td>
                        <td>{employee.city}</td>
                        <td>{employee.state}</td>
                        <td>{employee.zipCode}</td>
                      </tr>
                    )
                  })
                : null}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
