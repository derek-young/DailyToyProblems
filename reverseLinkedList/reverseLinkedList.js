var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if (this.head === null) this.head = node;
  if (this.tail !== null) this.tail.next = node;
  this.tail = node;
}

LinkedList.prototype.addToHead = function(value) {
  var node = new Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
}

LinkedList.prototype.removeHead = function() {

}

LinkedList.prototype.removeTail = function() {

}

var Node = function(value) {
  this.value = value;
  this.next = null;
}

var linkedList = new LinkedList();

linkedList.addToTail(3);
linkedList.addToTail(13);
linkedList.addToTail(9);
linkedList.addToTail(4);

console.log(linkedList.head.next.next.value); // 9

var reverseLinkedList = function(head) {
  var newList = new LinkedList();
  while (head) {
    newList.addToHead(head.value);
    head = head.next;
  }
  return newList;
}

var reversedList = reverseLinkedList(linkedList.head)
console.log(reversedList);
console.log(reversedList.head.next.next.value); // 13
