import React from "react";
import { path } from "d3";

function Envelope(props) {
  const { width, height } = props,
    translateX = props.cx - width/2,
    translateY = props.cy - props.height/2,
    translateString = `translate(${translateX},${translateY})`,
    rotateString = `rotate(${props.rotate} ${translateX} ${translateY})`,
    transformString= translateString + ' ' + rotateString,
    etop = path(),
    estem = path(),
    esteml = path(),
    estemr = path();

  etop.moveTo(width/4, height/6);
  etop.quadraticCurveTo(width/4, 0, width/2, 0);
  etop.quadraticCurveTo(3*width/4, 0, 3*width/4, height/6);
  etop.quadraticCurveTo(3*width/4, height/3, width/2, height/3);
  etop.quadraticCurveTo(width/4, height/3, width/4, height/6);

  estem.moveTo(width/3, height/6);
  estem.quadraticCurveTo(width/2, height/2, width/4, height);
  estem.quadraticCurveTo(width/2, height, 3*width/4, height);
  estem.quadraticCurveTo(width/2, height/2, 2*width/3, height/6);
  estem.moveTo(width/3, height/6);

  esteml.moveTo(width/3, height/6);
  esteml.quadraticCurveTo(width/2, height/2, width/4, height);

  estemr.moveTo(2*width/3, height/6);
  estemr.quadraticCurveTo(width/2, height/2, 3*width/4, height);
  return (<g
      transform={transformString}
    >
    <path
      d={estem.toString()}
      fill="red"
    />
    <path
      d={esteml.toString()}
      stroke="black"
      strokeWidth={2}
      fill="none"
    />
    <path
      d={estemr.toString()}
      stroke="black"
      strokeWidth={2}
      fill="none"
    />
    <path
      d={etop.toString()}
      stroke="black"
      strokeWidth={2}
      fill="red"
    />
  </g>)
}

Envelope.defaultProps = {
  width: 100,
  height: 100,
  rotate: 0
};

export default Envelope;
