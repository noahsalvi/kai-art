import { sineOut } from "svelte/easing";

let duration = 250;
let delay = duration;

let delayZero = 0;

export const fadeIn = (_, __) => ({
  duration,
  delay,
  easing: sineOut,
  css: (t) => `opacity: ${t}`,
});

export const fadeOut = (_, __) => ({
  duration,
  delay: delayZero,
  easing: sineOut,
  css: (t) => `opacity: ${t}`,
});
