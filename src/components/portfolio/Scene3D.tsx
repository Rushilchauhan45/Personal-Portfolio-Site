import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.7;
      meshRef.current.position.x = 3 + Math.cos(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[3, 0, -2]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#00D4FF"
          wireframe
          transparent
          opacity={0.7}
          emissive="#001122"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#9945FF"
          transparent
          opacity={0.4}
          emissive="#330066"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function RotatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.006;
      meshRef.current.rotation.z += 0.012;
      meshRef.current.position.y = 2 + Math.sin(state.clock.elapsedTime * 1.2) * 0.4;
    }
    if (ringRef.current) {
      ringRef.current.rotation.y += 0.015;
      ringRef.current.rotation.x += 0.008;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[-3, 2, -3]}>
        <torusGeometry args={[1.2, 0.4, 20, 100]} />
        <meshStandardMaterial
          color="#9945FF"
          wireframe
          transparent
          opacity={0.5}
          emissive="#220044"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh ref={ringRef} position={[-3, 2, -3]}>
        <ringGeometry args={[2, 2.2, 32]} />
        <meshStandardMaterial
          color="#FF00D4"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      particlesRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  const particles = new Float32Array(400 * 3);
  const colors = new Float32Array(400 * 3);
  
  for (let i = 0; i < 400; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 25;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 25;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 25;
    
    // Random colors between cyan and purple
    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      colors[i * 3] = 0;     // Red
      colors[i * 3 + 1] = 0.8; // Green  
      colors[i * 3 + 2] = 1;   // Blue (Cyan)
    } else if (colorChoice < 0.66) {
      colors[i * 3] = 0.6;   // Red
      colors[i * 3 + 1] = 0.3; // Green
      colors[i * 3 + 2] = 1;   // Blue (Purple)
    } else {
      colors[i * 3] = 1;     // Red
      colors[i * 3 + 1] = 0;   // Green
      colors[i * 3 + 2] = 0.8; // Blue (Pink)
    }
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={400}
          array={particles}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={400}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        transparent
        opacity={0.8}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.5;
      meshRef.current.position.x = Math.cos(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.8}>
      <mesh ref={meshRef} position={[0, -2, -4]}>
        <octahedronGeometry args={[0.8, 2]} />
        <meshStandardMaterial
          color="#FF00D4"
          transparent
          opacity={0.6}
          emissive="#440022"
          emissiveIntensity={0.3}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#00D4FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#9945FF" />
        <pointLight position={[0, 10, -5]} intensity={0.6} color="#FF00D4" />
        <directionalLight position={[5, 5, 5]} intensity={0.4} color="#FFFFFF" />
        
        <ParticleField />
        <FloatingGeometry />
        <RotatingTorus />
        <FloatingCrystal />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}