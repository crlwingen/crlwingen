var darkColor = "#0c182b";
var lightColor =  "#e3e5e8";

function toggleContent(toggle, content) {
    var toggle = document.getElementById(toggle);
    var content = document.getElementById(content);

    if(content.style.display === "none" || content.style.display === '') {
        toggle.innerText = "[-]";
        content.style.display = "block";
    } else {
        toggle.innerText = "[+]";
        content.setAttribute("style", "display: none;");
    }
}

function getRepo() {
    var list = document.createElement("ul");
    var objRepo = JSON.parse(this.responseText);


    for(let repo of objRepo) {
        var item = document.createElement("li");

        var cont = document.createElement("div");
        var desc = document.createElement("h5");
        var link = document.createElement("a");
        
        item.setAttribute("id", "menu");

        desc.appendChild(document.createTextNode(repo.description));
        desc.setAttribute("id", "list");

        link.appendChild(document.createTextNode(repo.name));
        link.href = repo.html_url;
        link.target = "_blank";

        item.appendChild(link);
        item.appendChild(desc);

        list.appendChild(item);
     }

    document.getElementById("project").appendChild(list);
}


function initGitApi() {
    var request = new XMLHttpRequest();

    request.onload = getRepo;
    request.open('get', 'https://api.github.com/users/crlwingen/repos');
    request.send();
}

var theme = document.getElementById("theme");
var theme_btn = document.getElementById("theme-btn");
var social_icon = document.getElementsByClassName("social-icon");

function toggleTheme() {
    if(theme.className == "far fa-sun") {
        lightTheme();
    } else {
        darkTheme();
    }
}

function darkTheme() {
    document.body.style.backgroundColor = darkColor;
    document.body.style.color = lightColor;
    theme.setAttribute("class", "far fa-sun");
    theme_btn.style.backgroundColor = lightColor;
    social_icon[0].style.color = lightColor;
    social_icon[1].style.color = lightColor;
}

function lightTheme() {
    document.body.style.backgroundColor = lightColor;
    document.body.style.color = darkColor;
    theme.setAttribute("class", "far fa-moon");
    theme_btn.style.backgroundColor = darkColor;
    social_icon[0].style.color = darkColor;
    social_icon[1].style.color = darkColor;
}