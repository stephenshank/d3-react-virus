import React from "react";
import { range, path, scaleLinear } from "d3";
import Envelope from "./envelope.jsx";

function Virus(props) {
  const { width, height, outerEnvelopes } = props,
    cx = width/2,
    cy = height/2,
    r_membrane = width/6,
    r_membrane_padded = r_membrane - 2,
    r_env = width/5,
    translateString = `translate(${props.translateX},${props.translateY})`,
    shadow = path(),
    shadow_scale = scaleLinear();

  shadow_scale.domain([0, 100])
    .range([-3*Math.PI/4, Math.PI/4]);
  shadow.moveTo(
    cx + r_membrane_padded*Math.cos(shadow_scale(0)),
    cy - r_membrane_padded*Math.sin(shadow_scale(0)),
  );
  for(let i=1; i < 100; i++) {
    shadow.lineTo(
      cx + r_membrane_padded*Math.cos(shadow_scale(i)),
      cy - r_membrane_padded*Math.sin(shadow_scale(i)),
    );
  }
  shadow.quadraticCurveTo(
    cx + 1.1*r_membrane,
    cy + 1.1*r_membrane,
    cx + r_membrane_padded*Math.cos(shadow_scale(0)),
    cy - r_membrane_padded*Math.sin(shadow_scale(0)),
  );
  return (<g transform={translateString}>
    <circle
      cx={cx}
      cy={cy}
      r={r_membrane}
      fill="red"
      stroke="black"
      strokeWidth={4}
    />
    <path
      d={shadow.toString()}
      fill="DarkRed"
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
        width={props.envelopeSize}
        height={props.envelopeSize}
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
  outerEnvelopes: 10,
  envelopeSize: 50
};

export default Virus;
