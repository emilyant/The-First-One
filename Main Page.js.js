let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let btnShowCart= document.querySelector('.btnShowCart');
 ItemsClosetHTML= document.querySelector('.ItemsCloset');
//let outfitItemsCartHTML= document.querySelector('.OutfitItems')

//let ItemsCloset = [];
//let cart=[];

/*Open cart*/
btnShowCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
/*Close cart*/
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready();
}

//Remove items from Outfit Cart
function ready(){
    let removeOutfitBtn=document.getElementsByClassName('cart-remove');
    console.log(removeOutfitBtn);
    for (let i=0;i<removeOutfitBtn.length; i++){
        let btn=removeOutfitBtn[i];
        btn.addEventListener('click', removeOutfitItem);
    }
//Add to Outfit Cart
    let addToOutfitCart = document.getElementsByClassName('AddToOutfit');
    for (let i=0;i<addToOutfitCart.length; i++){
        let btn= addToOutfitCart[i];
        btn.addEventListener("click", addToOutfitCartClicked)
    }
    //Create Outfit Btn work
    document.getElementsByClassName('CreateOutfit')[0]
    .addEventListener("click", createOutfitBtnClicked);
}

//Create Outfit Btn
function createOutfitBtnClicked(){
    alert ('Your Outfit is created');
    let allCartContent = document.getElementsByClassName('OutfitItems')[0]
    while (allCartContent.hasChildNodes()){
        allCartContent.removeChild(allCartContent.firstChild)
    }
}

//Remove items from Outfit Cart
function removeOutfitItem (event){
    let btnClicked=event.target;
    btnClicked.parentElement.remove();
}

//Add to Outfit Cart
function addToOutfitCartClicked (event){
    let btn= event.target;
    let OutfitItems= btn.parentElement
    let title= OutfitItems.getElementsByClassName('NameItem')[0].innerText;
    let image= OutfitItems.getElementsByClassName('Item-img')[0].src;
    addItemtoCart(title, image);
}
function addItemtoCart (title, image){
    let cartItem= document.createElement ('div');
    cartItem.classList.add('ItemClone');
    let cartItemsOutfit= document.getElementsByClassName('OutfitItems')[0];
    let cartItemsNames= cartItemsOutfit.getElementsByClassName('cart-name');
    for (let i=0;i<cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText==title){
            alert ("You have already add this item to Your Outfit");
            return;
    }
}

let OutfitCartContent= `
        <div class="Img">
            <img src=${image} alt="" class="cart-img">
        </div>
        <div class="cart-name">
            ${title}
        </div>
        <i class='bx bxs-trash-alt cart-remove'>
        </i>`;

cartItem.innerHTML=OutfitCartContent;
cartItemsOutfit.append(cartItem);
cartItem.getElementsByClassName('cart-remove')[0]
.addEventListener('click', removeOutfitItem);
};