let tab=[];  
let liste=document.getElementById('liste');
let ajout =document.getElementById('valid');
let $liSelected = document.getElementById('liste');

function afficher(){    
    for(i=0; i<tab.length; i++){ 
        let li = document.createElement('li');
        let newlist = document.createTextNode(tab[i]);
        liste.appendChild(li);
        li.className.add('list');
        li.appendChild(newlist);
    }
}

afficher();

/**
 * Permet l'ajout d'une tache
 */
function ajoutList(){
    let list = document.getElementById('list').value;
    let li = document.createElement('li');
    let newlist = document.createTextNode(list);
            tab.push(list);
            liste.appendChild(li); 
            li.appendChild(newlist);
}

function select(e) 
{
	e.target.classList.toggle("selected");
}

function supprime(){   
    let sup = document.getElementById('liste').lastChild;
    tab.pop();
    liste.removeChild(sup);
}

$liSelected.onclick = select;

/*
let taches = [];
let blocTaches = document.getElementsByClassName('taches');
let liChoise = document.querySelectorAll('selected');

function ajoutTache(){
    let li = document.querySelector('li.selected');
        if (li){
            let tache = document.getElementById('inputTache').value;
            let li = document.createElement('li');
            let newlist = document.createTextNode(tache);
            tab.push(taches);
            blockTaches.appendChild(li); 
            li.appendChild(newlist);
        }
}

function afficheTaches(){
    let li = document.querySelector('li.selected');
    if (li){
        for(i=0; i<taches.length; i++){ 
            let li = document.createElement('li');
            let newlist = document.createTextNode(tab[i]);
            blockTaches.appendChild(li);
            li.className.add('tache');
            li.appendChild(newlist);
        }
}

affichetaches();
*/