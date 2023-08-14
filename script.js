console.log('hello bangladesh');
document.getElementById('btn-click').addEventListener('click',function(){
    const emailStore = document.getElementById('user-email');
    const email = emailStore.value;
    const passwordStore = document.getElementById('user-password');
    const password = passwordStore.value;
    if(email === 'saikat@gmail.com' && password === 'saikat90'){
       window.location.href = 'bank.html'
    }
    else{
        alert('invalid user')
    }
    
    console.log(email,password);
})