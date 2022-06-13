import React from "react";
import axios from "axios";
import { Button } from "./Button";
import "./NewForm.css";

class NewForm extends React.Component {
  state = {
    name: "",
    representative: "",
    age: "",
    email: "",
    error: "",
    success: "",
  };

  handleChange = ({ target }) => {
    // name and value from each input
    const { name, value } = target;
    this.setState({
      [name]: value,
      error: false,
      success: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    //VERIFY AGAINST THE DB
    axios.get("/api").then((res) => {
      const allEmails = res.data.map((res) => res.email);

      if (allEmails.includes(this.state.email)) {
        this.setState({
          error: true,
        });
      } else {
        const newData = {
          name: this.state.name,
          representative: this.state.representative,
          age: this.state.age,
          email: this.state.email,
        };
        // SEND FORM
        axios({
          url: "/api/students",
          method: "POST",
          data: newData,
        })
          .then(() => {
            console.log("it worked!!data sent");
            this.setState({
              name: "",
              representative: "",
              age: "",
              email: "",
              error: false,
              success: true,
            });
          })
          .catch(() => {
            console.log("ops data was not sent!");
          });
      }
    });
  };

  render() {
    console.log("Current form state:", this.state);

    return (
      <>
        <div id="register">
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label>
                Name*
                <input
                  type="text"
                  placeholder="Enter full name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-input">
              <label>
                Age*
                <input
                  type="text"
                  placeholder="Enter the student age"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-input">
              <label>
                Email*
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <div className={this.state.error ? "showError" : "hideError"}>
                <p>This email has already been registered.</p>
                <p>
                  Please contact us if you don't remember having registered
                  before.
                </p>
              </div>
            </div>
            <div className="form-input">
              <label>
                Representative *if minor
                <input
                  type="text"
                  placeholder="Legal guardian's full name"
                  name="representative"
                  value={this.state.representative}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <Button buttonColor="greenBtn">Submit</Button>
            <div className={this.state.success ? "showSuccess" : "hideSuccess"}>
              Thank you! We are looking forward to meeting you, you will be
              contacted within 48h.
            </div>
          </form>
        </div>
      </>
    );
  }
}

export { NewForm };
