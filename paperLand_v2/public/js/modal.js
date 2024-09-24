
const img = document.querySelectorAll('.container-card-print')
const modal = document.querySelectorAll('.modal')[0]
const containedModal = document.querySelectorAll('.contained-modal')[0]
img.forEach((btnImg , index) => {
    btnImg.addEventListener('click' , function(e){
        e.preventDefault()
        if(btnImg.textContent.includes('Flocage')){
            containedModal.innerHTML = `
            <div class="close-modal">
                <h3>Flocage</h3>    
                <span>
                        <i class="fa-solid fa-xmark "></i>
                    </span>
            </div>
                <p>Le flochage est une méthode de personnalisation de marquage par transfert thermique l’objectif est de donner du relief et un effet velouté 
                à votre visuel</p>`
                modal.style.display = "block"

        }else if(btnImg.textContent.includes('Dorure à chaud')) {
            containedModal.innerHTML = `
            <div class="close-modal">
                <h3>Dorure à chaud</h3>    
                <span>
                        <i class="fa-solid fa-xmark "></i>
                    </span>
            </div>
                <p>Une méthode de marquage qui consiste à créer un relief et de rendre la surface brillante et réfléchissante</p>`
                modal.style.display = "block"
        }else if ( btnImg.textContent.includes('Vernis')){
            containedModal.innerHTML = `
            <div class="close-modal">
                <h3>Vernis</h3>    
                <span>
                        <i class="fa-solid fa-xmark "></i>
                    </span>
            </div>
                <p>Le vernis est une technique d'impression qui ajoute une couche protectrice et brillante pour améliorer la résistance d'une surface.</p>`
                modal.style.display = "block"
        }else if (btnImg.textContent.includes('Embossage')){
            containedModal.innerHTML = `
            <div class="close-modal">
                <h3>Embossage</h3>    
                <span>
                        <i class="fa-solid fa-xmark "></i>
                    </span>
            </div>
                <p>Une technique de marquage qui consiste à créer des motifs en relief sur une surface.</p>`
                modal.style.display = "block"
        }
        const closeModalBtn = document.querySelector(".close-modal span");
        if (closeModalBtn) {
            closeModalBtn.addEventListener("click", function() {
                modal.style.display = "none";
            });
        }
    })
})


