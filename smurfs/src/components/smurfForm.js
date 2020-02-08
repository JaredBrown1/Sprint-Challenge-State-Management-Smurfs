import React from "react";
import { connect } from "react-redux";
import { getData, addSmurf } from "../actions/actions";

//variables for switch statement
const NAME = "NAME";
const HEIGHT = "HEIGHT";
const AGE = "AGE";

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      new: {
        name: "",
        height: "",
        age: ""
      }
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ id: null, new: this.props.addSmurf(this.state.new) });
  }

  handleChange(input, action) {
    switch (action) {
      case NAME:
        return {
          ...this.state,
          new: {
            ...this.state.new,
            name: input
          }
        };
      case HEIGHT:
        return {
          ...this.state,
          new: {
            ...this.state.new,
            height: input
          }
        };
      case AGE:
        return {
          ...this.state,
          new: {
            ...this.state.new,
            age: input
          }
        };
      default:
        return this.state;
    }
  }

  render() {
    return (
      <div>
        <h1>Create a smurf</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          New name
          <input
            type="text"
            value={this.state.new.name}
            onChange={ref =>
              this.setState(this.handleChange(ref.target.value, NAME))
            }
          />
          New Height
          <input
            type="text"
            value={this.state.new.height}
            onChange={ref =>
              this.setState(this.handleChange(ref.target.value, HEIGHT))
            }
          />
          New Age
          <input
            type="text"
            value={this.state.new.age}
            onChange={ref =>
              this.setState(this.handleChange(ref.target.value, AGE))
            }
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData, addSmurf })(SmurfForm);
