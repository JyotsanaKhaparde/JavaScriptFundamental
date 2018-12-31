// JavaScript source code
// Linked List

function Node(data) {
    this.data = data;
    this.next = null;
}

// Stack implemented using LinkedList
class Stack{

Stack() {
    this.top = null;
   // this.size = 0;
}
    push(data) {
    var newNode = new Node(data);
    newNode.next = this.top; //Special attention
    this.top = newNode;
   // this.size++;
}
pop() {
    if (this.top !== null) {
        var topItem = this.top.data;
        this.top = this.top.next;
       // this.size--;
        return topItem;
    }
    return null;
}
print() {
    var curr = this.top;
    while (curr) {
        console.log(curr.data);
        curr = curr.next;
    }
}
peek() {
    return this.top.data;
}

isEmpty(){
    if(this.top === null)
        return true;
    else
        return false;    
    
}
}

module.exports = {
    Stack
}


//    var stack = new Stack();
//  stack.push(3);
//  stack.push(5);
//  stack.push(7);
//  stack.print();
// stack.pop();
// console.log('peek data is: ', (stack.peek()));
// stack.print();