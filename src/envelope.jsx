import React from "react";
import { path } from "d3";

function Envelope(props) {
  const { width, height } = props,
    translateX = props.cx - width/2,
    translateY = props.cy - props.height/2,
    translateString = `translate(${translateX},${translateY})`,
    rotateString = `rotate(${props.rotate},${width/2},${height/2})`,
    etop = path(),
    estem = path(),
    esteml = path(),
    estemr = path(),
    etop_shadow = path(),
    etop_left = width/4,
    etop_middle = width/2,
    etop_right = 3*width/4,
    etop_top = 0,
    etop_center = height/6,
    etop_bottom = height/3;

  etop.moveTo(etop_left, etop_center);
  etop.quadraticCurveTo(width/4, 0, etop_middle, etop_top);
  etop.quadraticCurveTo(3*width/4, 0, etop_right, etop_center);
  etop.quadraticCurveTo(3*width/4, height/3, etop_middle, etop_bottom);
  etop.quadraticCurveTo(width/4, height/3, etop_left, etop_center);

  etop_shadow.moveTo(etop_right, etop_center);
  etop_shadow.quadraticCurveTo(3*width/4, height/3, etop_middle, etop_bottom);
  etop_shadow.quadraticCurveTo(width/4, height/3, etop_left, etop_center);
  etop_shadow.quadraticCurveTo(width/2, 2*height/5, etop_right, etop_center);

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
      transform={translateString}
    >
    <g transform={rotateString}>
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
        fill="red"
      />
      <path
        d={etop_shadow.toString()}
        fill="DarkRed"
      />
      <path
        d={etop.toString()}
        stroke="black"
        strokeWidth={2}
        fill="none"
      />
    </g>
  </g>)
}

Envelope.defaultProps = {
  width: 100,
  height: 100,
  rotate: 0
};

export default Envelope;
