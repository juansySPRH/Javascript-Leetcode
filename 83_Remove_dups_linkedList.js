// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Input: head = [1,1,2]
// Output: [1,2] 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var h = head
    var s = new Set()
    var p ;

    while (head){
        if (s.has(head.val)){
            p.next = head.next
            head = head.next
        }else{
            s.add(head.val)
            p = head
            head = head.next
        }
    }
    return h
    

};
// [1, 1, 2, 3 , 3]
// cur = 1
// next = 1

// 1 == 1
// next = 2
// [1, 2, 2, 3, 3]

// 1 != 2

// [1]
// cur = 2
// [2, 2, 2, 3, 3]