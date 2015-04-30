(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.heap = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

/**
 * ES6 Implementation of a binary heap based on :
 * http://interactivepython.org/courselib/static/pythonds/Trees/heap.html
 *
 * The Heap class is an abstraction of the binary heap. It is implemented to
 * give methods related to both min and max heaps.
 *
 * @author: Renaud Vincent https://github.com/renaudfv
 **/

var Heap = (function () {
  function Heap() {
    _classCallCheck(this, Heap);

    this.currentSize = 0;
    this.heapList = [];
  }

  _createClass(Heap, [{
    key: '__percUp',

    // Abstract method which brings elements up the tree from the i index.
    value: function __percUp(i) {}
  }, {
    key: '__percDown',

    // Abstract method which brings elements down the tree from the i index.
    value: function __percDown(i) {}
  }, {
    key: 'update',

    // Updates
    value: function update(object) {}
  }, {
    key: 'remove',

    // Removes an object from the heap, item being refering to the nested object
    value: function remove(object) {}
  }, {
    key: 'buildHeap',

    // Build the heap from an object list and structure it
    value: function buildHeap(list) {}
  }, {
    key: 'empty',

    // Clear the list by replacing it with the appropriate swap object
    value: function empty() {}
  }, {
    key: 'insert',

    /**
     * Insert a value with an associated object in the heap tree. The perc up
     * method implementation should handle what to do with the heapValue (eg min
     * or max sorting).
     *
     * @params value being the heapValue used for sorting and any object
     */
    value: function insert(value) {
      var object = arguments[1] === undefined ? {} : arguments[1];

      this.heapList.push({
        object: object,
        heapValue: value
      });
      this.currentSize++;
      this.__percUp(this.currentSize);
    }
  }, {
    key: 'deleteHead',

    /**
     * Method used to get the head of the heap list. Puts it at the end of
     * the list and takes it out with pop. Assures that the tree is restored.
     */
    value: function deleteHead() {
      var referenceValue = this.heapList[1]; // pos 0 being used for percolating
      this.heapList[1] = this.heapList[this.currentSize]; // first item is last
      this.currentSize--;
      this.heapList.pop();
      this.__percDown(1); // from first item, restore tree
      return referenceValue;
    }
  }, {
    key: 'headObject',

    /**
     * Returns object reference of head without removing it.
     */
    value: function headObject() {
      return this.heapList[1].object;
    }
  }, {
    key: 'headValue',

    /**
     * Returns value reference of head without removing it.
     */
    value: function headValue() {
      return this.heapList[1].heapValue;
    }
  }, {
    key: 'list',

    /**
     * List accessor
     */
    value: function list() {
      return this.heapList;
    }
  }, {
    key: 'size',

    /**
     * Current size accessor
     */
    get: function () {
      return this.currentSize;
    }
  }, {
    key: 'contains',

    /**
     * If the heap contains the object, it will return its index, otherwise it
     * returns -1.
     */
    value: function contains(object) {
      for (var i = 0; i <= this.currentSize; i++) {
        if (object === this.heapList[i].object) {
          return i;
        }
      }
      return -1;
    }
  }, {
    key: 'isEmpty',

    /**
     * Returns whether or not the heap is empty.
     */
    value: function isEmpty() {
      return this.currentSize === 0;
    }
  }]);

  return Heap;
})();

module.exports = Heap;

},{}],2:[function(require,module,exports){
'use strict';

var heap = {
  Min: require('./min-heap.es6.js'),
  Max: require('./max-heap.es6.js')
};

module.exports = heap;

},{"./max-heap.es6.js":3,"./min-heap.es6.js":4}],3:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var Heap = require('./heap.es6.js');
/**
 * ES6 Implementation of a maximum binary heap based on :
 * http://interactivepython.org/courselib/static/pythonds/Trees/heap.html
 *
 * The head (or position 1 in the array) should be the object with maximal heap
 * value.
 *
 * @author: Renaud Vincent https://github.com/renaudfv
 **/

var MaxHeap = (function (_Heap) {
  function MaxHeap() {
    _classCallCheck(this, MaxHeap);

    _get(Object.getPrototypeOf(MaxHeap.prototype), 'constructor', this).call(this);
    // Empty object with maximal value used for swaping on the first insertions
    this.heapList = [{
      object: {},
      heapValue: Infinity
    }];
  }

  _inherits(MaxHeap, _Heap);

  _createClass(MaxHeap, [{
    key: '__maxChildPosition',

    /**
     * Static method used to get the index of the minimal child at i. Used in
     * percDown to compare a parent to its child.
     *
     * @params i, the index of the parent to observe
     */
    value: function __maxChildPosition(i) {
      if (i * 2 + 1 > this.currentSize || this.heapList[i * 2].heapValue > this.heapList[i * 2 + 1].heapValue) {
        return i * 2; // Left child
      } else {
        return i * 2 + 1; // Right child
      }
    }
  }, {
    key: '__percUp',

    /**
     * Method used to maintain the max heap property from a certain index. It is
     * used locally from the end of the heap list upon insertion, update and
     * removal. It percolates max values up the binary tree.
     */
    value: function __percUp(i) {
      var ceiledIndex, tmp;

      while (Math.floor(i / 2) > 0) {
        ceiledIndex = Math.floor(i / 2);
        // Is the item at i greater than the one at ceiled index
        if (this.heapList[i].heapValue > this.heapList[ceiledIndex].heapValue) {
          tmp = this.heapList[ceiledIndex];
          this.heapList[ceiledIndex] = this.heapList[i];
          this.heapList[i] = tmp;
        }

        i = ceiledIndex;
      }
    }
  }, {
    key: '__percDown',

    /**
     * Method used to maintain the min heap property from a certain index. It is
     * used locally from the start of the heap list upon deletion. Items are
     * swaped down the tree if they have a smaller reference value.
     */
    value: function __percDown(i) {
      var refPos, tmp;

      while (i * 2 <= this.currentSize) {
        refPos = this.__maxChildPosition(i);
        console.log(refPos);
        // Is the item at i smaller than the reference down the tree
        if (this.heapList[i].heapValue < this.heapList[refPos].heapValue) {
          tmp = this.heapList[i];
          this.heapList[i] = this.heapList[refPos];
          this.heapList[refPos] = tmp;
        }

        i = refPos;
      }
    }
  }, {
    key: 'update',

    /**
     * Find the object reference in the heap list and update its heapValue.
     * If the updated value is smaller than the original value, the item should
     * be percolated down the tree, otherwise up the tree.
     */
    value: function update(object, value) {
      var index = this.contains(object);

      if (index !== -1) {
        var ref = this.heapList[index].heapValue;
        this.heapList[index].heapValue = value;

        if (value < ref) this.__percDown(index);else this.__percUp(index);
      }
    }
  }, {
    key: 'remove',

    /**
     * Finds the item object reference in the heap list brings it up the tree by
     * having an infinity value. The tree is the sorted and the head is removed.
     */
    value: function remove(object) {
      var index = this.contains(object);

      if (index !== -1) {
        this.heapList[index].heapValue = Infinity;
        this.__percUp(index);
        this.deleteHead();
      }

      if (!this.isEmpty()) {
        return this.headValue();
      }return Infinity;
    }
  }, {
    key: 'buildHeap',

    /**
     * Build heap from an object list and structure it with a maximal swap
     * reference
     */
    value: function buildHeap(list) {
      this.currentSize = list.length;
      this.heapList = [{
        object: {},
        heapValue: Infinity
      }].concat(list);

      var i = list.length;
      while (i > 0) {
        this.__percDown(i);
        i--;
      }
    }
  }, {
    key: 'empty',

    /**
     * Clear the list with a maximal heapValue swap reference
     */
    value: function empty() {
      this.heapList = [{
        object: {},
        heapValue: Infinity
      }];
      this.currentSize = 0;
    }
  }]);

  return MaxHeap;
})(Heap);

