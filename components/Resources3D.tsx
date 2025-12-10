'use client'

import React, { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, Stars } from '@react-three/drei';
import { Quote } from 'lucide-react';

// --- Types ---
interface TestimonialData {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

interface TestimonialCardProps {
  data: TestimonialData;
  position: [number, number, number];
  rotation: [number, number, number];
  opacity: number;
}

// --- Data ---
const testimonials: TestimonialData[] = [
  {
    id: 1,
    quote: "Lumina rewired our entire product strategy. It's not just a tool, it's a second brain for the engineering team.",
    name: "Alex Rivera",
    role: "CTO, Nexus Dynamics",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    quote: "The interface fluidity is unmatched. We shipped 3x faster after integrating the core SDK into our pipeline.",
    name: "Sarah Chen",
    role: "Lead Engineer, Vertex",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    quote: "Finally, a platform that respects the developer's time while dazzling the end-user. Pure architectural magic.",
    name: "Marcus Johnson",
    role: "Founder, LoopScale",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    quote: "Governance compliance used to be a nightmare. Lumina's automated strict mode made it a one-click affair.",
    name: "Elena Vostrov",
    role: "VP of Product, IronBank",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    quote: "I've never seen a dashboard engine scale this elegantly. It handles millions of nodes effortlessly.",
    name: "David Kim",
    role: "Systems Architect, CloudMist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

// --- 3D Components ---

// A single testimonial card in 3D space - Enhanced for better visibility
const TestimonialCard: React.FC<TestimonialCardProps> = ({ data, position, rotation, opacity }) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <group position={position} rotation={rotation}>
      <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
        <Html 
          transform 
          occlude 
          distanceFactor={1.2} 
          style={{ 
            opacity: hovered ? 1 : opacity || 0.9, 
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
            transform: `scale(${hovered ? 1.08 : 1})`,
            filter: hovered ? 'brightness(1.1)' : 'brightness(1)'
          }}
        >
          <div 
            className="w-[360px] md:w-[380px] p-7 rounded-3xl bg-gradient-to-br from-black/80 via-black/70 to-black/80 border-2 border-white/20 backdrop-blur-2xl shadow-2xl select-none cursor-pointer group transition-all duration-300"
            style={{
              boxShadow: hovered 
                ? '0 20px 60px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)' 
                : '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.1)'
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              {/* Quote icon - Enhanced */}
              <div className="mb-5 text-blue-400 opacity-90 group-hover:text-blue-300 transition-colors">
                <Quote size={28} fill="currentColor" strokeWidth={0} />
              </div>
              
              {/* Quote text - Improved readability */}
              <p className="font-serif text-xl md:text-[22px] leading-relaxed text-white mb-7 font-light tracking-wide">
                "{data.quote}"
              </p>
              
              {/* Author info - Enhanced */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative">
                  <img 
                    src={data.image} 
                    alt={data.name} 
                    className="w-12 h-12 rounded-full border-2 border-white/30 object-cover shadow-lg group-hover:border-blue-400/50 transition-all duration-300" 
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-white text-base mb-0.5 group-hover:text-blue-200 transition-colors">
                    {data.name}
                  </h4>
                  <p className="font-sans text-xs text-gray-300 uppercase tracking-wider font-medium">
                    {data.role}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Hover Glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10`} />
            
            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-400/50 group-hover:bg-blue-400 group-hover:scale-150 transition-all duration-300" />
          </div>
        </Html>
      </Float>
    </group>
  );
};

// The rotating ring of cards - Enhanced positioning
const Carousel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 7.5; // Increased radius for better spacing
  const count = testimonials.length;

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Slower, smoother rotation
      groupRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {testimonials.map((t, i) => {
        // Calculate position in a circle with slight vertical offset variation
        const angle = (i / count) * Math.PI * 2;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        const yOffset = Math.sin(angle * 2) * 0.3; // Subtle vertical variation
        
        return (
          <TestimonialCard 
            key={t.id} 
            data={t} 
            position={[x, yOffset, z]} 
            rotation={[0, angle + Math.PI / 2, 0]} 
            opacity={0.95}
          />
        );
      })}
    </group>
  );
};

// Abstract Particles in the background - Enhanced visibility
const Particles = () => {
  const count = 250;
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
      <dodecahedronGeometry args={[0.06, 0]} />
      <meshBasicMaterial color="#4488ff" transparent opacity={0.5} />
    </instancedMesh>
  );
};

const Resources3D: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window !== 'undefined') {
      setMounted(true);
    }
  }, []);

  if (!mounted || typeof window === 'undefined') {
    return <div className="w-full h-full flex items-center justify-center text-white/50">Loading 3D scene...</div>;
  }

  return (
    <Canvas camera={{ position: [0, 1.5, 11], fov: 55 }} dpr={[1, 2]}>
      <fog attach="fog" args={['#020305', 8, 30]} />
      
      {/* Enhanced lighting for better visibility */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 8, 10]} intensity={1.2} color="#4488ff" />
      <pointLight position={[-10, 8, -10]} intensity={0.8} color="#ff0088" />
      <pointLight position={[0, 10, 0]} intensity={0.4} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      
      <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
      <Particles />
      <Carousel />

      {/* Enhanced Central Abstract Object */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial 
            color="#001122" 
            roughness={0} 
            metalness={1} 
            emissive="#0044CC"
            emissiveIntensity={2.5}
            wireframe
          />
        </mesh>
        <mesh position={[0, 0, 0]} scale={0.95}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshBasicMaterial color="#000" transparent opacity={0.3} />
        </mesh>
        {/* Additional glow rings */}
        <mesh position={[0, 0, 0]} scale={1.5}>
          <ringGeometry args={[1.3, 1.5, 32]} />
          <meshBasicMaterial color="#0044CC" transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>
      </Float>
    </Canvas>
  );
};

export default Resources3D;

