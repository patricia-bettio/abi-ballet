import React from "react";
import { Button } from "./Button";
import { send } from "emailjs-com";

class EmailForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleChange = ({ target }) => {
    // name and value from each input
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit!", event);

    const newData = {
      from_name: this.state.name,
      message: this.state.message,
      reply_to: this.state.email,
    };

    console.log(newData);

    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, //service id
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, //template id
      newData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY //public key
    )
      .then((response) => {
        console.log("Message sent!", response.status, response.text);
        this.setState({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("Ops smt went wrong...", err);
      });
  };

  render() {
    console.log("Current form state:", this.state);
    return (
      <>
        <div id="message">
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
                <textarea
                  type="textarea"
                  placeholder="What is your question?"
                  name="message"
                  rows="4"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </label>
            </div>
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
