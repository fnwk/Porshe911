import { useGLTF } from "@react-three/drei";

const Porshe = () => {
  const { scene } = useGLTF("/porshe911.glb");

  return (
    <group
      position={[0, -1, 0]}
      rotation={[0, Math.PI / -2, 0]}
      castShadow
      receiveShadow
    >
      <primitive object={scene} />
    </group>
  );
};

export default Porshe;
