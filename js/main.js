popupPhoneHide();
popupCameraHide();

// Phone Mask
$(document).ready(function() {
  $('#phone').mask('+7 999 999 9999');
});

// Popup Functions
function popupCameraHide() {
  $('.popup-camera-wrapper').hide();
}

function popupCameraShow() {
  $('.popup-camera-wrapper').show();
}

function popupPhoneHide() {
  $('.popup-phone-wrapper').hide();
}

function popupPhoneShow() {
  $('.popup-phone-wrapper').show();
}

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

// Listeners
$('#popup-camera').click(function(e) {
  e.stopPropagation();
});

$('#popup-phone').click(function(e) {
  e.stopPropagation();
});

$('#form').submit(submitForm);

$('.camera-popup-btn').click(popupCameraHide);
$('.phone-popup-btn').click(popupPhoneHide);

$('#camera-box').click(popupCameraShow);
$('.popup-camera-wrapper').click(popupCameraHide);

$('#phone-box').click(popupPhoneShow);
$('.popup-phone-wrapper').click(popupPhoneHide);
