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
      <ul>
        test
        {console.log(students)}
        {/* {students.map((student) => (
          // console.log("one student", student.name.name);
          <li key={student.id}>{student.name}</li>
        ))} */}
      </ul>
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
