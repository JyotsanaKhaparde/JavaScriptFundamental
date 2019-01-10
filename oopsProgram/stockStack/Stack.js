// JavaScript source code Linked List
var show = require('util');
function Node(data)
{
    this.data = data;
    this.next = null;
}
// Stack implemented using LinkedList
class Stack
{
    Stack()
    {
        this.top = null;
    }
    push(data)
    {
        var newNode = new Node(data);
        newNode.next = this.top; //Special attention
        this.top = newNode;
    }
    pop()
    {
        if(this.top !== null)
        {
            var topItem = this.top.data;
            this.top = this.top.next;
            return topItem;
        }
        return null;
    }
    print()
    {
        var curr = this.top;
        while(curr)
        {
            console.log(curr.data);
            curr = curr.next;
        }
    }
    peek()
    {
        return this.top.data;
    }
    isEmpty()
    {
        if(this.top === null)
            return true;
        else
            return false;

    }
    display()
    {
        var t = this.top;

        while (t != null)
        {
            show.print(t.data);
            if(t.next != null)
            show.print("  ");
            t = t.next;
        }
        console.log();
    }
}
module.exports =
{
    Stack
}

