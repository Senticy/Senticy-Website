'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const C = {
  bg: '#040C14', navyDeep: '#071828', teal: '#09A3B2', tealBright: '#00D4E8',
  accent: '#fb842c', gold: '#FFB800', danger: '#ef4444', dangerDim: '#7f1d1d',
}

function Floor({ chaos }: { chaos: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (!ref.current) return
    const m = ref.current.material as THREE.MeshStandardMaterial
    m.color.lerpColors(new THREE.Color('#0a1a24'), new THREE.Color('#1a0404'), chaos)
  })
  return (
    <mesh ref={ref} rotation={[-Math.PI/2,0,0]} position={[0,-1.5,0]} receiveShadow>
      <planeGeometry args={[60,60]} />
      <meshStandardMaterial color="#0a1a24" emissive="#041014" emissiveIntensity={0.3} roughness={0.1} metalness={0.8} />
    </mesh>
  )
}

function CeilingLight({ position, chaos }: { position:[number,number,number], chaos:number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (!ref.current) return
    const m = ref.current.material as THREE.MeshStandardMaterial
    m.emissive.lerpColors(new THREE.Color(C.tealBright), new THREE.Color(C.danger), chaos)
  })
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[3,0.05,0.3]} />
      <meshStandardMaterial color="#ffffff" emissive={C.tealBright} emissiveIntensity={0.8} />
    </mesh>
  )
}

function Desk({ position, rotation=0 }: { position:[number,number,number], rotation?:number }) {
  return (
    <group position={position} rotation={[0,rotation,0]}>
      <mesh position={[0,0,0]} castShadow><boxGeometry args={[2.4,0.08,1.1]} /><meshStandardMaterial color="#1a2a36" roughness={0.2} metalness={0.6} /></mesh>
      <mesh position={[0,0.55,-0.3]} castShadow><boxGeometry args={[1.4,0.85,0.04]} /><meshStandardMaterial color="#0d1a22" roughness={0.1} metalness={0.9} emissive={C.tealBright} emissiveIntensity={0.1} /></mesh>
      <mesh position={[0,0.15,-0.3]}><cylinderGeometry args={[0.03,0.08,0.3,8]} /><meshStandardMaterial color="#0d1a22" metalness={0.9} roughness={0.1} /></mesh>
      {[[-0.9,-0.4,0],[0.9,-0.4,0],[-0.9,-0.4,0.8],[0.9,-0.4,0.8]].map((p,i) => (
        <mesh key={i} position={p as [number,number,number]}><cylinderGeometry args={[0.04,0.04,0.9,8]} /><meshStandardMaterial color="#0a1520" metalness={0.9} roughness={0.2} /></mesh>
      ))}
    </group>
  )
}

function HumanSilhouette({ position, stressed=false }: { position:[number,number,number], stressed?:boolean }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current) return
    if (stressed) ref.current.rotation.z = Math.sin(state.clock.elapsedTime*4)*0.04
    else ref.current.rotation.y = Math.sin(state.clock.elapsedTime*0.3)*0.1
  })
  const color = stressed ? '#4a1010' : '#1a3040'
  return (
    <group ref={ref} position={position}>
      <mesh position={[0,1.65,0]}><sphereGeometry args={[0.16,12,12]} /><meshStandardMaterial color={color} roughness={0.8} /></mesh>
      <mesh position={[0,1.0,0]}><capsuleGeometry args={[0.18,0.6,8,12]} /><meshStandardMaterial color={color} roughness={0.8} /></mesh>
      <mesh position={[-0.32,1.0,0.1]} rotation={[0.8,0,0.3]}><capsuleGeometry args={[0.06,0.45,6,8]} /><meshStandardMaterial color={color} roughness={0.8} /></mesh>
      <mesh position={[0.32,1.0,0.1]} rotation={[0.8,0,-0.3]}><capsuleGeometry args={[0.06,0.45,6,8]} /><meshStandardMaterial color={color} roughness={0.8} /></mesh>
    </group>
  )
}

