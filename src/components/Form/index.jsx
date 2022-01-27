import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Modal } from "simple-modal-wh"
import "./form.css"

export default function Form({ employees, setEmployees }) {
  const states = [
    {
      name: "--- Select state ---",
      abbreviation: "",
    },
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ]
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [dateOfBirth, setDateOfBirth] = useState()
  const [startDate, setStartDate] = useState()
  const [department, setDepartment] = useState()
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zipCode, setZipCode] = useState()
  const [isEmployeeCreated, setIsEmployeeCreated] = useState(false)
  const toggleModal = () => {
    setIsEmployeeCreated(!isEmployeeCreated)
  }
  const saveEmployee = (e) => {
    e.preventDefault()
    const employee = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      startDate: startDate,
      department: department,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    }
    setEmployees((employees) => [...employees, employee])
    setIsEmployeeCreated(true)
  }
  const setModal = () => {
    return (
      <Modal
        message="Employee created"
        showModal={isEmployeeCreated}
        updateModalState={toggleModal}
      />
    )
  }

  return (
    <main className="container">
      <h1 className="title">HRnet</h1>
      <Link className="list-link" to="employee-list">
        View Current Employees
      </Link>
      <form action="#" id="create-employee">
        <h2 className="form-title">Create Employee</h2>
        <div className="first-form-container">
          <div className="identity-container">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input
              type="date"
              id="date-of-birth"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <label htmlFor="start-date">Start Date</label>
            <input
              type="date"
              id="start-date"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="address-container">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              onChange={(e) => setStreet(e.target.value)}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              onChange={(e) => setState(e.target.value)}
            >
              {states.map((state) => {
                return (
                  <option
                    key={state.abbreviation.toString()}
                    value={state.abbreviation}
                  >
                    {state.name}
                  </option>
                )
              })}
            </select>
            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              id="zip-code"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>

        <div className="department-container">
          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option>--- Select department ---</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
      </form>
      <button className="form-btn" onClick={(e) => saveEmployee(e)}>
        Save
      </button>
      {isEmployeeCreated ? setModal() : null}
    </main>
  )
}
