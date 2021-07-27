function darkModeChange() {
  document.body.style.backgroundColor = '#0f0f0f'
  document.querySelector('#title').style.color = '#c23a3a'
  document.querySelector('#subtitle').style.color = '#c23a3a'
  document.getElementById('logo').src='/Media/MainLogoDark.jpg'
  document.querySelector('#topbar').style.backgroundColor = '#333333'
  document.querySelector('#footer').style.backgroundColor = '#242424'
  document.querySelector('#facebook').style.backgroundColor = '#911f1f'
  document.querySelector('#twitter').style.backgroundColor = '#911f1f'
  document.querySelector('#insta').style.backgroundColor = '#911f1f'
  // document.querySelector('#welcheader1').style.backgroundColor = 'blue'
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
}


function defaultModeChange() {
  document.body.style.backgroundColor = 'white'
  document.querySelector('#title').style.color = '#b55151'
  document.querySelector('#subtitle').style.color = '#b55151'
  document.getElementById('logo').src='/Media/MainLogo.jpg'
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
}

function sepiaModeChange() {
  document.body.style.backgroundColor = '#e3caa8'
  document.querySelector('#title').style.color = '#6e4424'
  document.querySelector('#subtitle').style.color = '#6e4424'
  document.getElementById('logo').src='/Media/MainLogoSepia.jpg'
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
}

// exports

export {
    darkModeChange,
    defaultModeChange,
    sepiaModeChange
}