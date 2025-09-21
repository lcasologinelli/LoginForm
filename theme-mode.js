const themeSelected = document.querySelector(".pokemon-theme-container");
themeSelected.addEventListener("click", setTheme);

function setTheme(e){
  // passing the second className of the image which is the same name of the theme name (string)
  changeTheme(e.target.className.split(" ")[1]);
  window.scrollTo(0,0);
}

function changeTheme(newTheme) {
  const root = document.documentElement;
  root.className = newTheme;
}
