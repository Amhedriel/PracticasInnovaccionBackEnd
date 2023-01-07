function moverPosicionRandom(elm){
  elm.style.position = 'absolute';
  elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
  elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexy = document.getElementsByClassName("modo__sexy")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e) {
  alert('sabía que me aceptarías. TE AMO!!! 💕')
  
  divModoSexy.style.display = 'block';
  const cancion = new Audio('./music/MarvinGaye-SexualHealing.mp3');
  console.log(cancion);
  cancion.play();

  
});
