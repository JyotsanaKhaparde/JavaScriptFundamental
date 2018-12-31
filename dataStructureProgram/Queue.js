// JavaScript source code
// Queue implemented using LinkedList
class Node{
 constructor(data) {
    this.data = data;
    this.next = null;
}
}

class Queue{

constructor() {
    this.head = null;
    this.tail = null;
}
enqueue(data) {
    var newNode = new Node(data);
    if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
}
dequeue() {
    var newNode;
    if (this.head !== null) {
        newNode = this.head.data;
        this.head = this.head.next;
    }
    return newNode;
}
print() {
    var curr = this.head;
    while (curr) {
        console.log(curr.data);
        curr = curr.next;
    }
}

isEmpty(){
    return this.head == null;
}
}

module.exports = {
    Queue
}
//  var queue = new Queue(); 
// console.log(queue.enqueue(3));
 
//  queue.enqueue(5);
//  queue.enqueue(7);
//   queue.print();
//  queue.enqueue(2);
// queue.print();