module.exports = MaxHeap;

},{"./heap.es6.js":1}],4:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var Heap = require('./heap.es6.js');
/**
 * ES6 Implementation of a minimum binary heap based on :
 * http://interactivepython.org/courselib/static/pythonds/Trees/heap.html
 *
 * The head (or position 1 in the array) should be the object with minimal heap
 * value.
 *
 * @author: Renaud Vincent https://github.com/renaudfv
 **/

var MinHeap = (function (_Heap) {
  function MinHeap() {
    _classCallCheck(this, MinHeap);

    _get(Object.getPrototypeOf(MinHeap.prototype), 'constructor', this).call(this);
    // Empty object with minimal value used for swaping on the first insertions
    this.heapList = [{
      object: {},
      heapValue: 0
    }];
  }

  _inherits(MinHeap, _Heap);

  _createClass(MinHeap, [{
    key: '__minChildPosition',

    /**
     * Static method used to get the index of the minimal child at i. Used in
     * percDown to compare a parent to its child.
     *
     * @params i, the index of the parent to observe
     */
    value: function __minChildPosition(i) {
      if (i * 2 + 1 > this.currentSize || this.heapList[i * 2].heapValue < this.heapList[i * 2 + 1].heapValue) {
        return i * 2; // Left child
      } else {
        return i * 2 + 1; // Right child
      }
    }
  }, {
    key: '__percUp',

    /**
     * Percolates the item at i index up the tree if it is smaller
     */
    value: function __percUp(i) {
      var parentIndex, tmp;

      while (Math.floor(i / 2) > 0) {
        parentIndex = Math.floor(i / 2);
        // Is the item at i smaller than the one at ceiled index
        if (this.heapList[i].heapValue < this.heapList[parentIndex].heapValue) {
          tmp = this.heapList[parentIndex];
          this.heapList[parentIndex] = this.heapList[i];
          this.heapList[i] = tmp;
        }

        i = parentIndex;
      }
    }
  }, {
    key: '__percDown',

    /**
     * Percolates the item at i index down the tree if smaller than its child
     */
    value: function __percDown(i) {
      var childIndex, tmp;

      while (i * 2 <= this.currentSize) {
        childIndex = this.__minChildPosition(i);
        // Is the item at i greater than the reference down the tree
        if (this.heapList[i].heapValue > this.heapList[childIndex].heapValue) {
          tmp = this.heapList[i];
          this.heapList[i] = this.heapList[childIndex];
          this.heapList[childIndex] = tmp;
        }

        i = childIndex;
      }
    }
  }, {
    key: 'update',

    /**
     * Find the object reference in the heap list and update its heapValue.
     * If the updated value is greater than the original value, the item should
     * be percolated down the tree, otherwise up the tree.
     */
    value: function update(object, value) {
      var index = this.contains(object);

      if (index !== -1) {
        var ref = this.heapList[index].heapValue;
        this.heapList[index].heapValue = value;

        if (value > ref) this.__percDown(index);else this.__percUp(index);
      }
    }
  }, {
    key: 'remove',

    /**
     * Finds the item object reference in the heap list brings it up the tree by
     * having a 0 value. The tree is the sorted and the head is removed.
     */
    value: function remove(object) {
      var index = this.contains(object);

      if (index !== -1) {
        this.heapList[index].heapValue = 0;
        this.__percUp(index);
        this.deleteHead();
      }

      if (!this.isEmpty()) {
        return this.headValue();
      }return Infinity;
    }
  }, {
    key: 'buildHeap',

    /**
     * Build heap from an object list and structure it with a minimal swap
     * reference
     */
    value: function buildHeap(list) {

      this.currentSize = list.length;
      this.heapList = [{
        object: {},
        heapValue: 0
      }].concat(list);

      var i = list.length;
      while (i > 0) {
        this.__percDown(i);
        i--;
      }
    }
  }, {
    key: 'empty',

    /**
     * Clear the list with a minimal heapValue swap reference
     */
    value: function empty() {
      this.heapList = [{
        object: {},
        heapValue: 0
      }];
      this.currentSize = 0;
    }
  }]);

  return MinHeap;
})(Heap);

