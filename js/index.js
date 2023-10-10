function redirect(page) {
    window.location.href = `${page}.html`;
}

function fillnav() {
    $("#nav").append(`
        <nav id="nav-box" class="fill w-100 d-inline-block bg-primary text-center">
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
                    <button class="dropdown-item" onclick="redirect('utilpages/music')">Music</button>
                    <button class="dropdown-item" onclick="redirect('utilpages/timer')">Timer</button>
                </div>
            </div>
            <div>
                <button class="btn btn-secondary nav-item" onclick="redirect('worldpages')">
                    World
                </button>
            </div>
        </nav>
    `);
}

async function fillNations(data) {
    data.forEach(nation => {
        $("#nationInfo").append(`
            <div class="row border">
                <div class="col-3 nation-header">
                    <h3>
                        <a class="" href="./nations.html?nation=${nation.name}">${nation.name}</a>
                    </h3>
                </div>
                <div class="col">
                    <p class="align-middle">
                        Info
                    </p>
                </div>
            </div>
        `);
    });
}

async function fillNationData(nation) {
    $("#header").append(`<h1>${nation.name}`);

    $("#nav-box").append(`
        <div>
            <button class="btn btn-secondary" onclick="redirect('worldpages')">
                Return
            </button>
        </div>
    `);

    $("#body").append(`
        <p class="w-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam orci, aliquam vel ipsum et, tempor placerat magna. Maecenas id arcu ligula. Nullam ut bibendum risus. Aliquam mattis pharetra erat et aliquam. Nulla condimentum semper turpis eget molestie. Quisque id mi erat. In efficitur rhoncus venenatis. Aenean id velit eu eros efficitur cursus. Vivamus sed faucibus libero. In commodo, nulla ac commodo mollis, est nibh placerat magna, vitae luctus elit erat ac massa. Maecenas sed mauris et enim eleifend cursus.Phasellus augue mi, consectetur non sollicitudin at, vulputate eget nunc. Suspendisse potenti. In hac habitasse platea dictumst. Praesent congue libero vel risus tristique congue. Nullam lorem elit, hendrerit eget fringilla sed, ultrices a turpis. Suspendisse luctus elit iaculis leo pellentesque, id gravida lectus vulputate. Praesent sagittis accumsan dolor, vitae porta mi convallis vel. Vestibulum feugiat in magna quis fermentum. Praesent sem lectus, tristique a sem maximus, rhoncus cursus urna. Nam ante felis, consequat ac rhoncus nec, aliquam nec orci. Duis ac lacus non enim consequat vulputate. Nullam consequat eros non vulputate hendrerit. 
        </p>
        <a href="./images/${nation.image}" target="_blank">
            <img class="nation-img" src="./images/${nation.image}" alt="Click me to see the image source">
        </a>
    `);
}

async function testPath(pathName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log((pathName.split('/'))[pathName.split('/').length - 1]);

    var data;
    await $.getJSON("https://arthurwb.github.io/funnyDungeon/data/nations.json", function(json) {       // for prod, change to local directory when pushed
        data = json;
    });

    switch ((pathName.split('/'))[pathName.split('/').length - 1]) {
        case 'index.html':
            console.log("index");
            break;
        case 'worldpages.html':
            console.log("world pages");
            fillNations(data);
            break;
        case 'nations.html':
            console.log("nation page " + urlParams.get('nation'));
            var nation = data.find(data => data.name === urlParams.get('nation'));
            fillNationData(nation);
            break;
    }
}

window.addEventListener("load", (event) => {
    const pathName = location.pathname;
    fillnav();
    testPath(pathName);
  });