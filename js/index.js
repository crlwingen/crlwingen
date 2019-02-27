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

function toggleTheme() {
    var theme_btn = document.getElementById("theme-btn");
    var theme = document.getElementById("theme");

    if(theme.className == "far fa-moon") {
        theme.setAttribute("class", "far fa-sun");
        theme_btn.style.backgroundColor = "white";
    } else {
        theme.setAttribute("class", "far fa-moon");
        theme_btn.style.backgroundColor = "#0c182b";
    }
}