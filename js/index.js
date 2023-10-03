function redirect(page) {
    window.location.href = `${page}.html`;
}

function fillnav() {
    $("#nav").append(`
        <nav id="nav" class="fill w-100 d-inline-block bg-primary text-center">
            <div>
                <button class="btn btn-secondary nav-item" onclick="redirect('index')">
                    Home
                </button>
            </div>
            <div>
                <button class="btn btn-secondary dropdown-toggle nav-item" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Utilities
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="./utilpages/music.html">Music</a>
                    <a class="dropdown-item" href="./utilpages/timer.html">Timer</a>
                </div>
            </div>
            <div>
                <button class="btn btn-secondary dropdown-toggle nav-item" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    World
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="./worldpages.html">World Pages</a>
                </div>
            </div>
        </nav>
    `);
}

function testPath(pathName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log((pathName.split('/'))[pathName.split('/').length - 1]);

    switch ((pathName.split('/'))[pathName.split('/').length - 1]) {
        case 'index.html':
            console.log("index");
            break;
        case 'worldpages.html':
            console.log("world pages");
            break;
    }
}

window.addEventListener("load", (event) => {
    const pathName = location.pathname;
    testPath(pathName);
    fillnav();
  });