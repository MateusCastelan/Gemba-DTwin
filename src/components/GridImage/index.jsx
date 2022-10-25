import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import teste from "./img/teste.jpg";
import teste2 from "./img/teste2.jpg";

const LionImage = () => {
  const [image] = useImage(teste);
  return <Image image={image} draggable />;
};

class URLImage extends React.Component {
  state = {
    image: null,
  };
  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener("load", this.handleLoad);
  }
  loadImage() {
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener("load", this.handleLoad);
  }
  handleLoad = () => {
    this.setState({
      image: this.image,
    });
  };
  render() {
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        draggable
        image={this.state.image}
        ref={(node) => {
          this.imageNode = node;
        }}
      />
    );
  }
}

class GridImage extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <URLImage src={teste2} y={350} />
          <LionImage />
        </Layer>
      </Stage>
    );
  }
}

export default GridImage;
