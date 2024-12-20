import { useTexture } from "@react-three/drei";
import { MeshMatcapMaterialProps } from "@react-three/fiber";
import { forwardRef } from "react";
import { MeshMatcapMaterial } from "three";
import React from "react";

export const CustomMaterial = forwardRef<
  MeshMatcapMaterial,
  MeshMatcapMaterialProps
>((props, ref) => {
  // Load the "3.jpeg" texture directly
  const texture = useTexture("/images/1.jpeg");

  return (
    <meshMatcapMaterial
      {...props}
      ref={ref}
      matcap={texture}
    />
  );
});

CustomMaterial.displayName = "CustomMaterial";