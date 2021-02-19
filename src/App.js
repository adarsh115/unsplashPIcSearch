import "./styles.css";
import SearchBar from "./SearchBar";
import React from "react";
import axios from "axios";

import { Container } from "semantic-ui-react";

class App extends React.Component {
  // check use of async here
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 9gNpSiE1xZrgdk2c6FIL1XPtDpklf503uGoqXv-6c-w"
      }
    });

    console.log(response);
  };

  render() {
    return (
      <Container style={{ margin: 20 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </Container>
    );
  }
}

export default App;
