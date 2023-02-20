// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    else if (!list2) return list1
    else if (list1.val <= list2.val){
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }else{
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};