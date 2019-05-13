// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let res = new ListNode()
  let cur = res
  let flag = 0
  while (l1 && l2) {
    let add = (l1.val + l2.val) % 10
    let value = (add + flag) % 10
    cur.next = new ListNode(value)
    if (l1.val + l2.val >= 10 || add + flag >= 10) {
      flag = 1
    } else {
      flag = 0
    }
    cur = cur.next
    l1 = l1.next
    l2 = l2.next
  }
  if (l1) {
    while (l1) {
      let value = (l1.val + flag) % 10
      cur.next = new ListNode(value)
      // flag = (l1.val + flag) / 10
      if (l1.val + flag >= 10) {
        flag = 1
      } else {
        flag = 0
      }
      l1 = l1.next
      cur = cur.next
    }
  }
  if (l2) {
    while (l2) {
      let value = (l2.val + flag) % 10
      cur.next = new ListNode(value)
      if (l2.val + flag >= 10) {
        flag = 1
      } else {
        flag = 0
      }
      l2 = l2.next
      cur = cur.next
    }
  }
  if (flag) {
    cur.next = new ListNode(flag)
  }
  return res.next
};

// 自动补0
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1, q = l2, curr = dummyHead;
  let carry = 0;
  while (p != null || q != null) {
    let x = (p != null) ? p.val : 0;
    let y = (q != null) ? q.val : 0;
    let sum = carry + x + y;
    // carry = (sum > 9) ? 1 : 0;
    carry= parseInt(sum / 10)
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p != null) p = p.next;
    if (q != null) q = q.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
}
