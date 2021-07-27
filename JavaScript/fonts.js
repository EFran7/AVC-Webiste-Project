function fontChange() {
  document.querySelector('#title').style.fontFamily = 'openDyslexic' 
  document.querySelector('#subtitle').style.fontFamily = 'openDyslexic' 
  // document.querySelector('#welcheader1').style.fontFamily = 'openDyslexic' 
  document.querySelector('#title').style.fontSize = '45px'
  document.querySelector('#subtitle').style.fontSize = '20px'
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.fontFamily = 'openDyslexic'
  });
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.padding = '5px 25px'
  });
  document.querySelectorAll('#styHeaders h2').forEach((e) => {
    e.style.fontFamily = 'openDyslexic'
  });
  document.querySelectorAll('#styHeaders h2').forEach((e) => {
    e.style.fontSize = '35px'
  });
  document.querySelectorAll('#nav li a').forEach((e) => {
    e.style.fontFamily = 'openDyslexic'
  });
  document.querySelectorAll('#nav li a').forEach((e) => {
    e.style.fontSize = '16px'
  });
  document.querySelectorAll('#topbar a').forEach((e) => {
    e.style.fontFamily = 'openDyslexic'
  });
  document.querySelectorAll('#topbar a').forEach((e) => {
    e.style.fontSize = '13px'
  });
}

function fontBack() {
  document.querySelector('#title').style.fontFamily = 'Darker Grotesque' 
  document.querySelector('#subtitle').style.fontFamily = 'Darker Grotesque' 
  document.querySelector('#title').style.fontSize = '60px'
  document.querySelector('#subtitle').style.fontSize = '30px'
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.fontFamily = 'Space Grotesk'
  });
  document.querySelectorAll('#styButtons button').forEach((e) => {
    e.style.padding = '10px 30px'
  });
  document.querySelectorAll('#styHeaders h2').forEach((e) => {
    e.style.fontFamily = 'Darker Grotesque'
  });
  document.querySelectorAll('#styHeaders h2').forEach((e) => {
    e.style.fontSize = '47px'
  });
  document.querySelectorAll('#nav li a').forEach((e) => {
    e.style.fontFamily = 'Darker Grotesque'
  });
  document.querySelectorAll('#nav li a').forEach((e) => {
    e.style.fontSize = '22px'
  });
  document.querySelectorAll('#topbar a').forEach((e) => {
    e.style.fontFamily = 'Darker Grotesque'
  });
  document.querySelectorAll('#topbar a').forEach((e) => {
    e.style.fontSize = '17px'
  });
}

//Exports

export {
    fontChange, 
    fontBack
};
