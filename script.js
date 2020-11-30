// bring everything from dom
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
// show success otuline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
// check email is valid
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// check required field
function chechRquired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input,`${getFieldName(input)} is required`);
    }else{
      showSuccess(input);
    }
    // console.log(input.value);
  });
}
// get field name
function getFieldName(input){
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
// EventListener
form.addEventListener('submit', function (e){
  e.preventDefault();
  // console.log('submit');
  // console.log(username.value);
  chechRquired([username, email, password, password2]);
  // if (username.value === ''){
  //   showError(username,'username is required');
  // }else{
  //   showSuccess(username);
  // }
  // if (email.value === ''){
  //   showError(email,'Email is required');
  // } else if(!isValidEmail(email.value)){
  //   showError(email,'Email is not valid');
  // }else{
  //   showSuccess(email);
  // }
  // if (password.value === ''){
  //   showError(password,'Password is required');
  // }else{
  //   showSuccess(password);
  // }
  // if (password2.value === ''){
  //   showError(password2,'Password2 is required');
  // }else{
  //   showSuccess(password2);
  // }
});