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
        super();

        const shadow = this.attachShadow({ mode: "closed" });

        const button = document.createElement("button");
        const text = this.getAttribute("text");

        button.textContent = text || "Button";

        const styles = {
            border: "0",
            borderRadius: "8px",
            padding: "8px",
            minWidth: this.getAttribute('width') || "90px",
            minHeight: this.getAttribute('height') || "30px",
            background: "#3584e4",
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "white",
            cursor: "pointer",
            transition: "background 0.3s",
        };

        Object.assign(button.style, styles);

        button.addEventListener('mouseenter', () => {
            button.style.background = "#1c71d8";
        });

        button.addEventListener('mouseleave', () => {
            button.style.background = "#3584e4";
        });

        // Add click event listener
        button.addEventListener('click', () => {
            const clickHandler = this.getAttribute('onclick');
            if (clickHandler) {
                // Execute the function specified in the onclick attribute
                eval(clickHandler);
            }
        });

        shadow.appendChild(button);
    }
}

customElements.define("adw-button", AdwButton);


class AdwDialog extends HTMLElement {
    constructor() {
      super();
  
      // Create shadow root
      const shadow = this.attachShadow({ mode: "closed" });
  
      // Create dialog and its elements
      const dialog = document.createElement("dialog");
      const title = document.createElement("h3");
      const text = document.createElement("p");
      const positiveButton = document.createElement("button");
      const negativeButton = document.createElement("button");
      const dismissButton = document.createElement("button");
      const br1 = document.createElement("br");
      const br2 = document.createElement("br");
  
      // Set text content
      title.textContent = "Hello Devil Bhai !";
      title.style.textAlign = "center";
      text.textContent = "Created by Megh ( MR )";
      text.style.textAlign = "center";
      positiveButton.textContent = "Save";
      negativeButton.textContent = "Discard";
      dismissButton.textContent = "Cancel";
  
      // Define styles
      const dialogStyle = {
        border: "0px",
        borderRadius: "16px",
        fontFamily: "Inter",
        width: "50%",
        maxWidth: "400px",
        padding: "16px",
        backgroundColor: "#36363a",
        color: "#fff",
        textAlign: "center",
        transform: "scale(0)",
        opacity: 0,
      };
  
      const positiveButtonStyle = {
        width: "100%",
        marginBottom: "8px",
        border: "0px",
        backgroundColor: "#3584e4",
        color: "#fff",
        fontWeight: 700,
        fontSize: "0.9rem",
        borderRadius: "8px",
        padding: "8px",
      };
  
      const negativeButtonStyle = {
        width: "100%",
        marginBottom: "8px",
        border: "0px",
        backgroundColor: "#c01c28",
        color: "#ffff",
        fontWeight: 700,
        fontSize: "0.9rem",
        borderRadius: "8px",
        padding: "8px",
      };
  
      const dismissButtonStyle = {
        width: "100%",
        marginBottom: "8px",
        border: "0px",
        backgroundColor: "#4a4a4e",
        color: "#fff",
        fontWeight: 700,
        fontSize: "0.9rem",
        borderRadius: "8px",
        padding: "8px",
      };
  
      // Append elements to dialog
      dialog.appendChild(title);
      dialog.appendChild(text);
      dialog.appendChild(positiveButton);
      dialog.appendChild(br1);
      dialog.appendChild(negativeButton);
      dialog.appendChild(br2);
      dialog.appendChild(dismissButton);
  
      // Set open attribute and styles
      dialog.setAttribute("open", "");
      Object.assign(dialog.style, dialogStyle);
      Object.assign(positiveButton.style, positiveButtonStyle);
      Object.assign(negativeButton.style, negativeButtonStyle);
      Object.assign(dismissButton.style, dismissButtonStyle);
  
      // Add animation
      let scale = 0;
      let opacity = 0;
      let animationFrame = 0;
      const animationDuration = 50; // 50 frames
      const animationInterval = 10; // 10ms
      const bounceFactor = 1.2;
  
      function animate() {
        animationFrame++;
        if (animationFrame < animationDuration / 2) {
          scale = (animationFrame / (animationDuration / 2)) * bounceFactor;
          opacity = (animationFrame / (animationDuration / 2));
        } else {
          scale = bounceFactor - ((animationFrame - (animationDuration / 2)) / (animationDuration / 2)) * (bounceFactor - 1);
          opacity = 1;
        }
        dialog.style.transform = `scale(${scale})`;
        dialog.style.opacity = opacity;
        if (animationFrame < animationDuration) {
          setTimeout(animate, animationInterval);
        }
      }
  
      animate();
  
      // Append dialog to shadow root
      shadow.appendChild(dialog);
    }
  }
  
  // Define custom element
  customElements.define("adw-dialog", AdwDialog);
  
