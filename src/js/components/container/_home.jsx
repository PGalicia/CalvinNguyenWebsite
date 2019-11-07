/*
    File: _home.jsx
    Author: Patrick Galicia
    Desc: Hold all the components that are seen in the homepage
    Path: /
*/

// Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { printText } from "@reducer";

// Redux
const mapStateToProps = state => ({
  printedText: state.printedText
});

const mapDispatchToProps = dispatch => ({
  printText: text => dispatch(printText(text))
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ""
    };

    // Bindings
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.printText(this.state.inputText);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({ inputText: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <h2 id="home">Print some words</h2>
        <h3>Forbidden Words: </h3>
        <form onSubmit={this.handleFormSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.inputText}
            placeholder="Enter a phrase to print"
          />
          <button type="submit">Print</button>
        </form>
        <h4>Result: {this.props.printedText}</h4>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

// export default Home;
