import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../styles/particle-config";
import { isMobile } from "react-device-detect";

function ParticlesBg() {
  const [config, setConfig] = React.useState(ParticleConfig(isMobile));

  return <Particles className=" absolute top-0 -z-1" params={config} />;
}

export default ParticlesBg;
