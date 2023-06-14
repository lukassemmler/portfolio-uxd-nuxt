import navigation from "assets/data/nav.json";
import Tree from "./generic-tree";

function getPagesById(pages) {
const pagesById = new Map();
for (const page of pages) {
  const { id } = page;
  if (pagesById.has(id)) {
    console.warn(`There are multiple pages with the same id '${id}'. Skipping entry. `);
    continue;
  }
  pagesById.set(id, page);
}
return pagesById;
}

function traverseNode(node, onNode = () => { }, parent = undefined) {
    const parentId = typeof parent === "string" ? parent : parent.id;
    onNode({ node, parent: parentId });
    if (typeof node !== "object") return;
    const { children } = node;
    if (!children) return;
    for (const child of children)
      traverseNode(child, onNode, node);
}

function getTreeLinksFromRawTree(tree) {
  const treeLinks = [];
  for (const node of tree)
    traverseNode(node, ({node, parent}) => {
      if (!parent) return;
      const nodeId = typeof node === "string" ? node : node.id;
      treeLinks.push({from: parent, to: nodeId});
    });
  return treeLinks;
}

function getTrees(pages, rawTrees) {
  const trees = {};
  for (const tree of rawTrees) {
    const {id, children} = tree;
    const pagesById = getPagesById(pages);
    const treeLinks = getTreeLinksFromRawTree(children);
    trees[id] = new Tree(pagesById, treeLinks);
  }
  return trees;
}

// WARNING: Untested

const { pages, trees } = navigation;
export const nav = getTrees(pages, trees);
