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
}

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
}

//Exports

export {
    fontChange, 
    fontBack
};
