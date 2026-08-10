"use client";

import { Canvas } from "@react-three/fiber";

import Lighting from "./Lighting";
import Camera from "./Camera";
import Character from "./Character";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
    >
      <Camera />

      <Lighting />

      <Character />
    </Canvas>
  );
}
