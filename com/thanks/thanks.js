import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import Exo from "./Exo.json";

export default function Thanks() {
  const font = new THREE.FontLoader().parse(Exo);

  // configure font geometry
  const textOptions = {
    font,
    size: 5,
    height: 1,
  };

  return (
    <Canvas style={{}} camera={{ position: [0, 0, 10] }}>
      <mesh camera={{ position: [0, 0, 0] }}>
        <textGeometry attach="geometry" args={["Thanks", textOptions]} />
        <meshStandardMaterial attach="material" />
      </mesh>
    </Canvas>
  );
}
