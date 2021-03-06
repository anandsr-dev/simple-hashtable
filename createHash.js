class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash = (key) => {
        let hash = 0
        for(let i=0; i<key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash
    }

    set = (key, value) => {
        const index = this._hash(key)
        if(!this.data[index])
        this.data[index] = []

        this.data[index].push([key, value])
    }

    get = (key) => {
        const index = this._hash(key)
        const currentBucket = this.data[index]
        if(!currentBucket)
        return undefined

        for(let i = 0; i < currentBucket.length; i++) {
            if(currentBucket[i][0] === key)
            return currentBucket[i][1]
        }
    }

    keys() {
        const keysArray = []
        for(let i =0; i<this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }

}

const myHashTable = new HashTable(50)

myHashTable.set("anand", 27)
myHashTable.set("arun", 29)

console.log(myHashTable.get("arun"))
console.log(myHashTable.data)
console.log(myHashTable.keys())