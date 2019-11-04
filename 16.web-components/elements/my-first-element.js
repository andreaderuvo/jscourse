class MyFirstElement extends HTMLElement {
    constructor() {
        // always call super() first
        super();
        console.log('constructed!');
    }

    connectedCallback() {
        
        this.innerHTML = `<h1>First Element</h1>`;
        this.style="color: red";

        console.log('connected!');
    }

    disconnectedCallback() {
        console.log('disconnected!');
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`Attribute: ${name} changed!`);
    }

    adoptedCallback() {
        console.log('adopted!');
    }

    static get observedAttributes() {
        return ['my-first-attr'];
    }
}

window.customElements.define('my-first-element', MyFirstElement);