import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Sparkles, Trail } from '@react-three/drei';

const FloatingGoldCube = ({ position, delay }) => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.5 + delay) * 0.5;
    meshRef.current.rotation.y = Math.sin(time * 0.3 + delay) * 0.5;
    meshRef.current.position.y = position[1] + Math.sin(time * 2 + delay) * 0.3;
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial 
        color="#FFD700" 
        emissive="#DAA520" 
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

const RotatingGoldRing = ({ position, size }) => {
  const ringRef = useRef();
  
  useFrame(({ clock }) => {
    ringRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    ringRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.2;
  });
  
  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[size, 0.05, 16, 100]} />
      <meshStandardMaterial color="#FFD700" emissive="#DAA520" emissiveIntensity={0.3} />
    </mesh>
  );
};

const FloatingParticles = () => {
  const particlesRef = useRef();
  
  useFrame(({ clock }) => {
    particlesRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <float32BufferAttribute
          attach="attributes-position"
          count={100}
          array={new Float32Array(Array(300).fill().map(() => (Math.random() - 0.5) * 20))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#FFD700" size={0.05} transparent opacity={0.6} />
    </points>
  );
};

const ThreeDScene = () => {
  return (
    <div className="canvas-container">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} />
        
        {/* Dynamic stars with gold tint */}
        <Stars 
          radius={100} 
          depth={50} 
          count={7000} 
          factor={4} 
          saturation={0.5} 
          fade 
          speed={2}
          color="#FFD700"
        />
        
        {/* Sparkles effect */}
        <Sparkles 
          count={100}
          scale={10}
          size={2}
          speed={0.4}
          color="#FFD700"
        />
        
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#FFD700" intensity={1} />
        <pointLight position={[-10, -5, 5]} color="#FFD700" intensity={0.5} />
        <spotLight 
          position={[0, 10, 5]} 
          angle={0.3} 
          penumbra={1} 
          intensity={2} 
          castShadow 
          color="#FFD700"
        />
        
        <Suspense fallback={null}>
          {/* Floating gold cubes */}
          <FloatingGoldCube position={[-5, 2, -5]} delay={0} />
          <FloatingGoldCube position={[5, -1, -5]} delay={2} />
          <FloatingGoldCube position={[-3, -2, -3]} delay={4} />
          <FloatingGoldCube position={[4, 3, -4]} delay={6} />
          
          {/* Rotating gold rings */}
          <RotatingGoldRing position={[0, 1, -3]} size={1.5} />
          <RotatingGoldRing position={[2, -1, -4]} size={1} />
          <RotatingGoldRing position={[-2, 0, -6]} size={0.8} />
          
          {/* Central golden sphere with trail */}
          <Trail
            width={2}
            length={8}
            color="#FFD700"
            attenuation={t => t * t}
          >
            <mesh position={[0, 0, -2]}>
              <sphereGeometry args={[0.7, 64, 64]} />
              <meshStandardMaterial 
                color="#FFD700" 
                emissive="#DAA520" 
                emissiveIntensity={0.8}
                roughness={0.1}
                metalness={0.9}
              />
            </mesh>
          </Trail>
          
          {/* Floating particles */}
          <FloatingParticles />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}
          rotateSpeed={0.3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;