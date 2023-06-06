<script>
function getHeadingDepth(element) {
  const { tagName } = element;
  const match = tagName.match(/^h(\d)$/i);
  return match ? parseInt(match[1]) : null;
}

function getChildren(headings, depth = 0) {
  const children = [];
  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];
    const childDepth = getHeadingDepth(heading);
    if (!childDepth) {
      console.error(`Unhandled heading element '${heading}'. Skipping. `);
      continue;
    }
    if (childDepth <= depth) return children;
    if (childDepth !== depth + 1) continue;
    children.push({
      element: heading,
      children: getChildren(headings.slice(i + 1), depth + 1),
    });
  }
  return children;
}

export default {
  render(h) {
    const getList = (headings) => {
      if (headings.length === 0) return null;
      const items = headings.map(heading => {
        const { element, children} = heading;
        const itemContent = [element.textContent];
        const childList = getList(children);
        if (childList) itemContent.push(childList);
        return h("li", itemContent);
      });
      return h("ol", items);
    };
    return h("div", {class: "table-of-contents" }, [
      getList(this.headingTree)
    ]);
  },
  data: function () {
    return {
      headingTree: [],
    };
  },
  mounted: function () {
    /* Example
     *
     * <h1 class="project-title">
     *   <h2 class="sr-only">
     *   <h2 class="project-tools-title">
     *   <h2 id="overview" class="sr-only">
     *   <h2 id="concept" class="h2-pan">
     *   <h2 id="design" class="h2-pan">
     *     <h3 id="icon-design" class="h3-pan">
     *     <h3 id="screen-design" class="h3-pan">
     *     <h3 id="terrain" class="h3-pan">
     *     <h3 id="assets" class="h3-pan">
     *   <h2 id="implementation" class="h2-pan">
     *     <h3 id="prototype-axure" class="h3-pan">
     *     <h3 id="prototype-unity" class="h3-pan">
     *     <h3 id="prototype-phaser-and-vue-js" class="h3-pan">
     *   <h2 id="user-testing" class="h2-pan">
     *   <h2 id="conclusion" class="h2-pan">
     */
    const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
    const tree = getChildren(headings);
    //console.log(headings)
    //console.log(tree)
    this.headingTree = tree;
  },
};
</script>

<style>
</style>