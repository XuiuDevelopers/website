// index.js

// Function to create a navbar
function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.innerHTML = `
        <nav>
            <a href="#" style="font-size: 2rem">Xuiu Developers</a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Apps</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        <nav>
    `;
    return navbar;
}

// Function to create main content
function createMainContent() {
    const mainContent = document.createElement('div');
    mainContent.innerHTML = `
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
        <article>
        <h2>This is a Article</h3>
        <h4>This is content about article</h4>
            <button>
                Hello
            </button>
        </article>
        <hr>
    `;
    return mainContent;
}

// Function to create a footer
function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2023 Adwitiya UI. All rights reserved.</p>
    `;
    return footer;
}

// Function to render the components
function render() {
    const navbar = createNavbar();
    const mainContent = createMainContent();
    const footer = createFooter();

    document.getElementById('header').appendChild(navbar);
    document.getElementById('main').appendChild(mainContent);
    document.getElementById('footer').appendChild(footer);
}

// Call the render function to build the UI
render();
