const buttonDetails = document.getElementById('buttonDetails');
const popupDetails = document.querySelector('#popupDetails');
const close = document.querySelector('#close');

function showPopup(popup) {
    popup.classList.add('openPopup');
}

function hidePopup(popup) {
    popup.classList.remove('openPopup');
}

buttonDetails.addEventListener('click', () => {
    showPopup(popupDetails);
    buttonDetails.blur();
});

close.addEventListener('click', () => hidePopup(popupDetails));

document.addEventListener('keyup', (e) => {
    if (e.code == 'Escape' && getComputedStyle(popupDetails).visibility == 'visible') {
        hidePopup(popupDetails);
    }
})

popupDetails.addEventListener('click', (e) => {
    if (!e.target.closest('.popup')) {
        hidePopup(e.target.closest('.overlay'));
    }
})