module.exports = MinHeap;

},{"./heap.es6.js":1}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcmVuYXVkdmluY2VudC9oZWFwanMvc3JjL2hlYXAuZXM2LmpzIiwiL1VzZXJzL3JlbmF1ZHZpbmNlbnQvaGVhcGpzL3NyYy9pbmRleC5lczYuanMiLCIvVXNlcnMvcmVuYXVkdmluY2VudC9oZWFwanMvc3JjL21heC1oZWFwLmVzNi5qcyIsIi9Vc2Vycy9yZW5hdWR2aW5jZW50L2hlYXBqcy9zcmMvbWluLWhlYXAuZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztJQ1NNLElBQUk7QUFFRyxXQUZQLElBQUksR0FFTTswQkFGVixJQUFJOztBQUdOLFFBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLFFBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0dBQ3BCOztlQUxHLElBQUk7Ozs7V0FRQSxrQkFBQyxDQUFDLEVBQUUsRUFBRTs7Ozs7V0FHSixvQkFBQyxDQUFDLEVBQUUsRUFBRTs7Ozs7V0FHVixnQkFBQyxNQUFNLEVBQUUsRUFBRTs7Ozs7V0FHWCxnQkFBQyxNQUFNLEVBQUUsRUFBRTs7Ozs7V0FHUixtQkFBQyxJQUFJLEVBQUUsRUFBRTs7Ozs7V0FHYixpQkFBRyxFQUFFOzs7Ozs7Ozs7OztXQVNKLGdCQUFDLEtBQUssRUFBZTtVQUFiLE1BQU0sZ0NBQUcsRUFBRTs7QUFDdkIsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDakIsZ0JBQVUsTUFBTTtBQUNoQixtQkFBYSxLQUFLO09BQ25CLENBQUMsQ0FBQztBQUNILFVBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuQixVQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNqQzs7Ozs7Ozs7V0FNUyxzQkFBRztBQUNYLFVBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsVUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuRCxVQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbkIsVUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNwQixVQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLGFBQU8sY0FBYyxDQUFDO0tBQ3ZCOzs7Ozs7O1dBS1Msc0JBQUc7QUFDWCxhQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQ2hDOzs7Ozs7O1dBS1EscUJBQUc7QUFDVixhQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0tBQ25DOzs7Ozs7O1dBS0csZ0JBQUc7QUFDTCxhQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7Ozs7U0FLTyxZQUFHO0FBQ1QsYUFBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7Ozs7OztXQU1PLGtCQUFDLE1BQU0sRUFBRTtBQUNmLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzFDLFlBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3RDLGlCQUFPLENBQUMsQ0FBQztTQUNWO09BQ0Y7QUFDRCxhQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ1g7Ozs7Ozs7V0FLTSxtQkFBRztBQUNSLGFBQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUM7S0FDL0I7OztTQXBHRyxJQUFJOzs7QUF3R1YsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7O0FDakh0QixJQUFJLElBQUksR0FBRztBQUNULEtBQUcsRUFBRSxPQUFPLENBQUMsbUJBQW1CLENBQUM7QUFDakMsS0FBRyxFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztDQUNsQyxDQUFBOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDTHRCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7SUFVOUIsT0FBTztBQUVBLFdBRlAsT0FBTyxHQUVHOzBCQUZWLE9BQU87O0FBR1QsK0JBSEUsT0FBTyw2Q0FHRDs7QUFFUixRQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7QUFDZixjQUFVLEVBQUU7QUFDWixpQkFBYSxRQUFRO0tBQ3RCLENBQUMsQ0FBQztHQUNKOztZQVRHLE9BQU87O2VBQVAsT0FBTzs7Ozs7Ozs7O1dBaUJPLDRCQUFDLENBQUMsRUFBRTtBQUNwQixVQUFJLEFBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEFBQUMsRUFBRTtBQUN4RSxlQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7T0FDZCxNQUFNO0FBQ0wsZUFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUNsQjtLQUNGOzs7Ozs7Ozs7V0FPTyxrQkFBQyxDQUFDLEVBQUU7QUFDVixVQUFJLFdBQVcsRUFBRSxHQUFHLENBQUM7O0FBRXJCLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzVCLG1CQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRWhDLFlBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDdEUsYUFBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakMsY0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlDLGNBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3hCOztBQUVELFNBQUMsR0FBRyxXQUFXLENBQUM7T0FDakI7S0FDRjs7Ozs7Ozs7O1dBT1Msb0JBQUMsQ0FBQyxFQUFFO0FBQ1osVUFBSSxNQUFNLEVBQUUsR0FBRyxDQUFDOztBQUVoQixhQUFPLEFBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2xDLGNBQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsZUFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFcEIsWUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoRSxhQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixjQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsY0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDN0I7O0FBRUQsU0FBQyxHQUFHLE1BQU0sQ0FBQztPQUNaO0tBQ0Y7Ozs7Ozs7OztXQU9LLGdCQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDcEIsVUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFbEMsVUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDaEIsWUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDekMsWUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOztBQUV2QyxZQUFJLEtBQUssR0FBRyxHQUFHLEVBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3hCO0tBQ0Y7Ozs7Ozs7O1dBTUssZ0JBQUMsTUFBTSxFQUFFO0FBQ2IsVUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFbEMsVUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDaEIsWUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQzFDLFlBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckIsWUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO09BQ25COztBQUVELFVBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2pCLGVBQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO09BQUEsQUFFMUIsT0FBTyxRQUFRLENBQUM7S0FDakI7Ozs7Ozs7O1dBTVEsbUJBQUMsSUFBSSxFQUFFO0FBQ2QsVUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQy9CLFVBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUNmLGdCQUFVLEVBQUU7QUFDWixtQkFBYSxRQUFRO09BQ3RCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWhCLFVBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDcEIsYUFBTyxDQUFDLEdBQUssQ0FBQyxFQUFFO0FBQ2QsWUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixTQUFDLEVBQUUsQ0FBQztPQUNMO0tBQ0Y7Ozs7Ozs7V0FLSSxpQkFBRztBQUNOLFVBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUNmLGdCQUFVLEVBQUU7QUFDWixtQkFBYSxRQUFRO09BQ3RCLENBQUMsQ0FBQztBQUNILFVBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCOzs7U0F0SUcsT0FBTztHQUFTLElBQUk7O0FBMEkxQixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BKekIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztJQVU5QixPQUFPO0FBRUEsV0FGUCxPQUFPLEdBRUc7MEJBRlYsT0FBTzs7QUFHVCwrQkFIRSxPQUFPLDZDQUdEOztBQUVSLFFBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUNmLGNBQVUsRUFBRTtBQUNaLGlCQUFhLENBQUM7S0FDZixDQUFDLENBQUM7R0FDSjs7WUFURyxPQUFPOztlQUFQLE9BQU87Ozs7Ozs7OztXQWlCTyw0QkFBQyxDQUFDLEVBQUU7QUFDcEIsVUFBSSxBQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxBQUFDLEVBQUU7QUFDeEUsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQ2QsTUFBTTtBQUNMLGVBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7T0FDbEI7S0FDRjs7Ozs7OztXQUtPLGtCQUFDLENBQUMsRUFBRTtBQUNWLFVBQUksV0FBVyxFQUFFLEdBQUcsQ0FBQzs7QUFFckIsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDNUIsbUJBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFaEMsWUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUN0RSxhQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNqQyxjQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUMsY0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDeEI7O0FBRUQsU0FBQyxHQUFHLFdBQVcsQ0FBQztPQUNqQjtLQUNGOzs7Ozs7O1dBS1Msb0JBQUMsQ0FBQyxFQUFFO0FBQ1osVUFBSSxVQUFVLEVBQUUsR0FBRyxDQUFDOztBQUVwQixhQUFPLEFBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2xDLGtCQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUV4QyxZQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFO0FBQ3BFLGFBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3QyxjQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUNqQzs7QUFFRCxTQUFDLEdBQUcsVUFBVSxDQUFDO09BQ2hCO0tBQ0Y7Ozs7Ozs7OztXQU9LLGdCQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDcEIsVUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFbEMsVUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDaEIsWUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDekMsWUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOztBQUV2QyxZQUFJLEtBQUssR0FBRyxHQUFHLEVBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3hCO0tBQ0Y7Ozs7Ozs7O1dBTUssZ0JBQUMsTUFBTSxFQUFFO0FBQ2IsVUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFbEMsVUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDaEIsWUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLFlBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckIsWUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO09BQ25COztBQUVELFVBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2pCLGVBQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO09BQUEsQUFFMUIsT0FBTyxRQUFRLENBQUM7S0FDakI7Ozs7Ozs7O1dBTVEsbUJBQUMsSUFBSSxFQUFFOztBQUVkLFVBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMvQixVQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7QUFDZixnQkFBVSxFQUFFO0FBQ1osbUJBQWEsQ0FBQztPQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWhCLFVBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDcEIsYUFBTyxDQUFDLEdBQUssQ0FBQyxFQUFFO0FBQ2QsWUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixTQUFDLEVBQUUsQ0FBQztPQUNMO0tBQ0Y7Ozs7Ozs7V0FLSSxpQkFBRztBQUNOLFVBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUNmLGdCQUFVLEVBQUU7QUFDWixtQkFBYSxDQUFDO09BQ2YsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7S0FDdEI7OztTQWxJRyxPQUFPO0dBQVMsSUFBSTs7QUFzSTFCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogRVM2IEltcGxlbWVudGF0aW9uIG9mIGEgYmluYXJ5IGhlYXAgYmFzZWQgb24gOlxuICogaHR0cDovL2ludGVyYWN0aXZlcHl0aG9uLm9yZy9jb3Vyc2VsaWIvc3RhdGljL3B5dGhvbmRzL1RyZWVzL2hlYXAuaHRtbFxuICpcbiAqIFRoZSBIZWFwIGNsYXNzIGlzIGFuIGFic3RyYWN0aW9uIG9mIHRoZSBiaW5hcnkgaGVhcC4gSXQgaXMgaW1wbGVtZW50ZWQgdG9cbiAqIGdpdmUgbWV0aG9kcyByZWxhdGVkIHRvIGJvdGggbWluIGFuZCBtYXggaGVhcHMuXG4gKlxuICogQGF1dGhvcjogUmVuYXVkIFZpbmNlbnQgaHR0cHM6Ly9naXRodWIuY29tL3JlbmF1ZGZ2XG4gKiovXG5jbGFzcyBIZWFwIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTaXplID0gMDtcbiAgICB0aGlzLmhlYXBMaXN0ID0gW107XG4gIH1cblxuICAvLyBBYnN0cmFjdCBtZXRob2Qgd2hpY2ggYnJpbmdzIGVsZW1lbnRzIHVwIHRoZSB0cmVlIGZyb20gdGhlIGkgaW5kZXguXG4gIF9fcGVyY1VwKGkpIHt9XG5cbiAgLy8gQWJzdHJhY3QgbWV0aG9kIHdoaWNoIGJyaW5ncyBlbGVtZW50cyBkb3duIHRoZSB0cmVlIGZyb20gdGhlIGkgaW5kZXguXG4gIF9fcGVyY0Rvd24oaSkge31cblxuICAvLyBVcGRhdGVzIFxuICB1cGRhdGUob2JqZWN0KSB7fVxuXG4gIC8vIFJlbW92ZXMgYW4gb2JqZWN0IGZyb20gdGhlIGhlYXAsIGl0ZW0gYmVpbmcgcmVmZXJpbmcgdG8gdGhlIG5lc3RlZCBvYmplY3RcbiAgcmVtb3ZlKG9iamVjdCkge31cblxuICAvLyBCdWlsZCB0aGUgaGVhcCBmcm9tIGFuIG9iamVjdCBsaXN0IGFuZCBzdHJ1Y3R1cmUgaXRcbiAgYnVpbGRIZWFwKGxpc3QpIHt9XG5cbiAgLy8gQ2xlYXIgdGhlIGxpc3QgYnkgcmVwbGFjaW5nIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIHN3YXAgb2JqZWN0XG4gIGVtcHR5KCkge31cblxuICAvKipcbiAgICogSW5zZXJ0IGEgdmFsdWUgd2l0aCBhbiBhc3NvY2lhdGVkIG9iamVjdCBpbiB0aGUgaGVhcCB0cmVlLiBUaGUgcGVyYyB1cFxuICAgKiBtZXRob2QgaW1wbGVtZW50YXRpb24gc2hvdWxkIGhhbmRsZSB3aGF0IHRvIGRvIHdpdGggdGhlIGhlYXBWYWx1ZSAoZWcgbWluXG4gICAqIG9yIG1heCBzb3J0aW5nKS5cbiAgICpcbiAgICogQHBhcmFtcyB2YWx1ZSBiZWluZyB0aGUgaGVhcFZhbHVlIHVzZWQgZm9yIHNvcnRpbmcgYW5kIGFueSBvYmplY3RcbiAgICovXG4gIGluc2VydCh2YWx1ZSwgb2JqZWN0ID0ge30pIHtcbiAgICB0aGlzLmhlYXBMaXN0LnB1c2goe1xuICAgICAgJ29iamVjdCc6IG9iamVjdCxcbiAgICAgICdoZWFwVmFsdWUnOiB2YWx1ZVxuICAgIH0pO1xuICAgIHRoaXMuY3VycmVudFNpemUrKztcbiAgICB0aGlzLl9fcGVyY1VwKHRoaXMuY3VycmVudFNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB1c2VkIHRvIGdldCB0aGUgaGVhZCBvZiB0aGUgaGVhcCBsaXN0LiBQdXRzIGl0IGF0IHRoZSBlbmQgb2ZcbiAgICogdGhlIGxpc3QgYW5kIHRha2VzIGl0IG91dCB3aXRoIHBvcC4gQXNzdXJlcyB0aGF0IHRoZSB0cmVlIGlzIHJlc3RvcmVkLlxuICAgKi9cbiAgZGVsZXRlSGVhZCgpIHtcbiAgICB2YXIgcmVmZXJlbmNlVmFsdWUgPSB0aGlzLmhlYXBMaXN0WzFdOyAvLyBwb3MgMCBiZWluZyB1c2VkIGZvciBwZXJjb2xhdGluZ1xuICAgIHRoaXMuaGVhcExpc3RbMV0gPSB0aGlzLmhlYXBMaXN0W3RoaXMuY3VycmVudFNpemVdOyAvLyBmaXJzdCBpdGVtIGlzIGxhc3RcbiAgICB0aGlzLmN1cnJlbnRTaXplLS07XG4gICAgdGhpcy5oZWFwTGlzdC5wb3AoKTtcbiAgICB0aGlzLl9fcGVyY0Rvd24oMSk7IC8vIGZyb20gZmlyc3QgaXRlbSwgcmVzdG9yZSB0cmVlXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JqZWN0IHJlZmVyZW5jZSBvZiBoZWFkIHdpdGhvdXQgcmVtb3ZpbmcgaXQuXG4gICAqL1xuICBoZWFkT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmhlYXBMaXN0WzFdLm9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHZhbHVlIHJlZmVyZW5jZSBvZiBoZWFkIHdpdGhvdXQgcmVtb3ZpbmcgaXQuXG4gICAqL1xuICBoZWFkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhcExpc3RbMV0uaGVhcFZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3QgYWNjZXNzb3JcbiAgICovXG4gIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhcExpc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ3VycmVudCBzaXplIGFjY2Vzc29yXG4gICAqL1xuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgaGVhcCBjb250YWlucyB0aGUgb2JqZWN0LCBpdCB3aWxsIHJldHVybiBpdHMgaW5kZXgsIG90aGVyd2lzZSBpdFxuICAgKiByZXR1cm5zIC0xLlxuICAgKi9cbiAgY29udGFpbnMob2JqZWN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy5jdXJyZW50U2l6ZTsgaSsrKSB7XG4gICAgICBpZiAob2JqZWN0ID09PSB0aGlzLmhlYXBMaXN0W2ldLm9iamVjdCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGhlYXAgaXMgZW1wdHkuXG4gICAqL1xuICBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTaXplID09PSAwO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIZWFwOyIsInZhciBoZWFwID0ge1xuICBNaW46IHJlcXVpcmUoJy4vbWluLWhlYXAuZXM2LmpzJyksXG4gIE1heDogcmVxdWlyZSgnLi9tYXgtaGVhcC5lczYuanMnKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlYXA7IiwidmFyIEhlYXAgPSByZXF1aXJlKCcuL2hlYXAuZXM2LmpzJyk7XG4vKipcbiAqIEVTNiBJbXBsZW1lbnRhdGlvbiBvZiBhIG1heGltdW0gYmluYXJ5IGhlYXAgYmFzZWQgb24gOlxuICogaHR0cDovL2ludGVyYWN0aXZlcHl0aG9uLm9yZy9jb3Vyc2VsaWIvc3RhdGljL3B5dGhvbmRzL1RyZWVzL2hlYXAuaHRtbFxuICpcbiAqIFRoZSBoZWFkIChvciBwb3NpdGlvbiAxIGluIHRoZSBhcnJheSkgc2hvdWxkIGJlIHRoZSBvYmplY3Qgd2l0aCBtYXhpbWFsIGhlYXBcbiAqIHZhbHVlLlxuICpcbiAqIEBhdXRob3I6IFJlbmF1ZCBWaW5jZW50IGh0dHBzOi8vZ2l0aHViLmNvbS9yZW5hdWRmdlxuICoqL1xuY2xhc3MgTWF4SGVhcCBleHRlbmRzIEhlYXAge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gRW1wdHkgb2JqZWN0IHdpdGggbWF4aW1hbCB2YWx1ZSB1c2VkIGZvciBzd2FwaW5nIG9uIHRoZSBmaXJzdCBpbnNlcnRpb25zXG4gICAgdGhpcy5oZWFwTGlzdCA9IFt7XG4gICAgICAnb2JqZWN0Jzoge30sXG4gICAgICAnaGVhcFZhbHVlJzogSW5maW5pdHlcbiAgICB9XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgbWV0aG9kIHVzZWQgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbWluaW1hbCBjaGlsZCBhdCBpLiBVc2VkIGluXG4gICAqIHBlcmNEb3duIHRvIGNvbXBhcmUgYSBwYXJlbnQgdG8gaXRzIGNoaWxkLlxuICAgKlxuICAgKiBAcGFyYW1zIGksIHRoZSBpbmRleCBvZiB0aGUgcGFyZW50IHRvIG9ic2VydmVcbiAgICovXG4gIF9fbWF4Q2hpbGRQb3NpdGlvbihpKSB7XG4gICAgaWYgKChpICogMiArIDEgPiB0aGlzLmN1cnJlbnRTaXplKSB8fFxuICAgICAgKHRoaXMuaGVhcExpc3RbaSAqIDJdLmhlYXBWYWx1ZSA+IMKgdGhpcy5oZWFwTGlzdFtpICogMiArIDFdLmhlYXBWYWx1ZSkpIHtcbiAgICAgIHJldHVybiBpICogMjsgLy8gTGVmdCBjaGlsZFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaSAqIDIgKyAxOyAvLyBSaWdodCBjaGlsZFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdXNlZCB0byBtYWludGFpbiB0aGUgbWF4IGhlYXAgcHJvcGVydHkgZnJvbSBhIGNlcnRhaW4gaW5kZXguIEl0IGlzXG4gICAqIHVzZWQgbG9jYWxseSBmcm9tIHRoZSBlbmQgb2YgdGhlIGhlYXAgbGlzdCB1cG9uIGluc2VydGlvbiwgdXBkYXRlIGFuZFxuICAgKiByZW1vdmFsLiBJdCBwZXJjb2xhdGVzIG1heCB2YWx1ZXMgdXAgdGhlIGJpbmFyeSB0cmVlLlxuICAgKi9cbiAgX19wZXJjVXAoaSkge1xuICAgIHZhciBjZWlsZWRJbmRleCwgdG1wO1xuXG4gICAgd2hpbGUgKE1hdGguZmxvb3IoaSAvIDIpID4gMCkge1xuICAgICAgY2VpbGVkSW5kZXggPSBNYXRoLmZsb29yKGkgLyAyKTtcbiAgICAgIC8vIElzIHRoZSBpdGVtIGF0IGkgZ3JlYXRlciB0aGFuIHRoZSBvbmUgYXQgY2VpbGVkIGluZGV4XG4gICAgICBpZiAodGhpcy5oZWFwTGlzdFtpXS5oZWFwVmFsdWUgPiDCoHRoaXMuaGVhcExpc3RbY2VpbGVkSW5kZXhdLmhlYXBWYWx1ZSkge1xuICAgICAgICB0bXAgPSB0aGlzLmhlYXBMaXN0W2NlaWxlZEluZGV4XTtcbiAgICAgICAgdGhpcy5oZWFwTGlzdFtjZWlsZWRJbmRleF0gPSB0aGlzLmhlYXBMaXN0W2ldO1xuICAgICAgICB0aGlzLmhlYXBMaXN0W2ldID0gdG1wO1xuICAgICAgfVxuXG4gICAgICBpID0gY2VpbGVkSW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB1c2VkIHRvIG1haW50YWluIHRoZSBtaW4gaGVhcCBwcm9wZXJ0eSBmcm9tIGEgY2VydGFpbiBpbmRleC4gSXQgaXNcbiAgICogdXNlZCBsb2NhbGx5IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBoZWFwIGxpc3QgdXBvbiBkZWxldGlvbi4gSXRlbXMgYXJlXG4gICAqIHN3YXBlZCBkb3duIHRoZSB0cmVlIGlmIHRoZXkgaGF2ZSBhIHNtYWxsZXIgcmVmZXJlbmNlIHZhbHVlLlxuICAgKi9cbiAgX19wZXJjRG93bihpKSB7XG4gICAgdmFyIHJlZlBvcywgdG1wO1xuXG4gICAgd2hpbGUgKChpICogMikgPD0gdGhpcy5jdXJyZW50U2l6ZSkge1xuICAgICAgcmVmUG9zID0gdGhpcy5fX21heENoaWxkUG9zaXRpb24oaSk7XG4gICAgICBjb25zb2xlLmxvZyhyZWZQb3MpO1xuICAgICAgLy8gSXMgdGhlIGl0ZW0gYXQgaSBzbWFsbGVyIHRoYW4gdGhlIHJlZmVyZW5jZSBkb3duIHRoZSB0cmVlXG4gICAgICBpZiAodGhpcy5oZWFwTGlzdFtpXS5oZWFwVmFsdWUgPCB0aGlzLmhlYXBMaXN0W3JlZlBvc10uaGVhcFZhbHVlKSB7XG4gICAgICAgIHRtcCA9IHRoaXMuaGVhcExpc3RbaV07XG4gICAgICAgIHRoaXMuaGVhcExpc3RbaV0gPSB0aGlzLmhlYXBMaXN0W3JlZlBvc107XG4gICAgICAgIHRoaXMuaGVhcExpc3RbcmVmUG9zXSA9IHRtcDtcbiAgICAgIH1cblxuICAgICAgaSA9IHJlZlBvcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgb2JqZWN0IHJlZmVyZW5jZSBpbiB0aGUgaGVhcCBsaXN0IGFuZCB1cGRhdGUgaXRzIGhlYXBWYWx1ZS5cbiAgICogSWYgdGhlIHVwZGF0ZWQgdmFsdWUgaXMgc21hbGxlciB0aGFuIHRoZSBvcmlnaW5hbCB2YWx1ZSwgdGhlIGl0ZW0gc2hvdWxkXG4gICAqIGJlIHBlcmNvbGF0ZWQgZG93biB0aGUgdHJlZSwgb3RoZXJ3aXNlIHVwIHRoZSB0cmVlLlxuICAgKi9cbiAgdXBkYXRlKG9iamVjdCwgdmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmNvbnRhaW5zKG9iamVjdCk7XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB2YXIgcmVmID0gdGhpcy5oZWFwTGlzdFtpbmRleF0uaGVhcFZhbHVlO1xuICAgICAgdGhpcy5oZWFwTGlzdFtpbmRleF0uaGVhcFZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGlmICh2YWx1ZSA8IHJlZilcbiAgICAgICAgdGhpcy5fX3BlcmNEb3duKGluZGV4KTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5fX3BlcmNVcChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBpdGVtIG9iamVjdCByZWZlcmVuY2UgaW4gdGhlIGhlYXAgbGlzdCBicmluZ3MgaXQgdXAgdGhlIHRyZWUgYnlcbiAgICogaGF2aW5nIGFuIGluZmluaXR5IHZhbHVlLiBUaGUgdHJlZSBpcyB0aGUgc29ydGVkIGFuZCB0aGUgaGVhZCBpcyByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlKG9iamVjdCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuY29udGFpbnMob2JqZWN0KTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuaGVhcExpc3RbaW5kZXhdLmhlYXBWYWx1ZSA9IEluZmluaXR5O1xuICAgICAgdGhpcy5fX3BlcmNVcChpbmRleCk7XG4gICAgICB0aGlzLmRlbGV0ZUhlYWQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKVxuICAgICAgcmV0dXJuIHRoaXMuaGVhZFZhbHVlKCk7XG5cbiAgICByZXR1cm4gSW5maW5pdHk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgaGVhcCBmcm9tIGFuIG9iamVjdCBsaXN0IGFuZCBzdHJ1Y3R1cmUgaXQgd2l0aCBhIG1heGltYWwgc3dhcFxuICAgKiByZWZlcmVuY2VcbiAgICovXG4gIGJ1aWxkSGVhcChsaXN0KSB7XG4gICAgdGhpcy5jdXJyZW50U2l6ZSA9IGxpc3QubGVuZ3RoO1xuICAgIHRoaXMuaGVhcExpc3QgPSBbe1xuICAgICAgJ29iamVjdCc6IHt9LFxuICAgICAgJ2hlYXBWYWx1ZSc6IEluZmluaXR5XG4gICAgfV0uY29uY2F0KGxpc3QpO1xuXG4gICAgdmFyIGkgPSBsaXN0Lmxlbmd0aDtcbiAgICB3aGlsZSAoacKgID4gwqAwKSB7XG4gICAgICB0aGlzLl9fcGVyY0Rvd24oaSk7XG4gICAgICBpLS07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaXN0IHdpdGggYSBtYXhpbWFsIGhlYXBWYWx1ZSBzd2FwIHJlZmVyZW5jZVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgdGhpcy5oZWFwTGlzdCA9IFt7XG4gICAgICAnb2JqZWN0Jzoge30sXG4gICAgICAnaGVhcFZhbHVlJzogSW5maW5pdHlcbiAgICB9XTtcbiAgICB0aGlzLmN1cnJlbnRTaXplID0gMDtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWF4SGVhcDsiLCJ2YXIgSGVhcCA9IHJlcXVpcmUoJy4vaGVhcC5lczYuanMnKTtcbi8qKlxuICogRVM2IEltcGxlbWVudGF0aW9uIG9mIGEgbWluaW11bSBiaW5hcnkgaGVhcCBiYXNlZCBvbiA6XG4gKiBodHRwOi8vaW50ZXJhY3RpdmVweXRob24ub3JnL2NvdXJzZWxpYi9zdGF0aWMvcHl0aG9uZHMvVHJlZXMvaGVhcC5odG1sXG4gKlxuICogVGhlIGhlYWQgKG9yIHBvc2l0aW9uIDEgaW4gdGhlIGFycmF5KSBzaG91bGQgYmUgdGhlIG9iamVjdCB3aXRoIG1pbmltYWwgaGVhcFxuICogdmFsdWUuXG4gKlxuICogQGF1dGhvcjogUmVuYXVkIFZpbmNlbnQgaHR0cHM6Ly9naXRodWIuY29tL3JlbmF1ZGZ2XG4gKiovXG5jbGFzcyBNaW5IZWFwIGV4dGVuZHMgSGVhcCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyBFbXB0eSBvYmplY3Qgd2l0aCBtaW5pbWFsIHZhbHVlIHVzZWQgZm9yIHN3YXBpbmcgb24gdGhlIGZpcnN0IGluc2VydGlvbnNcbiAgICB0aGlzLmhlYXBMaXN0ID0gW3tcbiAgICAgICdvYmplY3QnOiB7fSxcbiAgICAgICdoZWFwVmFsdWUnOiAwXG4gICAgfV07XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIG1ldGhvZCB1c2VkIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIG1pbmltYWwgY2hpbGQgYXQgaS4gVXNlZCBpblxuICAgKiBwZXJjRG93biB0byBjb21wYXJlIGEgcGFyZW50IHRvIGl0cyBjaGlsZC5cbiAgICpcbiAgICogQHBhcmFtcyBpLCB0aGUgaW5kZXggb2YgdGhlIHBhcmVudCB0byBvYnNlcnZlXG4gICAqL1xuICBfX21pbkNoaWxkUG9zaXRpb24oaSkge1xuICAgIGlmICgoaSAqIDIgKyAxID4gdGhpcy5jdXJyZW50U2l6ZSkgfHxcbiAgICAgICh0aGlzLmhlYXBMaXN0W2kgKiAyXS5oZWFwVmFsdWUgPCDCoHRoaXMuaGVhcExpc3RbaSAqIDIgKyAxXS5oZWFwVmFsdWUpKSB7XG4gICAgICByZXR1cm4gaSAqIDI7IC8vIExlZnQgY2hpbGRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGkgKiAyICsgMTsgLy8gUmlnaHQgY2hpbGRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGVyY29sYXRlcyB0aGUgaXRlbSBhdCBpIGluZGV4IHVwIHRoZSB0cmVlIGlmIGl0IGlzIHNtYWxsZXJcbiAgICovXG4gIF9fcGVyY1VwKGkpIHtcbiAgICB2YXIgcGFyZW50SW5kZXgsIHRtcDtcblxuICAgIHdoaWxlIChNYXRoLmZsb29yKGkgLyAyKSA+IDApIHtcbiAgICAgIHBhcmVudEluZGV4ID0gTWF0aC5mbG9vcihpIC8gMik7XG4gICAgICAvLyBJcyB0aGUgaXRlbSBhdCBpIHNtYWxsZXIgdGhhbiB0aGUgb25lIGF0IGNlaWxlZCBpbmRleFxuICAgICAgaWYgKHRoaXMuaGVhcExpc3RbaV0uaGVhcFZhbHVlIDwgwqB0aGlzLmhlYXBMaXN0W3BhcmVudEluZGV4XS5oZWFwVmFsdWUpIHtcbiAgICAgICAgdG1wID0gdGhpcy5oZWFwTGlzdFtwYXJlbnRJbmRleF07XG4gICAgICAgIHRoaXMuaGVhcExpc3RbcGFyZW50SW5kZXhdID0gdGhpcy5oZWFwTGlzdFtpXTtcbiAgICAgICAgdGhpcy5oZWFwTGlzdFtpXSA9IHRtcDtcbiAgICAgIH1cblxuICAgICAgaSA9IHBhcmVudEluZGV4O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJjb2xhdGVzIHRoZSBpdGVtIGF0IGkgaW5kZXggZG93biB0aGUgdHJlZSBpZiBzbWFsbGVyIHRoYW4gaXRzIGNoaWxkXG4gICAqL1xuICBfX3BlcmNEb3duKGkpIHtcbiAgICB2YXIgY2hpbGRJbmRleCwgdG1wO1xuXG4gICAgd2hpbGUgKChpICogMikgPD0gdGhpcy5jdXJyZW50U2l6ZSkge1xuICAgICAgY2hpbGRJbmRleCA9IHRoaXMuX19taW5DaGlsZFBvc2l0aW9uKGkpO1xuICAgICAgLy8gSXMgdGhlIGl0ZW0gYXQgaSBncmVhdGVyIHRoYW4gdGhlIHJlZmVyZW5jZSBkb3duIHRoZSB0cmVlXG4gICAgICBpZiAodGhpcy5oZWFwTGlzdFtpXS5oZWFwVmFsdWUgPiB0aGlzLmhlYXBMaXN0W2NoaWxkSW5kZXhdLmhlYXBWYWx1ZSkge1xuICAgICAgICB0bXAgPSB0aGlzLmhlYXBMaXN0W2ldO1xuICAgICAgICB0aGlzLmhlYXBMaXN0W2ldID0gdGhpcy5oZWFwTGlzdFtjaGlsZEluZGV4XTtcbiAgICAgICAgdGhpcy5oZWFwTGlzdFtjaGlsZEluZGV4XSA9IHRtcDtcbiAgICAgIH1cblxuICAgICAgaSA9IGNoaWxkSW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIG9iamVjdCByZWZlcmVuY2UgaW4gdGhlIGhlYXAgbGlzdCBhbmQgdXBkYXRlIGl0cyBoZWFwVmFsdWUuXG4gICAqIElmIHRoZSB1cGRhdGVkIHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgb3JpZ2luYWwgdmFsdWUsIHRoZSBpdGVtIHNob3VsZFxuICAgKiBiZSBwZXJjb2xhdGVkIGRvd24gdGhlIHRyZWUsIG90aGVyd2lzZSB1cCB0aGUgdHJlZS5cbiAgICovXG4gIHVwZGF0ZShvYmplY3QsIHZhbHVlKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5jb250YWlucyhvYmplY3QpO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdmFyIHJlZiA9IHRoaXMuaGVhcExpc3RbaW5kZXhdLmhlYXBWYWx1ZTtcbiAgICAgIHRoaXMuaGVhcExpc3RbaW5kZXhdLmhlYXBWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICBpZiAodmFsdWUgPiByZWYpXG4gICAgICAgIHRoaXMuX19wZXJjRG93bihpbmRleCk7XG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuX19wZXJjVXAoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgaXRlbSBvYmplY3QgcmVmZXJlbmNlIGluIHRoZSBoZWFwIGxpc3QgYnJpbmdzIGl0IHVwIHRoZSB0cmVlIGJ5XG4gICAqIGhhdmluZyBhIDAgdmFsdWUuIFRoZSB0cmVlIGlzIHRoZSBzb3J0ZWQgYW5kIHRoZSBoZWFkIGlzIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmUob2JqZWN0KSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5jb250YWlucyhvYmplY3QpO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5oZWFwTGlzdFtpbmRleF0uaGVhcFZhbHVlID0gMDtcbiAgICAgIHRoaXMuX19wZXJjVXAoaW5kZXgpO1xuICAgICAgdGhpcy5kZWxldGVIZWFkKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzRW1wdHkoKSlcbiAgICAgIHJldHVybiB0aGlzLmhlYWRWYWx1ZSgpO1xuXG4gICAgcmV0dXJuIEluZmluaXR5O1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGhlYXAgZnJvbSBhbiBvYmplY3QgbGlzdCBhbmQgc3RydWN0dXJlIGl0IHdpdGggYSBtaW5pbWFsIHN3YXBcbiAgICogcmVmZXJlbmNlXG4gICAqL1xuICBidWlsZEhlYXAobGlzdCkge1xuXG4gICAgdGhpcy5jdXJyZW50U2l6ZSA9IGxpc3QubGVuZ3RoO1xuICAgIHRoaXMuaGVhcExpc3QgPSBbe1xuICAgICAgJ29iamVjdCc6IHt9LFxuICAgICAgJ2hlYXBWYWx1ZSc6IDBcbiAgICB9XS5jb25jYXQobGlzdCk7XG5cbiAgICB2YXIgaSA9IGxpc3QubGVuZ3RoO1xuICAgIHdoaWxlIChpwqAgPiDCoDApIHtcbiAgICAgIHRoaXMuX19wZXJjRG93bihpKTtcbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGxpc3Qgd2l0aCBhIG1pbmltYWwgaGVhcFZhbHVlIHN3YXAgcmVmZXJlbmNlXG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICB0aGlzLmhlYXBMaXN0ID0gW3tcbiAgICAgICdvYmplY3QnOiB7fSxcbiAgICAgICdoZWFwVmFsdWUnOiAwXG4gICAgfV07XG4gICAgdGhpcy5jdXJyZW50U2l6ZSA9IDA7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pbkhlYXA7Il19
