const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phoneNumber');
const postcode = document.querySelector('#postCode');
const password = document.querySelector('#password');
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const postalCodeFormat = /^[0-9]{5}/;
const phoneFormat = /^(?:\+?3584|0)([0-9]){8}$/;

function validation() {
  if (firstname.value == '') {
    alert('Please enter First Name');
    return false;
  }
  else if (lastname.value == '') {
    alert('Please enter Last Name');
    return false;
  }
  else if (!email.value.match(mailFormat)) {
    alert('Please enter valid Email');
    return false;
  }
  else if (!phone.value.match(phoneFormat)) {
    alert('Please enter valid Phone Number');
    return false;
  }
  else if (!postcode.value.match(postalCodeFormat)) {
    alert('Please enter valid Postal Code');
    return false;
  }
  else if (password.value == '') {
    alert('Please enter a Password');
    return false;
  }
  else return true;
}






