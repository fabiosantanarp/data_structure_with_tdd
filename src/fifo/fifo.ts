export default class Fifo {
    private queue:Array<any>;

    constructor() {
        this.queue = [];
    }

    list() {
        return this.queue;
    }

    add(item:any) {
        this.queue.push(item);
    }

    remove() {
        if (this.queue.length === 0) throw new Error("Queue is empty");
        return this.queue.shift();
    }
}