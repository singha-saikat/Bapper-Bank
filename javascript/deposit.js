console.log('welcome');
document.getElementById('btn-click-deposit').addEventListener('click',function(){
    const newDepositValue = getInputFieldValue('deposit-amount');
    console.log(newDepositValue);
    const previousDepositValue = getPreviousValue('deposit-hundle');
    console.log(previousDepositValue);
    const finalDepositValue = newDepositValue + previousDepositValue ;
    changinginnerText('deposit-hundle',finalDepositValue);
    console.log(finalDepositValue);
    const previousTotalBanlace = getPreviousValue('balance-previous');
    console.log(previousTotalBanlace);
    const finalVerdict = newDepositValue + previousTotalBanlace ;
    changinginnerText('balance-previous',finalVerdict);
    console.log(finalVerdict);

})