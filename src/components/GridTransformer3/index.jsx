import React from "react";
import { render } from "react-dom";
import { Stage, Layer, Image, Transformer } from "react-konva";
import teste from "./img/teste.jpg";
import useImage from "use-image";
import Konva from "konva";

const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const [image] = useImage(teste);
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  React.useLayoutEffect(() => {
    shapeRef.current.cache();
  }, [shapeProps, image, isSelected]);

  return (
    <React.Fragment>
      <Image
        image={image}
        onClick={onSelect}
        ref={shapeRef}
        blurRadius={10}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          node.width(Math.max(5, node.width() * scaleX));
          node.height(Math.max(node.height() * scaleY));

          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: node.width(),
            height: node.height(),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

const initialRectangles = [
  {
    x: 200,
    y: 200,
    width: 100,
    height: 100,
    id: "rect1",
  },
];

const GridTransformer2 = () => {
  const [rectangles, setRectangles] = React.useState(initialRectangles);
  const [selectedId, selectShape] = React.useState(null);

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={(e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
          selectShape(null);
        }
      }}
    >
      <Layer>
        {rectangles.map((rect, i) => {
          return (
            <Rectangle
              key={i}
              shapeProps={rect}
              isSelected={rect.id === selectedId}
              onSelect={() => {
                selectShape(rect.id);
              }}
              onChange={(newAttrs) => {
                const rects = rectangles.slice();
                rects[i] = newAttrs;
                setRectangles(rects);
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default GridTransformer2;
