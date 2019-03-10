// // Phone Mask
$(document).ready(function() {
  $('#phone').mask('+7 999 999 9999', { autoclear: false });
});

// Change form with success input
function submitForm() {
  $('#form-text').remove();
  $('.btn-submit-form-back').remove();
  $('#phone').remove();

  const newText = document.createElement('p');
  newText.innerText = 'Спасибо, что оставили заявку. Мы скоро вам перезвоним.';
  const parent = document.querySelector('.phone-box-form');
  newText.classList.add('text-submited-form');
  const btnSubmit = document.querySelector('.btn-submit-form');
  btnSubmit.style.background = '#DAE0E5';
  btnSubmit.style.boxShadow = 'none';
  parent.append(newText);
}

const phone = document.querySelector('#phone');
const formInput = document.querySelector('#form');
const numberNotify = document.querySelector('.number-notify');

// Style Phone Input
function invlaidInput() {
  phone.classList.toggle('invalid');
  numberNotify.textContent = 'Проверьте набранный номер';
  setTimeout(function() {
    phone.classList.toggle('invalid');
    numberNotify.textContent = 'Контактный телефон';
  }, 1000);
}

//Validate Phone Input
formInput.addEventListener('submit', function(e) {
  const contain = phone.value.indexOf('_') !== -1;
  if (!contain) {
    submitForm();
  } else {
    e.preventDefault();
    invlaidInput();
  }
});

// Camera Popup
const cameraBox = document.querySelector('#camera-box');
const popupCamera = document.querySelector('#popup-camera');
const popupCameraWrapper = document.querySelector('.popup-camera-wrapper');
const cameraPopupBtn = document.querySelector('.camera-popup-btn');

cameraBox.addEventListener('click', function() {
  popupCameraWrapper.classList.add('show-popup');
});
popupCameraWrapper.addEventListener('click', function() {
  popupCameraWrapper.classList.remove('show-popup');
});
popupCamera.addEventListener('click', function(e) {
  e.stopPropagation();
});
cameraPopupBtn.addEventListener('click', function() {
  popupCameraWrapper.classList.remove('show-popup');
});

// Phone Popup
const phoneBox = document.querySelector('#phone-box');
const popupPhone = document.querySelector('#popup-phone');
const popupPhoneWrapper = document.querySelector('.popup-phone-wrapper');
const phonePopupBtn = document.querySelector('.phone-popup-btn');

phoneBox.addEventListener('click', function() {
  popupPhoneWrapper.classList.add('show-popup');
});
popupPhoneWrapper.addEventListener('click', function() {
  popupPhoneWrapper.classList.remove('show-popup');
});
popupPhone.addEventListener('click', function(e) {
  e.stopPropagation();
});
phonePopupBtn.addEventListener('click', function() {
  popupPhoneWrapper.classList.remove('show-popup');
});
