//12     14     17

class LinkedList{
    constructor(value){
        this.head={
            value,
            next:null
        }
        this.tail=this.head;
        this.length=1;

    }
    append(value){
     const newList={
         value,
         next:null
     }
     this.tail.next=newList;
     this.tail=newList;
     this.length ++;
     return this;

    }
    prepend(value){
       const newNode={
            value,
            next:null
        }
       newNode.next=this.head;
       this.head=newNode;
       this.length++;
       return this;
      
    }
}
const newLinkedList=new LinkedList(12)
newLinkedList.append(17);
newLinkedList.prepend(15);
console.log(newLinkedList);