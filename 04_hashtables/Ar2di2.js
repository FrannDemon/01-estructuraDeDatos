function LinkedList(){
    this.head = false
    this.tail = false
    this.size = 0

}

class Node{
    constructor(value){
        this.previous = null
        this.next = null
        this.value = value
    }

}

LinkedList.prototype.addToTail = function(value){
    const newNode = new Node(value)
    if(this.size === 0){
        this.head = newNode;
        this.tail = newNode;
    }else{
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
    }
    
    this.size++
    
}

LinkedList.prototype.addToHead = function(value){
    const newNode = new Node(value)
    
    if(this.size === 0){
        this.head = newNode;
        this.tail = newNode;
    }else{
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
    
    this.size++
}

LinkedList.prototype.removeTail = function(){
    const nodeToRemove = this.tail

    if(this.size === 0){
        return null
    }
    if(this.size === 1){
         this.head = false
         this.tail = false
    }else{
        this.tail = this.tail.previous
        this.tail.next = null
        nodeToRemove.previous = null
    }

    this.size--
    return nodeToRemove.value
}

LinkedList.prototype.removeHead = function(){
    const nodeToRemove = this.head
    
    if(this.size === 0){
       return null
    }
    if(this.size === 1){
        this.head = false
        this.tail = false
    }else{
        this.head = nodeToRemove.next
        this.head.previous = null
        nodeToRemove.next = null
    }
    
    this.size--
    return nodeToRemove.value
}

LinkedList.prototype.search = function(str){
 let nodoActual = this.head

 if(typeof str === "function"){
    while(nodoActual !== null){
        if(str(nodoActual.value)){
            return nodoActual.value
        }
        nodoActual = nodoActual.next
    }
 }

 if(typeof str === "string"){
    while(nodoActual !== null){
        if(str === nodoActual.value){
            return str
        }
        nodoActual = nodoActual.next
    }
 }
 
 return null
}

