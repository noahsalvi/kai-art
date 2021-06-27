export function clickOutside(node: Node, callback: Function) {
  addEventListener("click", handleClick);

  async function handleClick(event: MouseEvent) {
    if (!node.contains(event.target as Node)) {
      callback(event);
    }
  }

  return {
    destroy() {
      removeEventListener("click", handleClick);
    },
  };
}
