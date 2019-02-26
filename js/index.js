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
        var desc = document.createElement("p");
        
        item.appendChild(document.createTextNode(repo.name));
        item.setAttribute("id", "menu");

        desc.appendChild(document.createTextNode(repo.description));
        desc.setAttribute("id", "list");

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