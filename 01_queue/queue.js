function Queue(){
    this.data = [];
    this.head = 0
    this.tail = 0
}

/* Queue.prototype.enqueue = function(value){
    this.data.push(value)
}

Queue.prototype.dequeue = function(){
    return this.data.shift()
}

Queue.prototype.size = function(){
    return this.data.length
} */

Queue.prototype.enqueue = function(value){
    this.data[this.tail] = value
    this.tail++
    
}

Queue.prototype.dequeue = function(){
    let item = this.data[this.head]
    if(item){
        this.head++
        return item
    }else{return undefined
    }
}

Queue.prototype.size = function(){
    return this.tail - this.head

}