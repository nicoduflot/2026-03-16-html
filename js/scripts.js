
function toggleHidden(cible){
    document.getElementById(cible).classList.toggle('hidden');
}

function getValue(element, cible){
    document.querySelector(cible).innerText = element.value;
}