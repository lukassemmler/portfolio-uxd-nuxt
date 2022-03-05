import navigation from "assets/data/nav.json";

function SiteTree(id) {
  this.navigationData = navigation;
  this.treeId = id;
  this.sitesById = null;
  this.roots = null;
  this.tree = null;
}

SiteTree.prototype.preload = function preload() {
  const { sites, trees: rawTrees } = this.navigationData;
  // Initialize tree
  const rawTree = rawTrees.find(tree => tree.id === this.treeId);
  if (rawTree === undefined)
    throw new Error(`Could not find a tree with id '${this.treeId}'. `);
  this.tree = new Map();
  this.roots = [];
  // Initialize sites
  this.sitesById = new Map();
  for (const site of sites) {
    const { id: siteId } = site;
    this.sitesById.set(siteId, site);
  }
  // Iterate over root nodes and recursively build tree
  const { nodes: rawRoots } = rawTree;
  for (const rawNode of rawRoots) {
    // Iterate over root nodes
    this.addNode(null, rawNode, 0);
    // Add all top level sites to this.roots
    const formattedNode = SiteTree.getFormattedNode(rawNode);
    const { site: siteId } = formattedNode;
    const site = this.getSite(siteId);
    this.roots.push(site);
  }
}

SiteTree.prototype.addNode = function addNode(parent, node) {
  const formattedNode = SiteTree.getFormattedNode(node);
  const { site: nodeId, children: rawChildrenNodes } = formattedNode;
  const site = this.getSite(nodeId);
  const siteInfo = { children: [] };
  this.tree.set(site, siteInfo);
  for (const rawChildNode of rawChildrenNodes) {
    const formattedChildNode = SiteTree.getFormattedNode(rawChildNode);
    const { site: childId } = formattedChildNode;
    const child = this.getSite(childId);
    siteInfo.children.push(child);
    this.addNode(node, child)
  }
}

SiteTree.prototype.traverseNode = function traverseNode(site, path, operation) {
  const siteInfo = this.tree.get(site);
  const { children } = siteInfo;
  // "level" and "parent" are for convenience only, the actual data comes from "path".
  const level = path.length;
  const parent = level === 0 ? null : path[level - 1];
  const isLeaf = children.length === 0;
  operation(parent, site, children, level, isLeaf, path);
  for (const child of children)
    this.traverseNode(child, [...path, site], operation)
}

SiteTree.prototype.getSite = function getSite(siteId) {
  const site = this.sitesById.get(siteId);
  if (site === undefined)
    throw new Error(`Could not find a site with id '${siteId}'. `);
  return site;
}

/**
 * Returns a node object from a provided nodeId or node object
 * @param {(string|object)} node 
 * @returns {object}
 */
SiteTree.getFormattedNode = function getFormattedNode(node) {
  if (typeof node === "object")
    return node;
  if (typeof node !== "string")
    throw new Error(`Node has an illegal type '${typeof node}'. Should be 'string' or 'object'. `);
  const nodeId = node;
  return {
    site: nodeId,
    children: [],
  }
}

SiteTree.prototype.runOnRoots = function runOnRoots(operation) {
  for (const root of this.roots)
    this.traverseNode(root, [], function runOnRoot(parent, site, children, level, isLeaf, path) {
      if (level !== 0)
        return;
      operation(parent, site, children, level, isLeaf, path);
    });
}

SiteTree.prototype.getJson = function getJson() {
  const output = [];
  this.runOnRoots(function createJsonFromTree(parent, site, children, level) {
    const json = SiteTree.getJsonFromNode(parent, site, children, level);
    output.push(json);
  });
  return output;
}

SiteTree.getJsonFromNode = function getJsonFromNode(parent, site, children, level) {
  const newPath = parent === null ?
    site.path :
    parent.path + site.path;
  const childrenJson = [];
  for (child of children) {
    const json = createJson(parent, site, children, level);
    childrenJson.push(json);
  }
  return {
    path: newPath,
    label: site.labelId,
    level: level,
    children: childrenJson,
  }
};

export default SiteTree;