function AgentCard({ position, active, index }: { position:[number,number,number], active:boolean, index:number }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime + index*0.7
    ref.current.position.y = position[1] + Math.sin(t*0.6)*0.08
    const mat = (ref.current.children[0] as THREE.Mesh).material as THREE.MeshStandardMaterial
    if (mat) mat.emissiveIntensity = active ? 0.3+Math.sin(t*2)*0.05 : 0
  })
  const colors = [C.teal, C.accent, C.gold, C.tealBright, '#9333ea', '#10b981']
  const c = colors[index % colors.length]
  return (
    <group ref={ref} position={position}>
      <mesh><boxGeometry args={[1.6,0.7,0.04]} /><meshStandardMaterial color={C.navyDeep} transparent opacity={active?0.9:0} emissive={c} emissiveIntensity={active?0.3:0} roughness={0.1} metalness={0.5} /></mesh>
      <mesh position={[0,0,0.021]}><boxGeometry args={[1.62,0.72,0.001]} /><meshStandardMaterial color={c} transparent opacity={active?0.6:0} emissive={c} emissiveIntensity={active?1:0} /></mesh>
    </group>
  )
}

function AlertCard({ position, delay }: { position:[number,number,number], delay:number }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime+delay
    ref.current.rotation.x = Math.sin(t*0.8)*0.3
    ref.current.rotation.z = Math.sin(t*0.5+1)*0.2
    ref.current.position.y = position[1]+Math.sin(t*0.9)*0.3
    const mat = (ref.current.children[0] as THREE.Mesh).material as THREE.MeshStandardMaterial
    if (mat) mat.emissiveIntensity = 0.4+Math.sin(t*3)*0.2
  })
  return (
    <group ref={ref} position={position}>
      <mesh><boxGeometry args={[1.8,0.6,0.04]} /><meshStandardMaterial color="#1a0404" emissive={C.danger} emissiveIntensity={0.4} transparent opacity={0.9} /></mesh>
    </group>
  )
}

function OfficeDoor({ openAmount, chaos }: { openAmount:number, chaos:number }) {
  const doorRef = useRef<THREE.Group>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  useFrame(() => {
    if (doorRef.current) doorRef.current.rotation.y = -openAmount*Math.PI*0.45
    if (lightRef.current) {
      lightRef.current.intensity = openAmount*3*(0.8+Math.sin(Date.now()*0.01)*0.2)
      lightRef.current.color.set(chaos>0.3 ? C.danger : C.tealBright)
    }
  })
  return (
    <group position={[0,-0.2,-12]}>
      <mesh position={[0,1.1,0]}><boxGeometry args={[2.6,3.4,0.15]} /><meshStandardMaterial color="#0d1a22" roughness={0.3} metalness={0.7} /></mesh>
      <group ref={doorRef} position={[-1.1,1.1,0.08]}>
        <mesh position={[1.1,0,0]}><boxGeometry args={[2.2,3.0,0.08]} /><meshStandardMaterial color="#1a2a36" roughness={0.2} metalness={0.6} emissive={C.teal} emissiveIntensity={0.05} /></mesh>
        <mesh position={[1.9,0,0.06]}><cylinderGeometry args={[0.03,0.03,0.35,8]} /><meshStandardMaterial color="#09A3B2" metalness={0.9} roughness={0.1} emissive={C.teal} emissiveIntensity={0.3} /></mesh>
      </group>
      <pointLight ref={lightRef} position={[0,1,1.5]} intensity={0} distance={12} />
    </group>
  )
}

