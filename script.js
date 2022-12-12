var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);
for(let i = 0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        let targetselectionID  = this.textContent.trim().toLowerCase();
        
        let targerSelection = document.getElementById(targetselectionID);
        
        let interval = setInterval(function(){
            let targecordinates  = targerSelection.getBoundingClientRect();
                if(targecordinates.top<=0){
                    clearInterval(interval);
                    return;
                }
                window.scrollBy(0,50);
        },50);
    })
}

let skillProgrress = document.querySelectorAll('.skill-progress > div');
let skillSection = document.getElementById('skills');
window.addEventListener('scroll' , checkscroll)
var animationDone = false;

function initializeBars(){
    for (let bar of skillProgrress) {
        bar.style.width = 0 + '%';

    }
}

initializeBars();
function fillbars(){
    for (let bar of skillProgrress) {
        let targetwidth = bar.getAttribute('data-bar-width');
        let currentwidth = 0;
        
        
        let interval = setInterval(function(){
            if(currentwidth > targetwidth){
                clearInterval(interval);
                return;
            }
            currentwidth+=1;
            bar.style.width = currentwidth + '%';
        },2);

    }
}
function checkscroll(){
    var coordinates = skillSection.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight){
        console.log("Skill section visible")
        animationDone = true;
        fillbars();
    }
    else if(coordinates.top>window.innerHeight ){
        animationDone = false;
        initializeBars();
    }
}
