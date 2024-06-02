import BinaryTree from "../src/binaryTree/binarytree";
import Fifo from "../src/fifo/fifo"
import Lifo from "../src/lifo/lifo";

test('FIFO: deve remover o primeiro registro após várias inclusões', () => {
    const fifo = new Fifo;
    fifo.add(10);
    fifo.add(20);
    fifo.add(30);
    fifo.add(40);
    fifo.remove();
    const queue = fifo.list();
    expect(queue).toEqual([
        20, 30, 40
    ]);
});

test('FIFO: deve gerar uma exceção ao tentar remover caso o primeiro registro não exista', () => {
    const fifo = new Fifo;
    expect(() => fifo.remove()).toThrow(Error);
});


test('LIFO: deve o ultimo registro inserido', () => {
    const lifo = new Lifo;
    lifo.add(10);
    lifo.add(20);
    lifo.add(30);
    lifo.remove();
    const queue = lifo.list();
    expect(queue).toEqual([
        30, 20
    ]);
});

test('LIFO: deve gerar uma exceção ao tentar remover caso o primeiro registro não exista', () => {
    const lifo = new Lifo;
    expect(() => lifo.remove()).toThrow(Error);
});

test('BT: deve retornar uma árvore com root sendo númmero 4', () => {
    const bt = new BinaryTree;
    bt.add(4);
    const queue = bt.list();
    expect(queue).toEqual(
        {
            value: 4,
            right: null,
            left: null,
        }
    );
});

test('BT: deve retornar uma árvore com root sendo númmero 4 e o numero 5 sendo o right de 4', () => {
    const bt = new BinaryTree;
    bt.add(4);
    bt.add(5);
    const queue = bt.list();
    expect(queue).toEqual(
        {
            value: 4,
            right: {
                value: 5,
                right: null,
                left: null
            },
            left: null
        }
    );
});

test('BT: deve retornar uma árvore com root sendo númmero 4, 5 na right e 3 na left', () => {
    const bt = new BinaryTree;
    bt.add(4);
    bt.add(5);
    bt.add(3);
    const queue = bt.list();
    expect(queue).toEqual(
        {
            value: 4,
            right: {
                value: 5,
                right: null,
                left: null
            },
            left: {
                value: 3,
                right: null,
                left: null
            }
        }
    );
});


test('BT: deve retornar uma árvore com os valores 4,2,6,3,1,5,7 sendo inseridos', () => {
    const bt = new BinaryTree;
    bt.add(4);
    bt.add(2);
    bt.add(6);
    bt.add(3);
    bt.add(1);
    bt.add(5);
    bt.add(7);
    const queue = bt.list();
    expect(queue).toEqual(
        {
            value: 4,
            right: {
                value: 6,
                right: {
                    value: 7,
                    right: null,
                    left: null
                },
                left: {
                    value: 5,
                    right: null,
                    left: null
                }
            },
            left: {
                value: 2,
                right: {
                    value: 3,
                    right: null,
                    left: null
                },
                left: {
                    value: 1,
                    right: null,
                    left: null
                }
            }
        }
    );
});

test('BT: encontra o numero 5 com 2 saltos em uma arvore binaria 4,2,6,3,1,5,7', () => {
    const bt = new BinaryTree;
    bt.add(4);
    bt.add(2);
    bt.add(6);
    bt.add(3);
    bt.add(1);
    bt.add(5);
    bt.add(7);
    const queue = bt.getNumberOfHops(5);
    expect(queue).toEqual(2);
});

test('BT: encontra o menor numero (1) de uma arvore binaria 4,10,5,11,1,20,', () => {
    const bt = new BinaryTree;
    bt.add(4);
    bt.add(10);
    bt.add(5);
    bt.add(11);
    bt.add(1);
    bt.add(20);
    const minnorNumber = bt.getMinnorNumber();
    expect(minnorNumber).toEqual(1);
});

test('BT: encontra o maior numero (20) de uma arvore binaria 4,10,5,20,1,', () => {
    const bt = new BinaryTree;
    bt.add(4);
    bt.add(10);
    bt.add(5);
    bt.add(20);
    bt.add(1);
    const number = bt.getMajorNumber();
    expect(number).toEqual(20);
});