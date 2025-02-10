import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Import shaders
import fragmentShader from '../shaders/fragment.glsl';
import { defaultUniforms, type Uniforms as NoiseShaderUniforms } from '../shaders/fragment.glsl.ts';
import vertexShader from '../shaders/vertex.glsl';

class NoiseShader extends THREE.ShaderMaterial {
  constructor(parameters: THREE.ShaderMaterialParameters & {uniforms: NoiseShaderUniforms}) {
    super(parameters);
  }
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(800, 800);
    // Create a plane with our shader
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new NoiseShader({
      uniforms: defaultUniforms,
      vertexShader,
      fragmentShader,
      glslVersion: THREE.GLSL3,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 1;

    // Render
    renderer.render(scene, camera);

    // Cleanup
    return () => {
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <main style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <canvas ref={canvasRef} />
    </main>
  );
}
