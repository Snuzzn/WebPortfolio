import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../styles/particle-config";
import { useMediaQuery } from "react-responsive";

function ParticlesBg() {
  const [config, setConfig] = React.useState(ParticleConfig);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  React.useEffect(() => {
    setConfig(ParticleConfig(isTabletOrMobile));
  }, [isTabletOrMobile]);

  return <Particles className=" absolute top-0 -z-1" params={config} />;
}

export default ParticlesBg;
