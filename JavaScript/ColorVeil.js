function colorVeilToggleOn() {
  document.querySelector('#colorVeil').style.visibility = 'visible' 
  console.log('reached')
}

function colorVeilToggleOff() {
  document.querySelector('#colorVeil').style.visibility = 'hidden' 
}

export {
    colorVeilToggleOn, 
    colorVeilToggleOff
};