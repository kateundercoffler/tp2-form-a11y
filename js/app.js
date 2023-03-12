/**
 * Début de fichier JS
 * @author Kate Undercoffler
 * @file TP2-form-a11y
 * @version 1.0
 */

/**Écouteurs d'événements */
document.getElementById('btnMenu')
.addEventListener('click', activerMenu);

/**
 * Chercher element menu par id
 * Change la classe et le texte du menu selon le statut courant 
 * 
 */
function activerMenu () {
    let refMenu = document.getElementById("menu");

    if (refMenu.className == "nav__liste menu-ouvert") {
        document.querySelector(".navigation__principale-span").innerHTML = "Menu";
        refMenu.className = "nav__liste menu-fermer";
    } else {
        document.querySelector(".navigation__principale-span").innerHTML = "Fermer";
        refMenu.className = "nav__liste menu-ouvert";
    }
}