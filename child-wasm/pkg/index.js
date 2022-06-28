import * as wasm from './index_bg.wasm';
import {Universe} from "./index_bg";

class ChildWasmElement extends HTMLElement {
    connectedCallback() {
        console.log('ChildWasmElement connected')
        wasm.__wbindgen_start();

        console.log(`loaded Wasm module`);

        const pre = document.getElementsByTagName('child-wasm-element')[0];

        const universe = Universe.new();

        const renderLoop = () => {
            pre.textContent = universe.render();
            universe.tick();

            requestAnimationFrame(renderLoop);
        };

        requestAnimationFrame(renderLoop);
    }
}

customElements.define('child-wasm-element', ChildWasmElement);

export * from './index_bg.js';
