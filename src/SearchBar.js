import React, { Component } from "react";
import "./SearchBar.css";
import { Container, Input, Form, Label } from "semantic-ui-react";
class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <Container style={{ backgroundColor: "lightblue" }}>
        <Form onSubmit={this.onFormSubmit}>
          <Container style={{ padding: 20 }}>
            <Label content={"Image Search"} />
            <Input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              style={{ marginTop: 10 }}
            />
          </Container>
        </Form>
      </Container>
    );
  }
}

export default SearchBar;
