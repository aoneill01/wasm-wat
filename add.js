const fs = require('fs').promises;

(async function() {
    const wasmFile = await fs.readFile('add.wasm');
    const wasm = await WebAssembly.instantiate(wasmFile);
    console.log(wasm.instance.exports.add(1, 2));
})();
