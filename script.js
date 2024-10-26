class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

class LinkedList {
    constructor() {
      this.firstNode = null;
      this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.firstNode) {
            this.firstNode = newNode;
        } else {
            let current = this.firstNode;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.firstNode) {
            this.firstNode = newNode;
        } else {
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        if (!this.firstNode) {
            return "list is empty";
        } else {
        return this.firstNode.value;
        }
    }

    tail() {
        if (!this.firstNode) {
            return "list is empty";
        } else {
            let current = this.firstNode;
            while (current.next) {
                current = current.next;
            }
            return current.value;
        }
    }

    at(index) {
        if (!this.firstNode) {
            return "list is empty";
        } else {
            let current = this.firstNode;
            let i = 0;
            while (current) {
                if (i === index) {
                    return current.value;
                }
                current = current.next;
                i++;
            }
            if(index > i) {
                return `the list only has ${this.length} elements`;
            }
            else {
                return `the list starts at 0`;
            }
        }
    }

    pop() {
        if (!this.firstNode) {
            return "list is empty";
        } else {
            let current = this.firstNode;
            let previous;
            while (current.next) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
            this.length--;
        }
    }

    contains(value) {
        let current = this.firstNode;
        while (current) {
            if(current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.firstNode;
        let i = 0;
        while (current) {
            if(current.value === value) {
                return i;
            }
            current = current.next;
            i++;
        }
        return null;
    }

    toString() {
        let current = this.firstNode;
        let string = `(${current.value})`;
        while (current) {
            if(current.next) {
                string = `${string} -> (${current.next.value})`;
            }
            else {
                string = `${string} -> null`;
            }
            current = current.next;
        }
        return string;
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return
        }

        const newNode = new Node(value);
        let current = this.firstNode;
        let i = 0;

        while (current) {
            if (i === (index - 1)) {
                newNode.next = current.next;
                current.next = newNode;
                this.length++;
                return
            }
            current = current.next;
            i++;
        }
    }

    removeAt(index) {
        if (index >= this.length || index < 0) {
            return "index is out of bounds";
        }
        if (index === 0) {
            this.firstNode = current.next;
            this.length--;
            return
        }

        let current = this.firstNode;
        let i = 0;

        while (current) {
            if (i === (index - 1)) {
                current.next = current.next.next;
                this.length--;
                return
            }
            current = current.next;
            i++;
        }
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("bear");
list.insertAt("zebra", 2);
list.removeAt(2);
list.pop();

console.log(list);
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(1));
console.log(list.contains("dog"));
console.log(list.contains("shark"));
console.log(list.find("snake"));
console.log(list.find("shark"));
console.log(list.toString());
console.log();