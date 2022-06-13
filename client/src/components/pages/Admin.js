import React from "react";
import axios from "axios";
import {
  BsFillCheckCircleFill,
  BsXCircleFill,
  BsExclamationTriangle,
  BsTrash,
  BsTelephone,
  BsEnvelope,
} from "react-icons/bs";
import { NewForm } from "../NewForm";
import "./Admin.css";

class Admin extends React.Component {
  state = {
    allStudents: [],
  };

  componentDidMount() {
    axios.get("/api").then((res) => {
      const data = res.data;
      console.log(data);
      this.setState({ allStudents: data });
    });
  }

  displayStudents = (students) => {
    return (
      <table className="studentsTable">
        <tbody>
          {console.log(students)}
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Contact information</th>
            <th>Status</th>
            <th>
              Delete <BsExclamationTriangle />
            </th>
          </tr>
          {students.map((student, id) => (
            <tr key={id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <div>
                  <BsEnvelope />
                  {student.email}
                </div>
                <div>
                  <BsTelephone />
                  Phone number
                </div>
                <p className="representative">{student.representative}</p>
              </td>
              {student.status === false ? (
                <td>
                  <BsXCircleFill
                    color="darkred"
                    onClick={() => {
                      this.handleStatus(student);
                    }}
                  />
                  Inactive
                </td>
              ) : (
                <td>
                  <BsFillCheckCircleFill
                    color="darkgreen"
                    onClick={() => {
                      this.handleStatus(student);
                    }}
                  />
                  Active
                </td>
              )}
              <td>
                <BsTrash
                  onClick={() => {
                    this.handleDelete(student._id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  handleDelete = (id) => {
    axios.delete(`/api/delete/${id}`);
    this.componentDidMount();
    //update
    this.displayStudents(this.state.allStudents);
  };

  handleStatus = (student) => {
    console.log(student);
    axios.patch(`/api/patch/${student._id}`, {
      status: student.status === false ? true : false,
    });
    this.componentDidMount();
  };

  render() {
    return (
      <div className="studentsTable">
        <h1>Teacher area</h1>

        <div className="sectionWrapper">
          <h2>Add new student:</h2>
          <NewForm />
        </div>
        <div className="sectionWrapper">
          <h2>All students:</h2>
          <div>{this.displayStudents(this.state.allStudents)}</div>
        </div>
      </div>
    );
  }
}

export default Admin;
