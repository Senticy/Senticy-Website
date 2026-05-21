'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import * as THREE from 'three'

function GalaxyParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 8000
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const colorA = new THREE.Color('#09A3B2')
    const colorB = new THREE.Color('#fb842c')
    const colorC = new THREE.Color('#FFB800')
    const colorD = new THREE.Color('#043A4B')
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 10 + 0.5
      const spinAngle = radius * 2.8
      const branchAngle = ((i % 3) / 3) * Math.PI * 2
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.6
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.25
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.6
      positions[i3]     = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ
      const mixedColor = colorA.clone()
      const t = radius / 10
      const pick = Math.random()
      if (pick < 0.4) mixedColor.lerpColors(colorA, colorB, t)
      else if (pick < 0.7) mixedColor.lerpColors(colorC, colorB, t)
      else mixedColor.lerpColors(colorA, colorD, t)
      colors[i3]     = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }
    return { positions, colors }
  }, [])
  useFrame((_, delta) => { if (ref.current) ref.current.rotation.y += delta * 0.05 })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} sizeAttenuation vertexColors transparent depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  )
}

function FloatingOrb({ position, color, scale }: { position: [number,number,number], color: string, scale: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3
      ref.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} wireframe transparent opacity={0.25} />
      </mesh>
    </Float>
  )
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.6
    state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.08) * 0.3 + 0.8
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroCanvas() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas camera={{ position: [0, 2, 7], fov: 60 }} gl={{ antialias: true }} style={{ background: '#010D12' }}>
        <ambientLight intensity={0.15} />
        <pointLight position={[3, 4, 4]} color="#09A3B2" intensity={3} />
        <pointLight position={[-4, -2, -3]} color="#fb842c" intensity={2} />
        <pointLight position={[0, 0, 2]} color="#FFB800" intensity={1} />
        <GalaxyParticles />
        <Stars radius={100} depth={80} count={4000} factor={3} fade speed={0.4} />
        <FloatingOrb position={[-4, 1.5, -2]} color="#09A3B2" scale={0.5} />
        <FloatingOrb position={[4, -0.5, -1.5]} color="#fb842c" scale={0.35} />
        <FloatingOrb position={[1, -2.5, -4]} color="#FFB800" scale={0.28} />
        <FloatingOrb position={[-2, -1, -5]} color="#09A3B2" scale={0.2} />
        <CameraRig />
      </Canvas>
    </div>
  )
}
