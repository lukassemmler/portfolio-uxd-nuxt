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

function traverseTree(node, onNode, depth = 1) {
  const { element, children } = node;
  for (const child of children) traverseTree(child, onNode, depth + 1);
  onNode(node, depth);
}

function getSubTree(tree, minDepth = 1, maxDepth = Infinity) {
  // Tree is expected to be an array of nodes, where each node can contain an array of children.
  const subTree = [];
  for (const root of tree)
    traverseTree(root, function onNode(node, depth) {
      const newNode = { ...node }; // we need to copy so we do not modify the original tree.
      if (depth === minDepth) subTree.push(newNode);
      if (depth === maxDepth) newNode.children = [];
    });
  return subTree;
}

export default {
  props: {
    minDepth: {
      type: Number,
      default: 2,
    },
    maxDepth: {
      type: Number,
      default: 6,
    },
    ignoredClasses: {
      type: Array,
      default: () => ["sr-only", "no-toc"],
    },
    showHeading: {
      type: Boolean,
      default: true,
    },
  },
  render(h) {
    const getList = (headings) => {
      if (headings.length === 0) return null;
      const items = headings.map((heading, index) => {
        const { element, children } = heading;
        if (!element.id) element.id = index + 1;
        console.log(element.id);
        const itemContent = [h("a", { attrs: { href: "#" + element.id } }, [element.textContent])];
        const childList = getList(children);
        if (childList) itemContent.push(childList);
        return h("li", { class: "table-of-contents-item" }, itemContent);
      });
      return h("ol", { class: "table-of-contents-list" }, items);
    };
    return h("div", { class: "table-of-contents" }, [
      h(
        "h2",
        { class: ["table-of-contents-heading", "no-toc", { "sr-only": !this.$props.showHeading }] },
        this.$t("label_table-of-contents")
      ),
      getList(this.headingTree),
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
    const { ignoredClasses, minDepth, maxDepth } = this.$props;
    const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
    const filteredHeadings = headings.filter((heading) => {
      return ignoredClasses.every((ignoredClass) => !heading.classList.contains(ignoredClass));
    });
    const tree = getChildren(filteredHeadings);
    const subtree = getSubTree(tree, this.$props.minDepth, this.$props.maxDepth);
    if (subtree.length === 0) console.error(`Table of content has no headlines. `);
    this.headingTree = subtree;
  },
};
</script>

<style lang="scss">
$padding: 0.25em;

.table-of-contents {
  background-color: $dark-05;
  border-radius: 0.5em;
  padding: 1.5em;
}

.table-of-contents-list {
  counter-reset: item;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}

.table-of-contents-item {
  display: block;
  padding-top: $padding;
  padding-bottom: $padding;

  &:before {
    //display: inline-flex;
    //width: 1em;
    //justify-content: end;
    content: counters(item, ".") " ";
    counter-increment: item;
    margin-right: 0.25em;
    font-variant-numeric: tabular-nums;
  }

  & > .table-of-contents-list {
    padding-left: 1.5em;
    margin-top: $padding;
    margin-bottom: -1 * $padding;
  }
}

.table-of-contents-heading {
  font-size: 1em;
  margin-bottom: 0.5em;
  letter-spacing: 0.02em;
}
</style>