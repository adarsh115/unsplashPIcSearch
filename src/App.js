import "./styles.css";
import SearchBar from "./SearchBar";
import React from "react";
import unsplash from "./api/unsplash";

import { Container } from "semantic-ui-react";
import ImageList from "./ImageList";

class App extends React.Component {
  // check use of async here
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    console.log(response);
  };

  render() {
    return (
      <Container style={{ margin: 20 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images = {this.state.images}/>
      </Container>
    );
  }
}

export default App;
