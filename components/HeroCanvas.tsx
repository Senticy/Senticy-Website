'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function ChaosCard({ position, rotation, color, delay }: {
  position: [number,number,number], rotation: [number,number,number], color: string, delay: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x += 0.003
    ref.current.rotation.y += 0.005
    ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.002
  })
  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <boxGeometry args={[1.4, 0.8, 0.04]} />
      <meshStandardMaterial color={color} transparent opacity={0.75} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  )
}

function HumanFigure({ stress }: { stress: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const pts: number[] = []
    for (let i = 0; i < 80; i++) { const a = (i/80)*Math.PI*2; pts.push(Math.cos(a)*0.3, 2.2+Math.sin(a)*0.3, 0) }
    for (let i = 0; i < 120; i++) { pts.push((Math.random()-0.5)*0.7, Math.random()*1.4, 0) }
    for (let i = 0; i < 60; i++) { const t=i/60; pts.push(-0.35-t*0.8, 1.8-t*0.6, 0); pts.push(0.35+t*0.8, 1.8-t*0.6, 0) }
    for (let i = 0; i < 60; i++) { const t=i/60; pts.push(-0.2, -t*1.2, 0); pts.push(0.2, -t*1.2, 0) }
    for (let i = 0; i < 100; i++) { pts.push(-1.5+(i/100)*3, -1.3, 0) }
    return new Float32Array(pts)
  }, [])
  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.x = Math.sin(state.clock.elapsedTime*2)*0.02*stress
    const mat = ref.current.material as THREE.PointsMaterial
    mat.color.setHSL(0.55-stress*0.15, 0.8, 0.6+stress*0.1)
    mat.opacity = 0.3 + (1 - stress) * 0.6
  })
  return (
    <points ref={ref} position={[0,-0.5,0]}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]} /></bufferGeometry>
      <pointsMaterial size={0.05} color="#09A3B2" transparent opacity={0.9} />
    </points>
  )
}

function AIAgent({ index, progress, position }: { index: number, progress: number, position: [number,number,number] }) {
  const ref = useRef<THREE.Points>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const count = 200
  const positions = useMemo(() => {
    const arr = new Float32Array(count*3)
    for (let i=0;i<count;i++) { arr[i*3]=(Math.random()-0.5)*0.6; arr[i*3+1]=(Math.random()-0.5)*0.6; arr[i*3+2]=(Math.random()-0.5)*0.6 }
    return arr
  }, [])
  const active = progress > 0.4 + index * 0.04
  const colors = ['#09A3B2','#FFB800','#fb842c','#00D4E8','#9333ea','#10b981']
  const c = colors[index % colors.length]
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime + index
    ref.current.rotation.y = t*0.8; ref.current.rotation.x = t*0.4
    const mat = ref.current.material as THREE.PointsMaterial
    mat.opacity = active ? 0.7+Math.sin(t*3)*0.2 : 0
    if (coreRef.current) { const cm = coreRef.current.material as THREE.MeshStandardMaterial; cm.opacity = active ? 0.3+Math.sin(t*2)*0.1 : 0 }
  })
  return (
    <group position={position}>
      <points ref={ref}>
        <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]} /></bufferGeometry>
        <pointsMaterial size={0.04} color={c} transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.15,8,8]} />
        <meshStandardMaterial color={c} emissive={c} emissiveIntensity={1.5} transparent opacity={0} wireframe />
      </mesh>
    </group>
  )
}

function Shield({ progress }: { progress: number }) {
  const ref = useRef<THREE.Points>(null)
  const active = progress > 0.72
  const count = 800
  const positions = useMemo(() => {
    const arr = new Float32Array(count*3)
    for (let i=0;i<count;i++) { const phi=Math.acos(-1+(2*i)/count); const theta=Math.sqrt(count*Math.PI)*phi; arr[i*3]=3.8*Math.sin(phi)*Math.cos(theta); arr[i*3+1]=3.8*Math.sin(phi)*Math.sin(theta); arr[i*3+2]=3.8*Math.cos(phi) }
    return arr
  }, [])
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y += 0.004; ref.current.rotation.x += 0.001
    const mat = ref.current.material as THREE.PointsMaterial
    mat.opacity = active ? 0.35+Math.sin(state.clock.elapsedTime*2)*0.1 : 0
  })
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]} /></bufferGeometry>
      <pointsMaterial size={0.04} color="#09A3B2" transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}

function Threats({ progress }: { progress: number }) {
  const ref = useRef<THREE.Points>(null)
  const active = progress > 0.65 && progress < 0.85
  const count = 120
  const { positions, velocities } = useMemo(() => {
    const p = new Float32Array(count*3); const v = new Float32Array(count*3)
    for (let i=0;i<count;i++) { const a=Math.random()*Math.PI*2; const d=4.5+Math.random()*2; p[i*3]=Math.cos(a)*d; p[i*3+1]=(Math.random()-0.5)*5; p[i*3+2]=Math.sin(a)*d; v[i*3]=-Math.cos(a)*0.025; v[i*3+1]=(Math.random()-0.5)*0.01; v[i*3+2]=-Math.sin(a)*0.025 }
    return {positions:p, velocities:v}
  }, [])
  useFrame(() => {
    if (!ref.current) return
    const pos = ref.current.geometry.attributes.position.array as Float32Array
    for (let i=0;i<count;i++) { pos[i*3]+=velocities[i*3]; pos[i*3+1]+=velocities[i*3+1]; pos[i*3+2]+=velocities[i*3+2]; const d=Math.sqrt(pos[i*3]**2+pos[i*3+2]**2); if (d<3.5) { const a=Math.random()*Math.PI*2; const dd=4.5+Math.random()*2; pos[i*3]=Math.cos(a)*dd; pos[i*3+2]=Math.sin(a)*dd } }
    ref.current.geometry.attributes.position.needsUpdate = true
    const mat = ref.current.material as THREE.PointsMaterial
    mat.opacity = active ? 0.8 : 0
  })
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions.slice(),3]} /></bufferGeometry>
      <pointsMaterial size={0.07} color="#ef4444" transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}

function BackgroundParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 2500
  const positions = useMemo(() => { const a=new Float32Array(count*3); for(let i=0;i<count;i++){a[i*3]=(Math.random()-0.5)*22;a[i*3+1]=(Math.random()-0.5)*22;a[i*3+2]=(Math.random()-0.5)*22} return a }, [])
  useFrame((s) => { if(ref.current) ref.current.rotation.y = s.clock.elapsedTime*0.01 })
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]} /></bufferGeometry>
      <pointsMaterial size={0.02} color="#09A3B2" transparent opacity={0.25} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}

function Scene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const { camera } = useThree()
  const chaosRef = useRef<THREE.Group>(null)
  const prog = useRef(0)

  const chaosCards = [
    { pos:[-2.5,1.5,1] as [number,number,number], rot:[0.2,0.3,0.1] as [number,number,number], color:'#7c3aed', delay:0 },
    { pos:[2.2,1.8,0.5] as [number,number,number], rot:[-0.1,-0.4,0.2] as [number,number,number], color:'#dc2626', delay:0.5 },
    { pos:[-1.8,-0.5,1.5] as [number,number,number], rot:[0.4,0.1,-0.2] as [number,number,number], color:'#d97706', delay:1 },
    { pos:[3,0.2,-0.5] as [number,number,number], rot:[-0.2,0.5,0.3] as [number,number,number], color:'#0891b2', delay:1.5 },
    { pos:[-3.2,0.8,-1] as [number,number,number], rot:[0.1,-0.3,-0.1] as [number,number,number], color:'#dc2626', delay:2 },
    { pos:[1.5,-1.2,2] as [number,number,number], rot:[0.3,0.2,0.4] as [number,number,number], color:'#dc2626', delay:2.5 },
    { pos:[-0.5,2.5,-1.5] as [number,number,number], rot:[-0.3,0.1,-0.3] as [number,number,number], color:'#d97706', delay:3 },
    { pos:[2.8,-1.5,1] as [number,number,number], rot:[0.2,-0.2,0.1] as [number,number,number], color:'#7c3aed', delay:3.5 },
  ]

  const agentPositions: [number,number,number][] = [[-2,0.5,0],[2,0.5,0],[0,1.5,-1],[-1,-0.5,1],[1,-0.5,1],[0,0,2]]

  useFrame(() => {
    const p = scrollProgress.current
    prog.current += (p - prog.current) * 0.06
    const s = prog.current

    if (s < 0.2) {
      camera.position.lerp(new THREE.Vector3(0,1,8), 0.05)
      camera.lookAt(0,0,0)
    } else if (s < 0.42) {
      const t = (s-0.2)/0.22
      camera.position.lerp(new THREE.Vector3(0,0.5,5.5-t*1.5), 0.05)
      camera.lookAt(0,0,0)
    } else if (s < 0.62) {
      camera.position.lerp(new THREE.Vector3(1.5,1.5,7), 0.04)
      camera.lookAt(0,0.5,0)
    } else if (s < 0.78) {
      const t = (s-0.62)/0.16
      camera.position.lerp(new THREE.Vector3(3*Math.sin(t*Math.PI),2,6.5), 0.04)
      camera.lookAt(0,0,0)
    } else {
      camera.position.lerp(new THREE.Vector3(0,1.5,7.5), 0.04)
      camera.lookAt(0,0,0)
    }

    if (chaosRef.current) {
      const fade = Math.max(0, 1-(s-0.32)/0.15)
      chaosRef.current.scale.setScalar(fade)
      chaosRef.current.children.forEach((c) => {
        const m = (c as THREE.Mesh).material as THREE.MeshStandardMaterial
        if (m) m.opacity = fade * 0.75
      })
    }
  })

  return (
    <>
      <ambientLight intensity={0.08} />
      <pointLight position={[0,5,5]} color="#09A3B2" intensity={2.5} />
      <pointLight position={[-5,0,0]} color="#fb842c" intensity={1.2} />
      <pointLight position={[5,0,0]} color="#FFB800" intensity={0.8} />
      <pointLight position={[0,-3,3]} color="#7c3aed" intensity={0.6} />
      <group ref={chaosRef}>
        {chaosCards.map((c,i) => <ChaosCard key={i} position={c.pos} rotation={c.rot} color={c.color} delay={c.delay} />)}
      </group>
      <HumanFigure stress={Math.max(0, 1-(scrollProgress.current-0.35)/0.15)} />
      {agentPositions.map((pos,i) => <AIAgent key={i} index={i} progress={scrollProgress.current} position={pos} />)}
      <Shield progress={scrollProgress.current} />
      <Threats progress={scrollProgress.current} />
      <BackgroundParticles />
    </>
  )
}

export default function HeroCanvas({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1 }}>
      <Canvas camera={{ position: [0, 1, 8], fov: 60 }} gl={{ antialias: true, alpha: false }} style={{ background: '#010D12' }}>
        <Scene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}
