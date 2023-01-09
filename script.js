/*globais*/
let finalPrice;
let plateTxt , drinkTxt , dessertTxt;
let wpp;
let platePrice , drinkPrice, dessertPrice;

//selecionar prato//
function selectPlate(plateSelect, selectTxt){
    const plateAlreadySelected = document.querySelector('.plates .green');

    if ( plateAlreadySelected !== null){
        plateAlreadySelected.classList.remove('green');
    }
    plateSelect.classList.add('green');

    const plateName = document.querySelector('.itemname').innerHTML;
    plateTxt = plateName;
    const pPrice = document.querySelector('.price').innerHTML;
    platePrice = pPrice;


    openCloseOrder()
}
//selecionar bebida//
function selectDrink(drinkSelect){
    const drinkAlreadySelected = document.querySelector('.drinks .green');
    if ( drinkAlreadySelected !== null){
        drinkAlreadySelected.classList.remove('green');
    }
    drinkSelect.classList.add('green');

    const drinkName = document.querySelector('.itemname').innerHTML;
    drinkTxt = drinkName
    const dPrice = document.querySelector('.price').innerHTML;
    drinkPrice = dPrice;

    openCloseOrder()
}

//selecionar sobremesa//
function selectDessert(dessertSelect){
    const dessertAlreadySelected = document.querySelector('.desserts .green');
    if(dessertAlreadySelected !== null){
        dessertAlreadySelected.classList.remove('green');
    }
    dessertSelect.classList.add('green');

    const dessertName = document.querySelector('.itemname').innerHTML;
    dessertTxt = dessertName;
    const dsPrice = document.querySelector('.price').innerHTML;
    dessertPrice = dsPrice;

    openCloseOrder()
}

function openCloseOrder(){
    if(plateTxt !== undefined){
        if(drinkTxt !== undefined){
            if(dessertTxt !== undefined){
                const button = document.querySelector('.closeButton');
                button.classList.add('close-green');
                button.innerHTML = 'Fechar Pedido';
                
            }
        }
    }
}
function closeOrder(){
    if(plateTxt !== undefined){
        if(drinkTxt !== undefined){
            if(dessertTxt !== undefined){

                platePrice = platePrice.replace('R$ ','');
                drinkPrice = drinkPrice.replace('R$ ','');
                dessertPrice = dessertPrice.replace('R$ ','');

                platePrice = platePrice.replace(',','.');
                platePrice = platePrice.replace(',','.');
                platePrice = platePrice.replace(',','.');

                finalPrice = Number(platePrice) + Number(drinkPrice) + Number(dessertPrice);

                
                const greyscreen = document.querySelector('.grey-screen');
                greyscreen.classList.remove('hidden')

                wpp = `Olá, gostaria de fazer o pedido:
                Prato:${plateTxt}
                Bebida:${drinkTxt}
                Sobremesa:${dessertTxt}
                Total: R$${finalPrice.toFixed(2)}`;

                const elementPlate = document.querySelector('.plate .name');
                elementPlate.innerHTML = plateTxt;

                const elementPPrice = document.querySelector('.plate .price');
                elementPPrice.innerHTML = platePrice;

                const elementDrink = document.querySelector('.drink .name');
                elementDrink .innerHTML = drinkTxt;
                const elementPDrink = document.querySelector('.drink .price');
                elementPDrink.innerHTML = drinkPrice;

                const elementDessert = document.querySelector('.dessert .name');
                elementDessert.innerHTML = dessertTxt;
                const elementPDessert = document.querySelector('.dessert .price');
                elementPDessert.innerHTML = dessertPrice;

                const elementTotal = document.querySelector('.total .amount');
                elementTotal.innerHTML = `R$ ${finalPrice.toFixed(2)}`;

            }
        }
    }
}

function sendWpp(){
    
    const name = prompt('Seu nome');
    const adress = prompt('Seu endereco');
    wpp = wpp + `Nome: ${name} Endereco: ${adress}`;
    const msgWP = encodeURIComponent(wpp);
    window.open(`http://wa.me/99999999999?text=${msgWP}`);
}
