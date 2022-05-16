import React from "react";
import axios from "axios";

class NewForm extends React.Component {
  // const { label } = props;

  state = {
    //   name
    [this.props.label]: "",
    //   age
    //   email
  };

  handleChange = (event) => {
    console.log("Name? ", event.target.name);
    console.log("value? ", event.target.value);

    // const target = event.target;
    const labelName = event.target.name;
    const value = event.target.value;

    // update the state
    // console.log("clean state", state);

    // console.log(value);
    this.setState({
      [labelName]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    const newData = {
      [this.props.label]: this.state,
    };
    console.log(newData);

    // "proxy": "http://localhost:8080"
    axios({
      url: "/api/students",
      method: "POST",
      data: newData,
    })
      .then(() => {
        console.log("it worked!!data sent");
      })
      .catch(() => {
        console.log("ops data was not sent!");
      });
  };

  render() {
    console.log("clean state", this.state);

    return (
      <>
        {/* {console.log("final state: ", this.state)} */}
        <div>
          <h2>New form</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label>
                {this.props.label}
                <input
                  type="text"
                  placeholder="text!"
                  name={this.props.label}
                  value={this.state.label}
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
            <button>Submit NEW</button>
          </form>
        </div>
      </>
    );
  }
}

export { NewForm };
