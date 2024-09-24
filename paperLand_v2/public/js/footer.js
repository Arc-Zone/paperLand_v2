document.addEventListener('DOMContentLoaded' , function(){
    let containPlusBtn = document.querySelectorAll(".plus")
    let moins = document.querySelectorAll(".moins")
    let containDataFooter = document.getElementsByClassName("contain-data-footer")

    containPlusBtn.forEach((plusBtn , index ) => {
        plusBtn.addEventListener('click' , function(){
            containDataFooter[index].style.display = "block"

            if(containDataFooter[index].style.display = "block") {
                moins[index].style.display = "block"
                plusBtn.style.display = "none"
            }
        })
    });

    moins.forEach((element , index) => {
        element.addEventListener('click' , function(){
                containDataFooter[index].style.display = "none"

                if(containDataFooter[index].style.display = "none"){
                    element.style.display = "none"
                    containPlusBtn[index].style.display = "block"
                }
    })

        
    })

})

