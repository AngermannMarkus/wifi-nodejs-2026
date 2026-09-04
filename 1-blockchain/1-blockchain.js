const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = '';
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createFirstBlock()];
    }

    createFirstBlock() {
        return new Block(0, '2026-09-01', 'Erster Block', '0');
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    } 
}

// Testcode:
let markusBlockchain = new Blockchain();
markusBlockchain.addBlock(new Block(1, '2026-09-01', { amount: 10 }));
markusBlockchain.addBlock(new Block(2, '2026-09-01', { amount: 7 }));
markusBlockchain.addBlock(new Block(3, '2026-09-01', { amount: 15 }));

console.log(JSON.stringify(markusBlockchain, null, 4));
console.log('Blockchain valid? ' + markusBlockchain.isChainValid());

// Hacking Test
console.log('hacking...');
markusBlockchain.chain[2].data = { amount: 1000 };
markusBlockchain.chain[2].hash = markusBlockchain.chain[2].calculateHash();
console.log(JSON.stringify(markusBlockchain, null, 4));
console.log('Blockchain valid? ' + markusBlockchain.isChainValid());