function AmbientParticles({ chaos }: { chaos:number }) {
  const ref = useRef<THREE.Points>(null)
  const count = 300
  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count*3)
    const speeds = new Float32Array(count)
    for (let i=0;i<count;i++) {
      positions[i*3]=(Math.random()-0.5)*20; positions[i*3+1]=Math.random()*5-1; positions[i*3+2]=(Math.random()-0.5)*20
      speeds[i]=0.002+Math.random()*0.003
    }
    return {positions,speeds}
  },[])
  useFrame(() => {
    if (!ref.current) return
    const pos = ref.current.geometry.attributes.position.array as Float32Array
    for (let i=0;i<count;i++) {
      pos[i*3+1]-=speeds[i]*(1+chaos*3)
      if (pos[i*3+1]<-1.5){pos[i*3+1]=5;pos[i*3]=(Math.random()-0.5)*20;pos[i*3+2]=(Math.random()-0.5)*20}
    }
    ref.current.geometry.attributes.position.needsUpdate=true
    const mat = ref.current.material as THREE.PointsMaterial
    mat.color.lerpColors(new THREE.Color(C.tealBright),new THREE.Color(C.danger),chaos)
  })
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]} /></bufferGeometry>
      <pointsMaterial size={0.025} color={C.tealBright} transparent opacity={0.5} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}

function CameraPath({ scroll }: { scroll:React.MutableRefObject<number> }) {
  const { camera } = useThree()
  const prog = useRef(0)
  const path = useMemo(() => [
    {p:[0,1.8,16], l:[0,1.2,0]},
    {p:[0,1.6,10], l:[0,1.0,0]},
    {p:[-2,1.4,4], l:[0,1.2,-2]},
    {p:[2,1.4,0],  l:[0,1.4,-4]},
    {p:[0,1.6,-3], l:[0,1.2,-8]},
    {p:[0,1.5,-7], l:[0,0.8,-14]},
    {p:[0,1.4,-9], l:[0,0.8,-14]},
    {p:[0,1.3,-10],l:[0,0.5,-14]},
    {p:[0,1.4,-9], l:[0,0.8,-14]},
    {p:[0,1.8,-2], l:[0,1.2,-8]},
    {p:[0,2.0,4],  l:[0,1.0,0]},
  ],[])
  useFrame(() => {
    const s = scroll.current
    prog.current += (s-prog.current)*0.05
    const t = prog.current*(path.length-1)
    const i = Math.min(Math.floor(t),path.length-2)
    const f = t-i
    const ease = f<0.5 ? 2*f*f : -1+(4-2*f)*f
    const a=path[i],b=path[i+1]
    camera.position.lerp(new THREE.Vector3(
      a.p[0]+(b.p[0]-a.p[0])*ease, a.p[1]+(b.p[1]-a.p[1])*ease, a.p[2]+(b.p[2]-a.p[2])*ease
    ),0.06)
    camera.lookAt(new THREE.Vector3(
      a.l[0]+(b.l[0]-a.l[0])*ease, a.l[1]+(b.l[1]-a.l[1])*ease, a.l[2]+(b.l[2]-a.l[2])*ease
    ))
  })
  return null
}

