class Stack {
    constructor () {
        this.items = [];
        this.count = 0;
    }

    push (value) {
        this.items[this.count] = value;
        this.count += 1
        console.log(`${value} added to ${this.count}`)
        return this.count-1
    }

    pop () {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count-1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    peek () {
        console.log(`Top element is ${this.items[this.count-1]}`)
        return this.items[this.count-1];
    }

    isEmpty () {
        console.log(this.county == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    size () {
        console.log(`${this.count} elements are in the stack`)
        return this.count
    }

    print () {
        let str = ''
        for (let i = 0; i < this.count; i++){
            str += this.items[i] + ' '
        }
        return str
    }

    clear () {
        this.items = [];
        this.count = 0;
        console.log('Stack is cleared')
        return this.items
    }

}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

stack.pop();

stack.push(250);
stack.peek(2);

console.log(stack.print())