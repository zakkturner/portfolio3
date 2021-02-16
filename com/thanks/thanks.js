import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import TextMesh from "./textMesh";

export default function Thanks() {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw", backgroundColor: "#000" }}
      camera={{ position: [-5, 2, 10], fov: 50 }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <TextMesh text="Thanks" position={[-3, 1, -5]} spin="0.005" />
      <TextMesh text="for" position={[0, 0, 0]} spin="0.01" />
      <TextMesh text="visiting" position={[6, -1, -2]} spin="0.001" />
    </Canvas>
  );
}
