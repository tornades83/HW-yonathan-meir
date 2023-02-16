export class myButton extends HTMLButtonElement {
    constructor(_id, _class, _text, _callback) {
        super();
        if (_id)this.id = _id;
        if (_class) this.id = _id;
        this.innerText = _text;
        this.addEventListener("click", _callback);
    }
}
customElements.define("my-button", myButton, { extends: "button"});
