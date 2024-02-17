const cards = document.querySelectorAll('.card')

let count = 1;
let totalPrice = 0
for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
    console.log(card);
    card.addEventListener('click', function () {

        const titel = card.querySelector('h3').innerText;
        const pricetitel = card.querySelector('span').innerText
        // console.log(titel.innerText);

        const titelContainer = document.getElementById('title-container')
        const p = document.createElement('p')
        p.innerText = count + ' . ' + titel + " - " + pricetitel;
        titelContainer.appendChild(p)
        count++;
        console.log(titelContainer);


        const pricelist = card.querySelector('span').innerText.split(' ')[1]
        const price = parseFloat(pricelist)
        totalPrice += price
        console.log(totalPrice);
        const totalPriceValue = document.getElementById('totalPrice')
        totalPriceValue.innerText = ' ' + totalPrice;
    })
}

const applyBtn = document.getElementById('apply-btn')
const inputFileds = document.getElementById('input-field')
// const inputValues=inputFileds.value;
// // const inputType = inputFileds.value.split('').length
// // console.log(inputType);
// // if (inputType === 0){
// //     const applyBtn = document.getElementById('apply-btn')
// //     applyBtn.removeAttribute('disabled')
// }
// console.log(inputValues);
applyBtn.addEventListener('click', function () {
    const inputFiled = document.getElementById('input-field').value.split(' ').join('').toUpperCase()
    console.log(inputFiled);

    if (totalPrice >= 200) {
        if (inputFiled === 'SELL200') {
            const discountprice = (totalPrice * 0.20).toFixed(2)
            const discounPriceTitel=document.getElementById('discountPrice')
            discounPriceTitel.innerText=discountprice;

            const total=totalPrice-discountprice;
            const totalFinal=document.getElementById('total')
            totalFinal.innerText=total
        }
        else {
            alert('Invalid Code')
        }
    }
    else {
        alert('Your Total Price Must Be $200')
    }
})


const makePurchase=document.getElementById('make-purchase')
makePurchase.addEventListener('click',function(){
    const hideHeader=hideElementById('header')
    const hideMain=hideElementById('main')
    const showSec=showElementById('sec-last')

})

function hideElementById(elementId){
    const element=document.getElementById(elementId)
    const hidelements=element.classList.add('hidden')
    return hidelements
}
function showElementById(elementId){
    const element=document.getElementById(elementId)
    const showelements=element.classList.remove('hidden')
    return showelements
}