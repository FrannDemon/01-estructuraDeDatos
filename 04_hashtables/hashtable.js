function HashTable(){
    this.buckets = [];
    this.numBuckets = 35;
}

HashTable.prototype.set = function(key, value){
    if(typeof key !== 'string'){
        throw new TypeError('Keys must be strings')
    }
    let hashKey = this.hash(key)
    this.buckets[hashKey] = this.buckets[hashKey] || new LinkedList()
    this.buckets[hashKey].addToHead({key, value})

}
HashTable.prototype.get = function(key){
    let hashKey = this.hash(key)
    let encontrar = this.buckets[hashKey].search(function(obj){
        return key === obj.key
    })
    return encontrar && encontrar.value

}
HashTable.prototype.hasKey = function(key){
    if(this.get(key)){
        return true
    }else{
        return false
    }
}
HashTable.prototype.hash = function(value){
    let result = 0;
    for(let i = 0; i < value.length; i++){
        result += value[i].charCodeAt()
    }
    return result % this.numBuckets
}