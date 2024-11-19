export function initializeCartIcon() {

    const cartCountElement = document.querySelector('.header__cart');
    const counterValue = document.querySelector(".header__counter")
    if(cartCountElement){
        cartCountElement.addEventListener("click", ()=>{
            console.log(cartCountElement)
            console.log(counterValue)
        })
    }


}