const fs = require('fs').promises;
const TextDecoder = require('util').TextDecoder;

(async function() {
    const textDecoder = new TextDecoder('utf8');
    const wasmFile = await fs.readFile('memory.wasm');
    const { instance } = await WebAssembly.instantiate(wasmFile);

    // Get the exported memory
    const memory = instance.exports.memory;
    // Reference bytes [0...2]
    const buffer = new Uint8Array(memory.buffer, 0, 3);

    // Print the content before
    console.log(textDecoder.decode(buffer)); // HAL

    // Call the exported incrementLetters function
    instance.exports.incrementLetters();

    // Print the content after
    console.log(textDecoder.decode(buffer)); // IBM
})();
