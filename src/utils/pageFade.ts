import { sineOut } from "svelte/easing";

let duration = 100;
let delay = duration;

let delayZero = 0;

export const fadeIn = (node, params) => ({
  duration,
  delay,
  easing: sineOut,
  css: (t) => `opacity: ${t}`,
});

export const fadeOut = (node, params) => ({
  duration,
  delay: delayZero,
  easing: sineOut,
  css: (t) => `opacity: ${t}`,
});
