console.log('welcome');
document.getElementById('btn-click-withdraw').addEventListener('click',function(){
    const newWithdrawValue = getInputFieldValue('withdraw-amount');
    changinginnerText('withdraw-previous',newWithdrawValue)
    console.log(newWithdrawValue);
    const previousWithdrawValue = getPreviousValue ('withdraw-previous');
    const finalWithdrawValue = newWithdrawValue + previousWithdrawValue ;
    console.log(finalWithdrawValue);
    const previousTotalBanlace = getPreviousValue('balance-previous');
    const finalVerdict = previousTotalBanlace - newWithdrawValue ;
    changinginnerText('balance-previous',finalVerdict)
    console.log(finalVerdict);
    
})