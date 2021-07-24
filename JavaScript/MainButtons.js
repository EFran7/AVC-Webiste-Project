const fontChangeButton = document.querySelector('#fontChangeButton')
const fontChangeButtonDef = document.querySelector('#fontChangeButtonDef')
const darkMode = document.querySelector('#darkMode')
const defaultMode = document.querySelector('#default')
const sepiaMode = document.querySelector('#sepiaMode')
const colorVeilOn = document.querySelector('#colorVeilOn')
const colorVeilOff = document.querySelector('#colorVeilOff')

checkMode();

// Font Change Buttons

fontChangeButton.onclick = fontChange
function fontChange() {
  document.querySelector('#title').style.fontFamily = 'openDyslexic' 
  document.querySelector('#subtitle').style.fontFamily = 'openDyslexic' 
  document.querySelector('#title').style.fontSize = '45'
  document.querySelector('#subtitle').style.fontSize = '20'
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.fontFamily = 'openDyslexic'
  });
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.padding = '5 25'
  });
  document.querySelectorAll('#styHeaders h2').forEach((e) => {
    e.style.fontFamily = 'openDyslexic'
  });
  document.querySelectorAll('#styHeaders h2').forEach((e) => {
    e.style.fontSize = '35'
  });
  document.querySelectorAll('#nav li a').forEach((e) => {
    e.style.fontFamily = 'openDyslexic'
  });
  document.querySelectorAll('#nav li a').forEach((e) => {
    e.style.fontSize = '16'
  });
  document.querySelectorAll('#topbar a').forEach((e) => {
    e.style.fontFamily = 'openDyslexic'
  });
  document.querySelectorAll('#topbar a').forEach((e) => {
    e.style.fontSize = '13'
  });
  document.cookie = "mode = dysFont; expires=Fri, 22 July 2022 12:00:00 UTC";
  /* let childNode = document.querySelector('body').getElementsByTagName('*')
  console.log(childNode);
  for (let i = 0; i < childNode; i++) {
    childNode[i].fontFamily = 'openDyslexic'
    console.log(childNode[i]); 
  } */
}

fontChangeButtonDef.onclick = fontBack
function fontBack() {
  document.querySelector('#title').style.fontFamily = 'Darker Grotesque' 
  document.querySelector('#subtitle').style.fontFamily = 'Darker Grotesque' 
  document.querySelector('#title').style.fontSize = '60'
  document.querySelector('#subtitle').style.fontSize = '30'
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.fontFamily = 'Space Grotesk'
  });
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.padding = '10 30'
  });
  document.querySelectorAll('#styHeaders h2').forEach((e) => {
    e.style.fontFamily = 'Darker Grotesque'
  });
  document.querySelectorAll('#styHeaders h2').forEach((e) => {
    e.style.fontSize = '47'
  });
  document.querySelectorAll('#nav li a').forEach((e) => {
    e.style.fontFamily = 'Darker Grotesque'
  });
  document.querySelectorAll('#nav li a').forEach((e) => {
    e.style.fontSize = '22'
  });
  document.querySelectorAll('#topbar a').forEach((e) => {
    e.style.fontFamily = 'Darker Grotesque'
  });
  document.querySelectorAll('#topbar a').forEach((e) => {
    e.style.fontSize = '17'
  });
  document.cookie = "mode = defFont; expires=Fri, 22 July 2022 12:00:00 UTC";
}

// Website Style Buttons

darkMode.onclick = darkModeChange
function darkModeChange() {
  document.body.style.backgroundColor = '#0f0f0f'
  document.querySelector('#title').style.color = '#c23a3a'
  document.querySelector('#subtitle').style.color = '#c23a3a'
  document.getElementById('logo').src='Media/MainLogoDark.jpg'
  document.querySelector('#topbar').style.backgroundColor = '#333333'
  document.querySelector('#footer').style.backgroundColor = '#242424'
  document.querySelector('#facebook').style.backgroundColor = '#911f1f'
  document.querySelector('#twitter').style.backgroundColor = '#911f1f'
  document.querySelector('#insta').style.backgroundColor = '#911f1f'
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.backgroundColor = '#2e2d2d'
  });
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.border = '2px solid #262626'
  });
  document.querySelectorAll('#styHeaders h2').forEach((e) => {
    e.style.color = '#a12323'
  });
  document.querySelectorAll('#nav ul').forEach((e) => {
    e.style.backgroundColor = '#242323'
  });
  /* document.querySelectorAll('#nav li a:hover').forEach((e) => {
    e.style.backgroundColor = '#383737'
  }); */
  setMode(darkMode, 10000);
}


