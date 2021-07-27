function colorVeilToggleOn() {
  document.querySelector('#colorVeil').style.visibility = 'visible' 
}

function colorVeilToggleOff() {
  document.querySelector('#colorVeil').style.visibility = 'hidden' 
}

export {
    colorVeilToggleOn, 
    colorVeilToggleOff
};