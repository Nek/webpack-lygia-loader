import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Import shaders
import fragmentShader, { uniforms as fragmentUniforms } from '../shaders/fragment.glsl';
import vertexShader, { uniforms as vertexUniforms } from '../shaders/vertex.glsl';
import { merge } from 'ts-deepmerge';

const uniforms = merge(fragmentUniforms, vertexUniforms);

console.log(uniforms);

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
    const material = new THREE.ShaderMaterial({
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
