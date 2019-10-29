const template = document.createElement('template');

template.innerHTML = `
<style>
    :host {
        display: block;
        color: white;
        font-weight: bold;
        text-align: center;
    }
    div {
        height: 200px;
        background-color: red;
        width: 100%;
    }
</style>
<div>
    Header
</div>
<button>
ciao
</button>
`

class MyHeader extends HTMLElement {
    constructor() {
        // always call super() first
        super();
        console.log('constructed!');
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
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
        return ['my-attr'];
    }
}

window.customElements.define('my-header', MyHeader);