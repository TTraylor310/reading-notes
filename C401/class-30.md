# Class 30 - Hash Tables

## Resources

- Read [Intro to Hash Tables](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-30/resources/Hashtables.html)
- Watch [What is a hash table?](https://www.youtube.com/watch?v=MfhjkfocRR0)
- Read [Basics of hash tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
- Skim [Hash table wiki](https://en.wikipedia.org/wiki/Hash_table)

- Hashes are 'one way'
  - deterministic - always produces the same number
  - collision - if more things are stored in the same memory spot (hash)
    - separate chaining - storing more that one sets of data in the same hash (array of array of array)
    - linear probing - storing data in a hash but only if empty. Continues to move to next location to see if available



```js
class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i < 0; i < key.length; i++){
      hash = (hash +key.charCodeAt(i) *23) % this.dataMap.length
    }
    return hash
  }
}

let myHashTable = new HashTable();
myHashTable
```
