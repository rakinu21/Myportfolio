import { gsap } from 'gsap';

// Scroll reveal animation
export const scrollReveal = (elem) => {
  gsap.from(elem, {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });
};

// Page transition
export const pageTransition = (container) => {
  gsap.from(container, {
    duration: 1.2,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)"
  });
};

// Hover animation for cards
export const cardHover = (card) => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, { duration: 0.3, scale: 1.05, rotateY: 5, z: 20 });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { duration: 0.3, scale: 1, rotateY: 0, z: 0 });
  });
};
