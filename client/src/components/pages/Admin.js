import React from "react";
import axios from "axios";

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
      <table>
        test
        {console.log(students)}
        <tr>
          <th>name</th>
          <th>age</th>
          <th>responsible</th>
          <th>email</th>
        </tr>
        {students.map((student) => (
          <tr>
            <td key={student.id}>{student.name}</td>
            <td key={student.id}>{student.age}</td>
            <td key={student.id}>{student.representative}</td>
            <td key={student.id}>{student.email}</td>
          </tr>
        ))}
      </table>
    );
  };

  render() {
    return (
      <>
        <div>Admin PAGE {console.log(this.state.allStudents)}</div>
        <div>{this.displayStudents(this.state.allStudents)}</div>
      </>
    );
  }
}

export default Admin;
