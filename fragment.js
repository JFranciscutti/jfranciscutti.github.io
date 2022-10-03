class MiComponente extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `<p> The velocipastor </p>`;
    }
}

customElements.define("team-jacttis", MiComponente)