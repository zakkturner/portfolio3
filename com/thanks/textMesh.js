import * as THREE from "three";
import Exo from "./Exo.json";
import { useRef } from "react";
import { useFrame } from "react-three-fiber";

export default function TextMesh({ text, position }) {
  const font = new THREE.FontLoader().parse(Exo);
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.y += 0.005));
  // configure font geometry
  const textOptions = {
    font,
    size: 1,
    height: 1,
  };
  return (
    <mesh position={position} ref={mesh}>
      <textGeometry
        attach="geometry"
        args={[text, textOptions]}
        color="white"
      />
      <meshStandardMaterial attach="material" speed={1} factor={0.2} />
    </mesh>
  );
}
