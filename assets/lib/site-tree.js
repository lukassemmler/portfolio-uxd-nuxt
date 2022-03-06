import navigation from "assets/data/nav.json";
import Tree from "./generic-tree";

function SiteTree(id) {
  this.navigationData = navigation;
  this.treeId = id;
  this.sitesById = null;
  this.roots = null;
  this.tree = null;
}

SiteTree.prototype.preload = function preload() {
  const { sites, trees } = this.navigationData;
  const rawTree = trees.find(tree => tree.id === this.treeId);
  if (rawTree === undefined)
    throw new Error(`Could not find a tree with id '${this.treeId}'. `);
  // Initialize sites
  this.sitesById = new Map();
  for (const site of sites) {
    const { id: siteId } = site;
    this.sitesById.set(siteId, site);
  }
  // Iterate over root nodes and unify structure format
  const usedSiteIds = [];
  const formattedNodes = [];
  const { nodes: rawRoots } = rawTree;
  for (const rawNode of rawRoots) {
    const formattedNode = SiteTree.getFormattedNode(rawNode);
    formattedNodes.push(formattedNode);
    const siteIds = this.getSiteIdsFromNode(formattedNode);
    usedSiteIds.push(...siteIds);
  }
  const usedSitesById = new Map();
  for (const siteId of usedSiteIds) {
    const site = this.sitesById.get(siteId);
    if (site === undefined)
      throw new Error(`Could not find a site with id '${siteId}'. `);
    usedSitesById.set(siteId, site);
  }
  // Create tree
  this.tree = new Tree(usedSitesById, formattedNodes);
  return this; // return itself for chaining
}

/**
 * Returns a node object from a provided nodeId or node object
 * @param {(string|object)} node 
 * @returns {object}
 */
SiteTree.getFormattedNode = function getFormattedNode(node) {
  const formattedNode = {};
  switch (typeof node) {
    case "object":
      formattedNode.id = node.site,
        formattedNode.children = [];
      break;
    case "string":
      formattedNode.id = node,
        formattedNode.children = [];
      break;
    default:
      throw new Error(`Node has an illegal type '${typeof node}'. Should be 'string' or 'object'. `);
  }
  if (typeof node !== "object" || !node.hasOwnProperty("nodes"))
    return formattedNode;
  for (const rawChild of node.nodes) {
    const child = SiteTree.getFormattedNode(rawChild);
    formattedNode.children.push(child);
  }
  return formattedNode;
}

SiteTree.prototype.getSiteIdsFromNode = function getSiteIdsFromNode(formattedNode) {
  const siteIds = [formattedNode.id];
  for (const node of formattedNode.children) {
    const childIds = this.getSiteIdsFromNode(node);
    siteIds.push(...childIds);
  }
  return siteIds;
}

SiteTree.prototype.getData = function getData() {
  const output = [];
  const roots = this.tree.getRoots();
  for (const root of roots) {
    const data = SiteTree.getNodeData(root);
    output.push(data);
  }
  return output;
}

/**
 * @param {TreeNode} node 
 * @returns {object}
 */
SiteTree.getNodeData = function getNodeData(node, path = []) {
  const { value: site } = node;
  const newPath = [...path, site.path];
  const childrenData = [];
  for (const child of node.children) {
    const childData = SiteTree.getNodeData(child, newPath);
    childrenData.push(childData);
  }
  return {
    path: newPath.join(""),
    level: newPath.length - 1,
    labelId: site.labelId,
    children: childrenData,
  }
}

export default SiteTree;
