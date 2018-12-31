class Node{
constructor(data) {
    this.data = data;
    this.next = null;
   this.pre = null;
}
}

class Deque{

constructor(){
    //this.next = null;
   // this.pre = null;
    this.front = null;
    this.rear = null;
    this.counter = 0;

}




  
    //******************************************************************
    
    //add front
   addToFront( data)
    {
        //if no element in list
        if(this.front==null) 
        {
            var tNode = new Deque(data);
             this.front=tNode;
             this.rear=this.front;
        }
        else  
        {
           var tNode = new Deque(data);

            tNode.data=data;
            tNode.next=this.front;
            this.front.prev=tNode;
            this.front=tNode;
        }
        this.counter++;
        //return data;
    
    }

    //************************************************************************

    //add the element in the rear 
    addToRear(data)
    {
        var newNode = new Deque(data);
    if (this.rear == null) {
        this.front = newNode;
        this.rear = this.front;
    } else {
        var tNode=new Deque(data);
            this.rear.next=tNode;
            tNode.prev=this.rear;
            this.rear=tNode;
        }
        this.counter++;
		//return data;
    }
    
    //**********************************************************************
    

    /**
     * Function is used to remove the elements in front of the deque
     * 
     * @return output is the element of front in the deque
     */
    removeFront()
    {

        var newNode=null;
        if(this.front==null)
        {
            console.log("No elements to delete");
            
           // System.out.println("No elements to delete");
        }
        else
        {
            newNode=this.front.data;
            this.front=this.front.next;
        }
        this.counter--;
        return newNode;
       
    }
    
    //***********************************************************************
    
    /**
     * Function is used to remove the last element in the dqueue
     * 
     * @return the element which are remove in the deqeue
     */
   removeRear()
    {
        var newNode=null;
        if(this.front==null)
        {
            console.log("No element to delete");
            
        }
        else
        {
            newNode=this.rear.data;
            this.rear=this.rear.pre;
        }
        this.counter--;
        return newNode;
    }
    
    //****************************************************************************
    
    
    /**
     * Function is used to remove the element in the deque
     * @return 
     */
    
    isEmpty()
    {
        if(this.front==null)
            return true;
        else
            return false;
    }
    
    //*****************************************************************************
 
    /**
     * @return the size of the element in the deque
     */
    
    size()
    {
        return this.counter;
    }
    
    //******************************************************************************
    
  //show element 
    
  show()
    {
    	var node = this.front;
        while(node.next != null) 
        {
            console.log(node.data);
            
    		node = node.next; //shift the next node
        }
        console.log(node.data);
        
    }
}

module.exports = {
    Deque
}

     var deque = new Deque();
     deque.addToFront(5);
     deque.addToFront(6);
    
   //deque.addToRear(5);
   // deque.addToRear(7);   
    // deque.addToRear(2);
   // deque.addToFront(4);
    deque.show();
  //var x = deque.removeFront();
  // console.log('deleteed : ',x);
  


   //deque.removeRear();

    //deque.show();
   // var y = deque.removeRear();
    // console.log('deleted rear: ',y);
    
    // deque.show();
