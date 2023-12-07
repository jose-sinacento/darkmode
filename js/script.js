const toggleDiv = document.getElementsByClassName('toggle').item(0);

toggleDiv.addEventListener('click', switchTheme);

function switchTheme() {
  // vamos a añadir la clase 'dark-theme' al tag <html>
  const htmlTagElement = document.getElementsByTagName('html').item(0);
  const toggleBtnImg = document.getElementsByTagName('img').item(0);

  htmlTagElement.classList.toggle('dark-theme');
  
  if (htmlTagElement.classList.contains('dark-theme')) {
    toggleBtnImg.src = "assets/img/luna.png";
  } else {
    toggleBtnImg.src = "assets/img/sol.png";
  }
}

