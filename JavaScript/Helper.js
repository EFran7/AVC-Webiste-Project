let localStorage = window.localStorage;

function changeTheme() {
    if (localStorage.getItem('mode') === 'darkMode') {
        darkModeChange();
    }
}

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
  }

  changeTheme();