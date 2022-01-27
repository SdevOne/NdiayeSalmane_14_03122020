import React from "react"
import Form from "../components/Form"

export default function CreateEmployee({ employees, setEmployees }) {
  return <Form employees={employees} setEmployees={setEmployees} />
}
