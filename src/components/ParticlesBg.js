import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../../particle-config";

function ParticlesBg() {
  return (
    <Particles
      params={ParticleConfig}
      style={{ position: "absolute", top: "0em", zIndex: "-1" }}
    ></Particles>
  );
}

export default ParticlesBg;
