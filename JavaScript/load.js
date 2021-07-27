import { fontChange, fontBack } from "./fonts.js";
import { defaultModeChange, darkModeChange, sepiaModeChange } from "./themes.js";

(function loadThemes() {
    const theme = localStorage.getItem('theme');
    const font = localStorage.getItem('font');
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
  })()