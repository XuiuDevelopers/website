class StyleManager {
    static body(color) {
        document.body.style.backgroundColor = "#242424";
        document.body.style.display = "flex";
        document.body.style.alignItems = "center";
        document.body.style.justifyContent = "center";
        document.body.style.height = "100vh";
        document.body.style.margin = "0";
    }
}


StyleManager.body();

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
