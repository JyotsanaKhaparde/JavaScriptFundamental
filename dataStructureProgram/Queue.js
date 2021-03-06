var show = require('util');

// Queue implemented using LinkedList
class Node
{
    constructor(data)
    {
    this.data = data;
    this.next = null;
    }
}

class Queue
{

    constructor()   
    {
        this.head = null;
        this.tail = null;
    }

    enqueue(data)
    {
        var newNode = new Node(data);
        if(this.head === null)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
        this.tail.next = newNode;
        this.tail = newNode;
        }
    }

    dequeue()
    {
        var newNode;
        if(this.head !== null)
        {
            newNode = this.head.data;
            this.head = this.head.next;
        }
        return newNode;
    }

    print()
    {
        var curr = this.head;
        while(curr)
        {
            console.log(curr.data);
            curr = curr.next;
        }
    }   

    isEmpty()
    {
        return this.head == null;
    }
    display2()
    {
        var t = this.head;
        while(t!=null)
        {
            show.print(t.data);
            if(t.next!=null)
            show.print("  ");
            t = t.next;
        }
        console.log();
        console.log();
    }       
    
    displayCalender(d)
    {
        var t = this.head;
        var count = 0;
        while(t.data == " ")
        {
            show.print("   ");
            t = t.next;
        }
        while(t!=null)
        {   
            count++;
            show.print(" ", t.data);
            if(t.data < 10)
            {
                show.print(" ");
            }
    
            if(((count + d) % 7 == 0))
            {
            console.log("");
            }
            t = t.next;
        }
        count = 0;
    }
    
    displayReverse(head)
    {
        if(head == null)
        return;
    
        this.displayReverse(head.next);
        show.print(head.data);
        if(head.next != head)
        show.print("-->");
    }
    getHead()
    {
        return this.head;
    }
   
}


    module.exports = {
        Queue
    }
