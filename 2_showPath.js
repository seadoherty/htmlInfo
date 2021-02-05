function showPath() {
    var location = window.location.pathname;
    var path = location.substring(0, location.lastIndexOf("/") + 1);

    document.getElementById("pathToFiles").innerHTML = path;
}