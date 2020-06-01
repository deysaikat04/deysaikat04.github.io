function cardSwitch(id) {
    console.log("hey");
    var text = '';
    var repoLink = 'here'.link('https://github.com/deysaikat04');
    switch(id){
        case 1:
            text = 'A FullStack Web Developer.';
            break;
        case 2:
            text = 'By coding and hence developing applications, I want to make people life easier and smarter!';
            break;
        case 3:
            text = 'I\'ve started learning HTML, CSS, Boostrap few years back and now I\'m comfortable with React, Angular, Node, Express, MongoDB, MySQL!';
            break;
        case 4:
            text = 'You can find my github repositories '+repoLink+'!';
            break;
    }
    document.getElementById('terminal-text').innerHTML = text;
}
