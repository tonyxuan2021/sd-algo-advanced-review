class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;

    return this;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;

    if (this.size === 1) {
      this.last = null;
    } else {
      this.first = this.first.next;
      this.size--;
      return temp.value;
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;

    return this;
  }

  dequeue() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
