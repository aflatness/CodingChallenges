// Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

// Design a binary tree node class with the following methods:

// is_locked, which returns whether the node is locked
// lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
// unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.

const Tree = function (val) {
  this.value = val;
  this.children = [];
  this.parent = null;
  this.locked = false;
}

Tree.prototype.insert = function (val) {
  const node = new Tree(val);
  node.parent = this;
  this.children.push(node);
  return node;
}

Tree.prototype.lock = function () {
  if (this.is_locked()) {
    return false;
  }
  const determineChild = (children) => {
    return children.every(c => {
      return !c.is_locked() && determineChild(c.children);
    });
  }
  const childrenUnlocked = determineChild(this.children);
  const determineParent = (parent) => {
    if (parent) {
      return !parent.is_locked() && determineParent(parent.parent);
    }
    return true;
  }
  const parentsUnlocked = determineParent(this.parent);
  if (childrenUnlocked && parentsUnlocked) {
    this.locked = true;
    return true;
  }
  return false;
}

Tree.prototype.unlock = function () {
  if (!this.is_locked()) {
    return false;
  }
  const determineChild = (children) => {
    return children.every(c => {
      return !c.is_locked() && determineChild(c.children);
    });
  }
  const childrenLocked = determineChild(this.children);
  const determineParent = (parent) => {
    if (parent) {
      return !parent.is_locked() && determineParent(parent.parent);
    }
    return true;
  }
  const parentsLocked = determineParent(this.parent);
  if (childrenLocked && parentsLocked) {
    this.locked = false;
    return true;
  }
  return false;
}

Tree.prototype.is_locked = function () {
  return this.locked;
}