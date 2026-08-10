"use client";

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}

        intensity={2}
      />
    </>
  );
}
