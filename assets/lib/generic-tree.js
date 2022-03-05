function TreeNode(value, id) {
  this.id = id;
  this.parent = null;
  this.value = value;
  this.children = [];
}

TreeNode.prototype.append = function append(node) {
  TreeNode.checkCyclicDependency(this, node);
  this.children.push(node);
  node.parent = this;
}

TreeNode.prototype.remove = function remove(node) {
  const newChildren = this.children.filter(child => child !== node);
  const lengthBefore = this.children.length;
  const lengthAfter = newChildren.length;
  if (lengthAfter === lengthBefore)
    throw new Error(`Tried to remove child '${node.id}' from '${this.id}', but it wasn't a child in the first place. `);
  if (lengthAfter < lengthBefore - 1)
    throw new Error(`Tried to remove child '${node.id}' from '${this.id}', but there were '${lengthBefore - lengthAfter}' occurances. `);
  this.children = newChildren;
  node.parent = null;
}

TreeNode.prototype.isLeaf = function isLeaf() {
  return this.children.length === 0;
}

TreeNode.checkCyclicDependency = function checkCyclicDependency(sourceNode, targetNode) {
  let currentNode = sourceNode;
  while (currentNode !== null) {
    if (currentNode === targetNode)
      throw new Error(`Cyclic dependencies are not allowed at node '${targetNode.id}'. `);
    currentNode = currentNode.parent;
  }
}

TreeNode.prototype.traverseDown = function traverseDown(operation, path = []) {
  const level = path.length;
  operation(this, level, path);
  for (const child of this.children)
    this.traverseDown(child, operation, [...path, this.id])
}

TreeNode.prototype.traverseUp = function traverseUp(operation, path = []) {
  const depth = path.length;
  operation(this, depth, path);
  if (this.parent !== null)
    this.traverseUp(this.parent, operation, [...path, this.id])
}

/**
 * @typedef {Object} TreeLink
 * @property {any} from
 * @property {any} to
 */

/**
 * @typedef {Object} RawTreeNode
 * @property {any} id
 * @property {RawTreeNode[]} children 
 */

/**
 * Generic Tree class
 * @param {Map} valuesById 
 * @param {(TreeLink[]|RawTreeNode[])} structure 
 * @returns 
 */
function Tree(valuesById, structure) {
  this.tree = new Map();
  valuesById.forEach((value, id) => {
    const node = new TreeNode(value, id);
    this.tree.set(node.id, node);
  });
  if (structure.length === 0)
    return;
  const structureIsLinkList = structure[0].hasOwnProperty("from");
  if (structureIsLinkList) {
    const links = structure;
    this.addLinks(links);
    return;
  }
  for (const rawNode of structure)
    this.addRawNode(rawNode);
}

Tree.prototype.addLinks = function addLinks(links) {
  for (const link of links) {
    const { from: sourceId, to: targetId } = link;
    const sourceNode = this.get(sourceId);
    const targetNode = this.get(targetId);
    sourceNode.append(targetNode);
  }
}

/**
 * @param {RawTreeNode} rawNode 
 */
Tree.prototype.addRawNode = function addRawNode(rawNode) {
  const sourceNode = this.get(rawNode.id);
  for (const rawChild of rawNode.children) {
    const targetNode = this.get(rawChild.id);
    sourceNode.append(targetNode);
    this.addRawNode(rawChild);
  }
}

Tree.prototype.get = function get(nodeId) {
  const node = this.tree.get(nodeId);
  if (node === undefined)
    throw new Error(`Could not find a node with id '${nodeId}'. `);
  return node;
}

Tree.prototype.getRoots = function getRoots() {
  const roots = [];
  this.tree.forEach((node, id) => {
    if (node.parent !== null)
      return;
    roots.push(node);
  });
  return roots;
}

export default Tree;
