const fs = require('fs').promises;

(async function() {
    const max = 100000000;

    const wasmFile = await fs.readFile('test.wasm');
    const wasm = await WebAssembly.instantiate(wasmFile);

    for (let j = 0; j < 10; j++) {
        console.time('wasm');
        console.log(wasm.instance.exports._Z5dummyi(max));
        console.timeEnd('wasm');
    }

    for (let j = 0; j < 10; j++) {
        console.time('js');
        let result = 0;
        for (let i = 0; i < max; i++) {
            result += (i & 0xf);
        }
        console.log(result);
        console.timeEnd('js');
    }
})();
