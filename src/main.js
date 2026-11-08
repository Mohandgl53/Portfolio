import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Expose globally for inline scripts and interactive handlers
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.THREE = THREE;

console.log('[Mohan Portfolio]: GSAP & Three.js loaded via npm module', {
  gsapVersion: gsap.version,
  threeRevision: THREE.REVISION
});

