import { fontChange, fontBack } from "./fonts.js";
import { defaultModeChange, darkModeChange, sepiaModeChange } from "./themes.js";
import { colorVeilToggleOn, colorVeilToggleOff, } from "./ColorVeil.js";

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
        break;
      default:
        colorVeilToggleOff();
        break;
    }
  })()