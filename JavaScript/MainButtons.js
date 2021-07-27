import { fontChange, fontBack } from "./fonts.js";
import { defaultModeChange, darkModeChange, sepiaModeChange } from "./themes.js";
import { colorVeilToggleOn, colorVeilToggleOff, } from "./ColorVeil.js";

const fontChangeButton = document.querySelector('#fontChangeButton')
const fontChangeButtonDef = document.querySelector('#fontChangeButtonDef')
const darkMode = document.querySelector('#darkMode')
const defaultMode = document.querySelector('#default')
const sepiaMode = document.querySelector('#sepiaMode')
const colorVeilOn = document.querySelector('#colorVeilOn')
const colorVeilOff = document.querySelector('#colorVeilOff')

let localStorage = window.localStorage;

(function loadThemes() {
  const theme = localStorage.getItem('theme');
  const font = localStorage.getItem('font');
  const colVeil = localStorage.getItem('colVeil');
  switch(font) {
    case 'dysFont': 
      fontChange();
      break;
    default:
      fontBack();
      break;
  }
  switch(theme) {
    case 'darkMode':
      darkModeChange();
      break;
    case 'sepiaMode':
      sepiaModeChange();
      break;
    default:
      defaultModeChange();
      break;
  }
  switch(colVeil) {
    case 'colorVeilOn':
      colorVeilToggleOn();
    default:
      colorVeilToggleOff();
  }
})()

fontChangeButton.onclick = function setDysfont() {
  localStorage.setItem('font','dysFont');
  location.reload();
}

fontChangeButtonDef.onclick = function setDefFont() {
  localStorage.setItem('font','defFont');
  location.reload();
}

darkMode.onclick = function setDarkMode() {
  localStorage.setItem('theme','darkMode');
  location.reload();
}

defaultMode.onclick = function setDefMode() {
  localStorage.setItem('theme','defMode');
  location.reload();
}

sepiaMode.onclick = function setSepiaMode() {
  localStorage.setItem('theme','sepiaMode');
  location.reload();
}

colorVeilOn.onclick = function setColorVeilOn() {
  localStorage.setItem('colVeil','colorVeilOn');
  location.reload();
  console.log('r');
}

colorVeilOff.onclick = function setColorVeilOff() {
  localStorage.setItem('colVeil','colorVeilOff');
  location.reload();
}

// imports






