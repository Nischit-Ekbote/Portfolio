'use client'

import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Environment } from '@react-three/drei'

function Scene({pos}) {
    return (
        <Canvas>
            <directionalLight intensity={1} position={[100 ,0 ,0]} color={'yellow'}/>
            <Environment preset='city' />
            <Model mousePosition={pos} pos={pos}/> 
        </Canvas>
    );
}

export default Scene