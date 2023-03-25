import React from "react";
import { Component } from "react";
import "./add-player-form.styles.css";

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  onNameChange = (e) => {
    // console.log(e.target.value);
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div className='add-player-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input type='submit' value='Add Player' />
        </form>
      </div>
    );
  }
}

export default AddPlayerForm;
