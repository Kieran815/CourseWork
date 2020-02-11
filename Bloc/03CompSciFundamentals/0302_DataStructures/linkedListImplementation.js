function Node() {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.insertAfter = function(refNode, value) {
  if(!this.head) {
    this.head = new Node(value);
    return this;
  }
  var current = this.head;
  while (current.next) {
    console.log(current);
    if(current === refNode) {
      console.log(true);
      var ref = current;
      var node = new Node(value);
      node.next = ref.next;
      ref.next = node;
      return this;
    } else {
      current = current.next;
    }
  }
}

LinkedList.prototype.removeAfter = function(refNode) {
    var current = this.head;
    while(current.next) {
      if(current === refNode) {
        var next = current.next;
        var afterNext = next.next;
        next = null;
        current.next = afterNext;
        return this;
      } else {
        current = current.next;
      }
    }
    return false;
}

LinkedList.prototype.insertHead = function(value) {
  if(!this.head) {
    this.head = new Node(value);
  } else {
    var currehtHead = this.head;
    var next = currentHead.next;
    var node = new Node(value);
    this.head = node;
    this.head.next = currentHead;
    currentHead.next = next;
    return this;
  }
}

LinkedList.prototype.removeHead = function() {
  if(!this.head) {
    return "No Head";
  } else {
    var head = this.head;
    var next = head.next;
    head = null;
    this.head = next;
    return this;
  }
}

LinkedList.prototype.findNode = function(value) {
  if(this.head.value === value) {
    return this.head;
  } else {
    var current = this.head;
    while(current.next) {
      if(current.next === value) {
        return current;
      }
    }
    return false;
  }
}

LinkedList.prototype.print = function() {
  return console.log(this.head);
}

var sll = new LinkedList();
sll.insertAfter(3, 5);
sll.insertAfter(1,3);

sll.print();
