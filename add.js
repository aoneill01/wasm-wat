const fs = require('fs').promises;

(async function() {
    const wasmFile = await fs.readFile('add.wasm');
    const { instance } = await WebAssembly.instantiate(wasmFile);
    console.log(instance.exports.add(1, 2));
})();
