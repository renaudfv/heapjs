# heapjs
EcmaScript6 implementation of Min and Max heap data structures with added functionality. 

## Min Heap
```
Heap binary tree with minimal reference value (head) at its top.
```

## Max Heap
```
Heap binary tree with maximal reference value (head) at its top.
```

## Methods

### insert
#### params: value, object = {}
```
Where _value_ is the sorting reference for the heap structure and _object_ is any JavaScript object. _object_ is empty if not provided. The inserted object will be sorted up the tree according to _value_.
```

### update 
#### params: object, value
```
_object_ should be the reference to a JavaScript object that has already been added to the heap. _value_ will set the heap reference value associated to the object. The inserted object will be sorted up or down the tree according to _value_.
```

### remove 
#### params: object
```
_object_ is the object to be deleted in the heap. The heap tree will ajust itself to make sure its min or max state is respected.
```

### buildHeap
#### params: list
```
Use this method to fill in a list filled with _object_ - _value_ pairs. The min or max structure will be respected upon call.
```

### empty
```
Removes every item in the heap.
```

### deleteHead
#### return: headValue
```
Removes the head pair (_object_ - _value_) and returns its value.
```

### headObject
#### return: headObject
```
Returns the reference to the head of the heap object without altering the structure.
```

### headValue
#### return: headValue
```
Returns the reference to the head of the heap value without altering the structure.
```

### list
#### return: heapList
```
Returns the items in the heap in an array.
```

### size
#### return: currentSize
```
Returns current size but called as an attribute (eg.: _heap_.size, not _heap_.size()).
```

### contains
#### params: object
```
Used to determine if _object_ is present in the heap list.
```
#### return: heapValue
```
Returns its paired value if present, otherwise returns -1.
```

### isEmpty
#### return: true/false
```
Returns true there is nothing in the heap.
```

