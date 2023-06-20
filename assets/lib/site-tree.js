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
    traverseNode(node, ({ node, parent }) => {
      if (!parent) return;
      const nodeId = typeof node === "string" ? node : node.id;
      treeLinks.push({ from: parent, to: nodeId });
    });
  return treeLinks;
}

function getTrees(pages, rawTrees) {
  const trees = {};
  for (const tree of rawTrees) {
    const { id, children } = tree;
    const pagesById = getPagesById(pages);
    const treeLinks = getTreeLinksFromRawTree(children);
    trees[id] = new Tree(pagesById, treeLinks);
  }
  return trees;
}

/*
function hydrateNode (pagesById, rawPage) {
  if (typeof rawPage === "string") {
    const page = pagesById.get(rawPage);
    return { ...page, children: [] };
  }
  const { id, children } = rawPage;
  const page = pagesById.get(id);
  return { ...page, children };
}
*/
// WARNING: Untested

//const { pages, trees } = navigation;
//export const nav = getTrees(pages, trees);

function getTagsById(rawTags) {
  const tagsById = new Map();
  for (const rawTag of rawTags) {
    const { id, stringId } = rawTag;
    if (tagsById.has(rawTag)) {
      console.warn(`Duplicate tag id '${id}', skipping adding tag to map. `);
      continue;
    }
    tagsById.set(id, rawTag);
  }
  return tagsById;
}

export function getTree(pages, rawTree, tags = undefined) {
  const tagsById = tags ? getTagsById(tags) : null;
  const pagesById = getPagesById(pages);
  const tree = [];
  for (const node of rawTree) { 
    const pageId = typeof node === "string" ? node : node.id;
    const children = typeof node === "string" ? [] : getTree(pages, node.children);
    const page = pagesById.get(pageId);
    const newPage = { ...page };
    if (tagsById && page.tags) {
      const rawTags = [...page.tags];
      const hydratedTags = rawTags.map(tag => tagsById.get(tag));
      newPage.tags = hydratedTags;
    }
    tree.push({ ...newPage, children });
  }
  return tree;
}

export function getTreeFromNav(navigation, treeId, tags = undefined) {
  const { pages, trees } = navigation;
  const rawTree = trees.find(tree => tree.id === treeId);
  if (!rawTree) throw new Error(`There is no tree with id '${treeId}' in the navigation data. `);
  return getTree(pages, rawTree.children, tags);
}
