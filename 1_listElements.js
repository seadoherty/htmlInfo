function listElements() {
    var text = "";
    var cltxt = " class: ";
    var br = "<br>";
    var all = document.getElementsByTagName("*");

    for (let i = 0, max = all.length; i < max; i++) {
        let el = all[i];
        let tag = el.tagName;

        el.className ? text += tag + cltxt + el.className + br
            : text += tag + br;
    }

    document.getElementById("elementsHere").innerHTML = text;
}