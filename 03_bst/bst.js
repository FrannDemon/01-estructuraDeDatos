function BinarySearchTree(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.contador = 1;
}

BinarySearchTree.prototype.insert = function(value){
    this.contador++;
    const newTree = new BinarySearchTree(value)
    let current = this;
    while(current){
        if(value < current.value){
            if(!current.left){
                current.left = newTree
                break
            }
            current = current.left
        }else{
            if(!current.right){
                current.right = newTree
                break
            }
            current = current.right
        }
    }
}
BinarySearchTree.prototype.contains = function(value){
    if(value === this.value){
        return true
    }else if(value < this.value && this.left){
        return this.left.contains(value)
    }else if(value > this.value && this.right){
        return this.right.contains(value)
    }else{
        return false
    }
}
BinarySearchTree.prototype.depthFirstForEach = function(fn,
    modo = "in-order"){
    if(modo === "in-order"){
        if (this.left){
            this.left.depthFirstForEach(fn, modo);
        }
        fn(this.value);
        if(this.right){
            this.right.depthFirstForEach(fn, modo);
        }
    }
    if(modo === "pre-order"){
        fn(this.value);
        if(this.left) {
            this.left.depthFirstForEach(fn, modo);
        }
        if(this.right){
            this.right.depthFirstForEach(fn, modo);
        }
    }
    if(modo === "post-order"){
        if(this.left){
            this.left.depthFirstForEach(fn, modo);
        }
        if(this.right){
            this.right.depthFirstForEach(fn, modo);
        }
        fn(this.value);
    }
  };
 BinarySearchTree.prototype.breadthFirstForEach = function(fn, queue = []){
    fn(this.value);
    this.left && queue.push(this.left);
    this.right && queue.push(this.right);
    if (queue.length) queue.shift().breadthFirstForEach(fn, queue);
  };
BinarySearchTree.prototype.size = function(){
    return this.contador
}


