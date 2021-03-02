// Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.
// The list is very long, so making more than one pass is prohibitively expensive.
// Do this in constant space and in one pass.

const removeKthLastLinked = (list, k) => {
  if (!list.next) {
    return 1;
  }
  let last = removeKthLastLinked(list.next, k);
  if (last === k) {
    list.next = list.next.next;
  }
  return last + 1;
}