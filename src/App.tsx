import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Stage,
} from "@react-three/drei/core";

import Porshe from "./components/Porshe";
import Credits from "./components/Credits";
import Title from "./components/Title";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Title />
      <Credits />
      <Suspense fallback={<Loading />}>
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[-4, 0.5, 2]} />
          <OrbitControls target={[-0.5, 0, 0]} maxPolarAngle={Math.PI / 2} />
          <Stage>
            <Porshe />
          </Stage>
          <Environment preset="city" blur={1} />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
