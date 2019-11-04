const template = document.createElement('template');

template.innerHTML = `
<style>
    @import "lib/tailwind.min.css";
</style>

<div class="w-full">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      </div>
      <input type="submit" value="Login" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" />
      <p class="text-red-500 text-xs hidden" id="error">Error...</p>
  </form>
  <p class="text-center text-gray-800 text-xs">
    &copy;2019 Acme Corp. All rights reserved.
  </p>
</div>
`

class MyLogin extends HTMLElement {

    _errors = {
        login: "Invalid Login",
    }

    constructor() {
        // always call super() first
        super();
        console.log('constructed!');
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$form = this._shadowRoot.querySelector('form');
        this.$form.addEventListener('submit', event => {
            this.dispatchEvent(new CustomEvent('onLoginEvent'));
        });

        this.$username = this._shadowRoot.getElementById('username');
        this.$username.addEventListener('keyup', event => {
            this.dispatchEvent(new CustomEvent('onUsernameKeyupEvent'));
        });

        this.$password = this._shadowRoot.getElementById('password');
        this.$password.addEventListener('keyup', event => {
            this.dispatchEvent(new CustomEvent('onPasswordKeyupEvent'));
        });

        this.$error = this._shadowRoot.getElementById('error');

        let onErrorMessage = this.getAttribute('onErrorMessage');
        console.log(onErrorMessage)
        if (onErrorMessage) {
            this.errors.login = onErrorMessage;
        }
    }

    showError() {
        this.$error.innerHTML = this.errors.login;
        this.$error.classList.remove("hidden");
    }

    hideError() {
        this.$error.classList.add("hidden");
    }

    set errors(errors) {
        this._errors = errors;
    }

    get errors() {
        return this._errors;
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
        return ['onErrorMessage'];
    }
}

window.customElements.define('my-login', MyLogin);