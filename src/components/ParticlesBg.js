import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../styles/particle-config";

function ParticlesBg() {
  return (
    <Particles
      params={ParticleConfig}
      style={{ position: "absolute", top: "0em", zIndex: "-1" }}
    />
  );
}

export default ParticlesBg;
