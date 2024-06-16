import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initSmoothScrolling = () => {
  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });
  lenis.on('scroll', () => ScrollTrigger.update());
  const scrollFuntion = (time) => {
    lenis.raf(time); //lenis 中每一帧动画执行
    requestAnimationFrame(scrollFuntion);
  };
  requestAnimationFrame(scrollFuntion); //启用动画帧
};
