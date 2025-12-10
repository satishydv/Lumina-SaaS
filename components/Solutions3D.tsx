'use client'

import React, { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, OrbitControls } from '@react-three/drei';

// Floating geometric shapes representing solutions
const SolutionShape: React.FC<{ 
  position: [number, number, number]; 
  color: string;
  shape: 'box' | 'sphere' | 'torus';
  index: number;
}> = ({ position, color, shape, index }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.3;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.6, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.5, 0.2, 16, 100]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  }, [shape]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        {geometry}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

// Particle system
const Particles: React.FC = () => {
  const count = 300;
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.04, 0]} />
      <meshBasicMaterial color="#4488ff" transparent opacity={0.6} />
    </instancedMesh>
  );
};

// Central glowing orb
const CentralOrb: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#0044CC"
          emissive="#0044CC"
          emissiveIntensity={1.5}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh position={[0, 0, 0]} scale={0.9}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#001122" transparent opacity={0.4} />
      </mesh>
    </Float>
  );
};

const Solutions3D: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true);
    }
  }, []);

  if (!mounted || typeof window === 'undefined') {
    return <div className="w-full h-full flex items-center justify-center text-white/50">Loading 3D scene...</div>;
  }

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
      <fog attach="fog" args={['#020510', 10, 30]} />
      
      {/* Enhanced lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4488ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#ff0088" />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      
      <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
      <Particles />
      <CentralOrb />
      
      {/* Solution shapes */}
      <SolutionShape position={[-3, 2, -2]} color="#3b82f6" shape="box" index={0} />
      <SolutionShape position={[3, -1, -2]} color="#8b5cf6" shape="sphere" index={1} />
      <SolutionShape position={[-2, -2, 2]} color="#06b6d4" shape="torus" index={2} />
      <SolutionShape position={[2, 2, 2]} color="#ec4899" shape="box" index={3} />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default Solutions3D;