function OfficeWorld({ scroll }: { scroll:React.MutableRefObject<number> }) {
  const prog = useRef(0)
  const doorOpen = useRef(0)
  const chaosRef = useRef<THREE.Group>(null)

  useFrame(() => {
    prog.current += (scroll.current-prog.current)*0.05
    const s = scroll.current
    const doorTarget = s>0.63&&s<0.83 ? Math.min(1,(s-0.63)/0.07) : 0
    doorOpen.current += (doorTarget-doorOpen.current)*0.06
  })

  const getChaos = () => {
    const s = scroll.current
    if (s>0.62&&s<0.82) return Math.min(1,(s-0.62)/0.08)
    if (s>0.82) return Math.max(0,1-(s-0.82)/0.06)
    return 0
  }

  return (
    <group>
      <ambientLight intensity={0.15} color="#102030" />
      <pointLight position={[0,5,8]} color={C.tealBright} intensity={1.5} distance={20} />
      <pointLight position={[-6,4,2]} color={C.teal} intensity={1} distance={15} />
      <pointLight position={[6,4,2]} color="#1a3a50" intensity={0.8} distance={15} />
      <pointLight position={[0,4,-5]} color={C.teal} intensity={0.6} distance={12} />

      <Floor chaos={getChaos()} />
      <mesh position={[0,4,0]} rotation={[Math.PI/2,0,0]}><planeGeometry args={[40,40]} /><meshStandardMaterial color="#030c12" roughness={0.9} /></mesh>

      {[[-4,3.9,8],[0,3.9,8],[4,3.9,8],[-4,3.9,2],[0,3.9,2],[4,3.9,2],[-4,3.9,-4],[0,3.9,-4],[4,3.9,-4]].map((p,i) => (
        <CeilingLight key={i} position={p as [number,number,number]} chaos={getChaos()} />
      ))}

      <mesh position={[0,1.5,-14]}><boxGeometry args={[16,7,0.2]} /><meshStandardMaterial color="#060f18" roughness={0.4} metalness={0.3} /></mesh>
      <mesh position={[-8,1.5,0]}><boxGeometry args={[0.2,7,30]} /><meshStandardMaterial color="#060f18" roughness={0.4} /></mesh>
      <mesh position={[8,1.5,0]}><boxGeometry args={[0.2,7,30]} /><meshStandardMaterial color="#060f18" roughness={0.4} /></mesh>
      <mesh position={[0,1.5,15]}><boxGeometry args={[16,7,0.1]} /><meshStandardMaterial color={C.tealBright} transparent opacity={0.06} roughness={0} metalness={1} /></mesh>

      <Desk position={[-4,-1,6]} /><Desk position={[-4,-1,2]} /><Desk position={[-4,-1,-2]} />
      <Desk position={[4,-1,6]} rotation={Math.PI} /><Desk position={[4,-1,2]} rotation={Math.PI} /><Desk position={[4,-1,-2]} rotation={Math.PI} />

      <HumanSilhouette position={[-4,-1.5,6]} /><HumanSilhouette position={[4,-1.5,6]} />
      <HumanSilhouette position={[-4,-1.5,2]} /><HumanSilhouette position={[4,-1.5,2]} />
      <HumanSilhouette position={[-4,-1.5,-2]} />

      <AgentCard position={[-4,0.8,6]} active index={0} />
      <AgentCard position={[4,0.8,6]} active index={1} />
      <AgentCard position={[-4,0.8,2]} active index={2} />
      <AgentCard position={[4,0.8,2]} active index={3} />
      <AgentCard position={[-4,0.8,-2]} active index={4} />

      <OfficeDoor openAmount={doorOpen.current} chaos={getChaos()} />

      <group ref={chaosRef} position={[0,0,-14]}>
        <HumanSilhouette position={[-3,-1.5,-1]} stressed />
        <HumanSilhouette position={[3,-1.5,-1]} stressed />
        <HumanSilhouette position={[0,-1.5,-3]} stressed />
        <AlertCard position={[-3,1.5,-1]} delay={0} />
        <AlertCard position={[3,2,-2]} delay={0.5} />
        <AlertCard position={[0,2.5,-3]} delay={1} />
        <AlertCard position={[-2,3,-2]} delay={1.5} />
        <AlertCard position={[2,1,-1]} delay={2} />
        <AlertCard position={[-1,2,-4]} delay={2.5} />
        <pointLight position={[0,3,-2]} color={C.danger} intensity={4} distance={10} />
        <pointLight position={[-4,2,-1]} color={C.dangerDim} intensity={2} distance={8} />
      </group>

      <AmbientParticles chaos={getChaos()} />
    </group>
  )
}

export default function OfficeScene({ scroll }: { scroll:React.MutableRefObject<number> }) {
  return (
    <div style={{ position:'fixed', inset:0, zIndex:1 }}>
      <Canvas camera={{ position:[0,1.8,16], fov:55, near:0.1, far:100 }} gl={{ antialias:true, alpha:false, powerPreference:'high-performance' }} shadows style={{ background:C.bg }}>
        <fog attach="fog" args={[C.bg,18,40]} />
        <OfficeWorld scroll={scroll} />
        <CameraPath scroll={scroll} />
      </Canvas>
    </div>
  )
}
