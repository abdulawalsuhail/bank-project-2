
// deposit and withdraw sort version
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
   const amountValue =  parseFloat(inputField.value) ;
   inputField.value = '';
   return amountValue;
    
}

// tatal amount + kore ja pabo
function updateTotalField(totalFieldId, amount){
    const totalElement=document.getElementById(totalFieldId);
   const totalText =  parseFloat(totalElement.innerText);
   totalElement.innerText = totalText + amount;
}

function getCurrentBalance(){
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText = parseFloat(balanceTotal.innerText);
    return balanceTotalText;
}
//  Shared Balance update function
function balanceTotalField(amountBalance, isAdd){
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalText + amountBalance;
    }else{
        balanceTotal.innerText = balanceTotalText - amountBalance;
    }

}


document.getElementById('deposit-button').addEventListener('click', function(){
     const depositAmount = getInputValue('deposit-input');
     if(depositAmount > 0){
        updateTotalField('deposit-total',depositAmount);
        balanceTotalField(depositAmount, true);
     }
     
});

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount>0 && withdrawAmount<currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        balanceTotalField(withdrawAmount, false)
    }
    if(withdrawAmount>currentBalance){
        alert('You can not withdraw more than what you have in your account!!');
    }
    
});