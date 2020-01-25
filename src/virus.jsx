import React from "react";
import { range } from "d3";
import Envelope from "./envelope.jsx";

function Virus(props) {
  const { width, height, outerEnvelopes } = props,
    cx = width/2,
    cy = height/2,
    r_env = width/5,
    translateString = `translate(${props.translateX},${props.translateY})`;
  return (<g transform={translateString}>
    <circle
      cx={cx}
      cy={cy}
      r={width/6}
      fill="red"
      stroke="black"
      strokeWidth={4}
    />
    {range(outerEnvelopes).map(i => {
      const angle_radians = 2*Math.PI*i/outerEnvelopes,
        angle_degrees = 180*angle_radians/Math.PI,
        cx_i = cx + r_env*Math.sin(angle_radians),
        // minus for svg coordinates vs. Cartesian
        cy_i = cy - r_env*Math.cos(angle_radians);
      return (<Envelope
        key={i}
        cx={cx_i}
        cy={cy_i}
        width={50}
        height={50}
        rotate={angle_degrees}
      />);
    })}
  </g>);
}

Virus.defaultProps = {
  size: 300,
  translateX: 0,
  translateY: 0,
  width: 400,
  height: 400,
  outerEnvelopes: 10
};

export default Virus;
