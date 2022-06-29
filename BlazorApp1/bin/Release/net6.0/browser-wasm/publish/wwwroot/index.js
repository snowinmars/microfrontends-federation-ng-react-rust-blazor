class ChildBlazorElement extends HTMLElement {
    connectedCallback() {
        console.log('ChildBlazorElement connected')
    }
}

customElements.define('child-blazor-element', ChildBlazorElement);
