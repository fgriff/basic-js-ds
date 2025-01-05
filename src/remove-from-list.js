const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const res = {};
  let head = res;
  let prevHead = res;
  let current = l;
  let listEnd = false;

  while (!listEnd) {
    if (current.value !== k) {
      head.value = current.value;

      if (current.next !== null) {
        head.next = {};
        prevHead = head;
        head = head.next;
        current = current.next;
      } else {
        head.next = null;
        listEnd = true;
      }
      
    } else if (current.next === null) {
        prevHead.next = null;
        listEnd = true;
    } else {
        current = current.next;
    }
  }

  return res;
}

module.exports = {
  removeKFromList
};
