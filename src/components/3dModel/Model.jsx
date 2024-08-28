import React, { useRef, useState, useEffect, Suspense } from 'react'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

function Model({ pos }) {
  const { nodes } = useGLTF('/Models/torrus.glb')
  const { viewport } = useThree()
  const mesh = useRef()

  // State for material properties
  const [materialProps, setMaterialProps] = useState({
    color: '#a0ff00',
    roughness: 0,
    transmission: 0,
    ior: 1,
    chromaticAberration: 0,
    backside: true
  })

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01 + pos.y / 100000
      mesh.current.rotation.y += 0.01 + pos.x / 100000 
    }
  })

  return (
    <group scale={viewport.width / 3}>
      <mesh ref={mesh} geometry={nodes.Torus002.geometry}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}

export default function ModelWrapper(props) {
  return (
    <Suspense fallback={null}>
      <Model {...props} />
    </Suspense>
  )
}
