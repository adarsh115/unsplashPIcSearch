import React from "react";
import { Container } from "semantic-ui-react";
import "./Image.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const imagelist = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <Container className="image">{imagelist}</Container>;
};

export default ImageList;
