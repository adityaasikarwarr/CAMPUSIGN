"use client";

import { Float } from "@react-three/drei";

export default function Character() {
  return (
    <Float
      speed={2}

      rotationIntensity={0.5}

      floatIntensity={1}
    >
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />

        <meshStandardMaterial color="black" />
      </mesh>
    </Float>
  );
}
