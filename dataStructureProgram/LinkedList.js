
	// User defined class node 
    class Node { 
        // constructor 
        constructor(element) 
        { 
            this.element = element; 
            this.next = null
        } 
    } 
    
    //********************************************************************************************* 
    
    
    // linkedlist class 
    class LinkedList { 

        constructor() 
        { 
            this.head = null; 
            this.size = 0; 
        } 


//***************************************************************************************************
    
    
    // adds an element at the end of list 
    
    add(element) 
    { 
        // creates a new node 
        var node = new Node(element); 
      
        // to store current node 
        var current; 
      
        // if list is Empty add the 
        // element and make it head 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 
      
            // iterate to the end of the 
            // list 
            while (current.next) { 
                current = current.next; 
            } 
      
            // add node 
            current.next = node; 
        } 
        this.size++; 
    } 
    
    
//***********************************************************************************************
    
    
    // insert element at the position index 
    // of the list 
    insertAt(element, index) 
    { 
        if (index > 0 && index > this.size) 
            return false; 
        else { 
            // creates a new node 
            var node = new Node(element); 
            var curr, prev; 
    
            curr = this.head; 
    
            // add the element to the 
            // first index 
            if (index == 0) { 
                node.next = head; 
                this.head = node; 
            } else { 
                curr = this.head; 
                var it = 0; 
    
                // iterate over the list to find 
                // the position to insert 
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                } 
    
                // adding an element 
                node.next = curr; 
                prev.next = node; 
            } 
            this.size++; 
        } 
    } 
    
    
    //*********************************************************************************************** 
    
    
    // removes an element from the 
    // specified location 
    removeFrom(index) 
    { 
        if (index > 0 && index > this.size) 
            return -1; 
        else { 
            var curr, prev, it = 0; 
            curr = this.head; 
            prev = curr; 
      
            // deleting first element 
            if (index === 0) { 
                this.head = curr.next; 
            } else { 
                // iterate over the list to the 
                // position to removce an element 
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                } 
      
                // remove the element 
                prev.next = curr.next; 
            } 
            this.size--; 
      
            // return the remove element 
            return curr.element; 
        } 
    } 

    
    
    //**********************************************************************************************
    
    
    // removes a given element from the 
    // list 
    removeElement(element) 
    { 
        var current = this.head; 
        var prev = null; 
    
        // iterate over the list 
        while (current != null) { 
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element === element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.element; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    } 
    
    
    //***************************************************************************************************
    
    
    // finds the index of element 
    indexOf(element) 
    { 
        var count = 0; 
        var current = this.head; 
    
        // iterae over the list 
        while (current != null) { 
            // compare each element of the list 
            // with given element 
            if (current.element === element) 
                return count; 
            count++; 
            current = current.next; 
        } 
    
        // not found 
        return -1; 
    } 


    //*********************************************************************

    search(element)
    {
		var temp=this.head;
        
            while(temp != null)
            {
                if((temp.element) === element)
                
                    return true;
                    temp = temp.next;
            }
         return false;

        
     }
    
    
    //*********************************************************************************************
    
    
    // checks the list for empty 
    isEmpty() 
    { 
        return this.size == 0; 
    } 
    
    
    //*********************************************************************************************
    
    
    // gives the size of the list 
    size_of_list() 
    { 
        console.log(this.size); 
    } 
    
    
    //******************************************************************************************
    
    
    // prints the list items 
    printList() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    } 


//************************************************************************


    

   

sortList() {

    var swap;
    var current = this.head;
    var current1 = current.next;
    var n = this.size;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            if (parseInt(current1.element) < parseInt(current.element)) { //compare element with its previous element

                swap = current.element; //if condition satisfies then swap the values

                current.element = current1.element; 

                current1.element = swap;

            }

            if (current1.next != null) {

                current = current1;

                current1 = current1.next;

            }

        }

        current = this.head;

        current1 = current.next;
    }

    console.log('List sorted');
  }

//***********************************************************************

}




    

    module.exports = {
        LinkedList
    }

//  var list = new linkedList();
//     // adding more elements to the list 
//     list.add(20); 
//     list.add(30); 
//     list.add(40); 
//      list.add(50); 

// // // returns 10 20 30 40 50 
//  list.printList(); 
    
   
    
    
    
    
    
    
