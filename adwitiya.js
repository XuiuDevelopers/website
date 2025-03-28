class AdwButton extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "closed"})
        
        const button = document.createElement("button")
        const text = this.getAttribute("text")

        button.textContent = text || "Button"

        const styles = {
            border: "0",
            borderRadius: "8px",
            padding: "8px",
            minWidth: this.getAttribute('width') || "90px",
            minHeight: this.getAttribute('height') || "30px",
            background: "#3584e4",
            fontFamily : "Inter",
            fontWeight : 700,
            fontSize : "0.9rem",
            color: "white",
            cursor: "pointer",
            transition: "background 0.3s",
        };

        Object.assign(button.style,styles)

        button.addEventListener('mouseenter', () => {
            button.style.background = "#1c71d8";
        })

        button.addEventListener('mouseleave', () => {
            button.style.background = "#3584e4";
        })
        
        shadow.appendChild(button)
    }
}

customElements.define("adw-button",AdwButton)


class AdwBody extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "closed" });

        const container = document.createElement("div");

        const styles = {
            background: "#242424",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        };

        Object.assign(container.style, styles);

        shadow.appendChild(container);

        while (this.firstChild) {
            container.appendChild(this.firstChild);
        }
    }
}

customElements.define("adw-body", AdwBody);
