
    let header = document.getElementById('header-container')
    header.style.backgroundColor = 'green';
    let urgent = document.getElementsByClassName('emergency-tasks')[0];
    urgent.style.backgroundColor = 'salmon';
    let notUrgent = document.getElementsByClassName('no-emergency-tasks')[0];
    notUrgent.style.backgroundColor = 'yellow';

    urgent.children[0].children[0].style.backgroundColor = 'purple';
    urgent.children[1].children[0].style.backgroundColor = 'purple';
    
    notUrgent.children[0].children[0].style.backgroundColor = 'black';
    notUrgent.children[1].children[0].style.backgroundColor = 'black';

    let footer = document.getElementById('footer-container');
    footer.style.backgroundColor = 'darkgreen';


