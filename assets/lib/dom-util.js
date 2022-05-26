export function getScrollParent(node) {
  // Based on https://thewebdev.info/2021/06/27/how-to-find-the-first-scrollable-parent-element-with-javascript/
  if (node === null)
    return null;
  if (node.scrollHeight > node.clientHeight)
    return node;
  return getScrollParent(node.parentNode);
}

export function getBoundingClientRectRelativeToParent(node, parent) {
  const childRect = node.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();
  const { x, y, width, height } = childRect;
  return new DOMRect(
    x - parentRect.x,
    y - parentRect.y,
    width,
    height,
  );
}
