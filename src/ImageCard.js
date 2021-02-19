import React, { useEffect, useState } from "react";

const ImageCard = (props) => {
  const imgRef = React.createRef();
  const [state, setState] = useState(0);

  // const setSpans = () => {

  // };
  useEffect(() => {
    imgRef.current.addEventListener("load", setSpans);
  });

  const setSpans = () => {
    const height = imgRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    setState({
      state: spans
    });
  };

  return (
    <div style={{ gridRowEnd: `span ${state}` }}>
      <img
        ref={imgRef}
        alt={props.image.description}
        src={props.image.urls.regular}
      />
    </div>
  );
};

export default ImageCard;
