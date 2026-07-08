"use client";

/**
 * Hero 3D moment: an abstract "planet of routes".
 * A fibonacci dot-sphere with animated great-circle flight arcs, rendered
 * with react-three-fiber. Loaded lazily (see globe-loader.tsx) and skipped
 * entirely under prefers-reduced-motion.
 */

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RADIUS = 2;

/** Evenly distributed points on a sphere (fibonacci lattice). */
function useSpherePoints(count: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      positions[i * 3] = Math.cos(theta) * r * RADIUS;
      positions[i * 3 + 1] = y * RADIUS;
      positions[i * 3 + 2] = Math.sin(theta) * r * RADIUS;
    }
    return positions;
  }, [count]);
}

/** Curved route between two lat/lng pairs, lifted above the surface. */
function routeCurve(from: [number, number], to: [number, number]) {
  const toVec = ([lat, lng]: [number, number]) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -RADIUS * Math.sin(phi) * Math.cos(theta),
      RADIUS * Math.cos(phi),
      RADIUS * Math.sin(phi) * Math.sin(theta)
    );
  };
  const a = toVec(from);
  const b = toVec(to);
  const mid = a.clone().add(b).multiplyScalar(0.5);
  mid.setLength(RADIUS * (1.18 + a.distanceTo(b) * 0.09));
  return new THREE.QuadraticBezierCurve3(a, mid, b);
}

/** Sample routes: Mumbai→Santorini, Delhi→Bali, Bengaluru→Zermatt, etc. */
const ROUTES: Array<[[number, number], [number, number]]> = [
  [[19.1, 72.9], [36.4, 25.4]],
  [[28.6, 77.2], [-8.4, 115.2]],
  [[12.9, 77.6], [46.0, 7.7]],
  [[19.1, 72.9], [35.0, 135.8]],
  [[28.6, 77.2], [40.6, 14.6]],
];

function Route({ curve, offset }: { curve: THREE.QuadraticBezierCurve3; offset: number }) {
  const lineRef = useRef<THREE.Line>(null);
  const headRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const pts = curve.getPoints(64);
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [curve]);

  // A pulse of light travels along the arc; the arc itself stays faint.
  useFrame(({ clock }) => {
    const t = (clock.elapsedTime * 0.14 + offset) % 1;
    if (headRef.current) {
      const p = curve.getPoint(t);
      headRef.current.position.copy(p);
      const s = Math.sin(t * Math.PI); // grow then shrink
      headRef.current.scale.setScalar(0.5 + s * 0.9);
    }
  });

  return (
    <group>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <primitive
        object={
          new THREE.Line(
            geometry,
            new THREE.LineBasicMaterial({ color: "#0b8a6e", transparent: true, opacity: 0.55 })
          )
        }
        ref={lineRef}
      />
      <mesh ref={headRef}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#e4572e" />
      </mesh>
    </group>
  );
}

function Planet() {
  const group = useRef<THREE.Group>(null);
  const positions = useSpherePoints(1300);
  const curves = useMemo(() => ROUTES.map(([a, b]) => routeCurve(a, b)), []);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.06;
  });

  return (
    <group ref={group} rotation={[0.32, -0.8, 0.06]}>
      {/* Inner body drawn FIRST (renderOrder -1) writing depth, so back-face
          dots are hidden while front dots stay crisp on top of it. */}
      <mesh renderOrder={-1}>
        <sphereGeometry args={[RADIUS * 0.96, 48, 48]} />
        <meshBasicMaterial color="#f4f3ec" transparent opacity={0.55} />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#085744"
          size={0.038}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>
      {curves.map((c, i) => (
        <Route key={i} curve={c} offset={i * 0.22} />
      ))}
    </group>
  );
}

export default function Globe() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 5.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      className="!bg-transparent"
      aria-hidden="true"
    >
      <Planet />
    </Canvas>
  );
}
