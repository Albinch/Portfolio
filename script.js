document.addEventListener('DOMContentLoaded', function(){
    if(window.screen.width > 844){
        let dots = document.getElementsByClassName('dot');
        for(let dot of dots){
            dot.addEventListener('click', function(){
                if(dot.previousElementSibling.classList.contains('active')){
                    dot.classList.add('active');
                    let skills;
                    if(dot.classList.contains('dot1')){
                        skills = document.getElementsByClassName('skills1');
                    }else if(dot.classList.contains('dot2')){
                        skills = document.getElementsByClassName('skills2');
                    }else if(dot.classList.contains('dot3')){
                        skills = document.getElementsByClassName('skills3');
                    }else if(dot.classList.contains('dot4')){
                        skills = document.getElementsByClassName('skills4');
                    }else if(dot.classList.contains('dot5')){
                        skills = document.getElementsByClassName('skills5');
                        let title = document.getElementsByClassName('title-own').item(0);
                        let skillsOwn = document.getElementsByClassName('skills-own').item(0);
                        title.classList.remove('hidden');
                        skillsOwn.classList.remove('hidden');
                        title.classList.add('visible');
                        skillsOwn.classList.add('visible');
                    }
            
                    for(let skill of skills){
                        skill.classList.remove('hidden');
                        skill.classList.add('visible');
                    }
                }
            });
        }
    }else{
        let skills = document.getElementsByClassName('skill');
        for(let skill of skills){
            skill.classList.remove('hidden');
            skill.classList.add('visible');
        }
    }
});

function begin(){
    let element = document.getElementById('about');
    element.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("formContact").addEventListener("submit", function(){
    let firstname = document.getElementById('firstname-input').value;
    let lastname = document.getElementById('lastname-input').value;
    let body = document.getElementById('description-input').value;
    let subject = lastname + ' ' + firstname + ' a réagi à ton protfolio.';
    window.open('mailto:albaclement@icloud.com?subject=' + subject + '&body=' + body);
})