type Node = {
    value: number;
    left: Node;
    right: Node;
};

export default class BinaryTree {

    root: Node;
    hopCounter:number = 0;

    private insertNode(currentNode: Node, newNode: Node) {
        if (newNode.value > currentNode.value) {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this.insertNode(currentNode.right, newNode);
            }
        }
        else if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this.insertNode(currentNode.left, newNode);
            }
        }
    }

    add(number:number) {
        if (!this.root) {
            this.root = {
                value: number,
                right: null,
                left: null
            }
            return;
        }
        this.insertNode(this.root, {value: number, left: null, right: null});
    }

    list() {
        return this.root;
    }

    getNumberOfHops(number:number, fromNode?: Node) {
        if (!fromNode) fromNode = this.root;
        if (number > fromNode.value) {
            this.hopCounter++;
            this.getNumberOfHops(number, fromNode.right);
        }
        if (number < fromNode.value) {
            this.hopCounter++;
            this.getNumberOfHops(number, fromNode.left);
        }
        return this.hopCounter;
    }

    getMinnorNumber(fromNode?:Node) {
        if (!fromNode) fromNode = this.root;
        if (!fromNode.left) {
            return fromNode.value;
        }
        return this.getMinnorNumber(fromNode.left);
    }

    getMajorNumber(fromNode?:Node) {
        if (!fromNode) fromNode = this.root;
        if (!fromNode.right) {
            return fromNode.value;
        }
        return this.getMajorNumber(fromNode.right);
    }

}