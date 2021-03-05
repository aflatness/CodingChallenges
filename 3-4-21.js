//Problem: Binary Search Tree

const Tree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Tree.prototype.insert = function (value) {
  if (this.value < value) {
    this.right ? this.right.insert(value) : this.right = new Tree(value);
  } else {
    this.left ? this.left.insert(value) : this.left = new Tree(value);
  }
}

Tree.prototype.search = function (value) {
  if (this.value === value) {
    return this;
  } else if (this.value < value) {
    return this.right ? this.right.search(value) : null;
  } else {
    return this.left ? this.left.search(value) : null;
  }
}



