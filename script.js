
function submitInfo() {
    var firstname='';
    var lastname ='';
    var email ='';
    var password='';

    firstname=document.getElementById('firstname').value;
    lastname=document.getElementById('lastname').value;
    email=document.getElementById('email').value;
    password=document.getElementById('password').value;
    console.log('first Name:'+ firstname);
    console.log('Last Name: + lastname');
    console.log('Email:'+ email);
    console.log('Password:' + password);

    if (firstname ==''|| lastname==''||email==''||password==''){
        alert('input Missing Field');
    }
    else{
        alert('form has been submitted');
    }
}