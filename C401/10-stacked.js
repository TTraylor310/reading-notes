class Stack {
    constructor(){
        this.items = [];
        this.count = 0;
    }

    push (value) {
        this.items[this.count] = Element;
        this.count += 1
        console.log(`${Element} added to ${this.count}`)
        return this.count-1
    }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

