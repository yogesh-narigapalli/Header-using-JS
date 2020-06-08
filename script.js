function onLoad() {
    var cont = document.getElementById('container');
    cont.setAttribute('class', 'container');
    var heading = document.createElement('h1');
    var headingAnchor = document.createElement('a');
    headingAnchor.setAttribute('href', '#');
    headingAnchor.setAttribute('class', 'header-logo');
    var headingTitle = document.createTextNode('NowFloats');
    headingAnchor.appendChild(headingTitle);
    heading.appendChild(headingAnchor);
    cont.appendChild(heading);

    var div = document.createElement('div');
    div.setAttribute("class", "header-right");
    var firstAnchor = document.createElement('a');
    firstAnchor.setAttribute('href', '#home');
    firstAnchor.setAttribute('onclick', 'anchorClicked()');
    var homeText = document.createTextNode('Home');
    firstAnchor.appendChild(homeText);

    var secondAnchor = document.createElement('a');
    secondAnchor.setAttribute('href', '#contact');
    secondAnchor.setAttribute('onclick', 'anchorClicked()');
    var contactText = document.createTextNode('Contact');
    secondAnchor.appendChild(contactText);

    var thirdAnchor = document.createElement('a');
    thirdAnchor.setAttribute('href', '#about');
    thirdAnchor.setAttribute('onclick', 'anchorClicked()');
    var aboutText = document.createTextNode('About');
    thirdAnchor.appendChild(aboutText);

    div.appendChild(firstAnchor);
    div.appendChild(secondAnchor);
    div.appendChild(thirdAnchor);
    cont.appendChild(div);

}

function anchorClicked() {
    var ifram = document.getElementById('iframer');
    var creat = document.createElement("iframe");
    creat.setAttribute("src", "#home");
    ifram.appendChild(creat);
}