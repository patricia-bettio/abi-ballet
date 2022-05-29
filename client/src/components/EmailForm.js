import React from "react";
// import axios from "axios";
import { Button } from "./Button";
// import "./NewForm.css";

class EmailForm extends React.Component {
  // const { label } = props;

  state = {
    //   name
    name: "",
    email: "",
    // [this.labelprops.]: "",
    //   age
    message: "",
    //   email
  };

  handleChange = ({ target }) => {
    // name and value from each input
    const { name, value } = target;
    console.log("target", target);

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit!", event);

    const newData = {
      name: this.state.name,
      message: this.state.message,
      email: this.state.email,
    };
    console.log(this.state);
    console.log(this.state.name);

    console.log(newData);

    // "proxy": "http://localhost:8080"
    // axios({
    //   url: "/api/students",
    //   method: "POST",
    //   data: newData,
    // })
    //   .then(() => {
    //     console.log("it worked!!data sent");
    //     this.resetForm();
    //   })
    //   .catch(() => {
    //     console.log("ops data was not sent!");
    //   });
  };

  resetForm = () => {
    // this.setState(this.state);
    // TODO
    // reset form
    // console.log(this.state);
    // console.log(this.state.name);
    // this.setState({
    //   [this.state.name]: "",
    // });
  };

  render() {
    console.log("Current form state:", this.state);
    // console.log("Current form state:", this.state.name);

    return (
      <>
        {/* {console.log("final state: ", this.state)} */}
        <div id="message">
          {/* <h2>New form</h2> */}
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label>
                Name
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-input">
              <label>
                Email
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-input">
              <label>
                Message
                <input
                  type="text"
                  placeholder="What is your question?"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            {/* <div className="form-input">
            <textarea
              name={label1}
              placeholder="body!"
              cols="30"
              rows="10"
              vaue={state.body}
              onChange={handleChange}
            ></textarea>
          </div> */}
            <Button buttonSize="btn--wide" buttonColor="blue">
              Submit
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export { EmailForm };
