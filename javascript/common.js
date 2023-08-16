console.log('welcome');
function getInputFieldValue(inputField){
    const inputValueTerget = document.getElementById(inputField);
    const inputValue = parseFloat(inputValueTerget.value) ;
    inputValueTerget.value = '';
    return inputValue;

}

function getPreviousValue (exixtanceValue){
    const exixtanceValueHas = document.getElementById(exixtanceValue);
    const finalExixtanceValue = parseFloat(exixtanceValueHas.innerText);
    exixtanceValueHas.value = '';
    return finalExixtanceValue;

}
 function changinginnerText(elementId,newValue){
    const changesElement = document.getElementById(elementId);
    changesElement.innerText = newValue;
 }