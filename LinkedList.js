class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  addFront(data) {
    const newNode = new LinkedListNode(data, this.head)
    this.head = newNode
    this.length++
  }

  removeFront() {
    if (this.head == null) return null
    this.head = this.head.next
  }

  front() {
    if (this.head == null) return null
    return this.head.value
  }

  print() {
    let output = 'Linked List Values => '
    let current = this.head
    for (let i = 0; i < this.length; i++) {
      output += current?.value
      if (current.next != null) output += ', '
      current = current?.next
    }
    return output
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

module.exports = LinkedList