defaultMode.onclick = defaultModeChange
function defaultModeChange() {
  document.body.style.backgroundColor = 'white'
  document.querySelector('#title').style.color = '#b55151'
  document.querySelector('#subtitle').style.color = '#b55151'
  document.getElementById('logo').src='Media/MainLogo.jpg'
  document.querySelector('#topbar').style.backgroundColor = '#bfbbba'
  document.querySelector('#footer').style.backgroundColor = '#adaaaa'
  document.querySelector('#facebook').style.backgroundColor = '#CD5C5C'
  document.querySelector('#twitter').style.backgroundColor = '#CD5C5C'
  document.querySelector('#insta').style.backgroundColor = '#CD5C5C'
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.backgroundColor = '#a3a3a3'
  });
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.border = '2px solid #969595'
  });
  document.querySelectorAll('#styHeaders h2').forEach((e) => {
    e.style.color = '#7d3131'
  });
  document.querySelectorAll('#nav ul').forEach((e) => {
    e.style.backgroundColor = '#736f6e'
  });
  document.cookie = "mode = defaultMode; expires=Fri, 22 July 2022 12:00:00 UTC; path=/;";
}

sepiaMode.onclick = sepiaModeChange
function sepiaModeChange() {
  document.body.style.backgroundColor = '#e3caa8'
  document.querySelector('#title').style.color = '#6e4424'
  document.querySelector('#subtitle').style.color = '#6e4424'
  document.getElementById('logo').src='Media/MainLogoSepia.jpg'
  document.querySelector('#topbar').style.backgroundColor = '#e6b897'
  document.querySelector('#footer').style.backgroundColor = '#deb597'
  document.querySelector('#facebook').style.backgroundColor = '#735239'
  document.querySelector('#twitter').style.backgroundColor = '#735239'
  document.querySelector('#insta').style.backgroundColor = '#735239'
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.backgroundColor = '#b08b64'
  });
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.border = '2px solid #a6835e'
  });
  document.querySelectorAll('#styHeaders h2').forEach((e) => {
    e.style.color = '#80664a'
  });
  document.querySelectorAll('#nav ul').forEach((e) => {
    e.style.backgroundColor = '#c9946b'
  });
  document.cookie = "mode = sepiaMode; expires=Fri, 22 July 2022 12:00:00 UTC; path=/;";
}

// ColorVeil Button

colorVeilOn.onclick = colorVeilToggleOn
function colorVeilToggleOn() {
  document.querySelector('#colorVeil').style.visibility = 'visible' 
}

colorVeilOff.onclick = colorVeilToggleOff
function colorVeilToggleOff() {
  document.querySelector('#colorVeil').style.visibility = 'hidden' 
}

// Cookies

/* function loadCookies() {
  document.cookie = "mode = defaultMode; expires=Fri, 22 July 2022 12:00:00 UTC  path=/;";
} */

/* function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkMode() {
  console.log('This has been reached');
  let pageMode = getCookie('mode');
  console.log(pageMode);
  if (pageMode == "sepiaMode") {
    sepiaModeChange();
  } 
  if (pageMode == "defaultMode") {
    defaultModeChange();
  }
  if (pageMode == "darkMode") {
    darkModeChange();
  }
}

function setMode(cookieName, expDate) {
  const d = new Date();
  d.setTime(d.getTime() + (expDate*24*60*60*1000));
  let exp = "expires" + d.toUTCString();
  document.cookie = "mode =" + cookieName + ";" + exp + ";path=/";
  console.log('Reached') 
} */

  // Local Storage

localStorage.setItem('mode', 'darkMode');


