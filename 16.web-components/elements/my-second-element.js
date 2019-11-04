class MySecondElement extends HTMLElement {
    constructor() {
        // always call super() first
        super();
        console.log('constructed!');
    }

    connectedCallback() {

        let p = document.createElement("p");
        p.innerHTML = "Second Shadowed Element";
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(p);

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
        return ['my-second-attr'];
    }
}

window.customElements.define('my-second-element', MySecondElement);