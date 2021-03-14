import { sineOut } from "svelte/easing";

let duration = 250;
let delay = duration;

let delayZero = 0;

export function fadeIn(node, params) {
  return {
    duration,
    delay,
    easing: sineOut,
    css: (t) => `opacity: ${t}`,
  };
}

export function fadeOut(node, params) {
  return {
    duration,
    delay: delayZero,
    easing: sineOut,
    css: (t) => `opacity: ${t}`,
  };
}
