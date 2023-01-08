/*globais*/
let finalPrice;

let plateTxt;
let drinkTxt;
let dessertTxt;

let wpp;

let platePrice;
let drinkPrice;
let dessertPrice;

//selecionar prato//
function selectPlate(plateSelect, nameSelector){
    const plateAlreadySelected = document.querySelector('.plates .green');

    if ( plateAlreadySelected !== null){
        plateAlreadySelected.classList.remove('green');
    }
    const selectedPlate = document.querySelector(plateSelect);
    selectedPlate.classList.add('green');

    const itemName = document.querySelector(nameSelector+ '.item-name');
    const itemName = document.querySelector(nameSelector+ '.item-name');

    closeOrder()
}
//selecionar bebida//
function selectDrink(drinkSelect){
    const drinkAlreadySelected = document.querySelector('.drinks .green');
    if ( drinkAlreadySelected !== null){
        drinkAlreadySelected.classList.remove('green');
    }

    const selectedDrink = document.querySelector(drinkSelect);
    selectedDrink.classList.add('green');
    closeOrder()
}

//selecionar sobremesa//
function selectDessert(dessertSelect){
    const dessertAlreadySelected = document.querySelector('.desserts .green');
    if(dessertAlreadySelected !== null){
        dessertAlreadySelected.classList.remove('green');
    }
    const selectedDessert = document.querySelector(dessertSelect);
    selectedDessert.classList.add('green');
    closeOrder()
}

function closeOrder(){
    plateSelected.classList.contains('green');
    drinkSelected.classList.contains('green');
    dessertSelected.classList.contains('green');

    if(dessertSelected & drinkSelected & plateSelected === true){
            const closeButton = document.querySelector('.closeButton');
            closeButton.innerHTML = 'Fechar Pedido';
 
    }
}
