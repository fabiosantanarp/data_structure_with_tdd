export default class Lifo {
    private queue:Array<any>;

    constructor() {
        this.queue = [];
    }

    list() {
        return this.queue;
    }

    add(item: any) {
        this.queue.unshift(item);
    }

    remove() {
        if (this.queue.length === 0) throw new Error("Queue is empty");
        this.queue.splice((this.queue.length - 1), 1); //daria para usar o pop().
    }
}