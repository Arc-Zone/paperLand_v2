document.addEventListener('DOMContentLoaded', function() {
    let cross = document.getElementsByClassName("cross")[0];
    let menu = document.getElementsByClassName("menu")[0];
    let menuLi = document.getElementsByClassName("containMenu"); // Collection d'éléments



    menu.addEventListener('click', function() {
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].style.display = "block"; // Affiche chaque élément
            

        if(menuLi[i].style.display = "block"){
            menu.style.display = "none"
            cross.style.display = "inline"
        }
        }
        
    });

    cross.addEventListener('click', function() {
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].style.display = "none"; // Affiche chaque élément

            if(menuLi[i].style.display = "none"){
                cross.style.display = "none"
                menu.style.display = "inline"
            }

        }
        
    });
    
});
