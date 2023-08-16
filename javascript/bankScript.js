
console.log("welcome");
let sum = 0; 
// deposit part
document.querySelector('#btn-click-deposit').addEventListener('click',function(){
    const depositStore = document.querySelector('#deposit-amount');
    const depositAmountString = depositStore.value ;
    const depositAmount = parseFloat(depositAmountString)
    console.log(typeof(depositAmount));

    
    const depositPrevious = document.querySelector('#deposit-hundle');
    const depositPreviousValueString = depositPrevious.innerText;
    const depositPreviousValue = parseFloat(depositPreviousValueString);
    console.log(typeof(depositPreviousValue ));

    const finalResult = depositPreviousValue + depositAmount;
   
    
    // const finalResult = parseInt (sum) + depositAmount;
    // depositPrevious.innerText = depositAmount ;
    console.log(finalResult);
    depositPrevious.innerText = finalResult;
    depositStore.value ='';
     const previousBalance = document.getElementById('balance-previous');
     const previousBalanceValue = parseFloat(previousBalance.innerText);
     console.log(previousBalanceValue);
     console.log(typeof (previousBalanceValue));
     const lastResult = previousBalanceValue + depositAmount ;
     previousBalance.innerText = lastResult;
    
})
// withdraw part
document.querySelector('#btn-click-withdraw').addEventListener('click',function(){
    const withdrawStore = document.querySelector('#withdraw-amount');
    const withdrawAmount = parseFloat (withdrawStore.value) ;
   
    const withdrawPrevious = document.getElementById('withdraw-previous');
    
    const withdrawPreviousValueString = withdrawPrevious.innerText;
    
    const withdrawPreviousValue = parseFloat(withdrawPreviousValueString);
    

    
    withdrawStore.value = '' ;
    const previousBalance = document.getElementById('balance-previous');
    const previousBalanceValue = parseFloat(previousBalance.innerText);
    if(withdrawAmount > previousBalanceValue){
        alert('Insufficient balance');
        return;
    }
    const finalVerdict = withdrawPreviousValue + withdrawAmount ;
    
    withdrawPrevious.innerText = finalVerdict ;
    console.log(previousBalanceValue);
    console.log(typeof (previousBalanceValue));
    const lastResult = previousBalanceValue - withdrawAmount ;
    previousBalance.innerText = lastResult;

})
 
